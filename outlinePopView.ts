System.register("chunks:///_virtual/outlinePopView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./BaseView.ts","./ConfigGlobal.ts","./AdDefine.ts","./AdModel.ts","./ChapterControl.ts","./ChapterDataCache.ts","./MessageView.ts","./RoleDataCache.ts","./SdkControl.ts","./outlineDefine.ts","./outlineModel.ts"],(function(t){"use strict";var i,n,e,o,s,a,d,h,r,l,c,u,f,m,C,g,p,T,I,v,x,_,A,D,y,w,S,b,L;return{setters:[function(t){i=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy,o=t.Button,s=t.sys,a=t.HorizontalTextAlignment,d=t.ScrollView,h=t.Label,r=t.Sprite,l=t.Vec3,c=t.js},function(t){u=t.audioMgr},function(t){f=t.SelectedType,m=t.ListItem},function(t){C=t.default},function(t){g=t.default},function(t){p=t.default},function(t){T=t.BaseView},function(t){I=t.ConfigGlobal},function(t){v=t.ADS_TYPE,x=t.AdEventDefine},function(t){_=t.AdModel},function(t){A=t.default},function(t){D=t.ChapterDataCache},function(t){y=t.default},function(t){w=t.RoleDataCache},function(t){S=t.default},function(t){b=t.outlineDefine},function(t){L=t.outlineModel}],execute:function(){e._RF.push({},"61125n4hm1C5bYEtX3LHtTA","outlinePopView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).scrollEquipList=void 0,i.nodeScroll=void 0,i.timeTitleTxt=void 0,i.timeTxt=void 0,i.iconBg=void 0,i.rateTxt=void 0,i.awardTxt=void 0,i.txtTitle=void 0,i.iconBg2=void 0,i.rateTxt2=void 0,i.awardTxt2=void 0,i.txtAdDesc=void 0,i.txtAdCount=void 0,i.nodeAdIcon=void 0,i.txtAdCD=void 0,i.nextWatchTime=void 0,i.is_offline=void 0,i.dataInfo=void 0,i.addTimeCount=void 0,i.time=void 0,i.lightId=30001,i.btnOk=void 0,i.name="outlinePopView",i.url="ui/module/outline/outlinePopView",i.poolTime=3e3,i}i(e,t);var m=e.prototype;return m.onInit=function(){var t=this,i=this.findChild("root/imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onMaskClick()})),this.btnOk=this.findChild("root/content/btnStart"),this.addComponentCallbackListener(this.btnOk,o.EventType.CLICK,(function(){t.dataInfo&&(1!=t.dataInfo.type||IS(L).GetShowBtn()?null!=t.dataInfo&&null!=t.dataInfo.type&&(IS(A).reqChapterOutLineGetReward(t.dataInfo.type),t.close(),IS(w).isHaveHideByType(1)||IS(w).GetIsClickSubscribe(3)||(IS(S).requestSubscribeMessage([3]),IS(w).clickSubscribe(3))):y.showFlyTip(GetLanguage(201041)))}));var n=this.findChild("root/content/btnRule");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){y.showBoxTip({tip:GetLanguage(201040),title:GetLanguage(201412),btnCnt:1,horizontalAlign:s.uiMirror?a.RIGHT:a.LEFT})}));var e=this.findChild("root/content/btnAd");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){IS(_).tryWatchAd(v.AD_DUNGEON_INCOME)}));var c=this.findChildComponent("root/content/scrollEquipList",d);this.scrollEquipList=this.addUIList(c,E),this.scrollEquipList.selectedMode=f.SINGLE,this.nodeScroll=c.node,this.timeTitleTxt=this.findChildComponent("root/content/timeTxt",h),this.timeTxt=this.findChildComponent("root/content/timeTxt/time",h),this.iconBg=this.findChild("root/content/icon_bg"),this.loadIcon(this.findChildComponent("root/content/icon_bg/sprite",r),"main","zjm_ICON_jingbi"),this.rateTxt=this.findChildComponent("root/content/icon_bg/rateTxt",h),this.awardTxt=this.findChildComponent("root/content/icon_bg/awardTxt",h),this.iconBg2=this.findChild("root/content/icon_bg2"),this.loadIcon(this.findChildComponent("root/content/icon_bg2/sprite",r),"outline","zxgq_ui_shendeng"),this.rateTxt2=this.findChildComponent("root/content/icon_bg2/rateTxt2",h),this.awardTxt2=this.findChildComponent("root/content/icon_bg2/awardTxt2",h),s.uiMirror&&this.timeTxt.node.setScale(1,1,1),this.txtTitle=this.findChildComponent("root/content/title/txtTitle",h),this.txtAdDesc=this.findChildComponent("root/content/btnAd/txtDesc",h),this.txtAdCount=this.findChildComponent("root/content/btnAd/txtCount",h),this.nodeAdIcon=this.findChild("root/content/btnAd/imgAd"),this.txtAdCD=this.findChildComponent("root/content/btnAd/txtCD",h),this.nodeAdIcon.active=1==I.ads_icon_is_show,this.txtAdCount.node.position=1==I.ads_icon_is_show?new l(19.716,-51,0):new l(0,-51,0)},m.registerUpdateHandler=function(){this.addEvent(b.OutLineInfoBack,this.updateData,this),this.addEvent(x.AD_INFO_UPDATE,this.onAdInfoUpdate,this)},m.onMaskClick=function(){this.dataInfo&&2==this.dataInfo.type||this.close()},m.onAfterOpen=function(){this.time=0,this.addTimeCount=0,this.dataInfo=null,this.is_offline=!1,this.addTimer(1,-1,this.addActionTimer,this);var t=this.openArgs[0];null!=t&&2==t.type?(this.is_offline=!0,this.txtTitle.string=GetLanguage(200463),this.updateData(t)):(this.txtTitle.string=GetLanguage(200464),IS(A).reqChapterOutLineReward(1)),this.updateAdInfo()},m.onBeforeClose=function(){this.time=0},m.onDestroy=function(){},m.addActionTimer=function(){if(null!=this.dataInfo&&2!=this.dataInfo.type){this.addTimeCount++;var t=p.formatTimeForSecond(Math.min(I.online_reward_maxtime,this.dataInfo.time+this.addTimeCount));this.timeTxt.string=t}},m.updateData=function(t){if(null==this.dataInfo||this.dataInfo.type==t.type){this.dataInfo=t,this.addTimeCount=0;var i=p.formatTimeForSecond(Math.min(I.online_reward_maxtime,t.time));2==this.dataInfo.type&&(i=p.formatTimeForSecond(t.time));var e=IS(D),o=chapterDataCache.getChapterConfig(e.curChapterId);if(null!=o){var s=o.online_reward1,a=o.online_reward2;this.is_offline&&(s=o.offline_reward1,a=o.offline_reward2),this.rateTxt.string=s[0][1]+"/m";for(var d=0,h=0;h<a.length;h++)a[h][0]==this.lightId&&(this.rateTxt2.string=6*a[h][1]+"/h",d=a[h][1]);d<=0?(this.iconBg2.active=!1,this.iconBg.position=new l(-40,-300,0)):(this.iconBg2.active=!0,this.iconBg.position=new l(-190,-300,0))}else this.rateTxt.string="0/m",this.rateTxt2.string="0/h";var c=GetLanguage(200465);2==t.type&&(c=GetLanguage(200466)),this.timeTitleTxt.string=c,this.timeTxt.string=i;var f="0",m="0";t.res_list[0]&&(f=t.res_list[0].num+"",t.res_list[0].num>1e3&&(f=t.res_list[0].num/1e3+"K"));var C=[];if(null!=t.item_list&&t.item_list.length>0)for(var g=0;g<t.item_list.length;g++)1001==t.item_list[g].gtid?(m=t.item_list[g].num+"",t.item_list[g].num>1e3&&(m=t.item_list[g].num/1e3+"K")):C.push(t.item_list[g]);this.awardTxt.string=f,this.awardTxt2.string=m;for(var T=[],v=[],x=0,_=C;x<_.length;x++){var A=_[x];2!=A.gtid?T.push(A):v.push(A)}if(T.length>1&&T.sort((function(t,i){return configGoods.getDataByKey(t.gtid).quality>=configGoods.getDataByKey(i.gtid).quality?-1:1})),v.length>0)for(var y,w=n(v);!(y=w()).done;){var S=y.value;T.unshift(S)}this.scrollEquipList.datas=T,C.length>0&&u.playSound("common_tanchu"),IS(L).GetShowBtn()?this.btnOk.getComponent(r).grayscale=!1:this.btnOk.getComponent(r).grayscale=!0,2==t.type&&(this.btnOk.getComponent(r).grayscale=!1)}},m.updateAdInfo=function(){var t=configAds.getDataByKey(v.AD_DUNGEON_INCOME),i=IS(_).getAdWatchCount(v.AD_DUNGEON_INCOME),n=IS(_).getAdRewardValue(v.AD_DUNGEON_INCOME);this.txtAdDesc.string=g.formatStrWithMirrorDeal(t.desc,n/3600),this.txtAdCount.string=c.formatStr("(%s/%s)",t.times-i,t.times),this.nextWatchTime=IS(_).getAdNextWatchTime(v.AD_DUNGEON_INCOME),this.updateAdCDShow()},m.onAdInfoUpdate=function(t){t==v.AD_DUNGEON_INCOME&&this.updateAdInfo()},m.onUpdate=function(t){null!=this.time&&(null==this.nextWatchTime||this.nextWatchTime<=0||(this.time=this.time+t,this.time>=1&&(this.updateAdCDShow(),this.time=0)))},m.updateAdCDShow=function(){if(this.nextWatchTime&&0!=this.nextWatchTime){var t=Math.max(0,this.nextWatchTime-p.serverTime);this.txtAdCD.node.active=t>0,this.txtAdCD.string=p.formatTimeForSecond(t)}else this.txtAdCD.node.active=!1},e}(T));var E=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).imgFrame=void 0,i.imgIcon=void 0,i.txtNum=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){this.imgFrame=C.findChildComponent(this.node,"imgFrame",r),this.imgIcon=C.findChildComponent(this.node,"imgIcon",r),this.txtNum=C.findChildComponent(this.node,"num",h)},e.onRender=function(t,i){var n=configGoods.getDataByKey(t.gtid),e=configColor.getDataByKey(n.quality);this.view.loadIcon(this.imgFrame,"icon_equip",e.path),this.view.loadIcon(this.imgIcon,n.icon_group,n.icon),this.txtNum.string=t.num+""},e.onItemClick=function(){},n}(m);e._RF.pop()}}}));
