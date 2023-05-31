"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
/**
 * QCObjects SDK 2.4
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
 */
(function () {
    "use strict";
    (0, qcobjects_1.Package)("org.qcobjects.controllers.list", [
        class ListController extends qcobjects_1.Controller {
            constructor({ component, dependencies = [], valueField = undefined, labelField = undefined }) {
                super({ component, dependencies, valueField, labelField });
                this.component = component;
                this._componentRoot = (this.component.shadowed) ? (this.component.shadowRoot) : (this.component.body);
                this.labelField = this.component.body.getAttribute("label-field");
                this.valueField = this.component.body.getAttribute("value-field");
                this.rows = this.component.body.getAttribute("rows");
                this.rows = (this.rows !== null) ? (this.rows) : (this.component.rows);
                this.cols = 1;
                qcobjects_1.logger.debug("ListController INIT");
            }
            getPageIndex(page, totalPage, totalElements) {
                page = (page > 0) ? (page - 1) : (0);
                return [totalElements * page / totalPage, (totalElements * page / totalPage) + totalElements / totalPage];
            }
            addSubcomponents() {
                this.component.subcomponents = [];
                const layout = this.component.body.getAttribute("layout");
                const basePath = qcobjects_1.CONFIG.get("listBasePath", qcobjects_1.CONFIG.get("remoteSDKPath", ""));
                let cssLayout = "";
                this.labelField = this.component.body.getAttribute("label-field");
                this.valueField = this.component.body.getAttribute("value-field");
                if (layout === "horizontal") {
                    cssLayout = `@import url("${basePath}css/components/horizontal-list.css");`;
                }
                else {
                    cssLayout = `@import url("${basePath}css/components/list.css");`;
                }
                if (typeof this._componentRoot !== "undefined") {
                    this._componentRoot.innerHTML = `<style>${cssLayout}</style><ul></ul>`;
                }
                qcobjects_1.logger.debug((0, qcobjects_1._DataStringify)(this.component.data));
                try {
                    const subcomponentClass = this.component.body.getAttribute("subcomponentClass");
                    if (subcomponentClass != null) {
                        let offset;
                        let limit;
                        let pagesNumber;
                        let list = [...this.component.data];
                        let paginateIn = this.component.body.getAttribute("paginate-in");
                        paginateIn = (paginateIn !== null) ? (paginateIn) : ("client");
                        let page;
                        if (paginateIn === "client") {
                            page = this.component.body.getAttribute("page-number");
                            page = (isNaN(page) || page === null) ? (-1) : (page);
                            if (page !== -1) {
                                pagesNumber = this.component.body.getAttribute("total-pages");
                                pagesNumber = (isNaN(pagesNumber)) ? (1) : (pagesNumber);
                                offset = this.getPageIndex(page, pagesNumber, list.length)[0];
                                limit = this.getPageIndex(page, pagesNumber, list.length)[1];
                            }
                            else {
                                offset = 0;
                                limit = list.length;
                                pagesNumber = 1;
                            }
                            list = list.slice(offset, limit);
                        }
                        else {
                            offset = 0;
                            limit = list.length;
                            pagesNumber = 1;
                        }
                        list.map((record, dataIndex) => {
                            const _ret_ = undefined;
                            try {
                                const _body = (0, qcobjects_1._DOMCreateElement)("li");
                                record.label = record[this.labelField];
                                record.value = record[this.valueField];
                                const subcomponent = (0, qcobjects_1.New)((0, qcobjects_1.ClassFactory)(subcomponentClass), {
                                    name: "list-item",
                                    data: {
                                        label: record[this.labelField],
                                        value: record[this.valueField],
                                        __dataIndex: dataIndex,
                                        __page: page,
                                        __totalPages: pagesNumber,
                                        __limit: limit,
                                        __offset: offset
                                    },
                                    templateURI: (0, qcobjects_1.ComponentURI)({
                                        "COMPONENTS_BASE_PATH": qcobjects_1.CONFIG.get("componentsBasePath", ""),
                                        "COMPONENT_NAME": (0, qcobjects_1.ClassFactory)(subcomponentClass).name,
                                        "TPLEXTENSION": qcobjects_1.CONFIG.get("tplextension", ""),
                                        "TPL_SOURCE": (0, qcobjects_1.ClassFactory)(subcomponentClass).tplsource
                                    }),
                                    body: _body,
                                    template: (0, qcobjects_1.ClassFactory)(subcomponentClass).template
                                });
                                subcomponent.done = this.component.done.bind(subcomponent);
                                try {
                                    if (subcomponent) {
                                        subcomponent.data.__dataIndex = dataIndex;
                                        if (Object.hasOwnProperty.call(this.component.data, "length")) {
                                            subcomponent.data.__dataLength = this.component.data.length;
                                        }
                                        qcobjects_1.logger.debug("adding subcomponent to body");
                                        this._componentRoot.subelements("ul").map(ul => ul.append(subcomponent));
                                        try {
                                            this.component.subcomponents.push(subcomponent);
                                        }
                                        catch (e) {
                                            qcobjects_1.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                                        }
                                    }
                                    else {
                                        qcobjects_1.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                                    }
                                }
                                catch (e) {
                                    qcobjects_1.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                                }
                            }
                            catch (e) {
                                qcobjects_1.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                            }
                            return _ret_;
                        });
                    }
                    else {
                        qcobjects_1.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
                    }
                }
                catch (e) {
                    qcobjects_1.logger.debug("No data for component");
                }
            }
            cssGrid() {
                const component = this.component;
                const _componentRoot = (component.shadowed) ? (component.shadowRoot) : (component.body);
                if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined") {
                    const s = (0, qcobjects_1._DOMCreateElement)("style");
                    const templateRows = "auto ".repeat(this.rows);
                    const templateCols = "auto ".repeat(this.cols);
                    const className = "grid" + this.__instanceID.toString();
                    s.innerHTML = `.${className}{
            display: grid; \
            grid-template-rows: ${templateRows}; \
            grid-template-columns: ${templateCols}; \
            margin:0 auto; \
          }`;
                    _componentRoot.append(s);
                    _componentRoot.classList.add(className);
                }
            }
            done() {
                this.cssGrid();
                const componentInstance = this.component;
                qcobjects_1.logger.debug("ListController DONE");
                const serviceClass = this.component.body.getAttribute("serviceClass");
                if (serviceClass != null) {
                    let offset;
                    let limit;
                    let paginateIn = componentInstance.body.getAttribute("paginate-in");
                    paginateIn = (paginateIn !== null) ? (paginateIn) : ("client");
                    if (paginateIn === "server") {
                        let page = componentInstance.body.getAttribute("page-number");
                        page = (isNaN(page) || page === null) ? (-1) : (page);
                        let pagesNumber;
                        if (page !== -1) {
                            const serverDataCount = (this.component.body.getAttribute("server-data-count") !== null) ? (this.component.body.getAttribute("server-data-count")) : (1);
                            pagesNumber = this.component.body.getAttribute("total-pages");
                            pagesNumber = (isNaN(pagesNumber)) ? (1) : (pagesNumber);
                            offset = this.getPageIndex(page, pagesNumber, serverDataCount)[0];
                            limit = this.getPageIndex(page, pagesNumber, serverDataCount)[1];
                            // send params in jsonrpc 2.0 style
                            componentInstance.serviceData = (typeof componentInstance.serviceData !== "undefined") ? (componentInstance.serviceData) : ({});
                            componentInstance.serviceData.params = (typeof componentInstance.serviceData.params !== "undefined") ? (componentInstance.serviceData.params) : ({});
                            componentInstance.serviceData.params.offset = offset;
                            componentInstance.serviceData.params.limit = limit;
                        }
                    }
                    (0, qcobjects_1.serviceLoader)((0, qcobjects_1.New)((0, qcobjects_1.ClassFactory)(serviceClass), {
                        data: componentInstance.serviceData
                    }), false).then((successfulResponse) => {
                        // This will show the service response as a plain text
                        qcobjects_1.logger.debug("DONE SERVICE COMPONENT");
                        successfulResponse.service.JSONresponse = JSON.parse(successfulResponse.service.template);
                        if (typeof successfulResponse.service.JSONresponse.result !== "undefined") {
                            qcobjects_1.logger.debug((0, qcobjects_1._DataStringify)(successfulResponse.service.JSONresponse.result));
                            componentInstance.data = successfulResponse.service.JSONresponse.result;
                        }
                        else {
                            componentInstance.data = successfulResponse.service.JSONresponse;
                        }
                        this.addSubcomponents();
                    }, (failedResponse) => {
                        qcobjects_1.logger.debug(failedResponse);
                    }).catch((e) => {
                        qcobjects_1.logger.debug("Something went wrong when calling the service from: " + serviceClass);
                        qcobjects_1.logger.debug(e.message);
                    });
                }
            }
        }
    ]);
})();
