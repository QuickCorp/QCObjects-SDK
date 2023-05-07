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
(function __qcobjects_sdk__ (_top) {
  "use strict";
  if (typeof Object.defineProperty !== "undefined" && typeof _top !== "undefined"){
    try {
      Object.defineProperty(_top,"__qcobjects_sdk__", {
        enumerable: true,
        configurable: false,
        writable: false,
        value: __qcobjects_sdk__,
      });
    } catch (e){
      if (typeof _top.__qcobjects_sdk__ !== "undefined"){
        _top.__qcobjects_sdk__.__loaded__ = true;
      }
    }
  }

  if (typeof _top.__qcobjects_sdk__.__loaded__ === "undefined"){
    _top.__qcobjects_sdk__.__loaded__ = true;
    if (typeof _top === "undefined"){
      throw Error("Top context empty: It should either global, module or window");
    }
    var global = _top;
    _top.global = global;
    var isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self;
    var isNodeCommonJS = (typeof module !== "undefined") ? (true): (false);
    var remoteImportsPath = CONFIG.get("remoteImportsPath");
    var relativeImportPath = CONFIG.get("relativeImportPath");
    var external = (!CONFIG.get("useLocalSDK")) ? (true) : (false);
    if (external && !isNodeCommonJS) {
      CONFIG.set("remoteImportsPath", "https://sdk.qcobjects.dev/v2.4/src/js/");
    } else {
      CONFIG.set("relativeImportPath", "qcobjects-sdk/src/js/");
    }
    if (typeof _top._DOMCreateElement === "undefined") {
      _top._DOMCreateElement = function (elementName) {
        var _ret_;
        if (isBrowser) {
          _ret_ = document.createElement(elementName);
        } else {
          _ret_ = {};
        }
        return _ret_;
      };
    }
    const __start__ = GlobalSettings.__start__.bind(_top);

    var _imports_;
    if (isBrowser && !isNodeCommonJS) {
      _imports_ = [
        Import("org.qcobjects.i18n_messages", function () {}, external),
        Import("org.qcobjects.models", function () {}, external),
        Import("org.qcobjects.components", function () {}, external),
        Import("org.qcobjects.components.grid", function () {}, external),
        Import("org.qcobjects.components.list", function () {}, external),
        Import("org.qcobjects.components.slider", function () {}, external),
        Import("org.qcobjects.components.notifications", function () {}, external),
        Import("org.qcobjects.components.splashscreen", function () {}, external),
        Import("org.qcobjects.controllers", function () {}, external),
        Import("org.qcobjects.controllers.grid", function () {}, external),
        Import("org.qcobjects.controllers.list", function () {}, external),
        Import("org.qcobjects.controllers.slider", function () {}, external),
        Import("org.qcobjects.controllers.form", function () {}, external),
        Import("org.qcobjects.controllers.swagger", function () {}, external),
        Import("org.qcobjects.effects", function () {}, external),
        Import("org.qcobjects.modal.controllers", function () {}, external),
        Import("org.qcobjects.views", function () {}, external),
        Import("org.qcobjects.tools.canvas", function () {}, external),
        Import("org.qcobjects.tools.layouts", function () {}, external),
        Import("org.qcobjects.cloud.auth.session.usertoken", function () {}, external),
        Import("org.qcobjects.cloud.auth.session.data", function () {}, external)
      ];
    } else if (typeof require !== "undefined") {
      // non-browsers environment
      _imports_ = [
        new Promise ((resolve, reject)=> {
          require("qcobjects-sdk/js/org.qcobjects.i18n_messages");
          require("qcobjects-sdk/js/org.qcobjects.models");
          require("qcobjects-sdk/js/org.qcobjects.components");
          require("qcobjects-sdk/js/org.qcobjects.components.grid");
          require("qcobjects-sdk/js/org.qcobjects.components.list");
          require("qcobjects-sdk/js/org.qcobjects.components.slider");
          require("qcobjects-sdk/js/org.qcobjects.components.notifications");
          require("qcobjects-sdk/js/org.qcobjects.components.splashscreen");
          require("qcobjects-sdk/js/org.qcobjects.controllers");
          require("qcobjects-sdk/js/org.qcobjects.controllers.grid");
          require("qcobjects-sdk/js/org.qcobjects.controllers.list");
          require("qcobjects-sdk/js/org.qcobjects.controllers.slider");
          require("qcobjects-sdk/js/org.qcobjects.controllers.form");
          require("qcobjects-sdk/js/org.qcobjects.controllers.swagger");
          require("qcobjects-sdk/js/org.qcobjects.effects");
          require("qcobjects-sdk/js/org.qcobjects.modal.controllers");
          require("qcobjects-sdk/js/org.qcobjects.views");
          require("qcobjects-sdk/js/org.qcobjects.tools.canvas");
          require("qcobjects-sdk/js/org.qcobjects.tools.layouts");
          require("qcobjects-sdk/js/org.qcobjects.cloud.auth.session.usertoken");
          require("qcobjects-sdk/js/org.qcobjects.cloud.auth.session.data");
          resolve()
        })
      ]
      
    }
    _top._sdk_ = Promise.all(_imports_).then(()=>{
      CONFIG.set("useSDK", true);
      CONFIG.set("remoteImportsPath", remoteImportsPath);
      CONFIG.set("relativeImportPath", relativeImportPath);
      __start__();
    });
  
  }

}).call(null, (typeof module === "object" && typeof module.exports === "object") ? (
  module.exports = (typeof globalThis !== "undefined"
  ? globalThis
  : typeof self !== "undefined"
  ? self
  : typeof window !== "undefined"
  ? window
  : typeof global !== "undefined"
  ? global
  : {})
) : ((typeof global === "object") ? (global) : (
  (typeof window === "object") ? (window) : ({})
)));