System.register("chunks:///_virtual/SeasonSceneSearchView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./SLGMapData.ts","./SeasonSceneControl.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,s,a,c,r,l,u,d,f;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.ScrollView,s=t.Label,a=t.sys},function(t){c=t.V2},function(t){r=t.ListItem},function(t){l=t.default},null,function(t){u=t.SLGMapData},function(t){d=t.default},function(t){f=t.BaseView}],execute:function(){n._RF.push({},"e0434dlQL9IYq+qFLImSIV7","SeasonSceneSearchView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).scrollGoodsList=void 0,e.name="SeasonSceneSearchView",e.url="ui/module/season/scene-view/SeasonSceneSearchView",e.poolTime=3e3,e}e(n,t);var s=n.prototype;return s.onInit=function(){var t=this,e=this.findChild("content/btnClose");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()}));var n=this.findChildComponent("content/box/scroll",o);this.scrollGoodsList=this.addUIList(n,h)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){var t,e=null!=(t=this.openArgs[0])?t:[];this.scrollGoodsList.datas=e},s.onBeforeClose=function(){},s.onDestroy=function(){},n}(f));var h=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).btnLoacte=void 0,e.txtName=void 0,e.icon=void 0,e.effID=void 0,e}e(n,t);var o=n.prototype;return o.onInit=function(){var t=this;this.txtName=l.findChildComponent(this.node,"txtName",s),this.icon=l.findChild(this.node,"icon"),this.btnLoacte=l.findChild(this.node,"btnLocate"),this.view.addComponentCallbackListener(this.btnLoacte,i.EventType.CLICK,(function(){var e=u.getCRToIndex(t.data.pos.x,t.data.pos.y);IS(d).reqLocate(e),t.view.close()}))},o.onRender=function(t,e){var n=configSeason_building_plot.getDataByKey(t.base_id);this.txtName.string=n.name,this.view.removeUIEffect(this.effID),this.effID=this.view.addUIEffect("prefab/map/slgmap/"+n.prefab_name,this.icon,-1,new c(0,n.ui_scale[1]),n.ui_scale[0]/1e4,(function(t){a.uiMirror&&(t.dir=-1)})),t.pos?this.btnLoacte.active=!0:this.btnLoacte.active=!1},n}(r);n._RF.pop()}}}));

