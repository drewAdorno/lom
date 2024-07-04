System.register("chunks:///_virtual/HorseCarnivalSelectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./index57.ts","./BagDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./HorseCarnivalControl.ts","./HorseCarnivalDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,a,c,s,r,l,f,d,u,v,h,p;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,a=t.js,c=t.Sprite,s=t.Label},function(t){r=t.default},null,function(t){l=t.GoodsType},function(t){f=t.default},function(t){d=t.ActivityEventDefine,u=t.ActivityType},function(t){v=t.default},function(t){h=t.HorseCarnivalDataCache},function(t){p=t.BaseView}],execute:function(){n._RF.push({},"a207f5h/s9A8r1QQijRt7Kt","HorseCarnivalSelectView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).itemList=[],e.lockNode=void 0,e.unlockNode=void 0,e.cfg=void 0,e.actType=0,e.name="HorseCarnivalSelectView",e.url="ui/module/horsecarnival/HorseCarnivalSelectView",e}e(n,t);var p=n.prototype;return p.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()})),this.lockNode=this.findChild("view/lock"),this.unlockNode=this.findChild("view/unlock");for(var i=function(e){var i=r.findChild(t.node,a.formatStr("view/item/item%s",e)),n={itemGo:i,select:r.findChild(i,"select"),icon:r.findChildComponent(i,"imgIcon",c),name:r.findChildComponent(i,"name",s),index:e};t.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.setSelect(e)})),t.itemList[e]=n},n=1;n<=3;n++)i(n)},p.registerUpdateHandler=function(){this.addEvent(d.OnHorseCarnivalUpdate,this.updateInfo,this)},p.onAfterOpen=function(){var t;this.actType=null!=(t=this.openArgs[0])?t:u.HorseCarnival;var e=IS(f).GetActivityInfo(this.actType),n=configMount_draw.getDatas();for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];if(a.type==e.type&&a.group_id==e.roundCfg.group_id&&1==a.is_jackpot){this.cfg=a;break}}for(var c=1;c<=3;c++)this.itemList[c].itemGo.active=!1;for(var s,r=i(this.cfg.reward_replace);!(s=r()).done;){var d=s.value,v=this.itemList[d[0]];v.itemGo.active=!0;var h=configGoods.getDataByKey(d[1][0]);if(h.type==l.Mount){var p=configMount.getDataByKey(h.effect[0]);v.name.string=p.name,this.loadIcon(v.icon,"icon_mount",p.icon),v.select.active=!1}else if(h.type==l.Artifact){var m=configArtifact.getDataByKey(h.effect[0]);v.name.string=m.name,this.loadIcon(v.icon,"icon_artifact",m.icon),v.select.active=!1}else if(h.type==l.Wing){var y=configBack_decoration.getDataByKey(h.effect[0]);v.name.string=y.name,this.loadIcon(v.icon,"icon_item",y.icon_small),v.select.active=!1}else h.type!=l.Fate&&20!=h.type||(v.name.string=h.name,this.loadIcon(v.icon,h.icon_group,h.icon),v.select.active=!1)}this.updateInfo()},p.onBeforeClose=function(){},p.onDestroy=function(){},p.setSelect=function(t){this.lockNode.active||IS(v).send_24_66(this.actType,this.cfg.id,t)},p.updateInfo=function(){var t,e,i=null!=(t=null==(e=IS(h).getInfo(this.actType).choose_list[this.cfg.id])?void 0:e[1])?t:0;for(var n in this.lockNode.active=0==i,this.unlockNode.active=i>0,this.itemList)if(this.itemList.hasOwnProperty(n)){var o=this.itemList[n];o.select.active=i==o.index}},n}(p));n._RF.pop()}}}));
