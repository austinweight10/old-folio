(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t);a(146);var n,i,r,s,o,l,c=a(7),d=a.n(c),m=a(48),h=a.n(m),u=a(0),f=a.n(u),p=a(141),g=(a(90),a(91),a(168)),_=a.n(g),v=a(169),E=a.n(v),w=a(170),b=a.n(w),y=a(171),x=a.n(y),A=a(172),S=a.n(A),k=(a(173),a(175),function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componetDidMount=function(){setTimeout(function(){!function(e){function t(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function a(e,a){this.DOM={},this.DOM.el=e,this.options=t({},this.options),t(this.options,a),this._init()}a.prototype.options={movement:{imgWrapper:{translation:{x:0,y:0,z:0},rotation:{x:-5,y:5,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}},lines:{translation:{x:10,y:10,z:[0,10]},reverseAnimation:{duration:1e3,easing:"easeOutExpo",elasticity:600}},caption:{translation:{x:20,y:20,z:0},rotation:{x:0,y:0,z:0},reverseAnimation:{duration:1500,easing:"easeOutElastic",elasticity:600}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}}}},a.prototype._init=function(){this.DOM.animatable={},this.DOM.animatable.imgWrapper=this.DOM.el.querySelector(".tilter__figure"),this.DOM.animatable.lines=this.DOM.el.querySelector(".tilter__deco--lines"),this.DOM.animatable.caption=this.DOM.el.querySelector(".tilter__caption"),this.DOM.animatable.overlay=this.DOM.el.querySelector(".tilter__deco--overlay"),this.DOM.animatable.shine=this.DOM.el.querySelector(".tilter__deco--shine > div"),this._initEvents()},a.prototype._initEvents=function(){var e=this;this.mouseenterFn=function(){for(var t in e.DOM.animatable)S.a.remove(e.DOM.animatable[t])},this.mousemoveFn=function(t){requestAnimationFrame(function(){e._layout(t)})},this.mouseleaveFn=function(t){requestAnimationFrame(function(){for(var t in e.DOM.animatable)null!=e.options.movement[t]&&S()({targets:e.DOM.animatable[t],duration:null!=e.options.movement[t].reverseAnimation?e.options.movement[t].reverseAnimation.duration||0:1,easing:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.easing||"linear",elasticity:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.elasticity||null,scaleX:1,scaleY:1,scaleZ:1,translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0})})},this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn),this.DOM.el.addEventListener("mouseenter",this.mouseenterFn)},a.prototype._layout=function(t){var a=function(t){var a=0,n=0;t||(t=e.event);return t.pageX||t.pageY?(a=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(a=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:a,y:n}}(t),n=document.body.scrollLeft+document.documentElement.scrollLeft,i=document.body.scrollTop+document.documentElement.scrollTop,r=this.DOM.el.getBoundingClientRect(),s=a.x-r.left-n,o=a.y-r.top-i;for(var l in this.DOM.animatable)if(null!=this.DOM.animatable[l]&&null!=this.options.movement[l]){var c=null!=this.options.movement[l]&&this.options.movement[l].translation||{x:0,y:0,z:0},d=null!=this.options.movement[l]&&this.options.movement[l].rotation||{x:0,y:0,z:0},m=function(e){for(var t in e)null==e[t]?e[t]=[0,0]:"number"==typeof e[t]&&(e[t]=[-1*e[t],e[t]])};m(c),m(d);var h={translation:{x:(c.x[1]-c.x[0])/r.width*s+c.x[0],y:(c.y[1]-c.y[0])/r.height*o+c.y[0],z:(c.z[1]-c.z[0])/r.height*o+c.z[0]},rotation:{x:(d.x[1]-d.x[0])/r.height*o+d.x[0],y:(d.y[1]-d.y[0])/r.width*s+d.y[0],z:(d.z[1]-d.z[0])/r.width*s+d.z[0]}};this.DOM.animatable[l].style.WebkitTransform=this.DOM.animatable[l].style.transform="translateX("+h.translation.x+"px) translateY("+h.translation.y+"px) translateZ("+h.translation.z+"px) rotateX("+h.rotation.x+"deg) rotateY("+h.rotation.y+"deg) rotateZ("+h.rotation.z+"deg)"}},e.TiltFx=a}(window),function(){var e,t=[{},{}];e=0,[].slice.call(document.querySelectorAll("a.tilter")).forEach(function(a,n){e=n%2==0?e+1:e,new window.TiltFx(a,t[e-1])});var a=document.querySelector(".pater"),n=a.querySelector(".pater__svg"),i=n.querySelector("path"),r={default:i.getAttribute("d"),active:n.getAttribute("data-path-hover")};a.addEventListener("mouseenter",function(){S.a.remove(i),S()({targets:i,d:r.active,duration:400,easing:"easeOutQuad"})}),a.addEventListener("mouseleave",function(){S.a.remove(i),S()({targets:i,d:r.default,duration:400,easing:"easeOutExpo"})})}()},3e3)},a.render=function(){var e=this.props;return f.a.createElement("div",{className:"grid grid--effect-rigel AW__projects"},f.a.createElement("a",{className:"grid__item grid__item--c1 AW__projects__thumb",onClick:function(t){return e("creativeCalculator")}},f.a.createElement("a",{href:"#",class:"tilter tilter--2"},f.a.createElement("figure",{class:"tilter__figure"},f.a.createElement("img",{className:"tilter__image",src:b.a,alt:"Creative Calculator"}),f.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},f.a.createElement("div",null,f.a.createElement("div",{class:"glitch glitch1"},f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),f.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),f.a.createElement("figcaption",{class:"tilter__caption"},f.a.createElement("h3",{className:"grid__item-title content__text"},"Creative Calculator"),f.a.createElement("p",{className:"content__text1"},"Site that helps judge creative for perfomance"),f.a.createElement("span",{className:"content__text2"},"view more"))))),f.a.createElement("a",{className:"grid__item grid__item--c2 AW__projects__thumb",onClick:function(t){return e("endClothing")}},f.a.createElement("a",{href:"#",class:"tilter tilter--2"},f.a.createElement("figure",{class:"tilter__figure"},f.a.createElement("img",{className:"tilter__image",src:E.a,alt:"End Clothing"}),f.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},f.a.createElement("div",null,f.a.createElement("div",{class:"glitch glitch2"},f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),f.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),f.a.createElement("figcaption",{class:"tilter__caption"},f.a.createElement("h3",{className:"grid__item-title content__text3"},"End Clothing"),f.a.createElement("p",{className:"content__text4"},"Redesign and build of End. site on Magento 2"),f.a.createElement("span",{className:"content__text5"},"view more"))))),f.a.createElement("a",{className:"grid__item grid__item--c3 AW__projects__thumb",onClick:function(t){return e("bannerAds")}},f.a.createElement("a",{href:"#",class:"tilter tilter--2"},f.a.createElement("figure",{class:"tilter__figure"},f.a.createElement("img",{className:"tilter__image",src:_.a,alt:"Banner Ads"}),f.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},f.a.createElement("div",null,f.a.createElement("div",{class:"glitch glitch3"},f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),f.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),f.a.createElement("figcaption",{class:"tilter__caption"},f.a.createElement("h3",{className:"grid__item-title content__text6"},"Banner Ads"),f.a.createElement("p",{className:"content__text7"},"A selection of banner ads"),f.a.createElement("span",{className:"content__text8"},"view more"))))),f.a.createElement("a",{className:"grid__item grid__item--c4 AW__projects__thumb",onClick:function(t){return e("matchBetting")}},f.a.createElement("a",{href:"#",class:"tilter tilter--2"},f.a.createElement("figure",{class:"tilter__figure"},f.a.createElement("img",{className:"tilter__image",src:x.a,alt:"Match Betting"}),f.a.createElement("div",{class:"tilter__deco tilter__deco--shine"},f.a.createElement("div",null,f.a.createElement("div",{class:"glitch glitch4"},f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"}),f.a.createElement("div",{class:"glitch__img glitch__img_trans"})))),f.a.createElement("div",{class:"tilter__deco tilter__deco--overlay"}),f.a.createElement("figcaption",{class:"tilter__caption"},f.a.createElement("h3",{className:"grid__item-title content__text9"},"Match Betting"),f.a.createElement("p",{className:"content__text10"},"A small react app that allows people to match bet"),f.a.createElement("span",{className:"content__text11"},"view more"))))))},t}(u.Component)),M=(a(53),a(177),a(88),a(178)),C=a.n(M),T=a(179),D=a.n(T),P=a(180),j=a.n(P),I=a(181),N=a.n(I),O=a(182),W=a.n(O),L=a(183),F=a.n(L),B=a(184),R=a.n(B),G=a(185),z=a.n(G),U=a(186),H=a.n(U),q=a(187),Y=a.n(q),X=a(188),V=a.n(X),J=a(189),K=a.n(J),Q=a(190),Z=a.n(Q),$=a(191),ee=a.n($),te=a(192),ae=a.n(te),ne=a(193),ie=a.n(ne),re=a(194),se=a.n(re),oe=a(195),le=a.n(oe),ce=a(196),de=a.n(ce),me=a(197),he=a.n(me),ue=a(198),fe=a.n(ue),pe=a(199),ge=a.n(pe),_e=a(200),ve=a.n(_e),Ee=a(201),we=a.n(Ee),be=a(202),ye=a.n(be),xe=a(203),Ae=a.n(xe),Se=a(204),ke=a.n(Se),Me=a(205),Ce=a.n(Me),Te=a(206),De=a.n(Te),Pe=[{name:"creativeCalculator",title:"Creative Calculator",intro:"I lead this project and created a fully functioning ad calculator. The mission was to collect hundreds of ads and analyse them using a custom grid and my team then processed this data so that it was valid for use in the calculator. This was to enable anyone to drop an ad into the calaculator and it would tell you the best and worst parts and where it could be imroved. This tock months of analising ads and comparing campaingns based on roi and click perfomance and splitting the results across the funnel to provid useful insights. I was responsible for designing the grid and building the calculator.",images:[W.a,F.a,R.a]},{name:"endClothing",title:"End Clothing",intro:'In this project we moved the existing End. Clothing site built on magento 1 on to magento 2. We rebuilt it with a fully responsive and redesigned font-end with progressive web app features along with a seperate styleguide. We customised the saved items for all social sharing and custom wish lists. Along with a custom live chat widget and help desk and custom blocks for reuse through the site. I rebuilt the whole email system for both marketing and transactional with mjml and templated them so that anyone could create emails. There where also two more re-skins as part of this project a seperate site for launching unique items built in angular and a seperate blog built on wordpress. <br> Visit the site <a href="">here</a>',images:[z.a,H.a,Y.a,V.a,K.a,Z.a,ee.a,ae.a]},{name:"bannerAds",title:"Banner Ads",intro:"I headed up the fashion side of Quantcast's clientle and had the pleaseure of working with some of the most renound retailers in the industry. This is a selection of ads that I designed and built for them. There are a number of different styles of ads from prospecting all the way down the funnel to retargeting. All of the ads are designed for performance and evaluated against uplift on a campaign by campaign level.",images:[ie.a,se.a,le.a,de.a,he.a,fe.a],videos:[ge.a,ve.a,we.a,ye.a,Ae.a,ke.a,Ce.a,De.a]},{name:"matchBetting",title:"Match Betting",intro:"This project started out as a small app for a friend and developed into a fully functioning site that allows people to save and check bets against each other, whilst offering advice based on splitting the bet for lowest posible losses, while targeting high scoring bets. This app was built in react as this allowed me to update the constantly changing data on the fly. This was built as a progressive web app and this all data was stored in cookies meaning the app worked offline.",images:[C.a,D.a,j.a,N.a]},{name:"headless",title:"Headless END.",intro:"This project started out as a small app for a friend and developed into a fully functioning site that allows people to save and check bets against each other, whilst offering advice based on splitting the bet for lowest posible losses, while targeting high scoring bets. This app was built in react as this allowed me to update the constantly changing data on the fly. This was built as a progressive web app and this all data was stored in cookies meaning the app worked offline.",images:[C.a,D.a,j.a,N.a]}],je=function(e){var t=e.selectedProject,a=Pe.filter(function(e){return e.name===t})[0];return a?f.a.createElement("div",{className:"AW__project AW__project__"+a.name},f.a.createElement("h1",null,a.title),f.a.createElement("p",null,a.intro),a.images.map(function(e,t){return f.a.createElement("img",{src:e,key:t})}),a.videos?a.videos.map(function(e,t){return f.a.createElement("video",{src:e,key:t,width:"300",height:"250",muted:"muted",loop:"loop",autoplay:"autoplay"})}):null):null},Ie=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={selectedProject:void 0},a.changeProject=a.changeProject.bind(h()(h()(a))),a}d()(t,e);var a=t.prototype;return a.changeProject=function(e){this.setState({selectedProject:e}),document.getElementsByClassName("AW__projects_controller")[0].scrollTop=0},a.render=function(){return f.a.createElement("div",{className:"AW__projects_controller"},f.a.createElement(je,{selectedProject:this.state.selectedProject}),f.a.createElement(k,{click:this.changeProject}))},t}(u.Component),Ne=(a(207),a(92),a(36),a(212),a(214),a(143),a(152)),Oe=a(215),We=0,Le=4,Fe=0,Be=0,Re=function(){return Math.floor(16777215*Math.random()).toString(16)},Ge=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).changeColor=function(){l.goWild=!0,setTimeout(function(){s.color.setHex("0x"+Re()),r.color.setHex("0x"+Re())},300),setTimeout(function(){l.goWild=!1},600)},t.animate=function(){t.camera.position.x+=.05*(Fe-t.camera.position.x),t.camera.position.y+=.05*(-Be-t.camera.position.y),t.camera.position.x=Le*Math.cos(We),t.camera.position.z=Le*Math.sin(We),We+=.04,t.camera.lookAt(t.scene.position),t.renderScene(),t.frameId=requestAnimationFrame(t.animate)},t.renderScene=function(){o.render()},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;Ne.CopyShader={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")},Ne.DigitalGlitch={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform int byp;","uniform sampler2D tDiffuse;","uniform sampler2D tDisp;","uniform float amount;","uniform float angle;","uniform float seed;","uniform float seed_x;","uniform float seed_y;","uniform float distortion_x;","uniform float distortion_y;","uniform float col_s;","varying vec2 vUv;","float rand(vec2 co){","return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);","}","void main() {","if(byp<1) {","vec2 p = vUv;","float xs = floor(gl_FragCoord.x / 0.5);","float ys = floor(gl_FragCoord.y / 0.5);","vec4 normal = texture2D (tDisp, p*seed*seed);","if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {","if(seed_x>0.){","p.y = 1. - (p.y + distortion_y);","}","else {","p.y = distortion_y;","}","}","if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {","if(seed_y>0.){","p.x=distortion_x;","}","else {","p.x = 1. - (p.x + distortion_x);","}","}","p.x+=normal.x*seed_x*(seed/5.);","p.y+=normal.y*seed_y*(seed/5.);","vec2 offset = amount * vec2( cos(angle), sin(angle));","vec4 cr = texture2D(tDiffuse, p + offset);","vec4 cga = texture2D(tDiffuse, p);","vec4 cb = texture2D(tDiffuse, p - offset);","gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);","vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);","gl_FragColor = gl_FragColor+ snow;","}","else {","gl_FragColor=texture2D (tDiffuse, vUv);","}","}"].join("\n")},Ne.EffectComposer=function(e,t){if(this.renderer=e,void 0===t){var a={minFilter:Ne.LinearFilter,magFilter:Ne.LinearFilter,format:Ne.RGBAFormat,stencilBuffer:!1},n=e.getDrawingBufferSize();(t=new Ne.WebGLRenderTarget(n.width,n.height,a)).texture.name="EffectComposer.rt1"}this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.passes=[],void 0===Ne.CopyShader&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),void 0===Ne.ShaderPass&&console.error("THREE.EffectComposer relies on THREE.ShaderPass"),this.copyPass=new Ne.ShaderPass(Ne.CopyShader)},Object.assign(Ne.EffectComposer.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e);var t=this.renderer.getDrawingBufferSize();e.setSize(t.width,t.height)},insertPass:function(e,t){this.passes.splice(t,0,e)},render:function(e){var t,a,n=!1,i=this.passes.length;for(a=0;a<i;a++)if(!1!==(t=this.passes[a]).enabled){if(t.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),t.needsSwap){if(n){var r=this.renderer.context;r.stencilFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.stencilFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==Ne.MaskPass&&(t instanceof Ne.MaskPass?n=!0:t instanceof Ne.ClearMaskPass&&(n=!1))}},reset:function(e){if(void 0===e){var t=this.renderer.getDrawingBufferSize();(e=this.renderTarget1.clone()).setSize(t.width,t.height)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this.renderTarget1.setSize(e,t),this.renderTarget2.setSize(e,t);for(var a=0;a<this.passes.length;a++)this.passes[a].setSize(e,t)}}),Ne.Pass=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1},Object.assign(Ne.Pass.prototype,{setSize:function(e,t){},render:function(e,t,a,n,i){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),Ne.RenderPass=function(e,t,a,n,i){Ne.Pass.call(this),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=n,this.clearAlpha=void 0!==i?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1},Ne.RenderPass.prototype=Object.assign(Object.create(Ne.Pass.prototype),{constructor:Ne.RenderPass,render:function(e,t,a,n,i){var r,s,o=e.autoClear;e.autoClear=!1,this.scene.overrideMaterial=this.overrideMaterial,this.clearColor&&(r=e.getClearColor().getHex(),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.render(this.scene,this.camera,this.renderToScreen?null:a,this.clear),this.clearColor&&e.setClearColor(r,s),this.scene.overrideMaterial=null,e.autoClear=o}}),Ne.GlitchPass=function(e){Ne.Pass.call(this),void 0===Ne.DigitalGlitch&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=Ne.DigitalGlitch;this.uniforms=Ne.UniformsUtils.clone(t.uniforms),null==e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new Ne.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new Ne.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new Ne.Scene,this.quad=new Ne.Mesh(new Ne.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.goWild=!1,this.curF=0,this.generateTrigger()},Ne.GlitchPass.prototype=Object.assign(Object.create(Ne.Pass.prototype),{constructor:Ne.GlitchPass,render:function(e,t,a,n,i){this.uniforms.tDiffuse.value=a.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=1,!0===this.goWild&&(this.uniforms.byp.value=0,this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=Ne.Math.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=Ne.Math.randFloat(0,1),this.uniforms.distortion_y.value=Ne.Math.randFloat(0,1),this.uniforms.seed_x.value=Ne.Math.randFloat(-.3,.3),this.uniforms.seed_y.value=Ne.Math.randFloat(-.3,.3)),this.curF++,this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)},generateTrigger:function(){this.randX=Ne.Math.randInt(120,240)},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),a=e*e,n=0;n<a;n++){var i=Ne.Math.randFloat(0,1);t[3*n+0]=i,t[3*n+1]=i,t[3*n+2]=i}var r=new Ne.DataTexture(t,e,e,Ne.RGBFormat,Ne.FloatType);return r.needsUpdate=!0,r}}),Ne.MaskPass=function(e,t){Ne.Pass.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1},Ne.MaskPass.prototype=Object.assign(Object.create(Ne.Pass.prototype),{constructor:Ne.MaskPass,render:function(e,t,a,n,i){var r,s,o=e.context,l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0),this.inverse?(r=0,s=1):(r=1,s=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,r,4294967295),l.buffers.stencil.setClear(s),e.render(this.scene,this.camera,a,this.clear),e.render(this.scene,this.camera,t,this.clear),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP)}}),Ne.ClearMaskPass=function(){Ne.Pass.call(this),this.needsSwap=!1},Ne.ClearMaskPass.prototype=Object.create(Ne.Pass.prototype),Object.assign(Ne.ClearMaskPass.prototype,{render:function(e,t,a,n,i){e.state.buffers.stencil.setTest(!1)}}),Ne.ShaderPass=function(e,t){Ne.Pass.call(this),this.textureID=void 0!==t?t:"tDiffuse",e instanceof Ne.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ne.UniformsUtils.clone(e.uniforms),this.material=new Ne.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.camera=new Ne.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new Ne.Scene,this.quad=new Ne.Mesh(new Ne.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad)},Ne.ShaderPass.prototype=Object.assign(Object.create(Ne.Pass.prototype),{constructor:Ne.ShaderPass,render:function(e,t,a,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)}}),n=window.innerWidth/2,i=window.innerHeight/2;var t=this,a=this.mount.clientWidth,c=this.mount.clientHeight;this.scene=new Ne.Scene,this.camera=new Ne.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.3,40),this.camera.position.set(0,1,3),r=new Ne.AmbientLight(4210752,15),this.scene.add(r),(s=new Ne.SpotLight(4210752,50)).position.set(-1,3,4),s.castShadow=!0,s.shadow.mapSize.width=5,s.shadow.mapSize.height=5,s.shadow.camera.near=.1,s.shadow.camera.far=2e3,s.shadow.camera.fov=45,this.scene.add(s),(new Ne.LoadingManager).onProgress=function(e,t,a){console.log(e,t,a)};document.addEventListener("mousemove",function(e){Fe=(e.clientX-n)/2,Be=(e.clientY-i)/2},!1),window.addEventListener("resize",function(){n=window.innerWidth/2,i=window.innerHeight/2,t.camera.aspect=window.innerWidth/window.innerHeight,t.camera.updateProjectionMatrix(),t.renderer.setSize(window.innerWidth,window.innerHeight)},!1);var d=new Oe.MTLLoader,m=new Oe.OBJLoader;d.load("./models/weight.mtl",function(e){e.preload(),m.setMaterials(e),m.load("./models/weight.obj",function(e){e.castShadow=!0,e.reciveShadow=!0,e.position.y=-.5,e.scale.set(.4,.4,.4),t.scene.add(e),document.getElementById("AW__index__weight__Loader").classList.add("AW__index__weight__Loader__fade"),setTimeout(function(){var e=document.getElementById("AW__index__weight__Loader");e.parentNode.removeChild(e)},300)})}),this.renderer=new Ne.WebGLRenderer({alpha:!0}),this.renderer.setClearColor("#000000",0),this.renderer.setSize(a,c),this.mount.appendChild(this.renderer.domElement),(o=new Ne.EffectComposer(this.renderer)).addPass(new Ne.RenderPass(this.scene,this.camera)),(l=new Ne.GlitchPass).renderToScreen=!0,o.addPass(l),e.frameId||(e.frameId=requestAnimationFrame(e.animate))},a.componentWillUnmount=function(){this.mount.removeChild(this.renderer.domElement)},a.render=function(){var e=this,t=0;"undefined"!=typeof window&&(t=this.props.pdp?window.innerWidth<992?50:90:0);var a=window.innerWidth-t;return f.a.createElement("div",{onClick:this.changeColor},f.a.createElement("div",{id:"AW__index__weight__Loader",className:"AW__index__weight__Loader"}),f.a.createElement("div",{className:"AW__index__weight_background"}),f.a.createElement("div",{onClick:this.changeColor,style:{width:a,height:window.innerHeight,marginLeft:t,position:"fixed","z-index":"-1"},ref:function(t){e.mount=t}}))},t}(u.Component),ze=function(e){e.children,e.click,e.showWork;return f.a.createElement("div",{className:"AW__index__logo"},f.a.createElement("span",{className:"AW__index__logo_inner"},f.a.createElement("div",{className:"AW__index__logo_glitch_contain"},f.a.createElement("div",{class:"glitch"},f.a.createElement("div",{class:"glitch__img"}),f.a.createElement("div",{class:"glitch__img"}),f.a.createElement("div",{class:"glitch__img"}),f.a.createElement("div",{class:"glitch__img"}),f.a.createElement("div",{class:"glitch__img"})))))},Ue=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={classNames:!1},a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;setTimeout(function(){return e.setState({classNames:!0})},0)},a.render=function(){return f.a.createElement("div",{onClick:this.props.click,className:"AW__index__overlay "+(this.state.classNames?"AW__index__overlay__open":"")})},t}(u.Component),He=function(e){var t=e.children,a=e.click,n=e.showWork;return f.a.createElement("div",{className:"AW__index"+(n?" AW__index__open":"")},n?f.a.createElement(Ue,{click:a}):null,f.a.createElement(ze,null),t)},qe=a(216),Ye=(a(218),a(220)),Xe=a.n(Ye),Ve=function(e){e.click;return f.a.createElement("div",{className:"AW__projects_bio"},f.a.createElement("div",{className:"AW__projects_bio__inner"},f.a.createElement("span",null,"About"),f.a.createElement("h2",null,"Hi there, I am Austin Weight."),f.a.createElement("h2",null,"I live in Milton Keynes and work in London. I am a developer/designer and currently senior frontend developer at"," ",f.a.createElement("a",{href:"https://endclothing.com",target:"_blank",className:"AW__projects_bio__inner__text__link"},"END.")),f.a.createElement("h2",null,"In my student days studing graphic design at UCA I knew my interests lied in the web. Emergent behaviours and designing for complexity struck a life long love and appreciation for networks and development."),f.a.createElement("span",null,"Skills"),f.a.createElement("h2",null,"As a little boy, my favourite thing in the world was Lego. I loved how I could create new worlds brick by brick and it sparked a life-long love of design. Now fully-fledged and grown-up, I have found an industry that requires the same skills. Fitting together lots of smaller blocks whether this be building components in React or using functional programming to create something bigger and more wonderful."),f.a.createElement("h2",null,"As a developer, I have enjoyed working on projects from building both client and server-side with Node and React, custom JavaScript sites that analyse images to working on WordPress, Magneto 1 and 2 with experience in php and JavaScript. I have worked on 3D projects with three.js along with AI using tensor flow for classifying images and building forecasts for trends."),f.a.createElement("h2",null,"I have experience working in advertising on campaigns from prospecting to remarketing. My passion lies within performance driven design that is user tested. I enjoy analysis as I feel this is key to ensure statistically proven ideas are used to engage and advance business developments and break down concepts so they can be reused. In the design world, I find myself gravitating towards UX and how concepts can really influence customers."),f.a.createElement(qe.Accordion,null,f.a.createElement(qe.AccordionItem,{expanded:!0},f.a.createElement(qe.AccordionItemTitle,null,f.a.createElement("h3",null,"skills")),f.a.createElement(qe.AccordionItemBody,null,f.a.createElement("div",{className:"AW__projects_bio__inner__text"},f.a.createElement("h2",null,"Developer"),f.a.createElement("span",null,"JAVASCRIPT"),f.a.createElement("span",null,"REACT"),f.a.createElement("span",null,"REDUX"),f.a.createElement("span",null,"JQUERY"),f.a.createElement("span",null,"KNOCKOUT"),f.a.createElement("span",null,"GULP"),f.a.createElement("span",null,"GRUNT"),f.a.createElement("span",null,"NPM"),f.a.createElement("span",null,"YARN"),f.a.createElement("span",null,"NODE"),f.a.createElement("span",null,"EXPRESS"),f.a.createElement("span",null,"ES6"),f.a.createElement("span",null,"CSS"),f.a.createElement("span",null,"SASS"),f.a.createElement("span",null,"LESS"),f.a.createElement("span",null,"PHP"),f.a.createElement("span",null,"HTML5"),f.a.createElement("span",null,"HTML EMAIL"),f.a.createElement("span",null,"MJML"),f.a.createElement("span",null,"DOCKER"),f.a.createElement("span",null,"MAMP"),f.a.createElement("span",null,"GIT"),f.a.createElement("span",null,"GTM"),f.a.createElement("span",null,"BITBUCKET"),f.a.createElement("span",null,"WORDPRESSS"),f.a.createElement("span",null,"MAGENTO"),f.a.createElement("span",null,"MAGENTO 2"),f.a.createElement("span",null,"SHELL SCRIPTING"),f.a.createElement("span",null,"TESTING"),f.a.createElement("span",null,"TDD"),f.a.createElement("h2",null,"Designer"),f.a.createElement("span",null,"IDEA GENERATION"),f.a.createElement("span",null,"GRAPHIC DESIGN"),f.a.createElement("span",null,"ADVERTISING"),f.a.createElement("span",null,"WEB DESIGN"),f.a.createElement("span",null,"WIREFRAMING"),f.a.createElement("span",null,"ILLUSTRATION"),f.a.createElement("span",null,"DIGITAL & ANALOG PHOTOGRAPHY"),f.a.createElement("span",null,"TYPOGRAPHY"),f.a.createElement("span",null,"PRINT DESIGN"),f.a.createElement("span",null,"UI DESIGN"),f.a.createElement("span",null,"PAGE LAYOUT"),f.a.createElement("span",null,"INVISION"),f.a.createElement("span",null,"ADOBE SUITE"),f.a.createElement("span",null,"ADOBE INDESIGN"),f.a.createElement("span",null,"ADOBE ILLUSTRATOR"),f.a.createElement("span",null,"ADOBE PHOTOSHOP"))))),f.a.createElement("h2",null,"It wouldn't be a protfolio if there wasn't any shameless name dropping so here are a couple of companys I have been lucky enough to do work for"),f.a.createElement(qe.Accordion,null,f.a.createElement(qe.AccordionItem,{expanded:!0},f.a.createElement(qe.AccordionItemTitle,null,f.a.createElement("h3",null,"clientele")),f.a.createElement(qe.AccordionItemBody,null,f.a.createElement("div",{className:"AW__projects_bio__inner__text"},f.a.createElement("a",{href:"https://www.abercrombie.co.uk/"},"Abercrombie And Fitch"),f.a.createElement("a",{href:"https://ao.com/"},"AO.com"),f.a.createElement("a",{href:"https://www.autotrader.co.uk/"},"Auto Trader"),f.a.createElement("a",{href:"https://endclothing.com/"},"END."),f.a.createElement("a",{href:"https://www.feelunique.com/"},"FeelUnique"),f.a.createElement("a",{href:"https://www.footasylum.com/"},"Footasylum"),f.a.createElement("a",{href:"https://www.jigsaw-online.com/"},"Jigsaw"),f.a.createElement("a",{href:"https://www.jimmychoo.com/"},"Jimmy Choo"),f.a.createElement("a",{href:"https://www.karenmillen.com/"},"Karen Millen"),f.a.createElement("a",{href:"https://www.matchesfashion.com/"},"Matchesfashion"),f.a.createElement("a",{href:"https://www.missguided.co.uk/"},"Missguided"),f.a.createElement("a",{href:"https://uk.monsoon.co.uk/"},"Monsoon"),f.a.createElement("a",{href:"https://www.moo.com/"},"Moo"),f.a.createElement("a",{href:"https://www.whistles.com/"},"Whistles"))))),f.a.createElement("h2",null,"You can contact me via email at"," ",f.a.createElement("a",{href:"mailto:example@email.com",className:"AW__projects_bio__inner__text__link"},"austinweight10@gmail.com")," ","or on"," ",f.a.createElement("a",{href:"https://www.linkedin.com/in/austin-weight-bb371983",target:"_blank",className:"AW__projects_bio__inner__text__link"},"linked in")," ","or you can download my cv"," ",f.a.createElement("a",{href:Xe.a,target:"_blank",className:"AW__projects_bio__inner__text__link"},"here"))))},Je=function(e){var t=e.click;return f.a.createElement("div",{onClick:t,className:"AW__projects_work"},f.a.createElement("a",null,"Work"))},Ke=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={workInView:!1},a.showWork=a.showWork.bind(h()(h()(a))),a}d()(t,e);var a=t.prototype;return a.showWork=function(){this.setState({workInView:!this.state.workInView})},a.render=function(){return f.a.createElement(p.a,null,f.a.createElement(Ie,null),f.a.createElement(He,{click:this.showWork,showWork:this.state.workInView},f.a.createElement(Ge,{pdp:!0}),f.a.createElement(Je,{click:this.showWork}),f.a.createElement(Ve,null)))},t}(u.Component);t.default=Ke},168:function(e,t,a){e.exports=a.p+"static/ads-f543742713beaf449b23f9d320884e8d.jpg"},169:function(e,t,a){e.exports=a.p+"static/END-089164b46ce9aa13ceaa3f029add321e.jpg"},170:function(e,t,a){e.exports=a.p+"static/adCalculator-6e68614731501d81d41b3f9f2db8de07.jpg"},171:function(e,t,a){e.exports=a.p+"static/matchBetting-4f7ef9f939aae9aca11aee704fda660d.jpg"},173:function(e,t,a){},175:function(e,t,a){},178:function(e,t,a){e.exports=a.p+"static/1-85fb0830fb2fd3cfa45efdd3dd72b733.jpg"},179:function(e,t,a){e.exports=a.p+"static/2-0547451e0c6144033567b04abdf8ca89.jpg"},180:function(e,t,a){e.exports=a.p+"static/3-c43e59db8ce701bb337d7661761b74fa.jpg"},181:function(e,t,a){e.exports=a.p+"static/4-d6e13040631c8cdc799017ba6d0a4722.jpg"},182:function(e,t,a){e.exports=a.p+"static/1-e183d51ff736143747f7015a7bf54da2.jpg"},183:function(e,t,a){e.exports=a.p+"static/2-2e6498c9b715d368ae9e952c46397cf3.jpg"},184:function(e,t,a){e.exports=a.p+"static/3-fe29584e08f5847b6888a4b436404ad4.jpg"},185:function(e,t,a){e.exports=a.p+"static/home-6358a13afd06cfe6285140bbc1c87e0c.png"},186:function(e,t,a){e.exports=a.p+"static/pdp-f09cf611524537fbbea33495aeedf54b.png"},187:function(e,t,a){e.exports=a.p+"static/brands-f97693562ba0a5efebb8b311b5af7a4d.png"},188:function(e,t,a){e.exports=a.p+"static/gifts-0d65d53e3f5a88e3ac7e4400ee2e7ef8.png"},189:function(e,t,a){e.exports=a.p+"static/lancheshome-1da151bc918461a79aa60f274c7f47b5.jpg"},190:function(e,t,a){e.exports=a.p+"static/entrypage-170aa1a1404bc670b2d1968541a64dee.jpg"},191:function(e,t,a){e.exports=a.p+"static/bloghome-065c89d136e1c54bd64359ab857f9b41.jpg"},192:function(e,t,a){e.exports=a.p+"static/blogpostpage-83d759a31892c2d50bb1446fa95825d8.jpg"},193:function(e,t,a){e.exports=a.p+"static/Abercrombi&Fitch-300x250-4655b5a27a4371370081da116048b179.png"},194:function(e,t,a){e.exports=a.p+"static/Matches-Fashion-300x250-867da731fb70ddecc682fb55e1632402.png"},195:function(e,t,a){e.exports=a.p+"static/Missguided2-300x250-0f61d8b31ef076a594bbf1b5fff21965.jpg"},196:function(e,t,a){e.exports=a.p+"static/Toast-300x250-ffb66915facda50a28a21bf92e7a60a5.png"},197:function(e,t,a){e.exports=a.p+"static/ToysRUs-300x250-ca825e742020862156e5eac51df409bc.png"},198:function(e,t,a){e.exports=a.p+"static/300x250-918fdb8bb5fc6a785fb919bd5338e5f1.gif"},199:function(e,t,a){e.exports=a.p+"static/aldo300-b3afa0379fba3dbdedbffec4b3934bbf.mp4"},200:function(e,t,a){e.exports=a.p+"static/feelUnique300-4394c6b03223e6870645451ee16014cc.mp4"},201:function(e,t,a){e.exports=a.p+"static/footAsylum300-5a96d338243d3e4c49858643929d5b94.mp4"},202:function(e,t,a){e.exports=a.p+"static/jimyChoo300-dbeadd7267f331ff04a4db8bb614157a.mp4"},203:function(e,t,a){e.exports=a.p+"static/karewnMillen300-e4f125203bdb5cb33c4a0e61fccbe0f1.mp4"},204:function(e,t,a){e.exports=a.p+"static/roman300-a33e251b6e2d795d0ae268baec764715.mp4"},205:function(e,t,a){e.exports=a.p+"static/warehouse300-2b68c9eab57b379526ef172b70b51263.mp4"},206:function(e,t,a){e.exports=a.p+"static/whistles300-31663892d426f75a73ddb3318851f31f.mp4"},220:function(e,t,a){e.exports=a.p+"static/Austin-Weight-CV-dd11807dfd576686aa55cd0743254e76.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-79b4b134a361de78dce7.js.map