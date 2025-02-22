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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerUIComponent = exports.ModalComponent = exports.ModalEnclosureComponent = exports.EmailField = exports.TextField = exports.InputField = exports.ButtonField = exports.ShadowedComponent = exports.FormField = void 0;
const qcobjects_1 = require("qcobjects");
const org_qcobjects_effects_1 = require("./org.qcobjects.effects");
const org_qcobjects_base_components_1 = require("./org.qcobjects.base.components");
Object.defineProperty(exports, "FormField", { enumerable: true, get: function () { return org_qcobjects_base_components_1.FormField; } });
class ShadowedComponent extends qcobjects_1.Component {
    container = null;
    shadowed = true;
    cached = false;
    controller = null;
    view = null;
    data = {};
    constructor(o) {
        o.body = (0, qcobjects_1._DOMCreateElement)("div");
        super(o);
    }
}
exports.ShadowedComponent = ShadowedComponent;
class ButtonField extends org_qcobjects_base_components_1.FormField {
    constructor(o) {
        o.fieldType = "button";
        super(o);
    }
}
exports.ButtonField = ButtonField;
class InputField extends org_qcobjects_base_components_1.FormField {
    constructor(o) {
        o.fieldType = "input";
        super(o);
    }
}
exports.InputField = InputField;
class TextField extends org_qcobjects_base_components_1.FormField {
    constructor(o) {
        o.fieldType = "textarea";
        super(o);
    }
}
exports.TextField = TextField;
class EmailField extends org_qcobjects_base_components_1.FormField {
    constructor(o) {
        o.fieldType = "input";
        super(o);
    }
}
exports.EmailField = EmailField;
class ModalEnclosureComponent extends qcobjects_1.Component {
    name = "modalenclosure";
    tplsource = "inline";
    cached = false;
    basePath = qcobjects_1.CONFIG.get("modalBasePath", qcobjects_1.CONFIG.get("remoteSDKPath", ""));
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
    constructor(o) {
        o.body = (0, qcobjects_1._DOMCreateElement)("div");
        super(o);
    }
}
exports.ModalEnclosureComponent = ModalEnclosureComponent;
class ModalComponent extends qcobjects_1.Component {
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
    __instanceID;
    basePath;
    subcomponents;
    body;
    templateURI;
    constructor(o) {
        o.basePath = qcobjects_1.CONFIG.get("modalBasePath", qcobjects_1.CONFIG.get("remoteSDKPath", ""));
        super(o);
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
            return (new org_qcobjects_effects_1.ModalFade()).apply(modal, 0, 1);
        });
        (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal .modal-content").map((modalcontent) => {
            return org_qcobjects_effects_1.ModalMoveDown.apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
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
            return (new org_qcobjects_effects_1.ModalFade({ duration: 3000 })).apply(modal, 1, 0);
        });
        (0, qcobjects_1.Tag)("#modalInstance_" + modalId + ".modal .modal-content").map(function (modalcontent) {
            return org_qcobjects_effects_1.ModalMoveUp.apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
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
exports.ModalComponent = ModalComponent;
class SwaggerUIComponent extends qcobjects_1.Component {
    cached = false;
    basePath = qcobjects_1.CONFIG.get("remoteSDKPath", "");
    tplextension = "tpl.html";
    name = "swagger-ui";
}
exports.SwaggerUIComponent = SwaggerUIComponent;
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
