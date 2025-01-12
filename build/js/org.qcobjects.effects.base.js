"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = exports.Fade = void 0;
const qcobjects_1 = require("qcobjects");
class Fade extends qcobjects_1.Effect {
    duration = 1000;
    static duration;
    constructor(o) {
        super(o);
        this.duration = o?.duration;
    }
    apply(element, alphaFrom, alphaTo) {
        const da = alphaTo - alphaFrom;
        this.animate({
            duration: this.duration,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                qcobjects_1.logger.debug("animation progress: " + progress.toString());
                const alpha = alphaFrom + (progress * da / 100);
                qcobjects_1.logger.debug("alpha: " + alpha.toString());
                element.style.opacity = alpha.toString();
            }
        });
    }
    static apply(element, alphaFrom, alphaTo) {
        const da = alphaTo - alphaFrom;
        this.animate({
            duration: this.duration,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                qcobjects_1.logger.debug("animation progress: " + progress.toString());
                const alpha = alphaFrom + (progress * da / 100);
                qcobjects_1.logger.debug("alpha: " + alpha.toString());
                element.style.opacity = alpha.toString();
            }
        });
    }
    // eslint-disable-next-line no-unused-vars
    static animate(arg0) {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.Fade = Fade;
class Move extends qcobjects_1.Effect {
    duration = 1000;
    static duration;
    static apply(element, xfrom, yfrom, xto, yto) {
        const dx = xto - xfrom;
        const dy = yto - yfrom;
        element.style.transform = "translate(" + xfrom + "px," + yfrom + "px)";
        this.animate({
            duration: this.duration,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                qcobjects_1.logger.debug("animation progress: " + progress.toString());
                const y = yfrom + (progress * dy / 100);
                const x = xfrom + (progress * dx / 100);
                qcobjects_1.logger.debug("x: " + x.toString() + " y:" + y.toString());
                element.style.transform = "translate(" + x + "px," + y + "px)";
            }
        });
    }
    // eslint-disable-next-line no-unused-vars
    static animate(arg0) {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.Move = Move;
(0, qcobjects_1.Package)("org.qcobjects.effects.base", [
    Fade,
    Move
]);
