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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerUIComponent = exports.ModalEnclosureComponent = exports.ModalComponent = exports.EmailField = exports.TextField = exports.InputField = exports.ButtonField = exports.ShadowedComponent = exports.FormField = void 0;
const qcobjects_1 = require("qcobjects");
const org_qcobjects_effects_1 = require("./org.qcobjects.effects");
const _top = (typeof module === "object" && typeof module.exports === "object") ? (module.exports = (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
            ? window
            : typeof global !== "undefined"
                ? global
                : {})) : ((typeof global === "object") ? (global) : ((typeof window === "object") ? (window) : ({})));
(function (global) {
    class FormField extends qcobjects_1.Component {
        constructor(o) {
            o.name = (typeof o.name !== "undefined") ? (o.name) : ("form-field");
            super(o);
            this.cached = false;
            this.reload = true;
        }
        createBindingEvents() {
            let _objList;
            if (typeof this.fieldType === "undefined" || this.fieldType == null) {
                _objList = this.body.subelements("*[data-field]"); // every child with data-field set
            }
            else {
                _objList = this.body.subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
            }
            for (let _datak = 0; _datak < _objList.length; _datak++) {
                const _obj = _objList[_datak];
                _obj.addEventListener("change", () => {
                    qcobjects_1.logger.debug("Executing change event binding");
                    this.executeBindings();
                });
                _obj.addEventListener("blur", () => {
                    qcobjects_1.logger.debug("Executing change event binding");
                    this.executeBindings();
                });
                _obj.addEventListener("focus", () => {
                    qcobjects_1.logger.debug("Executing change event binding");
                    this.executeBindings();
                });
                _obj.addEventListener("keydown", () => {
                    qcobjects_1.logger.debug("Executing keydown event binding");
                    this.executeBindings();
                });
            }
        }
        executeBinding(_obj) {
            const _datamodel = _obj.getAttribute("data-field");
            qcobjects_1.logger.debug("Binding " + _datamodel + " for " + this.name);
            this.data[_datamodel] = _obj.value;
        }
        executeBindings() {
            let _objList;
            if (typeof this.fieldType === "undefined" || this.fieldType == null) {
                _objList = this.body.subelements("*[data-field]"); // every child with data-field set
            }
            else {
                _objList = this.body.subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
            }
            for (let _datak = 0; _datak < _objList.length; _datak++) {
                const _obj = _objList[_datak];
                const _datamodel = _obj.getAttribute("data-field");
                qcobjects_1.logger.debug("Binding " + _datamodel + " for " + this.name);
                this.data[_datamodel] = _obj.value;
            }
        }
        done(standardResponse) {
            const _ret_ = super.done(standardResponse);
            this.executeBindings();
            this.createBindingEvents();
            qcobjects_1.logger.debug("Field loaded: " + this.fieldType + "[name=" + this.name + "]");
            return _ret_;
        }
    }
    (0, qcobjects_1.Package)("org.qcobjects.base.components", [
        FormField
    ]);
    class ShadowedComponent extends qcobjects_1.Component {
        constructor(o) {
            o.body = (0, qcobjects_1._DOMCreateElement)("div");
            super(o);
            this.container = null;
            this.shadowed = true;
            this.cached = false;
            this.controller = null;
            this.view = null;
            this.data = {};
        }
    }
    class ButtonField extends FormField {
        constructor(o) {
            o.fieldType = "button";
            super(o);
        }
    }
    class InputField extends FormField {
        constructor(o) {
            o.fieldType = "input";
            super(o);
        }
    }
    class TextField extends FormField {
        constructor(o) {
            o.fieldType = "textarea";
            super(o);
        }
    }
    class EmailField extends FormField {
        constructor(o) {
            o.fieldType = "input";
            super(o);
        }
    }
    class ModalEnclosureComponent extends qcobjects_1.Component {
        constructor(o) {
            o.body = (0, qcobjects_1._DOMCreateElement)("div");
            super(o);
            this.name = "modalenclosure";
            this.tplsource = "inline";
            this.cached = false;
            this.basePath = qcobjects_1.CONFIG.get("modalBasePath", qcobjects_1.CONFIG.get("remoteSDKPath", ""));
            this.template = `
<!-- The Modal -->
<style>
@import url('https://sdk.qcobjects.dev/css/modal.css');
</style>
<div id="modalInstance_{{modalId}}" class="modal">

<!-- Modal content -->
<div class="modal-content">
<span class="close">&times;</span>
{{content}}
</div>

</div>
`;
            this.data = {};
        }
    }
    class ModalComponent extends qcobjects_1.Component {
        constructor(o) {
            o.basePath = qcobjects_1.CONFIG.get("modalBasePath", qcobjects_1.CONFIG.get("remoteSDKPath", ""));
            super(o);
            this.name = "modal";
            this.cached = false;
            this.modalEnclosureComponentClass = "ModalEnclosureComponent";
            this.controller = null;
            this.view = null;
            this.tplsource = "none";
            this.closeOnClickOutside = false;
            this.data = {
                content: "",
                modalId: 0
            };
            this.submodal = null;
            this.data.modalId = this.__instanceID;
            const submodal = (0, qcobjects_1.New)((0, qcobjects_1.ClassFactory)(this.modalEnclosureComponentClass), {
                name: this.name,
                basePath: this.basePath,
                data: this.data
            });
            this.subcomponents.push(submodal);
            this.submodal = submodal;
            if (submodal.tplsource === "none") {
                this.body.innerHTML = submodal.parsedAssignmentText;
            }
            else {
                this.body.append(submodal.body);
            }
        }
        modal() {
            const modalId = this.data.modalId;
            (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal").map((modal) => {
                modal.style.display = "block";
                return (new org_qcobjects_effects_1.ModalFade({})).apply(modal, 0, 1);
            });
            (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal .modal-content").map((modalcontent) => {
                return (new org_qcobjects_effects_1.ModalMoveDown({})).apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
            });
            (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal .modal-content .close").map((closebtn) => {
                return closebtn.addEventListener("click", () => {
                    this.close();
                }, false);
            });
            if (this.closeOnClickOutside) {
                window.addEventListener("click", () => {
                    this.close();
                }, false);
            }
        }
        close() {
            const modalId = this.data.modalId;
            (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal").map((modal) => {
                modal.style.display = "block";
                return (new org_qcobjects_effects_1.ModalFade({})).apply(modal, 1, 0);
            });
            (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal .modal-content").map(function (modalcontent) {
                return (new org_qcobjects_effects_1.ModalMoveUp({})).apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
            });
            setTimeout(function () {
                (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal").map((modal) => {
                    modal.style.display = "none";
                    return true;
                });
            }, 900);
        }
        rebuild() {
            const _ret_ = super.rebuild();
            this.templateURI = (0, qcobjects_1.ComponentURI)({
                "COMPONENTS_BASE_PATH": qcobjects_1.CONFIG.get("componentsBasePath", ""),
                "COMPONENT_NAME": "modal",
                "TPLEXTENSION": qcobjects_1.CONFIG.get("tplextension", ""),
                "TPL_SOURCE": "default" // here is always default in order to get the right uri
            });
            return _ret_; // parent call
        }
    }
    class SwaggerUIComponent extends qcobjects_1.Component {
        constructor() {
            super(...arguments);
            this.cached = false;
            this.basePath = qcobjects_1.CONFIG.get("remoteSDKPath", "");
            this.tplextension = "tpl.html";
            this.name = "swagger-ui";
        }
    }
    (0, qcobjects_1.Package)("org.qcobjects.form.components", [
        ShadowedComponent,
        ButtonField,
        InputField,
        TextField,
        EmailField,
        ModalEnclosureComponent,
        ModalComponent,
        SwaggerUIComponent
    ]);
    global.FormField = FormField;
    global.ShadowedComponent = ShadowedComponent;
    global.ButtonField = ButtonField;
    global.InputField = InputField;
    global.TextField = TextField;
    global.EmailField = EmailField;
    global.ModalEnclosureComponent = ModalEnclosureComponent;
    global.ModalComponent = ModalComponent;
    global.SwaggerUIComponent = SwaggerUIComponent;
})(_top);
const FormField = _top.FormField;
exports.FormField = FormField;
const ShadowedComponent = _top.ShadowedComponent;
exports.ShadowedComponent = ShadowedComponent;
const ButtonField = _top.ButtonField;
exports.ButtonField = ButtonField;
const InputField = _top.InputField;
exports.InputField = InputField;
const TextField = _top.TextField;
exports.TextField = TextField;
const EmailField = _top.EmailField;
exports.EmailField = EmailField;
const ModalEnclosureComponent = _top.ModalEnclosureComponent;
exports.ModalEnclosureComponent = ModalEnclosureComponent;
const ModalComponent = _top.ModalComponent;
exports.ModalComponent = ModalComponent;
const SwaggerUIComponent = _top.SwaggerUIComponent;
exports.SwaggerUIComponent = SwaggerUIComponent;
