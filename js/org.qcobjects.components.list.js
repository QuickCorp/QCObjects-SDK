'use strict';
Package('org.qcobjects.components.list',[
  Class('ListItemComponent',Component,{
    name:'list-item',
    shadowed: false,
    tplsource: "inline",
    template:`<a href="{{value}}">{{label}}</a>`,
    cached: false
  }),
  Class('ListComponent',Component,{
    name:'list',
    shadowed: true,
    tplsource: "inline",
    template: `<p>Loading...</p>`,
    _new_ (o){
      o.body.setAttribute("controllerClass","ListController");
      o.body.setAttribute("subcomponentClass","ListItemComponent");
      _super_("Component","_new_").call(this,o);
    }
  })
]);
