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
(function() {
  Package("org.qcobjects.tools",[

    class Process extends Timer {

      constructor () {
        super();
        this.steps=[];
        this.currentStep=0;
  
      }

      stop (){
        this.alive=false;
      }

      start (){
        var process = this;
        process.alive=true;
        this.thread({
          duration: this.duration,
          timing(timeFraction) {
            process.currentStep+=1;
            process.map(function (p){
              if (typeof p == "function"){
                Promise.resolve().then(
                  function (){
                    p.call(process);
                  });
              }
            });
            return timeFraction;
          },
          draw(progress) {
            logger.debug("process execution progress: "+progress.toString());
          }
        });
      }
    }

  ]);

}).call(null);
