var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/qcobjects/build/assign.js
var require_assign = __commonJS({
  "node_modules/qcobjects/build/assign.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (typeof Object.assign !== "function") {
      Object.defineProperty(Object, "assign", {
        // eslint-disable-next-line no-unused-vars
        value: /* @__PURE__ */ __name(function assign(target, varArgs) {
          "use strict";
          if (target === null) {
            throw new TypeError("Cannot convert undefined or null to object");
          }
          const to = Object(target);
          for (let index = 1; index < arguments.length; index++) {
            const nextSource = arguments[index];
            if (nextSource !== null) {
              for (const nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        }, "assign"),
        writable: true,
        configurable: true
      });
    }
  }
});

// node_modules/qcobjects/build/is_raw_class.js
var require_is_raw_class = __commonJS({
  "node_modules/qcobjects/build/is_raw_class.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__is_raw_class__ = void 0;
    var __is_raw_class__ = /* @__PURE__ */ __name((o_c) => {
      return !!(typeof o_c === "function" && o_c.toString().startsWith("class"));
    }, "__is_raw_class__");
    exports.__is_raw_class__ = __is_raw_class__;
  }
});

// node_modules/qcobjects/build/ObjectName.js
var require_ObjectName = __commonJS({
  "node_modules/qcobjects/build/ObjectName.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectName = void 0;
    var ObjectName = /* @__PURE__ */ __name((o) => {
      let ret = "";
      if (typeof o === "function" && Object.hasOwn(o, "name") && o.name !== "") {
        ret = o.name;
      } else if (typeof o !== "undefined" && typeof o.constructor === "function" && o.constructor.name !== "") {
        ret = o.constructor.name;
      } else if (typeof o !== "undefined" && typeof o.constructor === "object") {
        ret = o.constructor.toString().replace(/\[(.*?)\]/g, "$1").split(" ").slice(1).join("");
      }
      return ret;
    }, "ObjectName");
    exports.ObjectName = ObjectName;
  }
});

// node_modules/qcobjects/build/getType.js
var require_getType = __commonJS({
  "node_modules/qcobjects/build/getType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__getType__ = void 0;
    var is_raw_class_1 = require_is_raw_class();
    var ObjectName_1 = require_ObjectName();
    var __getType__ = /* @__PURE__ */ __name(function __getType__2(o_c) {
      let _ret_ = "";
      switch (true) {
        case (typeof o_c === "object" && (!!o_c.constructor && !!o_c.constructor.name) && o_c.constructor.name !== ""):
          _ret_ = o_c.constructor.name;
          break;
        case (typeof o_c === "function" && !!o_c.name):
          _ret_ = o_c.name;
          break;
        case ((0, is_raw_class_1.__is_raw_class__)(o_c) && !!o_c.name):
          _ret_ = o_c.name;
          break;
        case (!!o_c && !!o_c.__classType && o_c.__classType !== ""):
          _ret_ = o_c.__classType;
          break;
        case (!!o_c && !!o_c.__definition && !!o_c.__definition.__classType && o_c.__definition.__classType !== ""):
          _ret_ = o_c.__definition.__classType;
          break;
        default:
          _ret_ = (0, ObjectName_1.ObjectName)(o_c);
          break;
      }
      return _ret_;
    }, "__getType__");
    exports.__getType__ = __getType__;
  }
});

// node_modules/qcobjects/build/make_global.js
var require_make_global = __commonJS({
  "node_modules/qcobjects/build/make_global.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__make_global__ = void 0;
    var top_1 = require_top();
    var __make_global__ = /* @__PURE__ */ __name((f) => {
      if (!!f && !!f.name) {
        if (typeof top_1._top !== "undefined" && typeof f !== "undefined" && top_1._top !== null && !Object.hasOwn(top_1._top, f.name)) {
          (0, top_1.set)(f.name, f);
        } else if (typeof global !== "undefined") {
          global[f.name] = f;
        } else if (typeof globalThis !== "undefined") {
          globalThis[f.name] = f;
        }
      }
    }, "__make_global__");
    exports.__make_global__ = __make_global__;
  }
});

// node_modules/qcobjects/build/PrimaryCollections.js
var require_PrimaryCollections = __commonJS({
  "node_modules/qcobjects/build/PrimaryCollections.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.set_QC_PACKAGE = exports.getClassesNamesList = exports.getClassesList = exports.getPackagesList = exports.getPackagesNamesList = exports.get_QC_CLASS = exports.__register_class__ = exports._QC_READY_LISTENERS = exports._QC_PACKAGES_IMPORTED = exports._QC_PACKAGES = exports._QC_CLASSES = void 0;
    var getType_1 = require_getType();
    var make_global_1 = require_make_global();
    exports._QC_CLASSES = {};
    exports._QC_PACKAGES = {};
    exports._QC_PACKAGES_IMPORTED = [];
    exports._QC_READY_LISTENERS = [];
    var __register_class__ = /* @__PURE__ */ __name(function(_class_, __namespace) {
      const __classType = (0, getType_1.__getType__)(_class_);
      let name = _class_.name || __classType;
      if (name.toLowerCase() === "function") {
        name = __classType;
      }
      if (typeof _class_.__definition === "undefined") {
        _class_.__definition = {};
      }
      _class_.__definition.__classType = __classType;
      if (typeof __namespace !== "undefined") {
        _class_.__definition.__namespace = __namespace;
      }
      exports._QC_CLASSES[name] = _class_;
      (0, make_global_1.__make_global__)(_class_);
      return exports._QC_CLASSES[name];
    }, "__register_class__");
    exports.__register_class__ = __register_class__;
    var get_QC_CLASS = /* @__PURE__ */ __name((name) => {
      return exports._QC_CLASSES[name];
    }, "get_QC_CLASS");
    exports.get_QC_CLASS = get_QC_CLASS;
    var _get_packages_names = /* @__PURE__ */ __name(function(_packages) {
      let _keys = [];
      for (const _k of Object.keys(_packages)) {
        if (typeof _packages[_k] !== "undefined" && typeof _packages[_k] !== "function" && Object.hasOwn(_packages[_k], "length") && _packages[_k].length > 0) {
          _keys.push(_k);
          _keys = _keys.concat(_get_packages_names(_packages[_k]));
        }
      }
      return _keys;
    }, "_get_packages_names");
    var getPackagesNamesList = /* @__PURE__ */ __name(() => {
      return _get_packages_names(exports._QC_PACKAGES);
    }, "getPackagesNamesList");
    exports.getPackagesNamesList = getPackagesNamesList;
    var getPackagesList = /* @__PURE__ */ __name(() => {
      return [...(0, exports.getPackagesNamesList)()].map((packagename) => {
        const _classesList = exports._QC_PACKAGES[packagename];
        let _ret_ = void 0;
        if (_classesList) {
          _ret_ = {
            packageName: packagename,
            classesList: _classesList.filter(function() {
              return true;
            })
          };
        }
        return _ret_;
      }).filter(function(_p) {
        return typeof _p !== "undefined";
      });
    }, "getPackagesList");
    exports.getPackagesList = getPackagesList;
    var getClassesList = /* @__PURE__ */ __name(() => {
      let _classesList = [];
      [...(0, exports.getPackagesList)()].forEach(function(_package_element) {
        _classesList = _classesList.concat(_package_element.classesList.map((_class_element) => {
          return {
            packageName: _package_element.packageName,
            className: `${_package_element.packageName}.${(0, getType_1.__getType__)(_class_element)}`,
            classFactory: _class_element
          };
        }));
        return _package_element;
      });
      return _classesList;
    }, "getClassesList");
    exports.getClassesList = getClassesList;
    var getClassesNamesList = /* @__PURE__ */ __name(() => {
      return [...(0, exports.getClassesList)()].map((_class_element) => {
        return _class_element.className;
      });
    }, "getClassesNamesList");
    exports.getClassesNamesList = getClassesNamesList;
    var set_QC_PACKAGE = /* @__PURE__ */ __name((packageName, _qc_packages) => {
      exports._QC_PACKAGES[packageName] = _qc_packages;
    }, "set_QC_PACKAGE");
    exports.set_QC_PACKAGE = set_QC_PACKAGE;
  }
});

// node_modules/qcobjects/build/Export.js
var require_Export = __commonJS({
  "node_modules/qcobjects/build/Export.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Export = void 0;
    var make_global_1 = require_make_global();
    var Export = /* @__PURE__ */ __name(function(f) {
      return (0, make_global_1.__make_global__)(f);
    }, "Export");
    exports.Export = Export;
    exports.Export.prototype.toString = function() {
      return "Export(function or symbol) { [QCObjects native code] }";
    };
  }
});

// node_modules/qcobjects/build/_import_.js
var require_import = __commonJS({
  "node_modules/qcobjects/build/_import_.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._import_ = _import_;
    var Logger_1 = require_Logger();
    async function _import_(name) {
      Logger_1.logger.debug(`Importing ${name}...`);
      function isPackage(name2) {
        Logger_1.logger.debug(`Validating if ${name2} is a package name...`);
        return !name2.startsWith(".") && !name2.startsWith("/") && !name2.includes("/");
      }
      __name(isPackage, "isPackage");
      try {
        const hasExtension = /\.[^/\\]+$/.test(name);
        if (!hasExtension && !isPackage(name)) {
          Logger_1.logger.debug(`${name} does not have an extension and is not a package. Adding js extension.`);
          name += ".js";
        }
        const m = await import(name);
        return m;
      } catch (error) {
        Logger_1.logger.warn(`Failed to load module: ${error}`);
      }
    }
    __name(_import_, "_import_");
  }
});

// node_modules/qcobjects/build/platform.js
var require_platform = __commonJS({
  "node_modules/qcobjects/build/platform.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.is_phonegap = exports._require_ = exports.deno_require = exports.isNodeCommonJS = exports.isBrowser = exports.isDeno = void 0;
    var _import_1 = require_import();
    var Logger_1 = require_Logger();
    exports.isDeno = typeof window !== "undefined" && "Deno" in window;
    exports.isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self && !exports.isDeno;
    exports.isNodeCommonJS = typeof module !== "undefined";
    var deno_require = /* @__PURE__ */ __name((name) => {
    }, "deno_require");
    exports.deno_require = deno_require;
    var _require_ = /* @__PURE__ */ __name((name) => {
      return exports.isDeno ? (0, exports.deno_require)(name) : ((name2) => {
        let r;
        try {
          (async () => {
            r = await (0, _import_1._import_)(name2);
          })().then((m) => {
            r = m && m.default || m;
          }).catch((e) => {
            Logger_1.logger.warn(`An error ocurred: ${e}`);
          });
        } catch (e) {
          Logger_1.logger.debug(`An error ocurred importing module. ${e}`);
          r = { export: {} };
        }
        return r;
      })(name);
    }, "_require_");
    exports._require_ = _require_;
    exports.is_phonegap = /* @__PURE__ */ function() {
      return typeof cordova !== "undefined";
    }();
  }
});

// node_modules/qcobjects/build/Logger.js
var require_Logger = __commonJS({
  "node_modules/qcobjects/build/Logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logger = exports.Logger = void 0;
    var Export_1 = require_Export();
    var platform_1 = require_platform();
    var Logger = class {
      static {
        __name(this, "Logger");
      }
      debugEnabled = true;
      infoEnabled = true;
      warnEnabled = true;
      debug(message) {
        if (this.debugEnabled) {
          console.log("\x1B[35m%s\x1B[0m", `[DEBUG][${performance.now().toLocaleString()}] ${message}`);
        }
      }
      info(message) {
        let color;
        if (this.infoEnabled) {
          if (platform_1.isBrowser) {
            color = "\x1B[103m%s\x1B[0m";
          } else {
            color = "\x1B[33m%s\x1B[0m";
          }
          console.info(color, `[INFO][${performance.now().toLocaleString()}] ${message}`);
        }
      }
      warn(message) {
        if (this.warnEnabled) {
          console.warn("\x1B[31m%s\x1B[0m", `[WARN][${performance.now().toLocaleString()}] ${message}`);
        }
      }
    };
    exports.Logger = Logger;
    exports.logger = new Logger();
    (0, Export_1.Export)(exports.logger);
  }
});

// node_modules/qcobjects/build/Cast.js
var require_Cast = __commonJS({
  "node_modules/qcobjects/build/Cast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._CastProps = exports._Cast = void 0;
    var Logger_1 = require_Logger();
    var _Cast = /* @__PURE__ */ __name(function(obj_source, obj_dest) {
      for (const v in obj_source) {
        if (typeof obj_source[v] !== "undefined") {
          try {
            obj_dest[v] = obj_source[v];
          } catch (e) {
            Logger_1.logger.debug(`An error ocurred: ${e}.`);
            Logger_1.logger.warn(`Unable to cast ${(typeof obj_source).toString()}.${typeof v.toString()} to ${(typeof obj_dest).toString()}.${typeof v.toString()}`);
          }
        }
      }
      return obj_dest;
    }, "_Cast");
    exports._Cast = _Cast;
    var _CastProps = /* @__PURE__ */ __name(function(obj_source, obj_dest, _ignoreError = true) {
      for (const v in obj_source) {
        if (typeof obj_source[v] !== "undefined" && typeof obj_source[v] !== "function") {
          try {
            obj_dest[v] = obj_source[v];
          } catch (e) {
            if (!_ignoreError) {
              Logger_1.logger.debug(`An error ocurred: ${e}.`);
            }
          }
        } else if (typeof obj_source[v] === "function") {
          try {
            obj_dest[v] = obj_source[v].bind(obj_dest);
          } catch (e) {
            Logger_1.logger.warn(e);
          }
        }
      }
      return obj_dest;
    }, "_CastProps");
    exports._CastProps = _CastProps;
  }
});

// node_modules/qcobjects/build/DOMCreateElement.js
var require_DOMCreateElement = __commonJS({
  "node_modules/qcobjects/build/DOMCreateElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._DOMCreateComplexElement = exports._DOMCreateElement = void 0;
    var platform_1 = require_platform();
    var _DOMCreateElement6 = /* @__PURE__ */ __name(function(elementName, props, children) {
      let _ret_;
      if (platform_1.isBrowser) {
        _ret_ = (0, exports._DOMCreateComplexElement)(elementName, props, children);
      } else {
        _ret_ = {};
      }
      return _ret_;
    }, "_DOMCreateElement");
    exports._DOMCreateElement = _DOMCreateElement6;
    var ComplexTypeCall = /* @__PURE__ */ __name((_type, { props, children }) => {
      return _type({ props, children });
    }, "ComplexTypeCall");
    var _DOMCreateComplexElement = /* @__PURE__ */ __name((_type, props, children) => {
      if (typeof _type !== "string") {
        return ComplexTypeCall(_type, { props, children });
      }
      const element = document.createElement(_type);
      if (props) {
        Object.entries(props).forEach(([key, value]) => {
          if (typeof value === "string" || typeof value === "number") {
            element.setAttribute(key, value.toString());
          } else if (typeof value === "function" && key.toLowerCase().startsWith("on")) {
            element.addEventListener(key.slice(2).toLowerCase(), value.bind(element));
          }
        });
      }
      if (Array.isArray(children)) {
        children.filter((child) => child instanceof Node).forEach((child) => {
          element.appendChild(child);
        });
      } else if (children instanceof Node) {
        element.appendChild(children);
      } else if (typeof children === "string") {
        element.innerHTML = children;
      }
      return element;
    }, "_DOMCreateComplexElement");
    exports._DOMCreateComplexElement = _DOMCreateComplexElement;
  }
});

// node_modules/qcobjects/build/IncrementInstanceID.js
var require_IncrementInstanceID = __commonJS({
  "node_modules/qcobjects/build/IncrementInstanceID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IncrementInstanceID = exports.__instanceID = void 0;
    exports.__instanceID = 0;
    var IncrementInstanceID = /* @__PURE__ */ __name(() => {
      exports.__instanceID = typeof exports.__instanceID === "undefined" || exports.__instanceID === null ? 0 : exports.__instanceID + 1;
    }, "IncrementInstanceID");
    exports.IncrementInstanceID = IncrementInstanceID;
  }
});

// node_modules/qcobjects/build/introspection.js
var require_introspection = __commonJS({
  "node_modules/qcobjects/build/introspection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._methods_ = exports._protected_code_ = void 0;
    var _protected_code_ = /* @__PURE__ */ __name((_) => {
      const __oldtoString = typeof _.prototype !== "undefined" ? _.prototype.toString : function() {
        return "";
      };
      if (typeof _.prototype !== "undefined") {
        _.prototype.toString = function() {
          const _protected_symbols = [
            "__qcobjects__",
            "__qcobjects_sdk__",
            "__loaded__",
            "ComplexStorageCache",
            "css",
            "append",
            "attachIn",
            "debug",
            "info",
            "warn",
            "QC_Append",
            "set",
            "get",
            "done",
            "componentDone",
            "_new_",
            "__new__",
            "Class",
            "ClassFactory",
            "New",
            "Export",
            "Package",
            "Import",
            "subelements",
            "componentLoader",
            "buildComponents",
            "Controller",
            "View",
            "VO",
            "Service",
            "serviceLoader",
            "JSONService",
            "ConfigService",
            "SourceJS",
            "SourceCSS",
            "ArrayList",
            "ArrayCollection",
            "Effect",
            "Timer",
            "sum",
            "avg",
            "table",
            "max",
            "min",
            "range",
            "matrix",
            "matrix2d",
            "matrix3d",
            "unique",
            "uniqueId",
            "shortCode",
            "NamespaceRef"
          ];
          let _ret_;
          if (_protected_symbols.includes(this.name)) {
            _ret_ = this.name + "{ [QCObjects native code] }";
          } else {
            _ret_ = __oldtoString.call(this);
          }
          return _ret_;
        };
      }
    }, "_protected_code_");
    exports._protected_code_ = _protected_code_;
    exports._protected_code_(Function);
    var _methods_ = /* @__PURE__ */ __name(function(_) {
      const _m = [];
      for (const i in _) {
        if ((typeof _[i]).toLowerCase() === "function") {
          _m.push(_[i]);
        }
      }
      return _m;
    }, "_methods_");
    exports._methods_ = _methods_;
  }
});

// node_modules/qcobjects/build/Package.js
var require_Package = __commonJS({
  "node_modules/qcobjects/build/Package.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Package = void 0;
    var is_raw_class_1 = require_is_raw_class();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var Package25 = /* @__PURE__ */ __name((namespace, classes = []) => {
      if (Object.hasOwn(PrimaryCollections_1._QC_PACKAGES, namespace) && typeof PrimaryCollections_1._QC_PACKAGES[namespace] !== "undefined" && typeof PrimaryCollections_1._QC_PACKAGES[namespace] !== "string" && Object.hasOwn(PrimaryCollections_1._QC_PACKAGES[namespace], "length") && PrimaryCollections_1._QC_PACKAGES[namespace].length > 0 && typeof classes !== "undefined" && Object.hasOwn(classes, "length") && classes.length > 0) {
        classes.forEach((_class_) => {
          (0, PrimaryCollections_1.__register_class__)(_class_, namespace);
        });
        (0, PrimaryCollections_1.set_QC_PACKAGE)(namespace, PrimaryCollections_1._QC_PACKAGES[namespace].concat(classes));
      } else if (typeof classes !== "undefined" && typeof classes !== "undefined" && Object.hasOwn(classes, "length") && classes.length > 0) {
        classes.forEach((_class_) => {
          (0, PrimaryCollections_1.__register_class__)(_class_, namespace);
        });
        (0, PrimaryCollections_1.set_QC_PACKAGE)(namespace, classes);
      } else if ((0, is_raw_class_1.__is_raw_class__)(classes)) {
        if (typeof classes.__definition === "undefined") {
          classes.__definition = {};
        }
        classes.__definition.__namespace = namespace;
        classes.__namespace = namespace;
        (0, PrimaryCollections_1.__register_class__)(classes, namespace);
        (0, PrimaryCollections_1.set_QC_PACKAGE)(namespace, [classes]);
      } else {
        throw new Error(`An error ocurred. It was not possible to add classes to ${namespace}.`);
      }
      return Object.hasOwn(PrimaryCollections_1._QC_PACKAGES, namespace) ? PrimaryCollections_1._QC_PACKAGES[namespace] : [];
    }, "Package");
    exports.Package = Package25;
  }
});

// node_modules/qcobjects/build/InheritClass.js
var require_InheritClass = __commonJS({
  "node_modules/qcobjects/build/InheritClass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InheritClass = void 0;
    var Logger_1 = require_Logger();
    var IncrementInstanceID_1 = require_IncrementInstanceID();
    var Cast_1 = require_Cast();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var getType_1 = require_getType();
    var introspection_1 = require_introspection();
    var is_a_1 = require_is_a();
    var platform_1 = require_platform();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var Package_1 = require_Package();
    var InheritClass6 = class {
      static {
        __name(this, "InheritClass");
      }
      __definition;
      _body;
      get body() {
        return this._body;
      }
      set body(value) {
        this._body = value;
      }
      childs;
      __instanceID;
      constructor(_o_) {
        if (typeof _o_ !== "undefined" && typeof _o_.__definition !== "undefined") {
          this.__definition = {
            ..._o_.__definition
          };
        }
        const self2 = this;
        if (typeof _o_ !== "undefined" && _o_ !== null) {
          Object.keys(_o_).filter(function(k) {
            return isNaN(k) && !["__instanceID", "__classType", "__definition"].includes(k);
          }).forEach(function(key) {
            if (typeof self2[key] === "function") {
              self2[key] = _o_[key].bind(self2);
            } else {
              self2[key] = _o_[key];
            }
          });
        }
        (0, IncrementInstanceID_1.IncrementInstanceID)();
        if (!self2.__instanceID) {
          Object.defineProperty(self2, "__instanceID", {
            value: IncrementInstanceID_1.__instanceID,
            writable: false
          });
        }
        if (typeof self2.__definition !== "undefined") {
          Object.keys(self2.__definition).filter(function(k) {
            return isNaN(k) && !["name", "__instanceID", "__classType", "__definition"].includes(k);
          }).forEach(function(key) {
            if (typeof self2.__definition[key] === "function") {
              self2[key] = self2.__definition[key].bind(self2);
            } else {
              self2[key] = self2.__definition[key];
            }
          });
        }
        (0, introspection_1._methods_)(PrimaryCollections_1._QC_CLASSES[self2.__classType]).map(function(m) {
          self2[m.name] = m.bind(self2);
          return m;
        });
        (0, introspection_1._methods_)(self2.__definition).map(function(m) {
          self2[m.name] = m.bind(self2);
          return m;
        });
        if (self2.body) {
          if (typeof self2.__definition === "undefined" || !Object.hasOwn(self2.__definition, "body") || typeof self2.__definition.body === "undefined") {
            try {
              if (platform_1.isBrowser) {
                self2.body = (0, DOMCreateElement_1._DOMCreateElement)(self2.__definition.__classType);
              } else {
                self2.body = {};
              }
            } catch (e) {
              Logger_1.logger.debug(`An error ocurred: ${e}.`);
              self2.body = {};
            }
          } else if (Object.hasOwn(self2.__definition, "body")) {
            self2.body = self2.__definition.body;
          }
        }
        try {
          self2.__new__.call(self2, _o_);
          if (typeof self2 === "object" && Object.hasOwn(self2, "_new_") && typeof self2._new_.isCalled === "undefined") {
            try {
              self2._new_(_o_);
              self2._new_.isCalled = true;
            } catch (e) {
              Logger_1.logger.warn(`${self2.__classType}._new_() failed with error: ${e}`);
            }
          }
        } catch (e) {
          Logger_1.logger.warn(e);
        }
      }
      static get __classType() {
        return Object.getPrototypeOf(this.constructor).name;
      }
      get __classType() {
        return this.constructor.name;
      }
      static hierarchy(__class__) {
        const __classType = /* @__PURE__ */ __name(function(o_c) {
          return Object.hasOwn(o_c, "__classType") ? o_c.__classType : getType_1.__getType__.call(__class__, o_c);
        }, "__classType");
        const __hierarchy__proto__ = /* @__PURE__ */ __name((c) => {
          return typeof c !== "undefined" && typeof c.__proto__ !== "undefined" && c.__proto__ !== null ? (__classType(c) !== "" ? [__classType(c)] : []).concat(__hierarchy__proto__(c.__proto__)) : [];
        }, "__hierarchy__proto__");
        if (typeof __class__ === "undefined" || __class__ === null) {
          __class__ = this;
        }
        let __hierarchy = [];
        __hierarchy.push(__classType(__class__));
        __hierarchy = __hierarchy.concat(__hierarchy__proto__(__class__.__proto__));
        return __hierarchy;
      }
      __namespace;
      __new__(_o_) {
        (0, Cast_1._CastProps)(_o_, this);
      }
      // eslint-disable-next-line no-unused-vars
      _new_(_o_) {
      }
      static getParentClass() {
        return Object.getPrototypeOf(this.prototype.constructor);
      }
      getParentClass() {
        return this.constructor.getParentClass();
      }
      static getClass() {
        return Object.getPrototypeOf(this.constructor);
      }
      getClass() {
        return this.constructor.getClass();
      }
      css(_css) {
        if (typeof this.body !== "undefined" && typeof this?.body !== "string" && typeof this?.body?.style !== "undefined") {
          Logger_1.logger.debug("body style");
          if (this.body) {
            this.body.style = (0, Cast_1._Cast)(_css, this?.body?.style);
          }
        }
        return typeof this.body !== "string" ? this?.body?.style : {};
      }
      hierarchy() {
        const __instance__ = this;
        return this.constructor.hierarchy(__instance__);
      }
      append(_child) {
        const child = _child || this.body;
        Logger_1.logger.debug("append: start");
        if ((0, is_a_1.is_a)(child, "Component")) {
          Logger_1.logger.debug("append: child is a Component");
          Logger_1.logger.debug(`appending the body of ${child.name}`);
        }
        if (typeof this.body !== "undefined") {
          Logger_1.logger.debug("append element");
          if (arguments.length > 0) {
            Logger_1.logger.debug("append to element");
            if (typeof this.body !== "string") {
              if (typeof this.body?.append !== "undefined") {
                this?.body?.append(child);
              } else {
                throw Error("body.append is undefined. That means the body is not well formed.");
              }
            } else {
              this.append(child);
            }
            if (typeof this.childs === "undefined") {
              this.childs = [];
            }
            this.childs.push(child);
          } else {
            if (platform_1.isBrowser) {
              Logger_1.logger.debug("append to body");
              document.body.append(child);
            }
          }
        }
      }
      attachIn(tag) {
        if (platform_1.isBrowser) {
          const tags = document.subelements(tag);
          for (let i = 0, j = tags.length; i < j; i++) {
            tags[i].append(this);
          }
        } else {
          throw new Error("attachIn not yet implemented for non browser platforms");
        }
      }
    };
    exports.InheritClass = InheritClass6;
    (0, Package_1.Package)("com.qcobjects", [InheritClass6]);
  }
});

// node_modules/qcobjects/build/isQCObjects.js
var require_isQCObjects = __commonJS({
  "node_modules/qcobjects/build/isQCObjects.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isQCObjects_Class = exports.isQCObjects_Object = void 0;
    var InheritClass_1 = require_InheritClass();
    var isQCObjects_Object = /* @__PURE__ */ __name(function(_) {
      return !!(typeof _ === "object" && Object.hasOwn(_, "__classType") && !!_.__instanceID && Object.hasOwn(_, "__definition") && typeof _.__definition !== "undefined") || _ instanceof InheritClass_1.InheritClass;
    }, "isQCObjects_Object");
    exports.isQCObjects_Object = isQCObjects_Object;
    var isQCObjects_Class = /* @__PURE__ */ __name(function(_) {
      return !!(typeof _ === "function" && !_.__instanceID && !!_.__definition && typeof _.__definition !== "undefined" && !!_.__definition.__classType) || _.prototype instanceof InheritClass_1.InheritClass;
    }, "isQCObjects_Class");
    exports.isQCObjects_Class = isQCObjects_Class;
  }
});

// node_modules/qcobjects/build/is_a.js
var require_is_a = __commonJS({
  "node_modules/qcobjects/build/is_a.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.is_a = void 0;
    var getType_1 = require_getType();
    var isQCObjects_1 = require_isQCObjects();
    var ObjectName_1 = require_ObjectName();
    var is_a = /* @__PURE__ */ __name((obj, typeName) => {
      return !!(typeof obj !== "undefined" && obj !== null && (((0, isQCObjects_1.isQCObjects_Class)(obj) || (0, isQCObjects_1.isQCObjects_Object)(obj)) && obj.hierarchy().includes(typeName) || (0, getType_1.__getType__)(obj) === typeName || (0, ObjectName_1.ObjectName)(obj) === typeName || typeof obj === typeName));
    }, "is_a");
    exports.is_a = is_a;
  }
});

// node_modules/qcobjects/build/is_forbidden_name.js
var require_is_forbidden_name = __commonJS({
  "node_modules/qcobjects/build/is_forbidden_name.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__is__forbidden_name__ = void 0;
    var __is__forbidden_name__ = /* @__PURE__ */ __name((name) => {
      return ["__proto__", "prototype", "Object", "Map", "defineProperty", "indexOf", "toString", "__instanceID", "function", "Function"].indexOf(name) !== -1;
    }, "__is__forbidden_name__");
    exports.__is__forbidden_name__ = __is__forbidden_name__;
  }
});

// node_modules/qcobjects/build/LegacyCopy.js
var require_LegacyCopy = __commonJS({
  "node_modules/qcobjects/build/LegacyCopy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._LegacyCopy = void 0;
    var is_raw_class_1 = require_is_raw_class();
    var _LegacyCopy = /* @__PURE__ */ __name(function(obj, _ignore) {
      let _value_;
      switch (true) {
        case typeof obj === "string":
          _value_ = obj;
          break;
        case typeof obj === "number":
          _value_ = obj;
          break;
        case typeof obj === "object":
          _value_ = [{ ...Object.keys(obj).filter((k) => !_ignore?.includes(k)) }].map((k) => {
            return { [k]: obj[k] };
          }).reduce((p, c) => Object.assign(p, c));
          break;
        case typeof obj === "function":
          _value_ = obj.bind({});
          break;
        case (0, is_raw_class_1.__is_raw_class__)(obj):
          _value_ = class extends obj {
            static {
              __name(this, "_value_");
            }
          };
          break;
        default:
          break;
      }
      return _value_;
    }, "_LegacyCopy");
    exports._LegacyCopy = _LegacyCopy;
  }
});

