(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),client=__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js"),custom_elements=__webpack_require__("./custom-elements.json");Object(client.setCustomElementsManifest)(custom_elements);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./custom-elements.json":function(module){module.exports=JSON.parse('{"schemaVersion":"1.0.0","readme":"","modules":[{"kind":"javascript-module","path":"stories/demo-wc-card/DemoWcCard.js","declarations":[{"kind":"class","description":"This is a container looking like a card with a back and front side you can switch","name":"DemoWcCard","cssProperties":[{"description":"Header font size","name":"--demo-wc-card-header-font-size"},{"description":"Font color for front","name":"--demo-wc-card-front-color"},{"description":"Font color for back","name":"--demo-wc-card-back-color"}],"cssParts":[{"description":"Front of the card","name":"front"},{"description":"Back of the card","name":"back"},{"description":"csspart header that overrides the header property and attribute","name":"header"}],"slots":[{"description":"This is an unnamed slot (the default slot)","name":""}],"members":[{"kind":"method","name":"toggle"},{"kind":"field","name":"backSide","privacy":"public","type":{"text":"boolean"},"description":"Indicates that the back of the card is shown","default":"false","attribute":"back-side","reflects":true},{"kind":"field","name":"header","privacy":"public","type":{"text":"string"},"description":"Header message","default":"\'Your Message\'","attribute":"header"},{"kind":"field","name":"rows","privacy":"public","type":{"text":"array"},"description":"Data rows","default":"[]","attribute":"rows"}],"events":[{"name":"side-changed","type":{"text":"CustomEvent"},"description":"Fires whenever it switches between front/back"}],"attributes":[{"name":"back-side","type":{"text":"boolean"},"description":"Indicates that the back of the card is shown","default":"false","fieldName":"backSide"},{"name":"header","type":{"text":"string"},"description":"Header message","default":"\'Your Message\'","fieldName":"header"},{"name":"rows","type":{"text":"array"},"description":"Data rows","default":"[]","fieldName":"rows"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"demo-wc-card","customElement":true}],"exports":[{"kind":"js","name":"DemoWcCard","declaration":{"name":"DemoWcCard","module":"stories/demo-wc-card/DemoWcCard.js"}}]},{"kind":"javascript-module","path":"stories/demo-wc-card/index.js","declarations":[],"exports":[{"kind":"custom-element-definition","name":"demo-wc-card","declaration":{"name":"DemoWcCard","module":"/stories/demo-wc-card/DemoWcCard.js"}}]}]}')},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./demo-wc-card.stories.js":"./stories/demo-wc-card.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/demo-wc-card.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Front",(function(){return Front}));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit=__webpack_require__("./node_modules/lit/index.js"),global_window=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/global/window.js")),window_default=__webpack_require__.n(global_window);var DemoWcCard_templateObject,_templateObject2,_templateObject3,_templateObject4,demoWcCardStyle=Object(lit.b)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  :host {\n    display: block;\n    position: relative;\n    width: 250px;\n    height: 200px;\n    border-radius: 10px;\n    transform-style: preserve-3d;\n    transition: all 0.8s ease;\n  }\n\n  .header {\n    font-weight: bold;\n    font-size: var(--demo-wc-card-header-font-size, 16px);\n    text-align: center;\n  }\n\n  .content {\n    padding: 20px 10px 0 10px;\n    flex-grow: 1;\n  }\n\n  .footer {\n    display: flex;\n  }\n\n  dl {\n    margin: 0;\n    text-align: left;\n  }\n\n  dd {\n    margin-left: 15px;\n  }\n\n  button {\n    border-radius: 15px;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border: 1px solid #ccc;\n    color: #000;\n    font-size: 21px;\n    line-height: 27px;\n    font-weight: bold;\n    cursor: pointer;\n    margin: 5px;\n  }\n\n  .note {\n    flex-grow: 1;\n    color: #666;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: left;\n    padding-top: 15px;\n  }\n\n  :host([back-side]) {\n    transform: rotateY(180deg);\n  }\n\n  #front,\n  #back {\n    position: absolute;\n    width: 250px;\n    box-sizing: border-box;\n    box-shadow: #ccc 3px 3px 2px 1px;\n    padding: 10px;\n    display: flex;\n    flex-flow: column;\n    top: 0;\n    left: 0;\n    height: 100%;\n    border-radius: 10px;\n    backface-visibility: hidden;\n    overflow: hidden;\n  }\n\n  #front {\n    background: linear-gradient(141deg, #aaa 25%, #eee 40%, #ddd 55%);\n    color: var(--demo-wc-card-front-color, #000);\n  }\n\n  #back {\n    background: linear-gradient(141deg, #333 25%, #aaa 40%, #666 55%);\n    color: var(--demo-wc-card-back-color, #fff);\n    text-align: center;\n    transform: rotateY(180deg) translate3d(0px, 0, 1px);\n  }\n\n  #back .note {\n    color: #fff;\n  }\n"])));function DemoWcCard_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var demo_wc_card_stories_templateObject,CustomEvent=window_default.a.CustomEvent,DemoWcCard_DemoWcCard=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DemoWcCard,_LitElement);var _super=_createSuper(DemoWcCard);function DemoWcCard(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DemoWcCard),(_this=_super.call(this)).backSide=!1,_this.header="Your Message",_this.rows=[],_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DemoWcCard,[{key:"toggle",value:function toggle(){this.backSide=!this.backSide}},{key:"render",value:function render(){return Object(lit.c)(DemoWcCard_templateObject||(DemoWcCard_templateObject=DemoWcCard_taggedTemplateLiteralLoose(['\n      <div id="front" part="front">\n        <div class="header" part="header">','</div>\n        <div class="content">\n          <slot></slot>\n        </div>\n        <div class="footer">\n          <div class="note">A</div>\n          <button @click=','>></button>\n        </div>\n      </div>\n      <div id="back" part="back">\n        <div class="header">','</div>\n\n        <div class="content">\n          ','\n        </div>\n        <div class="footer">\n          <div class="note">B</div>\n          <button @click=',">></button>\n        </div>\n      </div>\n    "])),this.header,this.toggle,this.header,0===this.rows.length?Object(lit.c)(_templateObject2||(_templateObject2=DemoWcCard_taggedTemplateLiteralLoose([""]))):Object(lit.c)(_templateObject3||(_templateObject3=DemoWcCard_taggedTemplateLiteralLoose(["\n                <dl>\n                  ","\n                </dl>\n              "])),this.rows.map((function(row){return Object(lit.c)(_templateObject4||(_templateObject4=DemoWcCard_taggedTemplateLiteralLoose(["\n                      <dt>","</dt>\n                      <dd>","</dd>\n                    "])),row.header,row.value)}))),this.toggle)}},{key:"updated",value:function updated(changedProperties){changedProperties.has("backSide")&&void 0!==changedProperties.get("backSide")&&this.dispatchEvent(new CustomEvent("side-changed"))}}],[{key:"properties",get:function get(){return{backSide:{type:Boolean,reflect:!0,attribute:"back-side"},header:{type:String},rows:{type:Object}}}},{key:"styles",get:function get(){return demoWcCardStyle}}]),DemoWcCard}(lit.a);customElements.define("demo-wc-card",DemoWcCard_DemoWcCard);__webpack_exports__.default={component:"demo-wc-card"};var Front=function Template(_ref){var backSide=_ref.backSide,header=_ref.header,rows=_ref.rows;return Object(lit.c)(demo_wc_card_stories_templateObject||(demo_wc_card_stories_templateObject=function demo_wc_card_stories_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n    <demo-wc-card .backSide="','" .header="','" .rows="','"\n      >A simple card</demo-wc-card\n    >\n  '])),backSide,header,rows)}.bind({});Front.args={backSide:!1,header:void 0,rows:[]},Front.parameters=Object.assign({storySource:{source:'({ backSide, header, rows }) =>\n  html`\n    <demo-wc-card .backSide="${backSide}" .header="${header}" .rows="${rows}"\n      >A simple card</demo-wc-card\n    >\n  `'}},Front.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,6,7]]]);