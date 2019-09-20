'use strict';
Package('org.quickcorp.controllers',[
  Class('GridController',Controller,{
    dependencies:[],
    component:null,
    _new_:function (o){
      this.__new__(o);
    },
    done: function (){
      var controller=this;
      var s = document.createElement('style');
      var templateRows = 'auto '.repeat(this.rows);
      var templateCols = 'auto '.repeat(this.cols);
      var className = 'grid'+this.__instanceID.toString();
      s.innerHTML = '.'+className+' { \
                        display: grid; \
                        grid-template-rows: '+templateRows+'; \
                        grid-template-columns: '+templateCols+'; \
                        margin:0 auto; \
                    }';
      this.component.body.append(s);
      var d = document.createElement('div');
      d.className=className;
      this.component.body.append(d);
      logger.debug('GridComponent built');

    }
  }),
  Class('ModalController',Controller,{
    dependencies:[],
    component:null,
    _new_:function (o){
      this.__new__(o);
      var controller=this;
      //TODO: Implement
    },
    done: function (){
      var component = this.component;
      component.body.innerHTML = component.body.innerHTML.replace('{{content}}',component.submodal.template);

    }
  })  
]);