// node_modules/qcobjects/build/Class.js
var require_Class = __commonJS({
  "node_modules/qcobjects/build/Class.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Class = void 0;
    var PrimaryCollections_1 = require_PrimaryCollections();
    var Cast_1 = require_Cast();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var getType_1 = require_getType();
    var IncrementInstanceID_1 = require_IncrementInstanceID();
    var introspection_1 = require_introspection();
    var is_a_1 = require_is_a();
    var is_forbidden_name_1 = require_is_forbidden_name();
    var LegacyCopy_1 = require_LegacyCopy();
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    var top_1 = require_top();
    var Class = /* @__PURE__ */ __name((name, _type, _definition) => {
      const _types_ = {};
      let type, definition;
      switch (true) {
        case (!name && !_type && !_definition):
          return class {
          };
        case (!!name && !_type && !_definition):
          type = class {
            static {
              __name(this, "type");
            }
          };
          definition = {};
          break;
        case (!!name && !_type && !!_definition):
          type = class {
            static {
              __name(this, "type");
            }
          };
          definition = _definition;
          break;
        case (!!name && !!_type && !!_definition):
          type = _type;
          definition = _definition;
          break;
        default:
          return class {
          };
      }
      if (typeof name !== "string") {
        throw new Error("Class name must be a string");
      }
      if (typeof type !== "function") {
        throw new Error("Class type must be a function or class");
      }
      if ((0, is_forbidden_name_1.__is__forbidden_name__)(name)) {
        throw new Error(`${name} is not an allowed word in the name of a class`);
      }
      if (typeof type.__definition === "object" && type.__definition && Object.keys(type.__definition).length !== 0) {
        definition.__definition = Object.assign((0, LegacyCopy_1._LegacyCopy)(type.__definition, ["name"]), type);
      }
      _types_[type.name] = type;
      if (typeof definition === "undefined" || definition === null) {
        definition = {};
      } else {
        definition = { ...definition };
      }
      if (typeof definition.__instanceID !== "undefined") {
        delete definition.__instanceID;
      }
      PrimaryCollections_1._QC_CLASSES[name] = class extends _types_[type.name] {
        __instanceID;
        __namespace;
        __definition = {
          ...definition
        };
        childs;
        _body;
        get body() {
          return this._body;
        }
        set body(value) {
          this._body = value;
        }
        static get __classType() {
          return Object.getPrototypeOf(this.constructor).name;
        }
        get __classType() {
          return this.constructor.name;
        }
        static hierarchy(__class__) {
          const __classType = /* @__PURE__ */ __name(function(o_c) {
            return Object.hasOwn(o_c, "__classType") ? o_c.__classType : getType_1.__getType__.call(__class__, o_c);
          }, "__classType");
          const __hierarchy__proto__ = /* @__PURE__ */ __name((c) => {
            return typeof c !== "undefined" && typeof c.__proto__ !== "undefined" && c.__proto__ !== null ? (__classType(c) !== "" ? [__classType(c)] : []).concat(__hierarchy__proto__(c.__proto__)) : [];
          }, "__hierarchy__proto__");
          if (typeof __class__ === "undefined" || __class__ === null) {
            __class__ = this;
          }
          let __hierarchy = [];
          __hierarchy.push(__classType(__class__));
          __hierarchy = __hierarchy.concat(__hierarchy__proto__(__class__.__proto__));
          return __hierarchy;
        }
        static getParentClass() {
          return Object.getPrototypeOf(this.prototype.constructor);
        }
        constructor(_o_) {
          super(_o_ || {});
          const self2 = this;
          (0, IncrementInstanceID_1.IncrementInstanceID)();
          if (!self2.__instanceID) {
            Object.defineProperty(self2, "__instanceID", {
              value: IncrementInstanceID_1.__instanceID,
              writable: false
            });
          }
          if (typeof self2.__definition !== "undefined") {
            Object.keys(self2.__definition).filter(function(k) {
              return isNaN(k) && !["name", "__instanceID", "__classType", "__definition"].includes(k);
            }).forEach(function(key) {
              if (typeof self2.__definition[key] === "function") {
                self2[key] = self2.__definition[key].bind(self2);
              } else {
                self2[key] = self2.__definition[key];
              }
            });
          }
          (0, introspection_1._methods_)(PrimaryCollections_1._QC_CLASSES[self2.__classType]).map(function(m) {
            self2[m.name] = m.bind(self2);
            return m;
          });
          (0, introspection_1._methods_)(self2.__definition).map(function(m) {
            self2[m.name] = m.bind(self2);
            return m;
          });
          if (self2.body) {
            if (typeof self2.__definition === "undefined" || !Object.hasOwn(self2.__definition, "body") || typeof self2.__definition.body === "undefined") {
              try {
                if (platform_1.isBrowser) {
                  self2.body = (0, DOMCreateElement_1._DOMCreateElement)(self2.__definition.__classType);
                } else {
                  self2.body = {};
                }
              } catch (e) {
                Logger_1.logger.debug(`An error ocurred: ${e}.`);
                self2.body = {};
              }
            } else if (Object.hasOwn(self2.__definition, "body")) {
              self2.body = self2.__definition.body;
            }
          }
          try {
            if (typeof self2.__new__ === "function") {
              self2.__new__.call(self2, _o_);
            } else if (typeof super.__new__ === "function") {
              self2.__new__ = super.__new__.bind(self2);
              self2.__new__.call(self2, _o_);
            }
            if (typeof self2 === "object" && Object.hasOwn(self2, "_new_") && typeof self2._new_.isCalled === "undefined") {
              try {
                self2._new_(_o_);
                self2._new_.isCalled = true;
              } catch (e) {
                Logger_1.logger.warn(`${self2.__classType}._new_() failed with error: ${e}`);
              }
            }
          } catch (e) {
            Logger_1.logger.warn(e);
          }
        }
        __new__(_o_) {
          (0, Cast_1._CastProps)(_o_, this);
        }
        // eslint-disable-next-line no-unused-vars
        _new_(_o_) {
        }
        getClass() {
          return Object.getPrototypeOf(this.constructor);
        }
        css(_css) {
          if (typeof this.body !== "undefined" && typeof this?.body !== "string" && typeof this?.body?.style !== "undefined") {
            Logger_1.logger.debug("body style");
            if (this.body) {
              this.body.style = (0, Cast_1._Cast)(_css, this?.body?.style);
            }
          }
          return typeof this.body !== "string" ? this?.body?.style : {};
        }
        hierarchy() {
          const __instance__ = this;
          return this.getClass()?.hierarchy(__instance__);
        }
        append(_child) {
          const child = _child || this.body;
          Logger_1.logger.debug("append: start");
          if ((0, is_a_1.is_a)(child, "Component")) {
            Logger_1.logger.debug("append: child is a Component");
            Logger_1.logger.debug(`appending the body of ${child.name}`);
          }
          if (typeof this.body !== "undefined") {
            Logger_1.logger.debug("append element");
            if (arguments.length > 0) {
              Logger_1.logger.debug("append to element");
              if (typeof this.body !== "string") {
                if (typeof this.body?.append !== "undefined") {
                  this?.body?.append(child);
                } else {
                  throw Error("body.append is undefined. That means the body is not well formed.");
                }
              } else {
                this.append(child);
              }
              if (typeof this.childs === "undefined") {
                this.childs = [];
              }
              this.childs.push(child);
            } else {
              if (platform_1.isBrowser) {
                Logger_1.logger.debug("append to body");
                document.body.append(child);
              }
            }
          }
        }
        attachIn(tag) {
          if (platform_1.isBrowser) {
            const tags = document.subelements(tag);
            for (let i = 0, j = tags.length; i < j; i++) {
              tags[i].append(this);
            }
          } else {
            throw new Error("attachIn not yet implemented for non browser platforms");
          }
        }
      };
      PrimaryCollections_1._QC_CLASSES[name] = (0, Cast_1._CastProps)(definition, PrimaryCollections_1._QC_CLASSES[name]);
      PrimaryCollections_1._QC_CLASSES[name].__definition = definition;
      PrimaryCollections_1._QC_CLASSES[name].__definition.__classType = name;
      top_1._top[name] = PrimaryCollections_1._QC_CLASSES[name];
      return PrimaryCollections_1._QC_CLASSES[name];
    }, "Class");
    exports.Class = Class;
    if (typeof exports.Class.prototype !== "undefined") {
      exports.Class.prototype.toString = function() {
        return "Class(name, type, definition) { [QCObjects native code] }";
      };
    }
  }
});

// node_modules/qcobjects/build/ClassFactory.js
var require_ClassFactory = __commonJS({
  "node_modules/qcobjects/build/ClassFactory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassFactory = void 0;
    var is_raw_class_1 = require_is_raw_class();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var ClassFactory6 = /* @__PURE__ */ __name((className) => {
      let _classFactory;
      if (typeof className === "undefined" || className === null) {
        throw Error("You need to pass a parameter {className}");
      }
      if (className !== null && className.indexOf(".") !== -1) {
        const packageName = className.split(".").slice(0, className.split(".").length - 1).join(".");
        const _className = className.split(".").slice(-1).join("");
        const _package = PrimaryCollections_1._QC_PACKAGES[packageName] || [];
        const packageClasses = _package.filter((classFactory) => {
          return (0, is_raw_class_1.__is_raw_class__)(classFactory);
        }).reverse();
        if (packageClasses.length > 0) {
          _classFactory = packageClasses[0];
        } else {
          throw Error(`Class ${_className} not found. Found classes: ${JSON.stringify(packageClasses)} in package ${packageName}`);
        }
      } else if (className !== null) {
        _classFactory = (0, PrimaryCollections_1.get_QC_CLASS)(className);
        if (typeof _classFactory === "undefined") {
          throw new Error(`${className} is undefined.`);
        }
      } else {
        throw Error(`className is null. Unable to retrieve the class factory.
 Not found in: 
 ${Object.keys(PrimaryCollections_1._QC_CLASSES).join("\n")}`);
      }
      return _classFactory;
    }, "ClassFactory");
    exports.ClassFactory = ClassFactory6;
  }
});

// node_modules/qcobjects/build/Base64.js
var require_Base64 = __commonJS({
  "node_modules/qcobjects/build/Base64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Base64 = void 0;
    var Base64 = class _Base64 {
      static {
        __name(this, "Base64");
      }
      static _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      static encode(e) {
        let t = "";
        let n, r, i, s, o, u, a;
        let f = 0;
        e = _Base64._utf8_encode(e);
        while (f < e.length) {
          n = e.charCodeAt(f++);
          r = e.charCodeAt(f++);
          i = e.charCodeAt(f++);
          s = n >> 2;
          o = (n & 3) << 4 | r >> 4;
          u = (r & 15) << 2 | i >> 6;
          a = i & 63;
          if (isNaN(r)) {
            u = a = 64;
          } else if (isNaN(i)) {
            a = 64;
          }
          t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
      }
      static decode(e) {
        let t = "";
        let n, r, i;
        let s, o, u, a;
        let f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
          s = this._keyStr.indexOf(e.charAt(f++));
          o = this._keyStr.indexOf(e.charAt(f++));
          u = this._keyStr.indexOf(e.charAt(f++));
          a = this._keyStr.indexOf(e.charAt(f++));
          n = s << 2 | o >> 4;
          r = (o & 15) << 4 | u >> 2;
          i = (u & 3) << 6 | a;
          t = t + String.fromCharCode(n);
          if (u !== 64) {
            t = t + String.fromCharCode(r);
          }
          if (a !== 64) {
            t = t + String.fromCharCode(i);
          }
        }
        t = _Base64._utf8_decode(t);
        return t;
      }
      static _utf8_encode(e) {
        e = e.replace(/rn/g, "n");
        let t = "";
        for (let n = 0; n < e.length; n++) {
          const r = e.charCodeAt(n);
          if (r < 128) {
            t += String.fromCharCode(r);
          } else if (r > 127 && r < 2048) {
            t += String.fromCharCode(r >> 6 | 192);
            t += String.fromCharCode(r & 63 | 128);
          } else {
            t += String.fromCharCode(r >> 12 | 224);
            t += String.fromCharCode(r >> 6 & 63 | 128);
            t += String.fromCharCode(r & 63 | 128);
          }
        }
        return t;
      }
      static _utf8_decode(e) {
        let t = "";
        let n = 0;
        let r = 0;
        let c2 = 0;
        let c3;
        while (n < e.length) {
          r = e.charCodeAt(n);
          if (r < 128) {
            t += String.fromCharCode(r);
            n++;
          } else if (r > 191 && r < 224) {
            c2 = e.charCodeAt(n + 1);
            t += String.fromCharCode((r & 31) << 6 | c2 & 63);
            n += 2;
          } else {
            c2 = e.charCodeAt(n + 1);
            c3 = e.charCodeAt(n + 2);
            t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            n += 3;
          }
        }
        return t;
      }
    };
    exports.Base64 = Base64;
  }
});

// node_modules/qcobjects/build/basePath.js
var require_basePath = __commonJS({
  "node_modules/qcobjects/build/basePath.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setBasePath = exports._basePath_ = void 0;
    var platform_1 = require_platform();
    var node_process_1 = __importDefault(__require("node:process"));
    exports._basePath_ = function() {
      let _basePath = "";
      if (platform_1.isBrowser) {
        const baseURI = document.baseURI.split("?")[0].split("/");
        baseURI.pop();
        _basePath = baseURI.join("/") + "/";
      } else {
        if (typeof node_process_1.default !== "undefined") {
          _basePath = `${node_process_1.default.cwd()}/`;
        } else {
          _basePath = "";
        }
      }
      return _basePath;
    }();
    var setBasePath = /* @__PURE__ */ __name((value) => {
      exports._basePath_ = value;
    }, "setBasePath");
    exports.setBasePath = setBasePath;
  }
});

// node_modules/qcobjects/build/DataStringify.js
var require_DataStringify = __commonJS({
  "node_modules/qcobjects/build/DataStringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._DataStringify = void 0;
    var LegacyCopy_1 = require_LegacyCopy();
    var _DataStringify4 = /* @__PURE__ */ __name((data) => {
      const getCircularReplacer = /* @__PURE__ */ __name(function() {
        const seen = /* @__PURE__ */ new WeakSet();
        let _level = 0;
        return function(key, value) {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              _level += 1;
              return _level <= 3 ? (0, LegacyCopy_1._LegacyCopy)(value) : null;
            }
            seen.add(value);
          }
          return value;
        };
      }, "getCircularReplacer");
      return JSON.stringify(data, getCircularReplacer());
    }, "_DataStringify");
    exports._DataStringify = _DataStringify4;
  }
});

// node_modules/qcobjects/build/domain.js
var require_domain = __commonJS({
  "node_modules/qcobjects/build/domain.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._domain_ = void 0;
    exports._domain_ = typeof location !== "undefined" && location.hostname !== "" ? location.hostname : "localhost";
  }
});

// node_modules/qcobjects/build/New.js
var require_New = __commonJS({
  "node_modules/qcobjects/build/New.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.New = void 0;
    var New10 = /* @__PURE__ */ __name(function(__class__, args = {}) {
      args = arguments.length > 1 ? args : {};
      return typeof __class__ === "undefined" ? new Object() : new __class__(args);
    }, "New");
    exports.New = New10;
    exports.New.prototype.toString = function() {
      return "New(QCObjectsClassName, args) { [QCObjects native code] }";
    };
  }
});

// node_modules/qcobjects/build/secretKey.js
var require_secretKey = __commonJS({
  "node_modules/qcobjects/build/secretKey.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._secretKey = void 0;
    var platform_1 = require_platform();
    exports._secretKey = platform_1.isBrowser ? location.host : "secret";
  }
});

// node_modules/qcobjects/build/Crypt.js
var require_Crypt = __commonJS({
  "node_modules/qcobjects/build/Crypt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._DecryptObject = exports._CryptObject = exports._Crypt = void 0;
    var Base64_1 = require_Base64();
    var DataStringify_1 = require_DataStringify();
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var secretKey_1 = require_secretKey();
    var _Crypt2 = class __Crypt extends InheritClass_1.InheritClass {
      static {
        __name(this, "_Crypt");
      }
      string = "";
      key = "";
      // eslint-disable-next-line no-unused-vars
      encrypt(_string_, key) {
        throw new Error("Method not implemented.");
      }
      // eslint-disable-next-line no-unused-vars
      decrypt(_string_, key) {
        throw new Error("Method not implemented.");
      }
      last_string = "";
      last_key = "";
      construct = false;
      _new_(o) {
        const string = o.string;
        let key = Object.hasOwn(o, "key") ? o.key : "";
        this.__new__(o);
        key = key === "" ? this.__instanceID.toString() : key;
        this.last_key = key;
        this.last_string = string;
        this.construct = true;
      }
      _encrypt() {
        const string = this.string;
        const key = this.key;
        let result = "";
        let char;
        let keychar;
        for (let i = 0; i < string.length; i++) {
          char = string.substr(i, 1);
          keychar = key.substr(i % key.length - 1, 1);
          char = String.fromCharCode(char.charCodeAt(0) + keychar.charCodeAt(0));
          result += char;
        }
        this.last_string = Base64_1.Base64.encode(result);
        return this.last_string;
      }
      _decrypt() {
        let string = this.string;
        const key = this.key;
        let result = "";
        let char;
        let keychar;
        string = Base64_1.Base64.decode(string);
        for (let i = 0; i < string.length; i++) {
          char = string.substr(i, 1);
          keychar = key.substr(i % key.length - 1, 1);
          char = String.fromCharCode(char.charCodeAt(0) - keychar.charCodeAt(0));
          result += char;
        }
        this.last_string = result;
        return this.last_string;
      }
      static encrypt(string, key) {
        const crypt = new __Crypt({
          string,
          key: key !== "" ? key : "12345678ABC"
        });
        return crypt._encrypt();
      }
      static decrypt(string, key) {
        const crypt = new __Crypt({
          string,
          key: key !== "" ? key : "12345678ABC"
        });
        return crypt._decrypt();
      }
    };
    exports._Crypt = _Crypt2;
    var _CryptObject = /* @__PURE__ */ __name(function(o) {
      return _Crypt2.encrypt((0, DataStringify_1._DataStringify)(o), secretKey_1._secretKey);
    }, "_CryptObject");
    exports._CryptObject = _CryptObject;
    var _DecryptObject = /* @__PURE__ */ __name(function(s) {
      return s === "" ? {} : JSON.parse(_Crypt2.decrypt(s, secretKey_1._secretKey));
    }, "_DecryptObject");
    exports._DecryptObject = _DecryptObject;
    (0, Package_1.Package)("com.qcobjects", [_Crypt2]);
  }
});

// node_modules/qcobjects/build/ConfigSettings.js
var require_ConfigSettings = __commonJS({
  "node_modules/qcobjects/build/ConfigSettings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigSettings = void 0;
    var basePath_1 = require_basePath();
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var ConfigSettings = class _ConfigSettings extends InheritClass_1.InheritClass {
      static {
        __name(this, "ConfigSettings");
      }
      _CONFIG = {
        "relativeImportPath": "",
        "remoteImportsPath": "",
        "remoteSDKPath": "https://sdk.qcobjects.dev/",
        "asynchronousImportsLoad": false,
        "removePackageScriptAfterLoading": true,
        "componentsBasePath": "",
        "delayForReady": 0,
        "preserveComponentBodyTag": false,
        "useConfigService": false,
        "routingWay": "hash",
        "useSDK": true,
        "useLocalSDK": false,
        "basePath": basePath_1._basePath_
      };
      static _instance;
      _CONFIG_ENC = "";
      set(name, value) {
        this._CONFIG[name] = value;
      }
      get(name, _defaultValue) {
        return this._CONFIG[name] || _defaultValue;
      }
      static get instance() {
        if (typeof _ConfigSettings._instance === "undefined") {
          _ConfigSettings._instance = new _ConfigSettings();
        }
        return _ConfigSettings._instance;
      }
    };
    exports.ConfigSettings = ConfigSettings;
    (0, Package_1.Package)("com.qcobjects", [ConfigSettings]);
  }
});

// node_modules/qcobjects/build/CONFIG.js
var require_CONFIG = __commonJS({
  "node_modules/qcobjects/build/CONFIG.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CONFIG = void 0;
    var basePath_1 = require_basePath();
    var Cast_1 = require_Cast();
    var Crypt_1 = require_Crypt();
    var DataStringify_1 = require_DataStringify();
    var Logger_1 = require_Logger();
    var Processor_1 = require_Processor();
    var secretKey_1 = require_secretKey();
    var Package_1 = require_Package();
    var InheritClass_1 = require_InheritClass();
    var ConfigSettings_1 = require_ConfigSettings();
    var CONFIG10 = class _CONFIG extends InheritClass_1.InheritClass {
      static {
        __name(this, "CONFIG");
      }
      get _CONFIG_ENC() {
        return ConfigSettings_1.ConfigSettings.instance._CONFIG_ENC;
      }
      get _CONFIG() {
        return ConfigSettings_1.ConfigSettings.instance._CONFIG;
      }
      set(name, value) {
        Logger_1.logger.debug(`CONFIG.set  ${name}: ${value}`);
        if (name === "basePath") {
          (0, basePath_1.setBasePath)(value);
        }
        let _conf;
        try {
          _conf = function(config) {
            if (config._CONFIG_ENC === null) {
              config._CONFIG_ENC = Crypt_1._Crypt.encrypt((0, DataStringify_1._DataStringify)({}), secretKey_1._secretKey);
            }
            const _protectedEnc = config._CONFIG_ENC.valueOf();
            const _protectedConf = config._CONFIG?.valueOf();
            return (0, Cast_1._CastProps)(_protectedConf, (0, Crypt_1._DecryptObject)(_protectedEnc));
          }(ConfigSettings_1.ConfigSettings.instance);
        } catch (e) {
          _conf = {};
          console.error(e);
          Logger_1.logger.debug("failed to encrypt config");
        }
        _conf[name] = value;
        ConfigSettings_1.ConfigSettings.instance._CONFIG_ENC = (0, Crypt_1._CryptObject)(_conf);
        ConfigSettings_1.ConfigSettings.instance.set(name, value);
      }
      get(name, _default) {
        let _value;
        try {
          const _conf = function(config) {
            if (config._CONFIG_ENC === null) {
              config._CONFIG_ENC = Crypt_1._Crypt.encrypt((0, DataStringify_1._DataStringify)({}), secretKey_1._secretKey);
            }
            const _protectedEnc = config._CONFIG_ENC.valueOf();
            const _protectedConf = config._CONFIG.valueOf();
            return (0, Cast_1._CastProps)(_protectedConf, (0, Crypt_1._DecryptObject)(_protectedEnc));
          }(ConfigSettings_1.ConfigSettings.instance);
          if (typeof _conf[name] !== "undefined") {
            _value = _conf[name];
          }
        } catch (e) {
          console.error(e);
          Logger_1.logger.debug("Something wrong when trying to get CONFIG values");
          Logger_1.logger.debug("No config value for: " + name);
          _value = _default;
        }
        return Processor_1.GlobalProcessor.processObject(_value) || _default;
      }
      static _instance;
      static get instance() {
        if (typeof _CONFIG._instance === "undefined") {
          _CONFIG._instance = new _CONFIG();
        }
        return _CONFIG._instance;
      }
      static set(name, value) {
        _CONFIG.instance.set(name, value);
      }
      static get(name, value) {
        return _CONFIG.instance.get(name, value);
      }
    };
    exports.CONFIG = CONFIG10;
    (0, Package_1.Package)("com.qcobjects", [CONFIG10]);
  }
});

// node_modules/qcobjects/build/Processor.js
var require_Processor = __commonJS({
  "node_modules/qcobjects/build/Processor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalProcessor = exports.Processor = void 0;
    var CONFIG_1 = require_CONFIG();
    var InheritClass_1 = require_InheritClass();
    var New_1 = require_New();
    var top_1 = require_top();
    var Package_1 = require_Package();
    var Processor = class _Processor extends InheritClass_1.InheritClass {
      static {
        __name(this, "Processor");
      }
      static _instance;
      constructor({ component, processors }) {
        super({ component });
        if (typeof processors !== "undefined") {
          this.processors = Object.assign(processors, _Processor.instance.processors);
        }
      }
      processors = {
        "config"(component, arg) {
          return CONFIG_1.CONFIG.get(arg, "");
        },
        "ENV"(component, arg) {
          return typeof process !== "undefined" ? process.env[arg] : "";
        },
        "global"(component, arg) {
          return typeof top_1._top !== "undefined" ? top_1._top[arg] : "";
        }
      };
      static get instance() {
        if (typeof _Processor._instance === "undefined") {
          _Processor._instance = new _Processor({ component: null });
        }
        return _Processor._instance;
      }
      setProcessor(_proc_) {
        if (typeof _proc_ === "function" && _proc_.name !== "") {
          this.processors[_proc_.name] = _proc_;
        }
      }
      component;
      execute(component, processorName, args) {
        const processorHandler = typeof component !== "undefined" && component !== null ? component.processorHandler : this;
        return processorHandler?.processors[processorName].bind(processorHandler).apply(processorHandler, [component, args?.split(",")]);
      }
      process(template, component = null) {
        const processorHandler = component !== null ? component.processorHandler : (0, New_1.New)(_Processor, { component: null });
        if (typeof template === "string") {
          Object.keys(processorHandler.processors).map((funcName) => {
            return [...template.matchAll(new RegExp("\\$" + funcName + "\\((.*)\\).*", "g"))].map(function(procesorMatch) {
              const match0 = `$${funcName}(${procesorMatch[1]})`;
              template = template.replace(match0, processorHandler.execute.bind(processorHandler).call(processorHandler, component, funcName, procesorMatch[1]));
              return procesorMatch;
            });
          });
        }
        return template;
      }
      processObject(obj, component = null) {
        let __instance__ = component === null ? this : component.processorHandler;
        if (typeof __instance__ === "undefined") {
          __instance__ = new _Processor({ component });
        }
        if (typeof obj === "object") {
          Object.keys(obj).map((_k) => {
            if (typeof obj[_k] === "object" && !Object.hasOwn(obj[_k], "call")) {
              obj[_k] = __instance__?.processObject.bind(__instance__)(obj[_k], component);
            } else if (typeof obj[_k] === "string") {
              obj[_k] = __instance__?.process.bind(__instance__)(obj[_k], component);
            }
            return _k;
          });
        } else if (typeof obj === "string") {
          obj = __instance__.process.bind(__instance__)(obj, component);
        }
        return obj;
      }
    };
    exports.Processor = Processor;
    exports.GlobalProcessor = Processor.instance;
    (0, Package_1.Package)("com.qcobjects", [Processor]);
  }
});

// node_modules/qcobjects/build/routings.js
var require_routings = __commonJS({
  "node_modules/qcobjects/build/routings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__valid_routing_way__ = exports.__valid_routings__ = exports.__routing_params__ = void 0;
    var __routing_params__ = /* @__PURE__ */ __name((routing, routingPath) => {
      const standardRoutingPath = routing.path.replace(/{(.*?)}/g, "(?<$1>.*)");
      return {
        ...[...routingPath.matchAll(new RegExp(standardRoutingPath, "g"))][0].groups
      };
    }, "__routing_params__");
    exports.__routing_params__ = __routing_params__;
    var __valid_routings__ = /* @__PURE__ */ __name(function(routings, routingPath) {
      return routings.filter(function(routing) {
        const standardRoutingPath = routing.path.replace(/{(.*?)}/g, "(?<$1>.*)");
        return new RegExp(standardRoutingPath, "g").test(routingPath);
      }).reverse();
    }, "__valid_routings__");
    exports.__valid_routings__ = __valid_routings__;
    var __valid_routing_way__ = /* @__PURE__ */ __name((validRoutingWays, routingWay) => {
      return validRoutingWays.includes(routingWay);
    }, "__valid_routing_way__");
    exports.__valid_routing_way__ = __valid_routing_way__;
  }
});

// node_modules/qcobjects/build/asyncLoad.js
var require_asyncLoad = __commonJS({
  "node_modules/qcobjects/build/asyncLoad.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._fireAsyncLoad = exports._asyncLoad = void 0;
    exports.asyncLoad = asyncLoad;
    var Export_1 = require_Export();
    var platform_1 = require_platform();
    var top_1 = require_top();
    exports._asyncLoad = [];
    function asyncLoad(callback, args) {
      class AsyncCallback {
        static {
          __name(this, "AsyncCallback");
        }
        func;
        args;
        constructor(callback2, args2 = []) {
          this.func = callback2;
          this.args = args2;
        }
        dispatch() {
          this.func.apply(this, ...args, this);
        }
      }
      exports._asyncLoad.push(new AsyncCallback(callback, args));
      return AsyncCallback;
    }
    __name(asyncLoad, "asyncLoad");
    var _fireAsyncLoad = /* @__PURE__ */ __name(() => {
      if (platform_1.isBrowser) {
        document.addEventListener("readystatechange", () => {
          if (document.readyState === "complete") {
            exports._asyncLoad.map(function(fc) {
              fc.dispatch.call(fc);
            });
          }
        });
      } else if (typeof top_1._top.global !== "undefined") {
        exports._asyncLoad.map(function(fc) {
          fc.dispatch.call(fc);
        });
      }
    }, "_fireAsyncLoad");
    exports._fireAsyncLoad = _fireAsyncLoad;
    (0, Export_1.Export)(asyncLoad);
  }
});

