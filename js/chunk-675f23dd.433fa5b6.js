(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-675f23dd"],{"07e3":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"1bc3":function(e,t,n){var i=n("f772");e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(e,t,n){var i=n("f772"),o=n("e53d").document,r=i(o)&&i(o.createElement);e.exports=function(e){return r?o.createElement(e):{}}},"293a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-content",{staticClass:"chat-vista"},[i("Navegacion"),i("v-container",{staticStyle:{height:"100%"},attrs:{"grid-list-xl":""}},[i("v-layout",{staticStyle:{height:"100%"},attrs:{"justify-center":"",wrap:""}},[i("v-flex",{staticStyle:{height:"100%"},attrs:{xs12:"",md6:""}},[i("v-card",{staticClass:"elevation-6 fill-height"},[i("div",{staticClass:"chat-componente",staticStyle:{height:"100%"}},[i("v-container",{attrs:{id:"chat-ventana"}},[i("v-layout",{attrs:{column:""}},[i("img",{staticClass:"mt-2 mb-2",staticStyle:{display:"block",margin:"0 auto"},attrs:{src:n("9ded"),width:"60px"}}),e._l(e.mensajes,function(t,n){return i("v-flex",{key:n},[i("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"chat-mensaje elevation-4",class:{"chat-mensaje-0":0==t.autor,"chat-mensaje-1":1==t.autor}},[i("span",[e._v(e._s(t.texto))]),t.recurso?i("div",{staticClass:"chat-mensaje-recurso"},[i("span",[e._v(e._s(t.recurso.nombre))])]):e._e()])],1)})],2)],1),i("div",[i("v-form",{staticClass:"chat-botones",on:{submit:function(t){return t.preventDefault(),e.enviarMensaje(t)}}},[i("v-text-field",{staticClass:"mr-3",model:{value:e.consulta,callback:function(t){e.consulta=t},expression:"consulta"}}),e.enviar_mensaje?i("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:e.enviarMensaje}},[i("v-icon",{attrs:{dark:""}},[e._v("send")])],1):i("v-progress-circular",{staticClass:"ml-2 mr-2",attrs:{indeterminate:"",color:"primary"}})],1)],1)],1)])],1),i("v-scroll-x-transition",[e.mostrar_resultado?i("v-flex",{staticStyle:{height:"100%"},attrs:{xs12:"",md6:""}},[i("v-card",{staticClass:"elevation-6 fill-height"},[i("div",{staticClass:"chat-estadistica",staticStyle:{height:"100%"}},[i("div",{staticClass:"px-5 pt-5"},[i("p",{staticClass:"text-xs-center mb-0",staticStyle:{"font-size":"22px","font-weight":"bold",color:"#616161"}},[e._v("Resultados del cuestionario")]),i("div",{staticClass:"mx-3",staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","font-size":"14px"}},[i("v-progress-circular",{staticStyle:{margin:"20px auto"},attrs:{rotate:360,size:150,width:15,value:e.cuestionario_diabetes_pc,color:e.cuestionario_color}},[i("h1",[e._v(e._s(e.cuestionario_diabetes_pc)+"/100")])]),i("v-scroll-x-transition",[e.mostrar_resultado_detalle?i("div",{staticClass:"text-xs-center"},[i("span",[e._v("\n                        Tu puntuación ha sido de\n                        "),i("strong",[e._v(e._s(e.cuestionario_diabetes_pc))]),e._v(".\n                      ")]),i("br"),i("span",[e._v("\n                        Usted tiene un\n                        "),i("strong",{style:{color:e.cuestionario_color}},[e._v("riesgo "+e._s(e.nivel_riesgo))]),e._v(" de desarrollar\n                        "),i("strong",[e._v("diabetes tipo 2")]),e._v(".\n                      ")]),i("v-divider",{staticClass:"mt-4 mb-3"})],1):e._e()])],1),i("v-scroll-x-transition",[e.mostrar_resultado_detalle_2?i("div",{staticStyle:{"font-size":"13px"}},[i("p",[e._v("\n                      Aún así, usted podría reducir su riesgo de desarrollar\n                      "),i("strong",[e._v("diabetes tipo 2")]),e._v(". Le damos las siguientes recomendaciones:\n                    ")]),i("ul",[i("li",[i("p",[e._v("Haga más actividad física. El ejercicio puede ayudarte a bajar de peso y bajar el azúcar en la sangre")])]),i("li",[i("p",[e._v("Adelgaza los kilos de más. La prevención de la diabetes podría depender del adelgazamiento. Por cada kilo que pierdes, te sorprenderá cuánto mejorará su salud.")])]),i("li",[i("p",[e._v("Consuma mucha fibra, la fibra puede ayudarte a reducir el riesgo de padecer diabetes")])]),i("li",[i("p",[e._v("Evite las dietas de moda y elija opciones más saludables. Incluye en tu plan de alimentación saludable alimentos variados y porciones de tamaño controlado.")])])]),i("v-divider",{staticClass:"my-3"})],1):e._e()])],1),i("div",{staticClass:"px-2 pb-1"},[i("v-alert",{staticStyle:{"font-size":"12px"},attrs:{value:!0,type:"info",outline:""}},[e._v("Este cuestionario no puede reemplazar un diagnóstico facultativo. Por este motivo, debería consultar con su médico el resultado obtenido.")])],1)])])],1):e._e()],1)],1)],1)],1)},o=[],r=n("d225"),a=n("85f2"),s=n.n(a);function c(e,t,n){return t in e?s()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=n("5cf9"),l=n("5118"),d={data:function(){return c({mostrar_resultado:!1,mostrar_resultado_detalle:!1,mostrar_resultado_detalle_2:!1,cuestionario_diabetes_pc:0,cuestionario_diabetes:0,cuestionario_color:"primary",nivel_riesgo:"bajo",enviar_mensaje:!0,mensajes:[new f(0,"Soy tu DoctorIA. Escríbeme algo.")],consulta:"",contexto_previo:"",cuestionario_index:0,cuestionario_activo:!1},"cuestionario_diabetes",0)},mounted:function(){this.scrollDown()},methods:{enviarMensaje:function(){if(0!=this.consulta.trim().length&&this.enviar_mensaje){this.enviar_mensaje=!1,this.mensajes.push(new f(1,this.consulta));var e=this.consulta;this.consulta="",this.responderMensaje(e),this.scrollDown()}},responderMensaje:function(e){var t=this,n={consulta:e,contexto_previo:this.contexto_previo,cuestionario_index:this.cuestionario_index,cuestionario_activo:this.cuestionario_activo,cuestionario_diabetes:this.cuestionario_diabetes};fetch("https://unmsm-sd-chatbot-doctoria.herokuapp.com/chatbot",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).catch(function(e){console.error("Error:",e),t.enviar_mensaje=!0}).then(function(e){console.log("Success:",e),t.enviar_mensaje=!0,t.contexto_previo=e.contexto_previo,t.cuestionario_index=e.cuestionario_index,t.cuestionario_activo=e.cuestionario_activo,t.cuestionario_diabetes=e.cuestionario_diabetes;var n=Array.isArray(e.respuesta)?e.respuesta[Math.floor(Math.random()*e.respuesta.length)]:e.respuesta;"$fin_cuestionario"==n?(t.mensajes.push(new f(0,"Te muestro los resultados de mi diagnóstico.")),t.ocultarResultado(),t.mostrarResultado(t.cuestionario_diabetes,t.cuestionario_index)):t.mensajes.push(new f(0,n)),t.scrollDown()})},ocultarResultado:function(){this.nivel_riesgo="",this.mostrar_resultado=!1,this.mostrar_resultado_detalle=!1,this.mostrar_resultado_detalle_2=!1},mostrarResultado:function(e,t){var n=100*e/t;this.mostrar_resultado=!0,this.nivel_riesgo=n>66?"alto":n>33?"medio":"bajo",this.cuestionario_color=n>66?"red":n>33?"#ff9b00":"green",this.mostrarResultadoAnimacion(0,n)},mostrarResultadoAnimacion:function(e,t){var n=this;this.cuestionario_diabetes_pc=e,e<t?Object(l["setTimeout"])(function(){n.mostrarResultadoAnimacion(e+1,t)},10):(Object(l["setTimeout"])(function(){n.mostrar_resultado_detalle=!0},800),Object(l["setTimeout"])(function(){n.mostrar_resultado_detalle_2=!0},1600))},scrollDown:function(){var e=document.getElementById("chat-ventana");Object(l["setTimeout"])(function(){e.scrollHeight-e.scrollTop<1100&&(e.scrollTop=e.scrollHeight)},0)}},components:{Navegacion:u["a"]}},f=function e(t,n){Object(r["a"])(this,e),this.autor=t,this.texto=n},p=d,m=(n("f5a4"),n("2877")),v=n("6544"),h=n.n(v),_=n("0798"),y=n("8336"),b=n("b0af"),g=n("a523"),x=n("549c"),w=(n("58db"),n("6a18")),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},j=w["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){return e("hr",{class:T({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}}),C=n("0e8f"),O=n("4bd4"),I=n("132d"),S=n("a722"),E=n("490a"),k=n("0789"),M=n("2677"),P=n("269a"),A=n.n(P),V=n("3ccf"),F=Object(m["a"])(p,i,o,!1,null,"4823b218",null);t["default"]=F.exports;h()(F,{VAlert:_["a"],VBtn:y["a"],VCard:b["a"],VContainer:g["a"],VContent:x["a"],VDivider:j,VFlex:C["a"],VForm:O["a"],VIcon:I["a"],VLayout:S["a"],VProgressCircular:E["a"],VScrollXTransition:k["c"],VTextField:M["a"]}),A()(F,{Ripple:V["a"]})},"294c":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"35e8":function(e,t,n){var i=n("d9f6"),o=n("aebd");e.exports=n("8e60")?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"44e1":function(e,t,n){},"454f":function(e,t,n){n("46a7");var i=n("584a").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},"46a7":function(e,t,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},"584a":function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"58db":function(e,t,n){},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,o=1,r={},a=!1,s=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?p():m()?v():e.MessageChannel?h():s&&"onreadystatechange"in s.createElement("script")?_():y(),c.setImmediate=u,c.clearImmediate=l}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return r[o]=a,i(o),o++}function l(e){delete r[e]}function d(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function f(e){if(a)setTimeout(f,0,e);else{var t=r[e];if(t){a=!0;try{d(t)}finally{l(e),a=!1}}}}function p(){i=function(e){t.nextTick(function(){f(e)})}}function m(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function v(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},i=function(t){e.port2.postMessage(t)}}function _(){var e=s.documentElement;i=function(t){var n=s.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function y(){i=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},"63b6":function(e,t,n){var i=n("e53d"),o=n("584a"),r=n("d864"),a=n("35e8"),s=n("07e3"),c="prototype",u=function(e,t,n){var l,d,f,p=e&u.F,m=e&u.G,v=e&u.S,h=e&u.P,_=e&u.B,y=e&u.W,b=m?o:o[t]||(o[t]={}),g=b[c],x=m?i:v?i[t]:(i[t]||{})[c];for(l in m&&(n=t),n)d=!p&&x&&void 0!==x[l],d&&s(b,l)||(f=d?x[l]:n[l],b[l]=m&&"function"!=typeof x[l]?n[l]:_&&d?r(f,i):y&&x[l]==f?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):h&&"function"==typeof f?r(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[l]=f,e&u.R&&g&&!g[l]&&a(g,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"794b":function(e,t,n){e.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"85f2":function(e,t,n){e.exports=n("454f")},"8e60":function(e,t,n){e.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},aebd:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},d864:function(e,t,n){var i=n("79aa");e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}}},d9f6:function(e,t,n){var i=n("e4ae"),o=n("794b"),r=n("1bc3"),a=Object.defineProperty;t.f=n("8e60")?Object.defineProperty:function(e,t,n){if(i(e),t=r(t,!0),i(n),o)try{return a(e,t,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},e4ae:function(e,t,n){var i=n("f772");e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},e53d:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f28c:function(e,t){var n,i,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function c(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"===typeof clearTimeout?clearTimeout:a}catch(e){i=a}})();var u,l=[],d=!1,f=-1;function p(){d&&u&&(d=!1,u.length?l=u.concat(l):f=-1,l.length&&m())}function m(){if(!d){var e=s(p);d=!0;var t=l.length;while(t){u=l,l=[];while(++f<t)u&&u[f].run();f=-1,t=l.length}u=null,d=!1,c(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new v(e,t)),1!==l.length||d||s(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},f5a4:function(e,t,n){"use strict";var i=n("44e1"),o=n.n(i);o.a},f772:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}}}]);
//# sourceMappingURL=chunk-675f23dd.433fa5b6.js.map