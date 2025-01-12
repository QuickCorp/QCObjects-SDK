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
import {Effect, logger, Package} from "qcobjects";
import {Move, MoveElement} from "./org.qcobjects.effects.base";

export class MoveXInFromRight extends Move {
    duration = 1000;

    static apply(element:MoveElement) {
      Move.apply.call(this, element, element.width as number, 0, 0, 0);
    }
  }

  export class MoveXInFromLeft extends Move {
    duration = 1000;

    static apply(element:MoveElement) {
      Move.apply.call(this, element, -(element.width as number), 0, 0, 0);
    }
  }

  export class MoveYInFromBottom extends Move {
    duration = 1000;

    static apply(element:MoveElement) {
      Move.apply.call(this, element, 0, element.height as number, 0, 0);
    }

  }

  export class MoveYInFromTop extends Move {
    duration = 1000;

    static apply(element:MoveElement ) {
      Move.apply.call(this, element, 0, -(element.height as number), 0, 0);
    }
  }

  export class RotateX extends Effect {
    duration = 1000;
    static duration: any;

    static apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(1,0,0," + angle.toString() + "deg)";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    static animate(arg0: { duration: any; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class RotateY extends Effect {
    duration = 1000;
    static duration: any;

    static apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(0,1,0," + angle.toString() + "deg)";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    static animate(arg0: { duration: any; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }
  }

  export class RotateZ extends Effect {
    duration = 1000;

    apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(0,0,1," + angle.toString() + "deg)";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class Rotate extends Effect {
    duration = 1000;

    apply(element:HTMLElement, angleFrom:number, angleTo:number) {
      const da = angleTo - angleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const angle = Math.round(angleFrom + (progress * da / 100));
          logger.debug("angle: " + angle.toString());
          element.style.transform = "rotate3d(1,1,1," + angle.toString() + "deg)";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }
  }

  export class Radius extends Effect {
    duration = 1000;

    apply(element:HTMLElement, radiusFrom:number, radiusTo:number) {
      const dr = radiusTo - radiusFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const radius = radiusFrom + (progress * dr / 100);
          logger.debug("radius: " + radius.toString());
          element.style.borderRadius = radius.toString() + "px";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class Resize extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("resize: " + scale.toString());
          element.style.transformOrigin = "center";
          element.style.transform = "scale(" + scale + "," + scale + ")";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class WipeLeft extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "right";
          element.style.transform = "scaleX(" + scale + ")";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class WipeRight extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "left";
          element.style.transform = "scaleX(" + scale + ")";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class WipeUp extends Effect {

    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "bottom";
          element.style.transform = "scaleY(" + scale + ")";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }

  }

  export class WipeDown extends Effect {
    duration = 1000;

    apply(element:HTMLElement, scaleFrom:number, scaleTo:number) {
      const ds = scaleTo - scaleFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
           
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const scale = scaleFrom + (progress * ds / 100);
          logger.debug("wipe: " + scale.toString());
          element.style.transformOrigin = "top";
          element.style.transform = "scaleY(" + scale + ")";
        }
      });
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0: { duration: number; timing(timeFraction: any): any; draw(progress: any): void; }) {
      throw new Error("Method not implemented.");
    }
  }
  Package("org.qcobjects.effects.extended", [
    MoveXInFromRight,
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
    WipeDown

  ]);
