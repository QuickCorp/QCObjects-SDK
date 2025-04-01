/**
 * QCObjects SDK 2.5
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListComponent = exports.ListItemComponent = void 0;
const qcobjects_1 = require("qcobjects");
class ListItemComponent extends qcobjects_1.Component {
    shadowed = false;
    tplsource = "inline";
    template = "<a href=\"{{value}}\">{{label}}</a>";
    cached = false;
    constructor(o) {
        o.name = "list-item";
        super(o);
    }
}
exports.ListItemComponent = ListItemComponent;
class ListComponent extends qcobjects_1.Component {
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
}
exports.ListComponent = ListComponent;
(0, qcobjects_1.Package)("org.qcobjects.components.list", [
    ListItemComponent,
    ListComponent
]);
