(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,a){"use strict";var i=a(155),n=a(0),r=a.n(n),s=a(4),o=a.n(s),c=a(156),l=a.n(c),d=a(143),h=(a(167),function(e){var t=e.children;return r.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Prata",rel:"stylesheet"})),r.a.createElement("div",null,t))},data:i})});h.propTypes={children:o.a.node.isRequired},t.a=h},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(140),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(145),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var h=a(45);a.d(t,"parsePath",function(){return h.a});var u=n.a.createContext({}),m=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},145:function(e,t,a){var i;e.exports=(i=a(166))&&i.default||i},146:function(e,t,a){"use strict";a(169),a(92),a(36);var i,n,r,s,o,c,l=a(7),d=a.n(l),h=(a(174),a(176),a(0)),u=a.n(h),m=(a(143),a(141),a(154),a(153)),f=a(217),p=0,g=4,_=0,v=0,b=function(){return Math.floor(16777215*Math.random()).toString(16)},w=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).changeColor=function(){c.goWild=!0,setTimeout(function(){s.color.setHex("0x"+b()),r.color.setHex("0x"+b())},300),setTimeout(function(){c.goWild=!1},600)},t.start=function(){t.frameId||void 0!==typeof window&&(t.frameId=requestAnimationFrame(t.animate))},t.stop=function(){cancelAnimationFrame(t.frameId)},t.animate=function(){t.camera.position.x+=.05*(_-t.camera.position.x),t.camera.position.y+=.05*(-v-t.camera.position.y),t.camera.position.x=g*Math.cos(p),t.camera.position.z=g*Math.sin(p),p+=.04,t.camera.lookAt(t.scene.position),t.renderScene(),void 0!==typeof window&&(t.frameId=requestAnimationFrame(t.animate))},t.renderScene=function(){o.render()},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){m.CopyShader={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")},m.DigitalGlitch={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform int byp;","uniform sampler2D tDiffuse;","uniform sampler2D tDisp;","uniform float amount;","uniform float angle;","uniform float seed;","uniform float seed_x;","uniform float seed_y;","uniform float distortion_x;","uniform float distortion_y;","uniform float col_s;","varying vec2 vUv;","float rand(vec2 co){","return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);","}","void main() {","if(byp<1) {","vec2 p = vUv;","float xs = floor(gl_FragCoord.x / 0.5);","float ys = floor(gl_FragCoord.y / 0.5);","vec4 normal = texture2D (tDisp, p*seed*seed);","if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {","if(seed_x>0.){","p.y = 1. - (p.y + distortion_y);","}","else {","p.y = distortion_y;","}","}","if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {","if(seed_y>0.){","p.x=distortion_x;","}","else {","p.x = 1. - (p.x + distortion_x);","}","}","p.x+=normal.x*seed_x*(seed/5.);","p.y+=normal.y*seed_y*(seed/5.);","vec2 offset = amount * vec2( cos(angle), sin(angle));","vec4 cr = texture2D(tDiffuse, p + offset);","vec4 cga = texture2D(tDiffuse, p);","vec4 cb = texture2D(tDiffuse, p - offset);","gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);","vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);","gl_FragColor = gl_FragColor+ snow;","}","else {","gl_FragColor=texture2D (tDiffuse, vUv);","}","}"].join("\n")},m.EffectComposer=function(e,t){if(this.renderer=e,void 0===t){var a={minFilter:m.LinearFilter,magFilter:m.LinearFilter,format:m.RGBAFormat,stencilBuffer:!1},i=e.getDrawingBufferSize();(t=new m.WebGLRenderTarget(i.width,i.height,a)).texture.name="EffectComposer.rt1"}this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.passes=[],void 0===m.CopyShader&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),void 0===m.ShaderPass&&console.error("THREE.EffectComposer relies on THREE.ShaderPass"),this.copyPass=new m.ShaderPass(m.CopyShader)},Object.assign(m.EffectComposer.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e);var t=this.renderer.getDrawingBufferSize();e.setSize(t.width,t.height)},insertPass:function(e,t){this.passes.splice(t,0,e)},render:function(e){var t,a,i=!1,n=this.passes.length;for(a=0;a<n;a++)if(!1!==(t=this.passes[a]).enabled){if(t.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),t.needsSwap){if(i){var r=this.renderer.context;r.stencilFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.stencilFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==m.MaskPass&&(t instanceof m.MaskPass?i=!0:t instanceof m.ClearMaskPass&&(i=!1))}},reset:function(e){if(void 0===e){var t=this.renderer.getDrawingBufferSize();(e=this.renderTarget1.clone()).setSize(t.width,t.height)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this.renderTarget1.setSize(e,t),this.renderTarget2.setSize(e,t);for(var a=0;a<this.passes.length;a++)this.passes[a].setSize(e,t)}}),m.Pass=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1},Object.assign(m.Pass.prototype,{setSize:function(e,t){},render:function(e,t,a,i,n){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),m.RenderPass=function(e,t,a,i,n){m.Pass.call(this),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=i,this.clearAlpha=void 0!==n?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1},m.RenderPass.prototype=Object.assign(Object.create(m.Pass.prototype),{constructor:m.RenderPass,render:function(e,t,a,i,n){var r,s,o=e.autoClear;e.autoClear=!1,this.scene.overrideMaterial=this.overrideMaterial,this.clearColor&&(r=e.getClearColor().getHex(),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.render(this.scene,this.camera,this.renderToScreen?null:a,this.clear),this.clearColor&&e.setClearColor(r,s),this.scene.overrideMaterial=null,e.autoClear=o}}),m.GlitchPass=function(e){m.Pass.call(this),void 0===m.DigitalGlitch&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=m.DigitalGlitch;this.uniforms=m.UniformsUtils.clone(t.uniforms),null==e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new m.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new m.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new m.Scene,this.quad=new m.Mesh(new m.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.goWild=!1,this.curF=0,this.generateTrigger()},m.GlitchPass.prototype=Object.assign(Object.create(m.Pass.prototype),{constructor:m.GlitchPass,render:function(e,t,a,i,n){this.uniforms.tDiffuse.value=a.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=1,!0===this.goWild&&(this.uniforms.byp.value=0,this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=m.Math.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=m.Math.randFloat(0,1),this.uniforms.distortion_y.value=m.Math.randFloat(0,1),this.uniforms.seed_x.value=m.Math.randFloat(-.3,.3),this.uniforms.seed_y.value=m.Math.randFloat(-.3,.3)),this.curF++,this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)},generateTrigger:function(){this.randX=m.Math.randInt(120,240)},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),a=e*e,i=0;i<a;i++){var n=m.Math.randFloat(0,1);t[3*i+0]=n,t[3*i+1]=n,t[3*i+2]=n}var r=new m.DataTexture(t,e,e,m.RGBFormat,m.FloatType);return r.needsUpdate=!0,r}}),m.MaskPass=function(e,t){m.Pass.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1},m.MaskPass.prototype=Object.assign(Object.create(m.Pass.prototype),{constructor:m.MaskPass,render:function(e,t,a,i,n){var r,s,o=e.context,c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0),this.inverse?(r=0,s=1):(r=1,s=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,r,4294967295),c.buffers.stencil.setClear(s),e.render(this.scene,this.camera,a,this.clear),e.render(this.scene,this.camera,t,this.clear),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP)}}),m.ClearMaskPass=function(){m.Pass.call(this),this.needsSwap=!1},m.ClearMaskPass.prototype=Object.create(m.Pass.prototype),Object.assign(m.ClearMaskPass.prototype,{render:function(e,t,a,i,n){e.state.buffers.stencil.setTest(!1)}}),m.ShaderPass=function(e,t){m.Pass.call(this),this.textureID=void 0!==t?t:"tDiffuse",e instanceof m.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=m.UniformsUtils.clone(e.uniforms),this.material=new m.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.camera=new m.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new m.Scene,this.quad=new m.Mesh(new m.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad)},m.ShaderPass.prototype=Object.assign(Object.create(m.Pass.prototype),{constructor:m.ShaderPass,render:function(e,t,a,i,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)}}),i=window.innerWidth/2,n=window.innerHeight/2;var e=this,t=this.mount.clientWidth,a=this.mount.clientHeight;this.scene=new m.Scene,this.camera=new m.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.3,40),this.camera.position.set(0,1,3),r=new m.AmbientLight(4210752,15),this.scene.add(r),(s=new m.SpotLight(4210752,50)).position.set(-1,3,4),s.castShadow=!0,s.shadow.mapSize.width=5,s.shadow.mapSize.height=5,s.shadow.camera.near=.1,s.shadow.camera.far=2e3,s.shadow.camera.fov=45,this.scene.add(s),(new m.LoadingManager).onProgress=function(e,t,a){console.log(e,t,a)};document.addEventListener("mousemove",function(e){_=(e.clientX-i)/2,v=(e.clientY-n)/2},!1),window.addEventListener("resize",function(){i=window.innerWidth/2,n=window.innerHeight/2,e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.renderer.setSize(window.innerWidth,window.innerHeight)},!1);var l=new f.MTLLoader,d=new f.OBJLoader;l.load("./models/weight.mtl",function(t){t.preload(),d.setMaterials(t),d.load("./models/weight.obj",function(t){t.castShadow=!0,t.reciveShadow=!0,t.position.y=-.5,t.scale.set(.4,.4,.4),e.scene.add(t),document.getElementById("AW__index__weight__Loader").classList.add("AW__index__weight__Loader__fade"),setTimeout(function(){var e=document.getElementById("AW__index__weight__Loader");e.parentNode.removeChild(e)},300)})}),this.renderer=new m.WebGLRenderer({alpha:!0}),this.renderer.setClearColor("#000000",0),this.renderer.setSize(t,a),this.mount.appendChild(this.renderer.domElement),(o=new m.EffectComposer(this.renderer)).addPass(new m.RenderPass(this.scene,this.camera)),(c=new m.GlitchPass).renderToScreen=!0,o.addPass(c),this.start()},a.componentWillUnmount=function(){this.stop(),this.mount.removeChild(this.renderer.domElement)},a.render=function(){var e,t,a=this;return void 0!==typeof window&&(e=this.props.pdp?window.innerWidth<992?50:90:0,t=window.innerWidth-e,window.innerHeight),u.a.createElement("div",{onClick:this.changeColor},u.a.createElement("div",{id:"AW__index__weight__Loader",className:"AW__index__weight__Loader"}),u.a.createElement("div",{className:"AW__index__weight_background"}),u.a.createElement("div",{onClick:this.changeColor,style:{width:t,height:window.innerHeight,marginLeft:e,position:"fixed","z-index":"-1"},ref:function(e){a.mount=e}}))},t}(h.Component);t.a=w},154:function(e,t,a){"use strict";a(152);var i=a(7),n=a.n(i),r=a(48),s=a.n(r),o=a(0),c=a.n(o),l=(a(90),a(91),a(178)),d=a.n(l),h=a(179),u=a.n(h),m=a(180),f=a.n(m),p=a(181),g=a.n(p),_=a(182),v=a.n(_),b=(a(183),a(185),function(e){function t(t){return e.call(this,t)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){setTimeout(function(){!function(e){function t(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function a(e,a){this.DOM={},this.DOM.el=e,this.options=t({},this.options),t(this.options,a),this._init()}a.prototype.options={movement:{imgWrapper:{translation:{x:0,y:0,z:0},rotation:{x:-5,y:5,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}},lines:{translation:{x:10,y:10,z:[0,10]},reverseAnimation:{duration:1e3,easing:"easeOutExpo",elasticity:600}},caption:{translation:{x:20,y:20,z:0},rotation:{x:0,y:0,z:0},reverseAnimation:{duration:1500,easing:"easeOutElastic",elasticity:600}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}}}},a.prototype._init=function(){this.DOM.animatable={},this.DOM.animatable.imgWrapper=this.DOM.el.querySelector(".tilter__figure"),this.DOM.animatable.lines=this.DOM.el.querySelector(".tilter__deco--lines"),this.DOM.animatable.caption=this.DOM.el.querySelector(".tilter__caption"),this.DOM.animatable.overlay=this.DOM.el.querySelector(".tilter__deco--overlay"),this.DOM.animatable.shine=this.DOM.el.querySelector(".tilter__deco--shine > div"),this._initEvents()},a.prototype._initEvents=function(){var e=this;this.mouseenterFn=function(){for(var t in e.DOM.animatable)v.a.remove(e.DOM.animatable[t])},this.mousemoveFn=function(t){requestAnimationFrame(function(){e._layout(t)})},this.mouseleaveFn=function(t){requestAnimationFrame(function(){for(var t in e.DOM.animatable)null!=e.options.movement[t]&&v()({targets:e.DOM.animatable[t],duration:null!=e.options.movement[t].reverseAnimation?e.options.movement[t].reverseAnimation.duration||0:1,easing:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.easing||"linear",elasticity:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.elasticity||null,scaleX:1,scaleY:1,scaleZ:1,translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0})})},this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn),this.DOM.el.addEventListener("mouseenter",this.mouseenterFn)},a.prototype._layout=function(t){var a=function(t){var a=0,i=0;t||(t=e.event);return t.pageX||t.pageY?(a=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(a=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:a,y:i}}(t),i=document.body.scrollLeft+document.documentElement.scrollLeft,n=document.body.scrollTop+document.documentElement.scrollTop,r=this.DOM.el.getBoundingClientRect(),s=a.x-r.left-i,o=a.y-r.top-n;for(var c in this.DOM.animatable)if(null!=this.DOM.animatable[c]&&null!=this.options.movement[c]){var l=null!=this.options.movement[c]&&this.options.movement[c].translation||{x:0,y:0,z:0},d=null!=this.options.movement[c]&&this.options.movement[c].rotation||{x:0,y:0,z:0},h=function(e){for(var t in e)null==e[t]?e[t]=[0,0]:"number"==typeof e[t]&&(e[t]=[-1*e[t],e[t]])};h(l),h(d);var u={translation:{x:(l.x[1]-l.x[0])/r.width*s+l.x[0],y:(l.y[1]-l.y[0])/r.height*o+l.y[0],z:(l.z[1]-l.z[0])/r.height*o+l.z[0]},rotation:{x:(d.x[1]-d.x[0])/r.height*o+d.x[0],y:(d.y[1]-d.y[0])/r.width*s+d.y[0],z:(d.z[1]-d.z[0])/r.width*s+d.z[0]}};this.DOM.animatable[c].style.WebkitTransform=this.DOM.animatable[c].style.transform="translateX("+u.translation.x+"px) translateY("+u.translation.y+"px) translateZ("+u.translation.z+"px) rotateX("+u.rotation.x+"deg) rotateY("+u.rotation.y+"deg) rotateZ("+u.rotation.z+"deg)"}},e.TiltFx=a}(window),function(){var e,t=[{},{}];e=0,[].slice.call(document.querySelectorAll("a.tilter")).forEach(function(a,i){e=i%2==0?e+1:e,new window.TiltFx(a,t[e-1])});var a=document.querySelector(".pater"),i=a.querySelector(".pater__svg"),n=i.querySelector("path"),r={default:n.getAttribute("d"),active:i.getAttribute("data-path-hover")};a.addEventListener("mouseenter",function(){v.a.remove(n),v()({targets:n,d:r.active,duration:400,easing:"easeOutQuad"})}),a.addEventListener("mouseleave",function(){v.a.remove(n),v()({targets:n,d:r.default,duration:400,easing:"easeOutExpo"})})}()},3e3)},a.render=function(){var e=this.props.click;return c.a.createElement("div",{className:"grid grid--effect-rigel AW__projects"},c.a.createElement("a",{className:"grid__item grid__item--c1 AW__projects__thumb tilter tilter--2",onClick:function(){return e("creativeCalculator")}},c.a.createElement("figure",{class:"tilter__figure"},c.a.createElement("img",{className:"tilter__image",src:f.a,alt:"Creative Calculator"}),c.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},c.a.createElement("div",null,c.a.createElement("div",{class:"glitch glitch1"},c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),c.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),c.a.createElement("figcaption",{class:"tilter__caption"},c.a.createElement("h3",{className:"grid__item-title content__text"},"Creative Calculator"),c.a.createElement("p",{className:"content__text1"},"Site that helps judge creative for perfomance"),c.a.createElement("span",{className:"content__text2"},"view more")))),c.a.createElement("a",{className:"grid__item grid__item--c2 AW__projects__thumb tilter tilter--2",onClick:function(){return e("endClothing")}},c.a.createElement("figure",{class:"tilter__figure"},c.a.createElement("img",{className:"tilter__image",src:u.a,alt:"End Clothing"}),c.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},c.a.createElement("div",null,c.a.createElement("div",{class:"glitch glitch2"},c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),c.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),c.a.createElement("figcaption",{class:"tilter__caption"},c.a.createElement("h3",{className:"grid__item-title content__text3"},"End Clothing"),c.a.createElement("p",{className:"content__text4"},"Redesign and build of End. site on Magento 2"),c.a.createElement("span",{className:"content__text5"},"view more")))),c.a.createElement("a",{className:"grid__item grid__item--c3 AW__projects__thumb tilter tilter--2",onClick:function(){return e("bannerAds")}},c.a.createElement("figure",{class:"tilter__figure"},c.a.createElement("img",{className:"tilter__image",src:d.a,alt:"Banner Ads"}),c.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},c.a.createElement("div",null,c.a.createElement("div",{class:"glitch glitch3"},c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),c.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),c.a.createElement("figcaption",{class:"tilter__caption"},c.a.createElement("h3",{className:"grid__item-title content__text6"},"Banner Ads"),c.a.createElement("p",{className:"content__text7"},"A selection of banner ads"),c.a.createElement("span",{className:"content__text8"},"view more")))),c.a.createElement("a",{className:"grid__item grid__item--c4 AW__projects__thumb tilter tilter--2",onClick:function(){return e("matchBetting")}},c.a.createElement("figure",{class:"tilter__figure"},c.a.createElement("img",{className:"tilter__image",src:g.a,alt:"Match Betting"}),c.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},c.a.createElement("div",null,c.a.createElement("div",{class:"glitch glitch4"},c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"}),c.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),c.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),c.a.createElement("figcaption",{class:"tilter__caption"},c.a.createElement("h3",{className:"grid__item-title content__text9"},"Match Betting"),c.a.createElement("p",{className:"content__text10"},"A small react app that allows people to match bet"),c.a.createElement("span",{className:"content__text11"},"view more")))))},t}(o.Component)),w=(a(53),a(187),a(88),a(188)),y=a.n(w),x=a(189),E=a.n(x),C=a(190),M=a.n(C),S=a(191),P=a.n(S),D=a(192),j=a.n(D),T=a(193),A=a.n(T),O=a(194),k=a.n(O),F=a(195),L=a.n(F),B=a(196),W=a.n(B),q=a(197),z=a.n(q),N=a(198),R=a.n(N),U=a(199),H=a.n(U),G=a(200),I=a.n(G),X=a(201),Y=a.n(X),Q=a(202),Z=a.n(Q),J=a(203),K=a.n(J),V=a(204),$=a.n(V),ee=a(205),te=a.n(ee),ae=a(206),ie=a.n(ae),ne=a(207),re=a.n(ne),se=a(208),oe=a.n(se),ce=a(209),le=a.n(ce),de=a(210),he=a.n(de),ue=a(211),me=a.n(ue),fe=a(212),pe=a.n(fe),ge=a(213),_e=a.n(ge),ve=a(214),be=a.n(ve),we=a(215),ye=a.n(we),xe=a(216),Ee=a.n(xe),Ce=[{name:"creativeCalculator",title:"Creative Calculator",intro:"I lead this project and created a fully functioning ad calculator. The mission was to collect hundreds of ads and analyse them using a custom grid and my team then processed this data so that it was valid for use in the calculator. This was to enable anyone to drop an ad into the calaculator and it would tell you the best and worst parts and where it could be imroved. This tock months of analising ads and comparing campaingns based on roi and click perfomance and splitting the results across the funnel to provid useful insights. I was responsible for designing the grid and building the calculator.",images:[j.a,A.a,k.a]},{name:"endClothing",title:"End Clothing",intro:'In this project we moved the existing End. Clothing site built on magento 1 on to magento 2. We rebuilt it with a fully responsive and redesigned font-end with progressive web app features along with a seperate styleguide. We customised the saved items for all social sharing and custom wish lists. Along with a custom live chat widget and help desk and custom blocks for reuse through the site. I rebuilt the whole email system for both marketing and transactional with mjml and templated them so that anyone could create emails. There where also two more re-skins as part of this project a seperate site for launching unique items built in angular and a seperate blog built on wordpress. <br> Visit the site <a href="">here</a>',images:[L.a,W.a,z.a,R.a,H.a,I.a,Y.a,Z.a]},{name:"bannerAds",title:"Banner Ads",intro:"I headed up the fashion side of Quantcast's clientle and had the pleaseure of working with some of the most renound retailers in the industry. This is a selection of ads that I designed and built for them. There are a number of different styles of ads from prospecting all the way down the funnel to retargeting. All of the ads are designed for performance and evaluated against uplift on a campaign by campaign level.",images:[K.a,$.a,te.a,ie.a,re.a,oe.a],videos:[le.a,he.a,me.a,pe.a,_e.a,be.a,ye.a,Ee.a]},{name:"matchBetting",title:"Match Betting",intro:"This project started out as a small app for a friend and developed into a fully functioning site that allows people to save and check bets against each other, whilst offering advice based on splitting the bet for lowest posible losses, while targeting high scoring bets. This app was built in react as this allowed me to update the constantly changing data on the fly. This was built as a progressive web app and this all data was stored in cookies meaning the app worked offline.",images:[y.a,E.a,M.a,P.a]},{name:"headless",title:"Headless END.",intro:"This project started out as a small app for a friend and developed into a fully functioning site that allows people to save and check bets against each other, whilst offering advice based on splitting the bet for lowest posible losses, while targeting high scoring bets. This app was built in react as this allowed me to update the constantly changing data on the fly. This was built as a progressive web app and this all data was stored in cookies meaning the app worked offline.",images:[y.a,E.a,M.a,P.a]}],Me=function(e){var t=e.selectedProject,a=Ce.filter(function(e){return e.name===t})[0];return console.log(a),a?c.a.createElement("div",{className:"AW__project AW__project__"+a.name},c.a.createElement("h1",null,a.title),c.a.createElement("p",null,a.intro),a.images.map(function(e,t){return c.a.createElement("img",{src:e,key:t})}),a.videos?a.videos.map(function(e,t){return c.a.createElement("video",{src:e,key:t,width:"300",height:"250",muted:"muted",loop:"loop",autoplay:"autoplay"})}):null):null},Se=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={selectedProject:void 0},a.changeProject=a.changeProject.bind(s()(s()(a))),a}n()(t,e);var a=t.prototype;return a.changeProject=function(e){this.setState({selectedProject:e}),document.getElementsByClassName("AW__projects_controller")[0].scrollTop=0},a.render=function(){return c.a.createElement("div",{className:"AW__projects_controller"},c.a.createElement(Me,{selectedProject:this.state.selectedProject}),c.a.createElement(b,{click:this.changeProject}))},t}(o.Component);t.a=Se},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Austin Weight Portfolio"}}}}},166:function(e,t,a){"use strict";a.r(t);a(36);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(70),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,a){},178:function(e,t,a){e.exports=a.p+"static/ads-f543742713beaf449b23f9d320884e8d.jpg"},179:function(e,t,a){e.exports=a.p+"static/END-089164b46ce9aa13ceaa3f029add321e.jpg"},180:function(e,t,a){e.exports=a.p+"static/adCalculator-6e68614731501d81d41b3f9f2db8de07.jpg"},181:function(e,t,a){e.exports=a.p+"static/matchBetting-4f7ef9f939aae9aca11aee704fda660d.jpg"},183:function(e,t,a){},185:function(e,t,a){},188:function(e,t,a){e.exports=a.p+"static/1-85fb0830fb2fd3cfa45efdd3dd72b733.jpg"},189:function(e,t,a){e.exports=a.p+"static/2-0547451e0c6144033567b04abdf8ca89.jpg"},190:function(e,t,a){e.exports=a.p+"static/3-c43e59db8ce701bb337d7661761b74fa.jpg"},191:function(e,t,a){e.exports=a.p+"static/4-d6e13040631c8cdc799017ba6d0a4722.jpg"},192:function(e,t,a){e.exports=a.p+"static/1-e183d51ff736143747f7015a7bf54da2.jpg"},193:function(e,t,a){e.exports=a.p+"static/2-2e6498c9b715d368ae9e952c46397cf3.jpg"},194:function(e,t,a){e.exports=a.p+"static/3-fe29584e08f5847b6888a4b436404ad4.jpg"},195:function(e,t,a){e.exports=a.p+"static/home-6358a13afd06cfe6285140bbc1c87e0c.png"},196:function(e,t,a){e.exports=a.p+"static/pdp-f09cf611524537fbbea33495aeedf54b.png"},197:function(e,t,a){e.exports=a.p+"static/brands-f97693562ba0a5efebb8b311b5af7a4d.png"},198:function(e,t,a){e.exports=a.p+"static/gifts-0d65d53e3f5a88e3ac7e4400ee2e7ef8.png"},199:function(e,t,a){e.exports=a.p+"static/lancheshome-1da151bc918461a79aa60f274c7f47b5.jpg"},200:function(e,t,a){e.exports=a.p+"static/entrypage-170aa1a1404bc670b2d1968541a64dee.jpg"},201:function(e,t,a){e.exports=a.p+"static/bloghome-065c89d136e1c54bd64359ab857f9b41.jpg"},202:function(e,t,a){e.exports=a.p+"static/blogpostpage-83d759a31892c2d50bb1446fa95825d8.jpg"},203:function(e,t,a){e.exports=a.p+"static/Abercrombi&Fitch-300x250-4655b5a27a4371370081da116048b179.png"},204:function(e,t,a){e.exports=a.p+"static/Matches-Fashion-300x250-867da731fb70ddecc682fb55e1632402.png"},205:function(e,t,a){e.exports=a.p+"static/Missguided2-300x250-0f61d8b31ef076a594bbf1b5fff21965.jpg"},206:function(e,t,a){e.exports=a.p+"static/Toast-300x250-ffb66915facda50a28a21bf92e7a60a5.png"},207:function(e,t,a){e.exports=a.p+"static/ToysRUs-300x250-ca825e742020862156e5eac51df409bc.png"},208:function(e,t,a){e.exports=a.p+"static/300x250-918fdb8bb5fc6a785fb919bd5338e5f1.gif"},209:function(e,t,a){e.exports=a.p+"static/aldo300-b3afa0379fba3dbdedbffec4b3934bbf.mp4"},210:function(e,t,a){e.exports=a.p+"static/feelUnique300-4394c6b03223e6870645451ee16014cc.mp4"},211:function(e,t,a){e.exports=a.p+"static/footAsylum300-5a96d338243d3e4c49858643929d5b94.mp4"},212:function(e,t,a){e.exports=a.p+"static/jimyChoo300-dbeadd7267f331ff04a4db8bb614157a.mp4"},213:function(e,t,a){e.exports=a.p+"static/karewnMillen300-e4f125203bdb5cb33c4a0e61fccbe0f1.mp4"},214:function(e,t,a){e.exports=a.p+"static/roman300-a33e251b6e2d795d0ae268baec764715.mp4"},215:function(e,t,a){e.exports=a.p+"static/warehouse300-2b68c9eab57b379526ef172b70b51263.mp4"},216:function(e,t,a){e.exports=a.p+"static/whistles300-31663892d426f75a73ddb3318851f31f.mp4"}}]);
//# sourceMappingURL=1-6f01ed67651535cd2a87.js.map