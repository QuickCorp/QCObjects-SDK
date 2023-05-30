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

import { Package, Component, logger, _DOMCreateElement, CONFIG, New, ClassFactory, Tag, ComponentURI, QCObjectsElement, ComponentDoneResponse, ComponentParams } from "qcobjects";
import { ModalFade, ModalMoveDown, ModalMoveUp } from "./org.qcobjects.effects";
const _top:any = (typeof module === "object" && typeof module.exports === "object") ? (
  module.exports = (typeof globalThis !== "undefined"
  ? globalThis
  : typeof self !== "undefined"
  ? self
  : typeof window !== "undefined"
  ? window
  : typeof global !== "undefined"
  ? global
  : {})
) : ((typeof global === "object") ? (global) : (
  (typeof window === "object") ? (window) : ({})
));
(function (global:any) {

  type FieldComponentParams = ComponentParams & {
    basePath?:string;
    fieldType:string;
  }
  class FormField extends Component {
    fieldType!:string;
    cached = false;
    reload = true;
    constructor (o:FieldComponentParams){
      o.name = (typeof o.name !== "undefined")?(o.name):("form-field");
      super(o);
    }

    createBindingEvents() {
      let _objList;
      if (typeof this.fieldType === "undefined" || this.fieldType == null) {
        _objList = (this.body as QCObjectsElement).subelements("*[data-field]"); // every child with data-field set
      } else {
        _objList = (this.body as QCObjectsElement).subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
      }
      for (let _datak = 0; _datak < _objList.length; _datak++) {
        const _obj = _objList[_datak];
        _obj.addEventListener("change",  () => {
          logger.debug("Executing change event binding");
          this.executeBindings();
        });
        _obj.addEventListener("blur", () => {
          logger.debug("Executing change event binding");
          this.executeBindings();
        });
        _obj.addEventListener("focus", () => {
          logger.debug("Executing change event binding");
          this.executeBindings();
        });
        _obj.addEventListener("keydown", () =>{
          logger.debug("Executing keydown event binding");
          this.executeBindings();
        });
      }
    }

    executeBinding(_obj:HTMLElement & {value:any}) {
      const _datamodel = _obj.getAttribute("data-field");
      logger.debug("Binding " + _datamodel + " for " + this.name);
      this.data[_datamodel as keyof typeof this.data] = _obj.value;
    }

    executeBindings() {
      let _objList;
      if (typeof this.fieldType === "undefined" || this.fieldType == null) {
        _objList = (this.body as QCObjectsElement).subelements("*[data-field]"); // every child with data-field set
      } else {
        _objList = (this.body as QCObjectsElement).subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
      }
      for (let _datak = 0; _datak < _objList.length; _datak++) {
        const _obj = _objList[_datak] as HTMLElement & {value:any};
        const _datamodel = _obj.getAttribute("data-field");
        logger.debug("Binding " + _datamodel + " for " + this.name);
        this.data[_datamodel as keyof typeof this.data] = _obj.value;
      }
    }

    done(standardResponse:ComponentDoneResponse):Promise<ComponentDoneResponse> {
      const _ret_ = super.done(standardResponse);
      this.executeBindings();
      this.createBindingEvents();
      logger.debug("Field loaded: " + this.fieldType + "[name=" + this.name + "]");
      return _ret_;
    }


  }

  Package("org.qcobjects.base.components", [
    FormField
  ]);

  class ShadowedComponent extends Component {
    container = null;
    shadowed = true;
    cached = false;
    controller = null;
    view = null;
    data = {};

    constructor (o:FieldComponentParams){
      o.body = _DOMCreateElement("div") as QCObjectsElement;
      super(o);
    }


  }

  class ButtonField extends FormField {
    constructor(o:FieldComponentParams) {
      o.fieldType = "button";
      super(o);
    }
  }

  class InputField extends FormField {
    constructor(o:FieldComponentParams) {
      o.fieldType = "input";
      super(o);
    }

  }

  class TextField extends FormField {
    constructor(o:FieldComponentParams) {
      o.fieldType = "textarea";
      super(o);
    }

  }

  class EmailField extends FormField {
    constructor(o:FieldComponentParams) {
      o.fieldType = "input";
      super(o);
    }

  }

  class ModalEnclosureComponent extends Component {
    name = "modalenclosure";
    tplsource = "inline";
    cached = false;
    basePath = CONFIG.get("modalBasePath", CONFIG.get("remoteSDKPath", ""));
    template = `
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

    data = {};
    constructor(o:FieldComponentParams) {
      o.body = _DOMCreateElement("div") as QCObjectsElement;
      super(o);
    }

  }

  class ModalComponent extends Component {
    name = "modal";
    cached = false;
    modalEnclosureComponentClass = "ModalEnclosureComponent";
    controller = null;
    view = null;
    tplsource = "none";
    closeOnClickOutside = false;
    data = {
      content: "",
      modalId: 0
    };

    submodal = null;

    constructor(o:FieldComponentParams) {
      o.basePath = CONFIG.get("modalBasePath", CONFIG.get("remoteSDKPath", ""));
      super(o);
      this.data.modalId = this.__instanceID;
      const submodal = New(ClassFactory(this.modalEnclosureComponentClass), {
        name: this.name,
        basePath: this.basePath,
        data: this.data
      });
      this.subcomponents.push(submodal);
      this.submodal = submodal;
      if (submodal.tplsource === "none") {
        this.body.innerHTML = submodal.parsedAssignmentText;
      } else {
        this.body.append(submodal.body);
      }

    }

    modal() {
      const modalId = this.data.modalId;

      Tag("#modalInstance_" + modalId + ".modal").map( (modal) => {
        modal.style.display = "block";
        return (new ModalFade({})).apply(modal, 0, 1);
      });
      Tag("#modalInstance_" + modalId + ".modal .modal-content").map( (modalcontent) => {
        return (new ModalMoveDown({})).apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
      });
      Tag("#modalInstance_" + modalId + ".modal .modal-content .close").map( (closebtn) => {
        return closebtn.addEventListener("click",  () => {
          this.close();
        }, false);
      });
      if (this.closeOnClickOutside) {
        window.addEventListener("click",  () => {
          this.close();
        }, false);
      }
    }

    close() {
      const modalId = this.data.modalId;
      Tag("#modalInstance_" + modalId + ".modal").map( (modal) => {
        modal.style.display = "block";
        return (new ModalFade({})).apply(modal, 1, 0);
      });
      Tag("#modalInstance_" + modalId + ".modal .modal-content").map(function (modalcontent) {
        return (new ModalMoveUp({})).apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
      });
      setTimeout(function () {
        Tag("#modalInstance_" + modalId + ".modal").map((modal) => {
          modal.style.display = "none";
          return true;
        });
      }, 900);
    }

    rebuild() {
      const _ret_ = super.rebuild();
      this.templateURI = ComponentURI({
        "COMPONENTS_BASE_PATH": CONFIG.get("componentsBasePath", ""),
        "COMPONENT_NAME": "modal",
        "TPLEXTENSION": CONFIG.get("tplextension", ""),
        "TPL_SOURCE": "default" // here is always default in order to get the right uri
      });
      return _ret_; // parent call
    }


  }

  class SwaggerUIComponent extends Component {
    cached = false;
    basePath = CONFIG.get("remoteSDKPath", "");
    tplextension = "tpl.html";
    name = "swagger-ui";

  }


  Package("org.qcobjects.form.components", [
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
const ShadowedComponent = _top.ShadowedComponent;
const ButtonField = _top.ButtonField;
const InputField = _top.InputField;
const TextField = _top.TextField;
const EmailField = _top.EmailField;
const ModalEnclosureComponent = _top.ModalEnclosureComponent;
const ModalComponent = _top.ModalComponent;
const SwaggerUIComponent = _top.SwaggerUIComponent;

export {
  FormField,
  ShadowedComponent, 
  ButtonField, 
  InputField, 
  TextField, 
  EmailField, 
  ModalComponent, 
  ModalEnclosureComponent, 
  SwaggerUIComponent
};