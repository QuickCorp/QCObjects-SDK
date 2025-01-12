var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/QCObjects-SDK.ts
var QCObjects_SDK_exports = {};
__export(QCObjects_SDK_exports, {
  BasicLayout: () => BasicLayout,
  ButtonField: () => ButtonField,
  CanvasTool: () => CanvasTool,
  Contact: () => Contact,
  CubeSplashScreenComponent: () => CubeSplashScreenComponent,
  DataGridController: () => DataGridController,
  EmailField: () => EmailField,
  Fade: () => Fade,
  FormController: () => FormController,
  FormField: () => FormField,
  FormValidations: () => FormValidations,
  GenericController: () => GenericController,
  GridComponent: () => GridComponent,
  GridController: () => GridController,
  GridItemComponent: () => GridItemComponent,
  GridView: () => GridView,
  InputField: () => InputField,
  ListComponent: () => ListComponent,
  ListController: () => ListController,
  ListItemComponent: () => ListItemComponent,
  ModalComponent: () => ModalComponent,
  ModalController: () => ModalController,
  ModalEnclosureComponent: () => ModalEnclosureComponent,
  ModalFade: () => ModalFade,
  ModalMoveDown: () => ModalMoveDown,
  ModalMoveUp: () => ModalMoveUp,
  Move: () => Move,
  MoveXInFromLeft: () => MoveXInFromLeft,
  MoveXInFromRight: () => MoveXInFromRight,
  MoveYInFromBottom: () => MoveYInFromBottom,
  MoveYInFromTop: () => MoveYInFromTop,
  NotificationComponent: () => NotificationComponent,
  Radius: () => Radius,
  Resize: () => Resize,
  Rotate: () => Rotate,
  RotateX: () => RotateX,
  RotateY: () => RotateY,
  RotateZ: () => RotateZ,
  SessionData: () => SessionData,
  SessionUserToken: () => SessionUserToken,
  ShadowedComponent: () => ShadowedComponent,
  SlideItemComponent: () => SlideItemComponent,
  SlideListComponent: () => SlideListComponent,
  SliderComponent: () => SliderComponent,
  SliderController: () => SliderController,
  SplashScreenComponent: () => SplashScreenComponent,
  SwaggerUIComponent: () => SwaggerUIComponent,
  SwaggerUIController: () => SwaggerUIController,
  TextField: () => TextField,
  VideoSplashScreenComponent: () => VideoSplashScreenComponent,
  WipeDown: () => WipeDown,
  WipeLeft: () => WipeLeft,
  WipeRight: () => WipeRight,
  WipeUp: () => WipeUp,
  default: () => QCObjects_SDK_default,
  i18n_messages: () => i18n_messages
});
import { CONFIG as CONFIG9, GlobalSettings, _top } from "qcobjects";

// src/js/org.qcobjects.i18n_messages.ts
import { Package, InheritClass, CONFIG, Import, global as global2 } from "qcobjects";
var i18n_messages = class extends InheritClass {
  static {
    __name(this, "i18n_messages");
  }
  constructor({
    messages = []
  }) {
    super({
      messages
    });
    if (CONFIG.get("use_i18n", false)) {
      CONFIG.set("lang", "en");
      if (!global2.get("i18n")) {
        global2.set("i18n", {
          messages
        });
      } else {
        global2.set("i18n", {
          messages: global2.get("i18n").messages.concat(messages)
        });
      }
    }
  }
  _load_i18n_packages_() {
    return CONFIG.get("i18n_languages", []).map((i18n_packagename) => {
      Import(`org.quickcorp.i18n_messages.${i18n_packagename}`);
    });
  }
};
Package("org.qcobjects.i18n_messages", [
  i18n_messages
]);
new i18n_messages({})._load_i18n_packages_();

// src/js/org.qcobjects.models.ts
import { Package as Package2, VO } from "qcobjects";
var Contact = class extends VO {
  static {
    __name(this, "Contact");
  }
};
Package2("org.qcobjects.models", [
  Contact
]);

// src/js/org.qcobjects.components.ts
import { Package as Package7, Component as Component2, _DOMCreateElement, CONFIG as CONFIG2, New, ClassFactory, Tag, ComponentURI } from "qcobjects";