// node_modules/qcobjects/build/ComplexStorageCache.js
var require_ComplexStorageCache = __commonJS({
  "node_modules/qcobjects/build/ComplexStorageCache.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComplexStorageCache = void 0;
    var Base64_1 = require_Base64();
    var DataStringify_1 = require_DataStringify();
    var Logger_1 = require_Logger();
    var ComplexStorageCache2 = class {
      static {
        __name(this, "ComplexStorageCache");
      }
      constructor(params) {
        let load, alternate;
        const object = params.index;
        if (typeof object !== "undefined") {
          load = params.load;
          alternate = params.alternate;
          const cachedObjectID = this.getID(object);
          const cachedResponse = localStorage.getItem(cachedObjectID);
          if (this.isEmpty(cachedResponse)) {
            const cachedNewResponse = load.call(null, {
              cachedObjectID,
              cachedResponse,
              "cache": this
            });
            this.save(object, cachedNewResponse);
            Logger_1.logger.debug("RESPONSE OF {{cachedObjectID}} CACHED".replace("{{cachedObjectID}}", cachedObjectID));
          } else {
            alternate.call(null, {
              cachedObjectID,
              cachedResponse,
              "cache": this
            });
            Logger_1.logger.debug("RESPONSE OF {{cachedObjectID}} IS ALREADY CACHED ".replace("{{cachedObjectID}}", cachedObjectID));
          }
        } else {
          throw new Error("ComplexStorageCache: index is undefined");
        }
        return this;
      }
      getItem(cachedObjectID) {
        const retrievedObject = localStorage.getItem(cachedObjectID);
        if (!this.isEmpty(retrievedObject)) {
          return JSON.parse(retrievedObject);
        } else {
          return null;
        }
      }
      setItem(cachedObjectID, value) {
        localStorage.setItem(cachedObjectID, (0, DataStringify_1._DataStringify)(value));
      }
      isEmpty(object) {
        let r = false;
        switch (true) {
          case typeof object === "undefined":
          case (typeof object === "string" && object === ""):
          case (typeof object === "string" && object === "undefined"):
          case (typeof object === "number" && object === 0):
          case object === null:
            r = true;
            break;
          default:
            r = false;
        }
        return r;
      }
      getID(object) {
        let cachedObjectID;
        if (typeof object !== "undefined") {
          cachedObjectID = "cachedObject_" + Base64_1.Base64.encode((0, DataStringify_1._DataStringify)(object).replace(/\{|\}|,/g, "_"));
        }
        return cachedObjectID;
      }
      save(object, cachedNewResponse) {
        const cachedObjectID = this.getID(object);
        Logger_1.logger.debug("CACHING THE RESPONSE OF {{cachedObjectID}} ".replace("{{cachedObjectID}}", cachedObjectID));
        this.setItem(cachedObjectID, cachedNewResponse);
      }
      getCached(object) {
        const cachedObjectID = this.getID(object);
        return this.getItem(cachedObjectID);
      }
      clear() {
        Object.keys(localStorage).filter(function(k) {
          return k.startsWith("cachedObject_");
        }).map(function(c) {
          localStorage.removeItem(c);
          return c;
        });
      }
    };
    exports.ComplexStorageCache = ComplexStorageCache2;
  }
});

// node_modules/qcobjects/build/serviceLoader.js
var require_serviceLoader = __commonJS({
  "node_modules/qcobjects/build/serviceLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serviceLoader = void 0;
    var asyncLoad_1 = require_asyncLoad();
    var ComplexStorageCache_1 = require_ComplexStorageCache();
    var DataStringify_1 = require_DataStringify();
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    var top_1 = require_top();
    var serviceLoader4 = /* @__PURE__ */ __name(function(service, _async = false) {
      const _serviceLoaderInBrowser = /* @__PURE__ */ __name(function(service2) {
        var _promise = new Promise(function(resolve, reject) {
          Logger_1.logger.debug("LOADING SERVICE DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(service2.data)).replace("{{URL}}", service2.url));
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = service2.withCredentials;
          const xhrasync = true;
          xhr.open(service2.method, service2.url, xhrasync);
          for (const header in service2.headers) {
            try {
              if (typeof service2.headers[header] !== "function") {
                xhr.setRequestHeader(header, service2.headers[header]);
              }
            } catch (e) {
              Logger_1.logger.debug("Something went wrong when assign the header " + header);
              Logger_1.logger.debug(`An error ocurred: ${e}`);
            }
          }
          xhr.onload = function() {
            if (xhr.status === 200) {
              const response = xhr.responseText;
              Logger_1.logger.debug("Data received {{DATA}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(response)));
              Logger_1.logger.debug("CREATING SERVICE {{NAME}}".replace("{{NAME}}", service2.name));
              service2.template = response;
              if (service2.cached && typeof cache !== "undefined") {
                cache.save(service2.name, service2.template);
              }
              if (typeof service2.done === "function") {
                var standardResponse = {
                  "request": xhr,
                  service: service2
                };
                service2.done.call(service2, standardResponse);
                resolve.call(_promise, standardResponse);
              }
            } else {
              if (typeof service2.fail === "function") {
                var standardResponse = {
                  "request": xhr,
                  service: service2
                };
                service2.fail.call(service2, standardResponse);
                reject.call(_promise, standardResponse);
              }
            }
          };
          const _directLoad = /* @__PURE__ */ __name(function() {
            Logger_1.logger.debug("SENDING THE NORMAL REQUEST  ");
            try {
              xhr.send((0, DataStringify_1._DataStringify)(service2.data));
            } catch (e) {
              Logger_1.logger.debug("SOMETHING WRONG WITH REQUEST  ");
              Logger_1.logger.debug(`An error ocurred: ${e}`);
              reject.call(_promise, {
                request: xhr,
                service: service2
              });
            }
          }, "_directLoad");
          if (service2.cached) {
            var cache = new ComplexStorageCache_1.ComplexStorageCache({
              index: service2.data,
              load() {
                _directLoad.call(this);
              },
              alternate(cacheController) {
                if (service2.method === "GET") {
                  service2.template = cacheController.cache.getCached(service2.name);
                  if (typeof service2.done === "function") {
                    const standardResponse = {
                      "request": xhr,
                      service: service2
                    };
                    service2.done.call(service2, standardResponse);
                    resolve.call(_promise, standardResponse);
                  }
                } else {
                  _directLoad();
                }
              }
            });
            top_1._top.lastCache = cache;
          } else {
            _directLoad();
          }
          return xhr;
        });
        return _promise;
      }, "_serviceLoaderInBrowser");
      const _serviceLoaderInNode = /* @__PURE__ */ __name(function(service2) {
        var _promise = new Promise(function(resolve, reject) {
          if (typeof URL === "undefined") {
            global.URL = (0, platform_1._require_)("url").URL;
            const URL2 = global.URL;
          }
          const serviceURL = new URL(service2.url);
          var req;
          service2.useHTTP2 = Object.hasOwn(service2, "useHTTP2") && service2.useHTTP2;
          const captureEvents = /* @__PURE__ */ __name(function(req2) {
            Logger_1.logger.debug("LOADING SERVICE DATA (non-browser) {{DATA}} FROM {{URL}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(service2.data)).replace("{{URL}}", service2.url));
            let dataXML;
            const standardResponse = {
              "http2Client": client,
              "request": req2,
              service: service2,
              "responseHeaders": null
            };
            if (typeof service2.data === "object" && service2.data !== null) {
              if (service2.useHTTP2) {
                try {
                  Logger_1.logger.debug("Sending data...");
                  const buffer = new Buffer((0, DataStringify_1._DataStringify)(service2.data));
                  req2.write(buffer);
                } catch (e) {
                  Logger_1.logger.debug("It was not possible to send any data");
                  Logger_1.logger.debug(`An error ocurred: ${e}`);
                }
              }
            }
            dataXML = "";
            req2.on("response", (responseHeaders) => {
              Logger_1.logger.debug("receiving response...");
              standardResponse.responseHeaders = responseHeaders;
              dataXML = "";
            });
            req2.on("data", (chunk) => {
              Logger_1.logger.debug("receiving data...");
              dataXML += "" + chunk.toString();
              service2.template = dataXML;
            });
            if (service2.useHTTP2) {
              req2.resume();
            }
            req2.on("end", () => {
              Logger_1.logger.debug("ending call...");
              service2.template = dataXML;
              if (Object.hasOwn(service2, "useHTTP2") && service2.useHTTP2) {
                client.destroy();
              } else {
                req2.destroy();
              }
              service2.done.call(service2, standardResponse);
              resolve.call(_promise, standardResponse);
            });
            if (service2.useHTTP2) {
              req2.end();
            }
          }, "captureEvents");
          try {
            let requestOptions;
            if (service2.useHTTP2) {
              Logger_1.logger.debug("using http2");
              const http2 = (0, platform_1._require_)("http2");
              var client = http2.connect(serviceURL.origin);
              requestOptions = Object.assign({
                ":method": service2.method,
                ":path": serviceURL.pathname
              }, service2.options);
              requestOptions = Object.assign(requestOptions, service2.headers);
              req = client.request(requestOptions);
              req.setEncoding("utf8");
              captureEvents(req);
            } else {
              if (serviceURL.protocol === "http:") {
                const http = (0, platform_1._require_)("http");
                const request = http.request;
                requestOptions = Object.assign({
                  "url": service2.url,
                  headers: service2.headers
                }, service2.options);
                req = request(service2.url);
                captureEvents(req);
              } else if (serviceURL.protocol === "https:") {
                const https = (0, platform_1._require_)("https");
                requestOptions = Object.assign({
                  hostname: serviceURL.hostname,
                  port: serviceURL.port,
                  path: serviceURL.pathname,
                  method: service2.method,
                  headers: service2.headers
                }, service2.options);
                const _req_ = https.request(requestOptions, function(req2) {
                  captureEvents(req2);
                });
                _req_.end();
              } else {
                const e = "Protocol not supported: " + serviceURL.protocol;
                Logger_1.logger.debug(e);
                throw new Error(e);
              }
            }
          } catch (e) {
            Logger_1.logger.debug(e);
            service2.fail.call(service2, e);
            reject.call(_promise, e);
          }
        }).catch((e) => {
          Logger_1.logger.debug(`Something happened when trying to call the service: ${service2.name}. Error: ${e}`);
          service2.fail.call(service2, e);
        });
        return _promise;
      }, "_serviceLoaderInNode");
      const _serviceLoaderMockup = /* @__PURE__ */ __name(function(service2) {
        var _promise = new Promise(function(resolve) {
          Logger_1.logger.debug(`Calling mockup service ${service2.name} ...`);
          const standardResponse = {
            "request": null,
            service: service2,
            "responseHeaders": service2.responseHeaders
          };
          if (typeof service2.mockup === "function") {
            service2.mockup.call(service2, standardResponse);
          } else {
            service2.done.call(service2, standardResponse);
          }
          resolve.call(_promise, standardResponse);
        });
        return _promise;
      }, "_serviceLoaderMockup");
      const _serviceLoaderLocal = /* @__PURE__ */ __name(function(service2) {
        var _promise = new Promise(function(resolve) {
          Logger_1.logger.debug(`Calling local service ${service2.name} ...`);
          const standardResponse = {
            "request": null,
            service: service2,
            "responseHeaders": service2.responseHeaders
          };
          if (typeof service2.local === "function") {
            service2.local.call(service2, standardResponse);
          } else {
            service2.done.call(service2, standardResponse);
          }
          resolve.call(_promise, standardResponse);
        });
        return _promise;
      }, "_serviceLoaderLocal");
      let _ret_;
      switch (service.kind) {
        case "rest":
          if (platform_1.isBrowser) {
            if (typeof _async !== "undefined" && _async) {
              _ret_ = (0, asyncLoad_1.asyncLoad)(_serviceLoaderInBrowser, [service, _async]);
            } else {
              _ret_ = _serviceLoaderInBrowser(service);
            }
          } else {
            _ret_ = _serviceLoaderInNode(service);
          }
          break;
        case "mockup":
          _ret_ = _serviceLoaderMockup(service);
          break;
        case "local":
          _ret_ = _serviceLoaderLocal(service);
          break;
        default:
          Logger_1.logger.debug(`The value of the kind property of the service ${service.name} is not valid`);
          _ret_ = Promise.resolve();
          break;
      }
      return _ret_;
    }, "serviceLoader");
    exports.serviceLoader = serviceLoader4;
  }
});

// node_modules/qcobjects/build/tag_filter.js
var require_tag_filter = __commonJS({
  "node_modules/qcobjects/build/tag_filter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._tag_filter_ = void 0;
    exports._tag_filter_ = "quick-component:not([loaded]),component:not([loaded])";
  }
});

// node_modules/qcobjects/build/componentLoader.js
var require_componentLoader = __commonJS({
  "node_modules/qcobjects/build/componentLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.componentLoader = void 0;
    var asyncLoad_1 = require_asyncLoad();
    var ComplexStorageCache_1 = require_ComplexStorageCache();
    var DataStringify_1 = require_DataStringify();
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    var top_1 = require_top();
    var componentLoader = /* @__PURE__ */ __name(function(component, _async) {
      let __promise__;
      const _componentLoaderInBrowser = /* @__PURE__ */ __name(function(component2) {
        __promise__ = new Promise(function(resolve, reject) {
          const _promise = component2.__promise__;
          const container = Object.hasOwn(component2, "container") && typeof component2.container !== "undefined" && component2.container !== null ? component2.container : component2.body;
          if (container !== null) {
            const _feedComponent_ = /* @__PURE__ */ __name(function(component3) {
              component3.feedComponent();
              const standardResponse = {
                "request": xhr,
                component: component3
              };
              resolve.call(_promise, standardResponse);
            }, "_feedComponent_");
            Logger_1.logger.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(component2.data)).replace("{{URL}}", component2.url));
            const _componentLoaded = /* @__PURE__ */ __name(function() {
              const successStatus = is_file ? 0 : 200;
              if (xhr.status === successStatus) {
                const response = xhr.responseText;
                Logger_1.logger.debug("Data received {{DATA}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(response)));
                Logger_1.logger.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}", component2.name));
                component2.template = response;
                if (component2.cached && typeof cache !== "undefined") {
                  cache.save(component2.name, component2.template);
                }
                _feedComponent_(component2);
              } else {
                const standardResponse = {
                  "request": xhr,
                  component: component2
                };
                reject.call(_promise, standardResponse);
              }
            }, "_componentLoaded");
            if (typeof component2.template === "string" && component2.template !== "") {
              _feedComponent_(component2);
            } else {
              var is_file = !!component2.url.startsWith("file:");
              var xhr = new XMLHttpRequest();
              if (!is_file) {
                try {
                  Logger_1.logger.debug("Calling the url of component in async mode.");
                  xhr.open(component2.method, component2.url, true);
                } catch (e) {
                  Logger_1.logger.debug(`An error ocurred: ${e}.`);
                  Logger_1.logger.debug("Last try has failed... The component cannot be loaded.");
                }
              } else {
                if ("fetch" in top_1._top) {
                  Logger_1.logger.debug("I can use fetch...");
                  Logger_1.logger.debug("It is a file to be loaded, so I will try to use fetch");
                  fetch(component2.url).then((response) => {
                    Logger_1.logger.debug("I got a response from fetch, so I'll feed the component");
                    response.text().then((text) => {
                      component2.template = text;
                      _feedComponent_(component2);
                    }).catch((e) => {
                      throw new Error(`An error ocurred: ${e}`);
                    });
                  }).catch((e) => {
                    throw new Error(`An error ocurred: ${e}`);
                  });
                }
              }
              if (!platform_1.is_phonegap && !is_file) {
                xhr.setRequestHeader("Content-Type", "text/html");
              }
              if (!is_file) {
                xhr.onload = _componentLoaded;
              }
              const _directLoad = /* @__PURE__ */ __name(function(is_file2) {
                is_file2 = !(typeof is_file2 === "undefined" || !is_file2);
                Logger_1.logger.debug("SENDING THE NORMAL REQUEST  ");
                if (is_file2) {
                  if (!("fetch" in top_1._top)) {
                    Logger_1.logger.debug("I have to try to load the file using xhr...  ");
                    xhr.send(null);
                    if (xhr.status === XMLHttpRequest.DONE) {
                      _componentLoaded();
                    }
                  }
                } else {
                  Logger_1.logger.debug("Trying to send the data to the component...  ");
                  xhr.send((0, DataStringify_1._DataStringify)(component2.data));
                }
              }, "_directLoad");
              if (component2.cached && !is_file) {
                Logger_1.logger.debug("USING CACHE FOR COMPONENT: " + component2.name);
                var cache = new ComplexStorageCache_1.ComplexStorageCache({
                  index: component2.cacheIndex,
                  load() {
                    _directLoad.call(this, is_file);
                  },
                  alternate(cacheController) {
                    if (component2.method === "GET") {
                      component2.template = cacheController.cache.getCached(component2.cacheIndex);
                      _feedComponent_.call(this, component2);
                    } else {
                      _directLoad.call(this, is_file);
                    }
                  }
                });
                top_1._top.lastCache = cache;
              } else {
                Logger_1.logger.debug("NOT USING CACHE FOR COMPONENT: " + component2.name);
                _directLoad(is_file);
              }
            }
          } else {
            Logger_1.logger.debug("CONTAINER DOESNT EXIST");
          }
        });
        __promise__.then(function(standardResponse) {
          return component2.__done__().then(function() {
            let _ret_2;
            if (typeof component2.done === "function") {
              _ret_2 = component2.done.call(component2, standardResponse);
            }
            return Promise.resolve(_ret_2);
          });
        }, function(standardResponse) {
          if (typeof component2.fail === "function") {
            component2.fail.call(component2, standardResponse).catch((e) => {
              throw new Error(`${e}`);
            });
          }
          return Promise.reject(new Error("An error ocurred"));
        }).catch(function(e) {
          Logger_1.logger.debug("Something wrong loading the component");
          throw new Error(`An error ocurred: ${e}`);
        });
        return __promise__;
      }, "_componentLoaderInBrowser");
      const _componentLoaderInNode = /* @__PURE__ */ __name(function(component2) {
        __promise__ = new Promise(function(resolve, reject) {
          const _promise = __promise__;
          const _feedComponent_ = /* @__PURE__ */ __name(function(component3) {
            component3.feedComponent().catch((e) => {
              throw new Error(`An error ocurred trying to feed the component: ${component3.name}. Error: ${e}`);
            });
            const standardResponse = {
              "request": null,
              component: component3
            };
            resolve.call(_promise, standardResponse);
          }, "_feedComponent_");
          Logger_1.logger.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(component2.data)).replace("{{URL}}", component2.url));
          const _componentLoaded = /* @__PURE__ */ __name(function(err, responseText) {
            if (!err) {
              const response = responseText.toString();
              Logger_1.logger.debug("Data received {{DATA}}".replace("{{DATA}}", (0, DataStringify_1._DataStringify)(response)));
              Logger_1.logger.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}", component2.name));
              component2.template = response;
              if (component2.cached && typeof cache !== "undefined") {
                cache.save(component2.name, component2.template);
              }
              _feedComponent_(component2);
            } else {
              const standardResponse = {
                "request": null,
                component: component2
              };
              reject.call(_promise, standardResponse);
            }
          }, "_componentLoaded");
          if (typeof component2.template === "string" && component2.template !== "") {
            _feedComponent_(component2);
          } else {
            Logger_1.logger.debug("Loading the component as a local file in server...");
            const _directLoad = /* @__PURE__ */ __name(function() {
              const { readFile } = __require("node:fs");
              Logger_1.logger.debug("SENDING THE NORMAL REQUEST  ");
              readFile(component2.url, _componentLoaded);
            }, "_directLoad");
            if (component2.cached) {
              Logger_1.logger.debug("USING CACHE FOR COMPONENT: " + component2.name);
              var cache = new ComplexStorageCache_1.ComplexStorageCache({
                index: component2.cacheIndex,
                load() {
                  _directLoad();
                },
                alternate(cacheController) {
                  if (component2.method === "GET") {
                    component2.template = cacheController.cache.getCached(component2.cacheIndex);
                    _feedComponent_.call(this, component2);
                  } else {
                    _directLoad.call(this);
                  }
                }
              });
              top_1._top.lastCache = cache;
            } else {
              Logger_1.logger.debug("NOT USING CACHE FOR COMPONENT: " + component2.name);
              _directLoad();
            }
          }
        });
        __promise__.then(function(standardResponse) {
          return component2.__done__().then(function() {
            let _ret_2;
            if (typeof component2.done === "function") {
              _ret_2 = component2.done.call(component2, standardResponse);
            }
            return Promise.resolve(_ret_2);
          });
        }, function(standardResponse) {
          if (typeof component2.fail === "function") {
            component2.fail.call(component2, standardResponse).catch((e) => {
              throw new Error(`An error ocurred: ${e}`);
            });
          }
          return Promise.reject(new Error("An error ocurred."));
        }).catch(function(e) {
          Logger_1.logger.debug(`Something wrong loading the component: ${e}`);
        });
        return __promise__;
      }, "_componentLoaderInNode");
      let _ret_;
      if (platform_1.isBrowser) {
        if (typeof _async !== "undefined" && _async) {
          _ret_ = (0, asyncLoad_1.asyncLoad)(_componentLoaderInBrowser, [component, _async]);
        } else {
          _ret_ = _componentLoaderInBrowser(component);
        }
      } else {
        _ret_ = _componentLoaderInNode(component);
      }
      return _ret_;
    }, "componentLoader");
    exports.componentLoader = componentLoader;
  }
});

