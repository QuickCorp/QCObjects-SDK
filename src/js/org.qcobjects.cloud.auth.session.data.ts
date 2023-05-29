import { Package, InheritClass, _DataStringify } from "qcobjects";
import { SessionUserToken } from "./org.qcobjects.cloud.auth.session.usertoken";

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
(function () {
  "use strict";
  Package("org.qcobjects.cloud.auth.session.data", [

    class SessionData extends InheritClass{

      __session_container__:any = null;

      /**
       * Sets the session container
       * 
       * @param {*} sessionContainer1, sessionContainer2, ...
       *
       */
      setSessionContainer() {
        // eslint-disable-next-line prefer-rest-params
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
      getSessionData(...args: any[]) {
        const __instance__ = this;
        // eslint-disable-next-line prefer-rest-params
        const s = sessionStorage.getItem(`${__instance__.index(args)}`);
        let sessionData = JSON.parse(s);
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
      index(...args: any[]) {
        if (typeof SessionUserToken === "undefined") {
          throw new Error("You need to import SessionUserToken first: Import (\"org.qcobjects.cloud.auth.session.usertoken\")");
        }
        return `session_${btoa(SessionUserToken.getGlobalUserToken(args))}`;
      }

      /**
       * Saves the session instance
       *
       */
      save() {
        const __instance__ = this;
        const s = _DataStringify(__instance__.sessionData);
        sessionStorage.setItem(`${__instance__.index(...arguments)}`, s);
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
        const __instance__ = this;
        const sessionData = __instance__.getSessionData(__instance__.getSessionContainer());
        return (typeof sessionData[name] !== "undefined") ? (sessionData[name]) : (defaultValue);
      }

      /**
       *
       * Sets the session value
       * 
       * @param {*} name
       * @param {*} value
       */
      set(name, value) {
        const __instance__ = this;
        const __session_container__ = __instance__.getSessionContainer();
        const sessionData = __instance__.getSessionData(__session_container__);
        __instance__.sessionData = sessionData;
        __instance__.sessionData[name] = value;
        __instance__.save(__session_container__);
      }

    }

  ]);

})();
