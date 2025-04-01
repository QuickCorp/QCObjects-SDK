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

import { CONFIG, GlobalSettings, _top } from "qcobjects";
export {i18n_messages} from "./ts/org.qcobjects.i18n_messages";
export {Contact} from "./ts/org.qcobjects.models";
export {
  ShadowedComponent,
  ButtonField,
  InputField,
  TextField,
  EmailField,
  ModalEnclosureComponent,
  ModalComponent,
  SwaggerUIComponent
} from "./ts/org.qcobjects.components";
export {FormField, FieldComponentParams} from "./ts/org.qcobjects.base.components";
export {
    GridComponent,
    GridItemComponent
} from "./ts/org.qcobjects.components.grid";
export {
  ListItemComponent,
  ListComponent
} from "./ts/org.qcobjects.components.list";
export {
  SlideListComponent,
  SlideItemComponent,
  SliderComponent
} from "./ts/org.qcobjects.components.slider";
export { NotificationComponent } from "./ts/org.qcobjects.components.notifications";
export {
  SplashScreenComponent,
  VideoSplashScreenComponent,
  CubeSplashScreenComponent
} from "./ts/org.qcobjects.components.splashscreen";
export { GenericController } from "./ts/org.qcobjects.controllers";
export { ListController, ListControllerParams } from "./ts/org.qcobjects.controllers.list";
export { GridController, DataGridController } from "./ts/org.qcobjects.controllers.grid";
export { SliderController } from "./ts/org.qcobjects.controllers.slider";
export { FormController, FormValidations } from "./ts/org.qcobjects.controllers.form";
export { SwaggerUIController } from "./ts/org.qcobjects.controllers.swagger";
export {
  Fade, Move, MoveXInFromRight,
  MoveXInFromLeft,
  MoveYInFromBottom,
  MoveYInFromTop,
  RotateX,
  RotateY,
  RotateZ,
  Rotate,
  Radius,
  Resize,
  WipeLeft,
  WipeRight,
  WipeUp,
  WipeDown,
  ModalFade, ModalMoveUp, ModalMoveDown
} from "./ts/org.qcobjects.effects";
export { ModalController } from "./ts/org.qcobjects.modal.controllers";
export { GridView } from "./ts/org.qcobjects.views";
export { CanvasTool } from "./ts/org.qcobjects.tools.canvas";
export { BasicLayout } from "./ts/org.qcobjects.tools.layouts";
export { SessionUserToken } from "./ts/org.qcobjects.cloud.auth.session.usertoken";
export { SessionData } from "./ts/org.qcobjects.cloud.auth.session.data";

// eslint-disable-next-line camelcase
(function __qcobjects_sdk__(_top: any) {
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
    } catch (e) {
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

    const __start__ = GlobalSettings.__start__.bind(_top);


    _top._sdk_ = Promise.resolve().then(() => {
      CONFIG.set("useSDK", true);
      __start__();
    });

  }

})(_top);

export default _top;