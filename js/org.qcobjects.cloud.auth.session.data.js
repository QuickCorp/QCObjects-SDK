/**
 * QCObjects SDK 2.3
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
(function() {
"use strict";

Package("org.qcobjects.cloud.auth.session.data",[
  Class ("SessionData",Object, {
    __session_container__: null,
    setSessionContainer () {
      this.__session_container__ = [...arguments];
    },
    getSessionContainer () {
      if (typeof this.__session_container__ === "undefined" || this.__session_container__ === null){
        throw new Error("You need to set a session container first: sessionData.setSessionContainer(...arguments)");
      }
      return this.__session_container__;
    },
    getSessionData () {
      var __instance__ = this;
      var s = sessionStorage.getItem(`${__instance__.index(...arguments)}`);
      var sessionData = JSON.parse(s);
      return sessionData;
    },
    index () {
      if (typeof SessionUserToken === "undefined") {
        throw new Error("You need to import SessionUserToken first: Import (\"org.qcobjects.cloud.auth.session.usertoken\")");
      }
      return `session_${btoa(SessionUserToken.getGlobalUserToken(...arguments))}`;
    },
    save () {
      var __instance__ = this;
      var s = _DataStringify(__instance__.sessionData);
      sessionStorage.setItem(`${__instance__.index(...arguments)}`, s);
    },
    get (name) {
      var __instance__ = this;
      var sessionData = __instance__.getSessionData(__instance__.getSessionContainer());
      return sessionData[name];
    },
    set (name, value) {
      var __instance__ = this;
      var __session_container__ = __instance__.getSessionContainer();
      var sessionData = __instance__.getSessionData(__session_container__);
      if (typeof sessionData === "undefined" || sessionData === null) {
        sessionData = {};
      }
      __instance__.sessionData = sessionData;
      __instance__.sessionData[name] = value;
      __instance__.save(__session_container__);
    }
  })
]);

}).call(null);
