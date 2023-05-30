/* eslint-disable array-callback-return */
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

import { CONFIG, InheritClass, New, Package, SourceCSS, Tag } from "qcobjects";
import { Fade, MoveXInFromLeft, MoveXInFromRight, MoveYInFromBottom } from "./org.qcobjects.effects";

(function() {
  Package("org.qcobjects.tools.layouts",[

    class BasicLayout extends InheritClass {
      dependencies:any[] = [];

      constructor ({component = null, dependencies = []}) {
        super({component, dependencies});  
      }

      load (){
        this.dependencies.push(New(SourceCSS,{
          external:!(CONFIG.get("useLocalSDK",false)),
          url:(CONFIG.get("useLocalSDK",false))?("css/basic-layout.css"):(CONFIG.get("remoteSDKPath",false)+"css/basic-layout.css")
        }));
      }
      
      coloredBorder (){
        /*
        * A helper function to visualize the layout borders
        * Usage: BasicLayout.coloredBorder()
        */
        setTimeout(function (){
          Tag("nav").map((element:HTMLElement)=>{element.style.border="20px solid #3333";});
          Tag("nav").map((element:HTMLElement)=>{element.style.backgroundColor="#129999";});
          Tag("component>footer").map((element:HTMLElement)=>{element.style.background="#876";});
          Tag("component>div").map((element:HTMLElement)=>{element.style.border="3px dashed #fff";});
          Tag("component>section").map((element:HTMLElement)=>{element.style.border="3px solid #000";});
          Tag("component>section").map((element:HTMLElement)=>{element.style.backgroundColor="#fffaaa";});

          Tag("component>article").map((element:HTMLElement)=>{element.style.border="3px dotted #000";});
          Tag("component>header").map((element:HTMLElement)=>{element.style.background="#789";});
          Tag("component>footer").map((element:HTMLElement)=>{element.style.background="#876";});
          Tag("component>article:nth-child(1)").map((element:HTMLElement)=>{element.style.border="1px solid #444";});
          Tag("component>article:nth-child(1)").map((element:HTMLElement)=>{element.style.backgroundColor="#555aaa";});
          Tag("component>article:nth-child(2)").map((element:HTMLElement)=>{element.style.backgroundColor="#aaa333";});
          Tag("component>article:nth-child(3)").map((element:HTMLElement)=>{element.style.backgroundColor="#54da82";});
          Tag("*").map((element:HTMLElement)=>{element.style.color="#fff";});


          Tag("component>article").map((element:HTMLElement)=>Fade.apply(element,0,1));
          Tag("component>footer").map((element:HTMLElement)=>Fade.apply(element,0,1));
          Tag("component>header").map((element:HTMLElement)=>Fade.apply(element,0,1));
          Tag("nav").map((element:HTMLElement)=>{element.style.display="block";element.style.width=element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString() ;MoveXInFromLeft.apply(element);});
          Tag("component>article").map((element:HTMLElement)=>{element.style.display="block";element.style.height=element.offsetParent?.scrollHeight.toString() || element.clientHeight.toString();MoveYInFromBottom.apply(element);});
          Tag("component>article:nth-child(2)").map((element:HTMLElement)=>{element.style.display="block";element.style.width=element.offsetParent?.scrollWidth.toString() || element.clientWidth.toString();MoveXInFromRight.apply(element);});
        },300);
      }


    }

  ]);

})();
