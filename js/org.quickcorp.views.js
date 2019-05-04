'use strict';
Package('org.quickcorp.views',[
  Class('MainView',View,{
    dependencies:[
      New(SourceCSS,{
        external:(CONFIG.get('useLocalSDK'))?(false):(true),
        url:(CONFIG.get('useLocalSDK'))?('css/basic-layout.css'):(CONFIG.get('remoteSDKPath')+'css/basic-layout.css')
      })
    ],
    component:null,
    _new_:function (o){
      this.__new__(o);
      var controller=this;
      //TODO: Implement
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