// node_modules/qcobjects/build/Component.js
var require_Component = __commonJS({
  "node_modules/qcobjects/build/Component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Component = void 0;
    var Base64_1 = require_Base64();
    var basePath_1 = require_basePath();
    var Cast_1 = require_Cast();
    var ClassFactory_1 = require_ClassFactory();
    var ComponentFactory_1 = require_ComponentFactory();
    var DataStringify_1 = require_DataStringify();
    var domain_1 = require_domain();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var getType_1 = require_getType();
    var InheritClass_1 = require_InheritClass();
    var introspection_1 = require_introspection();
    var is_a_1 = require_is_a();
    var isQCObjects_1 = require_isQCObjects();
    var Logger_1 = require_Logger();
    var New_1 = require_New();
    var Package_1 = require_Package();
    var platform_1 = require_platform();
    var Processor_1 = require_Processor();
    var routings_1 = require_routings();
    var top_1 = require_top();
    var CONFIG_1 = require_CONFIG();
    var serviceLoader_1 = require_serviceLoader();
    var tag_filter_1 = require_tag_filter();
    var componentLoader_1 = require_componentLoader();
    var Component10 = class _Component extends InheritClass_1.InheritClass {
      static {
        __name(this, "Component");
      }
      static shadowed = false;
      static cached = true;
      name;
      templateURI;
      url;
      tplsource;
      tplextension;
      template;
      validRoutingWays = ["pathname", "hash", "search"];
      basePath = basePath_1._basePath_;
      domain = domain_1._domain_;
      templateHandler = "DefaultTemplateHandler";
      processorHandler;
      routingWay = null;
      routingNodes = [];
      routings = [];
      routingPath = "";
      routingPaths = [];
      _componentHelpers = [];
      subcomponents = [];
      splashScreenComponent = void 0;
      controller = void 0;
      routingController = void 0;
      view = void 0;
      effect = void 0;
      effectClass;
      method = "GET";
      cached = true;
      __promise__ = null;
      data;
      __namespace = void 0;
      _parsedAssignmentText;
      __shadowRoot;
      _serviceClassName = null;
      enableServiceClass = true;
      serviceInstance;
      serviceData;
      shadowed = false;
      container;
      innerHTML;
      reload;
      static subcomponents;
      assignRoutingParams = true;
      responseTo;
      static responseTo;
      constructor({ __parent__, templateURI = "", template, tplsource = "default", tplextension, url = "", name = "", method = "GET", data = {}, reload = false, shadowed = false, cached = true, enableServiceClass, assignRoutingParams = true, _body = (0, DOMCreateElement_1._DOMCreateElement)("div"), __promise__ = null, __shadowRoot, body, shadowRoot, splashScreenComponent, controller, view }) {
        if (arguments.length < 1) {
          throw Error("No arguments in component. You must at least give one argument.");
        }
        super({
          __parent__,
          templateURI,
          template,
          tplsource,
          tplextension,
          url,
          name,
          method,
          data,
          reload,
          shadowed,
          cached,
          enableServiceClass,
          assignRoutingParams,
          _body,
          __promise__,
          __shadowRoot,
          body,
          shadowRoot,
          splashScreenComponent,
          controller,
          view
        });
        const self2 = this;
        if (typeof name !== "undefined") {
          self2.name = name;
        }
        if (typeof self2.name === "undefined" && typeof name === "undefined") {
          Logger_1.logger.warn("A name is not defined for " + (0, getType_1.__getType__)(self2));
        }
        self2.routingWay = CONFIG_1.CONFIG.get("routingWay");
        self2.processorHandler = new Processor_1.Processor({
          component: self2
        });
        self2.data = typeof self2.data === "undefined" || self2.data === null ? {} : self2.data;
        self2.data = Object.assign(self2.data, self2.dataAttributes);
        self2.createServiceInstance().then(() => {
          if (typeof self2.__new__ === "function") {
            self2.__new__(self2);
          }
          self2._generateRoutingPaths(self2.body).then(function() {
            self2._reroute_().then(function() {
              return self2.rebuild().then(function() {
                Logger_1.logger.info(`Component._new_ The component ${self2.name} was built successfully!`);
              }).catch(function(standardResponse) {
                Logger_1.logger.warn(`Component._new_ Something went wrong building the component ${self2.name}`);
                console.error(`Component._new_ Something went wrong building the component ${self2.name}`, standardResponse);
              });
            }).catch((e) => {
              throw Error(`Unexpected error ${e}`);
            });
          }).catch((e) => {
            throw Error(`Unexpected error ${e}`);
          });
        }).catch((e) => {
          throw Error(`Unexpected error. ${e}`);
        });
      }
      set cacheIndex(value) {
        Logger_1.logger.debug("[cacheIndex] This property is readonly");
      }
      get cacheIndex() {
        const self2 = this;
        const __routing_path__ = (0, DataStringify_1._DataStringify)(self2.routingPath);
        return Base64_1.Base64.encode(self2.name + __routing_path__);
      }
      set parsedAssignmentText(value) {
        Logger_1.logger.debug("[parsedAssignmentText] This property is readonly");
      }
      get parsedAssignmentText() {
        const self2 = this;
        self2._parsedAssignmentText = self2.parseTemplate(self2.template);
        if (typeof self2._parsedAssignmentText === "undefined") {
          throw Error(`[Component][${this.name}][parsedAssignmentText] Could not generate content!`);
        }
        return self2._parsedAssignmentText;
      }
      set shadowRoot(value) {
        const self2 = this;
        if (typeof self2.__shadowRoot === "undefined") {
          self2.__shadowRoot = value;
        } else {
          Logger_1.logger.debug("[shadowRoot] This property can only be assigned once!");
        }
      }
      get shadowRoot() {
        const self2 = this;
        return self2.__shadowRoot;
      }
      set routingSelected(value) {
        Logger_1.logger.debug("[routingSelected] This is a read-only property of the component");
      }
      get routingSelected() {
        const self2 = this;
        return (0, routings_1.__valid_routings__)(self2.routings, self2.routingPath);
      }
      set routingParams(value) {
        Logger_1.logger.debug("[routingParams] This is a read-only property of the component");
      }
      get routingParams() {
        const component = this;
        return [{}].concat(component.routingSelected.map(function(routing) {
          return (0, routings_1.__routing_params__)(routing, component.routingPath);
        })).reduce(function(accumulator, colData) {
          return Object.assign(accumulator, colData);
        });
      }
      set serviceClassName(_serviceClassName) {
        this._serviceClassName = _serviceClassName;
      }
      get serviceClassName() {
        let _serviceClassName = "";
        if (platform_1.isBrowser) {
          _serviceClassName = this.body.getAttribute("serviceClass") !== null ? this.body.getAttribute("serviceClass") : this._serviceClassName;
        } else {
          _serviceClassName = this._serviceClassName;
        }
        return _serviceClassName;
      }
      get responseToData() {
        let _response_to_data_ = false;
        if (platform_1.isBrowser) {
          const responseToAttr = this.body.getAttribute("response-to");
          _response_to_data_ = responseToAttr === "data" || this.responseTo === "data";
        } else {
          _response_to_data_ = this.responseTo === "data";
        }
        return _response_to_data_;
      }
      get responseToTemplate() {
        let _response_to_template_ = false;
        if (platform_1.isBrowser) {
          const responseToAttr = this.body.getAttribute("response-to");
          _response_to_template_ = responseToAttr === "template" || this.responseTo === "template";
        } else {
          _response_to_template_ = this.responseTo === "template";
        }
        return _response_to_template_;
      }
      createServiceInstance() {
        const component = this;
        let data = this.data;
        let __serviceClass;
        const __classDefinition = component.getClass().__definition;
        const _serviceClassName = component.serviceClassName;
        return new Promise(function(resolve, reject) {
          const __enable_service_class__ = component.enableServiceClass;
          let _response_to_data_ = component.responseToData;
          let _response_to_template_ = component.responseToTemplate;
          if (__enable_service_class__ && _serviceClassName !== null) {
            __serviceClass = (0, ClassFactory_1.ClassFactory)(_serviceClassName);
          }
          if (!_response_to_data_ && __classDefinition && Object.hasOwn(__classDefinition, "responseTo")) {
            _response_to_data_ = __classDefinition.responseTo === "data";
          } else if (!_response_to_data_ && Object.hasOwn((0, ClassFactory_1.ClassFactory)("Component"), "responseTo")) {
            _response_to_data_ = (0, ClassFactory_1.ClassFactory)("Component").responseTo === "data";
          }
          if (!_response_to_template_ && __classDefinition && Object.hasOwn(__classDefinition, "responseTo")) {
            _response_to_template_ = __classDefinition.responseTo === "template";
          } else if (!_response_to_template_ && Object.hasOwn((0, ClassFactory_1.ClassFactory)("Component"), "responseTo")) {
            _response_to_template_ = (0, ClassFactory_1.ClassFactory)("Component").responseTo === "template";
          }
          if (typeof __serviceClass !== "undefined" && (typeof __enable_service_class__ !== "undefined" && __enable_service_class__ === true) && (_response_to_data_ || _response_to_template_)) {
            Logger_1.logger.info("Loading service " + _serviceClassName);
            const serviceInstance = (0, New_1.New)(__serviceClass, {
              data
            });
            (0, serviceLoader_1.serviceLoader)(serviceInstance)?.then(function({ service }) {
              let serviceResponse;
              if (typeof service.JSONresponse !== "undefined" && service.JSONresponse !== null) {
                serviceResponse = service.JSONresponse;
              } else {
                serviceResponse = service.template;
              }
              if (_response_to_data_) {
                if (typeof data === "object" && typeof serviceResponse === "object") {
                  data = Object.assign(data, serviceResponse);
                } else {
                  data = serviceResponse;
                }
                component.data = data;
              }
              component.serviceInstance = serviceInstance;
              component.serviceData = data;
              if (_response_to_template_) {
                component.template = serviceResponse;
              }
              resolve(serviceResponse);
            }, function(rejectedResponse) {
              Logger_1.logger.debug(`Service loading rejected for ${_serviceClassName} in ${component.name}`);
              reject(rejectedResponse);
            }).catch(function(e) {
              Logger_1.logger.debug("Something went wroing while trying to load the service " + _serviceClassName);
              throw Error(`Error loading ${_serviceClassName} for ${component.name}. Detail: ${e}`);
            });
          } else {
            resolve(null);
          }
        });
      }
      _bindroute_() {
        const _component_ = this;
        if (!_component_._bindroute_.loaded) {
          if (platform_1.isBrowser) {
            _component_.hostElements("a").map(function(a) {
              a.oldclick = a.onclick;
              a.onclick = function(e) {
                let _ret_ = true;
                if (!top_1._top.global.get("routingPaths")) {
                  top_1._top.global.set("routingPaths", []);
                }
                const routingWay = CONFIG_1.CONFIG.get("routingWay");
                const routingPath = e.target[routingWay];
                if (top_1._top.global.get("routingPaths").includes(routingPath) && e.target[routingWay] !== location[routingWay] && e.target.href !== document.location.href) {
                  Logger_1.logger.debug("A ROUTING WAS FOUND: " + routingPath);
                  window.history.pushState({
                    href: e.target.href
                  }, e?.target?.href, e.target.href);
                  _Component.route().catch((e2) => {
                    throw Error(`Unexpected error: ${e2}`);
                  });
                  _ret_ = false;
                } else {
                  Logger_1.logger.debug("NO ROUTING FOUND FOR: " + routingPath);
                }
                if (typeof e.target.oldclick !== "undefined" && typeof e.target.oldclick === "function") {
                  e.target.oldclick.call(e.target, e);
                }
                return _ret_;
              };
              return null;
            });
          } else {
          }
          _component_._bindroute_.loaded = true;
        } else {
          Logger_1.logger.debug(`Routes already bound to popstate events for ${_component_.name}`);
        }
      }
      done(standardResponse) {
        const _ret_ = new Promise((resolve) => {
          if (typeof standardResponse !== "undefined") {
            const { request, component } = standardResponse;
            resolve({ request, component });
          } else {
            resolve({ request: void 0, component: void 0 });
          }
        });
        return _ret_;
      }
      createControllerInstance() {
        let _Controller;
        if (platform_1.isBrowser) {
          if (typeof this.body === "undefined") {
            throw new Error("The component has no body");
          }
          var controllerName = this.body.getAttribute("controllerClass");
          if (!controllerName) {
            controllerName = "Controller";
          }
          _Controller = (0, ClassFactory_1.ClassFactory)(controllerName);
          if (typeof _Controller !== "undefined") {
            this.controller = (0, New_1.New)(_Controller, {
              component: this
            });
          }
        }
        return new Promise((resolve, reject) => {
          if (platform_1.isBrowser) {
            if (typeof _Controller !== "undefined" && typeof this.controller !== "undefined") {
              if (typeof this.controller.done === "function") {
                try {
                  this.controller.done.call(this.controller);
                } catch (e) {
                  throw Error(e);
                }
              } else {
                Logger_1.logger.debug(`${controllerName} does not have a done() method.`);
                reject(new Error(`${controllerName} does not have a done() method.`));
              }
              if (typeof this.controller.createRoutingController === "function") {
                this.controller.createRoutingController.call(this.controller);
              } else {
                Logger_1.logger.debug(`${controllerName} does not have a createRoutingController() method.`);
              }
            }
          }
          resolve({ component: this, controller: this.controller });
        });
      }
      createEffectInstance() {
        const _component_ = this;
        return new Promise(function(resolve) {
          if (platform_1.isBrowser) {
            const effectClassName = _component_.body?.getAttribute("effectClass");
            let applyEffectTo = _component_.body?.getAttribute("apply-effect-to");
            applyEffectTo = applyEffectTo !== null ? applyEffectTo : "load";
            if (effectClassName !== null && applyEffectTo === "observe") {
              _component_.applyObserveTransitionEffect(effectClassName);
            } else if (effectClassName !== null && applyEffectTo === "load") {
              _component_.applyTransitionEffect(effectClassName);
            }
          }
          resolve({ component: _component_, effect: _component_.effect });
        });
      }
      createViewInstance() {
        const _component_ = this;
        return new Promise(function(resolve) {
          const viewName = platform_1.isBrowser ? _component_.body.getAttribute("viewClass") : null;
          if (viewName !== null) {
            const _View = (0, ClassFactory_1.ClassFactory)(viewName);
            if (typeof _View !== "undefined") {
              _component_.view = (0, New_1.New)(_View, {
                component: _component_
              });
              if (Object.hasOwn(_component_.view, "done") && typeof _component_.view?.done === "function") {
                _component_.view?.done.call(_component_.view);
              }
            }
          }
          resolve({ component: _component_, view: _component_.view });
        });
      }
      __done__() {
        const _component_ = this;
        const componentDone = /* @__PURE__ */ __name(function() {
          if (typeof _component_ === "undefined") {
            throw new Error("componentDone() has lost its context");
          }
          if (typeof _component_.body === "undefined") {
            throw new Error("The component has no body");
          }
          (async () => {
            await _component_.createViewInstance();
            await _component_.createControllerInstance();
            await _component_.createEffectInstance();
          })().catch((e) => {
            throw new Error(`Unknown error ${e}.`);
          });
          Logger_1.logger.debug(`Trying to run component helpers for ${_component_.name}...`);
          try {
            _component_.runComponentHelpers();
            Logger_1.logger.debug(`Component helpers for ${_component_.name} executed.`);
          } catch (e) {
            Logger_1.logger.debug(`Component helpers for ${_component_.name} could not be executed.`);
            throw Error(e);
          }
          _component_.subcomponents = _component_.__buildSubComponents__();
          _component_._bindroute_();
          if (platform_1.isBrowser) {
            _component_.body.setAttribute("loaded", "true");
          }
        }, "componentDone");
        return new Promise(function(resolve, reject) {
          try {
            resolve(componentDone.call(_component_));
          } catch (e) {
            reject(new Error(e));
          }
        });
      }
      hostElements(tagFilter) {
        const _component_ = this;
        let elementList = [];
        if (platform_1.isBrowser) {
          elementList = _component_.shadowed && typeof _component_.shadowRoot !== "undefined" ? _component_.shadowRoot.subelements(tagFilter) : _component_.body.subelements(tagFilter);
        }
        return elementList;
      }
      get subtags() {
        const _component_ = this;
        const tagFilter = tag_filter_1._tag_filter_;
        return _component_.hostElements(tagFilter);
      }
      get bodyAttributes() {
        const _component_ = this;
        const c = _component_.body;
        return platform_1.isBrowser ? [...c.getAttributeNames()].map((a) => {
          return { [a]: c.getAttribute(a) };
        }).reduce((accumulator, colData) => {
          return Object.assign(accumulator, colData);
        }) : {};
      }
      get dataAttributes() {
        const _component_ = this;
        const c = _component_.body;
        return platform_1.isBrowser ? [{}].concat([...c.getAttributeNames()].filter((n) => n.startsWith("data-")).map((a) => {
          return { [a.split("-")[1]]: c.getAttribute(a) };
        })).reduce((accumulator, colData) => {
          return Object.assign(accumulator, colData);
        }) : {};
      }
      __buildSubComponents__(rebuildObjects = false) {
        const _component_ = this;
        let elementList = _component_.subtags;
        if (!rebuildObjects) {
          elementList = elementList.filter((t) => t.getAttribute("loaded") !== "true");
        }
        if (typeof _component_ !== "undefined" || _component_.subcomponents.length < 1) {
          _component_.subcomponents = (0, ComponentFactory_1._buildComponentsFromElements_)(elementList, _component_);
        }
        return _component_.subcomponents;
      }
      fail(standardResponse) {
        const _ret_ = new Promise((resolve, reject) => {
          if (typeof standardResponse !== "undefined") {
            const { error, component } = standardResponse;
            resolve({ error, component });
          } else {
            reject(new Error(" Unknown error."));
          }
        });
        return _ret_;
      }
      set(key, value) {
        this[key] = value;
      }
      get(key, _defaultValue) {
        return this[key] || _defaultValue;
      }
      feedComponent() {
        const _component_ = this;
        Logger_1.logger.debug(`[Component][${this.name}][feedComponent] start feeding component...`);
        const _feedComponent_InBrowser = /* @__PURE__ */ __name(function(_component_2) {
          if (typeof _component_2.container === "undefined" && typeof _component_2.body === "undefined") {
            Logger_1.logger.warn("COMPONENT {{NAME}} has an undefined container and body".replace("{{NAME}}", _component_2.name));
            return;
          }
          const container = typeof _component_2.container === "undefined" || _component_2.container === null ? _component_2.body : _component_2.container;
          const parsedAssignmentText = _component_2.parsedAssignmentText;
          _component_2.innerHTML = parsedAssignmentText;
          if (_component_2.shadowed) {
            Logger_1.logger.debug("COMPONENT {{NAME}} is shadowed".replace("{{NAME}}", _component_2.name));
            Logger_1.logger.debug("Preparing slots for Shadowed COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
            const tmp_shadowContainer = (0, DOMCreateElement_1._DOMCreateElement)("div");
            container.subelements("[slot]").map((c) => {
              if (c.parentElement === container) {
                tmp_shadowContainer.appendChild(c);
              }
              return c;
            });
            Logger_1.logger.debug("Creating shadowedContainer for COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
            const shadowContainer = (0, DOMCreateElement_1._DOMCreateElement)("div");
            shadowContainer.classList.add("shadowHost");
            try {
              _component_2.shadowRoot = shadowContainer.attachShadow({
                mode: "open"
              });
            } catch (e) {
              Logger_1.logger.debug(`An error ocurred: ${e}.`);
              try {
                Logger_1.logger.debug("Shadowed COMPONENT {{NAME}} is repeated".replace("{{NAME}}", _component_2.name));
                _component_2.shadowRoot = shadowContainer.shadowRoot;
              } catch (e2) {
                Logger_1.logger.debug(`An error ocurred: ${e2}.`);
                Logger_1.logger.warn("Shadowed COMPONENT {{NAME}} is not allowed on this browser".replace("{{NAME}}", _component_2.name));
              }
            }
            if (typeof _component_2.shadowRoot !== "undefined" && _component_2.shadowRoot !== null) {
              if (_component_2.reload) {
                Logger_1.logger.debug("FORCED RELOADING OF CONTAINER FOR Shadowed COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
                if (shadowContainer !== null && shadowContainer.shadowRoot !== null) {
                  shadowContainer.shadowRoot.innerHTML = _component_2.innerHTML;
                }
              } else {
                tmp_shadowContainer.innerHTML = _component_2.parseTemplate(tmp_shadowContainer.innerHTML);
                Logger_1.logger.debug("ADDING Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}", _component_2.name));
                if (shadowContainer !== null && shadowContainer.shadowRoot !== null) {
                  shadowContainer.shadowRoot.innerHTML += _component_2.innerHTML;
                }
              }
              Logger_1.logger.debug("ADDING Slots to Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}", _component_2.name));
              shadowContainer.innerHTML += tmp_shadowContainer.innerHTML;
              Logger_1.logger.debug("APPENDING Shadowed COMPONENT {{NAME}} to Container ".replace("{{NAME}}", _component_2.name));
              const qs = container.querySelector(".shadowHost");
              if (!(typeof qs !== "undefined" && qs !== null)) {
                container.appendChild(shadowContainer);
              } else {
                Logger_1.logger.debug("Shadowed Container for COMPONENT {{NAME}} is already present in the tree ".replace("{{NAME}}", _component_2.name));
                if (_component_2.shadowRoot !== null && shadowContainer.shadowRoot !== null) {
                  _component_2.shadowRoot.innerHTML = shadowContainer.shadowRoot.innerHTML;
                }
              }
            } else {
              Logger_1.logger.warn("Shadowed COMPONENT {{NAME}} is bad configured".replace("{{NAME}}", _component_2.name));
            }
          } else {
            if (_component_2.reload) {
              Logger_1.logger.debug("FORCED RELOADING OF CONTAINER FOR COMPONENT {{NAME}}".replace("{{NAME}}", _component_2.name));
              container.innerHTML = _component_2.innerHTML;
            } else if (container && _component_2) {
              Logger_1.logger.debug("ADDING COMPONENT {{NAME}} ".replace("{{NAME}}", _component_2.name));
              container.innerHTML += _component_2.innerHTML;
            } else {
              Logger_1.logger.warn("COMPONENT {{NAME}} is not added to the DOM".replace("{{NAME}}", _component_2.name));
            }
          }
        }, "_feedComponent_InBrowser");
        const _feedComponent_InNode = /* @__PURE__ */ __name(function(_component_2) {
          const parsedAssignmentText = _component_2.parsedAssignmentText;
          _component_2.innerHTML = parsedAssignmentText;
        }, "_feedComponent_InNode");
        let _ret_;
        if (!(0, is_a_1.is_a)(_component_, "Component")) {
          Logger_1.logger.warn("Trying to feed a non component object");
          return Promise.reject(new Error(`Trying to feed a non component object ${typeof _component_}`));
        }
        return new Promise((resolve, reject) => {
          if (platform_1.isBrowser) {
            try {
              _ret_ = _feedComponent_InBrowser(_component_);
              resolve(_ret_);
            } catch (e) {
              reject(new Error(e));
            }
          } else {
            try {
              _ret_ = _feedComponent_InNode(_component_);
              resolve(_ret_);
            } catch (e) {
              reject(new Error(e));
            }
          }
        });
      }
      rebuild() {
        const _component = this;
        var _promise = new Promise(function(resolve, reject) {
          if (typeof _component === "undefined" || _component === null) {
            reject(new Error("Component is undefined"));
          }
          if ((0, isQCObjects_1.isQCObjects_Object)(_component) && (0, is_a_1.is_a)(_component, "Component")) {
            switch (true) {
              case _component.get("tplsource") === "none":
                Logger_1.logger.debug("Component " + _component.name + " has specified template-source=none, so no template load was done");
                var standardResponse = {
                  request: void 0,
                  component: _component
                };
                _component.__done__().then(function() {
                  if (typeof _component.done === "function") {
                    _component.done.call(_component, standardResponse).catch((e) => {
                      Logger_1.logger.debug(`It was an error while calling done() in ${_component.name}: ${e}`);
                    });
                  }
                  resolve.call(_promise, standardResponse);
                }, function() {
                  reject.call(_promise, standardResponse);
                });
                break;
              case _component.get("tplsource") === "inline":
                Logger_1.logger.debug("Component " + _component.name + " has specified template-source=inline, so it is assumed that template is already declared");
                (async (_component2) => {
                  await _component2.feedComponent.bind(_component2)();
                })(_component).catch((e) => {
                  Logger_1.logger.debug(`It was not possible to feed the component ${_component.name}: ${e}`);
                });
                var standardResponse = {
                  request: void 0,
                  component: _component
                };
                _component.__done__().then(async () => {
                  if (typeof _component.done === "function") {
                    await _component.done(standardResponse);
                  }
                  resolve.call(_promise, standardResponse);
                }, function() {
                  reject.call(_promise, standardResponse);
                });
                break;
              case (_component.get("tplsource") === "default" && _component.get("templateURI") !== ""):
                _component.set("url", _component.get("basePath") + _component.get("templateURI"));
                (0, componentLoader_1.componentLoader)(_component, false)?.then(function(standardResponse2) {
                  resolve.call(_promise, standardResponse2);
                }, function(standardResponse2) {
                  reject.call(_promise, standardResponse2);
                });
                break;
              case (_component.get("tplsource") === "external" && _component.get("templateURI") !== ""):
                _component.set("url", _component.get("templateURI"));
                (0, componentLoader_1.componentLoader)(_component, false).then(function(standardResponse2) {
                  resolve.call(_promise, standardResponse2);
                }, function(standardResponse2) {
                  reject.call(_promise, standardResponse2);
                });
                break;
              case (_component.get("tplsource") === "default" && _component.get("templateURI", "") === ""):
                Logger_1.logger.debug(`Component ${_component.name} template-source is ${_component.get("tplsource")} and no templateURI is present`);
                reject.call(_promise, `Component ${_component.name} template-source is ${_component.get("tplsource")} and no templateURI is present`);
                break;
              default:
                Logger_1.logger.debug("Component " + _component.name + " will not be rebuilt because no templateURI is present");
                reject.call(_promise, {
                  request: null,
                  component: _component
                });
                break;
            }
          }
        });
        return _promise;
      }
      Cast(oClass) {
        const o = (0, introspection_1._methods_)(oClass).map((m) => m.name.replace(/bound /g, "")).map((m) => {
          return {
            [m]: oClass[m].bind(this)
          };
        }).reduce((c, p) => Object.assign(c, p), {});
        return (0, Cast_1._Cast)(this, o);
      }
      route() {
        return this.constructor.route();
      }
      static route() {
        const componentClass = this;
        let _route_promise_;
        const isValidInstance = !!((0, isQCObjects_1.isQCObjects_Object)(componentClass) && (0, is_a_1.is_a)(componentClass, "Component"));
        const __route__ = /* @__PURE__ */ __name(function(componentList) {
          const _componentNames_ = [];
          const _promises_ = componentList.filter(function(rc) {
            return typeof rc !== "undefined";
          }).map(function(rc) {
            if (typeof rc.name !== "undefined") {
              _componentNames_.push(rc.name);
            } else {
              throw new Error((0, getType_1.__getType__)(rc) + " does not have a name");
            }
            return new Promise(function(resolve, reject) {
              if (typeof rc !== "undefined" && !!rc._reroute_) {
                rc._reroute_().then(function() {
                  rc.reload = true;
                  rc.rebuild().then(() => {
                    resolve();
                  }).catch((e) => {
                    Logger_1.logger.debug(`Error ${e}`);
                  });
                  return;
                }).then(function() {
                  if (Object.hasOwn(rc, "subcomponents") && typeof rc.subcomponents !== "undefined" && rc.subcomponents.length > 0) {
                    Logger_1.logger.debug("LOOKING FOR ROUTINGS IN SUBCOMPONENTS FOR: " + rc.name);
                    return __route__.call(rc, rc.subcomponents);
                  } else {
                    Logger_1.logger.debug("No subcomponents to look for routings in: " + rc.name);
                    if (rc.subtags.length > 0) {
                      rc.subcomponents = rc.__buildSubComponents__(true);
                    }
                    resolve();
                  }
                }).catch((e) => {
                  Logger_1.logger.debug(`Error: ${e}`);
                });
              } else if (typeof rc !== "undefined") {
                reject(new Error("Component " + rc.name + " is not an instance of Component"));
              }
              return;
            });
          });
          return Promise.all(_promises_).then(function() {
            Logger_1.logger.debug("ROUTING COMPLETED FOR " + _componentNames_.join(", "));
          }).catch(function(err) {
            Logger_1.logger.warn("ROUTING FAILED FOR " + _componentNames_.join(", ") + ": " + err);
          });
        }, "__route__");
        if (isValidInstance || !!top_1.componentsStack) {
          if (isValidInstance) {
            Logger_1.logger.debug("loading routings for instance " + componentClass.name);
          }
          _route_promise_ = __route__.call(componentClass, isValidInstance ? componentClass.subcomponents : top_1.componentsStack);
        } else {
          Logger_1.logger.debug("An undetermined result expected if load routings. So will not be loaded this time.");
          throw Error("There is no valid instance and no components stack available to apply rountings");
        }
        return _route_promise_;
      }
      fullscreen() {
        if (platform_1.isBrowser) {
          const elem = this.body;
          if (elem.requestFullscreen) {
            elem.requestFullscreen().catch((e) => {
              throw new Error(`An error ocurred when requesting fullscreen: ${e}`);
            });
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          }
        } else {
        }
      }
      closefullscreen() {
        if (platform_1.isBrowser) {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch((e) => {
              throw new Error(`An error ocurred when trying to exit fullscrenn ${e}.`);
            });
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
        }
      }
      _generateRoutingPaths(componentBody) {
        const component = this;
        return new Promise(function(resolve) {
          if (platform_1.isBrowser) {
            if ((0, routings_1.__valid_routing_way__)(component.validRoutingWays, component.routingWay || "")) {
              if (typeof componentBody !== "undefined") {
                component.innerHTML = componentBody?.innerHTML;
                component.routingNodes = componentBody?.subelements("routing");
                component.routings = [];
                component.routingNodes.map((routingNode) => {
                  const attributeNames = routingNode.getAttributeNames();
                  const routing = {};
                  attributeNames.map((attributeName, a) => {
                    routing[attributeNames[a]] = routingNode.getAttribute(attributeNames[a]);
                    return attributeName;
                  });
                  component.routings.push(routing);
                  if (!component.routingPaths) {
                    component.routingPaths = [];
                  }
                  if (!component.routingPaths.includes(routing.path)) {
                    component.routingPaths.push(routing.path);
                  }
                  if (!top_1._top.global.get("routingPaths")) {
                    top_1._top.global.set("routingPaths", []);
                  }
                  if (!top_1._top.global.get("routingPaths").includes(routing.path)) {
                    top_1._top.global.get("routingPaths").push(routing.path);
                  }
                  return routingNode;
                });
              }
            }
          } else {
          }
          resolve();
        });
      }
      parseTemplate(template) {
        const _self = this;
        let _parsedAssignmentText;
        const value = template;
        if (Object.hasOwn(_self, "templateHandler")) {
          const templateHandlerName = _self.templateHandler;
          Logger_1.logger.debug(`[Component][${this.name}][parseTemplate] Attempting to use ${templateHandlerName} ...`);
          const templateHandlerClass = (0, ClassFactory_1.ClassFactory)(templateHandlerName);
          const templateInstance = (0, New_1.New)(templateHandlerClass, {
            component: _self,
            template: value
          });
          templateInstance.component = _self;
          let selfData = _self.data;
          if (Object.hasOwn(_self, "assignRoutingParams") && _self.assignRoutingParams) {
            try {
              selfData = Object.assign(selfData, _self.routingParams);
            } catch (e) {
              Logger_1.logger.debug(`An error ocurred: ${e}.`);
              Logger_1.logger.debug("[parseTemplate] it was not possible to assign the routing params to the template");
            }
          }
          _parsedAssignmentText = templateInstance.assign(selfData);
        } else {
          Logger_1.logger.debug(`[Component][${this.name}][parseTemplate] No value for templateHandler. Using raw content...`);
          _parsedAssignmentText = value;
        }
        return _parsedAssignmentText;
      }
      _reroute_() {
        const rc = this;
        return new Promise(function(resolve) {
          if (platform_1.isBrowser) {
            if ((0, routings_1.__valid_routing_way__)(rc.validRoutingWays, rc.routingWay || "")) {
              rc.routingPath = location[rc.routingWay];
              rc.routingSelected.map((routing) => {
                const componentURI = (0, ComponentFactory_1.ComponentURI)({
                  "COMPONENTS_BASE_PATH": CONFIG_1.CONFIG.get("componentsBasePath"),
                  "COMPONENT_NAME": routing.name.toString(),
                  "TPLEXTENSION": Object.hasOwn(routing, "tplextension") ? routing.tplextension || "" : rc.tplextension,
                  "TPL_SOURCE": "default"
                  /* here is always default in order to get the right uri */
                });
                rc.templateURI = componentURI;
                return routing;
              });
              if (rc.routingSelected.length > 0) {
                rc.template = "";
                if (typeof rc.body !== "undefined" && rc.body !== null) {
                  rc.body.innerHTML = "";
                }
              }
            }
          }
          resolve(rc);
        });
      }
      lazyLoadImages() {
        if (platform_1.isBrowser) {
          const component = this;
          const _componentRoot = component.componentRoot;
          if (typeof _componentRoot !== "undefined" && _componentRoot !== null) {
            const _imgLazyLoaded = [..._componentRoot.subelements("img[lazy-src]")];
            const _lazyLoadImages = /* @__PURE__ */ __name(function(image) {
              image.setAttribute("src", image.getAttribute("lazy-src")?.toString());
              image.onload = () => {
                image.removeAttribute("lazy-src");
              };
            }, "_lazyLoadImages");
            if ("IntersectionObserver" in window) {
              const observer = new IntersectionObserver((items, observer2) => {
                items.forEach((item) => {
                  if (item.isIntersecting) {
                    _lazyLoadImages(item.target);
                    observer2.unobserve(item.target);
                  }
                });
              });
              _imgLazyLoaded.map(function(img) {
                return observer.observe(img);
              });
            } else {
              _imgLazyLoaded.map(_lazyLoadImages);
            }
          }
        } else {
        }
        return null;
      }
      applyTransitionEffect(effectClassName) {
        const _Effect = (0, ClassFactory_1.ClassFactory)(effectClassName);
        if (typeof _Effect === "undefined") {
          throw Error(`${effectClassName} not found.`);
        }
        if (typeof _Effect !== "undefined" && (0, is_a_1.is_a)(_Effect, "TransitionEffect")) {
          this.effect = (0, New_1.New)(_Effect, {
            component: this
          });
          this.effect?.apply(this.effect?.defaultParams);
        } else {
          Logger_1.logger.debug(`${effectClassName} is ${(0, getType_1.__getType__)(_Effect)} but is not a TransitionEffect`);
        }
      }
      applyObserveTransitionEffect(effectClassName) {
        if (platform_1.isBrowser) {
          const component = this;
          const _componentRoot = component.componentRoot;
          const _applyEffect_ = /* @__PURE__ */ __name(function() {
            component.applyTransitionEffect(effectClassName);
          }, "_applyEffect_");
          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((items, observer2) => {
              items.forEach((item) => {
                if (item.isIntersecting) {
                  _applyEffect_();
                  observer2.unobserve(item.target);
                }
              });
            });
            observer.observe(_componentRoot);
          } else {
            _applyEffect_();
          }
        } else {
        }
      }
      get componentRoot() {
        return this.shadowed ? this.shadowRoot : this.body;
      }
      scrollIntoHash() {
        if (platform_1.isBrowser) {
          const component = this;
          if (document.location.hash !== "") {
            const _componentRoot = component.componentRoot;
            (_componentRoot?.subelements(document.location.hash)).map((element) => {
              if (typeof element.scrollIntoView === "function") {
                element.scrollIntoView(CONFIG_1.CONFIG.get("scrollIntoHash", {
                  behavior: "auto",
                  block: "top",
                  inline: "top"
                }));
              }
              return element;
            });
          }
        } else {
        }
      }
      i18n_translate() {
        if (platform_1.isBrowser) {
          if (CONFIG_1.CONFIG.get("use_i18n")) {
            const component = this;
            const _componentRoot = component.componentRoot;
            const lang1 = CONFIG_1.CONFIG.get("lang", "en");
            const lang2 = navigator.language.slice(0, 2);
            const i18n = top_1._top.global.get("i18n");
            if (lang1 !== lang2 && (typeof i18n === "object" && Object.hasOwn(i18n, "messages"))) {
              const callback_i18n = /* @__PURE__ */ __name(() => {
                return new Promise(function(resolve) {
                  const messages = i18n.messages.filter(function(message) {
                    return Object.hasOwn(message, lang1) && Object.hasOwn(message, lang2);
                  });
                  (_componentRoot?.subelements("ul,li,h1,h2,h3,a,b,p,input,textarea,summary,details,option,component")).map((element) => {
                    messages.map(function(message) {
                      let _innerHTML = element.innerHTML;
                      _innerHTML = _innerHTML?.replace(new RegExp(`${message[lang1]}`, "g"), message[lang2]);
                      element.innerHTML = _innerHTML;
                      return null;
                    });
                    return element;
                  });
                  resolve();
                });
              }, "callback_i18n");
              callback_i18n.call(component).then(function() {
                Logger_1.logger.debug("i18n loaded for component: " + component.name);
              }).catch((e) => {
                throw new Error(`An error ocurred when parsing i18n: ${e}.`);
              });
            }
          }
        } else {
        }
      }
      addComponentHelper(componentHelper) {
        const component = this;
        component._componentHelpers.push(componentHelper);
      }
      runComponentHelpers() {
        if (platform_1.isBrowser) {
          const component = this;
          let __component_helpers__ = [];
          __component_helpers__.push(component.i18n_translate.bind(component));
          __component_helpers__.push(component.scrollIntoHash.bind(component));
          __component_helpers__.push(component.lazyLoadImages.bind(component));
          __component_helpers__ = __component_helpers__.concat(component._componentHelpers);
          __component_helpers__.map((_component_helper_) => {
            Logger_1.logger.debug(`Executing ${_component_helper_.name} as component helper for ${component.name}...`);
            _component_helper_();
            return _component_helper_;
          });
        } else {
        }
      }
    };
    exports.Component = Component10;
    (0, Package_1.Package)("com.qcobjects", [
      Component10
    ]);
    introspection_1._methods_((0, ClassFactory_1.ClassFactory)("Component")).map((__c__) => {
      introspection_1._protected_code_(__c__);
      return __c__;
    });
  }
});

