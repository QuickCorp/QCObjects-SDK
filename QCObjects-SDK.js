/**
 * QCObjects SDK 1.01
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
(function(_top) {
  "use strict";
  var isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self;
  var remoteImportsPath = CONFIG.get('remoteImportsPath');
  var external = (!CONFIG.get('useLocalSDK'))?(true):(false);
  CONFIG.set('remoteImportsPath','https://sdk.qcobjects.dev/js/');
  if (typeof _top._DOMCreateElement === 'undefined'){
    _top._DOMCreateElement = function (elementName) {
      var _ret_;
      if (isBrowser) {
        _ret_ = document.createElement(elementName);
      } else {
        _ret_ = {};
      }
      return _ret_;
    }
  }
  var _imports_;
  if (isBrowser){
    _imports_ = [
      Import('org.quickcorp.i18n_messages',function (){},external),
      Import('org.quickcorp.models',function (){},external),
      Import('org.quickcorp.components',function (){},external),
      Import('org.quickcorp.components.splashscreen',function (){},external),
      Import('org.quickcorp.controllers',function (){},external),
      Import("org.qcobjects.controllers.grid",function (){},external);
      Import("org.qcobjects.controllers.form",function (){},external);
      Import("org.qcobjects.controllers.swagger",function (){},external);
      Import("org.qcobjects.modal.controllers",function (){},external);
      Import('org.quickcorp.modal.effects',function (){},external),
      Import('org.quickcorp.views',function (){},external),
      Import('org.quickcorp.effects',function (){},external),
      Import('org.quickcorp.tools.canvas',function (){},external),
      Import('org.quickcorp.tools.layouts',function (){},external)
    ];
  } else {
    // non-browsers environment
    var _relative_path_ = 'qcobjects-sdk/js/';
    _imports_ = [
      Import(_relative_path_+'org.quickcorp.models',function (){},external),
      Import(_relative_path_+'org.quickcorp.components',function (){},external),
      Import(_relative_path_+'org.quickcorp.controllers',function (){},external),
      Import(_relative_path_+'org.quickcorp.views',function (){},external),
      Import(_relative_path_+'org.quickcorp.effects',function (){},external),
      Import(_relative_path_+'org.quickcorp.modal.effects',function (){},external),
      Import(_relative_path_+'org.quickcorp.tools.canvas',function (){},external),
      Import(_relative_path_+'org.quickcorp.tools.layouts',function (){},external)
    ];
  }
  _top._sdk_ = Promise.all(_imports_).then(function (){
    CONFIG.set('useSDK',true);
    CONFIG.set('remoteImportsPath',remoteImportsPath);

    _top.__start__();

  });


}).call(null,(typeof module === "object" && typeof module.exports === "object")?(module.exports = global):((typeof global === "object")?(global):(
  (typeof window === "object")?(window):({})
)));
