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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WipeDown = exports.WipeUp = exports.WipeRight = exports.WipeLeft = exports.Resize = exports.Radius = exports.Rotate = exports.RotateZ = exports.RotateY = exports.RotateX = exports.MoveYInFromTop = exports.MoveYInFromBottom = exports.MoveXInFromLeft = exports.MoveXInFromRight = void 0;
const qcobjects_1 = require("qcobjects");
const org_qcobjects_effects_base_1 = require("./org.qcobjects.effects.base");
class MoveXInFromRight extends org_qcobjects_effects_base_1.Move {
    duration = 1000;
    static apply(element) {
        org_qcobjects_effects_base_1.Move.apply.call(this, element, element.width, 0, 0, 0);
    }
}
exports.MoveXInFromRight = MoveXInFromRight;
class MoveXInFromLeft extends org_qcobjects_effects_base_1.Move {
    duration = 1000;
    static apply(element) {
        org_qcobjects_effects_base_1.Move.apply.call(this, element, -element.width, 0, 0, 0);
    }
}
exports.MoveXInFromLeft = MoveXInFromLeft;
class MoveYInFromBottom extends org_qcobjects_effects_base_1.Move {
    duration = 1000;
    static apply(element) {
        org_qcobjects_effects_base_1.Move.apply.call(this, element, 0, element.height, 0, 0);
    }
}
exports.MoveYInFromBottom = MoveYInFromBottom;
class MoveYInFromTop extends org_qcobjects_effects_base_1.Move {
    duration = 1000;
    static apply(element) {
        org_qcobjects_effects_base_1.Move.apply.call(this, element, 0, -element.height, 0, 0);
    }
}
exports.MoveYInFromTop = MoveYInFromTop;
class RotateX extends qcobjects_1.Effect {
    duration = 1000;
    static duration;
    static apply(element, angleFrom, angleTo) {
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
    // eslint-disable-next-line no-unused-vars
    static animate(arg0) {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.RotateX = RotateX;
class RotateY extends qcobjects_1.Effect {
    duration = 1000;
    static duration;
    static apply(element, angleFrom, angleTo) {
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
    // eslint-disable-next-line no-unused-vars
    static animate(arg0) {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.RotateY = RotateY;
class RotateZ extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.RotateZ = RotateZ;
class Rotate extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.Rotate = Rotate;
class Radius extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.Radius = Radius;
class Resize extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.Resize = Resize;
class WipeLeft extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.WipeLeft = WipeLeft;
class WipeRight extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.WipeRight = WipeRight;
class WipeUp extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.WipeUp = WipeUp;
class WipeDown extends qcobjects_1.Effect {
    duration = 1000;
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
    // eslint-disable-next-line no-unused-vars
    animate(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.WipeDown = WipeDown;
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
