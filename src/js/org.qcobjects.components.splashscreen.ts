/**
 * QCObjects SDK 2.4.0
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

import { Package, Component, CONFIG, logger, ComponentParams, QCObjectsElement } from "qcobjects";
import { Resize, Fade } from "./org.qcobjects.effects";

const _top: any = (typeof module === "object" && typeof module.exports === "object") ? (
  module.exports = (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
          ? global
          : {})
) : ((typeof global === "object") ? (global) : (
  (typeof window === "object") ? (window) : ({})
));

// eslint-disable-next-line camelcase
(function __splash_screen__(global) {
  "use strict";
  type SplashScreenParams = ComponentParams & {
    basePath: string;
  }
  type MainSplashComponent = Component & {
    _mainPosition: string;
    _mainOpacity: string;
  }

  class SplashScreenComponent extends Component {
    _enabled_: boolean;
    _bgcolor: string;
    cached = false;
    shadowed = true;

    constructor(component: SplashScreenParams) {
      component.name = (typeof component.name === "undefined") ? ("splashscreen") : (component.name);

      const isBrowser = typeof window !== "undefined" && typeof window.self !== "undefined" && window === window.self;
      const isStartURL = (location.hash === ""
        && location.pathname === "/" && location.search === "")
        || CONFIG.get("routingWay", "pathname") === "hash" && CONFIG.get("start_url", "/") === location.hash
        || CONFIG.get("routingWay", "pathname") === "pathname" && CONFIG.get("start_url", "/") === location.pathname
        || CONFIG.get("routingWay", "pathname") === "search" && CONFIG.get("start_url", "/") === location.search;
      const _enabled_ = isBrowser && isStartURL;

      if (_enabled_) {
        component.basePath = CONFIG.get("splashscreenBasePath", CONFIG.get("remoteSDKPath", ""));
        if (typeof component.data === "undefined") {
          component.data = {};
        }
        component.data.basePath = component.basePath;
      } else {
        if (typeof component !== "undefined" && typeof component.body !== "undefined") {
          component.body.style.display = "none";
        }
      }
      super(component);
      this._bgcolor = "";
      this._enabled_ = _enabled_;

      if (this._enabled_) {
        const displayEffectDuration = 1000;
        let duration = this.body.getAttribute("duration") as unknown as number;
        if (duration === null) {
          duration = displayEffectDuration;
        } else {
          duration = parseInt(duration.toString());
        }
        this._bgcolor = this.body.style.backgroundColor;

        const _helper_ = () => {
          setTimeout(() => {
            if (!_helper_.executed) {
              const _componentRoot = (this.shadowed) ? (this.shadowRoot?.host as HTMLElement) : (this.body as HTMLElement);
              if (typeof global.componentsStack !== "undefined") {
                global.componentsStack.filter((c: MainSplashComponent) => c.body.hasAttribute("splashscreen")).map(
                  (mainComponent: MainSplashComponent) => {
                    logger.debug(`Splash Screen of Main Component: ${mainComponent.name}`);
                    mainComponent.splashScreenComponent = this;
                    const SplashScreenHandler = () => {
                      if (!(SplashScreenHandler as any).executed) {
                        const component = mainComponent.splashScreenComponent as SplashScreenComponent;
                        const mainElement = (mainComponent.shadowed) ? (mainComponent.shadowRoot?.host as HTMLElement) : (mainComponent.body as HTMLElement);
                        mainComponent._mainPosition = (mainElement as HTMLElement).style.position;
                        if (typeof mainElement !== "undefined") {
                          mainElement.style.position = "fixed";
                        }
                        mainComponent._mainOpacity = (mainElement as HTMLElement).style.opacity;
                        _componentRoot.style.width = "100%";
                        _componentRoot.style.height = "100%";
                        document.body.style.backgroundColor = "#111111";
                        mainElement.style.opacity = "0";
                        setTimeout(function () {
                          if (typeof _componentRoot !== "undefined") {
                            document.body.style.backgroundColor = component?._bgcolor;
                            (_componentRoot as QCObjectsElement).subelements("#slot-logo").map((slotlogo) => {
                              slotlogo.style.display = "block";
                              slotlogo.style.transformOrigin = "center";
                              return (new Resize()).apply(slotlogo, 1, 0);
                            });
                            (new Fade()).apply(_componentRoot, 1, 0);
                          }
                        }, (duration - displayEffectDuration));
                        setTimeout(function () {
                          (new Fade()).apply(mainElement, 0, 1);
                          mainElement.style.position = mainComponent._mainPosition;
                          document.body.style.backgroundColor = component._bgcolor;
                          if (_componentRoot.parentElement !== null) {
                            _componentRoot.parentElement.remove();
                          }
                        }, duration);
                      }
                      (SplashScreenHandler as any).executed = true;
                    };
                    return mainComponent.addComponentHelper(SplashScreenHandler.bind(mainComponent));
                  }
                );
              }
              _helper_.executed = true;
            }

          });
        };
        _helper_.executed = false;
        this.addComponentHelper(_helper_.bind(component));
      }

    }


  }


  Package("org.qcobjects.components.base", [
    SplashScreenComponent
  ]);

  class VideoSplashScreenComponent extends SplashScreenComponent {
    cached = false;
    shadowed = true;
    tplsource = "inline";
    template = `
  <style>
  :host * {
    box-sizing: border-box;
  }

  :host {
    zoom: 1.0;
    width: device-width;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  #slot-logo::slotted(img) {
      vertical-align: middle;
      display: block;
      width: 40vw;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 9999999999;
      transform-origin: center;
      transform-style: preserve-3d;
      filter: blur(0em);
      transition: filter 0.5s;
      max-width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeIn 5s;
      -webkit-animation: fadeIn 5s;
      -moz-animation: fadeIn 5s;
      -o-animation: fadeIn 5s;
      -ms-animation: fadeIn 5s;        
  }

  :host * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none;
    /* prevent webkit from resizing text to fit */
    -webkit-user-select: none;
    /* prevent copy paste, to allow, change 'none' to 'text' */
  }

  /* FOCUS */
  :host summary:focus,
  :host a:focus,
  :host button:focus {
    outline: none;
  }

  .splashscreen,
  .fullscreen-bg {
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    background-attachment: fixed;
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
  }

  .splashscreen .splashcontent {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    z-index: 1;
  }

  .splashscreen .splashcontent p {
    color: white;
  }

  video.fullscreen-bg__video {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    z-index: 0;
    object-fit: cover;
    filter: brightness(0.3);
  }
    .splashscreen,
    .fullscreen-bg {
      background-image: url('{{background}}');
    }

    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }      

  </style>
  <div class="splashscreen">
    <div class="fullscreen-bg splashcontent">
      <video loop muted autoplay playsinline name="media" poster="{{background}}" class="fullscreen-bg__video" data-setup="{}" height="100%">
        <source src="{{video_mp4}}" type="video/mp4">
        <source src="{{video_ogg}}" type="video/ogg">
        <source src="{{video_webm}}" type="video/webm">
      </video>
      <slot id="slot-logo" name="logo"></slot>
    </div>
  </div>

  `;


    constructor(o: SplashScreenParams) {
      o.name = "videosplashscreen";
      super(o);
    }
  }

  class CubeSplashScreenComponent extends SplashScreenComponent {
    cached = false;
    shadowed = true;
    tplsource = "inline";
    template = `
  <style>
  @keyframes spin {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes spin-duplicate {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes roll {
    0% {
      transform: translate3d(-200px, -50px, -400px)
    }

    12% {
      transform: translate3d(0px, 0, -100px)
    }

    25% {
      transform: translate3d(200px, -50px, -400px)
    }

    37% {
      transform: translate3d(0px, -100px, -800px)
    }

    50% {
      transform: translate3d(-200px, -50px, -400px)
    }

    62% {
      transform: translate3d(0px, 0, -100px)
    }

    75% {
      transform: translate3d(200px, -50px, -400px)
    }

    87% {
      transform: translate3d(0px, -100px, -800px)
    }

    100% {
      transform: translate3d(-200px, -50px, -400px)
    }
  }

  #wrapper {
    position: relative;
    width: 200px;
    padding-top: 100px;
    margin: 0 auto;
    perspective: 1200px;
  }

  #platform {
    margin-top: 100px;
  }

  #dice span {
    position: absolute;
    margin: 100px 0 0 100px;
    display: block;
    font-size: 2.5em;
    padding: 10px;
  }

  #dice {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: spin 50s infinite linear;
  }

  .side {
    position: absolute;
    width: 200px;
    height: 200px;
    background: none;
    box-shadow: inset 0 0 40px #fff0;
    border-radius: 40px;
  }

  #dice .cover, #dice .inner {
    background: #e0e0e0;
    box-shadow: none;
  }

  #dice .cover {
    border-radius: 0;
    transform-origin: center;
    transform: translateZ(0px);
  }

  #dice .cover.x {
    transform-origin: center;
    transform: rotateY(90deg);
  }

  #dice .cover.z {
    transform-origin: center;
    transform: rotateX(90deg);
  }

  #dice .front {
    transform-origin: center;
    transform: translateZ(100px);
  }

  #dice .front.inner {
    transform-origin: center;
    transform: translateZ(98px);
  }

  #dice .back {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(100px);
  }

  #dice .back.inner {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(98px);
  }

  #dice .right {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(100px);
  }

  #dice .right.inner {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(98px);
  }

  #dice .left {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(100px);
  }

  #dice .left.inner {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(98px);
  }

  #dice .top {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(100px);
  }

  #dice .top.inner {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(98px);
  }

  #dice .bottom {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(100px);
  }

  #dice .bottom.inner {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(98px);
  }

  .dot {
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background: #444;
    box-shadow: inset 5px 0 10px #000;
  }

  .dot.center {
    margin: 77px 0 0 77px;
  }

  .dot.dtop {
    margin-top: 20px;
  }

  .dot.dleft {
    margin-left: 134px;
  }

  .dot.dright {
    margin-left: 20px;
  }

  .dot.dbottom {
    margin-top: 134px;
  }

  .dot.center.dleft {
    margin: 77px 0 0 20px;
  }

  .dot.center.dright {
    margin: 77px 0 0 134px;
  }

  #background {
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--root-background, transparent);
    background-size: cover;
    background-origin: border-box;
  }

  #dice .side.front,
  #dice .side.top,
  #dice .side.right,
  #dice .side.left,
  #dice .side.bottom,
  #dice .side.back {
    background-image: var(--background-3d-cube-image, "none");
    background-size: cover;
    background-origin: border-box;
  }


  :root, :host {
    --background-3d-cube-image: url('{{cube_image}}');
    --box-width: 200px;
    font-size:.9em;
    font-family:sans-serif;
    --root-background: {{background}};
  }
  </style>

  <div id="background"></div>
  <div id="wrapper">
    <div id="platform">
      <div id="dice">
        <div class="side front">
        </div>
        <div class="side front inner"></div>
        <div class="side top"></div>
        <div class="side top inner"></div>
        <div class="side right"></div>
        <div class="side right inner"></div>
        <div class="side left"></div>
        <div class="side left inner"></div>
        <div class="side bottom"></div>
        <div class="side bottom inner"></div>
        <div class="side back"></div>
        <div class="side back inner"></div>
        <div class="side cover x"></div>
        <div class="side cover y"></div>
        <div class="side cover z"></div>
      </div>
    </div>
  </div>

  `;

    constructor(o: SplashScreenParams) {
      o.name = "cubesplashscreen";
      super(o);
    }

  }


  Package("org.qcobjects.components.splashscreen", [
    VideoSplashScreenComponent,
    CubeSplashScreenComponent
  ]);

})(_top);

const SplashScreenComponent = _top.SplashScreenComponent;
const VideoSplashScreenComponent = _top.VideoSplashScreenComponent;
const CubeSplashScreenComponent = _top.CubeSplashScreenComponent;

export {
  SplashScreenComponent,
  VideoSplashScreenComponent,
  CubeSplashScreenComponent
};