// node_modules/qcobjects/build/ComponentFactory.js
var require_ComponentFactory = __commonJS({
  "node_modules/qcobjects/build/ComponentFactory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildComponents = exports._buildComponentsFromElements_ = exports._buildComponentFromElement_ = exports.ComponentURI = void 0;
    var Class_1 = require_Class();
    var ClassFactory_1 = require_ClassFactory();
    var Component_1 = require_Component();
    var CONFIG_1 = require_CONFIG();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var getType_1 = require_getType();
    var Logger_1 = require_Logger();
    var New_1 = require_New();
    var Package_1 = require_Package();
    var platform_1 = require_platform();
    var tag_filter_1 = require_tag_filter();
    var ComponentURI4 = /* @__PURE__ */ __name(({ TPL_SOURCE, COMPONENTS_BASE_PATH, COMPONENT_NAME, TPLEXTENSION }) => {
      const templateURI = TPL_SOURCE === "default" ? `${COMPONENTS_BASE_PATH}${COMPONENT_NAME}.${TPLEXTENSION}` : "";
      return templateURI;
    }, "ComponentURI");
    exports.ComponentURI = ComponentURI4;
    var _buildComponentFromElement_ = /* @__PURE__ */ __name((element, __parent__) => {
      const __shadowed_not_set = element.getAttribute("shadowed") === null;
      const __tplsource_attr_not_set = element.getAttribute("template-source") === null;
      const shadowed = element.getAttribute("shadowed") === "true";
      const __cached_not_set = element.getAttribute("cached") === null;
      const cached = element.getAttribute("cached") === "true";
      let tplextension = typeof CONFIG_1.CONFIG.get("tplextension") !== "undefined" ? CONFIG_1.CONFIG.get("tplextension") : "html";
      tplextension = element.getAttribute("tplextension") !== null ? element.getAttribute("tplextension") : tplextension;
      let _componentName = element.getAttribute("name");
      const _componentClassName = element.getAttribute("componentClass") !== null ? element.getAttribute("componentClass") : "Component";
      const __componentClassName = CONFIG_1.CONFIG.get("preserveComponentBodyTag") ? _componentName !== null ? "com.qcobjects.components." + _componentName + ".ComponentBody" : "com.qcobjects.components.ComponentBody" : _componentClassName;
      _componentName = _componentName !== null ? _componentName : (0, ClassFactory_1.ClassFactory)(__componentClassName) && typeof (0, ClassFactory_1.ClassFactory)(__componentClassName).name !== "undefined" ? (0, ClassFactory_1.ClassFactory)(__componentClassName).name : "";
      const __classDefinition = (0, ClassFactory_1.ClassFactory)(__componentClassName);
      const __tplsource_prop_set = !!(__componentClassName !== "Component" && (typeof __classDefinition !== "undefined" && typeof __classDefinition.tplsource === "string" && __classDefinition.tplsource !== ""));
      const tplsource = __tplsource_attr_not_set && __tplsource_prop_set ? __classDefinition.tplsource : __tplsource_attr_not_set ? "default" : element.getAttribute("template-source");
      Logger_1.logger.debug(`template source for  ${_componentName} is ${tplsource} `);
      Logger_1.logger.debug(`type for ${_componentName} is ${(0, getType_1.__getType__)(__classDefinition)} `);
      const componentURI = (0, exports.ComponentURI)({
        "COMPONENTS_BASE_PATH": CONFIG_1.CONFIG.get("componentsBasePath"),
        "COMPONENT_NAME": _componentName,
        "TPLEXTENSION": tplextension,
        "TPL_SOURCE": tplsource
      });
      if (CONFIG_1.CONFIG.get("preserveComponentBodyTag")) {
        (0, Package_1.Package)(_componentName !== "" ? "com.qcobjects.components." + _componentName : "com.qcobjects.components", [
          (0, Class_1.Class)("ComponentBody", Component_1.Component, {
            name: _componentName,
            tplsource,
            tplextension,
            reload: true
          })
        ]);
      }
      const __create_component_instance_ = /* @__PURE__ */ __name(function() {
        const __shadowed = __shadowed_not_set ? __classDefinition && __classDefinition.shadowed || Component_1.Component.shadowed : shadowed;
        const __definition = {
          __parent__,
          name: _componentName,
          cached: __cached_not_set ? Component_1.Component.cached : cached,
          shadowed: __shadowed,
          tplextension,
          body: CONFIG_1.CONFIG.get("preserveComponentBodyTag") ? (0, DOMCreateElement_1._DOMCreateElement)("componentBody") : element,
          templateURI: componentURI,
          tplsource
        };
        if (typeof _componentName === "undefined" || _componentName === "" || _componentName === null) {
          delete __definition.name;
        }
        if (componentURI === "") {
          delete __definition.templateURI;
        }
        const newComponent2 = (0, New_1.New)(__classDefinition, __definition);
        if (CONFIG_1.CONFIG.get("preserveComponentBodyTag")) {
          if (typeof newComponent2 !== "undefined") {
            element.append(newComponent2.body);
          }
        }
        return newComponent2;
      }, "__create_component_instance_");
      const newComponent = __create_component_instance_();
      return newComponent;
    }, "_buildComponentFromElement_");
    exports._buildComponentFromElement_ = _buildComponentFromElement_;
    var _buildComponentsFromElements_ = /* @__PURE__ */ __name((elements, __parent__) => {
      let componentsBuiltWith = [];
      if (platform_1.isBrowser) {
        componentsBuiltWith = elements.map(function(element) {
          return (0, exports._buildComponentFromElement_)(element, __parent__);
        });
      } else {
        Logger_1.logger.debug("[_buildComponentsFromElements_] not implemented for Non-Browser environments");
      }
      return componentsBuiltWith;
    }, "_buildComponentsFromElements_");
    exports._buildComponentsFromElements_ = _buildComponentsFromElements_;
    var buildComponents = /* @__PURE__ */ __name((element) => {
      const tagFilter = tag_filter_1._tag_filter_;
      const elements = element.subelements(tagFilter);
      return (0, exports._buildComponentsFromElements_)(elements, null);
    }, "buildComponents");
    exports.buildComponents = buildComponents;
  }
});

// node_modules/qcobjects/build/Service.js
var require_Service = __commonJS({
  "node_modules/qcobjects/build/Service.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigService = exports.JSONService = exports.Service = void 0;
    var basePath_1 = require_basePath();
    var Crypt_1 = require_Crypt();
    var domain_1 = require_domain();
    var InheritClass_1 = require_InheritClass();
    var Logger_1 = require_Logger();
    var Package_1 = require_Package();
    var secretKey_1 = require_secretKey();
    var CONFIG_1 = require_CONFIG();
    var Service = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "Service");
      }
      options;
      withCredentials;
      useHTTP2;
      // eslint-disable-next-line no-unused-vars
      mockup({ request, service }) {
        throw new Error("Method not implemented.");
      }
      name;
      responseHeaders;
      // eslint-disable-next-line no-unused-vars
      local({ request, service }) {
        throw new Error("Method not implemented.");
      }
      kind = "rest";
      /* it can be rest, mockup, local */
      domain = domain_1._domain_;
      basePath = basePath_1._basePath_;
      url = "";
      method = "GET";
      data = {};
      reload = false;
      cached = false;
      headers;
      template;
      // eslint-disable-next-line no-unused-vars
      done({ request, service }) {
        throw new Error("Method not implemented.");
      }
      // eslint-disable-next-line no-unused-vars
      fail(...args) {
        throw new Error("Method not implemented.");
      }
      set(name, value) {
        this[name] = value;
      }
      get(name, _default) {
        return this[name] || _default;
      }
    };
    exports.Service = Service;
    var JSONService = class extends Service {
      static {
        __name(this, "JSONService");
      }
      method = "GET";
      cached = false;
      headers = {
        "Content-Type": "application/json",
        "charset": "utf-8"
      };
      JSONresponse = void 0;
      done(result) {
        Logger_1.logger.debug("***** RECEIVED RESPONSE:");
        Logger_1.logger.debug(result.service.template);
        this.JSONresponse = JSON.parse(result.service.template);
      }
    };
    exports.JSONService = JSONService;
    var ConfigService = class extends JSONService {
      static {
        __name(this, "ConfigService");
      }
      method = "GET";
      cached = false;
      configFileName = "config.json";
      headers = {
        "Content-Type": "application/json",
        "charset": "utf-8"
      };
      configLoaded() {
        throw Error("Method not implemented.");
      }
      JSONresponse = void 0;
      done(result) {
        Logger_1.logger.debug("***** CONFIG LOADED:");
        Logger_1.logger.debug(result.service.template);
        this.JSONresponse = JSON.parse(result.service.template);
        if (Object.hasOwn(this.JSONresponse, "__encoded__")) {
          const decodedValue = Crypt_1._Crypt.decrypt(this.JSONresponse?.__encoded__, secretKey_1._secretKey);
          this.JSONresponse = JSON.parse(decodedValue);
        }
        const jsonResponse = this.JSONresponse;
        Object.keys(jsonResponse).map((k) => {
          CONFIG_1.CONFIG.set(k, jsonResponse[k]);
          return k;
        });
        this.configLoaded().catch((e) => {
          throw new Error(`An error ocurred: ${e}`);
        });
      }
      fail() {
        this.configLoaded().catch((e) => {
          throw new Error(`An error ocurred: ${e}`);
        });
      }
      constructor() {
        super();
        this.set("url", `${this.get("basePath")}${this.get("configFileName")}`);
      }
    };
    exports.ConfigService = ConfigService;
    (0, Package_1.Package)("com.qcobjects.api", [
      Service
    ]);
    (0, Package_1.Package)("com.qcobjects.api.services", [
      JSONService
    ]);
    (0, Package_1.Package)("com.qcobjects.api.config", [
      ConfigService
    ]);
  }
});

// node_modules/qcobjects/build/globalSettings.js
var require_globalSettings = __commonJS({
  "node_modules/qcobjects/build/globalSettings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalSettings = void 0;
    var CONFIG_1 = require_CONFIG();
    var InheritClass_1 = require_InheritClass();
    var Logger_1 = require_Logger();
    var Package_1 = require_Package();
    var platform_1 = require_platform();
    var serviceLoader_1 = require_serviceLoader();
    var top_1 = require_top();
    var Service_1 = require_Service();
    var GlobalSettings2 = class _GlobalSettings extends InheritClass_1.InheritClass {
      static {
        __name(this, "GlobalSettings");
      }
      static __start__() {
        return _GlobalSettings.instance.__start__();
      }
      _GLOBAL = {};
      static _instance;
      static get instance() {
        if (typeof _GlobalSettings._instance === "undefined") {
          _GlobalSettings._instance = new _GlobalSettings();
        }
        return _GlobalSettings._instance;
      }
      _logger = new Logger_1.Logger();
      get logger() {
        return this._logger;
      }
      set logger(value) {
        this._logger = value;
      }
      set(name, value) {
        this._GLOBAL[name] = value;
      }
      get(name, _default) {
        let _value;
        if (typeof this._GLOBAL[name] !== "undefined") {
          _value = this._GLOBAL[name];
        } else if (typeof _default !== "undefined") {
          _value = _default;
        }
        return _value;
      }
      __start__() {
        const __load__serviceWorker = /* @__PURE__ */ __name(function() {
          let _promise;
          if (platform_1.isBrowser) {
            _promise = new Promise(function(resolve, reject) {
              if ("serviceWorker" in navigator && typeof CONFIG_1.CONFIG.get("serviceWorkerURI") !== "undefined") {
                CONFIG_1.CONFIG.set("serviceWorkerScope", CONFIG_1.CONFIG.get("serviceWorkerScope") ? CONFIG_1.CONFIG.get("serviceWorkerScope") : "/");
                navigator.serviceWorker.register(CONFIG_1.CONFIG.get("serviceWorkerURI"), {
                  scope: CONFIG_1.CONFIG.get("serviceWorkerScope")
                }).then(function(registration) {
                  Logger_1.logger.debug("Service Worker Registered");
                  resolve.call(_promise, registration);
                }, function(registration) {
                  Logger_1.logger.debug("Error registering Service Worker");
                  reject.call(_promise, registration);
                });
                navigator.serviceWorker.ready.then(function(registration) {
                  Logger_1.logger.debug("Service Worker Ready");
                  resolve.call(_promise, registration);
                }, function(registration) {
                  Logger_1.logger.debug("Error loading Service Worker");
                  reject.call(_promise, registration);
                });
              }
            });
          } else {
            _promise = Promise.resolve();
          }
          return _promise;
        }, "__load__serviceWorker");
        const _buildComponents = /* @__PURE__ */ __name(function() {
          return new Promise((resolve) => {
            if (platform_1.isBrowser) {
              Logger_1.logger.debug("Starting to building components");
              try {
                (0, top_1.buildComponentsStack)();
              } catch (e) {
                throw Error(`Something went wrong trying to start components tree: ${e.message}`);
              }
              Logger_1.logger.debug("Initializing the service worker");
              __load__serviceWorker.call(top_1._top).catch(function(e) {
                Logger_1.logger.debug(`error loading the service worker ${e}`);
              });
            }
            resolve();
          });
        }, "_buildComponents");
        return new Promise((resolve) => {
          Logger_1.logger.debug("Starting to load the config settings...");
          if (CONFIG_1.CONFIG.get("useConfigService", false)) {
            Logger_1.logger.debug("Loading settings using local configuration file...");
            (0, top_1.setConfigService)(new Service_1.ConfigService());
            top_1.configService.configLoaded = _buildComponents;
            (0, serviceLoader_1.serviceLoader)(top_1.configService)?.then((standardResponse) => {
              resolve(standardResponse);
            })?.catch((e) => {
              throw new Error(`An error ocurred while trying to load ${top_1.configService.url}: ${e}`);
            });
          } else {
            Logger_1.logger.debug("Starting to load the components...");
            _buildComponents.call(this).then(() => {
              resolve({});
            }).catch((e) => {
              throw new Error(`An error ocurred while trying to build the components stack. ${e}`);
            });
          }
        });
      }
    };
    exports.GlobalSettings = GlobalSettings2;
    (0, Package_1.Package)("com.qcobjects", [
      GlobalSettings2
    ]);
  }
});

// node_modules/qcobjects/build/top.js
var require_top = __commonJS({
  "node_modules/qcobjects/build/top.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.get = exports.set = exports.setConfigService = exports.configService = exports.buildComponentsStack = exports.resetTop = exports.componentsStack = exports._top = void 0;
    var ComponentFactory_1 = require_ComponentFactory();
    var Cast_1 = require_Cast();
    var globalSettings_1 = require_globalSettings();
    var Class_1 = require_Class();
    var ClassFactory_1 = require_ClassFactory();
    var Export_1 = require_Export();
    var platform_1 = require_platform();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var Logger_1 = require_Logger();
    exports._top = typeof module !== "undefined" && typeof module.exports !== "undefined" && module.exports || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || typeof window !== "undefined" && window || typeof self !== "undefined" && self !== null && self || exports;
    exports._top.lastCache = void 0;
    exports.componentsStack = [];
    var resetTop = /* @__PURE__ */ __name(() => {
      const globalSettings = globalSettings_1.GlobalSettings.instance;
      exports._top = (0, Cast_1._CastProps)(globalSettings, exports._top, true);
    }, "resetTop");
    exports.resetTop = resetTop;
    var buildComponentsStack = /* @__PURE__ */ __name(() => {
      exports.componentsStack = (0, ComponentFactory_1.buildComponents)(document);
    }, "buildComponentsStack");
    exports.buildComponentsStack = buildComponentsStack;
    var setConfigService = /* @__PURE__ */ __name((_configService) => {
      exports._top.global.configService = _configService;
      exports.configService = _configService;
    }, "setConfigService");
    exports.setConfigService = setConfigService;
    var set = /* @__PURE__ */ __name((name, value) => {
      exports._top[name] = value;
    }, "set");
    exports.set = set;
    var get = /* @__PURE__ */ __name((name, _defaultValue) => {
      return exports._top[name] || _defaultValue;
    }, "get");
    exports.get = get;
    (0, exports.resetTop)();
    var _define_props = /* @__PURE__ */ __name(function(_top2) {
      if (!Object.hasOwn(_top2, "PackagesList")) {
        Object.defineProperty(_top2, "PackagesList", {
          // eslint-disable-next-line no-unused-vars
          set: /* @__PURE__ */ __name((value) => {
            Logger_1.logger.debug("PackagesList is readonly");
          }, "set"),
          get: /* @__PURE__ */ __name(() => {
            return (0, PrimaryCollections_1.getPackagesList)();
          }, "get")
        });
      }
      if (!Object.hasOwn(_top2, "PackagesNameList")) {
        Object.defineProperty(_top2, "PackagesNameList", {
          // eslint-disable-next-line no-unused-vars
          set: /* @__PURE__ */ __name((val) => {
            Logger_1.logger.debug("PackagesNameList is readonly");
          }, "set"),
          get: /* @__PURE__ */ __name(() => {
            return (0, PrimaryCollections_1.getPackagesNamesList)();
          }, "get")
        });
      }
      if (!Object.hasOwn(_top2, "ClassesList")) {
        Object.defineProperty(_top2, "ClassesList", {
          // eslint-disable-next-line no-unused-vars
          set: /* @__PURE__ */ __name((value) => {
            Logger_1.logger.debug("ClassesList is readonly");
          }, "set"),
          get: /* @__PURE__ */ __name(() => {
            return (0, PrimaryCollections_1.getClassesList)();
          }, "get")
        });
      }
      if (!Object.hasOwn(_top2, "ClassesNameList")) {
        Object.defineProperty(_top2, "ClassesNameList", {
          // eslint-disable-next-line no-unused-vars
          set(value) {
            Logger_1.logger.debug("ClassesNameList is readonly");
          },
          get: /* @__PURE__ */ __name(() => {
            return (0, PrimaryCollections_1.getClassesNamesList)();
          }, "get")
        });
      }
    }, "_define_props");
    if (platform_1.isBrowser) {
      (0, Class_1.Class)("GLOBAL", PrimaryCollections_1._QC_CLASSES.global);
      (0, Export_1.Export)((0, ClassFactory_1.ClassFactory)("GLOBAL"));
    }
    if (platform_1.isBrowser && typeof window !== "undefined") {
      (0, exports.set)("global", window);
    } else if (platform_1.isBrowser && typeof globalThis !== "undefined") {
      (0, exports.set)("global", globalThis);
    }
    _define_props(exports._top);
  }
});

// node_modules/qcobjects/build/captureFalseTouch.js
var require_captureFalseTouch = __commonJS({
  "node_modules/qcobjects/build/captureFalseTouch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.captureFalseTouch = exports.supportsPassive = void 0;
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    exports.supportsPassive = false;
    var captureFalseTouch = /* @__PURE__ */ __name(() => {
      return exports.supportsPassive ? {
        passive: true
      } : false;
    }, "captureFalseTouch");
    exports.captureFalseTouch = captureFalseTouch;
    if (platform_1.isBrowser) {
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            exports.supportsPassive = true;
            return exports.supportsPassive;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e) {
        Logger_1.logger.debug(`An error ocurred: ${e}.`);
        exports.supportsPassive = false;
      }
    } else {
      exports.supportsPassive = false;
    }
  }
});

// node_modules/qcobjects/build/range.js
var require_range = __commonJS({
  "node_modules/qcobjects/build/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.range = void 0;
    var introspection_1 = require_introspection();
    var range = /* @__PURE__ */ __name((start, stop = 0, step = 1) => {
      if (stop === 0 || typeof stop === "undefined") {
        stop = start;
        start = 0;
      }
      return Array.from({
        length: (stop - start) / step + 1
      }, function(_, i) {
        return start + i * step;
      });
    }, "range");
    exports.range = range;
    introspection_1._protected_code_(exports.range);
  }
});

// node_modules/qcobjects/build/defaultProcessors.js
var require_defaultProcessors = __commonJS({
  "node_modules/qcobjects/build/defaultProcessors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setDefaultProcessors = void 0;
    var Logger_1 = require_Logger();
    var Processor_1 = require_Processor();
    var top_1 = require_top();
    var range_1 = require_range();
    var setDefaultProcessors = /* @__PURE__ */ __name(() => {
      (function(_top2) {
        const mapper = /* @__PURE__ */ __name((componentInstance, componentName, valueName) => {
          if (typeof componentInstance === "undefined" || componentInstance === null) {
            throw Error(`mapper.${componentName}.${valueName} does not have a component instance or it is null.`);
          }
          const globalValue = _top2.global.get(valueName);
          const componentValue = componentInstance.get(valueName);
          const dataValue = componentInstance.data[valueName];
          const list = typeof dataValue !== "undefined" ? dataValue : typeof componentValue !== "undefined" ? componentValue : globalValue;
          let listItems = "";
          if (typeof list !== "undefined" && typeof list.map !== "undefined") {
            listItems = list.map(function(element) {
              const dataItems = [...Object.keys(element)].map((k) => ` data-${k}="${typeof element[k] !== "undefined" && element[k] !== null ? element[k].toString() : ""}"`).join("");
              return `<quick-component name="${componentName}" ${dataItems} ></quick-component>`;
            }).join("");
          } else {
            Logger_1.logger.debug(`${componentName}.${valueName} does not have a map property`);
          }
          return listItems;
        }, "mapper");
        Processor_1.GlobalProcessor.setProcessor(mapper);
        const layout = /* @__PURE__ */ __name(function(componentInstance, layoutname, cssfile) {
          const layout_portrait = `
              /* CSS Document for Mobile Imports */
              @import url("${cssfile}") (orientation:portrait);
              @import url("${cssfile}") (max-width:460px);
              @import url("${cssfile}") (aspect-ratio: 9/16);
              @import url("${cssfile}") (aspect-ratio: 10/16);
              @import url("${cssfile}") (aspect-ratio: 5/8);
              @import url("${cssfile}") (aspect-ratio: 3/4);
              @import url("${cssfile}") (aspect-ratio: 2/3);
              `;
          const layout_landscape = `
              @import url("${cssfile}") (orientation:landscape) and (min-width:460px);
              @import url("${cssfile}") (aspect-ratio: 16/9) and (min-width:460px);
              @import url("${cssfile}") (aspect-ratio: 16/10) and (min-width:460px);
              @import url("${cssfile}") (aspect-ratio: 8/5) and (min-width:460px);
              @import url("${cssfile}") (aspect-ratio: 4/3) and (min-width:460px);
              @import url("${cssfile}") (aspect-ratio: 3/2) and (min-width:460px);
              `;
          const layout_code = {
            "landscape": layout_landscape,
            "portrait": layout_portrait
          };
          return Object.hasOwn(layout_code, layoutname) ? layout_code[layoutname] : "";
        }, "layout");
        Processor_1.GlobalProcessor.setProcessor(layout);
        const component = /* @__PURE__ */ __name((componentInstance, name, componentClass, ...args) => {
          const arg = [...args].map(function(a) {
            return {
              [a.split("=")[0]]: a.split("=")[1]
            };
          }).reduce(function(k1, k2) {
            return Object.assign(k1, k2);
          });
          const attrs = [...Object.keys(arg)].map(function(a) {
            return `${a}=${arg[a]}`;
          }).join(" ");
          return `<component name="${name}" componentClass="${componentClass}" ${attrs}></component>`;
        }, "component");
        Processor_1.GlobalProcessor.setProcessor(component);
        const quick_component = /* @__PURE__ */ __name((componentInstance, name, componentClass, ...args) => {
          const arg = [...args].map(function(a) {
            return {
              [a.split("=")[0]]: a.split("=")[1]
            };
          }).reduce(function(k1, k2) {
            return Object.assign(k1, k2);
          });
          const attrs = [...Object.keys(arg)].map(function(a) {
            return `${a}=${arg[a]}`;
          }).join(" ");
          return `<quick-component name="${name}" componentClass="${componentClass}" ${attrs}></quick-component>`;
        }, "quick_component");
        Processor_1.GlobalProcessor.setProcessor(quick_component);
        const repeat = /* @__PURE__ */ __name((componentInstance, length, text) => {
          return (0, range_1.range)(length).map(function(index) {
            return text.replace("{{index}}", index.toString());
          }).join("");
        }, "repeat");
        Processor_1.GlobalProcessor.setProcessor(repeat);
      })(top_1._top);
    }, "setDefaultProcessors");
    exports.setDefaultProcessors = setDefaultProcessors;
  }
});

// node_modules/qcobjects/build/findPackageNodePath.js
var require_findPackageNodePath = __commonJS({
  "node_modules/qcobjects/build/findPackageNodePath.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findPackageNodePath = void 0;
    var CONFIG_1 = require_CONFIG();
    var Export_1 = require_Export();
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    var findPackageNodePath = /* @__PURE__ */ __name(function(packagename) {
      let sdkPath = null;
      if (!platform_1.isBrowser) {
        const fs = __require("fs");
        try {
          let sdkPaths = [
            `${CONFIG_1.CONFIG.get("projectPath")}${CONFIG_1.CONFIG.get("relativeImportPath")}`,
            `${CONFIG_1.CONFIG.get("basePath")}${CONFIG_1.CONFIG.get("relativeImportPath")}`,
            `${CONFIG_1.CONFIG.get("projectPath")}`,
            `${CONFIG_1.CONFIG.get("basePath")}`,
            `${CONFIG_1.CONFIG.get("relativeImportPath")}`,
            `${process.cwd()}${CONFIG_1.CONFIG.get("relativeImportPath")}`,
            `${process.cwd()}/node_modules/` + packagename,
            `${process.cwd()}/node_modules`,
            `${process.cwd()}`,
            "node_modules",
            "./",
            ""
          ].concat(module.paths);
          sdkPaths = sdkPaths.filter((p) => {
            return fs.existsSync(p + "/" + packagename);
          });
          if (sdkPaths.length > 0) {
            sdkPath = sdkPaths[0];
            Logger_1.logger.info(packagename + " is Installed.");
          } else {
            sdkPath = "";
            Logger_1.logger.info(`${packagename} is not in a standard path.`);
          }
        } catch (e) {
          console.log(e);
        }
      }
      return sdkPath;
    }, "findPackageNodePath");
    exports.findPackageNodePath = findPackageNodePath;
    (0, Export_1.Export)(exports.findPackageNodePath);
  }
});

// node_modules/qcobjects/build/Import.js
var require_Import = __commonJS({
  "node_modules/qcobjects/build/Import.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Import = void 0;
    var basePath_1 = require_basePath();
    var CONFIG_1 = require_CONFIG();
    var DataStringify_1 = require_DataStringify();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var findPackageNodePath_1 = require_findPackageNodePath();
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var Import2 = /* @__PURE__ */ __name(function(packagename, ready, external) {
      if (external !== void 0) {
        Logger_1.logger.debug(`[Import] Setting external=${external.toString()} resource to import: ${packagename}`);
      }
      if (external) {
        Logger_1.logger.debug(`[Import] Registering external resource to import: ${packagename}`);
      } else {
        Logger_1.logger.debug(`[Import] Registering local resource to import: ${packagename}`);
      }
      let _promise_import_;
      if (platform_1.isBrowser) {
        _promise_import_ = new Promise(function(resolve, reject) {
          const allPackagesImported = /* @__PURE__ */ __name(function() {
            let ret = false;
            let cp = 0;
            for (const p in PrimaryCollections_1._QC_PACKAGES) {
              cp++;
            }
            if (cp < PrimaryCollections_1._QC_PACKAGES_IMPORTED.length) {
              ret = false;
            } else {
              ret = true;
            }
            return ret;
          }, "allPackagesImported");
          const readyImported = /* @__PURE__ */ __name(function(e) {
            PrimaryCollections_1._QC_PACKAGES_IMPORTED.push(ready);
            if (allPackagesImported()) {
              PrimaryCollections_1._QC_PACKAGES_IMPORTED.map((_imported_) => {
                return PrimaryCollections_1._QC_READY_LISTENERS.push(_imported_);
              });
            }
            if (platform_1.isBrowser && CONFIG_1.CONFIG.get("removePackageScriptAfterLoading")) {
              e.target.remove();
            }
            resolve.call(_promise_import_, {
              "_imported_": e.target,
              "_package_name_": packagename
            });
          }, "readyImported");
          if (!Object.hasOwn(PrimaryCollections_1._QC_PACKAGES, packagename)) {
            const s1 = (0, DOMCreateElement_1._DOMCreateElement)("script");
            s1.type = CONFIG_1.CONFIG.get("sourceType", "text/javascript");
            s1.async = !!CONFIG_1.CONFIG.get("asynchronousImportsLoad");
            s1.onreadystatechange = function() {
              if (s1.readyState === "complete") {
                readyImported(s1);
              }
            };
            s1.onload = readyImported;
            s1.onerror = function(e) {
              Logger_1.logger.debug(`An error ocurred: ${e}.`);
              reject.call(_promise_import_, {
                "_imported_": s1,
                "_package_name_": packagename
              });
            };
            s1.src = external ? CONFIG_1.CONFIG.get("remoteImportsPath") + packagename + ".js" : basePath_1._basePath_ + CONFIG_1.CONFIG.get("relativeImportPath") + packagename + ".js";
            document.getElementsByTagName("head")[0].appendChild(s1);
          }
        });
        _promise_import_.catch(function() {
          Logger_1.logger.debug("Import: Error loading a package ");
        });
      } else {
        _promise_import_ = new Promise(function(resolve, reject) {
          try {
            const standardNodePath = (0, findPackageNodePath_1.findPackageNodePath)(packagename);
            let packageAbsoluteName = "";
            if (standardNodePath !== null) {
              packageAbsoluteName = standardNodePath + "/" + packagename;
            } else {
              const jsNodePath = (0, findPackageNodePath_1.findPackageNodePath)(packagename + ".js");
              if (jsNodePath !== null) {
                packageAbsoluteName = jsNodePath + "/" + packagename + ".js";
              } else {
                packageAbsoluteName = basePath_1._basePath_ + CONFIG_1.CONFIG.get("relativeImportPath") + packagename;
              }
            }
            try {
              resolve.call(_promise_import_, {
                "_imported_": (0, platform_1._require_)(`${packageAbsoluteName}`),
                "_package_name_": packagename
              });
            } catch (e) {
              reject.call(_promise_import_, {
                "_imported_": null,
                "_package_name_": packagename,
                "error": e
              });
            }
          } catch (e) {
            reject.call(_promise_import_, {
              "_imported_": null,
              "_package_name_": packagename,
              "error": e
            });
          }
        }).catch(function(e) {
          Logger_1.logger.debug("Something happened when importing " + packagename);
          console.warn(e);
        });
      }
      _promise_import_.catch(function(e) {
        Logger_1.logger.warn((0, DataStringify_1._DataStringify)(e));
      });
      return _promise_import_;
    }, "Import");
    exports.Import = Import2;
    exports.Import.prototype.toString = function() {
      return "Import(packagename,ready,external) { [QCObjects native code] }";
    };
  }
});

// node_modules/qcobjects/build/mathFunctions.js
var require_mathFunctions = __commonJS({
  "node_modules/qcobjects/build/mathFunctions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__to_number = void 0;
    var __to_number = /* @__PURE__ */ __name(function(value) {
      return isNaN(value) ? new Number(0) : new Number(value);
    }, "__to_number");
    exports.__to_number = __to_number;
  }
});

