"use strict";
Package("org.qcobjects.components.grid",[
  Class("GridItemComponent",Component,{
    name:"grid-item",
    shadowed: true,
    tplsource: "inline",
    template:`
    <img src="{{image}}" />
    <p>{{description}}</p>
    `,
    cached: false
  }),
  Class("GridComponent",Component,{
    name:"grid",
    cached:false,
    view:null,
    shadowed: true,
    rows:3,
    cols:3,
    templateURI:"",
    data:{},
    tplsource: "inline",
    template: "<p>Loading...</p>",
    _new_ (o){
      o.body.setAttribute("controllerClass","DataGridController");
      var subcomponentClass = (o.body.getAttribute("subcomponentClass") !== null)?(o.body.getAttribute("subcomponentClass")):("GridItemComponent");
      o.body.setAttribute("subcomponentClass",subcomponentClass);
      _super_("Component","_new_").call(this,o);
    }

  })
]);
