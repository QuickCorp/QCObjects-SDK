import {Package, Component, logger} from "qcobjects";
export type FieldComponentParams = {
  name: string;
  body: any;
  data: any;
  basePath?: string;
  fieldType: string;
}
export class FormField extends Component {
  fieldType!: string;
  cached = false;
  reload = true;
  body: any;
  name!: string;
  data: any;
  constructor(o: FieldComponentParams) {
    o.name = (typeof o.name !== "undefined") ? (o.name) : ("form-field");
    super(o);
  }

  createBindingEvents() {
    let _objList;
    if (typeof this.fieldType === "undefined" || this.fieldType == null) {
      _objList = this.body.subelements("*[data-field]"); // every child with data-field set
    } else {
      _objList = this.body.subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
    }
    for (let _datak = 0; _datak < _objList.length; _datak++) {
      const _obj = _objList[_datak];
      _obj.addEventListener("change", () => {
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
      _obj.addEventListener("keydown", () => {
        logger.debug("Executing keydown event binding");
        this.executeBindings();
      });
    }
  }

  executeBinding(_obj: HTMLElement & { value: any }) {
    const _datamodel = _obj.getAttribute("data-field");
    logger.debug("Binding " + _datamodel + " for " + this.name);
    this.data[_datamodel as keyof typeof this.data] = _obj.value;
  }

  executeBindings() {
    let _objList;
    if (typeof this.fieldType === "undefined" || this.fieldType == null) {
      _objList = this.body.subelements("*[data-field]"); // every child with data-field set
    } else {
      _objList = this.body.subelements(this.fieldType + "[data-field]"); // every child with data-field set and tagname is equal to fieldType property
    }
    for (let _datak = 0; _datak < _objList.length; _datak++) {
      const _obj = _objList[_datak] as HTMLElement & { value: any };
      const _datamodel = _obj.getAttribute("data-field");
      logger.debug("Binding " + _datamodel + " for " + this.name);
      this.data[_datamodel as keyof typeof this.data] = _obj.value;
    }
  }

  done(standardResponse: any): Promise<any> {
    const _ret_ = super.done(standardResponse);
    this.executeBindings();
    this.createBindingEvents();
    logger.debug("Field loaded: " + this.fieldType + "[name=" + this.name + "]");
    return _ret_ as Promise<any>;
  }


}

Package("org.qcobjects.base.components", [
  FormField
]);
