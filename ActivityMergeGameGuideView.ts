System.register("chunks:///_virtual/ActivityMergeGameGuideView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./index57.ts","./ItemIcon.ts","./ConfigGlobal.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,s,a,o,h,c,r,g;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,s=t.Button,a=t.Label,o=t.Sprite},function(t){h=t.default},null,function(t){c=t.IconAseetType},function(t){r=t.ConfigGlobal},function(t){g=t.BaseView}],execute:function(){n._RF.push({},"df6fb6X46FPbKc22dgqb5dr","ActivityMergeGameGuideView",void 0);var d=r.merge_guidance,u=(t("default",function(t){function n(){var e;return(e=t.call(this)||this).btnLeft=void 0,e.btnRight=void 0,e.txtDesc=void 0,e.img=void 0,e.maxPage=0,e.curPage=0,e.pageGo=void 0,e.pageItemGo=void 0,e.pageItems=[],e.name="ActivityMergeGameGuideView",e.url="ui/module/activityMerge/ActivityMergeGameGuideView",e}e(n,t);var h=n.prototype;return h.onInit=function(){var t=this,e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.close()})),this.btnLeft=this.findChild("view/btnLeft"),this.addComponentCallbackListener(this.btnLeft,s.EventType.CLICK,(function(){t.SwitchPage(-1)})),this.btnRight=this.findChild("view/btnRight"),this.addComponentCallbackListener(this.btnRight,s.EventType.CLICK,(function(){t.SwitchPage(1)})),this.txtDesc=this.findChildComponent("view/txtDesc",a),this.img=this.findChildComponent("view/img",o),this.pageGo=this.findChild("view/page"),this.pageItemGo=this.findChild("view/page/pageItem"),this.pageItemGo.active=!1},h.registerUpdateHandler=function(){},h.onAfterOpen=function(){this.maxPage=d.length,this.ClearPageItem();for(var t=0;t<this.maxPage;t++){var e=nodeInstantiate.instantiate(this.pageItemGo);this.pageGo.addChild(e),e.active=!0;var i=new u;i.Init(this,e),this.pageItems.push(i)}this.SetPage(1)},h.onBeforeClose=function(){},h.onDestroy=function(){},h.SetPage=function(t){if(this.curPage!=t&&0!=this.pageItems.length){this.curPage&&this.curPage>0&&this.pageItems[this.curPage-1].SetSelected(!1),this.curPage=t,this.pageItems[this.curPage-1].SetSelected(!0),this.UpdateSwitchBtn();var e=d[t-1];this.loadIcon(this.img,"icon_merge_guide",e[0].toString(),null,c.ICON_SPRITE),this.txtDesc.string=GetLanguage(parseInt(e[1].toString()))}},h.ClearPageItem=function(){for(var t,e=i(this.pageItems);!(t=e()).done;){t.value.Clear()}this.pageItems=[]},h.UpdateSwitchBtn=function(){this.maxPage>1?(this.btnLeft.active=this.curPage>1,this.btnRight.active=this.curPage<this.maxPage):(this.btnLeft.active=!1,this.btnRight.active=!1)},h.SwitchPage=function(t){if(t>0){if(this.curPage>=this.maxPage)return}else if(this.curPage<=1)return;var e=this.curPage+t;this.SetPage(e)},n}(g)),function(){function t(){this.view=void 0,this.node=void 0,this.normalGo=void 0,this.selectedGo=void 0}var e=t.prototype;return e.Init=function(t,e){this.view=t,this.node=e,this.normalGo=h.findChild(this.node,"normal"),this.selectedGo=h.findChild(this.node,"selected"),this.selectedGo.active=!1},e.SetSelected=function(t){this.normalGo.active=!t,this.selectedGo.active=t},e.Clear=function(){this.node.destroy()},t}());n._RF.pop()}}}));

