"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

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
var import_qcobjects25 = require("qcobjects");

// src/js/org.qcobjects.i18n_messages.ts
var import_qcobjects = require("qcobjects");
var i18n_messages = class extends import_qcobjects.InheritClass {
  static {
    __name(this, "i18n_messages");
  }
  constructor({
    messages = []
  }) {
    super({
      messages
    });
    if (import_qcobjects.CONFIG.get("use_i18n", false)) {
      import_qcobjects.CONFIG.set("lang", "en");
      if (!import_qcobjects.global.get("i18n")) {
        import_qcobjects.global.set("i18n", {
          messages
        });
      } else {
        import_qcobjects.global.set("i18n", {
          messages: import_qcobjects.global.get("i18n").messages.concat(messages)
        });
      }
    }
  }
  _load_i18n_packages_() {
    return import_qcobjects.CONFIG.get("i18n_languages", []).map((i18n_packagename) => {
      (0, import_qcobjects.Import)(`org.quickcorp.i18n_messages.${i18n_packagename}`);
    });
  }
};
(0, import_qcobjects.Package)("org.qcobjects.i18n_messages", [
  i18n_messages
]);
new i18n_messages({})._load_i18n_packages_();

// src/js/org.qcobjects.models.ts
var import_qcobjects2 = require("qcobjects");
var Contact = class extends import_qcobjects2.VO {
  static {
    __name(this, "Contact");
  }
};
(0, import_qcobjects2.Package)("org.qcobjects.models", [
  Contact
]);

// src/js/org.qcobjects.components.ts
var import_qcobjects7 = require("qcobjects");

// src/js/org.qcobjects.effects.base.ts
var import_qcobjects3 = require("qcobjects");
var Fade = class extends import_qcobjects3.Effect {
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
        import_qcobjects3.logger.debug("animation progress: " + progress.toString());
        const alpha = alphaFrom + progress * da / 100;
        import_qcobjects3.logger.debug("alpha: " + alpha.toString());
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
        import_qcobjects3.logger.debug("animation progress: " + progress.toString());
        const alpha = alphaFrom + progress * da / 100;
        import_qcobjects3.logger.debug("alpha: " + alpha.toString());
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
var Move = class extends import_qcobjects3.Effect {
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
        import_qcobjects3.logger.debug("animation progress: " + progress.toString());
        const y = yfrom + progress * dy / 100;
        const x = xfrom + progress * dx / 100;
        import_qcobjects3.logger.debug("x: " + x.toString() + " y:" + y.toString());
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
(0, import_qcobjects3.Package)("org.qcobjects.effects.base", [
  Fade,
  Move
]);

// src/js/org.qcobjects.effects.extended.ts
var import_qcobjects4 = require("qcobjects");
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
var RotateX = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        import_qcobjects4.logger.debug("angle: " + angle.toString());
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
var RotateY = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        import_qcobjects4.logger.debug("angle: " + angle.toString());
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
var RotateZ = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        import_qcobjects4.logger.debug("angle: " + angle.toString());
        element.style.transform = "rotate3d(0,0,1," + angle.toString() + "deg)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Rotate = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const angle = Math.round(angleFrom + progress * da / 100);
        import_qcobjects4.logger.debug("angle: " + angle.toString());
        element.style.transform = "rotate3d(1,1,1," + angle.toString() + "deg)";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Radius = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const radius = radiusFrom + progress * dr / 100;
        import_qcobjects4.logger.debug("radius: " + radius.toString());
        element.style.borderRadius = radius.toString() + "px";
      }
    });
  }
  // eslint-disable-next-line no-unused-vars
  animate(arg0) {
    throw new Error("Method not implemented.");
  }
};
var Resize = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        import_qcobjects4.logger.debug("resize: " + scale.toString());
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
var WipeLeft = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        import_qcobjects4.logger.debug("wipe: " + scale.toString());
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
var WipeRight = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        import_qcobjects4.logger.debug("wipe: " + scale.toString());
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
var WipeUp = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        import_qcobjects4.logger.debug("wipe: " + scale.toString());
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
var WipeDown = class extends import_qcobjects4.Effect {
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
        import_qcobjects4.logger.debug("animation progress: " + progress.toString());
        const scale = scaleFrom + progress * ds / 100;
        import_qcobjects4.logger.debug("wipe: " + scale.toString());
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
(0, import_qcobjects4.Package)("org.qcobjects.effects.extended", [
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
var import_qcobjects5 = require("qcobjects");
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
(0, import_qcobjects5.Package)("org.qcobjects.modal.effects", [
  ModalFade,
  ModalMoveDown,
  ModalMoveUp
]);

// src/js/org.qcobjects.base.components.ts
var import_qcobjects6 = require("qcobjects");
var FormField = class extends import_qcobjects6.Component {
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
        import_qcobjects6.logger.debug("Executing change event binding");
        this.executeBindings();
      });
      _obj.addEventListener("blur", () => {
        import_qcobjects6.logger.debug("Executing change event binding");
        this.executeBindings();
      });
      _obj.addEventListener("focus", () => {
        import_qcobjects6.logger.debug("Executing change event binding");
        this.executeBindings();
      });
      _obj.addEventListener("keydown", () => {
        import_qcobjects6.logger.debug("Executing keydown event binding");
        this.executeBindings();
      });
    }
  }
  executeBinding(_obj) {
    const _datamodel = _obj.getAttribute("data-field");
    import_qcobjects6.logger.debug("Binding " + _datamodel + " for " + this.name);
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
      import_qcobjects6.logger.debug("Binding " + _datamodel + " for " + this.name);
      this.data[_datamodel] = _obj.value;
    }
  }
  done(standardResponse) {
    const _ret_ = super.done(standardResponse);
    this.executeBindings();
    this.createBindingEvents();
    import_qcobjects6.logger.debug("Field loaded: " + this.fieldType + "[name=" + this.name + "]");
    return _ret_;
  }
};
(0, import_qcobjects6.Package)("org.qcobjects.base.components", [
  FormField
]);

