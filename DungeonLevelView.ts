System.register("chunks:///_virtual/DungeonLevelView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ItemIcon.ts","./AdModel.ts","./BagDefine.ts","./BagModel.ts","./GameSetting.ts","./MessageView.ts","./PrivilegeDataCache.ts","./PrivilegeDefine.ts","./ChapterDataCache.ts","./ChapterDefine.ts","./DungeonControl.ts","./DungeonDefine.ts","./BasePopupView.ts"],(function(t){"use strict";var e,i,n,o,a,d,s,h,r,l,u,c,g,v,p,f,C,m,L,I,y,b,G,x,w,S,D,T,M;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Label,a=t.Sprite,d=t.ScrollView,s=t.Button,h=t.Layout,r=t.js},function(t){l=t.ChapterType},function(t){u=t.ListItem},function(t){c=t.default},function(t){g=t.default},null,function(t){v=t.IconAseetType},function(t){p=t.AdModel},function(t){f=t.BagEventDefine},function(t){C=t.BagModel},function(t){m=t.default,L=t.GameSettingKey},function(t){I=t.default},function(t){y=t.PrivilegeDataCache},function(t){b=t.PrivilegeEventDefine,G=t.PrivilegeCardEffect},function(t){x=t.ChapterDataCache},function(t){w=t.ChapterEventDefine,S=t.DungeonDefine},function(t){D=t.default},function(t){T=t.DungeonIconMap},function(t){M=t.BasePopupView}],execute:function(){n._RF.push({},"16da5OC9vNGQ7f52f91oJSL","DungeonLevelView",void 0);t("DungeonLevelView",function(t){function n(){var e;return(e=t.call(this)||this).btnGoto=void 0,e.txtDesc=void 0,e.txtNum=void 0,e.txtLevel=void 0,e.txtRewardNum=void 0,e.txtRewardTitle=void 0,e.imgIconBG=void 0,e.imgIcon=void 0,e.imgKey=void 0,e.imgRewardIcon=void 0,e.imgNum=void 0,e.data=void 0,e.curLevel=void 0,e.btnRule=void 0,e.nodeMountSpe=void 0,e.nodeGemSpe=void 0,e.btnNext=void 0,e.btnLast=void 0,e.adId=void 0,e.btnAd=void 0,e.btnMop=void 0,e.nodeGrey=void 0,e.txtMop=void 0,e.txtAdDesc=void 0,e.txtAdCount=void 0,e.rewardUIList=void 0,e.name="DungeonLevelView",e.url="ui/module/dungeon/DungeonLevelView",e}e(n,t);var u=n.prototype;return u.onInit=function(){var t=this;this.btnGoto=this.findChild("bg/btnGoto"),this.txtDesc=this.findChildComponent("bg/imgDesc",o),this.imgIconBG=this.findChildComponent("bg/imgIconBG",a),this.imgIcon=this.findChildComponent("bg/imgIconBG/imgIcon",a),this.imgKey=this.findChildComponent("bg/imgKey",a),this.txtNum=this.findChildComponent("bg/txtNum",o),this.txtLevel=this.findChildComponent("bg/level/txtLevel",o),this.txtRewardNum=this.findChildComponent("bg/txtRewardNum",o),this.imgRewardIcon=this.findChildComponent("bg/imgRewardIcon",a),this.txtRewardTitle=this.findChildComponent("bg/txtRewardTitle",o),this.imgNum=this.findChildComponent("bg/imgNum",a),this.btnRule=this.findChild("bg/btnRule"),this.btnLast=this.findChild("bg/level/btnLast"),this.btnNext=this.findChild("bg/level/btnNext");var e=this.findChildComponent("bg/ScrollView",d);this.rewardUIList=this.addUIList(e,A),this.rewardUIList.lackCenter=!0,this.addComponentCallbackListener(this.btnGoto,s.EventType.CLICK,(function(){var e=t.data,i=IS(x).getLimit(e.type);if(IS(C).getGoodsCountByGoodsGtid(i[2][0])<i[2][1])I.showFlyTip(GetLanguage(200146));else{IS(D).reqDungeonBattleStart(e.type,t.curLevel);var n=IS(x).getConfig(e.type).getDataByList("index",t.curLevel||1);battleMain.enterChapter(n[0].bossModel),normalEvent.emit(w.DUNGEON_ENTER)}})),this.addComponentCallbackListener(this.btnNext,s.EventType.CLICK,(function(){t.curLevel<t.data.max_level&&(t.curLevel++,t.updateInfo())})),this.addComponentCallbackListener(this.btnLast,s.EventType.CLICK,(function(){t.curLevel>0&&(t.curLevel--,t.updateInfo())}));var n=this.findChild("bg/btnClose");this.addComponentCallbackListener(n,s.EventType.CLICK,(function(){t.close()})),this.addComponentCallbackListener(this.btnRule,s.EventType.CLICK,(function(){t.onShowTips()})),this.btnMop=this.findChild("bg/btnMop"),this.addComponentCallbackListener(this.btnMop,s.EventType.CLICK,(function(){if(t.curLevel>1){if(t.curLevel==t.data.max_level)for(var e,n=i(null!=(o=t.data.ext)?o:[]);!(e=n()).done;){var o,a=e.value;if(9==a.k&&a.v==t.curLevel)return void IS(D).reqSweep(t.data.type,t.curLevel,1)}IS(D).reqSweep(t.data.type,t.curLevel<t.data.max_level?t.curLevel:t.curLevel-1,1)}else I.showFlyTip(GetLanguage(201491))})),this.btnAd=this.findChild("bg/btnAd"),this.addComponentCallbackListener(this.btnAd,s.EventType.CLICK,(function(){IS(p).tryWatchAd(t.adId)})),this.nodeGrey=this.findChild("bg/btnMop/nodeGrey"),this.txtMop=this.findChildComponent("bg/btnMop/txtMop",o),this.txtAdDesc=this.findChildComponent("bg/btnAd/txtDesc",o),this.txtAdCount=this.findChildComponent("bg/btnAd/txtCount",o),this.nodeMountSpe=this.findChild("bg/nodeMount");var h=IS(m).Get(L.MOUNT_AUTO_GET),r=this.findChild("bg/nodeMount/btnCheck/sel");r.active=1==h,this.addComponentCallbackListener(r,s.EventType.CLICK,(function(){IS(m).set(L.MOUNT_AUTO_GET,0),r.active=!1}));var l=this.findChild("bg/nodeMount/btnCheck");this.addComponentCallbackListener(l,s.EventType.CLICK,(function(){IS(m).set(L.MOUNT_AUTO_GET,1),r.active=!0})),this.nodeGemSpe=this.findChild("bg/nodeGem")},u.registerUpdateHandler=function(){this.addEvent(f.GOODS_INFO_UPDATE,this.onGoodsUpdate,this),this.addEvent(b.PRIVILEGE_CARD_UPDATE,this.onPrivilegeCardUpdate,this)},u.onAfterOpen=function(){t.prototype.onAfterOpen.call(this),this.data=this.openArgs[0],this.nodeMountSpe.active=this.data.type==l.Mount,this.dealMirrorLayout(this.nodeMountSpe.getComponent(h)),this.nodeGemSpe.active=this.data.type==l.ArtifactGem,this.curLevel=IS(x).curDungeonLevel[this.data.type]||1;var e=configChapter_type.getDataByKey(this.data.type);this.adId=e.ad,this.updateInfo()},u.onDestroy=function(){},u.updateInfo=function(){this.txtDesc.string=GetLanguage_UI(T[this.data.type].title[0]),this.loadIcon(this.imgIconBG,T[this.data.type].iconBG[0],T[this.data.type].iconBG[1],null,v.UI_ATLAS,!0),this.loadIcon(this.imgIcon,T[this.data.type].icon[0],T[this.data.type].icon[1]),this.loadIcon(this.imgKey,T[this.data.type].key[0],T[this.data.type].key[1],null,v.UI_ATLAS,!0);var t=IS(x).getLimit(this.data.type),e=configGoods.getDataByKey(t[2][0]),n=IS(C).getGoodsCountByGoodsGtid(e.id);this.txtNum.string=n+"/"+(t[1]+IS(y).getPrivilegeCardValue(G.SCRIPT,this.data.type));var a=IS(x).getConfig(this.data.type).getDataByList("index",this.curLevel||1);if(this.data.type==S.CHAPTER_TYPE_GEM){for(var d,s=a[a.length-1].reward[0][0],l=configOutput.getDataByList("groupid",s),u=[],g=0,p=i(l);!(d=p()).done;){g+=d.value.prob}for(var f,m=i(l);!(f=m()).done;){var L=f.value;u.push([L.item[0],Math.floor(L.prob/g*100)])}this.rewardUIList.datas=u,c.findChildComponent(this.nodeGemSpe,"num",o).string=r.formatStr("%s%s",GetLanguage_UI(300217),a[a.length-1].reward[0][1]),this.dealMirrorLayout(this.nodeGemSpe.getComponent(h))}else this.rewardUIList.datas=a[a.length-1].reward;this.refreshBtnShow(),this.updatePage()},u.refreshBtnShow=function(){var t=0,e=!1,i=IS(x).getLimit(this.data.type);if(i){var n=configGoods.getDataByKey(i[2][0]);if(t=IS(C).getGoodsCountByGoodsGtid(n.id),e=null!=this.adId&&t<=0,this.btnGoto.active=!e,this.btnMop.active=!e,this.btnAd.active=e,e){var o=configAds.getDataByKey(this.adId);o&&(this.txtAdDesc.string=g.formatStrWithMirrorDeal(o.desc,IS(p).getAdRewardValue(this.adId)),this.txtAdCount.string=r.formatStr("(%s/%s)",o.times-IS(p).getAdWatchCount(this.adId),o.times))}}},u.updatePage=function(){if(this.btnNext.active=this.data.max_level>this.curLevel,this.btnLast.active=this.curLevel>1,this.nodeGrey.active=this.curLevel<=1,this.txtMop.string=this.curLevel<this.data.max_level?GetLanguage(201492):GetLanguage(201493),this.curLevel==this.data.max_level)for(var t,e=i(null!=(n=this.data.ext)?n:[]);!(t=e()).done;){var n,o=t.value;if(9==o.k&&o.v==this.curLevel){this.txtMop.string=GetLanguage(201492);break}}this.txtLevel.string=this.curLevel.toString()},u.onGoodsUpdate=function(t,e){this.updateInfo()},u.onPrivilegeCardUpdate=function(){this.updateInfo()},u.onShowTips=function(){var t=configChapter_type.getDataByKey(this.data.type);I.showBoxTip({tip:""+t.desc,ensure:GetLanguage(200129),btnCnt:1,title:GetLanguage(200143)})},n}(M));var A=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtRewardNum=void 0,e.txtRewardTitle=void 0,e.imgRewardIcon=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.txtRewardNum=c.findChildComponent(this.node,"txtRewardNum",o),this.imgRewardIcon=c.findChildComponent(this.node,"imgRewardIcon",a),this.txtRewardTitle=c.findChildComponent(this.node,"txtRewardTitle",o)},n.onRender=function(t,e){this.view.data.type==S.CHAPTER_TYPE_GEM?this.txtRewardNum.string=t[1]+"%":this.txtRewardNum.string=t[1],this.txtRewardTitle.string=configGoods.getDataByKey(t[0]).name,this.view.loadIcon(this.imgRewardIcon,"icon_item",configGoods.getDataByKey(t[0]).icon)},i}(u);n._RF.pop()}}}));
