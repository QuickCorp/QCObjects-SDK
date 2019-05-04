'use strict';
Package('org.quickcorp.views',[
  Class('BasicLayoutView',View,{
    dependencies:[],
    component:null,
    _new_:function (o){
      if (o.hasOwnProperty('component')){
        this.component = o.component;
      }
      var controller=this;
      this.dependencies.push(New(SourceCSS,{
        external:(CONFIG.get('useLocalSDK'))?(false):(true),
        url:(CONFIG.get('useLocalSDK'))?('css/basic-layout.css'):(CONFIG.get('remoteSDKPath')+'css/basic-layout.css')
      }));
    }
  }),
  Class('GridView',View,{
    dependencies:[],
    component:null,
    _new_:function (o){
      this.__new__(o);
      var controller=this;
      //TODO: Implement
    }
  })
]);