// src/js/org.qcobjects.effects.base.ts
import { Package as Package3, Effect, logger } from "qcobjects";
var Fade = class extends Effect {
  static {
    __name(this, "Fade");
  }
  duration = 1e3;
  static duration;
  constructor(o) {
    super(o);
    this.duration = o?.duration;
  }
  apply(element, alphaFrom, alphaTo) {
    const da = alphaTo - alphaFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger.debug("animation progress: " + progress.toString());
        const alpha = alphaFrom + progress * da / 100;
        logger.debug("alpha: " + alpha.toString());
        element.style.opacity = alpha.toString();
      }
    });
  }
  static apply(element, alphaFrom, alphaTo) {
    const da = alphaTo - alphaFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger.debug("animation progress: " + progress.toString());
        const alpha = alphaFrom + progress * da / 100;
        logger.debug("alpha: " + alpha.toString());
        element.style.opacity = alpha.toString();
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  static animate(arg0) {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Move = class extends Effect {
  static {
    __name(this, "Move");
  }
  duration = 1e3;
  static duration;
  static apply(element, xfrom, yfrom, xto, yto) {
    const dx = xto - xfrom;
    const dy = yto - yfrom;
    element.style.transform = "translate(" + xfrom + "px," + yfrom + "px)";
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger.debug("animation progress: " + progress.toString());
        const y = yfrom + progress * dy / 100;
        const x = xfrom + progress * dx / 100;
        logger.debug("x: " + x.toString() + " y:" + y.toString());
        element.style.transform = "translate(" + x + "px," + y + "px)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  static animate(arg0) {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
Package3("org.qcobjects.effects.base", [
  Fade,
  Move
]);

// src/js/org.qcobjects.effects.extended.ts
import { Effect as Effect2, logger as logger2, Package as Package4 } from "qcobjects";
var MoveXInFromRight = class extends Move {
  static {
    __name(this, "MoveXInFromRight");
  }
  duration = 1e3;
  static apply(element) {
    Move.apply.call(this, element, element.width, 0, 0, 0);
  }
};
var MoveXInFromLeft = class extends Move {
  static {
    __name(this, "MoveXInFromLeft");
  }
  duration = 1e3;
  static apply(element) {
    Move.apply.call(this, element, -element.width, 0, 0, 0);
  }
};
var MoveYInFromBottom = class extends Move {
  static {
    __name(this, "MoveYInFromBottom");
  }
  duration = 1e3;
  static apply(element) {
    Move.apply.call(this, element, 0, element.height, 0, 0);
  }
};
var MoveYInFromTop = class extends Move {
  static {
    __name(this, "MoveYInFromTop");
  }
  duration = 1e3;
  static apply(element) {
    Move.apply.call(this, element, 0, -element.height, 0, 0);
  }
};
var RotateX = class extends Effect2 {
  static {
    __name(this, "RotateX");
  }
  duration = 1e3;
  static duration;
  static apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        logger2.debug("angle: " + angle.toString());
        element.style.transform = "rotate3d(1,0,0," + angle.toString() + "deg)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  static animate(arg0) {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var RotateY = class extends Effect2 {
  static {
    __name(this, "RotateY");
  }
  duration = 1e3;
  static duration;
  static apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        logger2.debug("angle: " + angle.toString());
        element.style.transform = "rotate3d(0,1,0," + angle.toString() + "deg)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  static animate(arg0) {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var RotateZ = class extends Effect2 {
  static {
    __name(this, "RotateZ");
  }
  duration = 1e3;
  apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        logger2.debug("angle: " + angle.toString());
        element.style.transform = "rotate3d(0,0,1," + angle.toString() + "deg)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Rotate = class extends Effect2 {
  static {
    __name(this, "Rotate");
  }
  duration = 1e3;
  apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        logger2.debug("angle: " + angle.toString());
        element.style.transform = "rotate3d(1,1,1," + angle.toString() + "deg)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Radius = class extends Effect2 {
  static {
    __name(this, "Radius");
  }
  duration = 1e3;
  apply(element, radiusFrom, radiusTo) {
    const dr = radiusTo - radiusFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const radius = radiusFrom + progress * dr / 100;
        logger2.debug("radius: " + radius.toString());
        element.style.borderRadius = radius.toString() + "px";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Resize = class extends Effect2 {
  static {
    __name(this, "Resize");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        logger2.debug("resize: " + scale.toString());
        element.style.transformOrigin = "center";
        element.style.transform = "scale(" + scale + "," + scale + ")";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var WipeLeft = class extends Effect2 {
  static {
    __name(this, "WipeLeft");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        logger2.debug("wipe: " + scale.toString());
        element.style.transformOrigin = "right";
        element.style.transform = "scaleX(" + scale + ")";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var WipeRight = class extends Effect2 {
  static {
    __name(this, "WipeRight");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        logger2.debug("wipe: " + scale.toString());
        element.style.transformOrigin = "left";
        element.style.transform = "scaleX(" + scale + ")";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var WipeUp = class extends Effect2 {
  static {
    __name(this, "WipeUp");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        logger2.debug("wipe: " + scale.toString());
        element.style.transformOrigin = "bottom";
        element.style.transform = "scaleY(" + scale + ")";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var WipeDown = class extends Effect2 {
  static {
    __name(this, "WipeDown");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    this.animate({
      duration: this.duration,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        logger2.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        logger2.debug("wipe: " + scale.toString());
        element.style.transformOrigin = "top";
        element.style.transform = "scaleY(" + scale + ")";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
Package4("org.qcobjects.effects.extended", [
  MoveXInFromRight,
  MoveXInFromLeft,
  MoveYInFromBottom,
  MoveYInFromTop,
  RotateX,
  RotateY,
  RotateZ,
  Rotate,
  Radius,
  Resize,
  WipeLeft,
  WipeRight,
  WipeUp,
  WipeDown
]);

// src/js/org.qcobjects.modal.effects.ts
import { Package as Package5 } from "qcobjects";
var ModalFade = class extends Fade {
  static {
    __name(this, "ModalFade");
  }
  duration = 500;
};
var ModalMoveUp = class extends Move {
  static {
    __name(this, "ModalMoveUp");
  }
  duration = 800;
};
var ModalMoveDown = class extends Move {
  static {
    __name(this, "ModalMoveDown");
  }
  duration = 300;
};
Package5("org.qcobjects.modal.effects", [
  ModalFade,
  ModalMoveDown,
  ModalMoveUp
]);

// src/js/org.qcobjects.base.components.ts
import { Package as Package6, Component, logger as logger3 } from "qcobjects";
var FormField = class extends Component {
  static {
    __name(this, "FormField");
  }
  fieldType;
  cached = false;
  reload = true;
  body;
  name;
  data;
  constructor(o) {
    o.name = typeof o.name !== "undefined" ? o.name : "form-field";
    super(o);
  }
  createBindingEvents() {
    let _objList;
    if (typeof this.fieldType === "undefined" || this.fieldType == null) {
      _objList = this.body.subelements("*[data-field]");
    } else {
      _objList = this.body.subelements(this.fieldType + "[data-field]");
    }
    for (let _datak = 0; _datak < _objList.length; _datak++) {
      const _obj = _objList[_datak];
      _obj.addEventListener("change", () => {
        logger3.debug("Executing change event binding");
        this.executeBindings();
      });
      _obj.addEventListener("blur", () => {
        logger3.debug("Executing change event binding");
        this.executeBindings();
      });
      _obj.addEventListener("focus", () => {
        logger3.debug("Executing change event binding");
        this.executeBindings();
      });
      _obj.addEventListener("keydown", () => {
        logger3.debug("Executing keydown event binding");
        this.executeBindings();
      });
    }
  }
  executeBinding(_obj) {
    const _datamodel = _obj.getAttribute("data-field");
    logger3.debug("Binding " + _datamodel + " for " + this.name);
    this.data[_datamodel] = _obj.value;
  }
  executeBindings() {
    let _objList;
    if (typeof this.fieldType === "undefined" || this.fieldType == null) {
      _objList = this.body.subelements("*[data-field]");
    } else {
      _objList = this.body.subelements(this.fieldType + "[data-field]");
    }
    for (let _datak = 0; _datak < _objList.length; _datak++) {
      const _obj = _objList[_datak];
      const _datamodel = _obj.getAttribute("data-field");
      logger3.debug("Binding " + _datamodel + " for " + this.name);
      this.data[_datamodel] = _obj.value;
    }
  }
  done(standardResponse) {
    const _ret_ = super.done(standardResponse);
    this.executeBindings();
    this.createBindingEvents();
    logger3.debug("Field loaded: " + this.fieldType + "[name=" + this.name + "]");
    return _ret_;
  }
};
Package6("org.qcobjects.base.components", [
  FormField
]);

// src/js/org.qcobjects.components.ts
var ShadowedComponent = class extends Component2 {
  static {
    __name(this, "ShadowedComponent");
  }
  container = null;
  shadowed = true;
  cached = false;
  controller = null;
  view = null;
  data = {};
  constructor(o) {
    o.body = _DOMCreateElement("div");
    super(o);
  }
};
var ButtonField = class extends FormField {
  static {
    __name(this, "ButtonField");
  }
  constructor(o) {
    o.fieldType = "button";
    super(o);
  }
};
var InputField = class extends FormField {
  static {
    __name(this, "InputField");
  }
  constructor(o) {
    o.fieldType = "input";
    super(o);
  }
};
var TextField = class extends FormField {
  static {
    __name(this, "TextField");
  }
  constructor(o) {
    o.fieldType = "textarea";
    super(o);
  }
};
var EmailField = class extends FormField {
  static {
    __name(this, "EmailField");
  }
  constructor(o) {
    o.fieldType = "input";
    super(o);
  }
};
var ModalEnclosureComponent = class extends Component2 {
  static {
    __name(this, "ModalEnclosureComponent");
  }
  name = "modalenclosure";
  tplsource = "inline";
  cached = false;
  basePath = CONFIG2.get("modalBasePath", CONFIG2.get("remoteSDKPath", ""));
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
    o.body = _DOMCreateElement("div");
    super(o);
  }
};
var ModalComponent = class extends Component2 {
  static {
    __name(this, "ModalComponent");
  }
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
    o.basePath = CONFIG2.get("modalBasePath", CONFIG2.get("remoteSDKPath", ""));
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
    Tag("#modalInstance_" + modalId + ".modal").map((modal) => {
      modal.style.display = "block";
      return new ModalFade().apply(modal, 0, 1);
    });
    Tag("#modalInstance_" + modalId + ".modal .modal-content").map((modalcontent) => {
      return ModalMoveDown.apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
    });
    Tag("#modalInstance_" + modalId + ".modal .modal-content .close").map((closebtn) => {
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
    Tag("#modalInstance_" + modalId + ".modal").map((modal) => {
      modal.style.display = "block";
      return new ModalFade({ duration: 3e3 }).apply(modal, 1, 0);
    });
    Tag("#modalInstance_" + modalId + ".modal .modal-content").map(function(modalcontent) {
      return ModalMoveUp.apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
    });
    setTimeout(function() {
      Tag("#modalInstance_" + modalId + ".modal").map((modal) => {
        modal.style.display = "none";
        return true;
      });
    }, 900);
  }
  rebuild() {
    const _ret_ = super.rebuild();
    this.templateURI = ComponentURI({
      "COMPONENTS_BASE_PATH": CONFIG2.get("componentsBasePath", ""),
      "COMPONENT_NAME": "modal",
      "TPLEXTENSION": CONFIG2.get("tplextension", ""),
      "TPL_SOURCE": "default"
      // here is always default in order to get the right uri
    });
    return _ret_;
  }
};
var SwaggerUIComponent = class extends Component2 {
  static {
    __name(this, "SwaggerUIComponent");
  }
  cached = false;
  basePath = CONFIG2.get("remoteSDKPath", "");
  tplextension = "tpl.html";
  name = "swagger-ui";
};
Package7("org.qcobjects.form.components", [
  ShadowedComponent,
  ButtonField,
  InputField,
  TextField,
  EmailField,
  ModalEnclosureComponent,
  ModalComponent,
  SwaggerUIComponent
]);

// src/js/org.qcobjects.components.grid.ts
import { Package as Package8, Component as Component3 } from "qcobjects";
var GridItemComponent = class extends Component3 {
  static {
    __name(this, "GridItemComponent");
  }
  name = "grid-item";
  shadowed = true;
  tplsource = "inline";
  template = `
<img src="{{image}}" />
<p>{{description}}</p>
`;
  cached = false;
};
var GridComponent = class extends Component3 {
  static {
    __name(this, "GridComponent");
  }
  name = "grid";
  cached = false;
  view = null;
  shadowed = true;
  rows = 3;
  cols = 3;
  templateURI = "";
  data = {};
  tplsource = "inline";
  template = "<p>Loading...</p>";
  body;
  constructor(o) {
    super(o);
    this.body.setAttribute("controllerClass", "DataGridController");
    const subcomponentClass = this.body.getAttribute("subcomponentClass") !== null ? this.body.getAttribute("subcomponentClass") : "GridItemComponent";
    this.body.setAttribute("subcomponentClass", subcomponentClass);
  }
};
Package8("org.qcobjects.components.grid", [
  GridComponent,
  GridItemComponent
]);

// src/js/org.qcobjects.components.list.ts
import { Component as Component4, Package as Package9 } from "qcobjects";
var ListItemComponent = class extends Component4 {
  static {
    __name(this, "ListItemComponent");
  }
  shadowed = false;
  tplsource = "inline";
  template = '<a href="{{value}}">{{label}}</a>';
  cached = false;
  constructor(o) {
    o.name = "list-item";
    super(o);
  }
};
var ListComponent = class extends Component4 {
  static {
    __name(this, "ListComponent");
  }
  data;
  shadowed = true;
  tplsource = "inline";
  template = "<p>Loading...</p>";
  body;
  shadowRoot;
  rows;
  subcomponents;
  done;
  serviceData;
  constructor(o) {
    o.name = "list";
    super(o);
    this.body.setAttribute("controllerClass", "ListController");
    this.body.setAttribute("subcomponentClass", "ListItemComponent");
  }
};
Package9("org.qcobjects.components.list", [
  ListItemComponent,
  ListComponent
]);

// src/js/org.qcobjects.components.slider.ts
import { Package as Package10, Component as Component5 } from "qcobjects";
var SlideListComponent = class extends Component5 {
  static {
    __name(this, "SlideListComponent");
  }
  tplsource = "inline";
  template = "<p>Loading...</p>";
  name = "slidelist";
  body;
  constructor(o) {
    super(o);
    this.body.setAttribute("controllerClass", "DataGridController");
    const subcomponentClass = this.body.getAttribute("subcomponentClass") !== null ? this.body.getAttribute("subcomponentClass") : "GridItemComponent";
    this.body.setAttribute("subcomponentClass", subcomponentClass);
  }
};
var SlideItemComponent = class extends Component5 {
  static {
    __name(this, "SlideItemComponent");
  }
  effectClass = "Fade";
  name = "slider_item";
  data;
  template;
  tplsource;
  constructor(o) {
    super(o);
    this.data.slideNumber = this.data.__dataIndex + 1;
    this.template = `
    <div class="qcoSlides" style="display:none">
      <div class="qco-slider__numbertext">{{slideNumber}} / {{__dataLength}}</div>
      <img src="{{image}}" alt="{{title}}"/>
      <div class="qco-slider__text">
        <p>{{label}} <a href="{{link}}">{{category}}</a></p>
      </div>
    </div>
    `;
    this.tplsource = "inline";
  }
};
var SliderComponent = class extends Component5 {
  static {
    __name(this, "SliderComponent");
  }
  name = "slider";
  template;
  tplsource;
  shadowed;
  data;
  body;
  __instanceID;
  constructor(o) {
    super(o);
    this.template = `
    <style>
    /* Slideshow container */

    :host a:hover,
    :host a:active,
    :host a:visited {
      color: #ffffff;
    }

     {
      color: #ffffff;
    }

    :host .prev {left:0;}
    .qco-slider__container {
      max-width: 100%;
      position: relative;
      margin: auto;
      height: 300px;
    }
    :host .qco-slider__container .qcoSlides img {
      object-fit: cover;
      width: 100%;
      height: 300px;
    }

    /* Next & previous buttons */
    :host .prev,
    :host .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      background-color: rgba(1, 1, 1, 0.1);
    }

    /* Position the "next button" to the right */
    :host .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    :host .prev:hover,
    :host .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Caption text */
    :host .qco-slider__text {
      color: #f2f2f2;
      font-size: 15px;
/*      padding: 8px 12px;*/
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
      text-shadow: -1px 1px 3px #111111;
      background-color: rgba(1,1,1,0.7);
    }

    /* Number text (1/3 etc) */
    :host .qco-slider__numbertext {
      color: #f2f2f2;
      text-shadow: 0px 2px 3px #111111;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
      padding-top: 0;
      margin-top: 10px;
    }

    /* The dots/bullets/indicators */
    :host .qcoSlider__dots {
      text-align: center;
      margin: 0 auto;
      padding: 0;
    }
    :host .qcoSlider__dots--dot {
      cursor: pointer;
      height: 10px;
      width: 10px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    :host .active,
    :host .qcoSlider__dots--dot:hover {
      background-color: #717171;
    }

    :host .qco-slider__container .qcoSlides img {
      border-radius: 30px 30px 0px 0px;
    }

    </style>

    <div class="qco-slider__container">
      <component name="slidelist" componentClass="SlideListComponent" subcomponentClass="SlideItemComponent" serviceClass="{{SERVICE_CLASS}}" ></component>

      <a class="prev" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(-1)">&#10094;</a>
      <a class="next" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(1)">&#10095;</a>
    </div>
    <br>

    <div class="qcoSlider__dots" style="text-align:center">
    </div>

    `;
    this.tplsource = "inline";
    this.shadowed = true;
    this.data.SERVICE_CLASS = this.body.getAttribute("serviceClass");
    this.data.sliderHandler = "slider_" + this.__instanceID.toString();
    this.body.setAttribute("controllerClass", "SliderController");
  }
};
Package10("org.qcobjects.components.slider", [
  SlideListComponent,
  SlideItemComponent,
  SliderComponent
]);

// src/js/org.qcobjects.components.notifications.ts
import { Package as Package11, Component as Component6, _DOMCreateElement as _DOMCreateElement2, New as New2, _super_ } from "qcobjects";
var NotificationComponent = class _NotificationComponent extends Component6 {
  static {
    __name(this, "NotificationComponent");
  }
  cached = false;
  tplsource = "inline";
  shadowed = false;
  kinds;
  template;
  constructor(o) {
    o.name = "notification";
    o.body = _DOMCreateElement2("div");
    super(o);
    this.template = `
    <style>
    div.notification_background {
      display: block; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      bottom:0;
      right:0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      border: none !important;
    }
    div.notification {
      border-radius: 12px !important;
      margin-bottom: 15px;
      padding: 4px 12px;
    }
    .notification.danger {
      background-color: #ffdddd;
      border-left: 6px solid #f44336;
    }
    .notification.success {
      background-color: #ddffdd;
      border-left: 6px solid #4CAF50;
    }
    .notification.info {
      background-color: #e7f3fe;
      border-left: 6px solid #2196F3;
    }
    .notification.warning {
      background-color: #ffffcc;
      border-left: 6px solid #ffeb3b;
    }
    </style>
    <div class="notification_background">
    <div class="notification {{kind}}">
      <p><strong>{{title}}</strong> {{message}}</p>
    </div>
    </div>
    `;
    this.kinds = ["danger", "success", "info", "warning"];
  }
  display(element) {
    const _display_ = /* @__PURE__ */ __name(function(element2) {
      element2.style.display = "block";
      const appearEffect = New2(Move, {
        duration: 900,
        apply(element3) {
          _super_("Fade", "apply").call(this, element3, 0, 1);
          _super_("Move", "apply").call(this, element3, 0, -document.body.clientHeight, 0, 0);
        }
      });
      const disappearEffect = New2(Move, {
        duration: 650,
        apply(element3) {
          _super_("Fade", "apply").call(this, element3, 1, 0);
          _super_("Move", "apply").call(this, element3, 0, 0, 0, -document.body.clientHeight);
        }
      });
      appearEffect.apply(element2);
      setTimeout(function() {
        disappearEffect.apply(element2);
      }, 2e3);
    }, "_display_");
    element.subelements("div.notification_background").map((element2) => {
      return new Fade({ duration: 500 }).apply(element2, 0, 1);
    });
    element.subelements("div.notification").map((element2) => _display_(element2));
    setTimeout(function() {
      element.remove();
    }, 2200);
  }
  static success(message) {
    const c = New2(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: _DOMCreateElement2("div"),
      data: {
        kind: "success",
        title: "Success!",
        message: `${message}...`
      }
    });
    document.body.append(c);
    const _componentRoot = c.shadowed ? c.shadowRoot.host : c.body;
    c.display(_componentRoot);
  }
  static danger(message) {
    const c = New2(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: _DOMCreateElement2("div"),
      data: {
        kind: "danger",
        title: "Danger!",
        message: `${message}...`
      }
    });
    document.body.append(c);
    const _componentRoot = c.shadowed ? c.shadowRoot.host : c.body;
    c.display(_componentRoot);
  }
  static info(message) {
    const c = New2(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: _DOMCreateElement2("div"),
      data: {
        kind: "info",
        title: "Info!",
        message: `${message}...`
      }
    });
    document.body.append(c);
    const _componentRoot = c.shadowed ? c.shadowRoot.host : c.body;
    c.display(_componentRoot);
  }
  static warning(message) {
    const c = New2(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: _DOMCreateElement2("div"),
      data: {
        kind: "warning",
        title: "Warning!",
        message: `${message}...`
      }
    });
    document.body.append(c);
    const _componentRoot = c.shadowed ? c.shadowRoot.host : c.body;
    c.display(_componentRoot);
  }
};
Package11("org.quickcorp.components.notifications", [
  NotificationComponent
]);

// src/js/org.qcobjects.components.splashscreen.ts
import { Package as Package12, Component as Component7, CONFIG as CONFIG3, logger as logger4, global as global3 } from "qcobjects";
var SplashScreenComponent = class extends Component7 {
  static {
    __name(this, "SplashScreenComponent");
  }
  _enabled_;
  _bgcolor;
  cached = false;
  shadowed = true;
  body;
  shadowRoot;
  constructor(component) {
    component.name = typeof component.name === "undefined" ? "splashscreen" : component.name;
    const isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self;
    const isStartURL = location.hash === "" && location.pathname === "/" && location.search === "" || CONFIG3.get("routingWay", "pathname") === "hash" && CONFIG3.get("start_url", "/") === location.hash || CONFIG3.get("routingWay", "pathname") === "pathname" && CONFIG3.get("start_url", "/") === location.pathname || CONFIG3.get("routingWay", "pathname") === "search" && CONFIG3.get("start_url", "/") === location.search;
    const _enabled_ = isBrowser && isStartURL;
    if (_enabled_) {
      component.basePath = CONFIG3.get("splashscreenBasePath", CONFIG3.get("remoteSDKPath", ""));
      if (typeof component.data === "undefined") {
        component.data = {};
      }
      component.data.basePath = component.basePath;
    } else {
      if (typeof component !== "undefined" && typeof component.body !== "undefined") {
        component.body.style.display = "none";
      }
    }
    super(component);
    this._bgcolor = "";
    this._enabled_ = _enabled_;
    if (this._enabled_) {
      const displayEffectDuration = 1e3;
      let duration = this.body.getAttribute("duration");
      if (duration === null) {
        duration = displayEffectDuration;
      } else {
        duration = parseInt(duration.toString());
      }
      this._bgcolor = this.body.style.backgroundColor;
      const _helper_ = /* @__PURE__ */ __name(() => {
        setTimeout(() => {
          if (!_helper_.executed) {
            const _componentRoot = this.shadowed ? this.shadowRoot?.host : this.body;
            if (typeof global3.componentsStack !== "undefined") {
              global3.componentsStack.filter((c) => c.body.hasAttribute("splashscreen")).map(
                (mainComponent) => {
                  logger4.debug(`Splash Screen of Main Component: ${mainComponent.name}`);
                  mainComponent.splashScreenComponent = this;
                  const SplashScreenHandler = /* @__PURE__ */ __name(() => {
                    if (!SplashScreenHandler.executed) {
                      const component2 = mainComponent.splashScreenComponent;
                      const mainElement = mainComponent.shadowed ? mainComponent.shadowRoot?.host : mainComponent.body;
                      mainComponent._mainPosition = mainElement.style.position;
                      if (typeof mainElement !== "undefined") {
                        mainElement.style.position = "fixed";
                      }
                      mainComponent._mainOpacity = mainElement.style.opacity;
                      _componentRoot.style.width = "100%";
                      _componentRoot.style.height = "100%";
                      document.body.style.backgroundColor = "#111111";
                      mainElement.style.opacity = "0";
                      setTimeout(function() {
                        if (typeof _componentRoot !== "undefined") {
                          document.body.style.backgroundColor = component2?._bgcolor;
                          _componentRoot.subelements("#slot-logo").map((slotlogo) => {
                            slotlogo.style.display = "block";
                            slotlogo.style.transformOrigin = "center";
                            return new Resize().apply(slotlogo, 1, 0);
                          });
                          new Fade().apply(_componentRoot, 1, 0);
                        }
                      }, duration - displayEffectDuration);
                      setTimeout(function() {
                        new Fade().apply(mainElement, 0, 1);
                        mainElement.style.position = mainComponent._mainPosition;
                        document.body.style.backgroundColor = component2._bgcolor;
                        if (_componentRoot.parentElement !== null) {
                          _componentRoot.parentElement.remove();
                        }
                      }, duration);
                    }
                    SplashScreenHandler.executed = true;
                  }, "SplashScreenHandler");
                  return mainComponent.addComponentHelper(SplashScreenHandler.bind(mainComponent));
                }
              );
            }
            _helper_.executed = true;
          }
        });
      }, "_helper_");
      _helper_.executed = false;
      this.addComponentHelper(_helper_.bind(component));
    }
  }
  // eslint-disable-next-line no-unused-vars
  addComponentHelper(arg0) {
    throw new Error("Method not implemented.");
  }
};
Package12("org.qcobjects.components.base", [
  SplashScreenComponent
]);
var VideoSplashScreenComponent = class extends SplashScreenComponent {
  static {
    __name(this, "VideoSplashScreenComponent");
  }
  cached = false;
  shadowed = true;
  tplsource = "inline";
  template = `
  <style>
  :host * {
    box-sizing: border-box;
  }

  :host {
    zoom: 1.0;
    width: device-width;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  #slot-logo::slotted(img) {
      vertical-align: middle;
      display: block;
      width: 40vw;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 9999999999;
      transform-origin: center;
      transform-style: preserve-3d;
      filter: blur(0em);
      transition: filter 0.5s;
      max-width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeIn 5s;
      -webkit-animation: fadeIn 5s;
      -moz-animation: fadeIn 5s;
      -o-animation: fadeIn 5s;
      -ms-animation: fadeIn 5s;        
  }

  :host * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none;
    /* prevent webkit from resizing text to fit */
    -webkit-user-select: none;
    /* prevent copy paste, to allow, change 'none' to 'text' */
  }

  /* FOCUS */
  :host summary:focus,
  :host a:focus,
  :host button:focus {
    outline: none;
  }

  .splashscreen,
  .fullscreen-bg {
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    background-attachment: fixed;
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
  }

  .splashscreen .splashcontent {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    z-index: 1;
  }

  .splashscreen .splashcontent p {
    color: white;
  }

  video.fullscreen-bg__video {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    z-index: 0;
    object-fit: cover;
    filter: brightness(0.3);
  }
    .splashscreen,
    .fullscreen-bg {
      background-image: url('{{background}}');
    }

    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }      

  </style>
  <div class="splashscreen">
    <div class="fullscreen-bg splashcontent">
      <video loop muted autoplay playsinline name="media" poster="{{background}}" class="fullscreen-bg__video" data-setup="{}" height="100%">
        <source src="{{video_mp4}}" type="video/mp4">
        <source src="{{video_ogg}}" type="video/ogg">
        <source src="{{video_webm}}" type="video/webm">
      </video>
      <slot id="slot-logo" name="logo"></slot>
    </div>
  </div>

  `;
  constructor(o) {
    o.name = "videosplashscreen";
    super(o);
  }
};
var CubeSplashScreenComponent = class extends SplashScreenComponent {
  static {
    __name(this, "CubeSplashScreenComponent");
  }
  cached = false;
  shadowed = true;
  tplsource = "inline";
  template = `
  <style>
  @keyframes spin {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes spin-duplicate {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes roll {
    0% {
      transform: translate3d(-200px, -50px, -400px)
    }

    12% {
      transform: translate3d(0px, 0, -100px)
    }

    25% {
      transform: translate3d(200px, -50px, -400px)
    }

    37% {
      transform: translate3d(0px, -100px, -800px)
    }

    50% {
      transform: translate3d(-200px, -50px, -400px)
    }

    62% {
      transform: translate3d(0px, 0, -100px)
    }

    75% {
      transform: translate3d(200px, -50px, -400px)
    }

    87% {
      transform: translate3d(0px, -100px, -800px)
    }

    100% {
      transform: translate3d(-200px, -50px, -400px)
    }
  }

  #wrapper {
    position: relative;
    width: 200px;
    padding-top: 100px;
    margin: 0 auto;
    perspective: 1200px;
  }

  #platform {
    margin-top: 100px;
  }

  #dice span {
    position: absolute;
    margin: 100px 0 0 100px;
    display: block;
    font-size: 2.5em;
    padding: 10px;
  }

  #dice {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: spin 50s infinite linear;
  }

  .side {
    position: absolute;
    width: 200px;
    height: 200px;
    background: none;
    box-shadow: inset 0 0 40px #fff0;
    border-radius: 40px;
  }

  #dice .cover, #dice .inner {
    background: #e0e0e0;
    box-shadow: none;
  }

  #dice .cover {
    border-radius: 0;
    transform-origin: center;
    transform: translateZ(0px);
  }

  #dice .cover.x {
    transform-origin: center;
    transform: rotateY(90deg);
  }

  #dice .cover.z {
    transform-origin: center;
    transform: rotateX(90deg);
  }

  #dice .front {
    transform-origin: center;
    transform: translateZ(100px);
  }

  #dice .front.inner {
    transform-origin: center;
    transform: translateZ(98px);
  }

  #dice .back {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(100px);
  }

  #dice .back.inner {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(98px);
  }

  #dice .right {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(100px);
  }

  #dice .right.inner {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(98px);
  }

  #dice .left {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(100px);
  }

  #dice .left.inner {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(98px);
  }

  #dice .top {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(100px);
  }

  #dice .top.inner {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(98px);
  }

  #dice .bottom {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(100px);
  }

  #dice .bottom.inner {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(98px);
  }

  .dot {
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background: #444;
    box-shadow: inset 5px 0 10px #000;
  }

  .dot.center {
    margin: 77px 0 0 77px;
  }

  .dot.dtop {
    margin-top: 20px;
  }

  .dot.dleft {
    margin-left: 134px;
  }

  .dot.dright {
    margin-left: 20px;
  }

  .dot.dbottom {
    margin-top: 134px;
  }

  .dot.center.dleft {
    margin: 77px 0 0 20px;
  }

  .dot.center.dright {
    margin: 77px 0 0 134px;
  }

  #background {
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--root-background, transparent);
    background-size: cover;
    background-origin: border-box;
  }

  #dice .side.front,
  #dice .side.top,
  #dice .side.right,
  #dice .side.left,
  #dice .side.bottom,
  #dice .side.back {
    background-image: var(--background-3d-cube-image, "none");
    background-size: cover;
    background-origin: border-box;
  }


  :root, :host {
    --background-3d-cube-image: url('{{cube_image}}');
    --box-width: 200px;
    font-size:.9em;
    font-family:sans-serif;
    --root-background: {{background}};
  }
  </style>

  <div id="background"></div>
  <div id="wrapper">
    <div id="platform">
      <div id="dice">
        <div class="side front">
        </div>
        <div class="side front inner"></div>
        <div class="side top"></div>
        <div class="side top inner"></div>
        <div class="side right"></div>
        <div class="side right inner"></div>
        <div class="side left"></div>
        <div class="side left inner"></div>
        <div class="side bottom"></div>
        <div class="side bottom inner"></div>
        <div class="side back"></div>
        <div class="side back inner"></div>
        <div class="side cover x"></div>
        <div class="side cover y"></div>
        <div class="side cover z"></div>
      </div>
    </div>
  </div>

  `;
  constructor(o) {
    o.name = "cubesplashscreen";
    super(o);
  }
};
Package12("org.qcobjects.components.splashscreen", [
  SplashScreenComponent,
  VideoSplashScreenComponent,
  CubeSplashScreenComponent
]);

// src/js/org.qcobjects.controllers.ts
import { Controller, Package as Package13 } from "qcobjects";
var GenericController = class extends Controller {
  static {
    __name(this, "GenericController");
  }
};
Package13("org.qcobjects.controllers", [
  GenericController
]);

// src/js/org.qcobjects.controllers.list.ts
import { Package as Package14, Controller as Controller2, logger as logger5, CONFIG as CONFIG4, _DataStringify, _DOMCreateElement as _DOMCreateElement3, New as New3, ClassFactory as ClassFactory2, ComponentURI as ComponentURI2, serviceLoader } from "qcobjects";
var ListController = class extends Controller2 {
  static {
    __name(this, "ListController");
  }
  __instanceID;
  component;
  valueField;
  labelField;
  rows;
  cols;
  _componentRoot;
  constructor({ component, dependencies = [], valueField = void 0, labelField = void 0 }) {
    super({ component, dependencies, valueField, labelField });
    this.component = component;
    this._componentRoot = this.component.shadowed ? this.component.shadowRoot : this.component.body;
    this.labelField = this.component.body.getAttribute("label-field");
    this.valueField = this.component.body.getAttribute("value-field");
    this.rows = this.component.body.getAttribute("rows");
    this.rows = this.rows !== null ? this.rows : this.component.rows;
    this.cols = 1;
    logger5.debug("ListController INIT");
  }
  getPageIndex(page, totalPage, totalElements) {
    page = page > 0 ? page - 1 : 0;
    return [totalElements * page / totalPage, totalElements * page / totalPage + totalElements / totalPage];
  }
  addSubcomponents() {
    this.component.subcomponents = [];
    const layout = this.component.body.getAttribute("layout");
    const basePath = CONFIG4.get("listBasePath", CONFIG4.get("remoteSDKPath", ""));
    let cssLayout = "";
    this.labelField = this.component.body.getAttribute("label-field");
    this.valueField = this.component.body.getAttribute("value-field");
    if (layout === "horizontal") {
      cssLayout = `@import url("${basePath}css/components/horizontal-list.css");`;
    } else {
      cssLayout = `@import url("${basePath}css/components/list.css");`;
    }
    if (typeof this._componentRoot !== "undefined") {
      this._componentRoot.innerHTML = `<style>${cssLayout}</style><ul></ul>`;
    }
    logger5.debug(_DataStringify(this.component.data));
    try {
      const subcomponentClass = this.component.body.getAttribute("subcomponentClass");
      if (subcomponentClass != null) {
        let offset;
        let limit;
        let pagesNumber;
        let list = [...this.component.data];
        let paginateIn = this.component.body.getAttribute("paginate-in");
        paginateIn = paginateIn !== null ? paginateIn : "client";
        let page;
        if (paginateIn === "client") {
          page = this.component.body.getAttribute("page-number");
          page = isNaN(page) || page === null ? -1 : page;
          if (page !== -1) {
            pagesNumber = this.component.body.getAttribute("total-pages");
            pagesNumber = isNaN(pagesNumber) ? 1 : pagesNumber;
            offset = this.getPageIndex(page, pagesNumber, list.length)[0];
            limit = this.getPageIndex(page, pagesNumber, list.length)[1];
          } else {
            offset = 0;
            limit = list.length;
            pagesNumber = 1;
          }
          list = list.slice(offset, limit);
        } else {
          offset = 0;
          limit = list.length;
          pagesNumber = 1;
        }
        list.map(
          (record, dataIndex) => {
            const _ret_ = void 0;
            try {
              const _body = _DOMCreateElement3("li");
              record.label = record[this.labelField];
              record.value = record[this.valueField];
              const subcomponent = New3(ClassFactory2(subcomponentClass), {
                name: "list-item",
                data: {
                  label: record[this.labelField],
                  value: record[this.valueField],
                  __dataIndex: dataIndex,
                  __page: page,
                  __totalPages: pagesNumber,
                  __limit: limit,
                  __offset: offset
                },
                templateURI: ComponentURI2({
                  "COMPONENTS_BASE_PATH": CONFIG4.get("componentsBasePath", ""),
                  "COMPONENT_NAME": ClassFactory2(subcomponentClass).name,
                  "TPLEXTENSION": CONFIG4.get("tplextension", ""),
                  "TPL_SOURCE": ClassFactory2(subcomponentClass).tplsource
                }),
                body: _body,
                template: ClassFactory2(subcomponentClass).template
              });
              subcomponent.done = this.component.done.bind(subcomponent);
              try {
                if (subcomponent) {
                  subcomponent.data.__dataIndex = dataIndex;
                  if (Object.hasOwnProperty.call(this.component.data, "length")) {
                    subcomponent.data.__dataLength = this.component.data.length;
                  }
                  logger5.debug("adding subcomponent to body");
                  this._componentRoot.subelements("ul").map((ul) => ul.append(subcomponent));
                  try {
                    this.component.subcomponents.push(subcomponent);
                  } catch (e) {
                    logger5.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
                  }
                } else {
                  logger5.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                }
              } catch (e) {
                logger5.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
              }
            } catch (e) {
              logger5.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
            }
            return _ret_;
          }
        );
      } else {
        logger5.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
      }
    } catch (e) {
      logger5.debug(`No data for component: ${e}`);
    }
  }
  cssGrid() {
    const component = this.component;
    const _componentRoot = component.shadowed ? component.shadowRoot : component.body;
    if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined") {
      const s = _DOMCreateElement3("style");
      const templateRows = "auto ".repeat(this.rows);
      const templateCols = "auto ".repeat(this.cols);
      const className = "grid" + this.__instanceID.toString();
      s.innerHTML = `.${className}{
          display: grid;           grid-template-rows: ${templateRows};           grid-template-columns: ${templateCols};           margin:0 auto;         }`;
      _componentRoot.append(s);
      _componentRoot.classList.add(className);
    }
  }
  done() {
    this.cssGrid();
    const componentInstance = this.component;
    logger5.debug("ListController DONE");
    const serviceClass = this.component.body.getAttribute("serviceClass");
    if (serviceClass != null) {
      let offset;
      let limit;
      let paginateIn = componentInstance.body.getAttribute("paginate-in");
      paginateIn = paginateIn !== null ? paginateIn : "client";
      if (paginateIn === "server") {
        let page = componentInstance.body.getAttribute("page-number");
        page = isNaN(page) || page === null ? -1 : page;
        let pagesNumber;
        if (page !== -1) {
          const serverDataCount = this.component.body.getAttribute("server-data-count") !== null ? this.component.body.getAttribute("server-data-count") : 1;
          pagesNumber = this.component.body.getAttribute("total-pages");
          pagesNumber = isNaN(pagesNumber) ? 1 : pagesNumber;
          offset = this.getPageIndex(page, pagesNumber, serverDataCount)[0];
          limit = this.getPageIndex(page, pagesNumber, serverDataCount)[1];
          componentInstance.serviceData = typeof componentInstance.serviceData !== "undefined" ? componentInstance.serviceData : {};
          componentInstance.serviceData.params = typeof componentInstance.serviceData.params !== "undefined" ? componentInstance.serviceData.params : {};
          componentInstance.serviceData.params.offset = offset;
          componentInstance.serviceData.params.limit = limit;
        }
      }
      serviceLoader(New3(ClassFactory2(serviceClass), {
        data: componentInstance.serviceData
      }), false).then(
        (successfulResponse) => {
          logger5.debug("DONE SERVICE COMPONENT");
          successfulResponse.service.JSONresponse = JSON.parse(successfulResponse.service.template);
          if (typeof successfulResponse.service.JSONresponse.result !== "undefined") {
            logger5.debug(_DataStringify(successfulResponse.service.JSONresponse.result));
            componentInstance.data = successfulResponse.service.JSONresponse.result;
          } else {
            componentInstance.data = successfulResponse.service.JSONresponse;
          }
          this.addSubcomponents();
        },
        (failedResponse) => {
          logger5.debug(failedResponse);
        }
      ).catch((e) => {
        logger5.debug("Something went wrong when calling the service from: " + serviceClass);
        logger5.debug(e.message);
      });
    }
  }
};
Package14("org.qcobjects.controllers.list", [
  ListController
]);

// src/js/org.qcobjects.controllers.grid.ts
import { Package as Package15, Controller as Controller3, _DOMCreateElement as _DOMCreateElement4, logger as logger6, _DataStringify as _DataStringify2, ClassFactory as ClassFactory3, New as New4, ComponentURI as ComponentURI3, CONFIG as CONFIG5, serviceLoader as serviceLoader2 } from "qcobjects";
var GridController = class extends Controller3 {
  static {
    __name(this, "GridController");
  }
  __instanceID;
  rows;
  cols;
  component;
  constructor(controller) {
    super(controller);
    this.rows = this.component.body.getAttribute("rows");
    this.rows = this.rows !== null ? this.rows : this.component.rows;
    this.cols = this.component.body.getAttribute("cols");
    this.cols = this.cols !== null ? this.cols : this.component.cols;
  }
  cssGrid() {
    const component = this.component;
    const _componentRoot = component.shadowed ? component.shadowRoot : component.body;
    if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined") {
      const s = _DOMCreateElement4("style");
      const templateRows = "auto ".repeat(this.rows);
      const templateCols = "auto ".repeat(this.cols);
      const className = "grid" + this.__instanceID.toString();
      s.innerHTML = `.${className}{
        display: grid;         grid-template-rows: ${templateRows};         grid-template-columns: ${templateCols};         margin:0 auto;       }`;
      _componentRoot?.append(s);
      if (component.shadowed) {
        _componentRoot?.host.classList.add(className);
      } else {
        _componentRoot.classList.add(className);
      }
    }
  }
  done() {
    this.cssGrid();
    logger6.debug("GridComponent built");
  }
};
var DataGridController = class extends Controller3 {
  static {
    __name(this, "DataGridController");
  }
  __instanceID;
  rows;
  cols;
  _componentRoot;
  component;
  constructor(controller) {
    super(controller);
    this._componentRoot = controller.component.shadowed ? controller.component.shadowRoot : controller.component.body;
    this.rows = controller.component.body.getAttribute("rows");
    this.rows = controller.rows !== null ? controller.rows : controller.component.rows;
    this.cols = controller.component.body.getAttribute("cols");
    this.cols = controller.cols !== null ? controller.cols : controller.component.cols;
    logger6.debug("DataGridController INIT");
  }
  getPageIndex(page, totalPage, totalElements) {
    page = page > 0 ? page - 1 : 0;
    return [totalElements * page / totalPage, totalElements * page / totalPage + totalElements / totalPage];
  }
  addSubcomponents() {
    this.component.subcomponents = [];
    if (typeof this._componentRoot !== "undefined") {
      this._componentRoot.innerHTML = "";
    }
    this.cssGrid();
    logger6.debug(_DataStringify2(this.component.data));
    try {
      const subcomponentClass = this.component.body.getAttribute("subcomponentClass");
      if (subcomponentClass != null) {
        let offset;
        let limit;
        let pagesNumber;
        let list = [...this.component.data];
        let paginateIn = this.component.body.getAttribute("paginate-in");
        let page;
        paginateIn = paginateIn !== null ? paginateIn : "client";
        if (paginateIn === "client") {
          page = this.component.body.getAttribute("page-number");
          page = isNaN(page) || page === null ? -1 : page;
          if (page !== -1) {
            pagesNumber = this.component.body.getAttribute("total-pages");
            pagesNumber = isNaN(pagesNumber) ? 1 : pagesNumber;
            offset = this.getPageIndex(page, pagesNumber, list.length)[0];
            limit = this.getPageIndex(page, pagesNumber, list.length)[1];
          } else {
            offset = 0;
            limit = list.length;
            pagesNumber = 1;
          }
          list = list.slice(offset, limit);
        } else {
          offset = 0;
          limit = list.length;
          pagesNumber = 1;
        }
        list.map(
          (record, dataIndex, list2) => {
            const _ret_ = void 0;
            try {
              const _body = _DOMCreateElement4("component");
              _body.setAttribute("name", ClassFactory3(subcomponentClass).name);
              _body.setAttribute("shadowed", ClassFactory3(subcomponentClass).shadowed);
              _body.setAttribute("cached", ClassFactory3(subcomponentClass).cached);
              record = Object.assign(record, {
                __dataIndex: dataIndex,
                __dataLength: list2.length,
                __page: page,
                __totalPages: pagesNumber,
                __limit: limit,
                __offset: offset
              });
              const subcomponent = New4(ClassFactory3(subcomponentClass), {
                name: "item",
                data: record,
                templateURI: ComponentURI3({
                  "COMPONENTS_BASE_PATH": CONFIG5.get("componentsBasePath", ""),
                  "COMPONENT_NAME": ClassFactory3(subcomponentClass).name,
                  "TPLEXTENSION": CONFIG5.get("tplextension", ""),
                  "TPL_SOURCE": ClassFactory3(subcomponentClass).tplsource
                }),
                body: _body,
                template: ClassFactory3(subcomponentClass).template
              });
              subcomponent.done = this.component.done.bind(subcomponent);
              try {
                if (subcomponent) {
                  subcomponent.data.__dataIndex = dataIndex;
                  if (Object.hasOwnProperty.call(this.component.data, "length")) {
                    subcomponent.data.__dataLength = this.component.data.length;
                  }
                  logger6.debug("adding subcomponent to body");
                  this._componentRoot?.append(subcomponent.body);
                  try {
                    this.component.subcomponents.push(subcomponent);
                  } catch (e) {
                    logger6.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
                  }
                } else {
                  logger6.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                }
              } catch (e) {
                logger6.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
              }
            } catch (e) {
              logger6.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
            }
            return _ret_;
          }
        );
      } else {
        logger6.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
      }
    } catch (e) {
      logger6.debug(`No data for component: ${e}`);
    }
  }
  cssGrid() {
    const component = this.component;
    const _componentRoot = component.shadowed ? component.shadowRoot : component.body;
    if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined") {
      const s = _DOMCreateElement4("style");
      const templateRows = "auto ".repeat(this.rows);
      const templateCols = "auto ".repeat(this.cols);
      const className = "grid" + this.__instanceID.toString();
      s.innerHTML = `.${className}{
        display: grid;         grid-template-rows: ${templateRows};         grid-template-columns: ${templateCols};         margin:0 auto;       }`;
      if (component.shadowed) {
        component.body.append(s);
        _componentRoot.host.classList.add(className);
      } else {
        _componentRoot?.append(s);
        _componentRoot.classList.add(className);
      }
    }
  }
  done() {
    const componentInstance = this.component;
    logger6.debug("DataGridController DONE");
    const serviceClass = this.component.body.getAttribute("serviceClass");
    if (serviceClass != null) {
      let offset;
      let limit;
      let paginateIn = componentInstance.body.getAttribute("paginate-in");
      paginateIn = paginateIn !== null ? paginateIn : "client";
      if (paginateIn === "server") {
        let page = componentInstance.body.getAttribute("page-number");
        page = isNaN(page) || page === null ? -1 : page;
        let pagesNumber;
        if (page !== -1) {
          const serverDataCount = this.component.body.getAttribute("server-data-count") !== null ? this.component.body.getAttribute("server-data-count") : 1;
          pagesNumber = this.component.body.getAttribute("total-pages");
          pagesNumber = isNaN(pagesNumber) ? 1 : pagesNumber;
          offset = this.getPageIndex(page, pagesNumber, serverDataCount)[0];
          limit = this.getPageIndex(page, pagesNumber, serverDataCount)[1];
          componentInstance.serviceData = typeof componentInstance.serviceData !== "undefined" ? componentInstance.serviceData : {};
          componentInstance.serviceData.params = typeof componentInstance.serviceData.params !== "undefined" ? componentInstance.serviceData.params : {};
          componentInstance.serviceData.params.offset = offset;
          componentInstance.serviceData.params.limit = limit;
        }
      }
      serviceLoader2(New4(ClassFactory3(serviceClass), {
        data: componentInstance.serviceData
      }), false).then(
        (successfulResponse) => {
          logger6.debug("DONE SERVICE COMPONENT");
          successfulResponse.service.JSONresponse = JSON.parse(successfulResponse.service.template);
          if (typeof successfulResponse.service.JSONresponse.result !== "undefined") {
            logger6.debug(_DataStringify2(successfulResponse.service.JSONresponse.result));
            componentInstance.data = successfulResponse.service.JSONresponse.result;
          } else {
            componentInstance.data = successfulResponse.service.JSONresponse;
          }
          this.addSubcomponents();
        },
        (failedResponse) => {
          logger6.debug(failedResponse);
        }
      ).catch((e) => {
        logger6.debug("Something went wrong when calling the service from: " + serviceClass);
        logger6.debug(e.message);
      });
    }
  }
};
Package15("org.qcobjects.controllers.grid", [
  GridController,
  DataGridController
]);

// src/js/org.qcobjects.controllers.slider.ts
import { ClassFactory as ClassFactory4, Controller as Controller4, New as New5, Package as Package16, logger as logger7 } from "qcobjects";
var SliderController = class extends Controller4 {
  static {
    __name(this, "SliderController");
  }
  slideIndex = 0;
  duration = 7100;
  interval = null;
  sliderHandlerName = "";
  _componentRoot;
  component;
  constructor({ component, dependencies = [], duration = 7100, slideIndex = 0, interval = null, sliderHandlerName = null }) {
    super({ component, dependencies, duration, slideIndex, interval, sliderHandlerName });
    this.component = component;
    this._componentRoot = component.shadowed ? component.shadowRoot : component.body;
    this.sliderHandlerName = "slider_" + this.component.__instanceID.toString();
    global.set(this.sliderHandlerName, this);
  }
  stop() {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }
  plusSlidesAndStop(n) {
    this.stop();
    this.plusSlides(n);
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.stop();
    this.showSlides(this.slideIndex = n);
  }
  automate() {
    this.interval = setInterval(() => {
      this.plusSlides(1);
    }, this.duration);
  }
  showSlides(n) {
    const slides = this._componentRoot?.subelements(".qcoSlides");
    const dots = this._componentRoot?.subelements(".qcoSlider__dots--dot");
    if (n > slides.length - 1) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = 0;
    }
    slides.filter((slide, index) => {
      return index !== this.slideIndex;
    }).map((slide) => {
      return New5(ClassFactory4("Fade"), {}).apply(slide, 1, 0);
    });
    dots.filter((dot, index) => {
      return index !== this.slideIndex;
    }).map((dot) => {
      return dot.classList.remove("active");
    });
    try {
      dots[this.slideIndex].classList.add("active");
    } catch (e) {
      logger7.debug(`Something went wrong when trying to activate a slide: ${this.slideIndex} - ${e.message}`);
    }
    setTimeout(() => {
      slides.filter((slide, index) => {
        return index !== this.slideIndex;
      }).map((slide) => {
        slide.style.display = "none";
        return slide.style.display;
      });
      try {
        slides[this.slideIndex].style.display = "block";
        New5(ClassFactory4("Fade"), {}).apply(slides[this.slideIndex], 0, 1);
      } catch (e) {
        logger7.debug(`Something went wrong when trying to show a slide: ${this.slideIndex} - ${e.message}`);
      }
    }, 700);
  }
  fillDots() {
    const slides = this._componentRoot?.subelements(".qcoSlides");
    slides.map((slide, index) => {
      const dotHTML = document.createElement("span");
      const dotContent = `<span class="qcoSlider__dots--dot" onclick="global.get('${this.sliderHandlerName}').currentSlide(${index})"></span>`;
      dotHTML.innerHTML = dotContent;
      return this._componentRoot?.subelements(".qcoSlider__dots")[0].append(dotHTML);
    });
  }
  done() {
    const slides = this._componentRoot?.subelements(".qcoSlides");
    slides.filter((slide, index) => {
      return index !== this.slideIndex;
    }).map((slide) => {
      slide.style.display = "none";
      return slide.style.display;
    });
    setTimeout(() => {
      this.fillDots();
      this.slideIndex = 0;
      this.showSlides(this.slideIndex);
      this.automate();
    }, 3e3);
  }
};
Package16("org.qcobjects.controllers.slider", [
  SliderController
]);

// src/js/org.qcobjects.controllers.form.ts
import { Package as Package17, Controller as Controller5, serviceLoader as serviceLoader3, New as New6, ClassFactory as ClassFactory5, logger as logger8, _DOMCreateElement as _DOMCreateElement5, Tag as Tag2 } from "qcobjects";
var FormValidations = class extends Controller5 {
  static {
    __name(this, "FormValidations");
  }
  getDefault() {
    return function(fieldName, dataValue, element) {
      const _regex = {
        name: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
        email: "^([A-Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$"
      };
      const _pattern_ = element.getAttribute("pattern") || _regex[fieldName];
      const pattern = new RegExp(_pattern_);
      return pattern.test(dataValue);
    };
  }
};
var FormController = class extends Controller5 {
  static {
    __name(this, "FormController");
  }
  validations = [];
  formValidatorModal;
  serviceClass = "";
  formSettings = {
    backRouting: "#",
    loadingRouting: "#loading",
    nextRouting: "#signupsuccessful"
  };
  component;
  hasValidation(element) {
    const fieldName = element.getAttribute("data-field");
    let _hasValidation = false;
    if (typeof this.validations !== "undefined" && Object.hasOwnProperty.call(this.validations, fieldName)) {
      _hasValidation = true;
    }
    return _hasValidation;
  }
  isInvalid(element) {
    let _isInvalid = false;
    const fieldName = element.getAttribute("data-field");
    const dataValue = this.component.data[fieldName];
    const _execValidation = /* @__PURE__ */ __name((fieldName2, dataValue2, element2) => {
      return typeof this.validations !== "undefined" && Object.hasOwnProperty.call(this.validations, fieldName2) && this.validations[fieldName2].call(null, fieldName2, dataValue2, element2);
    }, "_execValidation");
    if (typeof this.validations !== "undefined" && !_execValidation(fieldName, dataValue, element)) {
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
      serviceLoader3(New6(ClassFactory5(this.serviceClass), {
        data: this.component.data
      }), false).then(
        () => {
          console.log("DONE SERVICE COMPONENT");
          location.href = this.formSettings.nextRouting;
        },
        (failedResponse) => {
          logger8.debug(failedResponse);
          location.href = this.formSettings.backRouting;
        }
      );
    } else {
      logger8.debug("No service name declared on serviceClass property");
    }
  }
  formSaveTouchHandler() {
    logger8.debug("Saving data...");
    const _componentRoot_ = this.component.shadowed ? (this.component?.shadowRoot).host : this.component.body;
    this.component.executeBindings();
    if (this.formValidatorModal != null) {
      const componentElementFields = _componentRoot_.subelements("*[data-field]");
      const fieldsToValidate = componentElementFields.filter(
        (f) => this.hasValidation(f)
      );
      const _labelledby = /* @__PURE__ */ __name(function(parentElement, element) {
        const _arialabelledby = /* @__PURE__ */ __name((parentElement2, element2) => {
          return element2.getAttribute("aria-labelledby") !== null ? (element2.getAttribute("aria-labelledby") || "").split(" ").map(
            (e) => parentElement2.subelements(`#${e}`).map((_e) => _e.innerHTML)
          ).join(" ") : null;
        }, "_arialabelledby");
        return _arialabelledby(parentElement, element) || element.getAttribute("aria-label") || element.getAttribute("placeholder") || element.getAttribute("name") || element.getAttribute("data-field");
      }, "_labelledby");
      const _ariatitle = /* @__PURE__ */ __name(function(element) {
        return element.getAttribute("title") || element.getAttribute("aria-title") || "";
      }, "_ariatitle");
      const invalidFields = fieldsToValidate.filter((f) => this.isInvalid(f));
      if (invalidFields.length > 0) {
        const validationMessage = `
<details>
  <summary>Please verify the following incorrect fields:</summary>
  <ul>
    <div>
    ${invalidFields.map((element) => "<li><div>" + _labelledby(_componentRoot_, element) + "</div><div>" + _ariatitle(element) + "</div></li>").join("")}
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
      logger8.debug("Unable to find the modal validator...");
      logger8.debug("Saving data...");
      this.save();
    }
  }
  constructor(o) {
    super(o);
    this.component = o.component;
    this.component = this.component.Cast(FormField);
  }
  done() {
    logger8.debugEnabled = true;
    try {
      this.component.createBindingEvents();
      const modalBody = _DOMCreateElement5("div");
      modalBody.className = "modal_body";
      this.formValidatorModal = New6(ModalComponent, {
        body: modalBody,
        subcomponents: [],
        data: {
          content: '<div class="validationMessage"></div>'
        }
      });
      Tag2(".modal_body").map((e) => document.body.removeChild(e));
      document.body.append(this.formValidatorModal.body);
    } catch (e) {
      logger8.debug(`Unable to create the modal: ${e}`);
    }
    this.onpress(".submit", () => {
      this.formSaveTouchHandler();
    });
  }
  // eslint-disable-next-line no-unused-vars
  onpress(arg0, arg1) {
    throw new Error("Method not implemented.");
  }
};
Package17("org.qcobjects.controllers.form", [
  FormController,
  FormValidations
]);

// src/js/org.qcobjects.controllers.swagger.ts
import { CONFIG as CONFIG6, Controller as Controller6, New as New7, Package as Package18, SourceCSS, SourceJS } from "qcobjects";
var SwaggerUIController = class extends Controller6 {
  static {
    __name(this, "SwaggerUIController");
  }
  component;
  dependencies;
  startSwaggerUI() {
    if (typeof SwaggerUIBundle !== "undefined") {
      const ui = SwaggerUIBundle({
        url: CONFIG6.get("swagger-ui-url", "https://petstore.swagger.io/v2/swagger.json"),
        dom_id: "#" + CONFIG6.get("swagger-ui-dom_id", "swagger-ui"),
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      });
      window.ui = ui;
    }
  }
  done() {
    this.component.body.innerHTML = '<div id="' + CONFIG6.get("swagger-ui-dom_id", "swagger-ui") + '"></div>';
    const swaggerUIPackagePath = CONFIG6.get("swagger-ui-package-path", "node_modules/swagger-ui-dist/");
    this.dependencies?.push(New7(SourceJS, {
      url: swaggerUIPackagePath + "swagger-ui-standalone-preset.js",
      external: CONFIG6.get("swagger-ui-external", false)
    }));
    this.dependencies?.push(New7(SourceCSS, {
      url: swaggerUIPackagePath + "swagger-ui.css",
      external: CONFIG6.get("swagger-ui-external", false)
    }));
    this.dependencies?.push(New7(SourceJS, {
      url: swaggerUIPackagePath + "swagger-ui-bundle.js",
      external: CONFIG6.get("swagger-ui-external", false),
      done: /* @__PURE__ */ __name(() => {
        this.startSwaggerUI();
      }, "done")
    }));
  }
};
Package18("org.qcobjects.controllers.swagger", [
  SwaggerUIController
]);

// src/js/org.qcobjects.modal.controllers.ts
import { Package as Package19, Controller as Controller7 } from "qcobjects";
var ModalController = class extends Controller7 {
  static {
    __name(this, "ModalController");
  }
  component;
  done() {
    const component = this.component;
    component.body.innerHTML = component.body.innerHTML.replace("/{{content}}/g", component.submodal.template);
  }
};
Package19("org.qcobjects.modal.controllers", [
  ModalController
]);

// src/js/org.qcobjects.views.ts
import { Package as Package20, View } from "qcobjects";
var GridView = class extends View {
  static {
    __name(this, "GridView");
  }
};
Package20("org.qcobjects.views", [
  GridView
]);

// src/js/org.qcobjects.tools.canvas.ts
import { Package as Package21, InheritClass as InheritClass2 } from "qcobjects";
var CanvasTool = class extends InheritClass2 {
  static {
    __name(this, "CanvasTool");
  }
  drawImageFilled(img, canvas, zoom = 1, px = 0, py = 0) {
    let scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    scale = scale * zoom;
    const x = canvas.width / 2 - img.width / 2 * scale;
    const y = canvas.height / 2 - img.height / 2 * scale;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, px + x, py + y, img.width * scale, img.height * scale);
  }
  getImageResized(img, width, height, resizedImage, zoom = 1, px = 0, py = 0) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width.toString();
    canvas.style.height = height.toString();
    this.drawImageFilled(img, canvas, zoom, px, py);
    resizedImage.src = canvas.toDataURL("image/png");
    return canvas;
  }
};
Package21("org.qcobjects.tools.canvas", [
  CanvasTool
]);

// src/js/org.qcobjects.tools.layouts.ts
import { CONFIG as CONFIG7, InheritClass as InheritClass3, New as New8, Package as Package22, SourceCSS as SourceCSS2, Tag as Tag3 } from "qcobjects";
var BasicLayout = class extends InheritClass3 {
  static {
    __name(this, "BasicLayout");
  }
  dependencies = [];
  constructor({ component = null, dependencies = [] }) {
    super({ component, dependencies });
  }
  load() {
    this.dependencies.push(New8(SourceCSS2, {
      external: !CONFIG7.get("useLocalSDK", false),
      url: CONFIG7.get("useLocalSDK", false) ? "css/basic-layout.css" : CONFIG7.get("remoteSDKPath", false) + "css/basic-layout.css"
    }));
  }
  coloredBorder() {
    setTimeout(function() {
      Tag3("nav").map((element) => {
        element.style.border = "20px solid #3333";
      });
      Tag3("nav").map((element) => {
        element.style.backgroundColor = "#129999";
      });
      Tag3("component>footer").map((element) => {
        element.style.background = "#876";
      });
      Tag3("component>div").map((element) => {
        element.style.border = "3px dashed #fff";
      });
      Tag3("component>section").map((element) => {
        element.style.border = "3px solid #000";
      });
      Tag3("component>section").map((element) => {
        element.style.backgroundColor = "#fffaaa";
      });
      Tag3("component>article").map((element) => {
        element.style.border = "3px dotted #000";
      });
      Tag3("component>header").map((element) => {
        element.style.background = "#789";
      });
      Tag3("component>footer").map((element) => {
        element.style.background = "#876";
      });
      Tag3("component>article:nth-child(1)").map((element) => {
        element.style.border = "1px solid #444";
      });
      Tag3("component>article:nth-child(1)").map((element) => {
        element.style.backgroundColor = "#555aaa";
      });
      Tag3("component>article:nth-child(2)").map((element) => {
        element.style.backgroundColor = "#aaa333";
      });
      Tag3("component>article:nth-child(3)").map((element) => {
        element.style.backgroundColor = "#54da82";
      });
      Tag3("*").map((element) => {
        element.style.color = "#fff";
      });
      Tag3("component>article").map((element) => Fade.apply(element, 0, 1));
      Tag3("component>footer").map((element) => Fade.apply(element, 0, 1));
      Tag3("component>header").map((element) => Fade.apply(element, 0, 1));
      Tag3("nav").map((element) => {
        element.style.display = "block";
        element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString();
        MoveXInFromLeft.apply(element);
      });
      Tag3("component>article").map((element) => {
        element.style.display = "block";
        element.style.height = element.offsetParent?.scrollHeight.toString() || element.clientHeight.toString();
        MoveYInFromBottom.apply(element);
      });
      Tag3("component>article:nth-child(2)").map((element) => {
        element.style.display = "block";
        element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString();
        MoveXInFromRight.apply(element);
      });
    }, 300);
  }
};
Package22("org.qcobjects.tools.layouts", [
  BasicLayout
]);

// src/js/org.qcobjects.cloud.auth.session.usertoken.ts
import { CONFIG as CONFIG8, ComplexStorageCache, InheritClass as InheritClass4, New as New9, Package as Package23, _Crypt, global as global4 } from "qcobjects";
var SessionUserToken = class _SessionUserToken extends InheritClass4 {
  static {
    __name(this, "SessionUserToken");
  }
  static user = {};
  __cache__;
  __instanceID;
  constructor(o) {
    super(o);
    const __instance__ = this;
    this.__cache__ = new ComplexStorageCache({
      index: __instance__.__instanceID.toString(),
      load() {
        let __token__;
        if (typeof navigator !== "undefined" && typeof origin !== "undefined") {
          __token__ = _Crypt.encrypt(`${navigator.userAgent}|${o.username}|${(+/* @__PURE__ */ new Date()).toString()}`, origin);
        } else {
          __token__ = _Crypt.encrypt(`${o.username}|${(+/* @__PURE__ */ new Date()).toString()}`, CONFIG8.get("domain", "localhost"));
        }
        _SessionUserToken.user = {
          priority: __instance__.__instanceID.toString(),
          token: __token__
        };
        return _SessionUserToken.user;
      },
      alternate(cacheController) {
        _SessionUserToken.user = cacheController?.cache.getCached(__instance__.__instanceID.toString());
      }
    });
  }
  static generateIndex(s) {
    return typeof Buffer !== "undefined" ? Buffer.from(s, "ascii").toString("base64") : btoa(s);
  }
  static getGlobalUser(...args) {
    const username = [args].join("|");
    const __index__ = "userToken_" + _SessionUserToken.generateIndex(username);
    if (typeof global4.get(__index__) === "undefined" || global4.get(__index__) === null) {
      global4.set(__index__, New9(_SessionUserToken, {
        username
      }));
    }
    _SessionUserToken.user = global4.get(__index__).user;
    return global4.get(__index__).user;
  }
  static getGlobalUserToken(...args) {
    return _SessionUserToken.getGlobalUser(args).token;
  }
  static getGlobalUserId(...args) {
    return _SessionUserToken.getGlobalUser(args).id;
  }
  static getGlobalUserPriority(...args) {
    return _SessionUserToken.getGlobalUser(args).priority;
  }
  static getLoginCredentialsToken(username, password) {
    return _Crypt.encrypt(`${username}${password}`, _SessionUserToken.getGlobalUserToken(username));
  }
  static closeGlobalSession(...args) {
    _SessionUserToken.getGlobalUser(args);
    const username = [args].join("|");
    const __index__ = "userToken_" + _SessionUserToken.generateIndex(username);
    if (typeof global4.get(__index__) !== "undefined") {
      global4.get(__index__).__cache__.clear();
      global4.set(__index__, null);
      _SessionUserToken.user = {};
    }
  }
};
Package23("org.qcobjects.cloud.auth.session.usertoken", [
  SessionUserToken
]);

// src/js/org.qcobjects.cloud.auth.session.data.ts
import { Package as Package24, InheritClass as InheritClass5, _DataStringify as _DataStringify3 } from "qcobjects";
var SessionData = class extends InheritClass5 {
  static {
    __name(this, "SessionData");
  }
  __session_container__ = null;
  sessionData;
  /**
   * Sets the session container
   * 
   * @param {*} sessionContainer1, sessionContainer2, ...
   *
   */
  setSessionContainer() {
    this.__session_container__ = [...arguments];
  }
  /**
   * Gets the session container
   *
   * @return {*} sessionContainer
   */
  getSessionContainer() {
    if (typeof this.__session_container__ === "undefined" || this.__session_container__ === null) {
      throw new Error("You need to set a session container first: sessionData.setSessionContainer(...arguments)");
    }
    return this.__session_container__;
  }
  /**
   * Gets the session data
   *
   * @return {*} sessionData
   */
  getSessionData(...args) {
    const s = sessionStorage.getItem(`${this.index(args)}`);
    let sessionData;
    if (s !== null) {
      sessionData = JSON.parse(s);
    }
    if (typeof sessionData === "undefined" || sessionData === null) {
      sessionData = {};
    }
    return sessionData;
  }
  /**
   * Returns an index of the session
   * 
   * @param {string} valueForIndex
   * @return {string} index
   * @example sessionInstance.index("me@email.com", "myusername")
   * 
   */
  index(...args) {
    if (typeof SessionUserToken === "undefined") {
      throw new Error('You need to import SessionUserToken first: Import ("org.qcobjects.cloud.auth.session.usertoken")');
    }
    return `session_${btoa(SessionUserToken.getGlobalUserToken(args))}`;
  }
  /**
   * Saves the session instance
   *
   */
  save(...args) {
    const s = _DataStringify3(this.sessionData);
    sessionStorage.setItem(`${this.index(args)}`, s);
  }
  /**
   *
   * Gets the session value
   *
   * @param {*} name
   * @param {*} defaultValue
   * @return {*} 
   */
  get(name, defaultValue) {
    const sessionData = this.getSessionData(this.getSessionContainer());
    return typeof sessionData[name] !== "undefined" ? sessionData[name] : defaultValue;
  }
  /**
   *
   * Sets the session value
   * 
   * @param {*} name
   * @param {*} value
   */
  set(name, value) {
    const sessionContainer = this.getSessionContainer();
    const sessionData = this.getSessionData(sessionContainer);
    this.sessionData = sessionData;
    this.sessionData[name] = value;
    this.save(sessionContainer);
  }
};
Package24("org.qcobjects.cloud.auth.session.data", [
  SessionData
]);

// src/QCObjects-SDK.ts
(/* @__PURE__ */ __name(function __qcobjects_sdk__(_top2) {
  "use strict";
  if (typeof Object.defineProperty !== "undefined" && typeof _top2 !== "undefined") {
    try {
      Object.defineProperty(_top2, "__qcobjects_sdk__", {
        enumerable: true,
        configurable: false,
        writable: false,
        // eslint-disable-next-line camelcase
        value: __qcobjects_sdk__
      });
    } catch (e) {
      if (typeof _top2.__qcobjects_sdk__ !== "undefined") {
        _top2.__qcobjects_sdk__.__loaded__ = true;
      }
    }
  }
  if (typeof _top2.__qcobjects_sdk__.__loaded__ === "undefined") {
    _top2.__qcobjects_sdk__.__loaded__ = true;
    if (typeof _top2 === "undefined") {
      throw Error("Top context empty: It should either global, module or window");
    }
    const __start__ = GlobalSettings.__start__.bind(_top2);
    _top2._sdk_ = Promise.resolve().then(() => {
      CONFIG9.set("useSDK", true);
      __start__();
    });
  }
}, "__qcobjects_sdk__"))(_top);
var QCObjects_SDK_default = _top;

// src/index.ts
var src_default = QCObjects_SDK_exports;
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map
