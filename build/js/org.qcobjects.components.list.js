"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemComponent = exports.ListComponent = void 0;
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
    class ListItemComponent extends qcobjects_1.Component {
        constructor(o) {
            o.name = "list-item";
            super(o);
            this.shadowed = false;
            this.tplsource = "inline";
            this.template = "<a href=\"{{value}}\">{{label}}</a>";
            this.cached = false;
        }
    }
    class ListComponent extends qcobjects_1.Component {
        constructor(o) {
            o.name = "list";
            super(o);
            this.shadowed = true;
            this.tplsource = "inline";
            this.template = "<p>Loading...</p>";
            this.body.setAttribute("controllerClass", "ListController");
            this.body.setAttribute("subcomponentClass", "ListItemComponent");
        }
    }
    (0, qcobjects_1.Package)("org.qcobjects.components.list", [
        ListItemComponent,
        ListComponent
    ]);
    global.ListComponent = ListComponent;
    global.ListItemComponent = ListItemComponent;
})(_top);
const ListComponent = _top.ListComponent;
exports.ListComponent = ListComponent;
const ListItemComponent = _top.ListItemComponent;
exports.ListItemComponent = ListItemComponent;
