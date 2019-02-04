(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var $=e.$,E=(e.Template7,e.utils),n=(e.device,e.support,e.Class),i=(e.Modal,e.ConstructorMethods),s=(e.ModalMethods,function(L){function e(e,t){void 0===t&&(t={}),L.call(this,t,[e]);var r,n,i,s,l=this,o={el:null,listEl:null,indexes:"auto",iosItemHeight:14,mdItemHeight:14,scrollList:!0,label:!1,renderItem:function(e,t){return("\n          <li>"+e+"</li>\n        ").trim()},renderSkipPlaceholder:function(){return'<li class="list-index-skip-placeholder"></li>'},on:{}};if(l.useModulesParams(o),l.params=E.extend(o,t),!l.params.el)return l;if((r=$(l.params.el))[0].f7ListIndex)return r[0].f7ListIndex;if(0===(s=r.find("ul")).length&&(s=$("<ul></ul>"),r.append(s)),l.params.listEl&&(n=$(l.params.listEl)),"auto"===l.params.indexes&&!n)return l;function a(){var e={index:l};l.calcSize(),e!==l.height&&l.render()}function d(e){var t=$(e.target).closest("li");if(t.length){var n=t.index();if(0<l.skipRate){var i=n/(t.siblings("li").length-1);n=Math.round((l.indexes.length-1)*i)}var s=l.indexes[n];l.$el.trigger("listindex:click",s,n),l.emit("local::click listIndexClick",l,s,n),l.$el.trigger("listindex:select",s,n),l.emit("local::select listIndexSelect",l,s,n),l.$listEl&&l.params.scrollList&&l.scrollListToIndex(s,n)}}n?i=n.parents(".page-content").eq(0):0===(i=r.siblings(".page-content").eq(0)).length&&(i=r.parents(".page").eq(0).find(".page-content").eq(0)),r[0].f7ListIndex=l,E.extend(l,{app:e,$el:r,el:r&&r[0],$ul:s,ul:s&&s[0],$listEl:n,listEl:n&&n[0],$pageContentEl:i,pageContentEl:i&&i[0],indexes:t.indexes,height:0,skipRate:0}),l.useModules();var p,c,u,f,h,x={},m=null;function g(e){var t=s.children();t.length&&(u=t[0].getBoundingClientRect().top,f=t[t.length-1].getBoundingClientRect().top+t[0].offsetHeight,x.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,x.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,c=!(p=!0),m=null)}function v(e){if(p){!c&&l.params.label&&(h=$('<span class="list-index-label"></span>'),r.append(h)),c=!0;var t="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;e.preventDefault();var n=(t-u)/(f-u);n=Math.min(Math.max(n,0),1);var i=Math.round((l.indexes.length-1)*n),s=l.indexes[i],o=f-u,a=(l.height-o)/2+(1-n)*o;i!==m&&(l.params.label&&h.html(s).transform("translateY(-"+a+"px)"),l.$listEl&&l.params.scrollList&&l.scrollListToIndex(s,i)),m=i,l.$el.trigger("listindex:select",l),l.emit("local::select listIndexSelect",l,s,i)}}function I(){p&&(c=p=!1,l.params.label&&(h&&h.remove(),h=void 0))}var y=!!e.support.passiveListener&&{passive:!0};return l.attachEvents=function(){r.parents(".tab").on("tab:show",a),r.parents(".page").on("page:reinit",a),r.parents(".panel").on("panel:open",a),r.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").on("modal:open",a),e.on("resize",a),r.on("click",d),r.on(e.touchEvents.start,g,y),e.on("touchmove:active",v),e.on("touchend:passive",I)},l.detachEvents=function(){r.parents(".tab").off("tab:show",a),r.parents(".page").off("page:reinit",a),r.parents(".panel").off("panel:open",a),r.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").off("modal:open",a),e.off("resize",a),r.off("click",d),r.off(e.touchEvents.start,g,y),e.off("touchmove:active",v),e.off("touchend:passive",I)},l.init(),l}return L&&(e.__proto__=L),((e.prototype=Object.create(L&&L.prototype)).constructor=e).prototype.scrollListToIndex=function(i,e){var s,t=this,n=t.$listEl,o=t.$pageContentEl;if(!n||!o||0===o.length)return t;if(n.find(".list-group-title, .item-divider").each(function(e,t){if(!s){var n=$(t);n.text()===i&&(s=n)}}),!s||0===s.length)return t;var a=s.parent().offset().top,r=parseInt(o.css("padding-top"),10),l=o[0].scrollTop,d=s.offset().top;return a<=r?o.scrollTop(a+l-r):o.scrollTop(d+l-r),t},e.prototype.renderSkipPlaceholder=function(){return this.params.renderSkipPlaceholder.call(this)},e.prototype.renderItem=function(e,t){return this.params.renderItem.call(this,e,t)},e.prototype.render=function(){var i,s=this,e=s.$ul,t=s.indexes,o=s.skipRate,n=t.map(function(e,t){if(t%o!=0&&0<o)return i=!0,"";var n=s.renderItem(e,t);return i&&(n=s.renderSkipPlaceholder()+n),i=!1,n}).join("");return e.html(n),s},e.prototype.calcSize=function(){var e=this,t=e.app,n=e.params,i=e.el,s=e.indexes,o=i.offsetHeight,a="ios"===t.theme?n.iosItemHeight:n.mdItemHeight,r=Math.floor(o/a),l=s.length,d=0;return r<l&&(d=Math.ceil((2*l-1)/r)),e.height=o,e.skipRate=d,e},e.prototype.calcIndexes=function(){var i=this;return"auto"===i.params.indexes?(i.indexes=[],i.$listEl.find(".list-group-title, .item-divider").each(function(e,t){var n=$(t).text();i.indexes.indexOf(n)<0&&i.indexes.push(n)})):i.indexes=i.params.indexes,i},e.prototype.update=function(){return this.calcIndexes(),this.calcSize(),this.render(),this},e.prototype.init=function(){this.calcIndexes(),this.calcSize(),this.render(),this.attachEvents()},e.prototype.destroy=function(){var e=this;e.$el.trigger("listindex:beforedestroy",e),e.emit("local::beforeDestroy listIndexBeforeDestroy",e),e.detachEvents(),e.$el[0]&&(e.$el[0].f7ListIndex=null,delete e.$el[0].f7ListIndex),E.deleteProps(e),e=null},e}(n)),o={name:"listIndex",static:{ListIndex:s},create:function(){this.listIndex=i({defaultSelector:".list-index",constructor:s,app:this,domProp:"f7ListIndex"})},on:{tabMounted:function(e){var i=this;$(e).find(".list-index-init").each(function(e,t){var n=E.extend($(t).dataset(),{el:t});i.listIndex.create(n)})},tabBeforeRemove:function(e){$(e).find(".list-index-init").each(function(e,t){t.f7ListIndex&&t.f7ListIndex.destroy()})},pageInit:function(e){var i=this;e.$el.find(".list-index-init").each(function(e,t){var n=E.extend($(t).dataset(),{el:t});i.listIndex.create(n)})},pageBeforeRemove:function(e){e.$el.find(".list-index-init").each(function(e,t){t.f7ListIndex&&t.f7ListIndex.destroy()})}},vnode:{"list-index-init":{insert:function(e){var t=e.elm,n=E.extend($(t).dataset(),{el:t});this.listIndex.create(n)},destroy:function(e){var t=e.elm;t.f7ListIndex&&t.f7ListIndex.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[o.name])return;e.use(o),e.instance&&(e.instance.useModuleParams(o,e.instance.params),e.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))