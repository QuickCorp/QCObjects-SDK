var ut=Object.defineProperty;var a=(r,e)=>ut(r,"name",{value:e,configurable:!0}),N=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var k=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ce=k((xe,J)=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});var z=N("qcobjects");(function(r){"use strict";class e extends z.InheritClass{constructor({messages:t=[]}){super({messages:t}),z.CONFIG.get("use_i18n",!1)&&(z.CONFIG.set("lang","en"),r.get("i18n")?r.set("i18n",{messages:r.get("i18n").messages.concat(t)}):r.set("i18n",{messages:t}))}_load_i18n_packages_(){return z.CONFIG.get("i18n_languages",[]).map(t=>{(0,z.Import)(`org.quickcorp.i18n_messages.${t}`)})}}a(e,"i18n_messages"),(0,z.Package)("org.qcobjects.i18n_messages",[e]),new e({})._load_i18n_packages_()})(typeof J=="object"&&typeof J.exports=="object"?J.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var Oe=k(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});var Se=N("qcobjects");(function(){"use strict";(0,Se.Package)("org.qcobjects.models",[a(class extends Se.VO{},"Contact")])})()});var $=k((h,K)=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.ModalMoveUp=h.ModalMoveDown=h.ModalFade=h.WipeDown=h.WipeUp=h.WipeRight=h.WipeLeft=h.Resize=h.Radius=h.Rotate=h.RotateZ=h.RotateY=h.RotateX=h.MoveYInFromTop=h.MoveYInFromBottom=h.MoveXInFromLeft=h.MoveXInFromRight=h.Move=h.Fade=void 0;var m=N("qcobjects"),j=typeof K=="object"&&typeof K.exports=="object"?K.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};(function(){"use strict";class r extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("alpha: "+y.toString()),g.style.opacity=y.toString()}})}}a(r,"Fade");class e extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S,O,c){let y=O-b,pt=c-S;g.style.transform="translate("+b+"px,"+S+"px)",this.animate({duration:this.duration,timing(W){return W},draw(W){m.logger.debug("animation progress: "+W.toString());let we=S+W*pt/100,ve=b+W*y/100;m.logger.debug("x: "+ve.toString()+" y:"+we.toString()),g.style.transform="translate("+ve+"px,"+we+"px)"}})}}a(e,"Move"),(0,m.Package)("org.qcobjects.effects.base",[r,e]);class o extends e{constructor(){super(...arguments),this.duration=1e3}apply(g){super.apply.call(this,g,g.width,0,0,0)}}a(o,"MoveXInFromRight");class t extends e{constructor(){super(...arguments),this.duration=1e3}apply(g){super.apply.call(this,g,-g.width,0,0,0)}}a(t,"MoveXInFromLeft");class n extends e{constructor(){super(...arguments),this.duration=1e3}apply(g){super.apply.call(this,g,0,g.height,0,0)}}a(n,"MoveYInFromBottom");class i extends e{constructor(){super(...arguments),this.duration=1e3}apply(g){super.apply.call(this,g,0,-g.height,0,0)}}a(i,"MoveYInFromTop");class s extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=Math.round(b+c*O/100);m.logger.debug("angle: "+y.toString()),g.style.transform="rotate3d(1,0,0,"+y.toString()+"deg)"}})}}a(s,"RotateX");class l extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=Math.round(b+c*O/100);m.logger.debug("angle: "+y.toString()),g.style.transform="rotate3d(0,1,0,"+y.toString()+"deg)"}})}}a(l,"RotateY");class u extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=Math.round(b+c*O/100);m.logger.debug("angle: "+y.toString()),g.style.transform="rotate3d(0,0,1,"+y.toString()+"deg)"}})}}a(u,"RotateZ");class T extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=Math.round(b+c*O/100);m.logger.debug("angle: "+y.toString()),g.style.transform="rotate3d(1,1,1,"+y.toString()+"deg)"}})}}a(T,"Rotate");class C extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("radius: "+y.toString()),g.style.borderRadius=y.toString()+"px"}})}}a(C,"Radius");class d extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("resize: "+y.toString()),g.style.transformOrigin="center",g.style.transform="scale("+y+","+y+")"}})}}a(d,"Resize");class p extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("wipe: "+y.toString()),g.style.transformOrigin="right",g.style.transform="scaleX("+y+")"}})}}a(p,"WipeLeft");class v extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("wipe: "+y.toString()),g.style.transformOrigin="left",g.style.transform="scaleX("+y+")"}})}}a(v,"WipeRight");class I extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("wipe: "+y.toString()),g.style.transformOrigin="bottom",g.style.transform="scaleY("+y+")"}})}}a(I,"WipeUp");class D extends m.Effect{constructor(){super(...arguments),this.duration=1e3}apply(g,b,S){let O=S-b;this.animate({duration:this.duration,timing(c){return c},draw(c){m.logger.debug("animation progress: "+c.toString());let y=b+c*O/100;m.logger.debug("wipe: "+y.toString()),g.style.transformOrigin="top",g.style.transform="scaleY("+y+")"}})}}a(D,"WipeDown"),(0,m.Package)("org.qcobjects.effects.extended",[o,t,n,i,s,l,u,T,C,d,p,v,I,D]);class G extends r{constructor(){super(...arguments),this.duration=500}}a(G,"ModalFade");class A extends e{constructor(){super(...arguments),this.duration=300}}a(A,"ModalMoveDown");class X extends e{constructor(){super(...arguments),this.duration=800}}a(X,"ModalMoveUp"),(0,m.Package)("org.qcobjects.modal.effects",[G,A,X])})();var gt=j.Fade;h.Fade=gt;var ht=j.Fade;h.Move=ht;var mt=j.MoveXInFromRight;h.MoveXInFromRight=mt;var ft=j.MoveXInFromLeft;h.MoveXInFromLeft=ft;var bt=j.MoveYInFromBottom;h.MoveYInFromBottom=bt;var yt=j.MoveYInFromTop;h.MoveYInFromTop=yt;var _t=j.RotateX;h.RotateX=_t;var wt=j.RotateY;h.RotateY=wt;var vt=j.RotateZ;h.RotateZ=vt;var xt=j.Rotate;h.Rotate=xt;var Ct=j.Radius;h.Radius=Ct;var St=j.Resize;h.Resize=St;var It=j.WipeLeft;h.WipeLeft=It;var Ot=j.WipeRight;h.WipeRight=Ot;var Nt=j.WipeUp;h.WipeUp=Nt;var kt=j.WipeDown;h.WipeDown=kt;var Mt=j.ModalFade;h.ModalFade=Mt;var Tt=j.ModalMoveDown;h.ModalMoveDown=Tt;var jt=j.ModalMoveUp;h.ModalMoveUp=jt});var ce=k((M,ee)=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.SwaggerUIComponent=M.ModalEnclosureComponent=M.ModalComponent=M.EmailField=M.TextField=M.InputField=M.ButtonField=M.ShadowedComponent=M.FormField=void 0;var w=N("qcobjects"),Q=$(),L=typeof ee=="object"&&typeof ee.exports=="object"?ee.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};(function(r){class e extends w.Component{constructor(d){d.name=typeof d.name<"u"?d.name:"form-field",super(d),this.cached=!1,this.reload=!0}createBindingEvents(){let d;typeof this.fieldType>"u"||this.fieldType==null?d=this.body.subelements("*[data-field]"):d=this.body.subelements(this.fieldType+"[data-field]");for(let p=0;p<d.length;p++){let v=d[p];v.addEventListener("change",()=>{w.logger.debug("Executing change event binding"),this.executeBindings()}),v.addEventListener("blur",()=>{w.logger.debug("Executing change event binding"),this.executeBindings()}),v.addEventListener("focus",()=>{w.logger.debug("Executing change event binding"),this.executeBindings()}),v.addEventListener("keydown",()=>{w.logger.debug("Executing keydown event binding"),this.executeBindings()})}}executeBinding(d){let p=d.getAttribute("data-field");w.logger.debug("Binding "+p+" for "+this.name),this.data[p]=d.value}executeBindings(){let d;typeof this.fieldType>"u"||this.fieldType==null?d=this.body.subelements("*[data-field]"):d=this.body.subelements(this.fieldType+"[data-field]");for(let p=0;p<d.length;p++){let v=d[p],I=v.getAttribute("data-field");w.logger.debug("Binding "+I+" for "+this.name),this.data[I]=v.value}}done(d){let p=super.done(d);return this.executeBindings(),this.createBindingEvents(),w.logger.debug("Field loaded: "+this.fieldType+"[name="+this.name+"]"),p}}a(e,"FormField"),(0,w.Package)("org.qcobjects.base.components",[e]);class o extends w.Component{constructor(d){d.body=(0,w._DOMCreateElement)("div"),super(d),this.container=null,this.shadowed=!0,this.cached=!1,this.controller=null,this.view=null,this.data={}}}a(o,"ShadowedComponent");class t extends e{constructor(d){d.fieldType="button",super(d)}}a(t,"ButtonField");class n extends e{constructor(d){d.fieldType="input",super(d)}}a(n,"InputField");class i extends e{constructor(d){d.fieldType="textarea",super(d)}}a(i,"TextField");class s extends e{constructor(d){d.fieldType="input",super(d)}}a(s,"EmailField");class l extends w.Component{constructor(d){d.body=(0,w._DOMCreateElement)("div"),super(d),this.name="modalenclosure",this.tplsource="inline",this.cached=!1,this.basePath=w.CONFIG.get("modalBasePath",w.CONFIG.get("remoteSDKPath","")),this.template=`
<!-- The Modal -->
<style>
@import url('https://sdk.qcobjects.dev/css/modal.css');
</style>
<div id="modalInstance_{{modalId}}" class="modal">

<!-- Modal content -->
<div class="modal-content">
<span class="close">&times;</span>
{{content}}
</div>

</div>
`,this.data={}}}a(l,"ModalEnclosureComponent");class u extends w.Component{constructor(d){d.basePath=w.CONFIG.get("modalBasePath",w.CONFIG.get("remoteSDKPath","")),super(d),this.name="modal",this.cached=!1,this.modalEnclosureComponentClass="ModalEnclosureComponent",this.controller=null,this.view=null,this.tplsource="none",this.closeOnClickOutside=!1,this.data={content:"",modalId:0},this.submodal=null,this.data.modalId=this.__instanceID;let p=(0,w.New)((0,w.ClassFactory)(this.modalEnclosureComponentClass),{name:this.name,basePath:this.basePath,data:this.data});this.subcomponents.push(p),this.submodal=p,p.tplsource==="none"?this.body.innerHTML=p.parsedAssignmentText:this.body.append(p.body)}modal(){let d=this.data.modalId;(0,w.Tag)("#modalInstance_"+d+".modal").map(p=>(p.style.display="block",new Q.ModalFade({}).apply(p,0,1))),(0,w.Tag)("#modalInstance_"+d+".modal .modal-content").map(p=>new Q.ModalMoveDown({}).apply(p,0,-document.body.clientHeight,0,0)),(0,w.Tag)("#modalInstance_"+d+".modal .modal-content .close").map(p=>p.addEventListener("click",()=>{this.close()},!1)),this.closeOnClickOutside&&window.addEventListener("click",()=>{this.close()},!1)}close(){let d=this.data.modalId;(0,w.Tag)("#modalInstance_"+d+".modal").map(p=>(p.style.display="block",new Q.ModalFade({}).apply(p,1,0))),(0,w.Tag)("#modalInstance_"+d+".modal .modal-content").map(function(p){return new Q.ModalMoveUp({}).apply(p,0,0,0,-document.body.clientHeight)}),setTimeout(function(){(0,w.Tag)("#modalInstance_"+d+".modal").map(p=>(p.style.display="none",!0))},900)}rebuild(){let d=super.rebuild();return this.templateURI=(0,w.ComponentURI)({COMPONENTS_BASE_PATH:w.CONFIG.get("componentsBasePath",""),COMPONENT_NAME:"modal",TPLEXTENSION:w.CONFIG.get("tplextension",""),TPL_SOURCE:"default"}),d}}a(u,"ModalComponent");class T extends w.Component{constructor(){super(...arguments),this.cached=!1,this.basePath=w.CONFIG.get("remoteSDKPath",""),this.tplextension="tpl.html",this.name="swagger-ui"}}a(T,"SwaggerUIComponent"),(0,w.Package)("org.qcobjects.form.components",[o,t,n,i,s,l,u,T]),r.FormField=e,r.ShadowedComponent=o,r.ButtonField=t,r.InputField=n,r.TextField=i,r.EmailField=s,r.ModalEnclosureComponent=l,r.ModalComponent=u,r.SwaggerUIComponent=T})(L);var Ft=L.FormField;M.FormField=Ft;var qt=L.ShadowedComponent;M.ShadowedComponent=qt;var Pt=L.ButtonField;M.ButtonField=Pt;var Et=L.InputField;M.InputField=Et;var Dt=L.TextField;M.TextField=Dt;var Rt=L.EmailField;M.EmailField=Rt;var At=L.ModalEnclosureComponent;M.ModalEnclosureComponent=At;var Lt=L.ModalComponent;M.ModalComponent=Lt;var Gt=L.SwaggerUIComponent;M.SwaggerUIComponent=Gt});var Ne=k((Y,te)=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.GridItemComponent=Y.GridComponent=void 0;var pe=N("qcobjects"),ue=typeof te=="object"&&typeof te.exports=="object"?te.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};(function(r){"use strict";class e extends pe.Component{constructor(){super(...arguments),this.name="grid-item",this.shadowed=!0,this.tplsource="inline",this.template=`
<img src="{{image}}" />
<p>{{description}}</p>
`,this.cached=!1}}a(e,"GridItemComponent");class o extends pe.Component{constructor(n){super(n),this.name="grid",this.cached=!1,this.view=null,this.shadowed=!0,this.rows=3,this.cols=3,this.templateURI="",this.data={},this.tplsource="inline",this.template="<p>Loading...</p>",this.body.setAttribute("controllerClass","DataGridController");let i=this.body.getAttribute("subcomponentClass")!==null?this.body.getAttribute("subcomponentClass"):"GridItemComponent";this.body.setAttribute("subcomponentClass",i)}}a(o,"GridComponent"),(0,pe.Package)("org.qcobjects.components.grid",[o,e]),r.GridComponent=o,r.GridItemComponent=e})(ue);var Ut=ue.GridComponent;Y.GridComponent=Ut;var Bt=ue.GridItemComponent;Y.GridItemComponent=Bt});var ke=k((H,oe)=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.ListItemComponent=H.ListComponent=void 0;var ge=N("qcobjects"),he=typeof oe=="object"&&typeof oe.exports=="object"?oe.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};(function(r){"use strict";class e extends ge.Component{constructor(n){n.name="list-item",super(n),this.shadowed=!1,this.tplsource="inline",this.template='<a href="{{value}}">{{label}}</a>',this.cached=!1}}a(e,"ListItemComponent");class o extends ge.Component{constructor(n){n.name="list",super(n),this.shadowed=!0,this.tplsource="inline",this.template="<p>Loading...</p>",this.body.setAttribute("controllerClass","ListController"),this.body.setAttribute("subcomponentClass","ListItemComponent")}}a(o,"ListComponent"),(0,ge.Package)("org.qcobjects.components.list",[e,o]),r.ListComponent=o,r.ListItemComponent=e})(he);var Zt=he.ListComponent;H.ListComponent=Zt;var Xt=he.ListItemComponent;H.ListItemComponent=Xt});var Te=k(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});var se=N("qcobjects");(function(){"use strict";(0,se.Package)("org.qcobjects.components.slider",[a(class extends se.Component{constructor(e){super(e),this.tplsource="inline",this.template="<p>Loading...</p>",this.name="slidelist",this.body.setAttribute("controllerClass","DataGridController");let o=this.body.getAttribute("subcomponentClass")!==null?this.body.getAttribute("subcomponentClass"):"GridItemComponent";this.body.setAttribute("subcomponentClass",o)}},"SlideListComponent"),a(class extends se.Component{constructor(e){super(e),this.effectClass="Fade",this.name="slider_item",this.data.slideNumber=this.data.__dataIndex+1,this.template=`
      <div class="qcoSlides" style="display:none">
        <div class="qco-slider__numbertext">{{slideNumber}} / {{__dataLength}}</div>
        <img src="{{image}}" alt="{{title}}"/>
        <div class="qco-slider__text">
          <p>{{label}} <a href="{{link}}">{{category}}</a></p>
        </div>
      </div>
      `,this.tplsource="inline"}},"SlideItemComponent"),a(class extends se.Component{constructor(e){super(e),this.name="slider",this.template=`
      <style>
      /* Slideshow container */
  
      :host a:hover,
      :host a:active,
      :host a:visited {
        color: #ffffff;
      }
  
       {
        color: #ffffff;
      }
  
      :host .prev {left:0;}
      .qco-slider__container {
        max-width: 100%;
        position: relative;
        margin: auto;
        height: 300px;
      }
      :host .qco-slider__container .qcoSlides img {
        object-fit: cover;
        width: 100%;
        height: 300px;
      }
  
      /* Next & previous buttons */
      :host .prev,
      :host .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        background-color: rgba(1, 1, 1, 0.1);
      }
  
      /* Position the "next button" to the right */
      :host .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
  
      /* On hover, add a black background color with a little bit see-through */
      :host .prev:hover,
      :host .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
  
      /* Caption text */
      :host .qco-slider__text {
        color: #f2f2f2;
        font-size: 15px;
  /*      padding: 8px 12px;*/
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        text-shadow: -1px 1px 3px #111111;
        background-color: rgba(1,1,1,0.7);
      }
  
      /* Number text (1/3 etc) */
      :host .qco-slider__numbertext {
        color: #f2f2f2;
        text-shadow: 0px 2px 3px #111111;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        padding-top: 0;
        margin-top: 10px;
      }
  
      /* The dots/bullets/indicators */
      :host .qcoSlider__dots {
        text-align: center;
        margin: 0 auto;
        padding: 0;
      }
      :host .qcoSlider__dots--dot {
        cursor: pointer;
        height: 10px;
        width: 10px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
  
      :host .active,
      :host .qcoSlider__dots--dot:hover {
        background-color: #717171;
      }
  
      :host .qco-slider__container .qcoSlides img {
        border-radius: 30px 30px 0px 0px;
      }
  
      </style>
  
      <div class="qco-slider__container">
        <component name="slidelist" componentClass="SlideListComponent" subcomponentClass="SlideItemComponent" serviceClass="{{SERVICE_CLASS}}" ></component>
  
        <a class="prev" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(-1)">&#10094;</a>
        <a class="next" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(1)">&#10095;</a>
      </div>
      <br>
  
      <div class="qcoSlider__dots" style="text-align:center">
      </div>
  
      `,this.tplsource="inline",this.shadowed=!0,this.data.SERVICE_CLASS=this.body.getAttribute("serviceClass"),this.data.sliderHandler="slider_"+this.__instanceID.toString(),this.body.setAttribute("controllerClass","SliderController")}},"SliderComponent")])})()});var Fe=k(je=>{"use strict";Object.defineProperty(je,"__esModule",{value:!0});var q=N("qcobjects"),me=$();(function(){"use strict";class r extends q.Component{constructor(o){o.name="notification",o.body=(0,q._DOMCreateElement)("div"),super(o),this.cached=!1,this.tplsource="inline",this.shadowed=!1,this.template=`
    <style>
    div.notification_background {
      display: block; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      bottom:0;
      right:0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      border: none !important;
    }
    div.notification {
      border-radius: 12px !important;
      margin-bottom: 15px;
      padding: 4px 12px;
    }
    .notification.danger {
      background-color: #ffdddd;
      border-left: 6px solid #f44336;
    }
    .notification.success {
      background-color: #ddffdd;
      border-left: 6px solid #4CAF50;
    }
    .notification.info {
      background-color: #e7f3fe;
      border-left: 6px solid #2196F3;
    }
    .notification.warning {
      background-color: #ffffcc;
      border-left: 6px solid #ffeb3b;
    }
    </style>
    <div class="notification_background">
    <div class="notification {{kind}}">
      <p><strong>{{title}}</strong> {{message}}</p>
    </div>
    </div>
    `,this.kinds=["danger","success","info","warning"]}display(o){let t=a(function(n){n.style.display="block";let i=(0,q.New)(me.Move,{duration:900,apply(l){(0,q._super_)("Fade","apply").call(this,l,0,1),(0,q._super_)("Move","apply").call(this,l,0,-document.body.clientHeight,0,0)}}),s=(0,q.New)(me.Move,{duration:650,apply(l){(0,q._super_)("Fade","apply").call(this,l,1,0),(0,q._super_)("Move","apply").call(this,l,0,0,0,-document.body.clientHeight)}});i.apply(n),setTimeout(function(){s.apply(n)},2e3)},"_display_");o.subelements("div.notification_background").map(n=>(0,q.New)(me.Fade,{duration:500}).apply(n,0,1)),o.subelements("div.notification").map(n=>t(n)),setTimeout(function(){o.remove()},2200)}static success(o){let t=(0,q.New)(r,{name:"notification",shadowed:!0,body:(0,q._DOMCreateElement)("div"),data:{kind:"success",title:"Success!",message:`${o}...`}});document.body.append(t);let n=t.shadowed?t.shadowRoot.host:t.body;t.display(n)}static danger(o){let t=(0,q.New)(r,{name:"notification",shadowed:!0,body:(0,q._DOMCreateElement)("div"),data:{kind:"danger",title:"Danger!",message:`${o}...`}});document.body.append(t);let n=t.shadowed?t.shadowRoot.host:t.body;t.display(n)}static info(o){let t=(0,q.New)(r,{name:"notification",shadowed:!0,body:(0,q._DOMCreateElement)("div"),data:{kind:"info",title:"Info!",message:`${o}...`}});document.body.append(t);let n=t.shadowed?t.shadowRoot.host:t.body;t.display(n)}static warning(o){let t=(0,q.New)(r,{name:"notification",shadowed:!0,body:(0,q._DOMCreateElement)("div"),data:{kind:"warning",title:"Warning!",message:`${o}...`}});document.body.append(t);let n=t.shadowed?t.shadowRoot.host:t.body;t.display(n)}}a(r,"NotificationComponent"),(0,q.Package)("org.quickcorp.components.notifications",[r])})()});var qe=k((U,ne)=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.CubeSplashScreenComponent=U.VideoSplashScreenComponent=U.SplashScreenComponent=void 0;var R=N("qcobjects"),fe=$(),ie=typeof ne=="object"&&typeof ne.exports=="object"?ne.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};a(function(e){"use strict";class o extends R.Component{constructor(s){s.name=typeof s.name>"u"?"splashscreen":s.name;let l=typeof window<"u"&&typeof window.self<"u"&&window===window.self,u=location.hash===""&&location.pathname==="/"&&location.search===""||R.CONFIG.get("routingWay","pathname")==="hash"&&R.CONFIG.get("start_url","/")===location.hash||R.CONFIG.get("routingWay","pathname")==="pathname"&&R.CONFIG.get("start_url","/")===location.pathname||R.CONFIG.get("routingWay","pathname")==="search"&&R.CONFIG.get("start_url","/")===location.search,T=l&&u;if(T?(s.basePath=R.CONFIG.get("splashscreenBasePath",R.CONFIG.get("remoteSDKPath","")),typeof s.data>"u"&&(s.data={}),s.data.basePath=s.basePath):typeof s<"u"&&typeof s.body<"u"&&(s.body.style.display="none"),super(s),this.cached=!1,this.shadowed=!0,this._bgcolor="",this._enabled_=T,this._enabled_){let d=this.body.getAttribute("duration");d===null?d=1e3:d=parseInt(d.toString()),this._bgcolor=this.body.style.backgroundColor;let p=a(()=>{setTimeout(()=>{if(!p.executed){let v=this.shadowed?this.shadowRoot?.host:this.body;typeof e.componentsStack<"u"&&e.componentsStack.filter(I=>I.body.hasAttribute("splashscreen")).map(I=>{R.logger.debug(`Splash Screen of Main Component: ${I.name}`),I.splashScreenComponent=this;let D=a(()=>{if(!D.executed){let G=I.splashScreenComponent,A=I.shadowed?I.shadowRoot?.host:I.body;I._mainPosition=A.style.position,typeof A<"u"&&(A.style.position="fixed"),I._mainOpacity=A.style.opacity,v.style.width="100%",v.style.height="100%",document.body.style.backgroundColor="#111111",A.style.opacity="0",setTimeout(function(){typeof v<"u"&&(document.body.style.backgroundColor=G?._bgcolor,v.subelements("#slot-logo").map(X=>(X.style.display="block",X.style.transformOrigin="center",new fe.Resize().apply(X,1,0))),new fe.Fade().apply(v,1,0))},d-1e3),setTimeout(function(){new fe.Fade().apply(A,0,1),A.style.position=I._mainPosition,document.body.style.backgroundColor=G._bgcolor,v.parentElement!==null&&v.parentElement.remove()},d)}D.executed=!0},"SplashScreenHandler");return I.addComponentHelper(D.bind(I))}),p.executed=!0}})},"_helper_");p.executed=!1,this.addComponentHelper(p.bind(s))}}}a(o,"SplashScreenComponent"),(0,R.Package)("org.qcobjects.components.base",[o]);class t extends o{constructor(s){s.name="videosplashscreen",super(s),this.cached=!1,this.shadowed=!0,this.tplsource="inline",this.template=`
  <style>
  :host * {
    box-sizing: border-box;
  }

  :host {
    zoom: 1.0;
    width: device-width;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  #slot-logo::slotted(img) {
      vertical-align: middle;
      display: block;
      width: 40vw;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 9999999999;
      transform-origin: center;
      transform-style: preserve-3d;
      filter: blur(0em);
      transition: filter 0.5s;
      max-width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeIn 5s;
      -webkit-animation: fadeIn 5s;
      -moz-animation: fadeIn 5s;
      -o-animation: fadeIn 5s;
      -ms-animation: fadeIn 5s;        
  }

  :host * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none;
    /* prevent webkit from resizing text to fit */
    -webkit-user-select: none;
    /* prevent copy paste, to allow, change 'none' to 'text' */
  }

  /* FOCUS */
  :host summary:focus,
  :host a:focus,
  :host button:focus {
    outline: none;
  }

  .splashscreen,
  .fullscreen-bg {
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    background-attachment: fixed;
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
  }

  .splashscreen .splashcontent {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    z-index: 1;
  }

  .splashscreen .splashcontent p {
    color: white;
  }

  video.fullscreen-bg__video {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    z-index: 0;
    object-fit: cover;
    filter: brightness(0.3);
  }
    .splashscreen,
    .fullscreen-bg {
      background-image: url('{{background}}');
    }

    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }      

  </style>
  <div class="splashscreen">
    <div class="fullscreen-bg splashcontent">
      <video loop muted autoplay playsinline name="media" poster="{{background}}" class="fullscreen-bg__video" data-setup="{}" height="100%">
        <source src="{{video_mp4}}" type="video/mp4">
        <source src="{{video_ogg}}" type="video/ogg">
        <source src="{{video_webm}}" type="video/webm">
      </video>
      <slot id="slot-logo" name="logo"></slot>
    </div>
  </div>

  `}}a(t,"VideoSplashScreenComponent");class n extends o{constructor(s){s.name="cubesplashscreen",super(s),this.cached=!1,this.shadowed=!0,this.tplsource="inline",this.template=`
  <style>
  @keyframes spin {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes spin-duplicate {
    0% {
      transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
    }

    33% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
    }

    50% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }

    66% {
      transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
    }

    83% {
      transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
      transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  @keyframes roll {
    0% {
      transform: translate3d(-200px, -50px, -400px)
    }

    12% {
      transform: translate3d(0px, 0, -100px)
    }

    25% {
      transform: translate3d(200px, -50px, -400px)
    }

    37% {
      transform: translate3d(0px, -100px, -800px)
    }

    50% {
      transform: translate3d(-200px, -50px, -400px)
    }

    62% {
      transform: translate3d(0px, 0, -100px)
    }

    75% {
      transform: translate3d(200px, -50px, -400px)
    }

    87% {
      transform: translate3d(0px, -100px, -800px)
    }

    100% {
      transform: translate3d(-200px, -50px, -400px)
    }
  }

  #wrapper {
    position: relative;
    width: 200px;
    padding-top: 100px;
    margin: 0 auto;
    perspective: 1200px;
  }

  #platform {
    margin-top: 100px;
  }

  #dice span {
    position: absolute;
    margin: 100px 0 0 100px;
    display: block;
    font-size: 2.5em;
    padding: 10px;
  }

  #dice {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: spin 50s infinite linear;
  }

  .side {
    position: absolute;
    width: 200px;
    height: 200px;
    background: none;
    box-shadow: inset 0 0 40px #fff0;
    border-radius: 40px;
  }

  #dice .cover, #dice .inner {
    background: #e0e0e0;
    box-shadow: none;
  }

  #dice .cover {
    border-radius: 0;
    transform-origin: center;
    transform: translateZ(0px);
  }

  #dice .cover.x {
    transform-origin: center;
    transform: rotateY(90deg);
  }

  #dice .cover.z {
    transform-origin: center;
    transform: rotateX(90deg);
  }

  #dice .front {
    transform-origin: center;
    transform: translateZ(100px);
  }

  #dice .front.inner {
    transform-origin: center;
    transform: translateZ(98px);
  }

  #dice .back {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(100px);
  }

  #dice .back.inner {
    transform-origin: center;
    transform: rotateX(-180deg) translateZ(98px);
  }

  #dice .right {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(100px);
  }

  #dice .right.inner {
    transform-origin: center;
    transform: rotateY(90deg) translateZ(98px);
  }

  #dice .left {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(100px);
  }

  #dice .left.inner {
    transform-origin: center;
    transform: rotateY(-90deg) translateZ(98px);
  }

  #dice .top {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(100px);
  }

  #dice .top.inner {
    transform-origin: center;
    transform: rotateX(90deg) translateZ(98px);
  }

  #dice .bottom {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(100px);
  }

  #dice .bottom.inner {
    transform-origin: center;
    transform: rotateX(-90deg) translateZ(98px);
  }

  .dot {
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background: #444;
    box-shadow: inset 5px 0 10px #000;
  }

  .dot.center {
    margin: 77px 0 0 77px;
  }

  .dot.dtop {
    margin-top: 20px;
  }

  .dot.dleft {
    margin-left: 134px;
  }

  .dot.dright {
    margin-left: 20px;
  }

  .dot.dbottom {
    margin-top: 134px;
  }

  .dot.center.dleft {
    margin: 77px 0 0 20px;
  }

  .dot.center.dright {
    margin: 77px 0 0 134px;
  }

  #background {
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--root-background, transparent);
    background-size: cover;
    background-origin: border-box;
  }

  #dice .side.front,
  #dice .side.top,
  #dice .side.right,
  #dice .side.left,
  #dice .side.bottom,
  #dice .side.back {
    background-image: var(--background-3d-cube-image, "none");
    background-size: cover;
    background-origin: border-box;
  }


  :root, :host {
    --background-3d-cube-image: url('{{cube_image}}');
    --box-width: 200px;
    font-size:.9em;
    font-family:sans-serif;
    --root-background: {{background}};
  }
  </style>

  <div id="background"></div>
  <div id="wrapper">
    <div id="platform">
      <div id="dice">
        <div class="side front">
        </div>
        <div class="side front inner"></div>
        <div class="side top"></div>
        <div class="side top inner"></div>
        <div class="side right"></div>
        <div class="side right inner"></div>
        <div class="side left"></div>
        <div class="side left inner"></div>
        <div class="side bottom"></div>
        <div class="side bottom inner"></div>
        <div class="side back"></div>
        <div class="side back inner"></div>
        <div class="side cover x"></div>
        <div class="side cover y"></div>
        <div class="side cover z"></div>
      </div>
    </div>
  </div>

  `}}a(n,"CubeSplashScreenComponent"),(0,R.Package)("org.qcobjects.components.splashscreen",[t,n])},"__splash_screen__")(ie);var zt=ie.SplashScreenComponent;U.SplashScreenComponent=zt;var $t=ie.VideoSplashScreenComponent;U.VideoSplashScreenComponent=$t;var Yt=ie.CubeSplashScreenComponent;U.CubeSplashScreenComponent=Yt});var De=k(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});var Pe=N("qcobjects");(function(){"use strict";(0,Pe.Package)("org.qcobjects.controllers",[a(class extends Pe.Controller{},"GenericController")])})()});var Ae=k(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});var f=N("qcobjects");(function(){"use strict";(0,f.Package)("org.qcobjects.controllers.grid",[a(class extends f.Controller{constructor(e){super(e),this.rows=this.component.body.getAttribute("rows"),this.rows=this.rows!==null?this.rows:this.component.rows,this.cols=this.component.body.getAttribute("cols"),this.cols=this.cols!==null?this.cols:this.component.cols}cssGrid(){let e=this.component,o=e.shadowed?e.shadowRoot:e.body;if(typeof this.rows<"u"&&typeof this.cols<"u"){let t=(0,f._DOMCreateElement)("style"),n="auto ".repeat(this.rows),i="auto ".repeat(this.cols),s="grid"+this.__instanceID.toString();t.innerHTML=`.${s}{
          display: grid;           grid-template-rows: ${n};           grid-template-columns: ${i};           margin:0 auto;         }`,o?.append(t),e.shadowed?o?.host.classList.add(s):o.classList.add(s)}}done(){this.cssGrid(),f.logger.debug("GridComponent built")}},"GridController"),a(class extends f.Controller{constructor(e){super(e),this._componentRoot=e.component.shadowed?e.component.shadowRoot:e.component.body,this.rows=e.component.body.getAttribute("rows"),this.rows=e.rows!==null?e.rows:e.component.rows,this.cols=e.component.body.getAttribute("cols"),this.cols=e.cols!==null?e.cols:e.component.cols,f.logger.debug("DataGridController INIT")}getPageIndex(e,o,t){return e=e>0?e-1:0,[t*e/o,t*e/o+t/o]}addSubcomponents(){this.component.subcomponents=[],typeof this._componentRoot<"u"&&(this._componentRoot.innerHTML=""),this.cssGrid(),f.logger.debug((0,f._DataStringify)(this.component.data));try{let e=this.component.body.getAttribute("subcomponentClass");if(e!=null){let o,t,n,i=[...this.component.data],s=this.component.body.getAttribute("paginate-in"),l;s=s!==null?s:"client",s==="client"?(l=this.component.body.getAttribute("page-number"),l=isNaN(l)||l===null?-1:l,l!==-1?(n=this.component.body.getAttribute("total-pages"),n=isNaN(n)?1:n,o=this.getPageIndex(l,n,i.length)[0],t=this.getPageIndex(l,n,i.length)[1]):(o=0,t=i.length,n=1),i=i.slice(o,t)):(o=0,t=i.length,n=1),i.map((u,T,C)=>{try{let p=(0,f._DOMCreateElement)("component");p.setAttribute("name",(0,f.ClassFactory)(e).name),p.setAttribute("shadowed",(0,f.ClassFactory)(e).shadowed),p.setAttribute("cached",(0,f.ClassFactory)(e).cached),u=Object.assign(u,{__dataIndex:T,__dataLength:C.length,__page:l,__totalPages:n,__limit:t,__offset:o});let v=(0,f.New)((0,f.ClassFactory)(e),{name:"item",data:u,templateURI:(0,f.ComponentURI)({COMPONENTS_BASE_PATH:f.CONFIG.get("componentsBasePath",""),COMPONENT_NAME:(0,f.ClassFactory)(e).name,TPLEXTENSION:f.CONFIG.get("tplextension",""),TPL_SOURCE:(0,f.ClassFactory)(e).tplsource}),body:p,template:(0,f.ClassFactory)(e).template});v.done=this.component.done.bind(v);try{if(v){v.data.__dataIndex=T,Object.hasOwnProperty.call(this.component.data,"length")&&(v.data.__dataLength=this.component.data.length),f.logger.debug("adding subcomponent to body"),this._componentRoot?.append(v.body);try{this.component.subcomponents.push(v)}catch{f.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}else f.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}catch{f.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}catch{f.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}})}else f.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT")}catch{f.logger.debug("No data for component")}}cssGrid(){let e=this.component,o=e.shadowed?e.shadowRoot:e.body;if(typeof this.rows<"u"&&typeof this.cols<"u"){let t=(0,f._DOMCreateElement)("style"),n="auto ".repeat(this.rows),i="auto ".repeat(this.cols),s="grid"+this.__instanceID.toString();t.innerHTML=`.${s}{
          display: grid;           grid-template-rows: ${n};           grid-template-columns: ${i};           margin:0 auto;         }`,e.shadowed?(e.body.append(t),o.host.classList.add(s)):(o?.append(t),o.classList.add(s))}}done(){let e=this.component;f.logger.debug("DataGridController DONE");let o=this.component.body.getAttribute("serviceClass");if(o!=null){let t,n,i=e.body.getAttribute("paginate-in");if(i=i!==null?i:"client",i==="server"){let s=e.body.getAttribute("page-number");s=isNaN(s)||s===null?-1:s;let l;if(s!==-1){let u=this.component.body.getAttribute("server-data-count")!==null?this.component.body.getAttribute("server-data-count"):1;l=this.component.body.getAttribute("total-pages"),l=isNaN(l)?1:l,t=this.getPageIndex(s,l,u)[0],n=this.getPageIndex(s,l,u)[1],e.serviceData=typeof e.serviceData<"u"?e.serviceData:{},e.serviceData.params=typeof e.serviceData.params<"u"?e.serviceData.params:{},e.serviceData.params.offset=t,e.serviceData.params.limit=n}}(0,f.serviceLoader)((0,f.New)((0,f.ClassFactory)(o),{data:e.serviceData}),!1).then(s=>{f.logger.debug("DONE SERVICE COMPONENT"),s.service.JSONresponse=JSON.parse(s.service.template),typeof s.service.JSONresponse.result<"u"?(f.logger.debug((0,f._DataStringify)(s.service.JSONresponse.result)),e.data=s.service.JSONresponse.result):e.data=s.service.JSONresponse,this.addSubcomponents()},s=>{f.logger.debug(s)}).catch(s=>{f.logger.debug("Something went wrong when calling the service from: "+o),f.logger.debug(s.message)})}}},"DataGridController")])})()});var Ge=k(Le=>{"use strict";Object.defineProperty(Le,"__esModule",{value:!0});var _=N("qcobjects");(function(){"use strict";(0,_.Package)("org.qcobjects.controllers.list",[a(class extends _.Controller{constructor({component:e,dependencies:o=[],valueField:t=void 0,labelField:n=void 0}){super({component:e,dependencies:o,valueField:t,labelField:n}),this.component=e,this._componentRoot=this.component.shadowed?this.component.shadowRoot:this.component.body,this.labelField=this.component.body.getAttribute("label-field"),this.valueField=this.component.body.getAttribute("value-field"),this.rows=this.component.body.getAttribute("rows"),this.rows=this.rows!==null?this.rows:this.component.rows,this.cols=1,_.logger.debug("ListController INIT")}getPageIndex(e,o,t){return e=e>0?e-1:0,[t*e/o,t*e/o+t/o]}addSubcomponents(){this.component.subcomponents=[];let e=this.component.body.getAttribute("layout"),o=_.CONFIG.get("listBasePath",_.CONFIG.get("remoteSDKPath","")),t="";this.labelField=this.component.body.getAttribute("label-field"),this.valueField=this.component.body.getAttribute("value-field"),e==="horizontal"?t=`@import url("${o}css/components/horizontal-list.css");`:t=`@import url("${o}css/components/list.css");`,typeof this._componentRoot<"u"&&(this._componentRoot.innerHTML=`<style>${t}</style><ul></ul>`),_.logger.debug((0,_._DataStringify)(this.component.data));try{let n=this.component.body.getAttribute("subcomponentClass");if(n!=null){let i,s,l,u=[...this.component.data],T=this.component.body.getAttribute("paginate-in");T=T!==null?T:"client";let C;T==="client"?(C=this.component.body.getAttribute("page-number"),C=isNaN(C)||C===null?-1:C,C!==-1?(l=this.component.body.getAttribute("total-pages"),l=isNaN(l)?1:l,i=this.getPageIndex(C,l,u.length)[0],s=this.getPageIndex(C,l,u.length)[1]):(i=0,s=u.length,l=1),u=u.slice(i,s)):(i=0,s=u.length,l=1),u.map((d,p)=>{try{let I=(0,_._DOMCreateElement)("li");d.label=d[this.labelField],d.value=d[this.valueField];let D=(0,_.New)((0,_.ClassFactory)(n),{name:"list-item",data:{label:d[this.labelField],value:d[this.valueField],__dataIndex:p,__page:C,__totalPages:l,__limit:s,__offset:i},templateURI:(0,_.ComponentURI)({COMPONENTS_BASE_PATH:_.CONFIG.get("componentsBasePath",""),COMPONENT_NAME:(0,_.ClassFactory)(n).name,TPLEXTENSION:_.CONFIG.get("tplextension",""),TPL_SOURCE:(0,_.ClassFactory)(n).tplsource}),body:I,template:(0,_.ClassFactory)(n).template});D.done=this.component.done.bind(D);try{if(D){D.data.__dataIndex=p,Object.hasOwnProperty.call(this.component.data,"length")&&(D.data.__dataLength=this.component.data.length),_.logger.debug("adding subcomponent to body"),this._componentRoot.subelements("ul").map(G=>G.append(D));try{this.component.subcomponents.push(D)}catch{_.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}else _.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}catch{_.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}catch{_.logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}})}else _.logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT")}catch{_.logger.debug("No data for component")}}cssGrid(){let e=this.component,o=e.shadowed?e.shadowRoot:e.body;if(typeof this.rows<"u"&&typeof this.cols<"u"){let t=(0,_._DOMCreateElement)("style"),n="auto ".repeat(this.rows),i="auto ".repeat(this.cols),s="grid"+this.__instanceID.toString();t.innerHTML=`.${s}{
            display: grid;             grid-template-rows: ${n};             grid-template-columns: ${i};             margin:0 auto;           }`,o.append(t),o.classList.add(s)}}done(){this.cssGrid();let e=this.component;_.logger.debug("ListController DONE");let o=this.component.body.getAttribute("serviceClass");if(o!=null){let t,n,i=e.body.getAttribute("paginate-in");if(i=i!==null?i:"client",i==="server"){let s=e.body.getAttribute("page-number");s=isNaN(s)||s===null?-1:s;let l;if(s!==-1){let u=this.component.body.getAttribute("server-data-count")!==null?this.component.body.getAttribute("server-data-count"):1;l=this.component.body.getAttribute("total-pages"),l=isNaN(l)?1:l,t=this.getPageIndex(s,l,u)[0],n=this.getPageIndex(s,l,u)[1],e.serviceData=typeof e.serviceData<"u"?e.serviceData:{},e.serviceData.params=typeof e.serviceData.params<"u"?e.serviceData.params:{},e.serviceData.params.offset=t,e.serviceData.params.limit=n}}(0,_.serviceLoader)((0,_.New)((0,_.ClassFactory)(o),{data:e.serviceData}),!1).then(s=>{_.logger.debug("DONE SERVICE COMPONENT"),s.service.JSONresponse=JSON.parse(s.service.template),typeof s.service.JSONresponse.result<"u"?(_.logger.debug((0,_._DataStringify)(s.service.JSONresponse.result)),e.data=s.service.JSONresponse.result):e.data=s.service.JSONresponse,this.addSubcomponents()},s=>{_.logger.debug(s)}).catch(s=>{_.logger.debug("Something went wrong when calling the service from: "+o),_.logger.debug(s.message)})}}},"ListController")])})()});var Be=k((Ue,ae)=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});var B=N("qcobjects");(function(r){"use strict";(0,B.Package)("org.qcobjects.controllers.slider",[a(class extends B.Controller{constructor({component:o,dependencies:t=[],duration:n=7100,slideIndex:i=0,interval:s=null,sliderHandlerName:l=null}){super({component:o,dependencies:t,duration:n,slideIndex:i,interval:s,sliderHandlerName:l}),this.slideIndex=0,this.duration=7100,this.interval=null,this.sliderHandlerName="",this.component=o,this._componentRoot=o.shadowed?o.shadowRoot:o.body,this.sliderHandlerName="slider_"+this.component.__instanceID.toString(),r.set(this.sliderHandlerName,this)}stop(){this.interval!=null&&clearInterval(this.interval)}plusSlidesAndStop(o){this.stop(),this.plusSlides(o)}plusSlides(o){this.showSlides(this.slideIndex+=o)}currentSlide(o){this.stop(),this.showSlides(this.slideIndex=o)}automate(){this.interval=setInterval(()=>{this.plusSlides(1)},this.duration)}showSlides(o){let t=this._componentRoot?.subelements(".qcoSlides"),n=this._componentRoot?.subelements(".qcoSlider__dots--dot");o>t.length-1&&(this.slideIndex=0),o<0&&(this.slideIndex=0),t.filter((i,s)=>s!==this.slideIndex).map(i=>(0,B.New)((0,B.ClassFactory)("Fade"),{}).apply(i,1,0)),n.filter((i,s)=>s!==this.slideIndex).map(i=>i.classList.remove("active"));try{n[this.slideIndex].classList.add("active")}catch(i){B.logger.debug(`Something went wrong when trying to activate a slide: ${this.slideIndex} - ${i.message}`)}setTimeout(()=>{t.filter((i,s)=>s!==this.slideIndex).map(i=>(i.style.display="none",i.style.display));try{t[this.slideIndex].style.display="block",(0,B.New)((0,B.ClassFactory)("Fade"),{}).apply(t[this.slideIndex],0,1)}catch(i){B.logger.debug(`Something went wrong when trying to show a slide: ${this.slideIndex} - ${i.message}`)}},700)}fillDots(){(this._componentRoot?.subelements(".qcoSlides")).map((t,n)=>{let i=document.createElement("span"),s=`<span class="qcoSlider__dots--dot" onclick="global.get('${this.sliderHandlerName}').currentSlide(${n})"></span>`;return i.innerHTML=s,this._componentRoot?.subelements(".qcoSlider__dots")[0].append(i)})}done(){(this._componentRoot?.subelements(".qcoSlides")).filter((t,n)=>n!==this.slideIndex).map(t=>(t.style.display="none",t.style.display)),setTimeout(()=>{this.fillDots(),this.slideIndex=0,this.showSlides(this.slideIndex),this.automate()},3e3)}},"SliderController")])})(typeof ae=="object"&&typeof ae.exports=="object"?ae.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var ze=k(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});var P=N("qcobjects"),Ze=ce();(function(){"use strict";(0,P.Package)("org.qcobjects.controllers.form",[a(class extends P.Controller{getDefault(){return function(e,o,t){let n={name:"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",email:"^([A-Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$"},i=t.getAttribute("pattern")||n[e];return new RegExp(i).test(o)}}},"FormValidations"),a(class extends P.Controller{hasValidation(e){let o=e.getAttribute("data-field"),t=!1;return typeof this.validations<"u"&&Object.hasOwnProperty.call(this.validations,o)&&(t=!0),t}isInvalid(e){let o=!1,t=e.getAttribute("data-field"),n=this.component.data[t],i=a((s,l,u)=>typeof this.validations<"u"&&Object.hasOwnProperty.call(this.validations,s)&&this.validations[s].call(null,s,l,u),"_execValidation");return typeof this.validations<"u"&&!i(t,n,e)&&(o=!0),o}isValid(e){return!this.isInvalid(e)}save(){this.serviceClass!==""?(location.href=this.formSettings.loadingRouting,(0,P.serviceLoader)((0,P.New)((0,P.ClassFactory)(this.serviceClass),{data:this.component.data}),!1).then(e=>{console.log("DONE SERVICE COMPONENT");try{console.log(e.service.JSONresponse)}catch{}location.href=this.formSettings.nextRouting},e=>{P.logger.debug(e),location.href=this.formSettings.backRouting})):P.logger.debug("No service name declared on serviceClass property")}formSaveTouchHandler(){P.logger.debug("Saving data...");let e=this.component.shadowed?(this.component?.shadowRoot).host:this.component.body;if(this.component.executeBindings(),this.formValidatorModal!=null){let t=e.subelements("*[data-field]").filter(l=>this.hasValidation(l)),n=a(function(l,u){return a((C,d)=>d.getAttribute("aria-labelledby")!==null?(d.getAttribute("aria-labelledby")||"").split(" ").map(p=>C.subelements(`#${p}`).map(v=>v.innerHTML)).join(" "):null,"_arialabelledby")(l,u)||u.getAttribute("aria-label")||u.getAttribute("placeholder")||u.getAttribute("name")||u.getAttribute("data-field")},"_labelledby"),i=a(function(l){return l.getAttribute("title")||l.getAttribute("aria-title")||""},"_ariatitle"),s=t.filter(l=>this.isInvalid(l));if(s.length>0){let l=`
<details>
    <summary>Please verify the following incorrect fields:</summary>
    <ul>
      <div>
      ${s.map(u=>"<li><div>"+n(e,u)+"</div><div>"+i(u)+"</div></li>").join("")}
      </div>
    </ul>
</details>
`;this.formValidatorModal.body.subelements(".validationMessage")[0].innerHTML=l,this.formValidatorModal.modal()}else this.save()}else P.logger.debug("Unable to find the modal validator..."),P.logger.debug("Saving data..."),this.save()}constructor(e){super(e),this.validations=[],this.serviceClass="",this.formSettings={backRouting:"#",loadingRouting:"#loading",nextRouting:"#signupsuccessful"},this.component=e.component,this.component=this.component.Cast(Ze.FormField)}done(){P.logger.debugEnabled=!0;try{this.component.createBindingEvents();let e=(0,P._DOMCreateElement)("div");e.className="modal_body",this.formValidatorModal=(0,P.New)(Ze.ModalComponent,{body:e,subcomponents:[],data:{content:'<div class="validationMessage"></div>'}}),(0,P.Tag)(".modal_body").map(o=>document.body.removeChild(o)),document.body.append(this.formValidatorModal)}catch{P.logger.debug("Unable to create the modal")}this.onpress(".submit",()=>{this.formSaveTouchHandler()})}},"FormController")])})()});var Ye=k($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});var E=N("qcobjects");(function(){"use strict";(0,E.Package)("org.qcobjects.controllers.swagger",[a(class extends E.Controller{startSwaggerUI(){if(typeof SwaggerUIBundle<"u"){let e=SwaggerUIBundle({url:E.CONFIG.get("swagger-ui-url","https://petstore.swagger.io/v2/swagger.json"),dom_id:"#"+E.CONFIG.get("swagger-ui-dom_id","swagger-ui"),deepLinking:!0,presets:[SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset],plugins:[SwaggerUIBundle.plugins.DownloadUrl],layout:"StandaloneLayout"});window.ui=e}}done(){this.component.body.innerHTML='<div id="'+E.CONFIG.get("swagger-ui-dom_id","swagger-ui")+'"></div>';let e=E.CONFIG.get("swagger-ui-package-path","node_modules/swagger-ui-dist/");this.dependencies?.push((0,E.New)(E.SourceJS,{url:e+"swagger-ui-standalone-preset.js",external:E.CONFIG.get("swagger-ui-external",!1)})),this.dependencies?.push((0,E.New)(E.SourceCSS,{url:e+"swagger-ui.css",external:E.CONFIG.get("swagger-ui-external",!1)})),this.dependencies?.push((0,E.New)(E.SourceJS,{url:e+"swagger-ui-bundle.js",external:E.CONFIG.get("swagger-ui-external",!1),done:()=>{this.startSwaggerUI()}}))}},"SwaggerUIController")])})()});var We=k(Ve=>{"use strict";Object.defineProperty(Ve,"__esModule",{value:!0});var He=N("qcobjects");(function(){"use strict";(0,He.Package)("org.qcobjects.modal.controllers",[a(class extends He.Controller{done(){let e=this.component;e.body.innerHTML=e.body.innerHTML.replace("/{{content}}/g",e.submodal.template)}},"ModalController")])})()});var Qe=k(Ke=>{"use strict";Object.defineProperty(Ke,"__esModule",{value:!0});var Je=N("qcobjects");(function(){"use strict";(0,Je.Package)("org.qcobjects.views",[a(class extends Je.View{},"GridView")])})()});var ot=k(tt=>{"use strict";Object.defineProperty(tt,"__esModule",{value:!0});var et=N("qcobjects");(function(){(0,et.Package)("org.qcobjects.tools.canvas",[a(class extends et.InheritClass{drawImageFilled(e,o,t=1,n=0,i=0){let s=Math.max(o.width/e.width,o.height/e.height);s=s*t;let l=o.width/2-e.width/2*s,u=o.height/2-e.height/2*s;o.getContext("2d")?.drawImage(e,n+l,i+u,e.width*s,e.height*s)}getImageResized(e,o,t,n,i=1,s=0,l=0){let u=document.createElement("canvas");return u.width=o,u.height=t,u.style.width=o.toString(),u.style.height=t.toString(),this.drawImageFilled(e,u,i,s,l),n.src=u.toDataURL("image/png"),u}},"CanvasTool")])})()});var nt=k(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});var x=N("qcobjects"),V=$();(function(){(0,x.Package)("org.qcobjects.tools.layouts",[a(class extends x.InheritClass{constructor({component:e=null,dependencies:o=[]}){super({component:e,dependencies:o}),this.dependencies=[]}load(){this.dependencies.push((0,x.New)(x.SourceCSS,{external:!x.CONFIG.get("useLocalSDK",!1),url:x.CONFIG.get("useLocalSDK",!1)?"css/basic-layout.css":x.CONFIG.get("remoteSDKPath",!1)+"css/basic-layout.css"}))}coloredBorder(){setTimeout(function(){(0,x.Tag)("nav").map(e=>{e.style.border="20px solid #3333"}),(0,x.Tag)("nav").map(e=>{e.style.backgroundColor="#129999"}),(0,x.Tag)("component>footer").map(e=>{e.style.background="#876"}),(0,x.Tag)("component>div").map(e=>{e.style.border="3px dashed #fff"}),(0,x.Tag)("component>section").map(e=>{e.style.border="3px solid #000"}),(0,x.Tag)("component>section").map(e=>{e.style.backgroundColor="#fffaaa"}),(0,x.Tag)("component>article").map(e=>{e.style.border="3px dotted #000"}),(0,x.Tag)("component>header").map(e=>{e.style.background="#789"}),(0,x.Tag)("component>footer").map(e=>{e.style.background="#876"}),(0,x.Tag)("component>article:nth-child(1)").map(e=>{e.style.border="1px solid #444"}),(0,x.Tag)("component>article:nth-child(1)").map(e=>{e.style.backgroundColor="#555aaa"}),(0,x.Tag)("component>article:nth-child(2)").map(e=>{e.style.backgroundColor="#aaa333"}),(0,x.Tag)("component>article:nth-child(3)").map(e=>{e.style.backgroundColor="#54da82"}),(0,x.Tag)("*").map(e=>{e.style.color="#fff"}),(0,x.Tag)("component>article").map(e=>V.Fade.apply(e,0,1)),(0,x.Tag)("component>footer").map(e=>V.Fade.apply(e,0,1)),(0,x.Tag)("component>header").map(e=>V.Fade.apply(e,0,1)),(0,x.Tag)("nav").map(e=>{e.style.display="block",e.style.width=e.offsetParent?.scrollWidth.toString()||e.clientWidth.toString(),V.MoveXInFromLeft.apply(e)}),(0,x.Tag)("component>article").map(e=>{e.style.display="block",e.style.height=e.offsetParent?.scrollHeight.toString()||e.clientHeight.toString(),V.MoveYInFromBottom.apply(e)}),(0,x.Tag)("component>article:nth-child(2)").map(e=>{e.style.display="block",e.style.width=e.offsetParent?.scrollWidth.toString()||e.clientWidth.toString(),V.MoveXInFromRight.apply(e)})},300)}},"BasicLayout")])})()});var be=k((de,re)=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.SessionUserToken=void 0;var Z=N("qcobjects"),it=typeof re=="object"&&typeof re.exports=="object"?re.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};(function(r){"use strict";class e extends Z.InheritClass{constructor(t){super(t);let n=this;this.__cache__=new Z.ComplexStorageCache({index:n.__instanceID.toString(),load(){let i;return typeof navigator<"u"&&typeof origin<"u"?i=Z._Crypt.encrypt(`${navigator.userAgent}|${t.username}|${(+new Date).toString()}`,origin):i=Z._Crypt.encrypt(`${t.username}|${(+new Date).toString()}`,Z.CONFIG.get("domain","localhost")),e.user={priority:n.__instanceID.toString(),token:i},e.user},alternate(i){e.user=i?.cache.getCached(n.__instanceID.toString())}})}static generateIndex(t){return typeof Buffer<"u"?Buffer.from(t,"ascii").toString("base64"):btoa(t)}getGlobalUser(...t){let n=[t].join("|"),i="userToken_"+e.generateIndex(n);return(typeof r.get(i)>"u"||r.get(i)===null)&&r.set(i,(0,Z.New)(e,{username:n})),e.user=r.get(i).user,r.get(i).user}getGlobalUserToken(...t){return this.getGlobalUser(t).token}getGlobalUserId(...t){return this.getGlobalUser(t).id}getGlobalUserPriority(...t){return this.getGlobalUser(t).priority}getLoginCredentialsToken(t,n){return Z._Crypt.encrypt(`${t}${n}`,this.getGlobalUserToken(t))}closeGlobalSession(...t){this.getGlobalUser(t);let n=[t].join("|"),i="userToken_"+e.generateIndex(n);typeof r.get(i)<"u"&&(r.get(i).__cache__.clear(),r.set(i,null),e.user={})}}a(e,"SessionUserToken"),e.user={},(0,Z.Package)("org.qcobjects.cloud.auth.session.usertoken",[e])})(it);var Ht=it.SessionUserToken;de.SessionUserToken=Ht});var dt=k(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});var ye=N("qcobjects"),at=be();(function(){"use strict";(0,ye.Package)("org.qcobjects.cloud.auth.session.data",[a(class extends ye.InheritClass{constructor(){super(...arguments),this.__session_container__=null}setSessionContainer(){this.__session_container__=[...arguments]}getSessionContainer(){if(typeof this.__session_container__>"u"||this.__session_container__===null)throw new Error("You need to set a session container first: sessionData.setSessionContainer(...arguments)");return this.__session_container__}getSessionData(...e){let o=sessionStorage.getItem(`${this.index(e)}`),t;return o!==null&&(t=JSON.parse(o)),(typeof t>"u"||t===null)&&(t={}),t}index(...e){if(typeof at.SessionUserToken>"u")throw new Error('You need to import SessionUserToken first: Import ("org.qcobjects.cloud.auth.session.usertoken")');return`session_${btoa(at.SessionUserToken.getGlobalUserToken(e))}`}save(...e){let o=(0,ye._DataStringify)(this.sessionData);sessionStorage.setItem(`${this.index(e)}`,o)}get(e,o){let t=this.getSessionData(this.getSessionContainer());return typeof t[e]<"u"?t[e]:o}set(e,o){let t=this.getSessionContainer(),n=this.getSessionData(t);this.sessionData=n,this.sessionData[e]=o,this.save(t)}},"SessionData")])})()});var Vt=k((_e,le)=>{Object.defineProperty(_e,"__esModule",{value:!0});var lt=N("qcobjects"),ct=typeof le=="object"&&typeof le.exports=="object"?le.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{};a(function r(e){"use strict";if(e.__qcobjects_sdk__=r,typeof Object.defineProperty<"u"&&typeof e<"u")try{Object.defineProperty(e,"__qcobjects_sdk__",{enumerable:!0,configurable:!1,writable:!1,value:r})}catch{typeof e.__qcobjects_sdk__<"u"&&(e.__qcobjects_sdk__.__loaded__=!0)}if(typeof e.__qcobjects_sdk__.__loaded__>"u"){if(e.__qcobjects_sdk__.__loaded__=!0,typeof e>"u")throw Error("Top context empty: It should either global, module or window");let o=lt.GlobalSettings.__start__.bind(e),t=[];t=[new Promise(n=>{Ce(),Oe(),ce(),Ne(),ke(),Te(),Fe(),qe(),De(),Ae(),Ge(),Be(),ze(),Ye(),$(),We(),Qe(),ot(),nt(),be(),dt(),n()})],e._sdk_=Promise.all(t).then(()=>{lt.CONFIG.set("useSDK",!0),o()})}},"__qcobjects_sdk__")(ct);_e.default=ct});export default Vt();
//# sourceMappingURL=QCObjects-SDK.js.map