// node_modules/qcobjects/build/NamespaceRef.js
var require_NamespaceRef = __commonJS({
  "node_modules/qcobjects/build/NamespaceRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NamespaceRef = void 0;
    var isQCObjects_1 = require_isQCObjects();
    var Package_1 = require_Package();
    var NamespaceRef = /* @__PURE__ */ __name(function(namespace) {
      const packageInstance = (0, Package_1.Package)(namespace) || [];
      const classes = packageInstance.filter((c) => (0, isQCObjects_1.isQCObjects_Class)(c)).map((c) => {
        return {
          [c.__definition.__classType]: c
        };
      }).reduce((a, b) => {
        return Object.assign(a, b);
      });
      return namespace.split(".").map((c) => {
        return {
          [c]: classes
        };
      }).reverse().reduce((a, b) => {
        b[Object.keys(b).join(".")] = a;
        return b;
      });
    }, "NamespaceRef");
    exports.NamespaceRef = NamespaceRef;
  }
});

// node_modules/qcobjects/build/Ready.js
var require_Ready = __commonJS({
  "node_modules/qcobjects/build/Ready.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._Ready = exports.ready = exports.Ready = void 0;
    var CONFIG_1 = require_CONFIG();
    var platform_1 = require_platform();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var top_1 = require_top();
    var Ready = /* @__PURE__ */ __name((e) => {
      if (platform_1.isBrowser) {
        PrimaryCollections_1._QC_READY_LISTENERS.push(e.bind(window));
      } else if (typeof global !== "undefined") {
        PrimaryCollections_1._QC_READY_LISTENERS.push(e.bind(global));
      }
    }, "Ready");
    exports.Ready = Ready;
    exports.ready = exports.Ready;
    var _Ready = /* @__PURE__ */ __name((e) => {
      const _execReady = /* @__PURE__ */ __name(() => {
        PrimaryCollections_1._QC_READY_LISTENERS.map(function(_ready_listener_, _r) {
          if (typeof _ready_listener_ === "function") {
            _ready_listener_();
            PrimaryCollections_1._QC_READY_LISTENERS.splice(_r, 1);
          }
        });
      }, "_execReady");
      if (CONFIG_1.CONFIG.get("delayForReady") > 0) {
        if (platform_1.isBrowser) {
          setTimeout(_execReady.bind(window), CONFIG_1.CONFIG.get("delayForReady"));
        } else if (typeof global !== "undefined") {
          setTimeout(_execReady.bind(global), CONFIG_1.CONFIG.get("delayForReady"));
        }
      } else {
        _execReady.call(top_1._top);
      }
    }, "_Ready");
    exports._Ready = _Ready;
  }
});

// node_modules/qcobjects/build/ArrayCollection.js
var require_ArrayCollection = __commonJS({
  "node_modules/qcobjects/build/ArrayCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArrayCollection = exports.ArrayList = void 0;
    var ClassFactory_1 = require_ClassFactory();
    var Logger_1 = require_Logger();
    var New_1 = require_New();
    var mathFunctions_1 = require_mathFunctions();
    var ArrayList = class extends Array {
      static {
        __name(this, "ArrayList");
      }
      prototype;
      unique() {
        return this.filter(function(value, index, self2) {
          return self2.indexOf(value) === index;
        });
      }
      table() {
        console.table(this);
      }
      sum() {
        return this.reduce((prev, current) => {
          return (0, mathFunctions_1.__to_number)(prev) + (0, mathFunctions_1.__to_number)(current);
        }, 0);
      }
      avg() {
        return this.length < 1 ? 0 : this.reduce((prev, current) => {
          return ((0, mathFunctions_1.__to_number)(prev) + (0, mathFunctions_1.__to_number)(current)) / 2;
        });
      }
      min() {
        return this.reduce((prev, current) => {
          return (0, mathFunctions_1.__to_number)(prev) <= (0, mathFunctions_1.__to_number)(current) ? prev : current;
        }, Infinity);
      }
      max() {
        return this.reduce((prev, current) => {
          return (0, mathFunctions_1.__to_number)(prev) >= (0, mathFunctions_1.__to_number)(current) ? prev : current;
        }, 0);
      }
      sortBy(propName, sortAsc) {
        const sort_function = sortAsc ? function(prev, current) {
          return current[propName] < prev[propName] ? 1 : -1;
        } : function(prev, current) {
          return current[propName] > prev[propName] ? 1 : -1;
        };
        return this.sort(sort_function);
      }
      matrix(length, fillValue) {
        const x_func = /* @__PURE__ */ __name(() => {
          return fillValue;
        }, "x_func");
        return Array.from({
          length
        }, x_func);
      }
      matrix2d(length, fillValue) {
        const y_func = /* @__PURE__ */ __name(function() {
          return fillValue;
        }, "y_func");
        const x_func = /* @__PURE__ */ __name(function() {
          return Array.from({
            length
          }, y_func);
        }, "x_func");
        return Array.from({
          length
        }, x_func);
      }
      matrix3d(length, fillValue) {
        const y_func = /* @__PURE__ */ __name(function() {
          return Array.from({
            length
          }, function() {
            return fillValue;
          });
        }, "y_func");
        const x_func = /* @__PURE__ */ __name(function() {
          return Array.from({
            length
          }, y_func);
        }, "x_func");
        return Array.from({
          length
        }, x_func);
      }
    };
    exports.ArrayList = ArrayList;
    var ArrayCollection = class {
      static {
        __name(this, "ArrayCollection");
      }
      source = (0, New_1.New)(ArrayList, []);
      changed(prop, value) {
        Logger_1.logger.debug("VALUE CHANGED");
        Logger_1.logger.debug(prop);
        Logger_1.logger.debug(value);
      }
      push(value) {
        const self2 = this;
        Logger_1.logger.debug("VALUE ADDED");
        Logger_1.logger.debug(value);
        return self2.source.push(value);
      }
      pop() {
        const self2 = this;
        Logger_1.logger.debug("VALUE POPPED");
        return self2.source.pop();
      }
      _new_(source) {
        const self2 = this;
        let _index = 0;
        self2.source = (0, New_1.New)((0, ClassFactory_1.ClassFactory)("ArrayList"), source);
        for (const _k in self2.source) {
          if (!isNaN(_k)) {
            Logger_1.logger.debug("binding " + _k.toString());
            (function(_pname) {
              Object.defineProperty(self2, _pname, {
                set(value) {
                  Logger_1.logger.debug("setting " + _pname + "=" + value);
                  self2.source[_pname] = value;
                  self2.changed(_pname, value);
                },
                get() {
                  return self2.source[_pname];
                }
              });
            })(_k);
            _index++;
          }
        }
        self2.source.length = _index;
        Object.defineProperty(self2, "length", {
          get() {
            return self2.source.length;
          }
        });
      }
    };
    exports.ArrayCollection = ArrayCollection;
  }
});

// node_modules/qcobjects/build/Tag.js
var require_Tag = __commonJS({
  "node_modules/qcobjects/build/Tag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tag = exports.TagElements = void 0;
    var ClassFactory_1 = require_ClassFactory();
    var New_1 = require_New();
    var Package_1 = require_Package();
    var platform_1 = require_platform();
    var ArrayCollection_1 = require_ArrayCollection();
    var TagElements = class extends ArrayCollection_1.ArrayList {
      static {
        __name(this, "TagElements");
      }
      show() {
        this.map(function(element) {
          return element.style.opacity = 1;
        });
      }
      hide() {
        this.map(function(element) {
          return element.style.opacity = 0;
        });
      }
      effect(...args) {
        const effectArguments = [...args].slice(1);
        const effectClassName = args[0];
        let effectClass = void 0;
        if ((typeof effectClassName).toLowerCase() === "string") {
          effectClass = (0, ClassFactory_1.ClassFactory)(effectClassName);
        }
        this.map(function(element) {
          return effectClass.apply.apply(effectClass, [element].concat(effectArguments));
        });
      }
      findElements(elementName) {
        const _o = (0, New_1.New)((0, ClassFactory_1.ClassFactory)("TagElements"));
        if (platform_1.isBrowser) {
          for (const _k in this) {
            if (typeof _k === "number" && typeof this[_k] !== "function" && Object.hasOwn(this[_k], "subelements")) {
              _o.push(this[_k].subelements(elementName));
            }
          }
        } else {
        }
        return _o;
      }
    };
    exports.TagElements = TagElements;
    var Tag4 = /* @__PURE__ */ __name(function(tagname, innerHTML) {
      const _o = (0, New_1.New)(TagElements);
      if (platform_1.isBrowser) {
        const o = document.subelements(tagname);
        const addedKeys = [];
        for (let _i = 0; _i < o.length; _i++) {
          if (typeof innerHTML !== "undefined" && Object.hasOwn(o[_i], "innerHTML")) {
            o[_i].innerHTML = innerHTML;
          }
          if (addedKeys.indexOf(_i) < 0) {
            _o.push(o[_i]);
            addedKeys.push(_i);
          }
        }
      } else {
      }
      return _o;
    }, "Tag");
    exports.Tag = Tag4;
    (0, Package_1.Package)("com.qcobjects", [
      TagElements,
      exports.Tag
    ]);
  }
});

// node_modules/qcobjects/build/shortCode.js
var require_shortCode = __commonJS({
  "node_modules/qcobjects/build/shortCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shortCode = void 0;
    var Crypt_1 = require_Crypt();
    var shortCode = /* @__PURE__ */ __name(() => {
      const length = 1e3;
      const code1 = Crypt_1._Crypt.encrypt((Math.random() * length).toString().replace(".", ""), (/* @__PURE__ */ new Date()).getTime().toString());
      const code2 = Crypt_1._Crypt.encrypt((Math.random() * length).toString().replace(".", ""), new Date((/* @__PURE__ */ new Date()).getTime() - 1e3 * 1e3).getTime().toString());
      const shortCode2 = [...code2].map((o1, index) => {
        return [...code1][index] === o1 ? null : o1;
      }).filter((c) => c !== null).join("");
      return shortCode2;
    }, "shortCode");
    exports.shortCode = shortCode;
  }
});

// node_modules/qcobjects/build/super.js
var require_super = __commonJS({
  "node_modules/qcobjects/build/super.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._super_ = void 0;
    var ClassFactory_1 = require_ClassFactory();
    var _super_2 = /* @__PURE__ */ __name(function(className, classMethodName) {
      return (0, ClassFactory_1.ClassFactory)(className)[classMethodName];
    }, "_super_");
    exports._super_ = _super_2;
    exports._super_.prototype.toString = function() {
      return "_super_(className,classMethodName,params) { [QCObjects native code] }";
    };
  }
});

// node_modules/qcobjects/build/waitUntil.js
var require_waitUntil = __commonJS({
  "node_modules/qcobjects/build/waitUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.waitUntil = void 0;
    var Logger_1 = require_Logger();
    var waitUntil = /* @__PURE__ */ __name((func, exp) => {
      const _waitUntil = /* @__PURE__ */ __name((func2, exp2) => {
        const maxWaitCycles = 2e3;
        let _w = 0;
        var _t = setInterval(function() {
          if (exp2()) {
            clearInterval(_t);
            func2();
            Logger_1.logger.debug("Ejecuting " + func2.name + " after wait");
          } else {
            if (_w < maxWaitCycles) {
              _w += 1;
              Logger_1.logger.debug("WAIT UNTIL " + func2.name + " is true, " + _w.toString() + " cycles");
            } else {
              Logger_1.logger.debug("Max execution time for " + func2.name + " expression until true");
              clearInterval(_t);
            }
          }
        }, 1);
      }, "_waitUntil");
      setTimeout(function() {
        _waitUntil(func, exp);
      }, 1);
    }, "waitUntil");
    exports.waitUntil = waitUntil;
  }
});

// node_modules/qcobjects/build/subelements.js
var require_subelements = __commonJS({
  "node_modules/qcobjects/build/subelements.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subelements = void 0;
    var subelements = /* @__PURE__ */ __name(function subelements2(query) {
      const _self = this;
      return [..._self.querySelectorAll(query)];
    }, "subelements");
    exports.subelements = subelements;
  }
});

// node_modules/qcobjects/build/loadSDK.js
var require_loadSDK = __commonJS({
  "node_modules/qcobjects/build/loadSDK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CONFIG_1 = require_CONFIG();
    var findPackageNodePath_1 = require_findPackageNodePath();
    var Import_1 = require_Import();
    var Logger_1 = require_Logger();
    var platform_1 = require_platform();
    var loadSDK = /* @__PURE__ */ __name(() => {
      if (CONFIG_1.CONFIG.get("useSDK")) {
        (function() {
          const remoteImportsPath = CONFIG_1.CONFIG.get("remoteImportsPath");
          const external = !CONFIG_1.CONFIG.get("useLocalSDK");
          CONFIG_1.CONFIG.set("remoteImportsPath", CONFIG_1.CONFIG.get("remoteSDKPath"));
          let tryImportingSDK = false;
          let sdkName = "QCObjects-SDK";
          if (platform_1.isBrowser) {
            tryImportingSDK = true;
          } else {
            const sdkPath = (0, findPackageNodePath_1.findPackageNodePath)("qcobjects-sdk");
            if (sdkPath !== null) {
              sdkName = "qcobjects-sdk";
              tryImportingSDK = true;
            } else if (sdkPath !== "") {
              sdkName = "node_modules/qcobjects-sdk/QCObjects-SDK";
              tryImportingSDK = true;
            } else {
              tryImportingSDK = false;
            }
          }
          if (tryImportingSDK) {
            Logger_1.logger.info("Importing SDK... " + sdkName);
            if (platform_1.isNodeCommonJS && typeof __require !== "undefined") {
              const sdk = (0, platform_1._require_)("qcobjects-sdk");
              if (sdk) {
                Logger_1.logger.debug("QCObjects SDK was loaded OK.");
              } else {
                Logger_1.logger.debug("QCObjects SDK could not be imported.");
              }
            } else {
              (0, Import_1.Import)(sdkName, function() {
                if (external) {
                  Logger_1.logger.debug("QCObjects-SDK.js loaded from remote location");
                } else {
                  Logger_1.logger.debug("QCObjects-SDK.js loaded from local");
                }
                CONFIG_1.CONFIG.set("remoteImportsPath", remoteImportsPath);
              }, external)?.catch((e) => {
                throw new Error(`An error ocurred when trying to import: ${e}`);
              });
            }
          } else {
            Logger_1.logger.debug("SDK has not been imported as it is not available at the moment");
          }
        })();
      }
    }, "loadSDK");
    exports.default = loadSDK;
  }
});

// node_modules/qcobjects/build/MainProcess.js
var require_MainProcess = __commonJS({
  "node_modules/qcobjects/build/MainProcess.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var top_1 = require_top();
    var asyncLoad_1 = require_asyncLoad();
    var captureFalseTouch_1 = require_captureFalseTouch();
    var Cast_1 = require_Cast();
    var Class_1 = require_Class();
    var ClassFactory_1 = require_ClassFactory();
    var Component_1 = require_Component();
    var ComponentFactory_1 = require_ComponentFactory();
    var componentLoader_1 = require_componentLoader();
    var CONFIG_1 = require_CONFIG();
    var DataStringify_1 = require_DataStringify();
    var defaultProcessors_1 = require_defaultProcessors();
    var Export_1 = require_Export();
    var Import_1 = require_Import();
    var introspection_1 = require_introspection();
    var isQCObjects_1 = require_isQCObjects();
    var Logger_1 = require_Logger();
    var mathFunctions_1 = require_mathFunctions();
    var NamespaceRef_1 = require_NamespaceRef();
    var New_1 = require_New();
    var ObjectName_1 = require_ObjectName();
    var Package_1 = require_Package();
    var platform_1 = require_platform();
    var Ready_1 = require_Ready();
    var serviceLoader_1 = require_serviceLoader();
    var Tag_1 = require_Tag();
    var Processor_1 = require_Processor();
    var is_a_1 = require_is_a();
    var getType_1 = require_getType();
    var shortCode_1 = require_shortCode();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var ComplexStorageCache_1 = require_ComplexStorageCache();
    var super_1 = require_super();
    var waitUntil_1 = require_waitUntil();
    var subelements_1 = require_subelements();
    var globalSettings_1 = require_globalSettings();
    var loadSDK_1 = __importDefault(require_loadSDK());
    var range_1 = require_range();
    (/* @__PURE__ */ __name(function __qcobjects__(_top2) {
      if (typeof Object.defineProperty !== "undefined" && typeof _top2 !== "undefined") {
        try {
          Object.defineProperty(_top2, "__qcobjects__", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: __qcobjects__
          });
        } catch (e) {
          Logger_1.logger.debug(`An error ocurred: ${e}`);
          if (typeof _top2.__qcobjects__ !== "undefined") {
            _top2.__qcobjects__.loaded = true;
          }
        }
      }
      if (typeof _top2.__qcobjects__.loaded === "undefined") {
        _top2.__qcobjects__.loaded = true;
        if (platform_1.isBrowser) {
          Element.prototype.subelements = subelements_1.subelements;
          Document.prototype.subelements = subelements_1.subelements;
          HTMLElement.prototype.subelements = subelements_1.subelements;
          if (typeof ShadowRoot !== "undefined") {
            ShadowRoot.prototype.subelements = subelements_1.subelements;
          }
        }
        Logger_1.logger.debugEnabled = false;
        Logger_1.logger.infoEnabled = true;
        if (platform_1.isBrowser) {
          Element.prototype.find = function(tag) {
            const _self = this;
            const _oo = [];
            const _tags = document.subelements(tag);
            _tags.map((_tt, _t) => {
              if (typeof _tags[_t] !== "undefined" && _tags[_t].parentNode.tagName === _self.parentNode.tagName) {
                _oo.push((0, Cast_1._Cast)(_tt, new Object()));
              }
              return _tt;
            });
            return _oo;
          };
        }
        if (platform_1.isBrowser) {
          Element.prototype.append = /* @__PURE__ */ __name(function QC_Append(child) {
            if ((0, isQCObjects_1.isQCObjects_Object)(child) || typeof child.body !== "undefined") {
              this.appendChild(child.body);
            } else {
              this.appendChild(child);
            }
          }, "QC_Append");
          Element.prototype.render = /* @__PURE__ */ __name(function QC_Render(content) {
            const _self = this;
            const _appendVDOM = /* @__PURE__ */ __name((_self2, content2) => {
              if (typeof document.implementation.createHTMLDocument !== "undefined") {
                const doc = document.implementation.createHTMLDocument("");
                doc.body.innerHTML = content2;
                doc.body.subelements("*").map((element) => {
                  return _self2.append(element);
                });
              }
            }, "_appendVDOM");
            if (typeof this.innerHTML !== "undefined") {
              try {
                this.innerHTML += content;
              } catch (e) {
                Logger_1.logger.debug(`An error ocurred: ${e}`);
                _appendVDOM(_self, content);
              }
            } else {
              _appendVDOM(_self, content);
            }
          }, "QC_Render");
        }
        (0, Export_1.Export)(waitUntil_1.waitUntil);
        (0, Export_1.Export)(super_1._super_);
        (0, Export_1.Export)(ComplexStorageCache_1.ComplexStorageCache);
        (0, Export_1.Export)(ClassFactory_1.ClassFactory);
        (0, Export_1.Export)(DOMCreateElement_1._DOMCreateElement);
        (0, Export_1.Export)(shortCode_1.shortCode);
        (0, Export_1.Export)(getType_1.__getType__);
        (0, Export_1.Export)(is_a_1.is_a);
        (0, Package_1.Package)("com.qcobjects", [Processor_1.Processor]);
        if (platform_1.isBrowser) {
          Element.prototype.Cast = /* @__PURE__ */ __name(function QC_Cast(_o) {
            const _self = this;
            return (0, Cast_1._Cast)(_self, _o);
          }, "QC_Cast");
        }
        if (platform_1.isBrowser) {
          window.onload = Ready_1._Ready;
          if (platform_1.is_phonegap) {
            document.addEventListener("deviceready", Ready_1._Ready, captureFalseTouch_1.captureFalseTouch);
          }
        } else {
          global.onload = Ready_1._Ready;
        }
        if (platform_1.isBrowser) {
          window.addEventListener("popstate", function(popStateEvent) {
            popStateEvent.stopImmediatePropagation();
            popStateEvent.stopPropagation();
            Component_1.Component.route().catch((e) => {
              throw new Error(`An error ocurred when trying to load initial routes. ${e}`);
            });
          });
        }
        (0, Export_1.Export)(serviceLoader_1.serviceLoader);
        (0, Export_1.Export)(componentLoader_1.componentLoader);
        (0, Export_1.Export)(ComponentFactory_1.ComponentURI);
        (0, Export_1.Export)(ObjectName_1.ObjectName);
        (0, Export_1.Export)(DataStringify_1._DataStringify);
        (0, Export_1.Export)(isQCObjects_1.isQCObjects_Class);
        (0, Export_1.Export)(isQCObjects_1.isQCObjects_Object);
        (0, Export_1.Export)(NamespaceRef_1.NamespaceRef);
        Array.prototype.unique = function() {
          return this.filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          });
        };
        Array.unique = function(a) {
          return a.unique();
        };
        introspection_1._protected_code_(Array.unique);
        introspection_1._protected_code_(Array.prototype.unique);
        Array.prototype.table = function() {
          console.table(this);
        };
        Array.table = function(a) {
          a.table();
          return;
        };
        introspection_1._protected_code_(Array.table);
        introspection_1._protected_code_(Array.prototype.table);
        Array.prototype.sum = function() {
          return this.reduce(function(prev, current) {
            return (0, mathFunctions_1.__to_number)(prev) + (0, mathFunctions_1.__to_number)(current);
          }, 0);
        };
        Array.sum = function(a) {
          return a.sum();
        };
        introspection_1._protected_code_(Array.sum);
        introspection_1._protected_code_(Array.prototype.sum);
        Array.prototype.avg = function() {
          return this.length < 1 ? 0 : this.reduce(function(prev, current) {
            return ((0, mathFunctions_1.__to_number)(prev) + (0, mathFunctions_1.__to_number)(current)) / 2;
          });
        };
        Array.avg = function(a) {
          return a.avg();
        };
        introspection_1._protected_code_(Array.avg);
        introspection_1._protected_code_(Array.prototype.avg);
        Array.prototype.min = function() {
          return this.reduce(function(prev, current) {
            return (0, mathFunctions_1.__to_number)(prev) <= (0, mathFunctions_1.__to_number)(current) ? prev : current;
          }, Infinity);
        };
        Array.min = function(a) {
          return a.min();
        };
        introspection_1._protected_code_(Array.min);
        introspection_1._protected_code_(Array.prototype.min);
        Array.prototype.max = function() {
          return this.reduce(function(prev, current) {
            return (0, mathFunctions_1.__to_number)(prev) >= (0, mathFunctions_1.__to_number)(current) ? prev : current;
          }, 0);
        };
        Array.max = function(a) {
          return a.max();
        };
        introspection_1._protected_code_(Array.max);
        introspection_1._protected_code_(Array.prototype.max);
        Array.prototype.sortBy = function(propName, sortAsc = true) {
          const sort_function = sortAsc ? function(prev, current) {
            return current[propName] < prev[propName] ? 1 : -1;
          } : function(prev, current) {
            return current[propName] > prev[propName] ? 1 : -1;
          };
          return this.sort(sort_function);
        };
        Array.sortBy = function(a, propName, sortAsc = true) {
          return a.sortBy(propName, sortAsc);
        };
        introspection_1._protected_code_(Array.sortBy);
        introspection_1._protected_code_(Array.prototype.sortBy);
        Array.prototype.matrix = function(_length, _fillValue = 0) {
          const x_func = /* @__PURE__ */ __name(function(x = void 0) {
            return _fillValue;
          }, "x_func");
          return Array.from({
            length: _length
          }, x_func);
        };
        Array.matrix = function(a, _length, _fillValue = 0) {
          return a.matrix(_length, _fillValue);
        };
        introspection_1._protected_code_(Array.matrix);
        introspection_1._protected_code_(Array.prototype.matrix);
        Array.prototype.matrix2d = function(_length, _fillValue = 0) {
          const y_func = /* @__PURE__ */ __name(function(y) {
            return _fillValue;
          }, "y_func");
          const x_func = /* @__PURE__ */ __name(function(x) {
            return Array.from({
              length: _length
            }, y_func);
          }, "x_func");
          return Array.from({
            length: _length
          }, x_func);
        };
        Array.matrix2d = function(a, _length, _fillValue = 0) {
          return a.matrix2d(_length, _fillValue);
        };
        introspection_1._protected_code_(Array.matrix2d);
        introspection_1._protected_code_(Array.prototype.matrix2d);
        Array.prototype.matrix3d = function(_length, _fillValue = 0) {
          const y_func = /* @__PURE__ */ __name(function(y) {
            return Array.from({
              length: _length
            }, function() {
              return _fillValue;
            });
          }, "y_func");
          const x_func = /* @__PURE__ */ __name(function(x) {
            return Array.from({
              length: _length
            }, y_func);
          }, "x_func");
          return Array.from({
            length: _length
          }, x_func);
        };
        Array.matrix3d = function(a, _length, _fillValue = 0) {
          return a.matrix3d(_length, _fillValue);
        };
        introspection_1._protected_code_(Array.matrix3d);
        introspection_1._protected_code_(Array.prototype.matrix3d);
        String.prototype.list = function() {
          const __instance = this;
          return (0, range_1.range)(0, __instance.length - 1).map(function(i) {
            return __instance[i];
          });
        };
        introspection_1._protected_code_(String.prototype.list);
        (0, defaultProcessors_1.setDefaultProcessors)();
        (0, Ready_1.Ready)(function() {
          if (!CONFIG_1.CONFIG.get("useSDK")) {
            globalSettings_1.GlobalSettings.__start__().catch((e) => {
              throw Error(e);
            });
          }
        });
        (0, Export_1.Export)(Export_1.Export);
        (0, Export_1.Export)(Import_1.Import);
        (0, Export_1.Export)(Package_1.Package);
        (0, Export_1.Export)(Class_1.Class);
        (0, Export_1.Export)(New_1.New);
        (0, Export_1.Export)(Tag_1.Tag);
        (0, Export_1.Export)(Ready_1.Ready);
        (0, Export_1.Export)(Ready_1.ready);
        (0, Export_1.Export)(platform_1.isBrowser);
        (0, Export_1.Export)(introspection_1._methods_);
        (0, Export_1.Export)(globalSettings_1.GlobalSettings);
        loadSDK_1.default();
        if (platform_1.isBrowser) {
          (0, asyncLoad_1.asyncLoad)(function() {
            (0, Ready_1.Ready)(function() {
              (function(_top3) {
                let ticking = false;
                const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                const scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);
                function scrollDispatcher(event) {
                  const percentY = Math.round(_top3.scrollY * 100 / scrollHeight);
                  const percentX = Math.round(_top3.scrollX * 100 / scrollWidth);
                  const scrollPercentEventEvent = new CustomEvent("scrollpercent", {
                    detail: {
                      percentX,
                      percentY
                    }
                  });
                  event.target.dispatchEvent(scrollPercentEventEvent);
                  let secondaryEventName = "defaultscroll";
                  const __valid_scrolls__ = [0, 5, 10, 25, 50, 75, 90, 95, 100];
                  __valid_scrolls__.filter(function(p) {
                    return p === percentY;
                  }).map(function(pY) {
                    secondaryEventName = "percentY" + percentY.toString();
                    const secondaryCustomEvent = new CustomEvent(secondaryEventName, {
                      detail: {
                        percentX,
                        percentY
                      }
                    });
                    event.target.dispatchEvent(secondaryCustomEvent);
                    return pY;
                  });
                }
                __name(scrollDispatcher, "scrollDispatcher");
                document.addEventListener("scroll", function(event) {
                  if (!ticking) {
                    requestAnimationFrame(function() {
                      scrollDispatcher(event);
                      ticking = false;
                    });
                    ticking = true;
                  }
                });
              })(_top2);
            });
          }, []);
        }
        if (!platform_1.isBrowser) {
          if (typeof _top2.global !== "undefined" && Object.hasOwn(_top2.global, "_fireAsyncLoad")) {
            asyncLoad_1._fireAsyncLoad.call(_top2);
          }
          if (typeof _top2.global !== "undefined" && Object.hasOwn(_top2.global, "onload")) {
            _top2.global.onload.call(_top2);
          }
        }
        (function(isBrowser) {
          const __freeze__ = /* @__PURE__ */ __name(function() {
            Object.freeze(Object.prototype);
            Object.freeze(Object);
          }, "__freeze__");
          if (isBrowser && CONFIG_1.CONFIG.get("secureObjects", false)) {
            (0, Ready_1.Ready)(function() {
              __freeze__();
            });
          } else if (CONFIG_1.CONFIG.get("secureObjects", false)) {
            __freeze__();
          }
        })(platform_1.isBrowser);
      }
    }, "__qcobjects__"))(top_1._top);
  }
});

