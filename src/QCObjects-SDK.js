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
  if (typeof __qcobjects_sdk__.__loaded__ === "undefined"){
    if (typeof _top === "undefined"){
      throw Error("Top context empty: It should either global, module or window");
    }
    var global = _top;
    _top.global = global;
    var isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self;
    var remoteImportsPath = CONFIG.get("remoteImportsPath");
    var relativeImportPath = CONFIG.get("relativeImportPath");
    var external = (!CONFIG.get("useLocalSDK")) ? (true) : (false);
    if (external) {
      CONFIG.set("remoteImportsPath", "https://sdk.qcobjects.dev/v2.4/js/");
    } else {
      CONFIG.set("relativeImportPath", "qcobjects-sdk/js/");
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
    var _imports_;
    if (isBrowser) {
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
    } else {
      // non-browsers environment
      (function loadBackendSDKRoutes(){
        if (!loadBackendSDKRoutes.loaded){
          let backend = CONFIG.get("backend");
          if (typeof backend === "undefined"){
            backend = {};
          }
          if (typeof backend.routes === "undefined"){
            backend.routes = [];
          }
          backend.routes = backend.routes.concat([
            {
              "name":"QCObjects-SDK",
              "description":"Redirection of QCObjects SDK",
              "path":"^/qcobjects-sdk/(.*)$",
              "microservice":"com.qcobjects.backend.microservice.static",
              "redirect_to": "./node_modules/qcobjects-sdk/$1",
              "responseHeaders":{},
              "cors":{
                "allow_origins":"*"
              }
            },
            {
              "name":"QCObjects-SDK.js",
              "description":"Redirection of QCObjects SDK",
              "path":"^/js/packages/QCObjects-SDK.js$",
              "microservice":"com.qcobjects.backend.microservice.static",
              "redirect_to": "./node_modules/qcobjects-sdk/QCObjects-SDK.js",
              "responseHeaders":{},
              "cors":{
                "allow_origins":"*"
              }
            }
          ]);
          CONFIG.set("backend", backend);
          loadBackendSDKRoutes.loaded = true;
        }
      })();
  
      var _relative_path_ = "qcobjects-sdk/js/";
      _imports_ = [
        Import(_relative_path_ + "org.qcobjects.models", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.components", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.controllers", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.views", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.effects", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.tools.canvas", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.tools.layouts", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.cloud.auth.session.usertoken", function () {}, external),
        Import(_relative_path_ + "org.qcobjects.cloud.auth.session.data", function () {}, external)
      ];
  
      
    }
    const __start__ = GlobalSettings.__start__.bind(_top);
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