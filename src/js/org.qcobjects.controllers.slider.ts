import { ClassFactory, Controller, ControllerParams, New, Package, QCObjectsElement, QCObjectsShadowedElement, logger } from "qcobjects";

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
(function (global) {
  "use strict";
  type SliderParams = ControllerParams & { 
    duration:number;
    slideIndex:number;
    interval:number | null;
    sliderHandlerName:string | null;
  };
  Package("org.qcobjects.controllers.slider", [

    class SliderController extends Controller {
      slideIndex = 0;
      duration = 7100;
      interval:any = null;
      sliderHandlerName = "";
      _componentRoot: QCObjectsElement | QCObjectsShadowedElement | HTMLElement | ShadowRoot | undefined;

      constructor({component, dependencies= [], duration = 7100, slideIndex=0, interval = null, sliderHandlerName = null}:SliderParams) {
        super({component, dependencies, duration, slideIndex, interval, sliderHandlerName} as SliderParams);
        this.component = component;
        this._componentRoot = (component.shadowed) ? (component.shadowRoot) : (component.body);
        this.sliderHandlerName = "slider_" + this.component.__instanceID.toString();
        (global as any).set(this.sliderHandlerName, this);

      }


      stop() {
        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }

      plusSlidesAndStop(n:number) {
        this.stop();
        this.plusSlides(n);
      }

      plusSlides(n:number) {
        this.showSlides(this.slideIndex += n);
      }

      currentSlide(n:number) {
        this.stop();
        this.showSlides(this.slideIndex = n);
      }

      automate() {
        this.interval = setInterval(() => {
          this.plusSlides(1);
        }, this.duration);
      }

      showSlides(n:number) {
        const slides = (this._componentRoot as QCObjectsElement)?.subelements(".qcoSlides");
        const dots = (this._componentRoot as QCObjectsElement)?.subelements(".qcoSlider__dots--dot");

        if (n > (slides.length - 1)) {
          this.slideIndex = 0;
        }
        if (n < 0) {
          this.slideIndex = 0;
        }
        slides.filter((slide, index)=> {return index!== this.slideIndex;}).map((slide) => {
          return (New(ClassFactory("Fade"),{})).apply(slide, 1, 0);
        });
        dots.filter((dot, index)=> {return index!== this.slideIndex;}).map((dot) => {
          return dot.classList.remove("active");
        });
        try {
          dots[this.slideIndex].classList.add("active");
        } catch (e:any) {
          logger.debug(`Something went wrong when trying to activate a slide: ${this.slideIndex} - ${e.message}`);
        }
        setTimeout( () => {
          slides.filter((slide, index)=> {return index!== this.slideIndex;}).map((slide) => {
            slide.style.display = "none";
            return slide.style.display;
          });
          try {
            slides[this.slideIndex].style.display = "block";
            (New(ClassFactory("Fade"), {})).apply(slides[this.slideIndex], 0, 1);

          } catch (e:any) {
            logger.debug(`Something went wrong when trying to show a slide: ${this.slideIndex} - ${e.message}`);
          }
        }, 700);
      }

      fillDots() {
        const slides = (this._componentRoot as QCObjectsElement)?.subelements(".qcoSlides");
        slides.map((slide:QCObjectsElement | HTMLElement, index:number) => {
          const dotHTML = document.createElement("span");
          const dotContent = `<span class="qcoSlider__dots--dot" onclick="global.get('${this.sliderHandlerName}').currentSlide(${index})"></span>`;
          dotHTML.innerHTML = dotContent;
          return (this._componentRoot as QCObjectsElement)?.subelements(".qcoSlider__dots")[0].append(dotHTML);
        });

      }

      done() {
        const slides = (this._componentRoot as QCObjectsElement)?.subelements(".qcoSlides");
        slides.filter((slide:QCObjectsElement | HTMLElement, index)=> {return index!== this.slideIndex;}).map((slide) => {
          slide.style.display = "none";
          return slide.style.display;
        });
        setTimeout( () => {
          this.fillDots();
          this.slideIndex = 0;
          this.showSlides(this.slideIndex);
          this.automate();
        }, 3000);

      }

    }

  ]);

})((typeof module === "object" && typeof module.exports === "object") ? (
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
)));