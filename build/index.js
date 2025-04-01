"use strict";
/* eslint-disable @typescript-eslint/no-empty-function */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalController = exports.ModalMoveDown = exports.ModalMoveUp = exports.ModalFade = exports.WipeDown = exports.WipeUp = exports.WipeRight = exports.WipeLeft = exports.Resize = exports.Radius = exports.Rotate = exports.RotateZ = exports.RotateY = exports.RotateX = exports.MoveYInFromTop = exports.MoveYInFromBottom = exports.MoveXInFromLeft = exports.MoveXInFromRight = exports.Move = exports.Fade = exports.SwaggerUIController = exports.FormValidations = exports.FormController = exports.SliderController = exports.DataGridController = exports.GridController = exports.ListController = exports.GenericController = exports.CubeSplashScreenComponent = exports.VideoSplashScreenComponent = exports.SplashScreenComponent = exports.NotificationComponent = exports.SliderComponent = exports.SlideItemComponent = exports.SlideListComponent = exports.ListComponent = exports.ListItemComponent = exports.GridItemComponent = exports.GridComponent = exports.FormField = exports.SwaggerUIComponent = exports.ModalComponent = exports.ModalEnclosureComponent = exports.EmailField = exports.TextField = exports.InputField = exports.ButtonField = exports.ShadowedComponent = exports.Contact = exports.i18n_messages = void 0;
exports.SessionData = exports.SessionUserToken = exports.BasicLayout = exports.CanvasTool = exports.GridView = void 0;
const qcobjects_1 = require("qcobjects");
var org_qcobjects_i18n_messages_1 = require("./ts/org.qcobjects.i18n_messages");
Object.defineProperty(exports, "i18n_messages", { enumerable: true, get: function () { return org_qcobjects_i18n_messages_1.i18n_messages; } });
var org_qcobjects_models_1 = require("./ts/org.qcobjects.models");
Object.defineProperty(exports, "Contact", { enumerable: true, get: function () { return org_qcobjects_models_1.Contact; } });
var org_qcobjects_components_1 = require("./ts/org.qcobjects.components");
Object.defineProperty(exports, "ShadowedComponent", { enumerable: true, get: function () { return org_qcobjects_components_1.ShadowedComponent; } });
Object.defineProperty(exports, "ButtonField", { enumerable: true, get: function () { return org_qcobjects_components_1.ButtonField; } });
Object.defineProperty(exports, "InputField", { enumerable: true, get: function () { return org_qcobjects_components_1.InputField; } });
Object.defineProperty(exports, "TextField", { enumerable: true, get: function () { return org_qcobjects_components_1.TextField; } });
Object.defineProperty(exports, "EmailField", { enumerable: true, get: function () { return org_qcobjects_components_1.EmailField; } });
Object.defineProperty(exports, "ModalEnclosureComponent", { enumerable: true, get: function () { return org_qcobjects_components_1.ModalEnclosureComponent; } });
Object.defineProperty(exports, "ModalComponent", { enumerable: true, get: function () { return org_qcobjects_components_1.ModalComponent; } });
Object.defineProperty(exports, "SwaggerUIComponent", { enumerable: true, get: function () { return org_qcobjects_components_1.SwaggerUIComponent; } });
var org_qcobjects_base_components_1 = require("./ts/org.qcobjects.base.components");
Object.defineProperty(exports, "FormField", { enumerable: true, get: function () { return org_qcobjects_base_components_1.FormField; } });
var org_qcobjects_components_grid_1 = require("./ts/org.qcobjects.components.grid");
Object.defineProperty(exports, "GridComponent", { enumerable: true, get: function () { return org_qcobjects_components_grid_1.GridComponent; } });
Object.defineProperty(exports, "GridItemComponent", { enumerable: true, get: function () { return org_qcobjects_components_grid_1.GridItemComponent; } });
var org_qcobjects_components_list_1 = require("./ts/org.qcobjects.components.list");
Object.defineProperty(exports, "ListItemComponent", { enumerable: true, get: function () { return org_qcobjects_components_list_1.ListItemComponent; } });
Object.defineProperty(exports, "ListComponent", { enumerable: true, get: function () { return org_qcobjects_components_list_1.ListComponent; } });
var org_qcobjects_components_slider_1 = require("./ts/org.qcobjects.components.slider");
Object.defineProperty(exports, "SlideListComponent", { enumerable: true, get: function () { return org_qcobjects_components_slider_1.SlideListComponent; } });
Object.defineProperty(exports, "SlideItemComponent", { enumerable: true, get: function () { return org_qcobjects_components_slider_1.SlideItemComponent; } });
Object.defineProperty(exports, "SliderComponent", { enumerable: true, get: function () { return org_qcobjects_components_slider_1.SliderComponent; } });
var org_qcobjects_components_notifications_1 = require("./ts/org.qcobjects.components.notifications");
Object.defineProperty(exports, "NotificationComponent", { enumerable: true, get: function () { return org_qcobjects_components_notifications_1.NotificationComponent; } });
var org_qcobjects_components_splashscreen_1 = require("./ts/org.qcobjects.components.splashscreen");
Object.defineProperty(exports, "SplashScreenComponent", { enumerable: true, get: function () { return org_qcobjects_components_splashscreen_1.SplashScreenComponent; } });
Object.defineProperty(exports, "VideoSplashScreenComponent", { enumerable: true, get: function () { return org_qcobjects_components_splashscreen_1.VideoSplashScreenComponent; } });
Object.defineProperty(exports, "CubeSplashScreenComponent", { enumerable: true, get: function () { return org_qcobjects_components_splashscreen_1.CubeSplashScreenComponent; } });
var org_qcobjects_controllers_1 = require("./ts/org.qcobjects.controllers");
Object.defineProperty(exports, "GenericController", { enumerable: true, get: function () { return org_qcobjects_controllers_1.GenericController; } });
var org_qcobjects_controllers_list_1 = require("./ts/org.qcobjects.controllers.list");
Object.defineProperty(exports, "ListController", { enumerable: true, get: function () { return org_qcobjects_controllers_list_1.ListController; } });
var org_qcobjects_controllers_grid_1 = require("./ts/org.qcobjects.controllers.grid");
Object.defineProperty(exports, "GridController", { enumerable: true, get: function () { return org_qcobjects_controllers_grid_1.GridController; } });
Object.defineProperty(exports, "DataGridController", { enumerable: true, get: function () { return org_qcobjects_controllers_grid_1.DataGridController; } });
var org_qcobjects_controllers_slider_1 = require("./ts/org.qcobjects.controllers.slider");
Object.defineProperty(exports, "SliderController", { enumerable: true, get: function () { return org_qcobjects_controllers_slider_1.SliderController; } });
var org_qcobjects_controllers_form_1 = require("./ts/org.qcobjects.controllers.form");
Object.defineProperty(exports, "FormController", { enumerable: true, get: function () { return org_qcobjects_controllers_form_1.FormController; } });
Object.defineProperty(exports, "FormValidations", { enumerable: true, get: function () { return org_qcobjects_controllers_form_1.FormValidations; } });
var org_qcobjects_controllers_swagger_1 = require("./ts/org.qcobjects.controllers.swagger");
Object.defineProperty(exports, "SwaggerUIController", { enumerable: true, get: function () { return org_qcobjects_controllers_swagger_1.SwaggerUIController; } });
var org_qcobjects_effects_1 = require("./ts/org.qcobjects.effects");
Object.defineProperty(exports, "Fade", { enumerable: true, get: function () { return org_qcobjects_effects_1.Fade; } });
Object.defineProperty(exports, "Move", { enumerable: true, get: function () { return org_qcobjects_effects_1.Move; } });
Object.defineProperty(exports, "MoveXInFromRight", { enumerable: true, get: function () { return org_qcobjects_effects_1.MoveXInFromRight; } });
Object.defineProperty(exports, "MoveXInFromLeft", { enumerable: true, get: function () { return org_qcobjects_effects_1.MoveXInFromLeft; } });
Object.defineProperty(exports, "MoveYInFromBottom", { enumerable: true, get: function () { return org_qcobjects_effects_1.MoveYInFromBottom; } });
Object.defineProperty(exports, "MoveYInFromTop", { enumerable: true, get: function () { return org_qcobjects_effects_1.MoveYInFromTop; } });
Object.defineProperty(exports, "RotateX", { enumerable: true, get: function () { return org_qcobjects_effects_1.RotateX; } });
Object.defineProperty(exports, "RotateY", { enumerable: true, get: function () { return org_qcobjects_effects_1.RotateY; } });
Object.defineProperty(exports, "RotateZ", { enumerable: true, get: function () { return org_qcobjects_effects_1.RotateZ; } });
Object.defineProperty(exports, "Rotate", { enumerable: true, get: function () { return org_qcobjects_effects_1.Rotate; } });
Object.defineProperty(exports, "Radius", { enumerable: true, get: function () { return org_qcobjects_effects_1.Radius; } });
Object.defineProperty(exports, "Resize", { enumerable: true, get: function () { return org_qcobjects_effects_1.Resize; } });
Object.defineProperty(exports, "WipeLeft", { enumerable: true, get: function () { return org_qcobjects_effects_1.WipeLeft; } });
Object.defineProperty(exports, "WipeRight", { enumerable: true, get: function () { return org_qcobjects_effects_1.WipeRight; } });
Object.defineProperty(exports, "WipeUp", { enumerable: true, get: function () { return org_qcobjects_effects_1.WipeUp; } });
Object.defineProperty(exports, "WipeDown", { enumerable: true, get: function () { return org_qcobjects_effects_1.WipeDown; } });
Object.defineProperty(exports, "ModalFade", { enumerable: true, get: function () { return org_qcobjects_effects_1.ModalFade; } });
Object.defineProperty(exports, "ModalMoveUp", { enumerable: true, get: function () { return org_qcobjects_effects_1.ModalMoveUp; } });
Object.defineProperty(exports, "ModalMoveDown", { enumerable: true, get: function () { return org_qcobjects_effects_1.ModalMoveDown; } });
var org_qcobjects_modal_controllers_1 = require("./ts/org.qcobjects.modal.controllers");
Object.defineProperty(exports, "ModalController", { enumerable: true, get: function () { return org_qcobjects_modal_controllers_1.ModalController; } });
var org_qcobjects_views_1 = require("./ts/org.qcobjects.views");
Object.defineProperty(exports, "GridView", { enumerable: true, get: function () { return org_qcobjects_views_1.GridView; } });
var org_qcobjects_tools_canvas_1 = require("./ts/org.qcobjects.tools.canvas");
Object.defineProperty(exports, "CanvasTool", { enumerable: true, get: function () { return org_qcobjects_tools_canvas_1.CanvasTool; } });
var org_qcobjects_tools_layouts_1 = require("./ts/org.qcobjects.tools.layouts");
Object.defineProperty(exports, "BasicLayout", { enumerable: true, get: function () { return org_qcobjects_tools_layouts_1.BasicLayout; } });
var org_qcobjects_cloud_auth_session_usertoken_1 = require("./ts/org.qcobjects.cloud.auth.session.usertoken");
Object.defineProperty(exports, "SessionUserToken", { enumerable: true, get: function () { return org_qcobjects_cloud_auth_session_usertoken_1.SessionUserToken; } });
var org_qcobjects_cloud_auth_session_data_1 = require("./ts/org.qcobjects.cloud.auth.session.data");
Object.defineProperty(exports, "SessionData", { enumerable: true, get: function () { return org_qcobjects_cloud_auth_session_data_1.SessionData; } });
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
        _top._sdk_ = Promise.resolve().then(() => {
            qcobjects_1.CONFIG.set("useSDK", true);
            __start__();
        });
    }
})(qcobjects_1._top);
exports.default = qcobjects_1._top;
