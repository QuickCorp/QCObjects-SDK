/**
 * QCObjects SDK 1.0
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
  Package('org.quickcorp.components',[
    Class('FormField',Component,{
      cached:false,
      reload:true,
    	createBindingEvents:function (){
    		var _executeBinding = this.executeBinding;
    		var thisobj = this;
        if (typeof this.fieldType =='undefined' || this.fieldType == null ){
          var _objList = this.body.subelements('*[data-field]'); // every child with data-field set
        } else {
          var _objList = this.body.subelements(this.fieldType+'[data-field]'); // every child with data-field set and tagname is equal to fieldType property
        }
    		for (var _datak=0;_datak<_objList.length;_datak++){
    			var _obj = _objList[_datak];
    			_obj.addEventListener('change',function(e){
    				logger.debug('Executing change event binding');
    				thisobj.executeBindings();
    			});
    			_obj.addEventListener('keydown',function(e){
    				logger.debug('Executing keydown event binding');
    					thisobj.executeBindings();
    			});
    		}
    	},
    	executeBinding:function (_obj){
    		var _datamodel = _obj.getAttribute('data-field');
    		logger.debug('Binding '+_datamodel+' for '+this.name);
    		this.data[_datamodel]=_obj.value;
    	},
    	executeBindings:function (){
        if (typeof this.fieldType =='undefined' || this.fieldType == null ){
          var _objList = this.body.subelements('*[data-field]'); // every child with data-field set
        } else {
          var _objList = this.body.subelements(this.fieldType+'[data-field]'); // every child with data-field set and tagname is equal to fieldType property
        }
    		for (var _datak=0;_datak<_objList.length;_datak++){
    			var _obj = _objList[_datak];
    			var _datamodel = _obj.getAttribute('data-field');
          logger.debug('Binding '+_datamodel+' for '+this.name);
    			this.data[_datamodel]=_obj.value;
    		}
    	},
      done:function (){
        var thisobj = this;
        thisobj.executeBindings();
    		thisobj.createBindingEvents();
        logger.debug('Field loaded: '+thisobj.fieldType+'[name='+thisobj.name+']');
      }
    }),
    Class('ButtonField',FormField,{
    	fieldType:'button'
    }),
    Class('InputField',FormField,{
    	fieldType:'input'
    }),
    Class('TextField',FormField,{
      fieldType:'textarea'
    }),
    Class('EmailField',FormField,{
    	fieldType:'input'
    })
  ]);
  Package('org.quickcorp.tools.effects',[
    Class('Effect',{
      animate: function ({timing, draw, duration}) {

        let start = performance.now();

        requestAnimationFrame(function animate(time) {
          // timeFraction goes from 0 to 1
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;

          // calculate the current animation state
          let progress = timing(timeFraction);

          draw(Math.round(progress*100)); // draw it

          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }

        });
      }
    }),
    Class('Move',Effect,{
      apply: function (element, xfrom, yfrom, xto, yto){
        var dx = xto-xfrom;
        var dy = yto-yfrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var y = yfrom + (progress*dy/100);
            var x = xfrom + (progress*dx/100);
            logger.debug('x: '+x.toString()+' y:'+y.toString());
            element.style.top=y;
            element.style.left=x;
          }
        });
      }
    }),
    Class('RotateX',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(1,0,0,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('RotateY',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(0,1,0,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('RotateZ',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(0,0,1,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('Rotate',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(1,1,1,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('Fade',Effect,{
      apply: function (element, alphaFrom,alphaTo){
        var da = alphaTo-alphaFrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var alpha = alphaFrom + (progress*da/100);
            logger.debug('alpha: '+alpha.toString());
            element.style.opacity= alpha.toString();
          }
        });
      }
    }),
    Class('Radius',Effect,{
      apply: function (element, radiusFrom,radiusTo){
        var dr = radiusTo-radiusFrom;
        this.animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var radius = radiusFrom + (progress*dr/100);
            logger.debug('alpha: '+radius.toString());
            element.style.borderRadius= radius.toString()+'px';
          }
        });
      }
    })
  ]);
  Package('org.quickcorp.tools.canvas',[
    Class('CanvasTool',{
      drawImageFilled: function (img,canvas){
        // get the scale
        var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      },
      getImageResized: function (img,width,height,resizedImage){
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width;
        canvas.style.height = height;
        this.drawImageFilled(img,canvas);
        resizedImage.src = canvas.toDataURL("image/png");
        return canvas;
      }
    })
  ]);
  Ready(function (){
    CONFIG.set('useSDK',true);
  });

}).call(null);