// src/js/org.qcobjects.components.ts
var ShadowedComponent = class extends import_qcobjects7.Component {
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
    o.body = (0, import_qcobjects7._DOMCreateElement)("div");
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
var ModalEnclosureComponent = class extends import_qcobjects7.Component {
  static {
    __name(this, "ModalEnclosureComponent");
  }
  name = "modalenclosure";
  tplsource = "inline";
  cached = false;
  basePath = import_qcobjects7.CONFIG.get("modalBasePath", import_qcobjects7.CONFIG.get("remoteSDKPath", ""));
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
    o.body = (0, import_qcobjects7._DOMCreateElement)("div");
    super(o);
  }
};
var ModalComponent = class extends import_qcobjects7.Component {
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
    o.basePath = import_qcobjects7.CONFIG.get("modalBasePath", import_qcobjects7.CONFIG.get("remoteSDKPath", ""));
    super(o);
    this.data.modalId = this.__instanceID;
    const submodal = (0, import_qcobjects7.New)((0, import_qcobjects7.ClassFactory)(this.modalEnclosureComponentClass), {
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
    (0, import_qcobjects7.Tag)("#modalInstance_" + modalId + ".modal").map((modal) => {
      modal.style.display = "block";
      return new ModalFade().apply(modal, 0, 1);
    });
    (0, import_qcobjects7.Tag)("#modalInstance_" + modalId + ".modal .modal-content").map((modalcontent) => {
      return ModalMoveDown.apply(modalcontent, 0, -document.body.clientHeight, 0, 0);
    });
    (0, import_qcobjects7.Tag)("#modalInstance_" + modalId + ".modal .modal-content .close").map((closebtn) => {
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
    (0, import_qcobjects7.Tag)("#modalInstance_" + modalId + ".modal").map((modal) => {
      modal.style.display = "block";
      return new ModalFade({ duration: 3e3 }).apply(modal, 1, 0);
    });
    (0, import_qcobjects7.Tag)("#modalInstance_" + modalId + ".modal .modal-content").map(function(modalcontent) {
      return ModalMoveUp.apply(modalcontent, 0, 0, 0, -document.body.clientHeight);
    });
    setTimeout(function() {
      (0, import_qcobjects7.Tag)("#modalInstance_" + modalId + ".modal").map((modal) => {
        modal.style.display = "none";
        return true;
      });
    }, 900);
  }
  rebuild() {
    const _ret_ = super.rebuild();
    this.templateURI = (0, import_qcobjects7.ComponentURI)({
      "COMPONENTS_BASE_PATH": import_qcobjects7.CONFIG.get("componentsBasePath", ""),
      "COMPONENT_NAME": "modal",
      "TPLEXTENSION": import_qcobjects7.CONFIG.get("tplextension", ""),
      "TPL_SOURCE": "default"
      // here is always default in order to get the right uri
    });
    return _ret_;
  }
};
var SwaggerUIComponent = class extends import_qcobjects7.Component {
  static {
    __name(this, "SwaggerUIComponent");
  }
  cached = false;
  basePath = import_qcobjects7.CONFIG.get("remoteSDKPath", "");
  tplextension = "tpl.html";
  name = "swagger-ui";
};
(0, import_qcobjects7.Package)("org.qcobjects.form.components", [
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
var import_qcobjects8 = require("qcobjects");
var GridItemComponent = class extends import_qcobjects8.Component {
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
var GridComponent = class extends import_qcobjects8.Component {
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
(0, import_qcobjects8.Package)("org.qcobjects.components.grid", [
  GridComponent,
  GridItemComponent
]);

// src/js/org.qcobjects.components.list.ts
var import_qcobjects9 = require("qcobjects");
var ListItemComponent = class extends import_qcobjects9.Component {
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
var ListComponent = class extends import_qcobjects9.Component {
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
(0, import_qcobjects9.Package)("org.qcobjects.components.list", [
  ListItemComponent,
  ListComponent
]);

// src/js/org.qcobjects.components.slider.ts
var import_qcobjects10 = require("qcobjects");
var SlideListComponent = class extends import_qcobjects10.Component {
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
var SlideItemComponent = class extends import_qcobjects10.Component {
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
var SliderComponent = class extends import_qcobjects10.Component {
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
(0, import_qcobjects10.Package)("org.qcobjects.components.slider", [
  SlideListComponent,
  SlideItemComponent,
  SliderComponent
]);

// src/js/org.qcobjects.components.notifications.ts
var import_qcobjects11 = require("qcobjects");
var NotificationComponent = class _NotificationComponent extends import_qcobjects11.Component {
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
    o.body = (0, import_qcobjects11._DOMCreateElement)("div");
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
      const appearEffect = (0, import_qcobjects11.New)(Move, {
        duration: 900,
        apply(element3) {
          (0, import_qcobjects11._super_)("Fade", "apply").call(this, element3, 0, 1);
          (0, import_qcobjects11._super_)("Move", "apply").call(this, element3, 0, -document.body.clientHeight, 0, 0);
        }
      });
      const disappearEffect = (0, import_qcobjects11.New)(Move, {
        duration: 650,
        apply(element3) {
          (0, import_qcobjects11._super_)("Fade", "apply").call(this, element3, 1, 0);
          (0, import_qcobjects11._super_)("Move", "apply").call(this, element3, 0, 0, 0, -document.body.clientHeight);
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
    const c = (0, import_qcobjects11.New)(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: (0, import_qcobjects11._DOMCreateElement)("div"),
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
    const c = (0, import_qcobjects11.New)(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: (0, import_qcobjects11._DOMCreateElement)("div"),
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
    const c = (0, import_qcobjects11.New)(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: (0, import_qcobjects11._DOMCreateElement)("div"),
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
    const c = (0, import_qcobjects11.New)(_NotificationComponent, {
      name: "notification",
      shadowed: true,
      body: (0, import_qcobjects11._DOMCreateElement)("div"),
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
(0, import_qcobjects11.Package)("org.quickcorp.components.notifications", [
  NotificationComponent
]);

// src/js/org.qcobjects.components.splashscreen.ts
var import_qcobjects12 = require("qcobjects");
var SplashScreenComponent = class extends import_qcobjects12.Component {
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
    const isStartURL = location.hash === "" && location.pathname === "/" && location.search === "" || import_qcobjects12.CONFIG.get("routingWay", "pathname") === "hash" && import_qcobjects12.CONFIG.get("start_url", "/") === location.hash || import_qcobjects12.CONFIG.get("routingWay", "pathname") === "pathname" && import_qcobjects12.CONFIG.get("start_url", "/") === location.pathname || import_qcobjects12.CONFIG.get("routingWay", "pathname") === "search" && import_qcobjects12.CONFIG.get("start_url", "/") === location.search;
    const _enabled_ = isBrowser && isStartURL;
    if (_enabled_) {
      component.basePath = import_qcobjects12.CONFIG.get("splashscreenBasePath", import_qcobjects12.CONFIG.get("remoteSDKPath", ""));
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
            if (typeof import_qcobjects12.global.componentsStack !== "undefined") {
              import_qcobjects12.global.componentsStack.filter((c) => c.body.hasAttribute("splashscreen")).map(
                (mainComponent) => {
                  import_qcobjects12.logger.debug(`Splash Screen of Main Component: ${mainComponent.name}`);
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
(0, import_qcobjects12.Package)("org.qcobjects.components.base", [
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
(0, import_qcobjects12.Package)("org.qcobjects.components.splashscreen", [
  SplashScreenComponent,
  VideoSplashScreenComponent,
  CubeSplashScreenComponent
]);

// src/js/org.qcobjects.controllers.ts
var import_qcobjects13 = require("qcobjects");
var GenericController = class extends import_qcobjects13.Controller {
  static {
    __name(this, "GenericController");
  }
};
(0, import_qcobjects13.Package)("org.qcobjects.controllers", [
  GenericController
]);

// src/js/org.qcobjects.controllers.list.ts
var import_qcobjects14 = require("qcobjects");
var ListController = class extends import_qcobjects14.Controller {
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
    import_qcobjects14.logger.debug("ListController INIT");
  }
  getPageIndex(page, totalPage, totalElements) {
    page = page > 0 ? page - 1 : 0;
    return [totalElements * page / totalPage, totalElements * page / totalPage + totalElements / totalPage];
  }
  addSubcomponents() {
    this.component.subcomponents = [];
    const layout = this.component.body.getAttribute("layout");
    const basePath = import_qcobjects14.CONFIG.get("listBasePath", import_qcobjects14.CONFIG.get("remoteSDKPath", ""));
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
    import_qcobjects14.logger.debug((0, import_qcobjects14._DataStringify)(this.component.data));
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
              const _body = (0, import_qcobjects14._DOMCreateElement)("li");
              record.label = record[this.labelField];
              record.value = record[this.valueField];
              const subcomponent = (0, import_qcobjects14.New)((0, import_qcobjects14.ClassFactory)(subcomponentClass), {
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
                templateURI: (0, import_qcobjects14.ComponentURI)({
                  "COMPONENTS_BASE_PATH": import_qcobjects14.CONFIG.get("componentsBasePath", ""),
                  "COMPONENT_NAME": (0, import_qcobjects14.ClassFactory)(subcomponentClass).name,
                  "TPLEXTENSION": import_qcobjects14.CONFIG.get("tplextension", ""),
                  "TPL_SOURCE": (0, import_qcobjects14.ClassFactory)(subcomponentClass).tplsource
                }),
                body: _body,
                template: (0, import_qcobjects14.ClassFactory)(subcomponentClass).template
              });
              subcomponent.done = this.component.done.bind(subcomponent);
              try {
                if (subcomponent) {
                  subcomponent.data.__dataIndex = dataIndex;
                  if (Object.hasOwnProperty.call(this.component.data, "length")) {
                    subcomponent.data.__dataLength = this.component.data.length;
                  }
                  import_qcobjects14.logger.debug("adding subcomponent to body");
                  this._componentRoot.subelements("ul").map((ul) => ul.append(subcomponent));
                  try {
                    this.component.subcomponents.push(subcomponent);
                  } catch (e) {
                    import_qcobjects14.logger.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
                  }
                } else {
                  import_qcobjects14.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                }
              } catch (e) {
                import_qcobjects14.logger.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
              }
            } catch (e) {
              import_qcobjects14.logger.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
            }
            return _ret_;
          }
        );
      } else {
        import_qcobjects14.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
      }
    } catch (e) {
      import_qcobjects14.logger.debug(`No data for component: ${e}`);
    }
  }
  cssGrid() {
    const component = this.component;
    const _componentRoot = component.shadowed ? component.shadowRoot : component.body;
    if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined") {
      const s = (0, import_qcobjects14._DOMCreateElement)("style");
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
    import_qcobjects14.logger.debug("ListController DONE");
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
      (0, import_qcobjects14.serviceLoader)((0, import_qcobjects14.New)((0, import_qcobjects14.ClassFactory)(serviceClass), {
        data: componentInstance.serviceData
      }), false).then(
        (successfulResponse) => {
          import_qcobjects14.logger.debug("DONE SERVICE COMPONENT");
          successfulResponse.service.JSONresponse = JSON.parse(successfulResponse.service.template);
          if (typeof successfulResponse.service.JSONresponse.result !== "undefined") {
            import_qcobjects14.logger.debug((0, import_qcobjects14._DataStringify)(successfulResponse.service.JSONresponse.result));
            componentInstance.data = successfulResponse.service.JSONresponse.result;
          } else {
            componentInstance.data = successfulResponse.service.JSONresponse;
          }
          this.addSubcomponents();
        },
        (failedResponse) => {
          import_qcobjects14.logger.debug(failedResponse);
        }
      ).catch((e) => {
        import_qcobjects14.logger.debug("Something went wrong when calling the service from: " + serviceClass);
        import_qcobjects14.logger.debug(e.message);
      });
    }
  }
};
(0, import_qcobjects14.Package)("org.qcobjects.controllers.list", [
  ListController
]);

// src/js/org.qcobjects.controllers.grid.ts
var import_qcobjects15 = require("qcobjects");
var GridController = class extends import_qcobjects15.Controller {
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
      const s = (0, import_qcobjects15._DOMCreateElement)("style");
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
    import_qcobjects15.logger.debug("GridComponent built");
  }
};
var DataGridController = class extends import_qcobjects15.Controller {
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
    import_qcobjects15.logger.debug("DataGridController INIT");
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
    import_qcobjects15.logger.debug((0, import_qcobjects15._DataStringify)(this.component.data));
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
              const _body = (0, import_qcobjects15._DOMCreateElement)("component");
              _body.setAttribute("name", (0, import_qcobjects15.ClassFactory)(subcomponentClass).name);
              _body.setAttribute("shadowed", (0, import_qcobjects15.ClassFactory)(subcomponentClass).shadowed);
              _body.setAttribute("cached", (0, import_qcobjects15.ClassFactory)(subcomponentClass).cached);
              record = Object.assign(record, {
                __dataIndex: dataIndex,
                __dataLength: list2.length,
                __page: page,
                __totalPages: pagesNumber,
                __limit: limit,
                __offset: offset
              });
              const subcomponent = (0, import_qcobjects15.New)((0, import_qcobjects15.ClassFactory)(subcomponentClass), {
                name: "item",
                data: record,
                templateURI: (0, import_qcobjects15.ComponentURI)({
                  "COMPONENTS_BASE_PATH": import_qcobjects15.CONFIG.get("componentsBasePath", ""),
                  "COMPONENT_NAME": (0, import_qcobjects15.ClassFactory)(subcomponentClass).name,
                  "TPLEXTENSION": import_qcobjects15.CONFIG.get("tplextension", ""),
                  "TPL_SOURCE": (0, import_qcobjects15.ClassFactory)(subcomponentClass).tplsource
                }),
                body: _body,
                template: (0, import_qcobjects15.ClassFactory)(subcomponentClass).template
              });
              subcomponent.done = this.component.done.bind(subcomponent);
              try {
                if (subcomponent) {
                  subcomponent.data.__dataIndex = dataIndex;
                  if (Object.hasOwnProperty.call(this.component.data, "length")) {
                    subcomponent.data.__dataLength = this.component.data.length;
                  }
                  import_qcobjects15.logger.debug("adding subcomponent to body");
                  this._componentRoot?.append(subcomponent.body);
                  try {
                    this.component.subcomponents.push(subcomponent);
                  } catch (e) {
                    import_qcobjects15.logger.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
                  }
                } else {
                  import_qcobjects15.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID");
                }
              } catch (e) {
                import_qcobjects15.logger.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
              }
            } catch (e) {
              import_qcobjects15.logger.debug(`ERROR LOADING SUBCOMPONENT IN DATAGRID: ${e}`);
            }
            return _ret_;
          }
        );
      } else {
        import_qcobjects15.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT");
      }
    } catch (e) {
      import_qcobjects15.logger.debug(`No data for component: ${e}`);
    }
  }
  cssGrid() {
    const component = this.component;
    const _componentRoot = component.shadowed ? component.shadowRoot : component.body;
    if (typeof this.rows !== "undefined" && typeof this.cols !== "undefined") {
      const s = (0, import_qcobjects15._DOMCreateElement)("style");
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
    import_qcobjects15.logger.debug("DataGridController DONE");
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
      (0, import_qcobjects15.serviceLoader)((0, import_qcobjects15.New)((0, import_qcobjects15.ClassFactory)(serviceClass), {
        data: componentInstance.serviceData
      }), false).then(
        (successfulResponse) => {
          import_qcobjects15.logger.debug("DONE SERVICE COMPONENT");
          successfulResponse.service.JSONresponse = JSON.parse(successfulResponse.service.template);
          if (typeof successfulResponse.service.JSONresponse.result !== "undefined") {
            import_qcobjects15.logger.debug((0, import_qcobjects15._DataStringify)(successfulResponse.service.JSONresponse.result));
            componentInstance.data = successfulResponse.service.JSONresponse.result;
          } else {
            componentInstance.data = successfulResponse.service.JSONresponse;
          }
          this.addSubcomponents();
        },
        (failedResponse) => {
          import_qcobjects15.logger.debug(failedResponse);
        }
      ).catch((e) => {
        import_qcobjects15.logger.debug("Something went wrong when calling the service from: " + serviceClass);
        import_qcobjects15.logger.debug(e.message);
      });
    }
  }
};
(0, import_qcobjects15.Package)("org.qcobjects.controllers.grid", [
  GridController,
  DataGridController
]);

// src/js/org.qcobjects.controllers.slider.ts
var import_qcobjects16 = require("qcobjects");
var SliderController = class extends import_qcobjects16.Controller {
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
      return (0, import_qcobjects16.New)((0, import_qcobjects16.ClassFactory)("Fade"), {}).apply(slide, 1, 0);
    });
    dots.filter((dot, index) => {
      return index !== this.slideIndex;
    }).map((dot) => {
      return dot.classList.remove("active");
    });
    try {
      dots[this.slideIndex].classList.add("active");
    } catch (e) {
      import_qcobjects16.logger.debug(`Something went wrong when trying to activate a slide: ${this.slideIndex} - ${e.message}`);
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
        (0, import_qcobjects16.New)((0, import_qcobjects16.ClassFactory)("Fade"), {}).apply(slides[this.slideIndex], 0, 1);
      } catch (e) {
        import_qcobjects16.logger.debug(`Something went wrong when trying to show a slide: ${this.slideIndex} - ${e.message}`);
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
(0, import_qcobjects16.Package)("org.qcobjects.controllers.slider", [
  SliderController
]);

// src/js/org.qcobjects.controllers.form.ts
var import_qcobjects17 = require("qcobjects");
var FormValidations = class extends import_qcobjects17.Controller {
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
var FormController = class extends import_qcobjects17.Controller {
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
      (0, import_qcobjects17.serviceLoader)((0, import_qcobjects17.New)((0, import_qcobjects17.ClassFactory)(this.serviceClass), {
        data: this.component.data
      }), false).then(
        () => {
          console.log("DONE SERVICE COMPONENT");
          location.href = this.formSettings.nextRouting;
        },
        (failedResponse) => {
          import_qcobjects17.logger.debug(failedResponse);
          location.href = this.formSettings.backRouting;
        }
      );
    } else {
      import_qcobjects17.logger.debug("No service name declared on serviceClass property");
    }
  }
  formSaveTouchHandler() {
    import_qcobjects17.logger.debug("Saving data...");
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
      import_qcobjects17.logger.debug("Unable to find the modal validator...");
      import_qcobjects17.logger.debug("Saving data...");
      this.save();
    }
  }
  constructor(o) {
    super(o);
    this.component = o.component;
    this.component = this.component.Cast(FormField);
  }
  done() {
    import_qcobjects17.logger.debugEnabled = true;
    try {
      this.component.createBindingEvents();
      const modalBody = (0, import_qcobjects17._DOMCreateElement)("div");
      modalBody.className = "modal_body";
      this.formValidatorModal = (0, import_qcobjects17.New)(ModalComponent, {
        body: modalBody,
        subcomponents: [],
        data: {
          content: '<div class="validationMessage"></div>'
        }
      });
      (0, import_qcobjects17.Tag)(".modal_body").map((e) => document.body.removeChild(e));
      document.body.append(this.formValidatorModal.body);
    } catch (e) {
      import_qcobjects17.logger.debug(`Unable to create the modal: ${e}`);
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
(0, import_qcobjects17.Package)("org.qcobjects.controllers.form", [
  FormController,
  FormValidations
]);

// src/js/org.qcobjects.controllers.swagger.ts
var import_qcobjects18 = require("qcobjects");
var SwaggerUIController = class extends import_qcobjects18.Controller {
  static {
    __name(this, "SwaggerUIController");
  }
  component;
  dependencies;
  startSwaggerUI() {
    if (typeof SwaggerUIBundle !== "undefined") {
      const ui = SwaggerUIBundle({
        url: import_qcobjects18.CONFIG.get("swagger-ui-url", "https://petstore.swagger.io/v2/swagger.json"),
        dom_id: "#" + import_qcobjects18.CONFIG.get("swagger-ui-dom_id", "swagger-ui"),
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
    this.component.body.innerHTML = '<div id="' + import_qcobjects18.CONFIG.get("swagger-ui-dom_id", "swagger-ui") + '"></div>';
    const swaggerUIPackagePath = import_qcobjects18.CONFIG.get("swagger-ui-package-path", "node_modules/swagger-ui-dist/");
    this.dependencies?.push((0, import_qcobjects18.New)(import_qcobjects18.SourceJS, {
      url: swaggerUIPackagePath + "swagger-ui-standalone-preset.js",
      external: import_qcobjects18.CONFIG.get("swagger-ui-external", false)
    }));
    this.dependencies?.push((0, import_qcobjects18.New)(import_qcobjects18.SourceCSS, {
      url: swaggerUIPackagePath + "swagger-ui.css",
      external: import_qcobjects18.CONFIG.get("swagger-ui-external", false)
    }));
    this.dependencies?.push((0, import_qcobjects18.New)(import_qcobjects18.SourceJS, {
      url: swaggerUIPackagePath + "swagger-ui-bundle.js",
      external: import_qcobjects18.CONFIG.get("swagger-ui-external", false),
      done: /* @__PURE__ */ __name(() => {
        this.startSwaggerUI();
      }, "done")
    }));
  }
};
(0, import_qcobjects18.Package)("org.qcobjects.controllers.swagger", [
  SwaggerUIController
]);

// src/js/org.qcobjects.modal.controllers.ts
var import_qcobjects19 = require("qcobjects");
var ModalController = class extends import_qcobjects19.Controller {
  static {
    __name(this, "ModalController");
  }
  component;
  done() {
    const component = this.component;
    component.body.innerHTML = component.body.innerHTML.replace("/{{content}}/g", component.submodal.template);
  }
};
(0, import_qcobjects19.Package)("org.qcobjects.modal.controllers", [
  ModalController
]);

// src/js/org.qcobjects.views.ts
var import_qcobjects20 = require("qcobjects");
var GridView = class extends import_qcobjects20.View {
  static {
    __name(this, "GridView");
  }
};
(0, import_qcobjects20.Package)("org.qcobjects.views", [
  GridView
]);

// src/js/org.qcobjects.tools.canvas.ts
var import_qcobjects21 = require("qcobjects");
var CanvasTool = class extends import_qcobjects21.InheritClass {
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
(0, import_qcobjects21.Package)("org.qcobjects.tools.canvas", [
  CanvasTool
]);

// src/js/org.qcobjects.tools.layouts.ts
var import_qcobjects22 = require("qcobjects");
var BasicLayout = class extends import_qcobjects22.InheritClass {
  static {
    __name(this, "BasicLayout");
  }
  dependencies = [];
  constructor({ component = null, dependencies = [] }) {
    super({ component, dependencies });
  }
  load() {
    this.dependencies.push((0, import_qcobjects22.New)(import_qcobjects22.SourceCSS, {
      external: !import_qcobjects22.CONFIG.get("useLocalSDK", false),
      url: import_qcobjects22.CONFIG.get("useLocalSDK", false) ? "css/basic-layout.css" : import_qcobjects22.CONFIG.get("remoteSDKPath", false) + "css/basic-layout.css"
    }));
  }
  coloredBorder() {
    setTimeout(function() {
      (0, import_qcobjects22.Tag)("nav").map((element) => {
        element.style.border = "20px solid #3333";
      });
      (0, import_qcobjects22.Tag)("nav").map((element) => {
        element.style.backgroundColor = "#129999";
      });
      (0, import_qcobjects22.Tag)("component>footer").map((element) => {
        element.style.background = "#876";
      });
      (0, import_qcobjects22.Tag)("component>div").map((element) => {
        element.style.border = "3px dashed #fff";
      });
      (0, import_qcobjects22.Tag)("component>section").map((element) => {
        element.style.border = "3px solid #000";
      });
      (0, import_qcobjects22.Tag)("component>section").map((element) => {
        element.style.backgroundColor = "#fffaaa";
      });
      (0, import_qcobjects22.Tag)("component>article").map((element) => {
        element.style.border = "3px dotted #000";
      });
      (0, import_qcobjects22.Tag)("component>header").map((element) => {
        element.style.background = "#789";
      });
      (0, import_qcobjects22.Tag)("component>footer").map((element) => {
        element.style.background = "#876";
      });
      (0, import_qcobjects22.Tag)("component>article:nth-child(1)").map((element) => {
        element.style.border = "1px solid #444";
      });
      (0, import_qcobjects22.Tag)("component>article:nth-child(1)").map((element) => {
        element.style.backgroundColor = "#555aaa";
      });
      (0, import_qcobjects22.Tag)("component>article:nth-child(2)").map((element) => {
        element.style.backgroundColor = "#aaa333";
      });
      (0, import_qcobjects22.Tag)("component>article:nth-child(3)").map((element) => {
        element.style.backgroundColor = "#54da82";
      });
      (0, import_qcobjects22.Tag)("*").map((element) => {
        element.style.color = "#fff";
      });
      (0, import_qcobjects22.Tag)("component>article").map((element) => Fade.apply(element, 0, 1));
      (0, import_qcobjects22.Tag)("component>footer").map((element) => Fade.apply(element, 0, 1));
      (0, import_qcobjects22.Tag)("component>header").map((element) => Fade.apply(element, 0, 1));
      (0, import_qcobjects22.Tag)("nav").map((element) => {
        element.style.display = "block";
        element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString();
        MoveXInFromLeft.apply(element);
      });
      (0, import_qcobjects22.Tag)("component>article").map((element) => {
        element.style.display = "block";
        element.style.height = element.offsetParent?.scrollHeight.toString() || element.clientHeight.toString();
        MoveYInFromBottom.apply(element);
      });
      (0, import_qcobjects22.Tag)("component>article:nth-child(2)").map((element) => {
        element.style.display = "block";
        element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString();
        MoveXInFromRight.apply(element);
      });
    }, 300);
  }
};
(0, import_qcobjects22.Package)("org.qcobjects.tools.layouts", [
  BasicLayout
]);

// src/js/org.qcobjects.cloud.auth.session.usertoken.ts
var import_qcobjects23 = require("qcobjects");
var SessionUserToken = class _SessionUserToken extends import_qcobjects23.InheritClass {
  static {
    __name(this, "SessionUserToken");
  }
  static user = {};
  __cache__;
  __instanceID;
  constructor(o) {
    super(o);
    const __instance__ = this;
    this.__cache__ = new import_qcobjects23.ComplexStorageCache({
      index: __instance__.__instanceID.toString(),
      load() {
        let __token__;
        if (typeof navigator !== "undefined" && typeof origin !== "undefined") {
          __token__ = import_qcobjects23._Crypt.encrypt(`${navigator.userAgent}|${o.username}|${(+/* @__PURE__ */ new Date()).toString()}`, origin);
        } else {
          __token__ = import_qcobjects23._Crypt.encrypt(`${o.username}|${(+/* @__PURE__ */ new Date()).toString()}`, import_qcobjects23.CONFIG.get("domain", "localhost"));
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
    if (typeof import_qcobjects23.global.get(__index__) === "undefined" || import_qcobjects23.global.get(__index__) === null) {
      import_qcobjects23.global.set(__index__, (0, import_qcobjects23.New)(_SessionUserToken, {
        username
      }));
    }
    _SessionUserToken.user = import_qcobjects23.global.get(__index__).user;
    return import_qcobjects23.global.get(__index__).user;
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
    return import_qcobjects23._Crypt.encrypt(`${username}${password}`, _SessionUserToken.getGlobalUserToken(username));
  }
  static closeGlobalSession(...args) {
    _SessionUserToken.getGlobalUser(args);
    const username = [args].join("|");
    const __index__ = "userToken_" + _SessionUserToken.generateIndex(username);
    if (typeof import_qcobjects23.global.get(__index__) !== "undefined") {
      import_qcobjects23.global.get(__index__).__cache__.clear();
      import_qcobjects23.global.set(__index__, null);
      _SessionUserToken.user = {};
    }
  }
};
(0, import_qcobjects23.Package)("org.qcobjects.cloud.auth.session.usertoken", [
  SessionUserToken
]);

// src/js/org.qcobjects.cloud.auth.session.data.ts
var import_qcobjects24 = require("qcobjects");
var SessionData = class extends import_qcobjects24.InheritClass {
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
    const s = (0, import_qcobjects24._DataStringify)(this.sessionData);
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
(0, import_qcobjects24.Package)("org.qcobjects.cloud.auth.session.data", [
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
    const __start__ = import_qcobjects25.GlobalSettings.__start__.bind(_top2);
    _top2._sdk_ = Promise.resolve().then(() => {
      import_qcobjects25.CONFIG.set("useSDK", true);
      __start__();
    });
  }
}, "__qcobjects_sdk__"))(import_qcobjects25._top);
var QCObjects_SDK_default = import_qcobjects25._top;

// src/index.ts
var index_default = QCObjects_SDK_exports;
//# sourceMappingURL=index.cjs.map
