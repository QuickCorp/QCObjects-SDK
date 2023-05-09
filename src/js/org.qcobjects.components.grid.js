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
  Package("org.qcobjects.components.grid", [
    
    class GridItemComponent extends Component {
      name = "grid-item";
      shadowed= true;
      tplsource= "inline";
      template= `
<img src="{{image}}" />
<p>{{description}}</p>
`;
      cached= false;

    },

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

      constructor (o){
        super(o);
        this.body.setAttribute("controllerClass", "DataGridController");
        var subcomponentClass = (this.body.getAttribute("subcomponentClass") !== null) ? (this.body.getAttribute("subcomponentClass")) : ("GridItemComponent");
        this.body.setAttribute("subcomponentClass", subcomponentClass);
  
      }


    }
  ]);

}).call(null);
