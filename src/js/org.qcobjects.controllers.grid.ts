import { Package, Controller, _DOMCreateElement, logger, _DataStringify, ClassFactory, New, ComponentURI, CONFIG, serviceLoader, ControllerParams, QCObjectsElement, QCObjectsShadowedElement } from "qcobjects";
import { GridComponent } from "./org.qcobjects.components.grid";
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

(function() {
"use strict";
type DataGridControllerParams = ControllerParams & {
  rows:number | string | null;
  cols: number | string | null;
}
Package("org.qcobjects.controllers.grid",[

  class GridController extends Controller {
    __instanceID!:number;
    rows:number | string | null;
    cols:number | string | null;

    constructor (controller:ControllerParams){
      super(controller);
      this.rows=this.component.body.getAttribute("rows");
      this.rows=(this.rows !== null)?(this.rows):((this.component as typeof GridComponent).rows);
      this.cols=this.component.body.getAttribute("cols");
      this.cols=(this.cols !== null)?(this.cols):((this.component as typeof GridComponent).cols);
  
    }

    cssGrid (){
      const component = this.component;
      const _componentRoot = (component.shadowed)?(component.shadowRoot):(component.body);
      if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined"){
        const s = _DOMCreateElement("style");
        const templateRows = "auto ".repeat(this.rows as number);
        const templateCols = "auto ".repeat(this.cols as number);
        const className = "grid"+this.__instanceID.toString();
        s.innerHTML = `.${className}{
          display: grid; \
          grid-template-rows: ${templateRows}; \
          grid-template-columns: ${templateCols}; \
          margin:0 auto; \
        }`;
        _componentRoot?.append(s);
        if (component.shadowed){
          (_componentRoot as ShadowRoot)?.host.classList.add(className);
        } else {
          ((_componentRoot as HTMLDivElement).classList).add(className);
        }
      }
    }

    done (){
      this.cssGrid();

      logger.debug("GridComponent built");

    }

  },

  class DataGridController extends Controller {
    __instanceID!:number;
    rows:number | string | null;
    cols: number | string | null;
    _componentRoot:QCObjectsElement | QCObjectsShadowedElement | HTMLElement | ShadowRoot | undefined;

    constructor (controller:DataGridControllerParams){
      super(controller);
      this._componentRoot = (controller.component.shadowed)?(controller.component.shadowRoot):(controller.component.body);
      this.rows=controller.component.body.getAttribute("rows");
      this.rows=(controller.rows !== null)?(controller.rows):((controller.component as typeof GridComponent).rows);
      this.cols=controller.component.body.getAttribute("cols");
      this.cols=(controller.cols !== null)?(controller.cols):((controller.component as typeof GridComponent).cols);
      logger.debug("DataGridController INIT");
  
    }

    getPageIndex (page:number, totalPage:number, totalElements:number) {
      page = (page>0)?(page-1):(0);
      return [totalElements*page/ totalPage, (totalElements*page/ totalPage) + totalElements/totalPage];
    }

    addSubcomponents (){
      this.component.subcomponents = [];
      if (typeof this._componentRoot !== "undefined"){
        this._componentRoot.innerHTML = "";
      }
      this.cssGrid();
      logger.debug(_DataStringify(this.component.data));
      try {
        const subcomponentClass = this.component.body.getAttribute("subcomponentClass");
        if (subcomponentClass != null){
          let offset:number;
          let limit:number;
          let pagesNumber:number;
          let list = [...this.component.data];
          let paginateIn = this.component.body.getAttribute("paginate-in");
          let page:number | string | null | undefined;
          paginateIn = (paginateIn !== null)?(paginateIn):("client");
          if (paginateIn === "client"){
            page = this.component.body.getAttribute("page-number") as unknown as number;
            page = (isNaN(page) || page === null)?(-1):(page);
            if (page !== -1){
              pagesNumber = this.component.body.getAttribute("total-pages") as unknown as number;
              pagesNumber = (isNaN(pagesNumber))?(1):(pagesNumber);
              offset = this.getPageIndex(page, pagesNumber, list.length)[0];
              limit = this.getPageIndex(page, pagesNumber, list.length)[1];
            } else {
              offset = 0;
              limit = list.length;
              pagesNumber = 1;
            }
            list = list.slice(offset,limit);
          } else {
            offset = 0;
            limit = list.length;
            pagesNumber = 1;
          }
          list.map(
             (record,dataIndex, list) => {
              const _ret_ = undefined;
                try {
                  const _body = _DOMCreateElement("component");
                  _body.setAttribute("name",ClassFactory(subcomponentClass).name);
                  _body.setAttribute("shadowed",ClassFactory(subcomponentClass).shadowed);
                  _body.setAttribute("cached",ClassFactory(subcomponentClass).cached);
                  record = Object.assign(record, {
                    __dataIndex: dataIndex,
                    __dataLength: list.length,
                    __page: page,
                    __totalPages: pagesNumber,
                    __limit: limit,
                    __offset: offset
                  });
                  const subcomponent = New(ClassFactory(subcomponentClass),{
                    name:"item",
                    data:record,
                    templateURI:ComponentURI({
                      "COMPONENTS_BASE_PATH":CONFIG.get("componentsBasePath", ""),
                      "COMPONENT_NAME":ClassFactory(subcomponentClass).name,
                      "TPLEXTENSION":CONFIG.get("tplextension", ""),
                      "TPL_SOURCE":ClassFactory(subcomponentClass).tplsource
                    }),
                    body:_body,
                    template:ClassFactory(subcomponentClass).template
                  });
                  subcomponent.done = this.component.done.bind(subcomponent);
                  try {
                    if (subcomponent){
                      subcomponent.data.__dataIndex = dataIndex;
                      if (Object.hasOwnProperty.call(this.component.data,"length")){
                        subcomponent.data.__dataLength = this.component.data.length;
                      }
                      logger.debug("adding subcomponent to body");
                      this._componentRoot?.append(subcomponent.body);
                      try {
                        this.component.subcomponents.push(subcomponent);
                      }catch (e){
                        logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                      }
                    } else {
                      logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                    }
                  }catch (e){
                    logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                  }

                } catch (e) {
                  logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                }
                return _ret_;
            }
          );
        } else {
          logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
        }

      } catch (e){
        logger.debug("No data for component");
      }
    }

    cssGrid (){
      const component = this.component;
      const _componentRoot = (component.shadowed)?(component.shadowRoot):(component.body);
      if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined"){
        const s = _DOMCreateElement("style");
        const templateRows = "auto ".repeat(this.rows as number);
        const templateCols = "auto ".repeat(this.cols as number);
        const className = "grid"+this.__instanceID.toString();
        s.innerHTML = `.${className}{
          display: grid; \
          grid-template-rows: ${templateRows}; \
          grid-template-columns: ${templateCols}; \
          margin:0 auto; \
        }`;
        if (component.shadowed){
          component.body.append(s);
          (_componentRoot as ShadowRoot).host.classList.add(className);
        } else {
          _componentRoot?.append(s);
          (_componentRoot as HTMLElement).classList.add(className);
        }
      }
    }

    done (){
      const componentInstance = this.component;
      logger.debug("DataGridController DONE");
      const serviceClass = this.component.body.getAttribute("serviceClass");
      if (serviceClass != null){
        let offset;
        let limit;
        let paginateIn = componentInstance.body.getAttribute("paginate-in");
        paginateIn = (paginateIn !== null)?(paginateIn):("client");
        if (paginateIn === "server"){
          let page = componentInstance.body.getAttribute("page-number") as unknown as number;
          page = (isNaN(page) || page === null)?(-1):(page);
          let pagesNumber;
          if (page !== -1){
            const serverDataCount = (this.component.body.getAttribute("server-data-count")!==null)?(this.component.body.getAttribute("server-data-count") as unknown as number):(1);
            pagesNumber = this.component.body.getAttribute("total-pages") as unknown as number;
            pagesNumber = (isNaN(pagesNumber))?(1):(pagesNumber);
            offset = this.getPageIndex(page, pagesNumber, serverDataCount)[0];
            limit = this.getPageIndex(page, pagesNumber, serverDataCount)[1];
            // send params in jsonrpc 2.0 style
            componentInstance.serviceData = (typeof componentInstance.serviceData !== "undefined")?(componentInstance.serviceData):({});
            componentInstance.serviceData.params = (typeof componentInstance.serviceData.params !== "undefined")?(componentInstance.serviceData.params):({});
            componentInstance.serviceData.params.offset = offset;
            componentInstance.serviceData.params.limit = limit;
          }
        }

        serviceLoader(New(ClassFactory(serviceClass),{
            data:componentInstance.serviceData
        }), false).then(
          (successfulResponse)=>{
            // This will show the service response as a plain text
            logger.debug("DONE SERVICE COMPONENT");
            successfulResponse.service.JSONresponse = JSON.parse(successfulResponse.service.template);
            if (typeof successfulResponse.service.JSONresponse.result !== "undefined"){
              logger.debug(_DataStringify(successfulResponse.service.JSONresponse.result));
              componentInstance.data = successfulResponse.service.JSONresponse.result;
            } else {
              componentInstance.data = successfulResponse.service.JSONresponse;
            }
            this.addSubcomponents();

          },
          (failedResponse)=>{
            logger.debug(failedResponse);
          }).catch ((e)=>{
            logger.debug("Something went wrong when calling the service from: "+serviceClass);
            logger.debug(e.message);
          });

      }

    }
    

  }

]);

})();
