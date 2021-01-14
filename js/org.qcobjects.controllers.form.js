'use strict';
Package('org.qcobjects.controllers.form',[
  Class('FormValidations',Controller,{
    getDefault (fieldName){
      return function (fieldName,dataValue, element){
        var _regex = {
                      name:"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                      email:"^([A-Za-z0-9]+)\@([A-Za-z0-9]+)\.([A-Za-z0-9]+)$"
                    };
        var _pattern_ = (element.getAttribute('pattern') || _regex[fieldName]);
        var pattern = new RegExp(_pattern_);
        return pattern.test(dataValue)
      }
    }
  }),
  Class('FormController',Controller,{
    dependencies:[],
    component:null,
    serviceClass:'',
    formSettings:{
      backRouting:'#',
      loadingRouting:'#loading',
      nextRouting:'#signupsuccessful'
    },
    hasValidation(element){
      var fieldName = element.getAttribute('data-field');
      var _hasValidation = false;
      if (typeof this.validations !== 'undefined'
        && this.validations.hasOwnProperty(fieldName)){
        _hasValidation = true;
      }
      return _hasValidation;
    },
    isInvalid (element){
      var controller = this;
      var _isInvalid = false;
      var fieldName = element.getAttribute('data-field');
      var dataValue = this.component.data[fieldName];

      var _execValidation = function (fieldName, dataValue, element){
        return (typeof controller.validations !== 'undefined'
        && controller.validations.hasOwnProperty(fieldName)
        && controller.validations[fieldName].call(controller).call(controller,fieldName,dataValue, element));
      };

      if (typeof this.validations !== 'undefined' && (
        !_execValidation(fieldName, dataValue, element)
      )){
        _isInvalid = true;
      }
      return _isInvalid;
    },
    isValid (element){
      return !this.isInvalid(element);
    },
    save: function (){
      var controller = this;
      if (controller.serviceClass !== ''){
        location.href=controller.formSettings.loadingRouting;
        var service = serviceLoader(New(ClassFactory(controller.serviceClass),{
            data:controller.component.data
        })).then(
          (successfulResponse)=>{
            // This will show the service response as a plain text
            console.log('DONE SERVICE COMPONENT');
            try{
              console.log(successfulResponse.service.JSONresponse);
            }catch (e){
                // no json
            }
            location.href=controller.formSettings.nextRouting;

          },
          (failedResponse)=>{
            location.href=controller.formSettings.backRouting;
          });
      } else {
        logger.debug('No service name declared on serviceClass property')
      }

    },
    formSaveTouchHandler: function (){
      logger.debug('Saving data...');
      var controller = this;
      controller.component.executeBindings();
      if (controller.formValidatorModal!=null){
        var componentElementFields = controller.component.body.subelements('*[data-field]');
        var fieldsToValidate = componentElementFields.filter(
          f => controller.hasValidation.call(controller,f)
        );

        var _labelledby = function (parentElement, element){
          var _arialabelledby = function (parentElement, element){
            return (element.getAttribute('aria-labelledby') !== null)?(element.getAttribute('aria-labelledby').split(' ').map(
              e => parentElement.subelements(`#${e}`).map(_e => _e.innerHTML)
            ).join(' ')):(null)
          }

          return (_arialabelledby(parentElement, element)
                  || element.getAttribute('aria-label')
                  || element.getAttribute('placeholder')
                  || element.getAttribute('name')
                  || element.getAttribute('data-field') );
        };

        var _ariatitle = function (element){
          return (element.getAttribute('title') || element.getAttribute('aria-title') || '');
        }

        var invalidFields = fieldsToValidate.filter(f=>controller.isInvalid(f));
        if (invalidFields.length>0){
          var validationMessage = `
<details>
    <summary>Please verify the following incorrect fields:</summary>
    <ul>
      <div>
      ${invalidFields.map(element => '<li><div>'+_labelledby(controller.component.body,element)+'</div><div>'+_ariatitle(element)+'</div></li>').join('')}
      </div>
    </ul>
</details>
`;
          controller.formValidatorModal.body.subelements('.validationMessage')[0].innerHTML=validationMessage;
          controller.formValidatorModal.modal();
        } else {
          controller.save();
        }
      } else {
        logger.debug('Unable to find the modal validator...');
        logger.debug('Saving data...');
        controller.save();
      }
    },
    _new_:function (o){
      var controller = this;
      this.__new__(o);
      var controller=this;
      controller.component = o.component;
      controller.component = controller.component.Cast(FormField);
    },
    done: function (){
      logger.debugEnabled=true;
      var controller=this;
      try {
        controller.component.createBindingEvents();
        var modalBody = _DOMCreateElement('div');
        modalBody.className='modal_body';
        controller.formValidatorModal = New(ModalComponent,{
          body:modalBody,
          subcomponents:[],
          data:{
            content:'<div class="validationMessage"></div>'
          }
        });

        Tag('.modal_body').map(e=>document.body.removeChild(e));
        document.body.append(controller.formValidatorModal);

      } catch (e){
        logger.debug('Unable to create the modal');
      }
      controller.onpress('.submit',function (e){
        e.preventDefault();
        controller.formSaveTouchHandler();
      });

    }
  })
]);
