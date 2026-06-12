/**
 * QCObjects SDK 2.5
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

import { Package, Component, _DOMCreateElement, CONFIG, New, ClassFactory, Tag, ComponentURI } from "qcobjects";
import { ModalFade, ModalMoveDown, ModalMoveUp } from "./org.qcobjects.effects";
import {FormField, FieldComponentParams} from "./org.qcobjects.base.components";
export {FormField};

export class ShadowedComponent extends Component {
  container = null;
  shadowed = true;
  cached = false;
  controller = null;
  view = null;
  data = {};

  constructor(o: FieldComponentParams) {
    o.body = _DOMCreateElement("div");
    super(o);
  }


}

export class ButtonField extends FormField {
  constructor(o: FieldComponentParams) {
    o.fieldType = "button";
    super(o);
  }
}

export class InputField extends FormField {
  constructor(o: FieldComponentParams) {
    o.fieldType = "input";
    super(o);
  }

}

export class TextField extends FormField {
  constructor(o: FieldComponentParams) {
    o.fieldType = "textarea";
    super(o);
  }

}

export class EmailField extends FormField {
  constructor(o: FieldComponentParams) {
    o.fieldType = "input";
    super(o);
  }

}

export class ModalEnclosureComponent extends Component {
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
  constructor(o: FieldComponentParams) {
    o.body = _DOMCreateElement("div");
    super(o);
  }

}

export class ModalComponent extends Component {
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
  __instanceID!: number;
  basePath: any;
  subcomponents: any;
  body: any;
  templateURI: any;

  constructor(o: FieldComponentParams) {
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

    Tag("#modalInstance_" + modalId + ".modal").map((modal: any) => {
      modal.style.display = "block";

      return (new ModalFade()).apply(modal, 0, 1);
    });
    Tag("#modalInstance_" + modalId + ".modal .modal-content").map((modalcontent: any) => {

      return ModalMoveDown.apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
    });
    Tag("#modalInstance_" + modalId + ".modal .modal-content .close").map((closebtn: any) => {

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
    Tag("#modalInstance_" + modalId + ".modal").map((modal: any) => {
      modal.style.display = "block";

      return (new ModalFade({ duration: 3000 })).apply(modal, 1, 0);
    });
    Tag("#modalInstance_" + modalId + ".modal .modal-content").map(function (modalcontent: any) {

      return ModalMoveUp.apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
    });
    setTimeout(function () {
      Tag("#modalInstance_" + modalId + ".modal").map((modal: any) => {
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

export class SwaggerUIComponent extends Component {
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


