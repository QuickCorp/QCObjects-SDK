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
import { ClassFactory, Controller, New, Package, logger, Component } from "qcobjects";

type SliderParams = {
  dependencies: any[];
  component: Component;
  duration: number;
  slideIndex: number;
  interval: number | null;
  sliderHandlerName: string | null;
};

export class SliderController extends Controller {
  slideIndex = 0;
  duration = 7100;
  interval: any = null;
  sliderHandlerName = "";
  _componentRoot: HTMLElement | ShadowRoot | undefined;
  component: Component;

  constructor({ component, dependencies = [], duration = 7100, slideIndex = 0, interval = null, sliderHandlerName = null }: SliderParams) {
    super({ component, dependencies, duration, slideIndex, interval, sliderHandlerName } as SliderParams);
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

  plusSlidesAndStop(n: number) {
    this.stop();
    this.plusSlides(n);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.stop();
    this.showSlides(this.slideIndex = n);
  }

  automate() {
    this.interval = setInterval(() => {
      this.plusSlides(1);
    }, this.duration);
  }

  showSlides(n: number) {
    const slides = (this._componentRoot as any)?.subelements(".qcoSlides");
    const dots = (this._componentRoot as any)?.subelements(".qcoSlider__dots--dot");

    if (n > (slides.length - 1)) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = 0;
    }
    slides.filter((slide: any, index: number) => { return index !== this.slideIndex; }).map((slide: any) => {

      return (New(ClassFactory("Fade"), {})).apply(slide, 1, 0);
    });
    // eslint-disable-next-line no-unused-vars
    dots.filter((dot: any, index: number) => { return index !== this.slideIndex; }).map((dot: { classList: { remove: (arg0: string) => any; }; }) => {

      return dot.classList.remove("active");
    });
    try {
      dots[this.slideIndex].classList.add("active");
    } catch (e: any) {
      logger.debug(`Something went wrong when trying to activate a slide: ${this.slideIndex} - ${e.message}`);
    }
    setTimeout(() => {
      slides.filter((slide: any, index: number) => { return index !== this.slideIndex; }).map((slide: { style: { display: string; }; }) => {
        slide.style.display = "none";
        return slide.style.display;
      });
      try {
        slides[this.slideIndex].style.display = "block";
        (New(ClassFactory("Fade"), {})).apply(slides[this.slideIndex], 0, 1);

      } catch (e: any) {
        logger.debug(`Something went wrong when trying to show a slide: ${this.slideIndex} - ${e.message}`);
      }
    }, 700);
  }

  fillDots() {
    const slides = (this._componentRoot as any)?.subelements(".qcoSlides");
    slides.map((slide: HTMLElement, index: number) => {
      const dotHTML = document.createElement("span");
      const dotContent = `<span class="qcoSlider__dots--dot" onclick="global.get('${this.sliderHandlerName}').currentSlide(${index})"></span>`;
      dotHTML.innerHTML = dotContent;

      return (this._componentRoot as any)?.subelements(".qcoSlider__dots")[0].append(dotHTML);
    });

  }

  done() {
    const slides = (this._componentRoot as any)?.subelements(".qcoSlides");
    slides.filter((slide: HTMLElement, index: number) => { return index !== this.slideIndex; }).map((slide: { style: { display: string; }; }) => {
      slide.style.display = "none";
      return slide.style.display;
    });
    setTimeout(() => {
      this.fillDots();
      this.slideIndex = 0;
      this.showSlides(this.slideIndex);
      this.automate();
    }, 3000);

  }

}


Package("org.qcobjects.controllers.slider", [

  SliderController
]);
