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
      constructor (...o){
        super(o);
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

      constructor (...o){
        o.body = _DOMCreateElement("div");
        super(o);
      }


    },


    class ButtonField extends FormField {
      constructor(...o) {
        o.fieldType = "button";
        super(o);
      }
    },

    class InputField extends FormField {
      constructor(...o) {
        o.fieldType = "input";
        super(o);
      }

    },

    class TextField extends FormField {
      constructor(...o) {
        o.fieldType = "textarea";
        super(o);
      }

    },

    class EmailField extends FormField {
      constructor(...o) {
        o.fieldType = "input";
        super(o);
      }

    },

    class ModalEnclosureComponent extends Component {
      name = "modalenclosure";
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
      constructor(...o) {
        o.body = _DOMCreateElement("div");
        super(o);
      }

    },

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

      constructor(...o) {
        o.basePath = CONFIG.get("modalBasePath", CONFIG.get("remoteSDKPath"));
        super(o);
        this.data.modalId = this.__instanceID;
        var submodal = New(ClassFactory(this.modalEnclosureComponentClass), {
          name: this.name,
          basePath: this.basePath,
          data: this.data
        });
        this.subcomponents.push(submodal);
        this.submodal = submodal;
        if (submodal.tplsource == "none") {
          this.body.innerHTML = submodal.parsedAssignmentText;
        } else {
          this.body.append(submodal.body);
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
      name = "swagger-ui";
      
      constructor(...o) {
        super(o);

      }

    }

  ]);

}).call(null);
