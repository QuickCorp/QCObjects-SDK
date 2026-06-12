import { Package, Effect, logger } from "qcobjects";

export type MoveElement = HTMLElement & {
    width?:number;
    height?:number;
  };

  export class Fade extends Effect {
    duration = 1000;
    static duration: any;

    constructor(o?:{duration:number}){
      super(o);
      this.duration = o?.duration as number;
    }
    apply(element:HTMLElement, alphaFrom:number, alphaTo:number) {
      const da = alphaTo - alphaFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const alpha = alphaFrom + (progress * da / 100);
          logger.debug("alpha: " + alpha.toString());
          element.style.opacity = alpha.toString();
        }
      });

    }

    static apply(element:HTMLElement, alphaFrom:number, alphaTo:number) {
      const da = alphaTo - alphaFrom;
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
          logger.debug("animation progress: " + progress.toString());
          const alpha = alphaFrom + (progress * da / 100);
          logger.debug("alpha: " + alpha.toString());
          element.style.opacity = alpha.toString();
        }
      });
    }
  }

  export class Move extends Effect {
    duration = 1000;
    static duration: any;

    static apply(element:MoveElement, xfrom:number, yfrom:number, xto:number, yto:number) {
      const dx = xto - xfrom;
      const dy = yto - yfrom;
      element.style.transform = "translate(" + xfrom + "px," + yfrom + "px)";
      super.animate({
        duration: this.duration,
        timing(timeFraction: number) {
           
          return timeFraction;
        },
        draw(progress: number) {
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
