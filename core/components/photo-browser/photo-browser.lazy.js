(function framework7ComponentLoader(e,o){void 0===o&&(o=!0);var r=e.$,a=e.utils,s=(e.getDevice,e.getSupport,e.Class),t=(e.Modal,e.ConstructorMethods),p=(e.ModalMethods,e.$jsx),n=a.extend,i=a.now,l=a.nextTick,d=a.deleteProps;class c extends s{constructor(e,o){void 0===o&&(o={}),super(o,[e]);const r=this;r.app=e;const a=n({on:{}},e.params.photoBrowser);r.useModulesParams(a),r.params=n(a,o),n(r,{exposed:!1,opened:!1,activeIndex:r.params.swiper.initialSlide,url:r.params.url,swipeToClose:{allow:!0,isTouched:!1,diff:void 0,start:void 0,current:void 0,started:!1,activeSlide:void 0,timeStart:void 0}}),r.useModules(),r.init()}get view(){const{params:e,app:o}=this;return e.view||o.views.main}onSlideChange(e){const o=this;o.activeIndex=e.activeIndex;let a=e.activeIndex+1,s=o.params.virtualSlides?o.params.photos.length:e.slides.length;e.params.loop&&(s-=2,a-=e.loopedSlides,a<1&&(a=s+a),a>s&&(a-=s));const t=o.params.virtualSlides?e.$wrapperEl.find(`.swiper-slide[data-swiper-slide-index="${e.activeIndex}"]`):e.slides.eq(e.activeIndex),p=o.params.virtualSlides?e.$wrapperEl.find(`.swiper-slide[data-swiper-slide-index="${e.previousIndex}"]`):e.slides.eq(e.previousIndex);let n,i=o.$el.find(".photo-browser-current"),l=o.$el.find(".photo-browser-total");if("page"===o.params.type&&o.params.navbar&&0===i.length&&"ios"===o.app.theme&&(n=o.app.navbar.getElByPage(o.$el),n&&(i=r(n).find(".photo-browser-current"),l=r(n).find(".photo-browser-total"))),i.length&&l.length&&(i.text(a),l.text(s),n||(n=i.parents(".navbar")[0]),n&&o.app.navbar.size(n)),o.captions.length>0){const r=e.params.loop?t.attr("data-swiper-slide-index"):o.activeIndex;o.$captionsContainerEl.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active"),o.$captionsContainerEl.find(`[data-caption-index="${r}"]`).addClass("photo-browser-caption-active")}const d=p.find("video");d.length>0&&"pause"in d[0]&&d[0].pause()}onTouchStart(){const e=this.swipeToClose;e.allow&&(e.isTouched=!0)}onTouchMove(e){const o=this,r=o.swipeToClose;r.isTouched&&(r.started||(r.started=!0,r.start="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,o.params.virtualSlides?r.activeSlide=o.swiper.$wrapperEl.children(".swiper-slide-active"):r.activeSlide=o.swiper.slides.eq(o.swiper.activeIndex),r.timeStart=i()),e.preventDefault(),r.current="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,r.diff=r.start-r.current,o.$el.transition(0).transform(`translate3d(0,${-r.diff}px,0)`))}onTouchEnd(){const e=this,o=e.swipeToClose;if(o.isTouched=!1,!o.started)return void(o.started=!1);o.started=!1,o.allow=!1;const r=Math.abs(o.diff),a=(new Date).getTime()-o.timeStart;a<300&&r>20||a>=300&&r>100?l((()=>{e.$el&&(o.diff<0?e.$el.addClass("swipe-close-to-bottom"):e.$el.addClass("swipe-close-to-top")),e.emit("local::swipeToClose",e),e.$el.transform("").transition(""),e.close(),o.allow=!0})):(0!==r?e.$el.addClass("photo-browser-transitioning").transitionEnd((()=>{o.allow=!0,e.$el.removeClass("photo-browser-transitioning")})):o.allow=!0,l((()=>{e.$el.transform("").transition("")})))}renderNavbar(){const e=this;if(e.params.renderNavbar)return e.params.renderNavbar.call(e);let o=e.params.iconsColor;e.params.iconsColor||"dark"!==e.params.theme||(o="white");const r="ios"!==e.app.theme&&"aurora"!==e.app.theme||!e.params.pageBackLinkText?"":e.params.pageBackLinkText,a=void 0===e.params.navbarShowCount?e.params.photos.length>1:e.params.navbarShowCount,s="page"!==e.params.type;return p("div",{class:"navbar navbar-photo-browser "+("dark"===e.params.theme?"navbar-photo-browser-dark":"")},p("div",{class:"navbar-bg"}),p("div",{class:"navbar-inner navbar-inner-centered-title sliding"},!s&&p("div",{class:"left"},p("a",{class:`link ${r?"":"icon-only"} back`},p("i",{class:"icon icon-back "+(o?`color-${o}`:"")}),r&&p("span",null,r))),a&&p("div",{class:"title"},p("span",{class:"photo-browser-current"}),p("span",{class:"photo-browser-of"},e.params.navbarOfText),p("span",{class:"photo-browser-total"})),s&&p("div",{class:"right"},p("a",{class:"link popup-close","data-popup":".photo-browser-popup"},p("span",null,e.params.popupCloseLinkText)))))}renderToolbar(){const e=this;if(e.params.renderToolbar)return e.params.renderToolbar.call(e);let o=e.params.iconsColor;return e.params.iconsColor||"dark"!==e.params.theme||(o="white"),p("div",{class:"toolbar toolbar-bottom tabbar"},p("div",{class:"toolbar-inner"},p("a",{class:"link photo-browser-prev"},p("i",{class:"icon icon-back "+(o?`color-${o}`:"")})),p("a",{class:"link photo-browser-next"},p("i",{class:"icon icon-forward "+(o?`color-${o}`:"")}))))}renderCaption(e,o){const r=this;return r.params.renderCaption?r.params.renderCaption.call(r,e,o):p("div",{class:"photo-browser-caption","data-caption-index":o},e)}renderObject(e,o){const r=this;return r.params.renderObject?r.params.renderObject.call(r,e,o):p("div",{class:"photo-browser-slide photo-browser-object-slide swiper-slide","data-swiper-slide-index":o},e.html?e.html:e)}renderLazyPhoto(e,o){const r=this;return r.params.renderLazyPhoto?r.params.renderLazyPhoto.call(r,e,o):p("div",{class:"photo-browser-slide photo-browser-slide-lazy swiper-slide","data-swiper-slide-index":o},p("div",{class:"swiper-lazy-preloader"}),p("span",{class:"swiper-zoom-container"},p("img",{"data-src":e.url?e.url:e,class:"swiper-lazy"})))}renderPhoto(e,o){const r=this;return r.params.renderPhoto?r.params.renderPhoto.call(r,e,o):p("div",{class:"photo-browser-slide swiper-slide","data-swiper-slide-index":o},p("span",{class:"swiper-zoom-container"},p("img",{src:e.url?e.url:e})))}render(){const e=this;return e.params.render?e.params.render.call(e,e.params):p("div",{class:`photo-browser photo-browser-${e.params.theme}`},p("div",{class:"view"},p("div",{class:`page photo-browser-page photo-browser-page-${e.params.theme} no-toolbar ${e.params.navbar?"":"no-navbar"}`,"data-name":"photo-browser-page"},e.params.navbar&&e.renderNavbar(),e.params.toolbar&&e.renderToolbar(),p("div",{class:`photo-browser-captions photo-browser-captions-${e.params.captionsTheme||e.params.theme}`},e.params.photos.map(((o,r)=>o.caption?e.renderCaption(o.caption,r):""))),p("div",{class:"photo-browser-swiper-container swiper"},p("div",{class:"photo-browser-swiper-wrapper swiper-wrapper"},!e.params.virtualSlides&&e.params.photos.map(((o,r)=>o.html||("string"==typeof o||o instanceof String)&&o.indexOf("<")>=0&&o.indexOf(">")>=0?e.renderObject(o,r):!0===e.params.swiper.lazy||e.params.swiper.lazy&&e.params.swiper.lazy.enabled?e.renderLazyPhoto(o,r):e.renderPhoto(o,r))))))))}renderStandalone(){const e=this;if(e.params.renderStandalone)return e.params.renderStandalone.call(e);return`<div class="popup photo-browser-popup photo-browser-standalone popup-tablet-fullscreen">${e.render()}</div>`}renderPage(){const e=this;if(e.params.renderPage)return e.params.renderPage.call(e);return e.render()}renderPopup(){const e=this;if(e.params.renderPopup)return e.params.renderPopup.call(e);return`<div class="popup photo-browser-popup">${e.render()}</div>`}onOpen(e,o){const a=this,s=a.app,t=r(o);let p;t[0].f7PhotoBrowser=a,a.$el=t,a.el=t[0],a.openedIn=e,a.opened=!0,a.$swiperContainerEl=a.$el.find(".photo-browser-swiper-container"),a.$swiperWrapperEl=a.$el.find(".photo-browser-swiper-wrapper"),a.slides=a.$el.find(".photo-browser-slide"),a.$captionsContainerEl=a.$el.find(".photo-browser-captions"),a.captions=a.$el.find(".photo-browser-caption");const i=n({},a.params.swiper,{initialSlide:a.activeIndex,cssMode:!(void 0!==a.params.swiper.cssMode||!s.device.ios&&!s.device.android)||a.params.swiper.cssMode,on:{click(e){clearTimeout(p),a.params.exposition&&(p=setTimeout((()=>{a.expositionToggle()}),350)),a.emit("local::tap",e),a.emit("local::click",e)},doubleClick(e){clearTimeout(p),a.emit("local::doubleTap",e),a.emit("local::doubleClick",e)},slideChange(){a.onSlideChange(this);for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];a.emit("local::slideChange",...o)},transitionStart(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];a.emit("local::transitionStart",...o)},transitionEnd(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];a.emit("local::transitionEnd",...o)},slideChangeTransitionStart(){a.onSlideChange(this);for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];a.emit("local::slideChangeTransitionStart",...o)},slideChangeTransitionEnd(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];a.emit("local::slideChangeTransitionEnd",...o)},lazyImageLoad(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];a.emit("local::lazyImageLoad",...o)},lazyImageReady(){for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];const t=o[0];r(t).removeClass("photo-browser-slide-lazy"),a.emit("local::lazyImageReady",...o)}}});a.params.swipeToClose&&"page"!==a.params.type&&n(i.on,{touchStart(e,o){a.onTouchStart(o),a.emit("local::touchStart",o)},touchMoveOpposite(e,o){a.onTouchMove(o),a.emit("local::touchMoveOpposite",o)},touchEnd(e,o){a.onTouchEnd(o),a.emit("local::touchEnd",o)}}),a.params.virtualSlides&&n(i,{virtual:{slides:a.params.photos,renderSlide:(e,o)=>e.html||("string"==typeof e||e instanceof String)&&e.indexOf("<")>=0&&e.indexOf(">")>=0?a.renderObject(e,o):!0===a.params.swiper.lazy||a.params.swiper.lazy&&a.params.swiper.lazy.enabled?a.renderLazyPhoto(e,o):a.renderPhoto(e,o)}}),a.swiper=s.swiper?s.swiper.create(a.$swiperContainerEl,i):new window.Swiper(a.$swiperContainerEl,i),0===a.activeIndex&&a.onSlideChange(a.swiper),a.$el&&a.$el.trigger("photobrowser:open"),a.emit("local::open photoBrowserOpen",a)}onOpened(){const e=this;e.$el&&"standalone"===e.params.type&&e.$el.css("animation","none"),e.$el&&e.$el.trigger("photobrowser:opened"),e.emit("local::opened photoBrowserOpened",e)}onClose(){const e=this;e.destroyed||(e.swiper&&e.swiper.destroy&&(e.swiper.destroy(!0,!1),e.swiper=null,delete e.swiper),e.$el&&e.$el.trigger("photobrowser:close"),e.emit("local::close photoBrowserClose",e))}onClosed(){const e=this;e.destroyed||(e.opened=!1,e.$el=null,e.el=null,delete e.$el,delete e.el,e.$el&&e.$el.trigger("photobrowser:closed"),e.emit("local::closed photoBrowserClosed",e))}openPage(){const e=this;if(e.opened)return e;const o=e.renderPage();return e.view.router.navigate({url:e.url,route:{content:o,path:e.url,on:{pageBeforeIn(o,r){e.view.$el.addClass(`with-photo-browser-page with-photo-browser-page-${e.params.theme}`),e.onOpen("page",r.el)},pageAfterIn(o,r){e.onOpened("page",r.el)},pageBeforeOut(o,r){e.view.$el.removeClass(`with-photo-browser-page with-photo-browser-page-exposed with-photo-browser-page-${e.params.theme}`),e.onClose("page",r.el)},pageAfterOut(o,r){e.onClosed("page",r.el)}}}}),e}openStandalone(){const e=this;if(e.opened)return e;const o={backdrop:!1,content:e.renderStandalone(),on:{popupOpen(o){e.onOpen("popup",o.el)},popupOpened(o){e.onOpened("popup",o.el)},popupClose(o){e.onClose("popup",o.el)},popupClosed(o){e.onClosed("popup",o.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:o}}):e.modal=e.app.popup.create(o).open(),e}openPopup(){const e=this;if(e.opened)return e;const o={content:e.renderPopup(),push:e.params.popupPush,closeByBackdropClick:e.params.closeByBackdropClick,on:{popupOpen(o){e.onOpen("popup",o.el)},popupOpened(o){e.onOpened("popup",o.el)},popupClose(o){e.onClose("popup",o.el)},popupClosed(o){e.onClosed("popup",o.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:o}}):e.modal=e.app.popup.create(o).open(),e}expositionEnable(){const e=this;return"page"===e.params.type&&e.view.$el.addClass("with-photo-browser-page-exposed"),e.$el&&e.$el.addClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.addClass("photo-browser-captions-exposed"),e.exposed=!0,e}expositionDisable(){const e=this;return"page"===e.params.type&&e.view.$el.removeClass("with-photo-browser-page-exposed"),e.$el&&e.$el.removeClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.removeClass("photo-browser-captions-exposed"),e.exposed=!1,e}expositionToggle(){const e=this;return"page"===e.params.type&&e.view.$el.toggleClass("with-photo-browser-page-exposed"),e.$el&&e.$el.toggleClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.toggleClass("photo-browser-captions-exposed"),e.exposed=!e.exposed,e}open(e){const o=this,r=o.params.type;return o.opened?(o.swiper&&void 0!==e&&o.swiper.slideTo(parseInt(e,10)),o):(void 0!==e&&(o.activeIndex=e),"standalone"===r&&o.openStandalone(),"page"===r&&o.openPage(),"popup"===r&&o.openPopup(),o)}close(){const e=this;return e.opened?(e.params.routableModals&&e.view||"page"===e.openedIn?e.view.router.back():(e.modal.once("modalClosed",(()=>{l((()=>{e.destroyed||(e.modal.destroy(),delete e.modal)}))})),e.modal.close()),e):e}init(){}destroy(){let e=this;e.emit("local::beforeDestroy photoBrowserBeforeDestroy",e),e.$el&&(e.$el.trigger("photobrowser:beforedestroy"),e.$el[0].f7PhotoBrowser=null,delete e.$el[0].f7PhotoBrowser),d(e),e.destroyed=!0,e=null}}var h={name:"photoBrowser",params:{photoBrowser:{photos:[],exposition:!0,expositionHideCaptions:!1,type:"standalone",navbar:!0,toolbar:!0,theme:"light",captionsTheme:void 0,iconsColor:void 0,popupPush:!1,swipeToClose:!0,pageBackLinkText:"Back",popupCloseLinkText:"Close",navbarOfText:"of",navbarShowCount:void 0,view:void 0,url:"photos/",routableModals:!1,virtualSlides:!0,closeByBackdropClick:!0,renderNavbar:void 0,renderToolbar:void 0,renderCaption:void 0,renderObject:void 0,renderLazyPhoto:void 0,renderPhoto:void 0,renderPage:void 0,renderPopup:void 0,renderStandalone:void 0,swiper:{cssMode:!1,initialSlide:0,spaceBetween:20,speed:300,loop:!1,preloadImages:!0,keyboard:{enabled:!0},navigation:{nextEl:".photo-browser-next",prevEl:".photo-browser-prev"},zoom:{enabled:!0,maxRatio:3,minRatio:1},lazy:{enabled:!0}}}},create(){this.photoBrowser=t({defaultSelector:".photo-browser-popup, .photo-browser-page",constructor:c,app:this,domProp:"f7PhotoBrowser"})},static:{PhotoBrowser:c}};if(o){if(e.prototype.modules&&e.prototype.modules[h.name])return;e.use(h),e.instance&&(e.instance.useModuleParams(h,e.instance.params),e.instance.useModule(h))}return h}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
