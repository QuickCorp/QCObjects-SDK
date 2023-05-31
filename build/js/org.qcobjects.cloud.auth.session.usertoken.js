"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUserToken = void 0;
const qcobjects_1 = require("qcobjects");
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
const _top = (typeof module === "object" && typeof module.exports === "object") ? (module.exports = (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
            ? window
            : typeof global !== "undefined"
                ? global
                : {})) : ((typeof global === "object") ? (global) : ((typeof window === "object") ? (window) : ({})));
(function (global) {
    "use strict";
    class SessionUserToken extends qcobjects_1.InheritClass {
        constructor(o) {
            super(o);
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const __instance__ = this;
            this.__cache__ = new qcobjects_1.ComplexStorageCache({
                index: __instance__.__instanceID.toString(),
                load() {
                    let __token__;
                    if (typeof navigator !== "undefined" && typeof origin !== "undefined") {
                        __token__ = qcobjects_1._Crypt.encrypt(`${navigator.userAgent}|${o.username}|${(+(new Date())).toString()}`, origin);
                    }
                    else {
                        __token__ = qcobjects_1._Crypt.encrypt(`${o.username}|${(+(new Date())).toString()}`, qcobjects_1.CONFIG.get("domain", "localhost"));
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
        static generateIndex(s) {
            return (typeof Buffer !== "undefined") ? (Buffer.from(s, "ascii").toString("base64")) : (btoa(s));
        }
        getGlobalUser(...args) {
            const username = [args].join("|");
            const __index__ = "userToken_" + SessionUserToken.generateIndex(username);
            if (typeof global.get(__index__) === "undefined" || global.get(__index__) === null) {
                global.set(__index__, (0, qcobjects_1.New)(SessionUserToken, {
                    username
                }));
            }
            SessionUserToken.user = global.get(__index__).user;
            return global.get(__index__).user;
        }
        getGlobalUserToken(...args) {
            return this.getGlobalUser(args).token;
        }
        getGlobalUserId(...args) {
            return this.getGlobalUser(args).id;
        }
        getGlobalUserPriority(...args) {
            return this.getGlobalUser(args).priority;
        }
        getLoginCredentialsToken(username, password) {
            return qcobjects_1._Crypt.encrypt(`${username}${password}`, this.getGlobalUserToken(username));
        }
        closeGlobalSession(...args) {
            this.getGlobalUser(args);
            const username = [args].join("|");
            const __index__ = "userToken_" + SessionUserToken.generateIndex(username);
            if (typeof global.get(__index__) !== "undefined") {
                global.get(__index__).__cache__.clear();
                global.set(__index__, null);
                SessionUserToken.user = {};
            }
        }
    }
    SessionUserToken.user = {};
    (0, qcobjects_1.Package)("org.qcobjects.cloud.auth.session.usertoken", [
        SessionUserToken
    ]);
})(_top);
const SessionUserToken = _top.SessionUserToken;
exports.SessionUserToken = SessionUserToken;
