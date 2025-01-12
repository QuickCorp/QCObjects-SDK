/* eslint-disable @typescript-eslint/no-misused-new */
 
// Type definitions for QCObjects 2.4
// Project: https://qcobjects.dev
// Definitions by: Jean Machuca <https://github.com/jeanmachuca>
// Definitions: https://qcobjects.dev

/**
 */

import { View } from "qcobjects";
import { InheritClass } from "qcobjects";
import { Component, Controller, Effect, VO } from "qcobjects";

declare namespace sdk {
    type SessionUser = {
        token: string,
        id: string,
        priority: number
    };
    type SliderControllerParams = {
        component: Component,
        dependencies?: Array<any>,
        duration?: number,
        slideIndex?: number,
        interval?: number | null,
        sliderHandlerName?: string
    };
    type ModalData = {
        content: string,
        modalId: number
    };
    type ListControllerParams = {
        component:Component, 
        dependencies?:Array<any>, 
        valueField?:string, 
        labelField?:string
    };

    class SlideListComponent extends Component { }
    class SlideItemComponent extends Component { }
    class SliderComponent extends Component { }
    class FormField extends Component {
        createBindingEvents(): void;
        executeBinding(_obj: HTMLElement | Element | ShadowRoot ): void;
        executeBindings(): void;
    }
    class ShadowedComponent extends Component { }
    class ButtonField extends FormField { }
    class InputField extends FormField { }
    class TextField extends FormField { }
    class EmailField extends FormField { }
    class ModalEnclosureComponent extends Component { }
    class ModalComponent extends Component {
        modalEnclosureComponentClass: string;
        closeOnClickOutside: boolean;
        data: ModalData;
        submodal: Component;
        modal(): void;
        close(): void;

    }
    class SwaggerUIComponent extends Component { }
    class Contact extends VO {
        first_name: string;
        last_name: string;
        address: string;
        postalCode: string;
        city: string;
        country: string;
        email: string;
        phone: string;
    }
    class GridItemComponent extends Component { }
    class GridComponent extends Component { }
    class NotificationComponent extends Component {
        static display(element: Element | ShadowRoot): void;
        static success(message: string): void;
        static danger(message: string): void;
        static info(message: string): void;
        static warning(message: string): void;
    }
    class GenericController extends Controller { }
    class DataGridController extends Controller {
        getPageIndex(page:number | string, totalPage:number | string, totalElements: number | string):number;
        addSubcomponents():void;
        cssGrid():void;
    }
    class GridController extends Controller {
        cssGrid():void;
    }
    class ListController extends Controller { 
        constructor(controller:ListControllerParams);
        getPageIndex(page:number | string, totalPage:number | string, totalElements: number | string):number;
        addSubcomponents():void;
        cssGrid():void;
    }
    class SliderController extends Controller {
        constructor(controller: SliderControllerParams);
        stop():void;
        plusSlidesAndStop(n:number):void;
        plusSlides(n:number):void;
        currentSlide(n?:number):void;
        automate():void;
        showSlides(n:number):void;
        fillDots():void;
    }
    class SwaggerUIController extends Controller { 
        startSwaggerUI():void;
    }
    class Fade extends Effect { }
    class Move extends Effect { }
    class MoveXInFromRight extends Effect { }
    class MoveXInFromLeft extends Effect { }
    class MoveYInFromBottom extends Effect { }
    class MoveYInFromTop extends Effect { }
    class RotateX extends Effect { }
    class RotateY extends Effect { }
    class RotateZ extends Effect { }
    class Rotate extends Effect { }
    class Radius extends Effect { }
    class Resize extends Effect { }
    class WipeLeft extends Effect { }
    class WipeRight extends Effect { }
    class WipeUp extends Effect { }
    class WipeDown extends Effect { }
    class ModalFade extends Effect { }
    class ModalMoveDown extends Effect { }
    class ModalMoveUp extends Effect { }
    class i18n_messages extends InheritClass {
        messages: Array<any>;
        _load_i18n_packages_(): void;
    }
    class SplashScreenComponent extends Component { }
    class VideoSplashScreenComponent extends SplashScreenComponent { }
    class CubeSplashScreenComponent extends SplashScreenComponent { }
    class ModalController extends Component { }
    class ListItemComponent extends Component { }
    class ListComponent extends Component { }
    class GridView extends View { }
    class BasicLayout extends InheritClass { }
    class SessionUserToken extends InheritClass {
        static generateIndex(...args: Array<any>): string;
        static getGlobalUser(...args: Array<any>): SessionUser;
        static getGlobalUserToken(...args: Array<any>): string;
        static getGlobalUserId(...args: Array<any>): string;
        static getGlobalUserPriority(...args: Array<any>): string;
        static getLoginCredentialsToken(username: string, password: string): string;
        static closeGlobalSession(): void;

    }
    class SessionData extends InheritClass {
        __session_container__: any;
        setSessionContainer(...args: Array<any>): any;
        getSessionContainer(...args: Array<any>): any;
        getSessionData(...args: Array<any>): any;
        index(...args: Array<any>): string;
        get(name: string, defaultValue?: any): any;
        set(name: string, value: any): void;

    }
    class FormValidations extends Controller {
        getDefault(): Function;
    }
    class FormController extends Controller {
        serviceClass: string;
        formSettings: {
            backRouting: string,
            loadingRouting: string,
            nextRouting: string
        };
        hasValidation(element: HTMLElement | Element | ShadowRoot ): boolean;
        isInvalid(element: HTMLElement | Element | ShadowRoot ): boolean;
        isValid(element: HTMLElement | Element | ShadowRoot ): boolean;
        save(): void;
        formSaveTouchHandler(): void;
    }
    class CanvasTool extends InheritClass { }
}

export = sdk;