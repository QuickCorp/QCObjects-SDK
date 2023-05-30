import { Package, Component, ComponentParams } from "qcobjects";

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
const _top = (typeof module === "object" && typeof module.exports === "object") ? (
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
));
(function (global:any) {
  "use strict";

  class GridItemComponent extends Component {
    name = "grid-item";
    shadowed= true;
    tplsource= "inline";
    template= `
<img src="{{image}}" />
<p>{{description}}</p>
`;

    cached= false;

  }

  class GridComponent extends Component {
    name= "grid";
    cached= false;
    view= null;
    shadowed= true;
    rows= 3;
    cols= 3;
    templateURI= "";
    data= {};
    tplsource= "inline";
    template= "<p>Loading...</p>";

    constructor (o:ComponentParams){
      super(o);
      this.body.setAttribute("controllerClass", "DataGridController");
      const subcomponentClass = (this.body.getAttribute("subcomponentClass") !== null) ? (this.body.getAttribute("subcomponentClass")) : ("GridItemComponent");
      this.body.setAttribute("subcomponentClass", subcomponentClass as string);

    }


  }

  Package("org.qcobjects.components.grid", [
    GridComponent,
    GridItemComponent
  ]);

  global.GridComponent = GridComponent;
  global.GridItemComponent = GridItemComponent;

})(_top);

const GridComponent = (_top as any).GridComponent;
const GridItemComponent = (_top as any).GridItemComponent;

export {
  GridComponent, 
  GridItemComponent
};