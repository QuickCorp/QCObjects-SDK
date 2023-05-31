"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalMoveUp = exports.ModalMoveDown = exports.ModalFade = exports.WipeDown = exports.WipeUp = exports.WipeRight = exports.WipeLeft = exports.Resize = exports.Radius = exports.Rotate = exports.RotateZ = exports.RotateY = exports.RotateX = exports.MoveYInFromTop = exports.MoveYInFromBottom = exports.MoveXInFromLeft = exports.MoveXInFromRight = exports.Move = exports.Fade = void 0;
const qcobjects_1 = require("qcobjects");
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
const _top = (typeof module === "object" && typeof module.exports === "object") ? (module.exports = (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
            ? window
            : typeof global !== "undefined"
                ? global
                : {})) : ((typeof global === "object") ? (global) : ((typeof window === "object") ? (window) : ({})));
(function () {
    "use strict";
    class Fade extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
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
    }
    class Move extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, xfrom, yfrom, xto, yto) {
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
    }
    (0, qcobjects_1.Package)("org.qcobjects.effects.base", [
        Fade,
        Move
    ]);
    class MoveXInFromRight extends Move {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element) {
            super.apply.call(this, element, element.width, 0, 0, 0);
        }
    }
    class MoveXInFromLeft extends Move {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element) {
            super.apply.call(this, element, -element.width, 0, 0, 0);
        }
    }
    class MoveYInFromBottom extends Move {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element) {
            super.apply.call(this, element, 0, element.height, 0, 0);
        }
    }
    class MoveYInFromTop extends Move {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element) {
            super.apply.call(this, element, 0, -element.height, 0, 0);
        }
    }
    class RotateX extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, angleFrom, angleTo) {
            const da = angleTo - angleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const angle = Math.round(angleFrom + (progress * da / 100));
                    qcobjects_1.logger.debug("angle: " + angle.toString());
                    element.style.transform = "rotate3d(1,0,0," + angle.toString() + "deg)";
                }
            });
        }
    }
    class RotateY extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, angleFrom, angleTo) {
            const da = angleTo - angleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const angle = Math.round(angleFrom + (progress * da / 100));
                    qcobjects_1.logger.debug("angle: " + angle.toString());
                    element.style.transform = "rotate3d(0,1,0," + angle.toString() + "deg)";
                }
            });
        }
    }
    class RotateZ extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, angleFrom, angleTo) {
            const da = angleTo - angleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const angle = Math.round(angleFrom + (progress * da / 100));
                    qcobjects_1.logger.debug("angle: " + angle.toString());
                    element.style.transform = "rotate3d(0,0,1," + angle.toString() + "deg)";
                }
            });
        }
    }
    class Rotate extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, angleFrom, angleTo) {
            const da = angleTo - angleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const angle = Math.round(angleFrom + (progress * da / 100));
                    qcobjects_1.logger.debug("angle: " + angle.toString());
                    element.style.transform = "rotate3d(1,1,1," + angle.toString() + "deg)";
                }
            });
        }
    }
    class Radius extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, radiusFrom, radiusTo) {
            const dr = radiusTo - radiusFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const radius = radiusFrom + (progress * dr / 100);
                    qcobjects_1.logger.debug("radius: " + radius.toString());
                    element.style.borderRadius = radius.toString() + "px";
                }
            });
        }
    }
    class Resize extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, scaleFrom, scaleTo) {
            const ds = scaleTo - scaleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const scale = scaleFrom + (progress * ds / 100);
                    qcobjects_1.logger.debug("resize: " + scale.toString());
                    element.style.transformOrigin = "center";
                    element.style.transform = "scale(" + scale + "," + scale + ")";
                }
            });
        }
    }
    class WipeLeft extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, scaleFrom, scaleTo) {
            const ds = scaleTo - scaleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const scale = scaleFrom + (progress * ds / 100);
                    qcobjects_1.logger.debug("wipe: " + scale.toString());
                    element.style.transformOrigin = "right";
                    element.style.transform = "scaleX(" + scale + ")";
                }
            });
        }
    }
    class WipeRight extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, scaleFrom, scaleTo) {
            const ds = scaleTo - scaleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const scale = scaleFrom + (progress * ds / 100);
                    qcobjects_1.logger.debug("wipe: " + scale.toString());
                    element.style.transformOrigin = "left";
                    element.style.transform = "scaleX(" + scale + ")";
                }
            });
        }
    }
    class WipeUp extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, scaleFrom, scaleTo) {
            const ds = scaleTo - scaleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const scale = scaleFrom + (progress * ds / 100);
                    qcobjects_1.logger.debug("wipe: " + scale.toString());
                    element.style.transformOrigin = "bottom";
                    element.style.transform = "scaleY(" + scale + ")";
                }
            });
        }
    }
    class WipeDown extends qcobjects_1.Effect {
        constructor() {
            super(...arguments);
            this.duration = 1000;
        }
        apply(element, scaleFrom, scaleTo) {
            const ds = scaleTo - scaleFrom;
            this.animate({
                duration: this.duration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    qcobjects_1.logger.debug("animation progress: " + progress.toString());
                    const scale = scaleFrom + (progress * ds / 100);
                    qcobjects_1.logger.debug("wipe: " + scale.toString());
                    element.style.transformOrigin = "top";
                    element.style.transform = "scaleY(" + scale + ")";
                }
            });
        }
    }
    (0, qcobjects_1.Package)("org.qcobjects.effects.extended", [
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
        constructor() {
            super(...arguments);
            this.duration = 500;
        }
    }
    class ModalMoveDown extends Move {
        constructor() {
            super(...arguments);
            this.duration = 300;
        }
    }
    class ModalMoveUp extends Move {
        constructor() {
            super(...arguments);
            this.duration = 800;
        }
    }
    (0, qcobjects_1.Package)("org.qcobjects.modal.effects", [
        ModalFade,
        ModalMoveDown,
        ModalMoveUp
    ]);
})();
const Fade = _top.Fade;
exports.Fade = Fade;
const Move = _top.Fade;
exports.Move = Move;
const MoveXInFromRight = _top.MoveXInFromRight;
exports.MoveXInFromRight = MoveXInFromRight;
const MoveXInFromLeft = _top.MoveXInFromLeft;
exports.MoveXInFromLeft = MoveXInFromLeft;
const MoveYInFromBottom = _top.MoveYInFromBottom;
exports.MoveYInFromBottom = MoveYInFromBottom;
const MoveYInFromTop = _top.MoveYInFromTop;
exports.MoveYInFromTop = MoveYInFromTop;
const RotateX = _top.RotateX;
exports.RotateX = RotateX;
const RotateY = _top.RotateY;
exports.RotateY = RotateY;
const RotateZ = _top.RotateZ;
exports.RotateZ = RotateZ;
const Rotate = _top.Rotate;
exports.Rotate = Rotate;
const Radius = _top.Radius;
exports.Radius = Radius;
const Resize = _top.Resize;
exports.Resize = Resize;
const WipeLeft = _top.WipeLeft;
exports.WipeLeft = WipeLeft;
const WipeRight = _top.WipeRight;
exports.WipeRight = WipeRight;
const WipeUp = _top.WipeUp;
exports.WipeUp = WipeUp;
const WipeDown = _top.WipeDown;
exports.WipeDown = WipeDown;
const ModalFade = _top.ModalFade;
exports.ModalFade = ModalFade;
const ModalMoveDown = _top.ModalMoveDown;
exports.ModalMoveDown = ModalMoveDown;
const ModalMoveUp = _top.ModalMoveUp;
exports.ModalMoveUp = ModalMoveUp;
