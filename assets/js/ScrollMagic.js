!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.ScrollMagic=b()}(this,function(){"use strict";var a=function(){e.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};a.version="2.0.5",window.addEventListener("mousewheel",function(){});var b="data-scrollmagic-pin-spacer";a.Controller=function(d){var f,g,h="ScrollMagic.Controller",i="FORWARD",j="REVERSE",k="PAUSED",l=c.defaults,m=this,n=e.extend({},l,d),o=[],p=!1,q=0,r=k,s=!0,t=0,u=!0,v=function(){for(var b in n)l.hasOwnProperty(b)||(E(2,'WARNING: Unknown option "'+b+'"'),delete n[b]);if(n.container=e.get.elements(n.container)[0],!n.container)throw E(1,"ERROR creating object "+h+": No valid scroll container supplied"),h+" init failed.";s=n.container===window||n.container===document.body||!document.body.contains(n.container),s&&(n.container=window),t=y(),n.container.addEventListener("resize",C),n.container.addEventListener("scroll",C),n.refreshInterval=parseInt(n.refreshInterval)||l.refreshInterval,w(),E(3,"added new "+h+" controller (v"+a.version+")")},w=function(){n.refreshInterval>0&&(g=window.setTimeout(D,n.refreshInterval))},x=function(){return n.vertical?e.get.scrollTop(n.container):e.get.scrollLeft(n.container)},y=function(){return n.vertical?e.get.height(n.container):e.get.width(n.container)},z=this._setScrollPos=function(a){n.vertical?s?window.scrollTo(e.get.scrollLeft(),a):n.container.scrollTop=a:s?window.scrollTo(a,e.get.scrollTop()):n.container.scrollLeft=a},A=function(){if(u&&p){var a=e.type.Array(p)?p:o.slice(0);p=!1;var b=q;q=m.scrollPos();var c=q-b;0!==c&&(r=c>0?i:j),r===j&&a.reverse(),a.forEach(function(b,c){E(3,"updating Scene "+(c+1)+"/"+a.length+" ("+o.length+" total)"),b.update(!0)}),0===a.length&&n.loglevel>=3&&E(3,"updating 0 Scenes (nothing added to controller)")}},B=function(){f=e.rAF(A)},C=function(a){E(3,"event fired causing an update:",a.type),"resize"==a.type&&(t=y(),r=k),!0!==p&&(p=!0,B())},D=function(){if(!s&&t!=y()){var a;try{a=new Event("resize",{bubbles:!1,cancelable:!1})}catch(b){a=document.createEvent("Event"),a.initEvent("resize",!1,!1)}n.container.dispatchEvent(a)}o.forEach(function(a,b){a.refresh()}),w()},E=this._log=function(a,b){n.loglevel>=a&&(Array.prototype.splice.call(arguments,1,0,"("+h+") ->"),e.log.apply(window,arguments))};this._options=n;var F=function(a){if(a.length<=1)return a;var b=a.slice(0);return b.sort(function(a,b){return a.scrollOffset()>b.scrollOffset()?1:-1}),b};return this.addScene=function(b){if(e.type.Array(b))b.forEach(function(a,b){m.addScene(a)});else if(b instanceof a.Scene){if(b.controller()!==m)b.addTo(m);else if(o.indexOf(b)<0){o.push(b),o=F(o),b.on("shift.controller_sort",function(){o=F(o)});for(var c in n.globalSceneOptions)b[c]&&b[c].call(b,n.globalSceneOptions[c]);E(3,"adding Scene (now "+o.length+" total)")}}else E(1,"ERROR: invalid argument supplied for '.addScene()'");return m},this.removeScene=function(a){if(e.type.Array(a))a.forEach(function(a,b){m.removeScene(a)});else{var b=o.indexOf(a);b>-1&&(a.off("shift.controller_sort"),o.splice(b,1),E(3,"removing Scene (now "+o.length+" left)"),a.remove())}return m},this.updateScene=function(b,c){return e.type.Array(b)?b.forEach(function(a,b){m.updateScene(a,c)}):c?b.update(!0):!0!==p&&b instanceof a.Scene&&(p=p||[],-1==p.indexOf(b)&&p.push(b),p=F(p),B()),m},this.update=function(a){return C({type:"resize"}),a&&A(),m},this.scrollTo=function(c,d){if(e.type.Number(c))z.call(n.container,c,d);else if(c instanceof a.Scene)c.controller()===m?m.scrollTo(c.scrollOffset(),d):E(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",c);else if(e.type.Function(c))z=c;else{var f=e.get.elements(c)[0];if(f){for(;f.parentNode.hasAttribute(b);)f=f.parentNode;var g=n.vertical?"top":"left",h=e.get.offset(n.container),i=e.get.offset(f);s||(h[g]-=m.scrollPos()),m.scrollTo(i[g]-h[g],d)}else E(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",c)}return m},this.scrollPos=function(a){return arguments.length?(e.type.Function(a)?x=a:E(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),m):x.call(m)},this.info=function(a){var b={size:t,vertical:n.vertical,scrollPos:q,scrollDirection:r,container:n.container,isDocument:s};return arguments.length?void 0!==b[a]?b[a]:void E(1,'ERROR: option "'+a+'" is not available'):b},this.loglevel=function(a){return arguments.length?(n.loglevel!=a&&(n.loglevel=a),m):n.loglevel},this.enabled=function(a){return arguments.length?(u!=a&&(u=!!a,m.updateScene(o,!0)),m):u},this.destroy=function(a){window.clearTimeout(g);for(var b=o.length;b--;)o[b].destroy(a);return n.container.removeEventListener("resize",C),n.container.removeEventListener("scroll",C),e.cAF(f),E(3,"destroyed "+h+" (reset: "+(a?"true":"false")+")"),null},v(),m};var c={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};a.Controller.addOption=function(a,b){c.defaults[a]=b},a.Controller.extend=function(b){var c=this;a.Controller=function(){return c.apply(this,arguments),this.$super=e.extend({},this),b.apply(this,arguments)||this},e.extend(a.Controller,c),a.Controller.prototype=c.prototype,a.Controller.prototype.constructor=a.Controller},a.Scene=function(c){var f,g,h="ScrollMagic.Scene",i="BEFORE",j="DURING",k="AFTER",l=d.defaults,m=this,n=e.extend({},l,c),o=i,p=0,q={start:0,end:0},r=0,s=!0,t=function(){for(var a in n)l.hasOwnProperty(a)||(v(2,'WARNING: Unknown option "'+a+'"'),delete n[a]);for(var b in l)D(b);B()},u={};this.on=function(a,b){return e.type.Function(b)?(a=a.trim().split(" "),a.forEach(function(a){var c=a.split("."),d=c[0],e=c[1];"*"!=d&&(u[d]||(u[d]=[]),u[d].push({namespace:e||"",callback:b}))})):v(1,"ERROR when calling '.on()': Supplied callback for '"+a+"' is not a valid function!"),m},this.off=function(a,b){return a?(a=a.trim().split(" "),a.forEach(function(a,c){var d=a.split("."),e=d[0],f=d[1]||"";("*"===e?Object.keys(u):[e]).forEach(function(a){for(var c=u[a]||[],d=c.length;d--;){var e=c[d];!e||f!==e.namespace&&"*"!==f||b&&b!=e.callback||c.splice(d,1)}c.length||delete u[a]})}),m):(v(1,"ERROR: Invalid event name supplied."),m)},this.trigger=function(b,c){if(b){var d=b.trim().split("."),e=d[0],f=d[1],g=u[e];v(3,"event fired:",e,c?"->":"",c||""),g&&g.forEach(function(b,d){f&&f!==b.namespace||b.callback.call(m,new a.Event(e,b.namespace,m,c))})}else v(1,"ERROR: Invalid event name supplied.");return m},m.on("change.internal",function(a){"loglevel"!==a.what&&"tweenChanges"!==a.what&&("triggerElement"===a.what?y():"reverse"===a.what&&m.update())}).on("shift.internal",function(a){w(),m.update()});var v=this._log=function(a,b){n.loglevel>=a&&(Array.prototype.splice.call(arguments,1,0,"("+h+") ->"),e.log.apply(window,arguments))};this.addTo=function(b){return b instanceof a.Controller?g!=b&&(g&&g.removeScene(m),g=b,B(),x(!0),y(!0),w(),g.info("container").addEventListener("resize",z),b.addScene(m),m.trigger("add",{controller:g}),v(3,"added "+h+" to controller"),m.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),m},this.enabled=function(a){return arguments.length?(s!=a&&(s=!!a,m.update(!0)),m):s},this.remove=function(){if(g){g.info("container").removeEventListener("resize",z);var a=g;g=void 0,a.removeScene(m),m.trigger("remove"),v(3,"removed "+h+" from controller")}return m},this.destroy=function(a){return m.trigger("destroy",{reset:a}),m.remove(),m.off("*.*"),v(3,"destroyed "+h+" (reset: "+(a?"true":"false")+")"),null},this.update=function(a){if(g)if(a)if(g.enabled()&&s){var b,c=g.info("scrollPos");b=n.duration>0?(c-q.start)/(q.end-q.start):c>=q.start?1:0,m.trigger("update",{startPos:q.start,endPos:q.end,scrollPos:c}),m.progress(b)}else E&&o===j&&G(!0);else g.updateScene(m,!1);return m},this.refresh=function(){return x(),y(),m},this.progress=function(a){if(arguments.length){var b=!1,c=o,d=g?g.info("scrollDirection"):"PAUSED",e=n.reverse||a>=p;if(0===n.duration?(b=p!=a,p=a<1&&e?0:1,o=0===p?i:j):a<0&&o!==i&&e?(p=0,o=i,b=!0):a>=0&&a<1&&e?(p=a,o=j,b=!0):a>=1&&o!==k?(p=1,o=k,b=!0):o!==j||e||G(),b){var f={progress:p,state:o,scrollDirection:d},h=o!=c,l=function(a){m.trigger(a,f)};h&&c!==j&&(l("enter"),l(c===i?"start":"end")),l("progress"),h&&o!==j&&(l(o===i?"start":"end"),l("leave"))}return m}return p};var w=function(){q={start:r+n.offset},g&&n.triggerElement&&(q.start-=g.info("size")*n.triggerHook),q.end=q.start+n.duration},x=function(a){if(f){var b="duration";C(b,f.call(m))&&!a&&(m.trigger("change",{what:b,newval:n[b]}),m.trigger("shift",{reason:b}))}},y=function(a){var c=0,d=n.triggerElement;if(g&&d){for(var f=g.info(),h=e.get.offset(f.container),i=f.vertical?"top":"left";d.parentNode.hasAttribute(b);)d=d.parentNode;var j=e.get.offset(d);f.isDocument||(h[i]-=g.scrollPos()),c=j[i]-h[i]}var k=c!=r;r=c,k&&!a&&m.trigger("shift",{reason:"triggerElementPosition"})},z=function(a){n.triggerHook>0&&m.trigger("shift",{reason:"containerResize"})},A=e.extend(d.validate,{duration:function(a){if(e.type.String(a)&&a.match(/^(\.|\d)*\d+%$/)){var b=parseFloat(a)/100;a=function(){return g?g.info("size")*b:0}}if(e.type.Function(a)){f=a;try{a=parseFloat(f())}catch(b){a=-1}}if(a=parseFloat(a),!e.type.Number(a)||a<0)throw f?(f=void 0,['Invalid return value of supplied function for option "duration":',a]):['Invalid value for option "duration":',a];return a}}),B=function(a){a=arguments.length?[a]:Object.keys(A),a.forEach(function(a,b){var c;if(A[a])try{c=A[a](n[a])}catch(b){c=l[a];var d=e.type.String(b)?[b]:b;e.type.Array(d)?(d[0]="ERROR: "+d[0],d.unshift(1),v.apply(this,d)):v(1,"ERROR: Problem executing validation callback for option '"+a+"':",b.message)}finally{n[a]=c}})},C=function(a,b){var c=!1,d=n[a];return n[a]!=b&&(n[a]=b,B(a),c=d!=n[a]),c},D=function(a){m[a]||(m[a]=function(b){return arguments.length?("duration"===a&&(f=void 0),C(a,b)&&(m.trigger("change",{what:a,newval:n[a]}),d.shifts.indexOf(a)>-1&&m.trigger("shift",{reason:a})),m):n[a]})};this.controller=function(){return g},this.state=function(){return o},this.scrollOffset=function(){return q.start},this.triggerPosition=function(){var a=n.offset;return g&&(n.triggerElement?a+=r:a+=g.info("size")*m.triggerHook()),a};var E,F;m.on("shift.internal",function(a){var b="duration"===a.reason;(o===k&&b||o===j&&0===n.duration)&&G(),b&&H()}).on("progress.internal",function(a){G()}).on("add.internal",function(a){H()}).on("destroy.internal",function(a){m.removePin(a.reset)});var G=function(a){if(E&&g){var b=g.info(),c=F.spacer.firstChild;if(a||o!==j){var d={position:F.inFlow?"relative":"absolute",top:0,left:0},f=e.css(c,"position")!=d.position;F.pushFollowers?n.duration>0&&(o===k&&0===parseFloat(e.css(F.spacer,"padding-top"))?f=!0:o===i&&0===parseFloat(e.css(F.spacer,"padding-bottom"))&&(f=!0)):d[b.vertical?"top":"left"]=n.duration*p,e.css(c,d),f&&H()}else{"fixed"!=e.css(c,"position")&&(e.css(c,{position:"fixed"}),H());var h=e.get.offset(F.spacer,!0),l=n.reverse||0===n.duration?b.scrollPos-q.start:Math.round(p*n.duration*10)/10;h[b.vertical?"top":"left"]+=l,e.css(F.spacer.firstChild,{top:h.top,left:h.left})}}},H=function(){if(E&&g&&F.inFlow){var a=o===j,b=g.info("vertical"),c=F.spacer.firstChild,d=e.isMarginCollapseType(e.css(F.spacer,"display")),f={};F.relSize.width||F.relSize.autoFullWidth?a?e.css(E,{width:e.get.width(F.spacer)}):e.css(E,{width:"100%"}):(f["min-width"]=e.get.width(b?E:c,!0,!0),f.width=a?f["min-width"]:"auto"),F.relSize.height?a?e.css(E,{height:e.get.height(F.spacer)-(F.pushFollowers?n.duration:0)}):e.css(E,{height:"100%"}):(f["min-height"]=e.get.height(b?c:E,!0,!d),f.height=a?f["min-height"]:"auto"),F.pushFollowers&&(f["padding"+(b?"Top":"Left")]=n.duration*p,f["padding"+(b?"Bottom":"Right")]=n.duration*(1-p)),e.css(F.spacer,f)}},I=function(){g&&E&&o===j&&!g.info("isDocument")&&G()},J=function(){g&&E&&o===j&&((F.relSize.width||F.relSize.autoFullWidth)&&e.get.width(window)!=e.get.width(F.spacer.parentNode)||F.relSize.height&&e.get.height(window)!=e.get.height(F.spacer.parentNode))&&H()},K=function(a){g&&E&&o===j&&!g.info("isDocument")&&(a.preventDefault(),g._setScrollPos(g.info("scrollPos")-((a.wheelDelta||a[g.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-a.detail)))};this.setPin=function(a,c){var d={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(c=e.extend({},d,c),!(a=e.get.elements(a)[0]))return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),m;if("fixed"===e.css(a,"position"))return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),m;if(E){if(E===a)return m;m.removePin()}E=a;var f=E.parentNode.style.display,g=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];E.parentNode.style.display="none";var h="absolute"!=e.css(E,"position"),i=e.css(E,g.concat(["display"])),j=e.css(E,["width","height"]);E.parentNode.style.display=f,!h&&c.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),c.pushFollowers=!1),window.setTimeout(function(){E&&0===n.duration&&c.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var k=E.parentNode.insertBefore(document.createElement("div"),E),l=e.extend(i,{position:h?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(h||e.extend(l,e.css(E,["width","height"])),e.css(k,l),k.setAttribute(b,""),e.addClass(k,c.spacerClass),F={spacer:k,relSize:{width:"%"===j.width.slice(-1),height:"%"===j.height.slice(-1),autoFullWidth:"auto"===j.width&&h&&e.isMarginCollapseType(i.display)},pushFollowers:c.pushFollowers,inFlow:h},!E.___origStyle){E.___origStyle={};var o=E.style;g.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(a){E.___origStyle[a]=o[a]||""})}return F.relSize.width&&e.css(k,{width:j.width}),F.relSize.height&&e.css(k,{height:j.height}),k.appendChild(E),e.css(E,{position:h?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(F.relSize.width||F.relSize.autoFullWidth)&&e.css(E,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",I),window.addEventListener("resize",I),window.addEventListener("resize",J),E.addEventListener("mousewheel",K),E.addEventListener("DOMMouseScroll",K),v(3,"added pin"),G(),m},this.removePin=function(a){if(E){if(o===j&&G(!0),a||!g){var c=F.spacer.firstChild;if(c.hasAttribute(b)){var d=F.spacer.style,f=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},f.forEach(function(a){margins[a]=d[a]||""}),e.css(c,margins)}F.spacer.parentNode.insertBefore(c,F.spacer),F.spacer.parentNode.removeChild(F.spacer),E.parentNode.hasAttribute(b)||(e.css(E,E.___origStyle),delete E.___origStyle)}window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.removeEventListener("resize",J),E.removeEventListener("mousewheel",K),E.removeEventListener("DOMMouseScroll",K),E=void 0,v(3,"removed pin (reset: "+(a?"true":"false")+")")}return m};var L,M=[];return m.on("destroy.internal",function(a){m.removeClassToggle(a.reset)}),this.setClassToggle=function(a,b){var c=e.get.elements(a);return 0!==c.length&&e.type.String(b)?(M.length>0&&m.removeClassToggle(),L=b,M=c,m.on("enter.internal_class leave.internal_class",function(a){var b="enter"===a.type?e.addClass:e.removeClass;M.forEach(function(a,c){b(a,L)})}),m):(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===c.length?"element":"classes")+" supplied."),m)},this.removeClassToggle=function(a){return a&&M.forEach(function(a,b){e.removeClass(a,L)}),m.off("start.internal_class end.internal_class"),L=void 0,M=[],m},t(),m};var d={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(a){if(a=parseFloat(a),!e.type.Number(a))throw['Invalid value for option "offset":',a];return a},triggerElement:function(a){if(a=a||void 0){var b=e.get.elements(a)[0];if(!b)throw['Element defined in option "triggerElement" was not found:',a];a=b}return a},triggerHook:function(a){var b={onCenter:.5,onEnter:1,onLeave:0};if(e.type.Number(a))a=Math.max(0,Math.min(parseFloat(a),1));else{if(!(a in b))throw['Invalid value for option "triggerHook": ',a];a=b[a]}return a},reverse:function(a){return!!a},loglevel:function(a){if(a=parseInt(a),!e.type.Number(a)||a<0||a>3)throw['Invalid value for option "loglevel":',a];return a}},shifts:["duration","offset","triggerHook"]};a.Scene.addOption=function(b,c,e,f){b in d.defaults?a._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+b+"', because it already exists."):(d.defaults[b]=c,d.validate[b]=e,f&&d.shifts.push(b))},a.Scene.extend=function(b){var c=this;a.Scene=function(){return c.apply(this,arguments),this.$super=e.extend({},this),b.apply(this,arguments)||this},e.extend(a.Scene,c),a.Scene.prototype=c.prototype,a.Scene.prototype.constructor=a.Scene},a.Event=function(a,b,c,d){d=d||{};for(var e in d)this[e]=d[e];return this.type=a,this.target=this.currentTarget=c,this.namespace=b||"",this.timeStamp=this.timestamp=Date.now(),this};var e=a._util=function(a){var b,c={},d=function(a){return parseFloat(a)||0},e=function(b){return b.currentStyle?b.currentStyle:a.getComputedStyle(b)},f=function(b,c,f,g){if((c=c===document?a:c)===a)g=!1;else if(!o.DomElement(c))return 0;b=b.charAt(0).toUpperCase()+b.substr(1).toLowerCase();var h=(f?c["offset"+b]||c["outer"+b]:c["client"+b]||c["inner"+b])||0;if(f&&g){var i=e(c);h+="Height"===b?d(i.marginTop)+d(i.marginBottom):d(i.marginLeft)+d(i.marginRight)}return h},g=function(a){return a.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})};c.extend=function(a){for(a=a||{},b=1;b<arguments.length;b++)if(arguments[b])for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},c.isMarginCollapseType=function(a){return["block","flex","list-item","table","-webkit-box"].indexOf(a)>-1};var h=0,i=["ms","moz","webkit","o"],j=a.requestAnimationFrame,k=a.cancelAnimationFrame;for(b=0;!j&&b<i.length;++b)j=a[i[b]+"RequestAnimationFrame"],k=a[i[b]+"CancelAnimationFrame"]||a[i[b]+"CancelRequestAnimationFrame"];j||(j=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-h)),e=a.setTimeout(function(){b(c+d)},d);return h=c+d,e}),k||(k=function(b){a.clearTimeout(b)}),c.rAF=j.bind(a),c.cAF=k.bind(a);var l=["error","warn","log"],m=a.console||{};for(m.log=m.log||function(){},b=0;b<l.length;b++){var n=l[b];m[n]||(m[n]=m.log)}c.log=function(a){(a>l.length||a<=0)&&(a=l.length);var b=new Date,c=("0"+b.getHours()).slice(-2)+":"+("0"+b.getMinutes()).slice(-2)+":"+("0"+b.getSeconds()).slice(-2)+":"+("00"+b.getMilliseconds()).slice(-3),d=l[a-1],e=Array.prototype.splice.call(arguments,1),f=Function.prototype.bind.call(m[d],m);e.unshift(c),f.apply(m,e)};var o=c.type=function(a){return Object.prototype.toString.call(a).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};o.String=function(a){return"string"===o(a)},o.Function=function(a){return"function"===o(a)},o.Array=function(a){return Array.isArray(a)},o.Number=function(a){return!o.Array(a)&&a-parseFloat(a)+1>=0},o.DomElement=function(a){return"object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName};var p=c.get={};return p.elements=function(b){var c=[];if(o.String(b))try{b=document.querySelectorAll(b)}catch(a){return c}if("nodelist"===o(b)||o.Array(b))for(var d=0,e=c.length=b.length;d<e;d++){var f=b[d];c[d]=o.DomElement(f)?f:p.elements(f)}else(o.DomElement(b)||b===document||b===a)&&(c=[b]);return c},p.scrollTop=function(b){return b&&"number"==typeof b.scrollTop?b.scrollTop:a.pageYOffset||0},p.scrollLeft=function(b){return b&&"number"==typeof b.scrollLeft?b.scrollLeft:a.pageXOffset||0},p.width=function(a,b,c){return f("width",a,b,c)},p.height=function(a,b,c){return f("height",a,b,c)},p.offset=function(a,b){var c={top:0,left:0};if(a&&a.getBoundingClientRect){var d=a.getBoundingClientRect();c.top=d.top,c.left=d.left,b||(c.top+=p.scrollTop(),c.left+=p.scrollLeft())}return c},c.addClass=function(a,b){b&&(a.classList?a.classList.add(b):a.className+=" "+b)},c.removeClass=function(a,b){b&&(a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," "))},c.css=function(a,b){if(o.String(b))return e(a)[g(b)];if(o.Array(b)){var c={},d=e(a);return b.forEach(function(a,b){c[a]=d[g(a)]}),c}for(var f in b){var h=b[f];h==parseFloat(h)&&(h+="px"),a.style[g(f)]=h}},c}(window||{});return a.Scene.prototype.addIndicators=function(){return a._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},a.Scene.prototype.removeIndicators=function(){return a._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},a.Scene.prototype.setTween=function(){return a._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},a.Scene.prototype.removeTween=function(){return a._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},a.Scene.prototype.setVelocity=function(){return a._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},a.Scene.prototype.removeVelocity=function(){return a._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},a});