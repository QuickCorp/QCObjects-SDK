import { CONFIG, ComplexStorageCache, InheritClass, New, Package, _Crypt } from "qcobjects";

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

const _top = (typeof module === "object" && typeof module.exports === "object") ? (
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
));

(function (global) {
  "use strict";

  class SessionUserToken extends InheritClass{
    static user = {};
    __cache__:ComplexStorageCache;

    constructor(o:any){
     super(o);
     // eslint-disable-next-line @typescript-eslint/no-this-alias
     const __instance__ = this;
     this.__cache__ = new ComplexStorageCache({
       index: __instance__.__instanceID.toString(),
       load() {
         let __token__;
         if (typeof navigator !== "undefined" && typeof origin !== "undefined") {
           __token__ = _Crypt.encrypt(`${navigator.userAgent}|${o.username}|${(+(new Date())).toString()}`, origin);
         } else {
           __token__ = _Crypt.encrypt(`${o.username}|${(+(new Date())).toString()}`, CONFIG.get("domain", "localhost"));
         }
         SessionUserToken.user = {
           priority: __instance__.__instanceID.toString(),
           token: __token__
         };
         return SessionUserToken.user;
       },
       alternate(cacheController) {
        SessionUserToken.user = cacheController?.cache.getCached(__instance__.__instanceID.toString()); // setting dataObject with the cached value 
       }
     });

    }

    static generateIndex(s:any) {
      return (typeof Buffer !== "undefined") ? (Buffer.from(s, "ascii").toString("base64")) : (btoa(s));
    }

    static getGlobalUser(...args:any[]) {
      const username = [args].join("|");
      const __index__ = "userToken_" + SessionUserToken.generateIndex(username);
      if (typeof (global as any).get(__index__) === "undefined" || (global as any).get(__index__) === null) {
        (global as any).set(__index__, New(SessionUserToken, {
          username
        }));
      }
      SessionUserToken.user = (global as any).get(__index__).user;
      return (global as any).get(__index__).user;
    }

    static getGlobalUserToken(...args:any[]) {
      return SessionUserToken.getGlobalUser(args).token;
    }

    static getGlobalUserId(...args:any[]) {
      return SessionUserToken.getGlobalUser(args).id;
    }

    static getGlobalUserPriority(...args:any[]) {
      return SessionUserToken.getGlobalUser(args).priority;
    }

    static getLoginCredentialsToken(username:string, password:string) {
      return _Crypt.encrypt(`${username}${password}`, SessionUserToken.getGlobalUserToken(username));
    }

    static closeGlobalSession(...args:any[]) {
      SessionUserToken.getGlobalUser(args);
      const username = [args].join("|");
      const __index__ = "userToken_" + SessionUserToken.generateIndex(username);
      if (typeof (global as any).get(__index__) !== "undefined") {
        (global as any).get(__index__).__cache__.clear();
        (global as any).set(__index__, null);
        SessionUserToken.user = {};
      }
    }
  }

  Package("org.qcobjects.cloud.auth.session.usertoken", [
    SessionUserToken
  ]);


})(_top);

const SessionUserToken = (_top as any).SessionUserToken;

export {SessionUserToken};
