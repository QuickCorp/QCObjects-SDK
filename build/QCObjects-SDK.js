"use strict";
/* eslint-disable @typescript-eslint/no-empty-function */
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
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const _top = (typeof module === "object" && typeof module.exports === "object") ? (module.exports = (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
            ? window
            : typeof global !== "undefined"
                ? global
                : {})) : ((typeof global === "object") ? (global) : ((typeof window === "object") ? (window) : ({})));
// eslint-disable-next-line camelcase
(function __qcobjects_sdk__(_top) {
    "use strict";
    if (typeof Object.defineProperty !== "undefined" && typeof _top !== "undefined") {
        try {
            Object.defineProperty(_top, "__qcobjects_sdk__", {
                enumerable: true,
                configurable: false,
                writable: false,
                // eslint-disable-next-line camelcase
                value: __qcobjects_sdk__,
            });
        }
        catch (e) {
            if (typeof _top.__qcobjects_sdk__ !== "undefined") {
                _top.__qcobjects_sdk__.__loaded__ = true;
            }
        }
    }
    if (typeof _top.__qcobjects_sdk__.__loaded__ === "undefined") {
        _top.__qcobjects_sdk__.__loaded__ = true;
        if (typeof _top === "undefined") {
            throw Error("Top context empty: It should either global, module or window");
        }
        const __start__ = qcobjects_1.GlobalSettings.__start__.bind(_top);
        let _imports_ = [];
        // non-browsers environment // esbuild compatible
        _imports_ = [
            new Promise((resolve) => {
                require("./js/org.qcobjects.i18n_messages");
                require("./js/org.qcobjects.models");
                require("./js/org.qcobjects.components");
                require("./js/org.qcobjects.components.grid");
                require("./js/org.qcobjects.components.list");
                require("./js/org.qcobjects.components.slider");
                require("./js/org.qcobjects.components.notifications");
                require("./js/org.qcobjects.components.splashscreen");
                require("./js/org.qcobjects.controllers");
                require("./js/org.qcobjects.controllers.grid");
                require("./js/org.qcobjects.controllers.list");
                require("./js/org.qcobjects.controllers.slider");
                require("./js/org.qcobjects.controllers.form");
                require("./js/org.qcobjects.controllers.swagger");
                require("./js/org.qcobjects.effects");
                require("./js/org.qcobjects.modal.controllers");
                require("./js/org.qcobjects.views");
                require("./js/org.qcobjects.tools.canvas");
                require("./js/org.qcobjects.tools.layouts");
                require("./js/org.qcobjects.cloud.auth.session.usertoken");
                require("./js/org.qcobjects.cloud.auth.session.data");
                resolve();
            })
        ];
        _top._sdk_ = Promise.all(_imports_).then(() => {
            qcobjects_1.CONFIG.set("useSDK", true);
            __start__();
        });
    }
})(_top);
exports.default = _top;
