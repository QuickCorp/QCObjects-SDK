declare module "js/org.qcobjects.i18n_messages" {
    import { InheritClass } from "qcobjects";
    export class i18n_messages extends InheritClass {
        constructor({ messages }: {
            messages?: never[] | undefined;
        });
        _load_i18n_packages_(): any;
    }
}
declare module "js/org.qcobjects.models" {
    import { VO } from "qcobjects";
    export class Contact extends VO {
    }
}
declare module "js/org.qcobjects.effects.base" {
    import { Effect } from "qcobjects";
    export type MoveElement = HTMLElement & {
        width?: number;
        height?: number;
    };
    export class Fade extends Effect {
        duration: number;
        static duration: any;
        constructor(o?: {
            duration: number;
        });
        apply(element: HTMLElement, alphaFrom: number, alphaTo: number): void;
        static apply(element: HTMLElement, alphaFrom: number, alphaTo: number): void;
        static animate(arg0: {
            duration: any;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class Move extends Effect {
        duration: number;
        static duration: any;
        static apply(element: MoveElement, xfrom: number, yfrom: number, xto: number, yto: number): void;
        static animate(arg0: {
            duration: any;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
}
declare module "js/org.qcobjects.effects.extended" {
    import { Effect } from "qcobjects";
    import { Move, MoveElement } from "js/org.qcobjects.effects.base";
    export class MoveXInFromRight extends Move {
        duration: number;
        static apply(element: MoveElement): void;
    }
    export class MoveXInFromLeft extends Move {
        duration: number;
        static apply(element: MoveElement): void;
    }
    export class MoveYInFromBottom extends Move {
        duration: number;
        static apply(element: MoveElement): void;
    }
    export class MoveYInFromTop extends Move {
        duration: number;
        static apply(element: MoveElement): void;
    }
    export class RotateX extends Effect {
        duration: number;
        static duration: any;
        static apply(element: HTMLElement, angleFrom: number, angleTo: number): void;
        static animate(arg0: {
            duration: any;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class RotateY extends Effect {
        duration: number;
        static duration: any;
        static apply(element: HTMLElement, angleFrom: number, angleTo: number): void;
        static animate(arg0: {
            duration: any;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class RotateZ extends Effect {
        duration: number;
        apply(element: HTMLElement, angleFrom: number, angleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class Rotate extends Effect {
        duration: number;
        apply(element: HTMLElement, angleFrom: number, angleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class Radius extends Effect {
        duration: number;
        apply(element: HTMLElement, radiusFrom: number, radiusTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class Resize extends Effect {
        duration: number;
        apply(element: HTMLElement, scaleFrom: number, scaleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class WipeLeft extends Effect {
        duration: number;
        apply(element: HTMLElement, scaleFrom: number, scaleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class WipeRight extends Effect {
        duration: number;
        apply(element: HTMLElement, scaleFrom: number, scaleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class WipeUp extends Effect {
        duration: number;
        apply(element: HTMLElement, scaleFrom: number, scaleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
    export class WipeDown extends Effect {
        duration: number;
        apply(element: HTMLElement, scaleFrom: number, scaleTo: number): void;
        animate(arg0: {
            duration: number;
            timing(timeFraction: any): any;
            draw(progress: any): void;
        }): void;
    }
}
declare module "js/org.qcobjects.modal.effects" {
    import { Fade, Move } from "js/org.qcobjects.effects";
    export class ModalFade extends Fade {
        duration: number;
    }
    export class ModalMoveUp extends Move {
        duration: number;
    }
    export class ModalMoveDown extends Move {
        duration: number;
    }
}
declare module "js/org.qcobjects.effects" {
    export { Fade, Move } from "js/org.qcobjects.effects.base";
    export { MoveXInFromRight, MoveXInFromLeft, MoveYInFromBottom, MoveYInFromTop, RotateX, RotateY, RotateZ, Rotate, Radius, Resize, WipeLeft, WipeRight, WipeUp, WipeDown } from "js/org.qcobjects.effects.extended";
    export { ModalFade, ModalMoveUp, ModalMoveDown } from "js/org.qcobjects.modal.effects";
}
declare module "js/org.qcobjects.base.components" {
    import { Component } from "qcobjects";
    export type FieldComponentParams = {
        name: string;
        body: any;
        data: any;
        basePath?: string;
        fieldType: string;
    };
    export class FormField extends Component {
        fieldType: string;
        cached: boolean;
        reload: boolean;
        body: any;
        name: string;
        data: any;
        constructor(o: FieldComponentParams);
        createBindingEvents(): void;
        executeBinding(_obj: HTMLElement & {
            value: any;
        }): void;
        executeBindings(): void;
        done(standardResponse: any): Promise<any>;
    }
}
declare module "js/org.qcobjects.components" {
    import { Component } from "qcobjects";
    import { FormField, FieldComponentParams } from "js/org.qcobjects.base.components";
    export { FormField };
    export class ShadowedComponent extends Component {
        container: null;
        shadowed: boolean;
        cached: boolean;
        controller: null;
        view: null;
        data: {};
        constructor(o: FieldComponentParams);
    }
    export class ButtonField extends FormField {
        constructor(o: FieldComponentParams);
    }
    export class InputField extends FormField {
        constructor(o: FieldComponentParams);
    }
    export class TextField extends FormField {
        constructor(o: FieldComponentParams);
    }
    export class EmailField extends FormField {
        constructor(o: FieldComponentParams);
    }
    export class ModalEnclosureComponent extends Component {
        name: string;
        tplsource: string;
        cached: boolean;
        basePath: any;
        template: string;
        data: {};
        constructor(o: FieldComponentParams);
    }
    export class ModalComponent extends Component {
        name: string;
        cached: boolean;
        modalEnclosureComponentClass: string;
        controller: null;
        view: null;
        tplsource: string;
        closeOnClickOutside: boolean;
        data: {
            content: string;
            modalId: number;
        };
        submodal: null;
        __instanceID: number;
        basePath: any;
        subcomponents: any;
        body: any;
        templateURI: any;
        constructor(o: FieldComponentParams);
        modal(): void;
        close(): void;
        rebuild(): any;
    }
    export class SwaggerUIComponent extends Component {
        cached: boolean;
        basePath: any;
        tplextension: string;
        name: string;
    }
}
declare module "js/org.qcobjects.components.grid" {
    import { Component } from "qcobjects";
    export class GridItemComponent extends Component {
        name: string;
        shadowed: boolean;
        tplsource: string;
        template: string;
        cached: boolean;
    }
    export class GridComponent extends Component {
        name: string;
        cached: boolean;
        view: null;
        shadowed: boolean;
        rows: number;
        cols: number;
        templateURI: string;
        data: {};
        tplsource: string;
        template: string;
        body: any;
        constructor(o: any);
    }
}
declare module "js/org.qcobjects.components.list" {
    import { Component } from "qcobjects";
    export class ListItemComponent extends Component {
        shadowed: boolean;
        tplsource: string;
        template: string;
        cached: boolean;
        constructor(o: any);
    }
    export class ListComponent extends Component {
        data: any;
        shadowed: boolean;
        tplsource: string;
        template: string;
        body: any;
        shadowRoot: HTMLElement | undefined;
        rows: string | number | null;
        subcomponents: never[];
        done: any;
        serviceData: any;
        constructor(o: any);
    }
}
declare module "js/org.qcobjects.components.slider" {
    import { Component } from "qcobjects";
    export class SlideListComponent extends Component {
        tplsource: string;
        template: string;
        name: string;
        body: any;
        constructor(o: any);
    }
    export class SlideItemComponent extends Component {
        effectClass: string;
        name: string;
        data: any;
        template: string;
        tplsource: string;
        constructor(o: any);
    }
    export class SliderComponent extends Component {
        name: string;
        template: string;
        tplsource: string;
        shadowed: boolean;
        data: any;
        body: any;
        __instanceID: any;
        constructor(o: any);
    }
}
declare module "js/org.qcobjects.components.notifications" {
    import { Component } from "qcobjects";
    export class NotificationComponent extends Component {
        cached: boolean;
        tplsource: string;
        shadowed: boolean;
        kinds: string[];
        template: string;
        constructor(o: any);
        display(element: HTMLElement): void;
        static success(message: string): void;
        static danger(message: string): void;
        static info(message: string): void;
        static warning(message: string): void;
    }
}
declare module "js/org.qcobjects.components.splashscreen" {
    import { Component } from "qcobjects";
    type SplashScreenParams = {
        name: string;
        basePath: string;
        data: any;
        body: any;
    };
    export class SplashScreenComponent extends Component {
        _enabled_: boolean;
        _bgcolor: string;
        cached: boolean;
        shadowed: boolean;
        body: any;
        shadowRoot: any;
        constructor(component: SplashScreenParams);
        addComponentHelper(arg0: {
            (): void;
            executed: boolean;
        }): void;
    }
    export class VideoSplashScreenComponent extends SplashScreenComponent {
        cached: boolean;
        shadowed: boolean;
        tplsource: string;
        template: string;
        constructor(o: SplashScreenParams);
    }
    export class CubeSplashScreenComponent extends SplashScreenComponent {
        cached: boolean;
        shadowed: boolean;
        tplsource: string;
        template: string;
        constructor(o: SplashScreenParams);
    }
}
declare module "js/org.qcobjects.controllers" {
    import { Controller } from "qcobjects";
    export class GenericController extends Controller {
    }
}
declare module "js/org.qcobjects.controllers.list" {
    import { Controller } from "qcobjects";
    import { ListComponent } from "js/org.qcobjects.components.list";
    export type ListControllerParams = {
        component: ListComponent;
        valueField: string | undefined;
        labelField: string | undefined;
        dependencies: any[];
    };
    export class ListController extends Controller {
        __instanceID: number;
        component: ListComponent;
        valueField: string | undefined;
        labelField: string | undefined;
        rows: number | string | null;
        cols: number;
        _componentRoot: HTMLElement | undefined;
        constructor({ component, dependencies, valueField, labelField }: ListControllerParams);
        getPageIndex(page: number, totalPage: number, totalElements: number): number[];
        addSubcomponents(): void;
        cssGrid(): void;
        done(): void;
    }
}
declare module "js/org.qcobjects.controllers.grid" {
    import { Controller, Component } from "qcobjects";
    type DataGridControllerParams = {
        component: Component;
        rows: number | string | null;
        cols: number | string | null;
    };
    export class GridController extends Controller {
        __instanceID: number;
        rows: number | string | null;
        cols: number | string | null;
        component: any;
        constructor(controller: any);
        cssGrid(): void;
        done(): void;
    }
    export class DataGridController extends Controller {
        __instanceID: number;
        rows: number | string | null;
        cols: number | string | null;
        _componentRoot: HTMLElement | ShadowRoot | undefined;
        component: any;
        constructor(controller: DataGridControllerParams);
        getPageIndex(page: number, totalPage: number, totalElements: number): number[];
        addSubcomponents(): void;
        cssGrid(): void;
        done(): void;
    }
}
declare module "js/org.qcobjects.controllers.slider" {
    import { Controller, Component } from "qcobjects";
    type SliderParams = {
        dependencies: any[];
        component: Component;
        duration: number;
        slideIndex: number;
        interval: number | null;
        sliderHandlerName: string | null;
    };
    export class SliderController extends Controller {
        slideIndex: number;
        duration: number;
        interval: any;
        sliderHandlerName: string;
        _componentRoot: HTMLElement | ShadowRoot | undefined;
        component: Component;
        constructor({ component, dependencies, duration, slideIndex, interval, sliderHandlerName }: SliderParams);
        stop(): void;
        plusSlidesAndStop(n: number): void;
        plusSlides(n: number): void;
        currentSlide(n: number): void;
        automate(): void;
        showSlides(n: number): void;
        fillDots(): void;
        done(): void;
    }
}
declare module "js/org.qcobjects.controllers.form" {
    import { Controller } from "qcobjects";
    import { ModalComponent } from "js/org.qcobjects.components";
    export class FormValidations extends Controller {
        getDefault(): (fieldName: string, dataValue: any, element: HTMLElement) => boolean;
    }
    export class FormController extends Controller {
        validations: any[];
        formValidatorModal: ModalComponent;
        serviceClass: string;
        formSettings: {
            backRouting: string;
            loadingRouting: string;
            nextRouting: string;
        };
        component: any;
        hasValidation(element: HTMLElement): boolean;
        isInvalid(element: HTMLElement): boolean;
        isValid(element: HTMLElement): boolean;
        save(): void;
        formSaveTouchHandler(): void;
        constructor(o: any);
        done(): void;
        onpress(arg0: string, arg1: () => void): void;
    }
}
declare module "js/org.qcobjects.controllers.swagger" {
    import { Controller } from "qcobjects";
    export class SwaggerUIController extends Controller {
        component: any;
        dependencies: any;
        startSwaggerUI(): void;
        done(): void;
    }
}
declare module "js/org.qcobjects.modal.controllers" {
    import { Controller } from "qcobjects";
    export class ModalController extends Controller {
        component: any;
        done(): void;
    }
}
declare module "js/org.qcobjects.views" {
    import { View } from "qcobjects";
    export class GridView extends View {
    }
}
declare module "js/org.qcobjects.tools.canvas" {
    import { InheritClass } from "qcobjects";
    export class CanvasTool extends InheritClass {
        drawImageFilled(img: HTMLImageElement, canvas: HTMLCanvasElement, zoom?: number, px?: number, py?: number): void;
        getImageResized(img: HTMLImageElement, width: number, height: number, resizedImage: HTMLImageElement, zoom?: number, px?: number, py?: number): HTMLCanvasElement;
    }
}
declare module "js/org.qcobjects.tools.layouts" {
    import { InheritClass } from "qcobjects";
    export class BasicLayout extends InheritClass {
        dependencies: any[];
        constructor({ component, dependencies }: {
            component?: null | undefined;
            dependencies?: never[] | undefined;
        });
        load(): void;
        coloredBorder(): void;
    }
}
declare module "js/org.qcobjects.cloud.auth.session.usertoken" {
    import { ComplexStorageCache, InheritClass } from "qcobjects";
    type TGlobalUser = {
        username: string;
        token: string;
        id: string;
        priority: number;
    };
    export class SessionUserToken extends InheritClass {
        static user: {};
        __cache__: ComplexStorageCache;
        __instanceID: any;
        constructor(o: any);
        static generateIndex(s: any): string;
        static getGlobalUser(...args: any[]): TGlobalUser;
        static getGlobalUserToken(...args: any[]): string;
        static getGlobalUserId(...args: any[]): string;
        static getGlobalUserPriority(...args: any[]): number;
        static getLoginCredentialsToken(username: string, password: string): string;
        static closeGlobalSession(...args: any[]): void;
    }
}
declare module "js/org.qcobjects.cloud.auth.session.data" {
    import { InheritClass } from "qcobjects";
    export class SessionData extends InheritClass {
        __session_container__: any;
        sessionData: any;
        /**
         * Sets the session container
         *
         * @param {*} sessionContainer1, sessionContainer2, ...
         *
         */
        setSessionContainer(): void;
        /**
         * Gets the session container
         *
         * @return {*} sessionContainer
         */
        getSessionContainer(): any;
        /**
         * Gets the session data
         *
         * @return {*} sessionData
         */
        getSessionData(...args: any[]): any;
        /**
         * Returns an index of the session
         *
         * @param {string} valueForIndex
         * @return {string} index
         * @example sessionInstance.index("me@email.com", "myusername")
         *
         */
        index(...args: any[]): string;
        /**
         * Saves the session instance
         *
         */
        save(...args: any[]): void;
        /**
         *
         * Gets the session value
         *
         * @param {*} name
         * @param {*} defaultValue
         * @return {*}
         */
        get(name: string, defaultValue: any): any;
        /**
         *
         * Sets the session value
         *
         * @param {*} name
         * @param {*} value
         */
        set(name: string, value: any): void;
    }
}
declare module "QCObjects-SDK" {
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
    import { _top } from "qcobjects";
    export { i18n_messages } from "js/org.qcobjects.i18n_messages";
    export { Contact } from "js/org.qcobjects.models";
    export { ShadowedComponent, ButtonField, InputField, TextField, EmailField, ModalEnclosureComponent, ModalComponent, SwaggerUIComponent } from "js/org.qcobjects.components";
    export { FormField, FieldComponentParams } from "js/org.qcobjects.base.components";
    export { GridComponent, GridItemComponent } from "js/org.qcobjects.components.grid";
    export { ListItemComponent, ListComponent } from "js/org.qcobjects.components.list";
    export { SlideListComponent, SlideItemComponent, SliderComponent } from "js/org.qcobjects.components.slider";
    export { NotificationComponent } from "js/org.qcobjects.components.notifications";
    export { SplashScreenComponent, VideoSplashScreenComponent, CubeSplashScreenComponent } from "js/org.qcobjects.components.splashscreen";
    export { GenericController } from "js/org.qcobjects.controllers";
    export { ListController, ListControllerParams } from "js/org.qcobjects.controllers.list";
    export { GridController, DataGridController } from "js/org.qcobjects.controllers.grid";
    export { SliderController } from "js/org.qcobjects.controllers.slider";
    export { FormController, FormValidations } from "js/org.qcobjects.controllers.form";
    export { SwaggerUIController } from "js/org.qcobjects.controllers.swagger";
    export { Fade, Move, MoveXInFromRight, MoveXInFromLeft, MoveYInFromBottom, MoveYInFromTop, RotateX, RotateY, RotateZ, Rotate, Radius, Resize, WipeLeft, WipeRight, WipeUp, WipeDown, ModalFade, ModalMoveUp, ModalMoveDown } from "js/org.qcobjects.effects";
    export { ModalController } from "js/org.qcobjects.modal.controllers";
    export { GridView } from "js/org.qcobjects.views";
    export { CanvasTool } from "js/org.qcobjects.tools.canvas";
    export { BasicLayout } from "js/org.qcobjects.tools.layouts";
    export { SessionUserToken } from "js/org.qcobjects.cloud.auth.session.usertoken";
    export { SessionData } from "js/org.qcobjects.cloud.auth.session.data";
    export default _top;
}
declare module "index" {
    import * as sdk from "QCObjects-SDK";
    export default sdk;
}
declare module "js/org.qcobjects.tools" { }

export {};