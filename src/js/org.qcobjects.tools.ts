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
"use strict";

import { Timer, Package, logger } from "qcobjects";

(function() {
  Package("org.qcobjects.tools",[

    class Process extends Timer {
      alive:boolean;
      steps:any[] = [];
      currentStep = 0;

      constructor ({steps = [], currentStep = 0, alive = false}) {
        super({steps, currentStep, alive});
        this.alive = alive;
  
      }

      stop (){
        this.alive=false;
      }

      start (){
        this.alive=true;
        this.thread({
          duration: this.duration,
          timing: (timeFraction:number) => {
            this.currentStep+=1;
            this.steps.map((p:()=> void):Promise<void> | undefined => {
              let _ret_;
              if (typeof p === "function"){
                _ret_ = Promise.resolve().then(
                  function (){
                    p.call(process);
                  });
              }
              return _ret_;
            });
            return timeFraction;
          },
          intervalInterceptor(progress:number) {
            logger.debug("process execution progress: "+progress.toString());
          }
        });
      }
    }

  ]);

})();
