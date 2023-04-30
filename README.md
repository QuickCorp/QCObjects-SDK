![logo](https://qcobjects.dev/qcobjects_01.png)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FQuickCorp%2FQCObjects-SDK.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FQuickCorp%2FQCObjects-SDK?ref=badge_shield)

QCObjects SDK
=============
Copyright (c) Jean Machuca and QuickCorp <info@quickcorp.cl>

Please fork this project or make a link to this project into your README.md file. Read the LICENSE.txt file before you use this code.

If you like this code please [DONATE ](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UUTDBUQHCS4PU&source=url)!


# Cross Browser Javascript Framework for MVC Patterns

[QCObjects](https://qcobjects.dev) is a javascript framework designed to make easier everything about the MVC patterns implementation into the pure javascript scope.

[QCObjects SDK](https://sdk.qcobjects.dev) is a set of Controllers, Views and Components that are elementary and useful to assist developers to build applications under MVC patterns using [QCObjects](https://qcobjects.dev).

Checkout the [QCObjects SDK 2.4 beta version](https://sdk.qcobjects.dev/v2.4/)

If you like more code samples feel free to write your questions to info@quickcorp.cl



# Installing with NPM:

```shell
> npm install qcobjects-sdk@v2.4
```

# Using the code in the straight way into HTML5:

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/qcobjects/2.4.20/QCObjects.js"></script>
```

NOTE: SDK dependence is included by default in the QCObjects runtime execution. You only need to install it if your having issues with default paths


## SDK

### SDK Components

#### org.qcobjects.components.ShadowedComponent

**ShadowedComponent** Class is a custom component class designed to allow you to create a component using the Shadow DOM of browsers. Read more about Shadowed Components on [this article on Hackernoon] (https://www.hackernoon.com/shadowed-components-and-qcobjects-kd703yld).

##### Usage:

```html
<component componentClass="ShadowedComponent"></component>

<my-custom-widget componentClass="ShadowedComponent"></my-custom-widget>
```

#### org.qcobjects.components.FormField

**FormField** is a Class for **QCObjects** custom components that allows you to inject a Form Field generic behavior to your components. It has a reverse data-binding feature to detect the values of the DOM fields inside your form and assign them to the data values of your component. By this way, you don't loose performance making an old-fashioned two-way data binding based on observables. To implement this advanced behavior. You only need to do the following:

1.- Assign a **data-field** attribute to the DOM tag inside the component body, with the corresponding field name in your data object.

2.- To your **component tag**, assign **FormField** in the **componentClass** attribute.

3.- To recover the data of the form inside your component, just use the componentInstance.data object. Every property of the componentInstance.data object will be linked by the binding events with the value properties on every DOM object of the form that has a data-field assigned.

##### Usage:

```html
<!-- Where you place the component -->
<component name="myform" componentClass="FormField"></component>
```

```html
<!-- usage using smart widgets -->

<my-custom-widget name="myform" componentClass="FormField"></my-custom-widget>

```

```html
<!-- template: myform.tpl.html -->
<label for="email"><b>Email</b></label>
<input data-field="email" type="email" placeholder="Enter Email" name="email" required>

<label for="psw"><b>Password</b></label>
<input data-field="name" type="text" placeholder="Enter Your Name" name="name" required>
```

**data-field="name"** will be matched with **this.data.name** inside the component class and will be updated everytime a data binding event is triggered. The same will happen to **data-field="email"** and so on.

##### FormField.executeBindings():

The method **executeBindings** of FormField component will find the **data-field** attribute values and match them with the corresponding **data** fields in the component instance.

##### Data Binding Event Change:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "change" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Blur:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Blur" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Focus:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Focus" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Keydown:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Keydown" event, it will trigger the executeBindings method of your component.


#### org.qcobjects.components.ButtonField

**ButtonField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between ButtonField and FormField is that ButtonField has a **```<button>```** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="ButtonField"></component>
```

```html
<!-- using smart widgets -->
<name-of-widget componentClass="ButtonField"></name-of-widget>
```

#### org.qcobjects.components.InputField

**InputField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between InputField and FormField is that InputField has a **<input>** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="InputField"></component>
```

```html
<!-- using smart widgets -->
<name-of-widget componentClass="InputField"></name-of-widget>
```


#### org.qcobjects.components.TextField

**ButtonField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between InputField and FormField is that ButtonField has a **```<textarea>```** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="TextField"></component>
```

```html
<!-- using smart widgets -->
<name-of-widget componentClass="TextField"></name-of-widget>
```


#### org.qcobjects.components.EmailField

**EmailField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between ButtonField and FormField is that ButtonField has a **```<input>```** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="EmailField"></component>
```

```html
<!-- smart widget syntax -->
<name-of-widget componentClass="EmailField"></name-of-widget>

```

#### org.qcobjects.components.GridComponent

GridComponent has a predefined name assigned to the value "grid", so be aware of it when you use this component class. Also, GridComponent is intended to be used in conjunction with GridController to expand its behavior to a CSS Grid.

##### Usage:

```html
<component componentClass="GridComponent" ...></component>

<name-of-widget componentClass="GridComponent" ...></name-of-widget>
```

##### Example:

```html
<component rows="2" cols="2" componentClass="GridComponent" controllerClass="GridController">
  <!-- It is recommended to use subcomponents as the Grid elements-->
	<component name="name_of_subcomponent1"></component>
	<component name="name_of_subcomponent2"></component>
	<component name="name_of_subcomponent3"></component>
	<component name="name_of_subcomponent4"></component>
</controller>
```

```html
<!-- syntax using smart widgets -->
<name-of-widget rows="2" cols="2" componentClass="GridComponent" controllerClass="GridController">
	<name-of-subwidget1></name-of-widget>
	<name-of-subwidget2></name-of-widget>
	<name-of-subwidget3></name-of-widget>
	<name-of-subwidget4></name-of-widget>
</name-of-widget>
```

The above example will draw a css grid of two columns and two rows and place the subcomponents into it.

Don't forget this file:

```html
<!-- file: grid.tpl.html, you can use the grid template either to draw the grid itself or to draw a loading information -->
<p>Loading grid...</p>
```

#### org.qcobjects.components.ModalEnclosureComponent

#### org.qcobjects.components.ModalComponent

#### org.qcobjects.components.SwaggerUIComponent

It is used to inject a swagger-ui DOM needed to the Swagger UI API. Learn more in this article of QCObjects DevBlog called [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Usage:

```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```

```html
<!-- syntax using smart widgets -->
<my-custom-widget componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></my-custom-widget>
```

#### org.qcobjects.components.splashscreen.VideoSplashScreenComponent

A powerful component definition to allow you create an awesome Video Splash Screen for your progressive web app.

##### Example:

```html
<!-- Add the splash screen component tag as the first component in your HTML document -->
<component componentClass="VideoSplashScreenComponent"
	data-background="./img/splash/splashscreen-aqua.png"
	data-video_mp4="./img/splash/splashscreen-aqua.mp4"
	data-video_webm="./img/splash/splashscreen-aqua.webm"
	data-video_ogg="./img/splash/splashscreen-aqua.ogv" duration="5000">
	<img slot="logo" alt="logo" src="./img/logo-qcobjects-white.svg"></div>
</component>
<!-- Then you can put your main component as always -->
<component splashscreen name="main" cached=true controllerClass="MainController">
</component>
```

```html
<!-- using smart widgets -->
<!-- Add the splash screen component tag as the first component in your HTML document -->
<splash-screen componentClass="VideoSplashScreenComponent"
	data-background="./img/splash/splashscreen-aqua.png"
	data-video_mp4="./img/splash/splashscreen-aqua.mp4"
	data-video_webm="./img/splash/splashscreen-aqua.webm"
	data-video_ogg="./img/splash/splashscreen-aqua.ogv" duration="5000">
	<img slot="logo" alt="logo" src="./img/logo-qcobjects-white.svg"></div>
</splash-screen>
<!-- Then you can put your main layout as always -->
<layout-basic splashscreen name="main" cached=true controllerClass="MainController">
</layout-basic>
```


### SDK Controllers

#### org.qcobjects.controllers.GridController

**GridController** is intended to be used in conjunction with **GridComponent** to allow you to create a CSS grid to place subcomponents. More info in [org.qcobjects.components.GridComponent](#org.qcobjects.components.GridComponent)

#### org.qcobjects.controllers.DataGridController

**DataGridController** will take the data of your component and map a set of subcomponents to fill it up.
This is commonly used to render a dynamic list of components. It used a **subcomponentClass** attribute value in the **component** tag to determine what component definition to use to build and render every sub-component. The data on every sub-component will be filled up with the value of the element mapped to the sub-component.

##### Usage:

```html
<component name="name_of_component" controllerClass="DataGridController" subcomponentClass="SubComponentClass">
</component>
```

```html
<!-- Using smart widgets -->
<my-custom-grid controllerClass="DataGridController" subcomponentClass="SubComponentClass">
</my-custom-grid>
```


##### Example:

Suppose you have to render a list of profiles. Every profile has a profile picture, a name and an email.
You want to use a card to represent every profile in the list.

So you define a CardComponent to render the picture, the name and email of an element in the list.

```javascript
class CardComponent extends Component {
	constructor () {
		super();
		this.name = "card"; // this will point to templates/components/card.tpl.html
		this.data = { // the value of this object will be overriden by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		};

		
	}
}
```

```html
<!-- template: card.tpl.html -->
<img src="{{profilePicture}}"/>
<h3>{{name}}</h3>
<p>{{email}}</p>
```

Then, you have to place a component to generate the list of cards.

```html
<component name="loading_list" componentClass="MyListComponent" controllerClass="DataGridController"
subcomponentClass="CardComponent">
</component>
```

```html
<loading-list componentClass="MyListComponent" controllerClass="DataGridController"
subcomponentClass="CardComponent">
</loading-list>
```

```html
<!-- template: loading_list.tpl.html -->
<p>Loading list...</p>
```

Last, you have to define MyListComponent to assign the dynamic data of the list.

```javascript

class MyListComponent extends Component {
	constructor () {
		super();
		this.data=[
			{ // the value of this object will be mapped to a subcomponent by DataGridController
				name:"<name of contact>",
				email:"email@example.com",
				profilePicture:"img/photo.png"
			},
			{ // the value of this object will be mapped to a subcomponent by DataGridController
				name:"<name of contact>",
				email:"email@example.com",
				profilePicture:"img/photo.png"
			},
			{ // the value of this object will be mapped to a subcomponent by DataGridController
				name:"<name of contact>",
				email:"email@example.com",
				profilePicture:"img/photo.png"
			}
		]

	}

}
```

The resulting component will be a list of **CardComponent** with the data of every profile mapped into them by **DataGridController**.

#### org.qcobjects.controllers.ModalController

#### org.qcobjects.controllers.FormValidations

**FormValidations** is used to handle default validations for the **FormController**

#### Usage:

```html
FormValidations.getDefault(validationName)
```

Where **validationName** is the name of the validation present in the **validations** property of the **FormController**

#### org.qcobjects.controllers.FormController

The FormController definition is intended to help you to handle dynamic forms. By using the normalised syntax of the FormController definition, you don't have to code the complexity of the logic of a submit form, as it is atomised here in three steps.

- Assign a serviceClass
- Define the formSettings
- Asign or code the field validations

##### [FormController].serviceClass

It is the string name of the Class definition. FormController will load this class using the ClassFactory helper function, so the name can be a complete package name plus definition.

##### [FormController].formSettings

It is an object with the special properties of the form. The default settings are: backRouting:'#', loadingRouting:'#loading', nextRouting:'#signupsuccessful'. These settings are meant to handle the flow behavior of the form.

**loadingRouting** is the name of the routing that will be triggered while the **serviceClass** is beign called until the service loader returns a response.

**backRouting** is the name of the routing that will be triggered if the call for the **serviceClass** fails.

**nextRouting** is the name of the routing that will be triggered when the call for the **serviceClass** finishes OK.

##### [FormController].validations

It is an object with the helper functions that you want to define to validate every form field. When you define a validation function for a field, FormController will ask if the execution of that function returns true before to submit the form.

To define validations for the fields of the form, you just need to add them as a part of the validations property.

##### Usage:

```javascript
	// Let's say you have a form field called "name"
	validations: {
		name (){
			return (fieldName, dataValue, element)=> {
				return [true ... or false condition];
			}
		}, //... add a validation for every form field that you want to be validated
	}
```

You can also use **FormValidations.getDefault** for simplicity.

```javascript
	// Let's say you have a form field called "name"
	validations: {
		name (){
			return FormValidations.getDefault('name')
		}, //... add a validation for every form field that you want to be validated
	}
```



##### [FormController].formSaveTouchHandler

This method is internally used by FormController to call the serviceClass as a submit action.
It will be binded to any click or touch event of any element inside the form that has a CSS ".submit" class assigned.

Example:

```html
<button class="submit"><p>Send</p></button>
```

When the click or touch event of the above button is triggered, FormController will call the service defined in **serviceClass**, this action will be done by **formSaveTouchHandler**. If you like to change this behavior just override this method in your custom controller.

##### A complete example of FormController

Below is a complete example of a definition for a Signup Form using FormController.

```javascript
// First, define a service class that will be called on submit.
class SignupClientService extends JSONService {
	constructor (){
		this.name='signup';
		this.external=true;
		this.cached=false;
		this.method='POST';
		this.url=Service.basePath+'createaccount';
		this.withCredentials=false;

	}

	done (successfulResponse) {
		// service loaded
		super.done(successfulResponse.service, successfulResponse);
		console.log(successfulResponse.service.JSONresponse);
	}

}
```

```javascript
// To safe extend FormController, we extend first from Controller, then
// we use a defaultController to instance a new FormController

class SignupFormController extends Controller {
	constructor () {
		this.serviceClass= 'SignupClientService';
		this.formSettings={ /* routings that will be triggered once the serviceClass is called*/
			backRouting:'#'
			loadingRouting:'#loading'
			nextRouting:'#signupsuccessful'
		};
		this.validations: { /* validation definitions for every field in the form to be validated before submit */
			name (){
				return FormValidations.getDefault('name')
			},
			email (){
				return FormValidations.getDefault('email')
			},
			comment (){
				return function (fieldName, dataValue, element){
					return (dataValue !== '')?(true):(false);
				}
			}
		};
		this.defaulController=null;

	}

	_new_ (o){
		super._new_(o);
		o.serviceClass = this.serviceClass;
		o.formSettings = this.formSettings;
		o.validations = this.validations;
		// here we instance a defaultController with a New FormController
		// passing the o object declaration coming from the components stack building process.
		this.defaulController = new FormController (o);
	}

	done (){
		super.done();
		// we define a custom done callback function to inject a custom behavior as well as calling the defaultController behavior
		logger.debugEnabled=true;
		var controller = this.defaulController;
		try {
			controller.done.call(controller);
		}catch (e){
			logger.debug('Unable to execute default behavior');
		}
	}
}
```

```html
<!-- A Shadowed Component to render the signup forms -->
<!-- template: signup-form.tpl.html -->

<form action="#" style="border:1px solid #ccc;border-radius:20px">
	<div class="container">
		<slot name="title">
			<h1>Signup Form</h1>
		</slot>
		<slot name="subtitle">
			<p>Please fill up this form to ask for a quote.</p>
		</slot>
		<hr />
		<slot id="field_control" name="field-control">
		</slot>
		<hr />
		<slot name="submit_button"></slot>
	</div>
</form>
```

```html
<!-- A signup form using the shadowed component signup-form -->
<!-- template: signup.tpl.html -->
<signup-form shadowed="true" controllerClass="SignupFormController">
  <h1 slot="title">Signup Form</h1>
  <p slot="subtitle">Please fill up this form to ask for a quote.</p>
  <label slot="field-control" id="name_label" for="name"><b>&#x1F9D1; Full Name</b></label>
  <input slot="field-control" type="text" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" title="Please write your full name" placeholder="Full Name" name="name" data-field="name" aria-labelledby="name_label" required>
  <label slot="field-control" id="email_label" for="email"><b>&#x1F4E7; Email</b></label>
  <input slot="field-control" type="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" title="Please write a right email address" placeholder="Enter Email" name="email" data-field="email" aria-labelledby="email_label" required>
  <label slot="field-control" for="comment" id="comment_label"><b>&#x1F4DD; Comment</b></label>
  <textarea slot="field-control" name="comment" title="Please write a comment" rows="10" cols="100" data-field="comment" aria-labelledby="comment_label"></textarea>
  <p slot="field-control">By submitting this form you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
	<div class="clearfix">
	    <button aria-label="Cancel" onclick="location.href='/#'" role="button" tabindex="-1" type="button" class="cancelbtn"><p>Cancel</p></button>
	    <button  aria-label="Send" role="button" tabindex="-1" type="button" class="signupbtn submit"><p>Send</p></button>
	</div>
</signup-form>
```

```javascript
RegisterWidget("signup-form");
```

#### org.qcobjects.controllers.SwaggerUIController

It is used to inject a swagger-ui DOM needed to the Swagger UI API. Learn more in this article of QCObjects DevBlog called [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Usage:

```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```

```html
<!-- using a smart widget -->
<swagger-ui componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController"></swagger-ui>
```


### SDK Effects

QCObjects has an **Effect** definition to handle and produce new effects and transitions for the components.
Below are some custom effect definitions that will help you to build amazing visual features to your components. To improve the performance, effects are changing CSS internally to apply the effect in a smart way. And all the effects engine is based on the **requestAnimationFrame** definition, read more [here](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames)

#### org.qcobjects.tools.effects.Move

Moves a DOM object from one position to another.

##### Usage:

```javascript
let move = new Move();
move.apply(element, xfrom, yfrom, xto, yto);
```

##### Example:

```javascript
// The next line will move all the images from (0,0) to (10,10)
Tag('img').map(img => (new Move()).apply(img,0,0,10,10))
```

#### org.qcobjects.tools.effects.MoveXInFromRight

Moves an element from the right side in X axis to the original position of the object.

##### Usage:

```javascript
let moveXInFromRight = new MoveXInFromRight();
moveXInFromRight.apply(element)
```

##### Example:

```javascript
// the next line will move every canvas on the document from right side to its original position
Tag('canvas').map(canvas => (new MoveXInFromRight()).apply(canvas));
```

#### org.qcobjects.tools.effects.MoveXInFromLeft

Moves an element from the left side in X axis to the original position of the object.

##### Usage:

```javascript
let moveXInFromLeft = new MoveXInFromLeft();
moveXInFromLeft.apply(element);
```

##### Example:

```javascript
// the next line will move every canvas on the document from left side to its original position
Tag('canvas').map(canvas => (new MoveXInFromLeft()).apply(canvas));
```

#### org.qcobjects.tools.effects.MoveYInFromBottom

Moves an object of the DOM from bottom to its original position using Y axis.

##### Usage:

```javascript
let moveYInFromBottom = new MoveYInFromBottom();
moveYInFromBottom.apply(element);
```

##### Example:

```javascript
// the next line will move the body of every component named "comp1" from bottom to its original position
Tag('component[name=comp1]').map(componentBody => (new MoveYInFromBottom()).apply(componentBody));
```

#### org.qcobjects.tools.effects.MoveYInFromTop

Moves an object of the DOM from top to its original position using Y axis.

##### Usage:

```javascript
let moveYInFromTop = new MoveYInFromTop();
moveYInFromTop.apply(element)
```

##### Example:

```javascript
// the next line will move the body of every component named "comp1" from top to its original position
Tag('component[name=comp1]').map(componentBody => (new MoveYInFromTop()).apply(componentBody));
```

#### org.qcobjects.tools.effects.RotateX

Rotates an object in X axis.

##### Usage:

```javascript
let rotateX = new RotateX();
RotateX.apply(element, angleFrom, angleTo);
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:

```javascript
// the next line will rotate in X axis the div called #id from 180 degrees to 240 degrees
Tag('div#id').map(div => (new RotateX()).apply(div, 180, 240));
```


#### org.qcobjects.tools.effects.RotateY

Rotates an object in Y axis.

##### Usage:

```javascript
let rotateY = new RotateY();
rotateY.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:

```javascript
// the next line will rotate in Y axis the div called #id from 0 degrees to 270 degrees
Tag('div#id').map(div => (new RotateY()).apply(div, 0, 270));
```

#### org.qcobjects.tools.effects.RotateZ

Rotates an object in Z axis.

##### Usage:

```javascript
let rotateZ = new RotateZ();
RotateZ.apply(element, angleFrom, angleTo);
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:

```javascript
// the next line will rotate in Z axis the div called #id from 0 degrees to 60 degrees
Tag('div#id').map(div => (new RotateZ()).apply(div, 0, 60));
```



#### org.qcobjects.tools.effects.Rotate

Rotates an object in X, Y, Z axes. All axes will rotate in paralell at the same time producing a 3d visual effect perception.

##### Usage:

```javascript
let rotate = new Rotate ();
Rotate.apply(element, angleFrom, angleTo);
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:

```javascript
// the next line will rotate in X, Y and Z axes the div called #id form 0 to 270 degrees
Tag('div#id').map(div => (new Rotate()).apply(div, 0, 270));
```

#### org.qcobjects.tools.effects.Fade

Produces a fade effect by lowering the opacity of the element.

##### Usage:

```javascript
let fade = new Fade();
Fade.apply(element, alphaFrom, alphaTo);
```

**alphaFrom** and **alphaTo** are numbers between 0 (zero) and 1.

```javascript
// the following line will fade a <b class="header"> element from 0.5 (mid visibility) to 1 (full visibility)
Tag('b.header').map(header=>(new Fade()).apply(header, 0.5, 1))
```

#### org.qcobjects.tools.effects.Radius

Rounds the corner of an element

##### Usage:

```javascript
let radius = new Radius();
radius.apply(element, radiusFrom, radiusTo)
```

**radiusFrom** and **radiusTo** are numeric values.

##### Example:

```javascript
// the next line will round the corners of every image in the document
Tag('img').map(element => (new Radius()).apply(element, 0, 100))
```

#### org.qcobjects.tools.effects.Resize

##### Usage:

```javascript
let resize = new Resize ();
resize.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example:

```javascript
// the next line will make a zoom-out effect on every image in the document
Tag('img').map(element => (new Resize()).apply(element, 2,0))

// the next line will make a zoom-in effect on every image in the document
Tag('img').map(element => (new Resize()).apply(element, 0,1))

// the next line will make a zoom-in-out effect on every image in the document
Tag('img').map(element => (new Resize()).apply(element, 2,1))
```

#### org.qcobjects.tools.effects.WipeLeft

Makes a Wipe effect from Left side to the origin of the element.

##### Usage:

```javascript
let wipeLeft = new WipeLeft();
wipeLeft.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => (new WipeLeft()).apply(element,0,1))
```

#### org.qcobjects.tools.effects.WipeRight

Makes a Wipe effect from right side to the origin of the element.

##### Usage:

```javascript
let wipeRight = new WipeRight();
wipeRight.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => (new WipeRight()).apply(element,0,1))
```


#### org.qcobjects.tools.effects.WipeUp

Makes a Wipe effect from down to up the origin of the element.

##### Usage:

```javascript
let wipeUp = new WipeUp();
wipeUp.apply(element, scaleFrom, scaleTo);
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => (new WipeUp()).apply(element,0,1))
```

#### org.qcobjects.tools.effects.WipeDown

Makes a Wipe effect from up to down the origin of the element.

##### Usage:

```javascript
let wipeDown = new WipeDown();
wipeDown.apply(element, scaleFrom, scaleTo);
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => (new WipeDown()).apply(element,0,1))
```


### SDK Misc Tools

#### org.qcobjects.tools.canvas.CanvasTool

#### org.qcobjects.tools.layouts.BasicLayout

### SDK Views

Below are a set of pre-defined views for common use.

#### org.qcobjects.views.GridView

A generic GridView definition for use with grids.

### SDK i18n messages

The QCObjects i18n engine allows you to define custom messages . Learn more in this article in the DevBlog called [i18n Internationalisation for your Progressive Web Apps](https://devblog.qcobjects.org/i18n-internationalisation-for-your-progressive-web-apps-ck90h4qz301ca7vs1ue7joopu)

#### org.qcobjects.i18n_messages.i18n_messages

Used to call the i18n engine.

##### Usage:

```javascript
	class i18n_messages_<custom lang> extends i18n_messages {
		...
	}
```

##### Example

```javascript
'use strict';
// file: js/packages/org.qcobjects.i18n_messages.es.js
Package('org.qcobjects.i18n_messages.es', [
	class i18n_messages_es extends i18n_messages {
		constructor () {
			this.messages= [
			// ... your custom language dictionary is here
			{
				"en":"This is a paragraph",
				"es":"Esto es un párrafo"
			},
			{
				"en":"Welcome to my new app",
				"es":"Bienvenido a mi nueva app"
			}
			];
		}
	},
	{
		// the next line generates an instance of the i18n engine and attaches it automatically in the package
		_i18n_messages_es: new i18n_messages_es()
	}
]);
```

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FQuickCorp%2FQCObjects-SDK.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FQuickCorp%2FQCObjects-SDK?ref=badge_large)