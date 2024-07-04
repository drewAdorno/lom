System.register("chunks:///_virtual/SeasonShipSailorView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ObjectUtil.ts","./MessageView.ts","./SeasonDataCache.ts","./SeasonDefine.ts","./BaseSubView.ts"],(function(i){"use strict";var e,t,n,o,l,d,s,a,p,r,c,u,f,h,C,m;return{setters:[function(i){e=i.inheritsLoose,t=i.createForOfIteratorHelperLoose},function(i){n=i.cclegacy,o=i.Label,l=i.Button,d=i.RichText,s=i.sys,a=i.js,p=i.Sprite},function(i){r=i.default},function(i){c=i.default},null,function(i){u=i.default},function(i){f=i.default},function(i){h=i.SeasonDataCache},function(i){C=i.SeasonShipEventDefind},function(i){m=i.BaseSubView}],execute:function(){n._RF.push({},"e5f45WF+ThFVavKmBnk0o4R","SeasonShipSailorView",void 0);i("default",function(i){function n(){var e;return(e=i.call(this)||this).equipedItemList=[],e.txtUnlockNum=void 0,e.txtTips=void 0,e.nodeRule=void 0,e.nodeTip=void 0,e.name="SeasonShipSailorView",e.url="ui/module/season/SeasonShipSailorView",e}e(n,i);var m=n.prototype;return m.onInit=function(){var i=this;this.txtUnlockNum=this.findChildComponent("top/nodeTips/num",o);for(var e=1;e<6;e++){var t=this.findChild("bottom/nodeItem/node"+e),n={petNode:r.findChild(t,"pet"),skillNode:r.findChild(t,"skill"),lock:r.findChild(t,"lock"),index:e};this.addComponentCallbackListener(n.petNode,l.EventType.CLICK,(function(){uiMgr.openView("SeasonShipCabinEditView")})),this.addComponentCallbackListener(n.skillNode,l.EventType.CLICK,(function(){uiMgr.openView("SeasonShipCabinEditView")})),this.addComponentCallbackListener(r.findChild(n.petNode,"empty"),l.EventType.CLICK,(function(){uiMgr.openView("SeasonShipCabinEditView")})),this.addComponentCallbackListener(r.findChild(n.skillNode,"empty"),l.EventType.CLICK,(function(){uiMgr.openView("SeasonShipCabinEditView")})),this.equipedItemList.push(n)}this.nodeRule=this.findChild("top/nodeTips/btnRule"),this.nodeTip=this.findChild("top/tips");var s=this.findChild("top/tips/mask");this.nodeTip.active=!1,this.addComponentCallbackListener(this.nodeRule,l.EventType.CLICK,(function(){i.nodeTip.active=!i.nodeTip.active})),this.addComponentCallbackListener(s,l.EventType.CLICK,(function(){i.nodeTip.active=!1})),this.txtTips=this.findChildComponent("top/tips/txt",d),this.txtTips.string=GetLanguage(204089)},m.registerUpdateHandler=function(){this.addEvent(C.TYPE_SHIP_ROOM_INFO_UPDATE,this.refreshAll,this)},m.onAfterOpen=function(){this.refreshAll()},m.refreshAll=function(){this.refreshUnlockNum(),this.showEquipedItem()},m.showEquipedItem=function(){for(var i,e=this,n=IS(h).shipRoominfo,d=function(){var d=i.value,h=configSeason_cabin.getDataByKey(d.index);r.findChildComponent(d.lock,"Node",o).string=(s.uiMirror?c:a).formatStr(GetLanguage(204103),h.condition);for(var C,m=void 0,v=t(null!=(k=n.room_list)?k:[]);!(C=v()).done;){var k,S=C.value;if(S.room_id==d.index){m=S;break}}u.isEmpty(m)||0==m.state?(d.lock.active=!0,e.addComponentCallbackListener(d.lock,l.EventType.CLICK,(function(){f.showFlyTip((s.uiMirror?c:a).formatStr(GetLanguage(204103),h.condition))}))):d.lock.active=!1;var g=r.findChild(d.skillNode,"itemGrid"),y=r.findChildComponent(g,"imgFrame",p),_=r.findChildComponent(g,"imgIcon",p),I=r.findChildComponent(g,"num",o);if(r.findChild(d.skillNode,"rp").active=!1,m&&0!=m.equip_skill.length){r.findChild(d.skillNode,"empty").active=!1;var N=m.equip_skill[0].skill_id,L=configSkill.getDataByKey(N);e.loadIcon(y,"icon_skill",a.formatStr("common_ICON_jinengkuang0%s",L.quality)),e.loadIcon(_,"icon_skill",L.icon),I.string=c.formatStr("Lv.##1",m.equip_skill[0].skill_lv)}else{var T,b,w;if(r.findChild(d.skillNode,"empty").active=!0,e.loadIcon(y,"icon_skill",""),m)r.findChild(d.skillNode,"rp").active=0==(null!=(T=null==(b=m)||null==(w=b.equip_skill)?void 0:w.length)?T:0);else r.findChild(d.skillNode,"rp").active=!1}var E=r.findChild(d.petNode,"itemGrid"),V=r.findChildComponent(E,"imgFrame",p),q=r.findChildComponent(E,"imgIcon",p),x=r.findChildComponent(E,"num",o);if(r.findChild(d.petNode,"rp").active=!1,m&&0!=m.equip_pet.length){r.findChild(d.petNode,"empty").active=!1;var K=m.equip_pet[0].pet_id,R=configPet.getDataByKey(K);e.loadIcon(V,"icon_pet",configColor.getDataByKey(R.quality).path),e.loadIcon(q,"icon_pet",R.icon),x.string=c.formatStr("Lv.##1",m.equip_pet[0].level)}else{var B,D,U;if(r.findChild(d.petNode,"empty").active=!0,e.loadIcon(V,"icon_pet",""),m)r.findChild(d.petNode,"rp").active=0==(null!=(B=null==(D=m)||null==(U=D.equip_pet)?void 0:U.length)?B:0);else r.findChild(d.petNode,"rp").active=!1}},C=t(this.equipedItemList);!(i=C()).done;)d()},m.refreshUnlockNum=function(){for(var i,e,n,o=null!=(i=null==(e=IS(h).shipRoominfo)?void 0:e.room_list)?i:[],l=0,d=t(o);!(n=d()).done;){1==n.value.state&&(l+=1)}this.txtUnlockNum.string=l+"/5"},m.onBeforeClose=function(){},m.onDestroy=function(){},n}(m));n._RF.pop()}}}));

