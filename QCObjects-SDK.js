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
  Package('org.quickcorp',[
    Class('SDKDependencies',Object,{
      dependencies:[],
      _new_:function (o){
        if (CONFIG.get('useLocalSDK')){
          Import('org.quickcorp.models.js');
          Import('org.quickcorp.components.js');
          Import('org.quickcorp.controllers.js');
          Import('org.quickcorp.views.js');
          Import('org.quickcorp.effects.js');
          Import('org.quickcorp.tools.canvas.js');
        } else {
          this.dependencies = [
            New(SourceJS,{url:'https://sdk.qcobjects.dev/js/org.quickcorp.models.js',external:true}),
            New(SourceJS,{url:'https://sdk.qcobjects.dev/js/org.quickcorp.components.js',external:true}),
            New(SourceJS,{url:'https://sdk.qcobjects.dev/js/org.quickcorp.controllers.js',external:true}),
            New(SourceJS,{url:'https://sdk.qcobjects.dev/js/org.quickcorp.views.js',external:true}),
            New(SourceJS,{url:'https://sdk.qcobjects.dev/js/org.quickcorp.effects.js',external:true}),
            New(SourceJS,{url:'https://sdk.qcobjects.dev/js/org.quickcorp.tools.canvas.js',external:true}),
          ];
        }

      }
    })
  ]);

  CONFIG.set('useSDK',true);
  GLOBAL.sdkDependencies = New(SDKDependencies,{});

}).call(null);
