"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const org_qcobjects_components_1 = require("./org.qcobjects.components");
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
    (0, qcobjects_1.Package)("org.qcobjects.controllers.form", [
        class FormValidations extends qcobjects_1.Controller {
            getDefault() {
                return function (fieldName, dataValue, element) {
                    const _regex = {
                        name: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                        email: "^([A-Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$"
                    };
                    const _pattern_ = (element.getAttribute("pattern") || _regex[fieldName]);
                    const pattern = new RegExp(_pattern_);
                    return pattern.test(dataValue);
                };
            }
        },
        class FormController extends qcobjects_1.Controller {
            hasValidation(element) {
                const fieldName = element.getAttribute("data-field");
                let _hasValidation = false;
                if (typeof this.validations !== "undefined"
                    && Object.hasOwnProperty.call(this.validations, fieldName)) {
                    _hasValidation = true;
                }
                return _hasValidation;
            }
            isInvalid(element) {
                let _isInvalid = false;
                const fieldName = element.getAttribute("data-field");
                const dataValue = this.component.data[fieldName];
                const _execValidation = (fieldName, dataValue, element) => {
                    return (typeof this.validations !== "undefined"
                        && Object.hasOwnProperty.call(this.validations, fieldName)
                        && this.validations[fieldName].call(null, fieldName, dataValue, element));
                };
                if (typeof this.validations !== "undefined" && (!_execValidation(fieldName, dataValue, element))) {
                    _isInvalid = true;
                }
                return _isInvalid;
            }
            isValid(element) {
                return !this.isInvalid(element);
            }
            save() {
                if (this.serviceClass !== "") {
                    location.href = this.formSettings.loadingRouting;
                    (0, qcobjects_1.serviceLoader)((0, qcobjects_1.New)((0, qcobjects_1.ClassFactory)(this.serviceClass), {
                        data: this.component.data
                    }), false).then((successfulResponse) => {
                        // This will show the service response as a plain text
                        console.log("DONE SERVICE COMPONENT");
                        try {
                            console.log(successfulResponse.service.JSONresponse);
                        }
                        catch (e) {
                            // no json
                        }
                        location.href = this.formSettings.nextRouting;
                    }, (failedResponse) => {
                        qcobjects_1.logger.debug(failedResponse);
                        location.href = this.formSettings.backRouting;
                    });
                }
                else {
                    qcobjects_1.logger.debug("No service name declared on serviceClass property");
                }
            }
            formSaveTouchHandler() {
                qcobjects_1.logger.debug("Saving data...");
                const _componentRoot_ = (this.component.shadowed) ? ((this.component?.shadowRoot).host) : (this.component.body);
                this.component.executeBindings();
                if (this.formValidatorModal != null) {
                    const componentElementFields = _componentRoot_.subelements("*[data-field]");
                    const fieldsToValidate = componentElementFields.filter(f => this.hasValidation(f));
                    const _labelledby = function (parentElement, element) {
                        const _arialabelledby = (parentElement, element) => {
                            return (element.getAttribute("aria-labelledby") !== null) ? ((element.getAttribute("aria-labelledby") || "").split(" ").map(e => parentElement.subelements(`#${e}`).map(_e => _e.innerHTML)).join(" ")) : (null);
                        };
                        return (_arialabelledby(parentElement, element)
                            || element.getAttribute("aria-label")
                            || element.getAttribute("placeholder")
                            || element.getAttribute("name")
                            || element.getAttribute("data-field"));
                    };
                    const _ariatitle = function (element) {
                        return (element.getAttribute("title") || element.getAttribute("aria-title") || "");
                    };
                    const invalidFields = fieldsToValidate.filter(f => this.isInvalid(f));
                    if (invalidFields.length > 0) {
                        const validationMessage = `
<details>
    <summary>Please verify the following incorrect fields:</summary>
    <ul>
      <div>
      ${invalidFields.map(element => "<li><div>" + _labelledby(_componentRoot_, element) + "</div><div>" + _ariatitle(element) + "</div></li>").join("")}
      </div>
    </ul>
</details>
`;
                        this.formValidatorModal.body.subelements(".validationMessage")[0].innerHTML = validationMessage;
                        this.formValidatorModal.modal();
                    }
                    else {
                        this.save();
                    }
                }
                else {
                    qcobjects_1.logger.debug("Unable to find the modal validator...");
                    qcobjects_1.logger.debug("Saving data...");
                    this.save();
                }
            }
            constructor(o) {
                super(o);
                this.validations = [];
                this.serviceClass = "";
                this.formSettings = {
                    backRouting: "#",
                    loadingRouting: "#loading",
                    nextRouting: "#signupsuccessful"
                };
                this.component = o.component;
                this.component = this.component.Cast(org_qcobjects_components_1.FormField);
            }
            done() {
                qcobjects_1.logger.debugEnabled = true;
                try {
                    this.component.createBindingEvents();
                    const modalBody = (0, qcobjects_1._DOMCreateElement)("div");
                    modalBody.className = "modal_body";
                    this.formValidatorModal = (0, qcobjects_1.New)(org_qcobjects_components_1.ModalComponent, {
                        body: modalBody,
                        subcomponents: [],
                        data: {
                            content: "<div class=\"validationMessage\"></div>"
                        }
                    });
                    (0, qcobjects_1.Tag)(".modal_body").map(e => document.body.removeChild(e));
                    document.body.append(this.formValidatorModal);
                }
                catch (e) {
                    qcobjects_1.logger.debug("Unable to create the modal");
                }
                this.onpress(".submit", () => {
                    this.formSaveTouchHandler();
                });
            }
        }
    ]);
})();
