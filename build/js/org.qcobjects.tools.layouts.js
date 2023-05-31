/* eslint-disable array-callback-return */
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const org_qcobjects_effects_1 = require("./org.qcobjects.effects");
(function () {
    (0, qcobjects_1.Package)("org.qcobjects.tools.layouts", [
        class BasicLayout extends qcobjects_1.InheritClass {
            constructor({ component = null, dependencies = [] }) {
                super({ component, dependencies });
                this.dependencies = [];
            }
            load() {
                this.dependencies.push((0, qcobjects_1.New)(qcobjects_1.SourceCSS, {
                    external: !(qcobjects_1.CONFIG.get("useLocalSDK", false)),
                    url: (qcobjects_1.CONFIG.get("useLocalSDK", false)) ? ("css/basic-layout.css") : (qcobjects_1.CONFIG.get("remoteSDKPath", false) + "css/basic-layout.css")
                }));
            }
            coloredBorder() {
                /*
                * A helper function to visualize the layout borders
                * Usage: BasicLayout.coloredBorder()
                */
                setTimeout(function () {
                    (0, qcobjects_1.Tag)("nav").map((element) => { element.style.border = "20px solid #3333"; });
                    (0, qcobjects_1.Tag)("nav").map((element) => { element.style.backgroundColor = "#129999"; });
                    (0, qcobjects_1.Tag)("component>footer").map((element) => { element.style.background = "#876"; });
                    (0, qcobjects_1.Tag)("component>div").map((element) => { element.style.border = "3px dashed #fff"; });
                    (0, qcobjects_1.Tag)("component>section").map((element) => { element.style.border = "3px solid #000"; });
                    (0, qcobjects_1.Tag)("component>section").map((element) => { element.style.backgroundColor = "#fffaaa"; });
                    (0, qcobjects_1.Tag)("component>article").map((element) => { element.style.border = "3px dotted #000"; });
                    (0, qcobjects_1.Tag)("component>header").map((element) => { element.style.background = "#789"; });
                    (0, qcobjects_1.Tag)("component>footer").map((element) => { element.style.background = "#876"; });
                    (0, qcobjects_1.Tag)("component>article:nth-child(1)").map((element) => { element.style.border = "1px solid #444"; });
                    (0, qcobjects_1.Tag)("component>article:nth-child(1)").map((element) => { element.style.backgroundColor = "#555aaa"; });
                    (0, qcobjects_1.Tag)("component>article:nth-child(2)").map((element) => { element.style.backgroundColor = "#aaa333"; });
                    (0, qcobjects_1.Tag)("component>article:nth-child(3)").map((element) => { element.style.backgroundColor = "#54da82"; });
                    (0, qcobjects_1.Tag)("*").map((element) => { element.style.color = "#fff"; });
                    (0, qcobjects_1.Tag)("component>article").map((element) => org_qcobjects_effects_1.Fade.apply(element, 0, 1));
                    (0, qcobjects_1.Tag)("component>footer").map((element) => org_qcobjects_effects_1.Fade.apply(element, 0, 1));
                    (0, qcobjects_1.Tag)("component>header").map((element) => org_qcobjects_effects_1.Fade.apply(element, 0, 1));
                    (0, qcobjects_1.Tag)("nav").map((element) => { element.style.display = "block"; element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString(); org_qcobjects_effects_1.MoveXInFromLeft.apply(element); });
                    (0, qcobjects_1.Tag)("component>article").map((element) => { element.style.display = "block"; element.style.height = element.offsetParent?.scrollHeight.toString() || element.clientHeight.toString(); org_qcobjects_effects_1.MoveYInFromBottom.apply(element); });
                    (0, qcobjects_1.Tag)("component>article:nth-child(2)").map((element) => { element.style.display = "block"; element.style.width = element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString(); org_qcobjects_effects_1.MoveXInFromRight.apply(element); });
                }, 300);
            }
        }
    ]);
})();
