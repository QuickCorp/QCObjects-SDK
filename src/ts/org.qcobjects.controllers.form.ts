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
import { Package, Controller, serviceLoader, New, ClassFactory, logger, _DOMCreateElement, Tag } from "qcobjects";
import { FormField, ModalComponent } from "./org.qcobjects.components";

export class FormValidations extends Controller {
  getDefault() {
    return function (fieldName: string, dataValue: any, element: HTMLElement) {
      const _regex = {
        name: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
        email: "^([A-Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$"
      };
      const _pattern_ = (element.getAttribute("pattern") || _regex[fieldName as keyof typeof _regex]);
      const pattern = new RegExp(_pattern_);
      return pattern.test(dataValue);
    };
  }

}

export class FormController extends Controller {
  validations: any[] = [];
  formValidatorModal!: ModalComponent;
  serviceClass = "";
  formSettings = {
    backRouting: "#",
    loadingRouting: "#loading",
    nextRouting: "#signupsuccessful"
  };
  component: any;

  hasValidation(element: HTMLElement) {
    const fieldName = element.getAttribute("data-field") as string;
    let _hasValidation = false;
    if (typeof this.validations !== "undefined"
      && Object.hasOwnProperty.call(this.validations, fieldName)) {
      _hasValidation = true;
    }
    return _hasValidation;
  }

  isInvalid(element: HTMLElement) {
    let _isInvalid = false;
    const fieldName = element.getAttribute("data-field");
    const dataValue = this.component.data[fieldName as string];

    const _execValidation = (fieldName: string, dataValue: any, element: HTMLElement) => {

      return (typeof this.validations !== "undefined"
        && Object.hasOwnProperty.call(this.validations, fieldName)
        && this.validations[fieldName as keyof typeof this.validations].call(null, fieldName, dataValue, element));
    };

    if (typeof this.validations !== "undefined" && (
      !_execValidation(fieldName as string, dataValue, element)
    )) {
      _isInvalid = true;
    }
    return _isInvalid;
  }

  isValid(element: HTMLElement) {
    return !this.isInvalid(element);
  }

  save() {
    if (this.serviceClass !== "") {
      location.href = this.formSettings.loadingRouting;
      serviceLoader(New(ClassFactory(this.serviceClass), {
        data: this.component.data
      }), false).then(
        () => {
          // This will show the service response as a plain text
          console.log("DONE SERVICE COMPONENT");
          location.href = this.formSettings.nextRouting;

        },
        (failedResponse: string) => {
          logger.debug(failedResponse);
          location.href = this.formSettings.backRouting;
        });
    } else {
      logger.debug("No service name declared on serviceClass property");
    }

  }

  formSaveTouchHandler() {
    logger.debug("Saving data...");
    const _componentRoot_ = (this.component.shadowed) ? ((this.component?.shadowRoot as ShadowRoot).host) : (this.component.body);
    (this.component).executeBindings();
    if (this.formValidatorModal != null) {
      const componentElementFields = _componentRoot_.subelements("*[data-field]");
      const fieldsToValidate = componentElementFields.filter(
        (f: any) => this.hasValidation(f)
      );

      const _labelledby = function (parentElement: HTMLElement, element: HTMLElement) {
        const _arialabelledby = (parentElement: HTMLElement, element: HTMLElement) => {
          return (element.getAttribute("aria-labelledby") !== null) ? ((element.getAttribute("aria-labelledby") || "").split(" ").map(

            e => (parentElement as any).subelements(`#${e}`).map((_e: any) => _e.innerHTML)
          ).join(" ")) : (null);
        };

        return (_arialabelledby(parentElement, element)
          || element.getAttribute("aria-label")
          || element.getAttribute("placeholder")
          || element.getAttribute("name")
          || element.getAttribute("data-field"));
      };

      const _ariatitle = function (element: HTMLElement) {
        return (element.getAttribute("title") || element.getAttribute("aria-title") || "");
      };

      const invalidFields = fieldsToValidate.filter((f: any) => this.isInvalid(f));
      if (invalidFields.length > 0) {
        const validationMessage = `
<details>
  <summary>Please verify the following incorrect fields:</summary>
  <ul>
    <div>
    ${invalidFields.map((element: any) => "<li><div>" + _labelledby(_componentRoot_ as HTMLElement, element) + "</div><div>" + _ariatitle(element) + "</div></li>").join("")}
    </div>
  </ul>
</details>
`;
        this.formValidatorModal.body.subelements(".validationMessage")[0].innerHTML = validationMessage;
        this.formValidatorModal.modal();
      } else {
        this.save();
      }
    } else {
      logger.debug("Unable to find the modal validator...");
      logger.debug("Saving data...");
      this.save();
    }
  }

  constructor(o: any) {
    super(o);
    this.component = o.component;
    this.component = this.component.Cast(FormField);
  }

  done() {
    logger.debugEnabled = true;
    try {
      (this.component).createBindingEvents();
      const modalBody = _DOMCreateElement("div");
      modalBody.className = "modal_body";
      this.formValidatorModal = New(ModalComponent, {
        body: modalBody,
        subcomponents: [],
        data: {
          content: "<div class=\"validationMessage\"></div>"
        }
      });


      Tag(".modal_body").map((e: any) => document.body.removeChild(e));
      document.body.append(this.formValidatorModal.body);

    } catch (e: any) {
      logger.debug(`Unable to create the modal: ${e}`);
    }
    this.onpress(".submit", () => {
      this.formSaveTouchHandler();
    });

  }
  // eslint-disable-next-line no-unused-vars
  onpress(arg0: string, arg1: () => void) {
    throw new Error("Method not implemented.");
  }


}

Package("org.qcobjects.controllers.form", [
  FormController,
  FormValidations

]);