// node_modules/qcobjects/build/BackendMicroservice.js
var require_BackendMicroservice = __commonJS({
  "node_modules/qcobjects/build/BackendMicroservice.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BackendMicroservice = void 0;
    var basePath_1 = require_basePath();
    var DataStringify_1 = require_DataStringify();
    var domain_1 = require_domain();
    var InheritClass_1 = require_InheritClass();
    var Logger_1 = require_Logger();
    var Package_1 = require_Package();
    var BackendMicroservice = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "BackendMicroservice");
      }
      stream;
      route;
      headers;
      request;
      constructor({ domain = domain_1._domain_, basePath = basePath_1._basePath_, body = null, stream = null, request = null }) {
        super({
          domain,
          basePath,
          body,
          stream,
          request
        });
        Logger_1.logger.debug("Initializing BackendMicroservice...");
        const microservice = this;
        if (typeof this.body === "undefined") {
          this.body = null;
        }
        if (typeof body !== "undefined") {
          this.body = body;
        }
        this.cors();
        microservice.stream = stream;
        stream?.on("data", (data) => {
          const requestMethod2 = request?.method.toLowerCase();
          const supportedMethods2 = {
            "post": microservice.post.bind(microservice)
          };
          if (Object.hasOwn(supportedMethods2, requestMethod2)) {
            supportedMethods2[requestMethod2].call(microservice, data);
          }
        });
        const requestMethod = request?.method.toLowerCase();
        const supportedMethods = {
          "get": microservice.get.bind(microservice),
          "head": microservice.head.bind(microservice),
          "put": microservice.put.bind(microservice),
          "delete": microservice.delete.bind(microservice),
          "connect": microservice.connect.bind(microservice),
          "options": microservice.options.bind(microservice),
          "trace": microservice.trace.bind(microservice),
          "patch": microservice.patch.bind(microservice)
        };
        if (Object.hasOwn(supportedMethods, requestMethod)) {
          supportedMethods[requestMethod].call(microservice);
        }
      }
      cors() {
        if (this.route.cors) {
          Logger_1.logger.debug("Validating CORS...");
          const { allow_origins, allow_credentials, allow_methods, allow_headers } = this.route.cors;
          const microservice = this;
          if (typeof microservice.headers !== "object") {
            microservice.headers = {};
          }
          if (typeof microservice.route.responseHeaders !== "object") {
            microservice.route.responseHeaders = {};
          }
          if (typeof allow_origins !== "undefined") {
            Logger_1.logger.debug("CORS: allow_origins available. Validating origins...");
            if (allow_origins === "*" || typeof microservice.request.headers.origin === "undefined" || [...allow_origins].indexOf(microservice.request.headers.origin) !== -1) {
              Logger_1.logger.debug("CORS: Adding header Access-Control-Allow-Origin=*");
              microservice.route.responseHeaders["Access-Control-Allow-Origin"] = "*";
            } else {
              Logger_1.logger.debug("CORS: Origin is not allowed: " + microservice.request.headers.origin);
              Logger_1.logger.debug("CORS: Forcing to finish the response...");
              this.body = {};
              try {
                this.done();
              } catch (e) {
                Logger_1.logger.debug(`It was not possible to finish the call to the microservice: ${e}`);
              }
            }
          } else {
            Logger_1.logger.debug("CORS: no allow_origins available. Allowing all origins...");
            Logger_1.logger.debug("CORS: Adding header Access-Control-Allow-Origin=*");
            microservice.route.responseHeaders["Access-Control-Allow-Origin"] = "*";
          }
          if (typeof allow_credentials !== "undefined") {
            Logger_1.logger.debug(`CORS: allow_credentials present. Allowing ${allow_credentials}...`);
            microservice.route.responseHeaders["Access-Control-Allow-Credentials"] = allow_credentials.toString();
          } else {
            Logger_1.logger.debug("CORS: No allow_credentials present. Allowing all credentials.");
            microservice.route.responseHeaders["Access-Control-Allow-Credentials"] = "true";
          }
          if (typeof allow_methods !== "undefined") {
            Logger_1.logger.debug(`CORS: allow_methods present. Allowing ${allow_methods}...`);
            microservice.route.responseHeaders["Access-Control-Allow-Methods"] = [...allow_methods].join(",");
          } else {
            Logger_1.logger.debug("CORS: No allow_methods present. Allowing only GET, OPTIONS and POST");
            microservice.route.responseHeaders["Access-Control-Allow-Methods"] = "GET, OPTIONS, POST";
          }
          if (typeof allow_headers !== "undefined") {
            Logger_1.logger.debug(`CORS: allow_headers present. Allowing ${allow_headers}...`);
            microservice.route.responseHeaders["Access-Control-Allow-Headers"] = [...allow_headers].join(",");
          } else {
            Logger_1.logger.debug("CORS: No allow_headers present. Allowing all headers...");
            microservice.route.responseHeaders["Access-Control-Allow-Headers"] = "*";
          }
        } else {
          Logger_1.logger.debug("No CORS validation available. You can specify cors in CONFIG.backend.routes[].cors");
        }
      }
      head(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.head] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      get(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.get] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      post(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.post] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      put(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.put] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      delete(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.delete] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      connect(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.connect] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      options(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.options] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      trace(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.trace] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      patch(formData) {
        Logger_1.logger.debug(`[BackendMicroservice.patch] Data received: ${(0, DataStringify_1._DataStringify)(formData)}`);
        this.done();
      }
      finishWithBody(stream) {
        try {
          Logger_1.logger.debug("[BackendMicroservice.finishWithBody] Ending the stream...");
          Logger_1.logger.debug(`[BackendMicroservice.finishWithBody] type of body is: ${typeof this.body}`);
          if (typeof this.body !== "string") {
            this.body = (0, DataStringify_1._DataStringify)(this.body);
          }
          Logger_1.logger.debug(`[BackendMicroservice.finishWithBody] 
 body: ${this.body} `);
          stream?.write(this.body);
          stream?.end();
          Logger_1.logger.debug("[BackendMicroservice.finishWithBody] Stream ended.");
        } catch (e) {
          Logger_1.logger.debug(`[BackendMicroservice.finishWithBody] Something went wrong ending the stream: ${e}`);
        }
      }
      done() {
        Logger_1.logger.debug("[BackendMicroservice.done] Finalizing the response...");
        const microservice = this;
        const stream = microservice.stream;
        try {
          Logger_1.logger.debug("[BackendMicroservice.done] Sending response headers...");
          if (microservice.route.responseHeaders) {
            Logger_1.logger.debug(`[BackendMicroservice.done] Response headers present: ${Object.keys(microservice.route.responseHeaders).join(",")}`);
            stream.respond(microservice.route.responseHeaders);
          } else {
            throw Error("[BackendMicroservice.done] No headers present.");
          }
        } catch (e) {
          Logger_1.logger.debug(`[BackendMicroservice.done] Something went wrong sending response headers: ${e}`);
        }
        if (microservice.body !== null) {
          try {
            Logger_1.logger.debug("[BackendMicroservice.done] A body of message is present. Finalizing the response...");
            microservice.finishWithBody.call(microservice, stream);
          } catch (e) {
            Logger_1.logger.debug(`[BackendMicroservice.done] Something went wrong finalizing the response: ${e}`);
          }
        } else {
          Logger_1.logger.debug("[BackendMicroservice.done] No body present. Ending stream...");
          stream.end();
        }
      }
    };
    exports.BackendMicroservice = BackendMicroservice;
    (0, Package_1.Package)("com.qcobjects.api", [
      BackendMicroservice
    ]);
  }
});

// node_modules/qcobjects/build/RegisterClass.js
var require_RegisterClass = __commonJS({
  "node_modules/qcobjects/build/RegisterClass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RegisterClass = void 0;
    var make_global_1 = require_make_global();
    var PrimaryCollections_1 = require_PrimaryCollections();
    var RegisterClass = /* @__PURE__ */ __name(function(_class_, __namespace) {
      return (0, PrimaryCollections_1.__register_class__)(_class_, __namespace);
    }, "RegisterClass");
    exports.RegisterClass = RegisterClass;
    (0, make_global_1.__make_global__)(exports.RegisterClass);
  }
});

// node_modules/qcobjects/build/DefaultTemplateHandler.js
var require_DefaultTemplateHandler = __commonJS({
  "node_modules/qcobjects/build/DefaultTemplateHandler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultTemplateHandler = void 0;
    var Logger_1 = require_Logger();
    var Processor_1 = require_Processor();
    var RegisterClass_1 = require_RegisterClass();
    var DefaultTemplateHandler = class {
      static {
        __name(this, "DefaultTemplateHandler");
      }
      template = "";
      __definition = {};
      static __definition = {};
      component;
      constructor({ component, template }) {
        this.component = component;
        this.template = template;
      }
      assign(data) {
        const templateInstance = this;
        if (typeof templateInstance.component === "undefined") {
          throw new Error("DefaultTemplateHandler.assign: component is undefined");
        }
        if (typeof templateInstance.component.processorHandler === "undefined") {
          throw new Error("DefaultTemplateHandler.assign: component.processorHandler is undefined");
        }
        const processorHandler = templateInstance.component.processorHandler;
        processorHandler.component = templateInstance.component;
        let parsedAssignmentText = typeof templateInstance.template !== "undefined" ? templateInstance.template : "";
        if (typeof data === "object") {
          [...Object.keys(data)].map((k) => {
            let _value = data[k];
            if (typeof _value === "string" || typeof _value === "number" || !isNaN(_value)) {
              try {
                _value = Processor_1.GlobalProcessor.processObject.bind(processorHandler).call(processorHandler, _value, templateInstance.component);
                parsedAssignmentText = parsedAssignmentText.replace(new RegExp(`{{${k}}}`, "g"), _value);
              } catch (e) {
                Logger_1.logger.warn(`${templateInstance.component?.name} could not parse processors.`);
                throw Error(`${templateInstance.component?.name} could not parse processors. Reason: ${e.message}`);
              }
            }
            return k;
          });
        } else {
          Logger_1.logger.debug(`${templateInstance.component?.name}.data is not an object`);
        }
        try {
          parsedAssignmentText = Processor_1.GlobalProcessor.processObject.call(processorHandler, parsedAssignmentText, templateInstance.component);
        } catch (e) {
          Logger_1.logger.warn(`${templateInstance.component?.name} could not parse processors.`);
          throw Error(`${templateInstance.component?.name} could not parse processors. Reason: ${e.message}`);
        }
        return parsedAssignmentText;
      }
    };
    exports.DefaultTemplateHandler = DefaultTemplateHandler;
    (0, RegisterClass_1.RegisterClass)(DefaultTemplateHandler, "com.qcobjects");
  }
});

// node_modules/qcobjects/build/SourceJS.js
var require_SourceJS = __commonJS({
  "node_modules/qcobjects/build/SourceJS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SourceJS = void 0;
    var basePath_1 = require_basePath();
    var Cast_1 = require_Cast();
    var domain_1 = require_domain();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var Logger_1 = require_Logger();
    var SourceJS2 = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "SourceJS");
      }
      domain = domain_1._domain_;
      basePath = basePath_1._basePath_;
      type = "text/javascript";
      containerTag = "body";
      url = "";
      data = {};
      async = false;
      external = false;
      constructor(o) {
        super(o);
        this.body = (0, DOMCreateElement_1._DOMCreateElement)("script");
      }
      set(name, value) {
        this[name] = value;
      }
      get(name, _default) {
        return this[name] || _default;
      }
      status = false;
      done() {
      }
      fail() {
      }
      rebuild() {
        const context = this;
        try {
          document.getElementsByTagName(context.containerTag)[0].appendChild(function(s, url, context2) {
            s.type = context2.type;
            s.src = url;
            s.crossOrigin = Object.hasOwn(context2, "crossOrigin") ? context2.crossOrigin : "anonymous";
            s.async = context2.async;
            s.onreadystatechange = function() {
              if (this.readyState === "complete") {
                context2.done.call(context2);
              }
            };
            s.onload = function(e) {
              context2.status = true;
              context2.done.call(context2, e);
            };
            s.onerror = function(e) {
              context2.status = false;
              context2.fail.call(context2, e);
            };
            context2.body = s;
            return s;
          }.call(this, (0, DOMCreateElement_1._DOMCreateElement)("script"), this.external ? this.url : this.basePath + this.url, context));
        } catch (e) {
          context.status = false;
          Logger_1.logger.debug(`An error ocurred: ${e}`);
          context.fail();
        }
      }
      Cast(o) {
        return (0, Cast_1._Cast)(this, o);
      }
      _new_(properties) {
        this.__new__(properties);
        this.rebuild();
      }
    };
    exports.SourceJS = SourceJS2;
    (0, Package_1.Package)("com.qcobjects", [SourceJS2]);
  }
});

// node_modules/qcobjects/build/SourceCSS.js
var require_SourceCSS = __commonJS({
  "node_modules/qcobjects/build/SourceCSS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SourceCSS = void 0;
    var basePath_1 = require_basePath();
    var Cast_1 = require_Cast();
    var domain_1 = require_domain();
    var DOMCreateElement_1 = require_DOMCreateElement();
    var InheritClass_1 = require_InheritClass();
    var platform_1 = require_platform();
    var Package_1 = require_Package();
    var SourceCSS3 = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "SourceCSS");
      }
      domain = domain_1._domain_;
      basePath = basePath_1._basePath_;
      url = "";
      data = {};
      async = false;
      external = false;
      constructor(o) {
        super(o);
        this.body = (0, DOMCreateElement_1._DOMCreateElement)("link");
      }
      fail() {
        throw new Error("Method not implemented.");
      }
      Cast(o) {
        return (0, Cast_1._Cast)(this, o);
      }
      set(name, value) {
        this[name] = value;
      }
      get(name, _default) {
        return this[name] || _default;
      }
      done() {
      }
      rebuild() {
        const context = this;
        if (platform_1.isBrowser) {
          window.document.getElementsByTagName("head")[0].appendChild(function(s, url, context2) {
            s.type = "text/css";
            s.rel = "stylesheet";
            s.href = url;
            s.crossOrigin = "anonymous";
            s.onreadystatechange = function() {
              if (this.readyState === "complete") {
                context2.done.call(context2);
              }
            };
            s.onload = context2.done;
            context2.body = s;
            return s;
          }.call(this, (0, DOMCreateElement_1._DOMCreateElement)("link"), this.external ? this.url : this.basePath + this.url, context));
        }
      }
    };
    exports.SourceCSS = SourceCSS3;
    (0, Package_1.Package)("com.qcobjects", [SourceCSS3]);
  }
});

// node_modules/qcobjects/build/WidgetsFactory.js
var require_WidgetsFactory = __commonJS({
  "node_modules/qcobjects/build/WidgetsFactory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RegisterWidgets = exports.RegisterWidget = exports._ComponentWidget_ = void 0;
    var DOMCreateElement_1 = require_DOMCreateElement();
    var Export_1 = require_Export();
    var introspection_1 = require_introspection();
    var platform_1 = require_platform();
    var QCObjectsWidgetNode = class {
      static {
        __name(this, "QCObjectsWidgetNode");
      }
      writingSuggestions;
      currentCSSZoom;
      ariaColIndexText;
      ariaRowIndexText;
      accessKey;
      accessKeyLabel;
      autocapitalize;
      dir;
      draggable;
      hidden;
      inert;
      innerText;
      lang;
      offsetHeight;
      offsetLeft;
      offsetParent;
      offsetTop;
      offsetWidth;
      outerText;
      popover;
      spellcheck;
      title;
      translate;
      attachInternals() {
        throw new Error("Method not implemented.");
      }
      click() {
        throw new Error("Method not implemented.");
      }
      hidePopover() {
        throw new Error("Method not implemented.");
      }
      showPopover() {
        throw new Error("Method not implemented.");
      }
      togglePopover(force) {
        throw new Error("Method not implemented.");
      }
      addEventListener(type, listener, options) {
        throw new Error("Method not implemented.");
      }
      removeEventListener(type, listener, options) {
        throw new Error("Method not implemented.");
      }
      attributes;
      classList;
      className;
      clientHeight;
      clientLeft;
      clientTop;
      clientWidth;
      id;
      innerHTML;
      localName;
      namespaceURI;
      onfullscreenchange;
      onfullscreenerror;
      outerHTML;
      ownerDocument;
      part;
      prefix;
      scrollHeight;
      scrollLeft;
      scrollTop;
      scrollWidth;
      shadowRoot;
      slot;
      tagName;
      attachShadow(init) {
        throw new Error("Method not implemented.");
      }
      checkVisibility(options) {
        throw new Error("Method not implemented.");
      }
      closest(selectors) {
        throw new Error("Method not implemented.");
      }
      computedStyleMap() {
        throw new Error("Method not implemented.");
      }
      getAttribute(qualifiedName) {
        throw new Error("Method not implemented.");
      }
      getAttributeNS(namespace, localName) {
        throw new Error("Method not implemented.");
      }
      getAttributeNames() {
        throw new Error("Method not implemented.");
      }
      getAttributeNode(qualifiedName) {
        throw new Error("Method not implemented.");
      }
      getAttributeNodeNS(namespace, localName) {
        throw new Error("Method not implemented.");
      }
      getBoundingClientRect() {
        throw new Error("Method not implemented.");
      }
      getClientRects() {
        throw new Error("Method not implemented.");
      }
      getElementsByClassName(classNames) {
        throw new Error("Method not implemented.");
      }
      getElementsByTagName(qualifiedName) {
        throw new Error("Method not implemented.");
      }
      getElementsByTagNameNS(namespace, localName) {
        throw new Error("Method not implemented.");
      }
      getHTML(options) {
        throw new Error("Method not implemented.");
      }
      hasAttribute(qualifiedName) {
        throw new Error("Method not implemented.");
      }
      hasAttributeNS(namespace, localName) {
        throw new Error("Method not implemented.");
      }
      hasAttributes() {
        throw new Error("Method not implemented.");
      }
      hasPointerCapture(pointerId) {
        throw new Error("Method not implemented.");
      }
      insertAdjacentElement(where, element) {
        throw new Error("Method not implemented.");
      }
      insertAdjacentHTML(position, string) {
        throw new Error("Method not implemented.");
      }
      insertAdjacentText(where, data) {
        throw new Error("Method not implemented.");
      }
      matches(selectors) {
        throw new Error("Method not implemented.");
      }
      releasePointerCapture(pointerId) {
        throw new Error("Method not implemented.");
      }
      removeAttribute(qualifiedName) {
        throw new Error("Method not implemented.");
      }
      removeAttributeNS(namespace, localName) {
        throw new Error("Method not implemented.");
      }
      removeAttributeNode(attr) {
        throw new Error("Method not implemented.");
      }
      requestFullscreen(options) {
        throw new Error("Method not implemented.");
      }
      requestPointerLock(options) {
        throw new Error("Method not implemented.");
      }
      scroll(x, y) {
        throw new Error("Method not implemented.");
      }
      scrollBy(x, y) {
        throw new Error("Method not implemented.");
      }
      scrollIntoView(arg) {
        throw new Error("Method not implemented.");
      }
      scrollTo(x, y) {
        throw new Error("Method not implemented.");
      }
      setAttribute(qualifiedName, value) {
        throw new Error("Method not implemented.");
      }
      setAttributeNS(namespace, qualifiedName, value) {
        throw new Error("Method not implemented.");
      }
      setAttributeNode(attr) {
        throw new Error("Method not implemented.");
      }
      setAttributeNodeNS(attr) {
        throw new Error("Method not implemented.");
      }
      setHTMLUnsafe(html) {
        throw new Error("Method not implemented.");
      }
      setPointerCapture(pointerId) {
        throw new Error("Method not implemented.");
      }
      toggleAttribute(qualifiedName, force) {
        throw new Error("Method not implemented.");
      }
      webkitMatchesSelector(selectors) {
        throw new Error("Method not implemented.");
      }
      baseURI;
      childNodes;
      firstChild;
      isConnected;
      lastChild;
      nextSibling;
      nodeName;
      nodeType;
      nodeValue;
      parentElement;
      parentNode;
      previousSibling;
      textContent;
      appendChild(node) {
        throw new Error("Method not implemented.");
      }
      cloneNode(deep) {
        throw new Error("Method not implemented.");
      }
      compareDocumentPosition(other) {
        throw new Error("Method not implemented.");
      }
      contains(other) {
        throw new Error("Method not implemented.");
      }
      getRootNode(options) {
        throw new Error("Method not implemented.");
      }
      hasChildNodes() {
        throw new Error("Method not implemented.");
      }
      insertBefore(node, child) {
        throw new Error("Method not implemented.");
      }
      isDefaultNamespace(namespace) {
        throw new Error("Method not implemented.");
      }
      isEqualNode(otherNode) {
        throw new Error("Method not implemented.");
      }
      isSameNode(otherNode) {
        throw new Error("Method not implemented.");
      }
      lookupNamespaceURI(prefix) {
        throw new Error("Method not implemented.");
      }
      lookupPrefix(namespace) {
        throw new Error("Method not implemented.");
      }
      normalize() {
        throw new Error("Method not implemented.");
      }
      removeChild(child) {
        throw new Error("Method not implemented.");
      }
      replaceChild(node, child) {
        throw new Error("Method not implemented.");
      }
      ELEMENT_NODE;
      ATTRIBUTE_NODE;
      TEXT_NODE;
      CDATA_SECTION_NODE;
      ENTITY_REFERENCE_NODE;
      ENTITY_NODE;
      PROCESSING_INSTRUCTION_NODE;
      COMMENT_NODE;
      DOCUMENT_NODE;
      DOCUMENT_TYPE_NODE;
      DOCUMENT_FRAGMENT_NODE;
      NOTATION_NODE;
      DOCUMENT_POSITION_DISCONNECTED;
      DOCUMENT_POSITION_PRECEDING;
      DOCUMENT_POSITION_FOLLOWING;
      DOCUMENT_POSITION_CONTAINS;
      DOCUMENT_POSITION_CONTAINED_BY;
      DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
      dispatchEvent(event) {
        throw new Error("Method not implemented.");
      }
      ariaAtomic;
      ariaAutoComplete;
      ariaBrailleLabel;
      ariaBrailleRoleDescription;
      ariaBusy;
      ariaChecked;
      ariaColCount;
      ariaColIndex;
      ariaColSpan;
      ariaCurrent;
      ariaDescription;
      ariaDisabled;
      ariaExpanded;
      ariaHasPopup;
      ariaHidden;
      ariaInvalid;
      ariaKeyShortcuts;
      ariaLabel;
      ariaLevel;
      ariaLive;
      ariaModal;
      ariaMultiLine;
      ariaMultiSelectable;
      ariaOrientation;
      ariaPlaceholder;
      ariaPosInSet;
      ariaPressed;
      ariaReadOnly;
      ariaRequired;
      ariaRoleDescription;
      ariaRowCount;
      ariaRowIndex;
      ariaRowSpan;
      ariaSelected;
      ariaSetSize;
      ariaSort;
      ariaValueMax;
      ariaValueMin;
      ariaValueNow;
      ariaValueText;
      role;
      animate(keyframes, options) {
        throw new Error("Method not implemented.");
      }
      getAnimations(options) {
        throw new Error("Method not implemented.");
      }
      after(...nodes) {
        throw new Error("Method not implemented.");
      }
      before(...nodes) {
        throw new Error("Method not implemented.");
      }
      remove() {
        throw new Error("Method not implemented.");
      }
      replaceWith(...nodes) {
        throw new Error("Method not implemented.");
      }
      nextElementSibling;
      previousElementSibling;
      childElementCount;
      children;
      firstElementChild;
      lastElementChild;
      append(...nodes) {
        throw new Error("Method not implemented.");
      }
      prepend(...nodes) {
        throw new Error("Method not implemented.");
      }
      querySelector(selectors) {
        throw new Error("Method not implemented.");
      }
      querySelectorAll(selectors) {
        throw new Error("Method not implemented.");
      }
      replaceChildren(...nodes) {
        throw new Error("Method not implemented.");
      }
      assignedSlot;
      attributeStyleMap;
      style;
      contentEditable;
      enterKeyHint;
      inputMode;
      isContentEditable;
      onabort;
      onanimationcancel;
      onanimationend;
      onanimationiteration;
      onanimationstart;
      onauxclick;
      onbeforeinput;
      onbeforetoggle;
      onblur;
      oncancel;
      oncanplay;
      oncanplaythrough;
      onchange;
      onclick;
      onclose;
      oncontextlost;
      oncontextmenu;
      oncontextrestored;
      oncopy;
      oncuechange;
      oncut;
      ondblclick;
      ondrag;
      ondragend;
      ondragenter;
      ondragleave;
      ondragover;
      ondragstart;
      ondrop;
      ondurationchange;
      onemptied;
      onended;
      onerror;
      onfocus;
      onformdata;
      ongotpointercapture;
      oninput;
      oninvalid;
      onkeydown;
      onkeypress;
      onkeyup;
      onload;
      onloadeddata;
      onloadedmetadata;
      onloadstart;
      onlostpointercapture;
      onmousedown;
      onmouseenter;
      onmouseleave;
      onmousemove;
      onmouseout;
      onmouseover;
      onmouseup;
      onpaste;
      onpause;
      onplay;
      onplaying;
      onpointercancel;
      onpointerdown;
      onpointerenter;
      onpointerleave;
      onpointermove;
      onpointerout;
      onpointerover;
      onpointerup;
      onprogress;
      onratechange;
      onreset;
      onresize;
      onscroll;
      onscrollend;
      onsecuritypolicyviolation;
      onseeked;
      onseeking;
      onselect;
      onselectionchange;
      onselectstart;
      onslotchange;
      onstalled;
      onsubmit;
      onsuspend;
      ontimeupdate;
      ontoggle;
      ontouchcancel;
      ontouchend;
      ontouchmove;
      ontouchstart;
      ontransitioncancel;
      ontransitionend;
      ontransitionrun;
      ontransitionstart;
      onvolumechange;
      onwaiting;
      onwebkitanimationend;
      onwebkitanimationiteration;
      onwebkitanimationstart;
      onwebkittransitionend;
      onwheel;
      autofocus;
      dataset;
      nonce;
      tabIndex;
      blur() {
        throw new Error("Method not implemented.");
      }
      focus(options) {
        throw new Error("Method not implemented.");
      }
    };
    if (platform_1.isBrowser) {
      exports._ComponentWidget_ = class _ComponentWidget_ extends HTMLElement {
        static {
          __name(this, "_ComponentWidget_");
        }
        constructor() {
          super();
          const componentWidget = this;
          const componentName = componentWidget.nodeName.toLowerCase();
          const componentBody = (0, DOMCreateElement_1._DOMCreateElement)("quick-component");
          const __enabled__atributes__ = componentWidget.getAttributeNames();
          componentBody.setAttribute("name", componentName);
          if (!componentWidget.hasAttribute("shadowed")) {
            componentBody.setAttribute("shadowed", "true");
          }
          __enabled__atributes__.forEach((attributeName) => {
            if (componentWidget.hasAttribute(attributeName)) {
              componentBody.setAttribute(attributeName, componentWidget?.getAttribute(attributeName));
              componentWidget.removeAttribute(attributeName);
            }
          });
          const data_attributenames = componentWidget.getAttributeNames().filter(function(a) {
            return a.startsWith("data-");
          }).map(function(a) {
            return a.split("-")[1];
          });
          data_attributenames.forEach(function(_attribute_name_) {
            componentBody.setAttribute("data-" + _attribute_name_, componentWidget?.getAttribute("data-" + _attribute_name_));
            componentWidget.removeAttribute("data-" + _attribute_name_);
          });
          [...componentWidget.children].forEach((element) => {
            componentBody.appendChild(element.cloneNode(true));
            element.remove();
          });
          componentWidget.append(componentBody);
        }
      };
    } else {
      exports._ComponentWidget_ = class _ComponentWidget_ extends QCObjectsWidgetNode {
        static {
          __name(this, "_ComponentWidget_");
        }
        constructor() {
          super();
          throw new Error("Class not implemented.");
        }
      };
    }
    (0, Export_1.Export)(exports._ComponentWidget_);
    var RegisterWidget = /* @__PURE__ */ __name((widgetName) => {
      if (platform_1.isBrowser) {
        customElements.define(widgetName, class extends exports._ComponentWidget_ {
        });
      } else {
        throw new Error("RegisterWidget is not implemented for non browser ecosystems yet.");
      }
    }, "RegisterWidget");
    exports.RegisterWidget = RegisterWidget;
    var RegisterWidgets = /* @__PURE__ */ __name((...args) => {
      const widgetList = [...args];
      widgetList.filter(function(widgetName) {
        return typeof widgetName === "string";
      }).map(function(widgetName) {
        return (0, exports.RegisterWidget)(widgetName);
      });
    }, "RegisterWidgets");
    exports.RegisterWidgets = RegisterWidgets;
    introspection_1._protected_code_(exports.RegisterWidget);
    introspection_1._protected_code_(exports.RegisterWidgets);
    (0, Export_1.Export)(exports.RegisterWidget);
    (0, Export_1.Export)(exports.RegisterWidgets);
  }
});

// node_modules/qcobjects/build/Controller.js
var require_Controller = __commonJS({
  "node_modules/qcobjects/build/Controller.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Controller = void 0;
    var ClassFactory_1 = require_ClassFactory();
    var getType_1 = require_getType();
    var InheritClass_1 = require_InheritClass();
    var Logger_1 = require_Logger();
    var New_1 = require_New();
    var Package_1 = require_Package();
    var platform_1 = require_platform();
    var Controller8 = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "Controller");
      }
      component;
      dependencies = [];
      constructor({ component, dependencies }) {
        super({ component, dependencies });
        this.component = component;
        this.dependencies = dependencies;
        if (typeof this.component === "undefined" || this.component === null) {
          throw Error(`${(0, getType_1.__getType__)(this)} must be called with a component`);
        }
      }
      // eslint-disable-next-line no-unused-vars
      fail(...args) {
        throw new Error("Method not implemented.");
      }
      routingSelectedAttr(attrName) {
        return this.component?.routingSelected.map((r) => {
          return r[attrName];
        }).filter(function(v) {
          return v;
        }).pop();
      }
      isTouchable() {
        return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      }
      onpress(subelementSelector, handler) {
        if (platform_1.isBrowser) {
          try {
            if (this.isTouchable()) {
              (this.component?.componentRoot?.subelements(subelementSelector))[0].addEventListener("touchstart", handler, {
                passive: true
              });
            } else {
              (this.component?.componentRoot?.subelements(subelementSelector))[0].addEventListener("click", handler, {
                passive: true
              });
            }
          } catch (e) {
            Logger_1.logger.debug(`An error ocurred: ${e}.`);
            Logger_1.logger.debug("No button to assign press event");
          }
        }
      }
      createRoutingController() {
        const controller = this;
        const component = controller.component;
        const controllerName = controller.routingSelectedAttr("controllerclass");
        if (typeof controllerName !== "undefined") {
          const _Controller2 = (0, ClassFactory_1.ClassFactory)(controllerName);
          if (typeof _Controller2 !== "undefined" && component !== null) {
            component.routingController = (0, New_1.New)(_Controller2, {
              component
            });
            if (typeof component.routingController !== "undefined" && Object.hasOwn(component.routingController, "done") && typeof component.routingController.done === "function") {
              component.routingController.done.call(component.routingController);
            }
          }
        }
      }
      done() {
      }
    };
    exports.Controller = Controller8;
    (0, Package_1.Package)("com.qcobjects.controllers", [
      Controller8
    ]);
  }
});

// node_modules/qcobjects/build/View.js
var require_View = __commonJS({
  "node_modules/qcobjects/build/View.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.View = void 0;
    var getType_1 = require_getType();
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var View2 = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "View");
      }
      constructor({ component = void 0, dependencies = [] }) {
        super({ component, dependencies });
        if (typeof this.component === "undefined" || this.component === "null") {
          throw Error(`${(0, getType_1.__getType__)(this)} must be called with a component`);
        }
      }
    };
    exports.View = View2;
    (0, Package_1.Package)("com.qcobjects.views", [
      View2
    ]);
  }
});

