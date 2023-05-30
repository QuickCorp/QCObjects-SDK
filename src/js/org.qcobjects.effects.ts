import { Effect, Package, QCObjectsElement, logger } from "qcobjects";

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
const _top:any = (typeof module === "object" && typeof module.exports === "object") ? (
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

(function () {
  "use strict";

  type MoveElement = HTMLElement & {
    width:number;
    height:number;
  };

  class Fade extends Effect {
    duration = 1000;

    apply(element:HTMLElement, alphaFrom:number, alphaTo:number) {
      const da = alphaTo - alphaFrom;
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const alpha = alphaFrom + (progress * da / 100);
          logger.debug("alpha: " + alpha.toString());
          element.style.opacity = alpha.toString();
        }
      });
    }
  }

  class Move extends Effect {
    duration = 1000;

    apply(element:MoveElement, xfrom:number, yfrom:number, xto:number, yto:number) {
      const dx = xto - xfrom;
      const dy = yto - yfrom;
      element.style.transform = "translate(" + xfrom + "px," + yfrom + "px)";
      this.animate({
        duration: this.duration,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          logger.debug("animation progress: " + progress.toString());
          const y = yfrom + (progress * dy / 100);
          const x = xfrom + (progress * dx / 100);
          logger.debug("x: " + x.toString() + " y:" + y.toString());
          element.style.transform = "translate(" + x + "px," + y + "px)";
        }
      });
    }

  }

  Package("org.qcobjects.effects.base", [
    Fade,
    Move
  ]);



  class MoveXInFromRight extends Move {
    duration = 1000;

    apply(element:MoveElement) {
      super.apply.call(this, element, element.width, 0, 0, 0);
    }
  }

  class MoveXInFromLeft extends Move {
    duration = 1000;

    apply(element:MoveElement) {
      super.apply.call(this, element, -element.width, 0, 0, 0);
    }
  }

  class MoveYInFromBottom extends Move {
    duration = 1000;

    apply(element:MoveElement) {
      super.apply.call(this, element, 0, element.height, 0, 0);
    }

  }

  class MoveYInFromTop extends Move {
    duration = 1000;

    apply(element:MoveElement ) {
      super.apply.call(this, element, 0, -element.height, 0, 0);
    }
  }

  class RotateX extends Effect {
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
          element.style.transform = "rotate3d(1,0,0," + angle.toString() + "deg)";
        }
      });
    }

  }

  class RotateY extends Effect {
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
          element.style.transform = "rotate3d(0,1,0," + angle.toString() + "deg)";
        }
      });
    }
  }

  class RotateZ extends Effect {
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

  }

  class Rotate extends Effect {
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
  }

  class Radius extends Effect {
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

  }

  class Resize extends Effect {
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

  }

  class WipeLeft extends Effect {
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

  }

  class WipeRight extends Effect {
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

  }

  class WipeUp extends Effect {

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

  }

  class WipeDown extends Effect {
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

  class ModalFade extends Fade {
    duration = 500;

  }

  class ModalMoveDown extends Move {
    duration = 300;

  }

  class ModalMoveUp extends Move {

    duration = 800;

  }


  Package("org.qcobjects.modal.effects", [
    ModalFade,
    ModalMoveDown,
    ModalMoveUp

  ]);

})();

const Fade = _top.Fade;
const Move = _top.Fade;
const MoveXInFromRight = _top.MoveXInFromRight;
const MoveXInFromLeft = _top.MoveXInFromLeft;
const MoveYInFromBottom = _top.MoveYInFromBottom;
const MoveYInFromTop = _top.MoveYInFromTop;
const RotateX = _top.RotateX;
const RotateY = _top.RotateY;
const RotateZ = _top.RotateZ;
const Rotate = _top.Rotate;
const Radius = _top.Radius;
const Resize = _top.Resize;
const WipeLeft = _top.WipeLeft;
const WipeRight = _top.WipeRight;
const WipeUp = _top.WipeUp;
const WipeDown = _top.WipeDown;
const ModalFade = _top.ModalFade;
const ModalMoveDown = _top.ModalMoveDown;
const ModalMoveUp = _top.ModalMoveUp;

export {
  Fade,
  Move,
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
  WipeDown,
  ModalFade,
  ModalMoveDown,
  ModalMoveUp
};