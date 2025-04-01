"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = void 0;
const qcobjects_1 = require("qcobjects");
class FormField extends qcobjects_1.Component {
    fieldType;
    cached = false;
    reload = true;
    body;
    name;
    data;
    constructor(o) {
        o.name = (typeof o.name !== "undefined") ? (o.name) : ("form-field");
        super(o);
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
exports.FormField = FormField;
(0, qcobjects_1.Package)("org.qcobjects.base.components", [
    FormField
]);