// node_modules/qcobjects/build/VO.js
var require_VO = __commonJS({
  "node_modules/qcobjects/build/VO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VO = void 0;
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var VO2 = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "VO");
      }
    };
    exports.VO = VO2;
    (0, Package_1.Package)("com.qcobjects.valueObjects", [
      VO2
    ]);
  }
});

// node_modules/qcobjects/build/Effect.js
var require_Effect = __commonJS({
  "node_modules/qcobjects/build/Effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Effect = void 0;
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var introspection_1 = require_introspection();
    var ClassFactory_1 = require_ClassFactory();
    var Effect3 = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "Effect");
      }
      // eslint-disable-next-line no-unused-vars
      done(...args) {
        throw new Error("Method not implemented.");
      }
      // eslint-disable-next-line no-unused-vars
      apply(...args) {
        throw new Error("Method not implemented.");
      }
      duration = 1e3;
      animate({ timing, draw, duration }) {
        const _self = this;
        const start = performance.now();
        requestAnimationFrame(/* @__PURE__ */ __name(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1)
            timeFraction = 1;
          const progress = timing(timeFraction);
          draw(Math.round(progress * 100));
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          } else {
            if (typeof _self !== "undefined" && _self !== null && Object.hasOwn(_self, "done") && (typeof _self.done).toLowerCase() === "function") {
              _self.done.call(_self);
            }
          }
        }, "animate"));
      }
    };
    exports.Effect = Effect3;
    (0, Package_1.Package)("com.qcobjects.effects.base", [
      Effect3
    ]);
    introspection_1._methods_((0, ClassFactory_1.ClassFactory)("Effect")).map((__c__) => {
      introspection_1._protected_code_(__c__);
      return __c__;
    });
  }
});

// node_modules/qcobjects/build/TransitionEffect.js
var require_TransitionEffect = __commonJS({
  "node_modules/qcobjects/build/TransitionEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransitionEffect = void 0;
    var Effect_1 = require_Effect();
    var Logger_1 = require_Logger();
    var Package_1 = require_Package();
    var ClassFactory_1 = require_ClassFactory();
    var TransitionEffect = class extends Effect_1.Effect {
      static {
        __name(this, "TransitionEffect");
      }
      duration = 385;
      defaultParams = {
        alphaFrom: 0,
        alphaTo: 1,
        angleFrom: 180,
        angleTo: 0,
        radiusFrom: 0,
        radiusTo: 30,
        scaleFrom: 0,
        scaleTo: 1
      };
      fitToHeight = false;
      fitToWidth = false;
      component;
      effects;
      apply({ alphaFrom, alphaTo, angleFrom, angleTo, radiusFrom, radiusTo, scaleFrom, scaleTo }) {
        const _transition_ = this;
        Logger_1.logger.info("EXECUTING TransitionEffect  ");
        const componentRoot = _transition_.component.componentRoot;
        if (typeof componentRoot !== "undefined" && componentRoot !== null) {
          if (_transition_.fitToHeight) {
            componentRoot.height = typeof componentRoot.offsetParent === "object" && componentRoot.offsetParent !== null ? componentRoot.offsetParent?.scrollHeight : componentRoot.getBoundingClientRect().height;
          }
          if (_transition_.fitToWidth) {
            componentRoot.width = typeof componentRoot.offsetParent === "object" && componentRoot.offsetParent !== null ? componentRoot.offsetParent?.scrollWidth : componentRoot.getBoundingClientRect().width;
          }
          if (_transition_.component.shadowed) {
            componentRoot.host.style.display = "block";
          } else {
            componentRoot.style.display = "block";
          }
          _transition_.effects.map((effectClassName) => {
            const __effectClass__ = (0, ClassFactory_1.ClassFactory)(effectClassName);
            const effectObj = new __effectClass__({});
            const effectClassMethod = effectObj.apply.bind(_transition_);
            const componentHost = _transition_.component.shadowed ? componentRoot.host : componentRoot;
            const effectParams = {
              alphaFrom,
              alphaTo,
              angleFrom,
              angleTo,
              radiusFrom,
              radiusTo,
              scaleFrom,
              scaleTo
            };
            effectClassMethod(componentHost, ...Object.values(effectParams));
            return effectClassName;
          });
        }
      }
    };
    exports.TransitionEffect = TransitionEffect;
    (0, Package_1.Package)("com.qcobjects.effects.transitions.base", [
      TransitionEffect
    ]);
  }
});

// node_modules/qcobjects/build/Timer.js
var require_Timer = __commonJS({
  "node_modules/qcobjects/build/Timer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Timer = void 0;
    var InheritClass_1 = require_InheritClass();
    var Package_1 = require_Package();
    var Timer = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "Timer");
      }
      duration = 1e3;
      alive = true;
      thread({ timing, intervalInterceptor, duration }) {
        const timer = this;
        const start = performance.now();
        requestAnimationFrame(/* @__PURE__ */ __name(function thread(time) {
          const elapsed = time - start;
          let timeFraction = elapsed / duration;
          if (timeFraction > 1)
            timeFraction = 1;
          const progress = timing(timeFraction, elapsed);
          intervalInterceptor(Math.round(progress * 100));
          if ((timeFraction < 1 || duration === -1) && timer.alive) {
            requestAnimationFrame(thread);
          }
        }, "thread"));
      }
    };
    exports.Timer = Timer;
    (0, Package_1.Package)("com.qcobjects.timing", [
      Timer
    ]);
  }
});

// node_modules/qcobjects/build/DDO.js
var require_DDO = __commonJS({
  "node_modules/qcobjects/build/DDO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DDO = void 0;
    var Export_1 = require_Export();
    var InheritClass_1 = require_InheritClass();
    var Logger_1 = require_Logger();
    var ObjectName_1 = require_ObjectName();
    var DDO = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "DDO");
      }
      constructor({ instance, name, fget, fset, value }) {
        super({
          instance,
          name,
          fget,
          fset,
          value
        });
        this._new_({
          instance,
          name,
          fget,
          fset,
          value
        });
      }
      _new_({ instance, name, fget, fset }) {
        const ddoInstance = this;
        var name = typeof name === "undefined" ? (0, ObjectName_1.ObjectName)(ddoInstance) : name;
        Object.defineProperty(instance, name, {
          set(val) {
            const _value = val;
            Logger_1.logger.debug("value changed " + name);
            let ret;
            if (typeof fset !== "undefined" && typeof fset === "function") {
              ret = fset(_value);
            } else {
              ret = _value;
            }
            instance["_" + name] = ret;
          },
          get() {
            const _value = instance["_" + name];
            Logger_1.logger.debug("returning value " + name);
            const is_ddo = /* @__PURE__ */ __name((v) => {
              if (typeof v === "object" && Object.hasOwn(v, "value")) {
                return v.value;
              }
              return v;
            }, "is_ddo");
            let ret;
            if (typeof fget !== "undefined" && typeof fget === "function") {
              ret = fget(is_ddo(_value));
            } else {
              ret = is_ddo(_value);
            }
            return ret;
          }
        });
      }
    };
    exports.DDO = DDO;
    (0, Export_1.Export)(DDO);
  }
});

// node_modules/qcobjects/build/Toggle.js
var require_Toggle = __commonJS({
  "node_modules/qcobjects/build/Toggle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toggle = void 0;
    var InheritClass_1 = require_InheritClass();
    var Logger_1 = require_Logger();
    var Package_1 = require_Package();
    var Toggle = class extends InheritClass_1.InheritClass {
      static {
        __name(this, "Toggle");
      }
      _toggle = false;
      _inverse = true;
      _positive = null;
      _negative = null;
      _dispatched = null;
      _args = {};
      constructor(positive, negative, args) {
        super({ positive, negative, args });
        this._new_({ positive, negative, args });
      }
      changeToggle() {
        this._toggle = !this._toggle;
      }
      _new_({ positive, negative, args }) {
        this._positive = positive;
        this._negative = negative;
        this._args = args;
      }
      fire() {
        const toggle = this;
        var _promise = new Promise(function(resolve, reject) {
          if (typeof toggle._positive === "function" && typeof toggle._negative === "function") {
            if (toggle._inverse) {
              toggle._dispatched = toggle._toggle ? toggle._negative.bind(toggle) : toggle._positive.bind(toggle);
            } else {
              toggle._dispatched = toggle._toggle ? toggle._positive.bind(toggle) : toggle._negative.bind(toggle);
            }
            toggle._dispatched?.call(toggle, toggle._args);
            resolve.call(_promise, toggle);
          } else {
            Logger_1.logger.debug("Toggle functions are not declared");
            reject.call(_promise, toggle);
          }
          return toggle;
        }).then(function(toggle2) {
          toggle2.changeToggle();
          return toggle2;
        }).catch(function(e) {
          Logger_1.logger.debug(e.toString());
          return toggle;
        }).finally(() => {
          return toggle;
        });
        return _promise;
      }
    };
    exports.Toggle = Toggle;
    (0, Package_1.Package)("com.qcobjects.tools.essentials", [
      Toggle
    ]);
  }
});

// node_modules/qcobjects/build/DocumentLayout.js
var require_DocumentLayout = __commonJS({
  "node_modules/qcobjects/build/DocumentLayout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDocumentLayout = void 0;
    var getDocumentLayout = /* @__PURE__ */ __name(function() {
      const h = /* @__PURE__ */ __name((w, h2) => {
        return w > h2 ? "landscape" : null;
      }, "h");
      const v = /* @__PURE__ */ __name((w, h2) => {
        return h2 > w ? "portrait" : null;
      }, "v");
      const square = /* @__PURE__ */ __name((w, h2) => {
        return w === h2 ? "square" : null;
      }, "square");
      return [
        h(document.documentElement.clientWidth, document.documentElement.clientHeight),
        v(document.documentElement.clientWidth, document.documentElement.clientHeight),
        square(document.documentElement.clientWidth, document.documentElement.clientHeight)
      ].filter((e) => e !== null).pop();
    }, "getDocumentLayout");
    exports.getDocumentLayout = getDocumentLayout;
  }
});

// node_modules/qcobjects/build/QCObjects.js
var require_QCObjects = __commonJS({
  "node_modules/qcobjects/build/QCObjects.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ function() {
      var ownKeys = /* @__PURE__ */ __name(function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      }, "ownKeys");
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._buildComponentsFromElements_ = exports.componentLoader = exports.serviceLoader = exports.captureFalseTouch = exports.Ready = exports.ready = exports._Ready = exports.New = exports.Processor = exports.shortCode = exports._super_ = exports.InheritClass = exports.Class = exports.Export = exports.ClassFactory = exports.Package = exports.isQCObjects_Object = exports.isQCObjects_Class = exports._CastProps = exports._Cast = exports.waitUntil = exports.ComplexStorageCache = exports.is_a = exports.__getType__ = exports.ObjectName = exports.__instanceID = exports.asyncLoad = exports._fireAsyncLoad = exports._LegacyCopy = exports.__is_raw_class__ = exports.subelements = exports.isNodeCommonJS = exports.isBrowser = exports.is_phonegap = exports._require_ = exports.Logger = exports.logger = exports._protected_code_ = exports._methods_ = exports._DOMCreateElement = exports._DataStringify = exports._QC_READY_LISTENERS = exports._QC_PACKAGES_IMPORTED = exports._QC_PACKAGES = exports._QC_CLASSES = exports.resetTop = exports._top = exports.qcobjects = exports.__top__ = exports.AssignPolyfill = void 0;
    exports.set = exports.get = exports.__make_global__ = exports.global = exports.__to_number = exports.getDocumentLayout = exports.findPackageNodePath = exports.Toggle = exports.DDO = exports.ArrayList = exports.ArrayCollection = exports.range = exports._tag_filter_ = exports.Timer = exports.TransitionEffect = exports.Effect = exports.VO = exports.Service = exports.JSONService = exports.ConfigService = exports.View = exports.Controller = exports.CONFIG = exports.RegisterWidgets = exports.RegisterWidget = exports._ComponentWidget_ = exports.RegisterClass = exports.GlobalSettings = exports.SourceCSS = exports.SourceJS = exports.DefaultTemplateHandler = exports._Crypt = exports.Component = exports.BackendMicroservice = exports.Import = exports.TagElements = exports.Tag = exports.setDefaultProcessors = exports.NamespaceRef = exports.ComponentURI = void 0;
    exports.AssignPolyfill = __importStar(require_assign());
    exports.__top__ = __importStar(require_top());
    exports.qcobjects = __importStar(require_MainProcess());
    var top_1 = require_top();
    Object.defineProperty(exports, "_top", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return top_1._top;
    }, "get") });
    Object.defineProperty(exports, "resetTop", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return top_1.resetTop;
    }, "get") });
    var PrimaryCollections_1 = require_PrimaryCollections();
    Object.defineProperty(exports, "_QC_CLASSES", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PrimaryCollections_1._QC_CLASSES;
    }, "get") });
    Object.defineProperty(exports, "_QC_PACKAGES", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PrimaryCollections_1._QC_PACKAGES;
    }, "get") });
    Object.defineProperty(exports, "_QC_PACKAGES_IMPORTED", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PrimaryCollections_1._QC_PACKAGES_IMPORTED;
    }, "get") });
    Object.defineProperty(exports, "_QC_READY_LISTENERS", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PrimaryCollections_1._QC_READY_LISTENERS;
    }, "get") });
    var DataStringify_1 = require_DataStringify();
    Object.defineProperty(exports, "_DataStringify", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return DataStringify_1._DataStringify;
    }, "get") });
    var DOMCreateElement_1 = require_DOMCreateElement();
    Object.defineProperty(exports, "_DOMCreateElement", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return DOMCreateElement_1._DOMCreateElement;
    }, "get") });
    var introspection_1 = require_introspection();
    Object.defineProperty(exports, "_methods_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return introspection_1._methods_;
    }, "get") });
    Object.defineProperty(exports, "_protected_code_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return introspection_1._protected_code_;
    }, "get") });
    var Logger_1 = require_Logger();
    Object.defineProperty(exports, "logger", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Logger_1.logger;
    }, "get") });
    Object.defineProperty(exports, "Logger", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Logger_1.Logger;
    }, "get") });
    var platform_1 = require_platform();
    Object.defineProperty(exports, "_require_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1._require_;
    }, "get") });
    Object.defineProperty(exports, "is_phonegap", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.is_phonegap;
    }, "get") });
    Object.defineProperty(exports, "isBrowser", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.isBrowser;
    }, "get") });
    Object.defineProperty(exports, "isNodeCommonJS", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.isNodeCommonJS;
    }, "get") });
    var subelements_1 = require_subelements();
    Object.defineProperty(exports, "subelements", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return subelements_1.subelements;
    }, "get") });
    var is_raw_class_1 = require_is_raw_class();
    Object.defineProperty(exports, "__is_raw_class__", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return is_raw_class_1.__is_raw_class__;
    }, "get") });
    var LegacyCopy_1 = require_LegacyCopy();
    Object.defineProperty(exports, "_LegacyCopy", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return LegacyCopy_1._LegacyCopy;
    }, "get") });
    var asyncLoad_1 = require_asyncLoad();
    Object.defineProperty(exports, "_fireAsyncLoad", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return asyncLoad_1._fireAsyncLoad;
    }, "get") });
    Object.defineProperty(exports, "asyncLoad", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return asyncLoad_1.asyncLoad;
    }, "get") });
    var IncrementInstanceID_1 = require_IncrementInstanceID();
    Object.defineProperty(exports, "__instanceID", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return IncrementInstanceID_1.__instanceID;
    }, "get") });
    var ObjectName_1 = require_ObjectName();
    Object.defineProperty(exports, "ObjectName", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ObjectName_1.ObjectName;
    }, "get") });
    var getType_1 = require_getType();
    Object.defineProperty(exports, "__getType__", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return getType_1.__getType__;
    }, "get") });
    var is_a_1 = require_is_a();
    Object.defineProperty(exports, "is_a", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return is_a_1.is_a;
    }, "get") });
    var ComplexStorageCache_1 = require_ComplexStorageCache();
    Object.defineProperty(exports, "ComplexStorageCache", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ComplexStorageCache_1.ComplexStorageCache;
    }, "get") });
    var waitUntil_1 = require_waitUntil();
    Object.defineProperty(exports, "waitUntil", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return waitUntil_1.waitUntil;
    }, "get") });
    var Cast_1 = require_Cast();
    Object.defineProperty(exports, "_Cast", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Cast_1._Cast;
    }, "get") });
    Object.defineProperty(exports, "_CastProps", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Cast_1._CastProps;
    }, "get") });
    var isQCObjects_1 = require_isQCObjects();
    Object.defineProperty(exports, "isQCObjects_Class", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return isQCObjects_1.isQCObjects_Class;
    }, "get") });
    Object.defineProperty(exports, "isQCObjects_Object", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return isQCObjects_1.isQCObjects_Object;
    }, "get") });
    var Package_1 = require_Package();
    Object.defineProperty(exports, "Package", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Package_1.Package;
    }, "get") });
    var ClassFactory_1 = require_ClassFactory();
    Object.defineProperty(exports, "ClassFactory", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ClassFactory_1.ClassFactory;
    }, "get") });
    var Export_1 = require_Export();
    Object.defineProperty(exports, "Export", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Export_1.Export;
    }, "get") });
    var Class_1 = require_Class();
    Object.defineProperty(exports, "Class", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Class_1.Class;
    }, "get") });
    var InheritClass_1 = require_InheritClass();
    Object.defineProperty(exports, "InheritClass", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return InheritClass_1.InheritClass;
    }, "get") });
    var super_1 = require_super();
    Object.defineProperty(exports, "_super_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return super_1._super_;
    }, "get") });
    var shortCode_1 = require_shortCode();
    Object.defineProperty(exports, "shortCode", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return shortCode_1.shortCode;
    }, "get") });
    var Processor_1 = require_Processor();
    Object.defineProperty(exports, "Processor", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Processor_1.Processor;
    }, "get") });
    var New_1 = require_New();
    Object.defineProperty(exports, "New", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return New_1.New;
    }, "get") });
    var Ready_1 = require_Ready();
    Object.defineProperty(exports, "_Ready", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Ready_1._Ready;
    }, "get") });
    Object.defineProperty(exports, "ready", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Ready_1.ready;
    }, "get") });
    Object.defineProperty(exports, "Ready", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Ready_1.Ready;
    }, "get") });
    var captureFalseTouch_1 = require_captureFalseTouch();
    Object.defineProperty(exports, "captureFalseTouch", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return captureFalseTouch_1.captureFalseTouch;
    }, "get") });
    var serviceLoader_1 = require_serviceLoader();
    Object.defineProperty(exports, "serviceLoader", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return serviceLoader_1.serviceLoader;
    }, "get") });
    var componentLoader_1 = require_componentLoader();
    Object.defineProperty(exports, "componentLoader", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return componentLoader_1.componentLoader;
    }, "get") });
    var ComponentFactory_1 = require_ComponentFactory();
    Object.defineProperty(exports, "_buildComponentsFromElements_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ComponentFactory_1._buildComponentsFromElements_;
    }, "get") });
    Object.defineProperty(exports, "ComponentURI", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ComponentFactory_1.ComponentURI;
    }, "get") });
    var NamespaceRef_1 = require_NamespaceRef();
    Object.defineProperty(exports, "NamespaceRef", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return NamespaceRef_1.NamespaceRef;
    }, "get") });
    var defaultProcessors_1 = require_defaultProcessors();
    Object.defineProperty(exports, "setDefaultProcessors", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return defaultProcessors_1.setDefaultProcessors;
    }, "get") });
    var Tag_1 = require_Tag();
    Object.defineProperty(exports, "Tag", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Tag_1.Tag;
    }, "get") });
    Object.defineProperty(exports, "TagElements", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Tag_1.TagElements;
    }, "get") });
    var Import_1 = require_Import();
    Object.defineProperty(exports, "Import", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Import_1.Import;
    }, "get") });
    var BackendMicroservice_1 = require_BackendMicroservice();
    Object.defineProperty(exports, "BackendMicroservice", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return BackendMicroservice_1.BackendMicroservice;
    }, "get") });
    var Component_1 = require_Component();
    Object.defineProperty(exports, "Component", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Component_1.Component;
    }, "get") });
    var Crypt_1 = require_Crypt();
    Object.defineProperty(exports, "_Crypt", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Crypt_1._Crypt;
    }, "get") });
    var DefaultTemplateHandler_1 = require_DefaultTemplateHandler();
    Object.defineProperty(exports, "DefaultTemplateHandler", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return DefaultTemplateHandler_1.DefaultTemplateHandler;
    }, "get") });
    var SourceJS_1 = require_SourceJS();
    Object.defineProperty(exports, "SourceJS", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return SourceJS_1.SourceJS;
    }, "get") });
    var SourceCSS_1 = require_SourceCSS();
    Object.defineProperty(exports, "SourceCSS", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return SourceCSS_1.SourceCSS;
    }, "get") });
    var globalSettings_1 = require_globalSettings();
    Object.defineProperty(exports, "GlobalSettings", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return globalSettings_1.GlobalSettings;
    }, "get") });
    var RegisterClass_1 = require_RegisterClass();
    Object.defineProperty(exports, "RegisterClass", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return RegisterClass_1.RegisterClass;
    }, "get") });
    var WidgetsFactory_1 = require_WidgetsFactory();
    Object.defineProperty(exports, "_ComponentWidget_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return WidgetsFactory_1._ComponentWidget_;
    }, "get") });
    Object.defineProperty(exports, "RegisterWidget", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return WidgetsFactory_1.RegisterWidget;
    }, "get") });
    Object.defineProperty(exports, "RegisterWidgets", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return WidgetsFactory_1.RegisterWidgets;
    }, "get") });
    var CONFIG_1 = require_CONFIG();
    Object.defineProperty(exports, "CONFIG", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return CONFIG_1.CONFIG;
    }, "get") });
    var Controller_1 = require_Controller();
    Object.defineProperty(exports, "Controller", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Controller_1.Controller;
    }, "get") });
    var View_1 = require_View();
    Object.defineProperty(exports, "View", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return View_1.View;
    }, "get") });
    var Service_1 = require_Service();
    Object.defineProperty(exports, "ConfigService", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Service_1.ConfigService;
    }, "get") });
    Object.defineProperty(exports, "JSONService", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Service_1.JSONService;
    }, "get") });
    Object.defineProperty(exports, "Service", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Service_1.Service;
    }, "get") });
    var VO_1 = require_VO();
    Object.defineProperty(exports, "VO", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return VO_1.VO;
    }, "get") });
    var Effect_1 = require_Effect();
    Object.defineProperty(exports, "Effect", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Effect_1.Effect;
    }, "get") });
    var TransitionEffect_1 = require_TransitionEffect();
    Object.defineProperty(exports, "TransitionEffect", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return TransitionEffect_1.TransitionEffect;
    }, "get") });
    var Timer_1 = require_Timer();
    Object.defineProperty(exports, "Timer", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Timer_1.Timer;
    }, "get") });
    var tag_filter_1 = require_tag_filter();
    Object.defineProperty(exports, "_tag_filter_", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return tag_filter_1._tag_filter_;
    }, "get") });
    var range_1 = require_range();
    Object.defineProperty(exports, "range", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return range_1.range;
    }, "get") });
    var ArrayCollection_1 = require_ArrayCollection();
    Object.defineProperty(exports, "ArrayCollection", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ArrayCollection_1.ArrayCollection;
    }, "get") });
    Object.defineProperty(exports, "ArrayList", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ArrayCollection_1.ArrayList;
    }, "get") });
    var DDO_1 = require_DDO();
    Object.defineProperty(exports, "DDO", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return DDO_1.DDO;
    }, "get") });
    var Toggle_1 = require_Toggle();
    Object.defineProperty(exports, "Toggle", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Toggle_1.Toggle;
    }, "get") });
    var findPackageNodePath_1 = require_findPackageNodePath();
    Object.defineProperty(exports, "findPackageNodePath", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return findPackageNodePath_1.findPackageNodePath;
    }, "get") });
    var DocumentLayout_1 = require_DocumentLayout();
    Object.defineProperty(exports, "getDocumentLayout", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return DocumentLayout_1.getDocumentLayout;
    }, "get") });
    var mathFunctions_1 = require_mathFunctions();
    Object.defineProperty(exports, "__to_number", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return mathFunctions_1.__to_number;
    }, "get") });
    var top_2 = require_top();
    Object.defineProperty(exports, "global", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return top_2._top;
    }, "get") });
    var make_global_1 = require_make_global();
    Object.defineProperty(exports, "__make_global__", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return make_global_1.__make_global__;
    }, "get") });
    var top_3 = require_top();
    Object.defineProperty(exports, "get", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return top_3.get;
    }, "get") });
    Object.defineProperty(exports, "set", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return top_3.set;
    }, "get") });
  }
});

// src/index.ts
var import_qcobjects25 = __toESM(require_QCObjects());

// src/ts/org.qcobjects.i18n_messages.ts
var import_qcobjects = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.models.ts
var import_qcobjects2 = __toESM(require_QCObjects());
var Contact = class extends import_qcobjects2.VO {
  static {
    __name(this, "Contact");
  }
};
(0, import_qcobjects2.Package)("org.qcobjects.models", [
  Contact
]);

// src/ts/org.qcobjects.components.ts
var import_qcobjects7 = __toESM(require_QCObjects());

// src/ts/org.qcobjects.effects.base.ts
var import_qcobjects3 = __toESM(require_QCObjects());
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
    super.animate({
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
    super.animate({
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
    super.animate({
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
};
(0, import_qcobjects3.Package)("org.qcobjects.effects.base", [
  Fade,
  Move
]);

// src/ts/org.qcobjects.effects.extended.ts
var import_qcobjects4 = __toESM(require_QCObjects());
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
    super.animate({
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
};
var RotateY = class extends import_qcobjects4.Effect {
  static {
    __name(this, "RotateY");
  }
  duration = 1e3;
  static duration;
  static apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    super.animate({
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
};
var RotateZ = class extends import_qcobjects4.Effect {
  static {
    __name(this, "RotateZ");
  }
  duration = 1e3;
  apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    super.animate({
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
};
var Rotate = class extends import_qcobjects4.Effect {
  static {
    __name(this, "Rotate");
  }
  duration = 1e3;
  apply(element, angleFrom, angleTo) {
    const da = angleTo - angleFrom;
    super.animate({
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
};
var Radius = class extends import_qcobjects4.Effect {
  static {
    __name(this, "Radius");
  }
  duration = 1e3;
  apply(element, radiusFrom, radiusTo) {
    const dr = radiusTo - radiusFrom;
    super.animate({
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
};
var Resize = class extends import_qcobjects4.Effect {
  static {
    __name(this, "Resize");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    super.animate({
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
};
var WipeLeft = class extends import_qcobjects4.Effect {
  static {
    __name(this, "WipeLeft");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    super.animate({
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
};
var WipeRight = class extends import_qcobjects4.Effect {
  static {
    __name(this, "WipeRight");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    super.animate({
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
};
var WipeUp = class extends import_qcobjects4.Effect {
  static {
    __name(this, "WipeUp");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    super.animate({
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
};
var WipeDown = class extends import_qcobjects4.Effect {
  static {
    __name(this, "WipeDown");
  }
  duration = 1e3;
  apply(element, scaleFrom, scaleTo) {
    const ds = scaleTo - scaleFrom;
    super.animate({
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

// src/ts/org.qcobjects.modal.effects.ts
var import_qcobjects5 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.base.components.ts
var import_qcobjects6 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.components.ts
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

// src/ts/org.qcobjects.components.grid.ts
var import_qcobjects8 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.components.list.ts
var import_qcobjects9 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.components.slider.ts
var import_qcobjects10 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.components.notifications.ts
var import_qcobjects11 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.components.splashscreen.ts
var import_qcobjects12 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.controllers.ts
var import_qcobjects13 = __toESM(require_QCObjects());
var GenericController = class extends import_qcobjects13.Controller {
  static {
    __name(this, "GenericController");
  }
};
(0, import_qcobjects13.Package)("org.qcobjects.controllers", [
  GenericController
]);

// src/ts/org.qcobjects.controllers.list.ts
var import_qcobjects14 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.controllers.grid.ts
var import_qcobjects15 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.controllers.slider.ts
var import_qcobjects16 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.controllers.form.ts
var import_qcobjects17 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.controllers.swagger.ts
var import_qcobjects18 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.modal.controllers.ts
var import_qcobjects19 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.views.ts
var import_qcobjects20 = __toESM(require_QCObjects());
var GridView = class extends import_qcobjects20.View {
  static {
    __name(this, "GridView");
  }
};
(0, import_qcobjects20.Package)("org.qcobjects.views", [
  GridView
]);

// src/ts/org.qcobjects.tools.canvas.ts
var import_qcobjects21 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.tools.layouts.ts
var import_qcobjects22 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.cloud.auth.session.usertoken.ts
var import_qcobjects23 = __toESM(require_QCObjects());
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

// src/ts/org.qcobjects.cloud.auth.session.data.ts
var import_qcobjects24 = __toESM(require_QCObjects());
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

// src/index.ts
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
var index_default = import_qcobjects25._top;
export {
  BasicLayout,
  ButtonField,
  CanvasTool,
  Contact,
  CubeSplashScreenComponent,
  DataGridController,
  EmailField,
  Fade,
  FormController,
  FormField,
  FormValidations,
  GenericController,
  GridComponent,
  GridController,
  GridItemComponent,
  GridView,
  InputField,
  ListComponent,
  ListController,
  ListItemComponent,
  ModalComponent,
  ModalController,
  ModalEnclosureComponent,
  ModalFade,
  ModalMoveDown,
  ModalMoveUp,
  Move,
  MoveXInFromLeft,
  MoveXInFromRight,
  MoveYInFromBottom,
  MoveYInFromTop,
  NotificationComponent,
  Radius,
  Resize,
  Rotate,
  RotateX,
  RotateY,
  RotateZ,
  SessionData,
  SessionUserToken,
  ShadowedComponent,
  SlideItemComponent,
  SlideListComponent,
  SliderComponent,
  SliderController,
  SplashScreenComponent,
  SwaggerUIComponent,
  SwaggerUIController,
  TextField,
  VideoSplashScreenComponent,
  WipeDown,
  WipeLeft,
  WipeRight,
  WipeUp,
  index_default as default,
  i18n_messages
};
//# sourceMappingURL=index.mjs.map
