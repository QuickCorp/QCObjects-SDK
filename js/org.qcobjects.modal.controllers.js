"use strict";
Package("org.qcobjects.modal.controllers",[
  Class("ModalController",Controller,{
    dependencies:[],
    component:null,
    _new_:function (o){
      this.__new__(o);
    },
    done: function (){
      var component = this.component;
      component.body.innerHTML = component.body.innerHTML.replace("/{{content}}/g",component.submodal.template);

    }
  })
]);
