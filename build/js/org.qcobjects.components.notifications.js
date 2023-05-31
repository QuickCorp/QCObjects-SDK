"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const org_qcobjects_effects_1 = require("./org.qcobjects.effects");
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
    class NotificationComponent extends qcobjects_1.Component {
        constructor(o) {
            o.name = "notification";
            o.body = (0, qcobjects_1._DOMCreateElement)("div");
            super(o);
            this.cached = false;
            this.tplsource = "inline";
            this.shadowed = false;
            this.template = `
    <style>
    div.notification_background {
      display: block; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      bottom:0;
      right:0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      border: none !important;
    }
    div.notification {
      border-radius: 12px !important;
      margin-bottom: 15px;
      padding: 4px 12px;
    }
    .notification.danger {
      background-color: #ffdddd;
      border-left: 6px solid #f44336;
    }
    .notification.success {
      background-color: #ddffdd;
      border-left: 6px solid #4CAF50;
    }
    .notification.info {
      background-color: #e7f3fe;
      border-left: 6px solid #2196F3;
    }
    .notification.warning {
      background-color: #ffffcc;
      border-left: 6px solid #ffeb3b;
    }
    </style>
    <div class="notification_background">
    <div class="notification {{kind}}">
      <p><strong>{{title}}</strong> {{message}}</p>
    </div>
    </div>
    `;
            this.kinds = ["danger", "success", "info", "warning"];
        }
        display(element) {
            const _display_ = function (element) {
                element.style.display = "block";
                const appearEffect = (0, qcobjects_1.New)(org_qcobjects_effects_1.Move, {
                    duration: 900,
                    apply(element) {
                        (0, qcobjects_1._super_)("Fade", "apply").call(this, element, 0, 1);
                        (0, qcobjects_1._super_)("Move", "apply").call(this, element, 0, -document.body.clientHeight, 0, 0);
                    }
                });
                const disappearEffect = (0, qcobjects_1.New)(org_qcobjects_effects_1.Move, {
                    duration: 650,
                    apply(element) {
                        (0, qcobjects_1._super_)("Fade", "apply").call(this, element, 1, 0);
                        (0, qcobjects_1._super_)("Move", "apply").call(this, element, 0, 0, 0, -document.body.clientHeight);
                    }
                });
                appearEffect.apply(element);
                setTimeout(function () {
                    disappearEffect.apply(element);
                }, 2000);
            };
            element.subelements("div.notification_background").map(element => (0, qcobjects_1.New)(org_qcobjects_effects_1.Fade, { duration: 500 }).apply(element, 0, 1));
            element.subelements("div.notification").map(element => _display_(element));
            setTimeout(function () {
                element.remove();
            }, 2200);
        }
        static success(message) {
            const c = (0, qcobjects_1.New)(NotificationComponent, {
                name: "notification",
                shadowed: true,
                body: (0, qcobjects_1._DOMCreateElement)("div"),
                data: {
                    kind: "success",
                    title: "Success!",
                    message: `${message}...`
                }
            });
            document.body.append(c);
            const _componentRoot = (c.shadowed) ? (c.shadowRoot.host) : (c.body);
            c.display(_componentRoot);
        }
        static danger(message) {
            const c = (0, qcobjects_1.New)(NotificationComponent, {
                name: "notification",
                shadowed: true,
                body: (0, qcobjects_1._DOMCreateElement)("div"),
                data: {
                    kind: "danger",
                    title: "Danger!",
                    message: `${message}...`
                }
            });
            document.body.append(c);
            const _componentRoot = (c.shadowed) ? (c.shadowRoot.host) : (c.body);
            c.display(_componentRoot);
        }
        static info(message) {
            const c = (0, qcobjects_1.New)(NotificationComponent, {
                name: "notification",
                shadowed: true,
                body: (0, qcobjects_1._DOMCreateElement)("div"),
                data: {
                    kind: "info",
                    title: "Info!",
                    message: `${message}...`
                }
            });
            document.body.append(c);
            const _componentRoot = (c.shadowed) ? (c.shadowRoot.host) : (c.body);
            c.display(_componentRoot);
        }
        static warning(message) {
            const c = (0, qcobjects_1.New)(NotificationComponent, {
                name: "notification",
                shadowed: true,
                body: (0, qcobjects_1._DOMCreateElement)("div"),
                data: {
                    kind: "warning",
                    title: "Warning!",
                    message: `${message}...`
                }
            });
            document.body.append(c);
            const _componentRoot = (c.shadowed) ? (c.shadowRoot.host) : (c.body);
            c.display(_componentRoot);
        }
    }
    (0, qcobjects_1.Package)("org.quickcorp.components.notifications", [
        NotificationComponent
    ]);
})();
