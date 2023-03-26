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
(function () {
  Package("org.qcobjects.base.components", [
    class FormField extends Component {
      cached = false;
      reload = true;
      constructor() {
        super(...arguments);

      }

      createBindingEvents() {
        var thisobj = this;
        var _objList;
        if (typeof this.fieldType == "undefined" || this.fieldType == null) {
          _objList = this.body.subelements("*[data-field]"); // every child with data-field set
        } else {
          _objList = this.body.subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
        }
        for (var _datak = 0; _datak < _objList.length; _datak++) {
          var _obj = _objList[_datak];
          _obj.addEventListener("change", function (e) {
            logger.debug("Executing change event binding");
            thisobj.executeBindings(e);
          });
          _obj.addEventListener("blur", function (e) {
            logger.debug("Executing change event binding");
            thisobj.executeBindings(e);
          });
          _obj.addEventListener("focus", function (e) {
            logger.debug("Executing change event binding");
            thisobj.executeBindings(e);
          });
          _obj.addEventListener("keydown", function (e) {
            logger.debug("Executing keydown event binding");
            thisobj.executeBindings(e);
          });
        }
      }
      executeBinding(_obj) {
        var _datamodel = _obj.getAttribute("data-field");
        logger.debug("Binding " + _datamodel + " for " + this.name);
        this.data[_datamodel] = _obj.value;
      }
      executeBindings() {
        var _objList;
        if (typeof this.fieldType == "undefined" || this.fieldType == null) {
          _objList = this.body.subelements("*[data-field]"); // every child with data-field set
        } else {
          _objList = this.body.subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
        }
        for (var _datak = 0; _datak < _objList.length; _datak++) {
          var _obj = _objList[_datak];
          var _datamodel = _obj.getAttribute("data-field");
          logger.debug("Binding " + _datamodel + " for " + this.name);
          this.data[_datamodel] = _obj.value;
        }
      }
      done() {
        super.done(...arguments);
        var thisobj = this;
        thisobj.executeBindings();
        thisobj.createBindingEvents();
        logger.debug("Field loaded: " + thisobj.fieldType + "[name=" + thisobj.name + "]");
      }


    }

  ]);
  Package("org.qcobjects.form.components", [

    class ShadowedComponent extends Component {
      container = null;
      body = null;
      shadowed = true;
      cached = false;
      controller = null;
      view = null;
      data = {};

      constructor() {
        super(...arguments);
        this.body = _DOMCreateElement("div");
      }


    },


    class ButtonField extends FormField {
      constructor() {
        super(...arguments);
        this.fieldType = "button";

      }
    },

    class InputField extends FormField {
      constructor() {
        super(...arguments);
        this.fieldType = "input";

      }

    },

    class TextField extends FormField {
      constructor() {
        super(...arguments);
        this.fieldType = "textarea";

      }

    },

    class EmailField extends FormField {
      constructor() {
        super(...arguments);
        this.fieldType = "input";

      }

    },

    class ModalEnclosureComponent extends Component {
      tplsource = "inline";
      cached = false;
      basePath = CONFIG.get("modalBasePath", CONFIG.get("remoteSDKPath"));
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
      constructor() {
        super(...arguments);
        this.name = "modal";
        this.body = _DOMCreateElement("div");
      }

    },

    class ModalComponent extends Component {
      constructor() {
        super(...arguments);
        this.name = "modal";
        this.cached = false;
        this.modalEnclosureComponentClass = "ModalEnclosureComponent";
        this.basePath = CONFIG.get("modalBasePath", CONFIG.get("remoteSDKPath"));
        this.controller = null;
        this.view = null;
        this.tplsource = "none";
        this.closeOnClickOutside = false;
        this.data = {
          content: "",
          modalId: 0
        };
        this.submodal = null;
        var component = this;
        component.data.modalId = component.__instanceID;
        var submodal = New(ClassFactory(component.modalEnclosureComponentClass), {
          name: component.name,
          basePath: component.basePath,
          data: component.data
        });
        component.subcomponents.push(submodal);
        component.submodal = submodal;
        if (submodal.tplsource == "none") {
          component.body.innerHTML = submodal.parsedAssignmentText;
        } else {
          component.body.append(submodal.body);
        }

      }

      modal() {
        var modalId = this.data.modalId;
        var modalComponent = this;

        Tag("#modalInstance_" + parseInt(modalId) + ".modal").map(function (modal) {
          modal.style.display = "block";
          ModalFade.apply(modal, 0, 1);
        });
        Tag("#modalInstance_" + parseInt(modalId) + ".modal .modal-content").map(function (modalcontent) {
          ModalMoveDown.apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
        });
        Tag("#modalInstance_" + parseInt(modalId) + ".modal .modal-content .close").map(function (closebtn) {
          closebtn.addEventListener("click", function () {
            modalComponent.close();
          }, false);
        });
        if (modalComponent.closeOnClickOutside) {
          window.addEventListener("click", function () {
            modalComponent.close();
          }, false);
        }
      }

      close() {
        var modalId = this.data.modalId;
        Tag("#modalInstance_" + parseInt(modalId) + ".modal").map(function (modal) {
          modal.style.display = "block";
          ModalFade.apply(modal, 1, 0);
        });
        Tag("#modalInstance_" + parseInt(modalId) + ".modal .modal-content").map(function (modalcontent) {
          ModalMoveUp.apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
        });
        setTimeout(function () {
          Tag("#modalInstance_" + parseInt(modalId) + ".modal").map(function (modal) {
            modal.style.display = "none";
          });
        }, 900);
      }

      rebuild() {
        let _ret_ = super.rebuild(...arguments);
        this.templateURI = ComponentURI({
          "COMPONENTS_BASE_PATH": CONFIG.get("componentsBasePath"),
          "COMPONENT_NAME": "modal",
          "TPLEXTENSION": CONFIG.get("tplextension"),
          "TPL_SOURCE": "default" //here is always default in order to get the right uri
        });
        return _ret_; // parent call
      }


    },

    class SwaggerUIComponent extends Component {
      cached = false;
      basePath = CONFIG.get("remoteSDKPath");
      tplextension = "tpl.html";

      constructor() {
        super(...arguments);
        this.name = "swagger-ui";

      }

    }

  ]);

}).call(null);
