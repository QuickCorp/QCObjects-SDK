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
(function () {
  "use strict";
  Package("org.qcobjects.controllers.slider", [

    class SliderController extends Controller {
      dependencies = [];
      component = null;
      slideIndex = 0;
      duration = 7100;
      interval = null;
      sliderHandlerName = null;

      constructor({component, dependencies= [], duration = 7100, slideIndex=0, interval = null, sliderHandlerName = null}) {
        super({component, dependencies, duration, slideIndex, interval, sliderHandlerName});
        this.component = component;
        this._componentRoot = (component.shadowed) ? (component.shadowRoot) : (component.body);
        //TODO: Implement
        this.sliderHandlerName = "slider_" + this.component.__instanceID.toString();
        global.set(controller.sliderHandlerName, this);

      }


      stop() {
        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }

      plusSlidesAndStop(n) {
        this.stop();
        this.plusSlides(n);
      }

      plusSlides(n) {
        this.showSlides(this.slideIndex += n);
      }

      currentSlide(n) {
        this.stop();
        this.showSlides(this.slideIndex = n);
      }

      automate() {
        var controller = this;
        controller.interval = setInterval(function () {
          controller.plusSlides(1);
        }, controller.duration);
      }

      showSlides(n) {
        var controller = this;
        var slides = controller._componentRoot.subelements(".qcoSlides");
        var dots = controller._componentRoot.subelements(".qcoSlider__dots--dot");

        if (n > (slides.length - 1)) {
          controller.slideIndex = 0;
        }
        if (n < 0) {
          controller.slideIndex = 0;
        }
        slides.filter((slide, index)=> {return index!== controller.slideIndex;}).map((slide) => {
          (New(ClassFactory("Fade"))).apply(slide, 1, 0);
        });
        dots.filter((dot, index)=> {return index!== controller.slideIndex;}).map((dot) => {
          dot.classList.remove("active");
        });
        try {
          dots[controller.slideIndex].classList.add("active");
        } catch (e) {
          logger.debug(`Something went wrong when trying to activate a slide: ${controller.slideIndex} - ${e.message}`);
        }
        setTimeout(function () {
          slides.filter((slide, index)=> {return index!== controller.slideIndex;}).map((slide) => {
            slide.style.display = "none";
          });
          try {
            slides[controller.slideIndex].style.display = "block";
            (New(ClassFactory("Fade"))).apply(slides[controller.slideIndex], 0, 1);

          } catch (e) {
            logger.debug(`Something went wrong when trying to show a slide: ${controller.slideIndex} - ${e.message}`);
          }
        }, 700);
      }

      fillDots() {
        var controller = this;
        var slides = controller._componentRoot.subelements(".qcoSlides");
        slides.map((slide, index) => {
          var dotHTML = document.createElement("span");
          var dotContent = `<span class="qcoSlider__dots--dot" onclick="global.get('${controller.sliderHandlerName}').currentSlide(${index})"></span>`;
          dotHTML.innerHTML = dotContent;
          controller._componentRoot.subelements(".qcoSlider__dots")[0].append(dotHTML);
        });

      }

      done() {
        var controller = this;
        var slides = controller._componentRoot.subelements(".qcoSlides");
        slides.filter((slide, index)=> {return index!== controller.slideIndex;}).map((slide) => {
          slide.style.display = "none";
        });
        setTimeout(function () {
          controller.fillDots();
          controller.slideIndex = 0;
          controller.showSlides(this.slideIndex);
          controller.automate();
        }, 3000);

      }

    }

  ]);

}).call(null);
