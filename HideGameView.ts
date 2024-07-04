System.register("chunks:///_virtual/HideGameView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./MessageView.ts","./GameCenterControl.ts","./GameCenterModel.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,a,s,o,h,r,c,l,g,d,f;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,a=t.Button,s=t.ProgressBar,o=t.Label,h=t.Sprite},function(t){r=t.default},function(t){c=t.default},null,function(t){l=t.default},function(t){g=t.default},function(t){d=t.default},function(t){f=t.BaseView}],execute:function(){n._RF.push({},"9f058hBijNHWLfqcWPQNy5l","HideGameView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).btnLeft=void 0,e.btnRight=void 0,e.img=void 0,e.pb=void 0,e.txtLeftTime=void 0,e.deltaTime=0,e.leftTime=0,e.maxPage=0,e.curPage=0,e.pageGo=void 0,e.pageItemGo=void 0,e.pageItems=[],e.gameState=0,e.name="HideGameView",e.url="ui/module/gameCenter/HideGameView",e}e(n,t);var r=n.prototype;return r.onInit=function(){var t=this,e=this.findChild("bottom/btnClose");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.close()}));var i=this.findChild("view/btn");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.gameState&&t.checkResult()})),this.btnLeft=this.findChild("view/btnLeft"),this.addComponentCallbackListener(this.btnLeft,a.EventType.CLICK,(function(){t.SwitchPage(-1)})),this.btnRight=this.findChild("view/btnRight"),this.addComponentCallbackListener(this.btnRight,a.EventType.CLICK,(function(){t.SwitchPage(1)})),this.pb=this.findChildComponent("view/pbTime",s),this.txtLeftTime=this.findChildComponent("view/pbTime/txtTime",o),this.img=this.findChildComponent("view/img",h),this.pageGo=this.findChild("view/page"),this.pageItemGo=this.findChild("view/page/pageItem"),this.pageItemGo.active=!1},r.registerUpdateHandler=function(){},r.onAfterOpen=function(){this.gameState=1,this.leftTime=20,this.pb.progress=1,this.txtLeftTime.string=GetLanguage(200136)+c.formatTimeStringForSecond(this.leftTime),this.maxPage=3,this.ClearPageItem();for(var t=0;t<this.maxPage;t++){var e=nodeInstantiate.instantiate(this.pageItemGo);this.pageGo.addChild(e),e.active=!0;var i=new u;i.Init(this,e),this.pageItems.push(i)}this.SetPage(1)},r.onBeforeClose=function(){this.gameState=0,this.curPage=0,this.maxPage=0,this.ClearPageItem()},r.onDestroy=function(){},r.onUpdate=function(t){this.gameState&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>=0?(this.pb.progress=this.leftTime/20,this.txtLeftTime.string=GetLanguage(200136)+c.formatTimeStringForSecond(this.leftTime)):this.loseGame()))},r.checkResult=function(){var t=this;3==this.curPage?(this.gameState=0,l.showBoxTip({tip:GetLanguage(200983),notMaskClick:!0,btnCnt:1,func:function(e){if("type_yes"==e){t.close();var i=IS(d).getRewardInfo(6);i&&2!=i.status&&IS(g).repTakeReward(6)}},ensure:GetLanguage(200129)})):this.loseGame()},r.loseGame=function(){var t=this;this.gameState=0,this.curPage=0,l.showBoxTip({tip:GetLanguage(200982),notMaskClick:!0,func:function(e){"type_yes"==e?t.onAfterOpen():"type_cancel"==e&&t.close()}})},r.SetPage=function(t){this.curPage!=t&&0!=this.pageItems.length&&(this.curPage&&this.curPage>0&&this.pageItems[this.curPage-1].SetSelected(!1),this.curPage=t,this.pageItems[this.curPage-1].SetSelected(!0),this.UpdateSwitchBtn(),this.loadIcon(this.img,"game_hide","zmc_img_bg0"+t))},r.ClearPageItem=function(){for(var t,e=i(this.pageItems);!(t=e()).done;){t.value.Clear()}this.pageItems=[]},r.UpdateSwitchBtn=function(){this.maxPage>1?(this.btnLeft.active=this.curPage>1,this.btnRight.active=this.curPage<this.maxPage):(this.btnLeft.active=!1,this.btnRight.active=!1)},r.SwitchPage=function(t){if(t>0){if(this.curPage>=this.maxPage)return}else if(this.curPage<=1)return;var e=this.curPage+t;this.SetPage(e)},n}(f));var u=function(){function t(){this.view=void 0,this.node=void 0,this.normalGo=void 0,this.selectedGo=void 0}var e=t.prototype;return e.Init=function(t,e){this.view=t,this.node=e,this.normalGo=r.findChild(this.node,"normal"),this.selectedGo=r.findChild(this.node,"selected"),this.selectedGo.active=!1},e.SetSelected=function(t){this.normalGo.active=!t,this.selectedGo.active=t},e.Clear=function(){this.node.destroy()},t}();n._RF.pop()}}}));
