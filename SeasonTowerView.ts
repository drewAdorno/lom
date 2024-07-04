System.register("chunks:///_virtual/SeasonTowerView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ObjectUtil.ts","./BagDefine.ts","./BagModel.ts","./SeasonControl.ts","./SeasonDataCache.ts","./SeasonDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,s,r,a,d,h,l,f,u,c,v,p,m,g,S,C,x,I,b,y;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){i=t.cclegacy,o=t.Button,s=t.Vec2,r=t.ProgressBar,a=t.Label,d=t.ScrollView,h=t.js,l=t.sys,f=t.Sprite},function(t){u=t.ListItem},function(t){c=t.RedPointType},function(t){v=t.RedPointMgr},function(t){p=t.default},function(t){m=t.default},null,function(t){g=t.default},function(t){S=t.BagEventDefine},function(t){C=t.BagModel},function(t){x=t.default},function(t){I=t.SeasonDataCache},function(t){b=t.SeasonShipEventDefind},function(t){y=t.BaseView}],execute:function(){i._RF.push({},"5def3m0bHZBQJpTgZhGc+dT","SeasonTowerView",void 0);var L=[270005],_=(t("default",function(t){function i(){var e;return(e=t.call(this)||this).nodeResParent=void 0,e.nodeResItem=void 0,e.resItems=void 0,e.txtLevel=void 0,e.txtLevelDesc=void 0,e.pbExp=void 0,e.btnOne=void 0,e.btnTen=void 0,e.btnTop=void 0,e.effUIList=void 0,e.txtLevelBase=void 0,e.txtLevelNext=void 0,e.imgNext=void 0,e.name="SeasonTowerView",e.url="ui/module/season/SeasonTowerView",e}e(i,t);var l=i.prototype;return l.onInit=function(){var t=this,e=this.findChild("bottom/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()})),this.btnOne=this.findChild("bottom/button/btnOne"),this.btnOne.active=!1,this.addComponentCallbackListener(this.btnOne,o.EventType.CLICK,(function(){t.onClickOne()})),this.btnTen=this.findChild("bottom/button/btnTen"),IS(v).addRedPoint("Season/Tower/build",this.btnTen,new s(90,30),c.Dot),this.addComponentCallbackListener(this.btnTen,o.EventType.CLICK,(function(){t.onClickTen()})),this.btnTop=this.findChild("bottom/button/btnTop"),this.pbExp=this.findChildComponent("bottom/nodeProgress/ProgressBar",r),this.txtLevel=this.findChildComponent("bottom/nodeProgress/ProgressBar/Node",a),this.txtLevelDesc=this.findChildComponent("bottom/nodeProgress/ProgressBar/txtDesc",a),this.txtLevelBase=this.findChildComponent("bottom/nodeChange/Node/txtLevelBase",a),this.txtLevelNext=this.findChildComponent("bottom/nodeChange/Node/txtLevelNext",a),this.imgNext=this.findChild("bottom/nodeChange/Node/Sprite");var n=this.findChildComponent("bottom/nodeChange-001/ScrollView",d);this.effUIList=this.addUIList(n,_),this.initResShow()},l.initResShow=function(){var t=this;this.nodeResParent=this.findChild("bottom"),this.nodeResItem=this.findChild("bottom/resItem"),this.nodeResItem.active=!1,this.resItems=new Array;for(var e=function(e){var n=nodeInstantiate.instantiate(t.nodeResItem),i=L[e];t.addComponentCallbackListener(n,o.EventType.CLICK,(function(){IS(C).OpenItemTips(i,p.findChild(n,"txtNum"))})),n.parent=t.nodeResParent,n.active=!0;var s=p.findChildComponent(n,"imgIcon",f),r=configGoods.getDataByKey(i);t.loadIcon(s,"icon_item",r.icon),t.resItems.push({node:n,txtNum:p.findChildComponent(n,"txtNum",a),goodsGtid:i})},n=0;n<L.length;n++)e(n)},l.registerUpdateHandler=function(){this.addEvent(S.GOODS_INFO_UPDATE,this.updateResShow,this),this.addEvent(b.TYPE_SHIP_INFO_UPDATE,this.refreshAll,this)},l.updateResShow=function(){this.checkOneKeyShow();for(var t=0;t<this.resItems.length;t++)this.resItems[t].txtNum.string=m.GetNumString(IS(C).getGoodsCountByGoodsGtid(this.resItems[t].goodsGtid)),IS(I).checkTowerRP()},l.onClickOne=function(){IS(C).getGoodsCountByGoodsGtid(L[0])<1?uiMgr.openView("ItemGetWayView",L[0]):IS(x).reqShipStationUp(1)},l.onClickTen=function(){if(IS(C).getGoodsCountByGoodsGtid(L[0])<1)uiMgr.openView("ItemGetWayView",L[0]);else{var t=configSeason_station_level.getDataByKey(IS(I).station_level+1).expend[0][1];t-=IS(I).station_exp;var e=IS(C).getGoodsCountByGoodsGtid(L[0]),n=Math.min(e,t);IS(x).reqShipStationUp(n)}},l.onAfterOpen=function(){IS(x).reqShipInfo(),this.refreshAll()},l.refreshAll=function(){this.refreshLevelShow(),this.updateResShow()},l.refreshLevelShow=function(){this.txtLevel.string=IS(I).station_level+"";var t=configSeason_station_level.getDataByKey(IS(I).station_level),e=configSeason_station_level.getDataByKey(IS(I).station_level+1);if(null!=t){this.txtLevelBase.string=h.formatStr("%s%",m.GetNumString(t.attr[0][1]/100));var i=[];if(null!=e){this.btnTen.active=!0,this.btnTop.active=!1,this.txtLevelNext.node.active=!0,this.imgNext.active=!0,this.txtLevelNext.string=h.formatStr("%s%",m.GetNumString(e.attr[0][1]/100)),this.txtLevelDesc.string=IS(I).station_exp+"/"+e.expend[0][1],this.pbExp.progress=IS(I).station_exp/e.expend[0][1];for(var o,s=n(t.special_attr.entries());!(o=s()).done;){var r=o.value,a=r[0];r[1];i.push({base:t.special_attr[a],next:e.special_attr[a]})}}else{this.btnTen.active=!1,this.btnTop.active=!0,this.txtLevelNext.node.active=!1,this.imgNext.active=!1,this.txtLevelDesc.string="max",this.pbExp.progress=1;for(var d,l=n(t.special_attr.entries());!(d=l()).done;){var f=d.value,u=f[0];f[1];i.push({base:t.special_attr[u],next:{}})}}this.effUIList.datas=i}},l.checkOneKeyShow=function(){var t=p.findChild(this.btnTen,"txtNum"),e=p.findChild(this.btnTen,"txtRed"),n=p.findChildComponent(this.btnTen,"txtNum",a),i=IS(C).getGoodsCountByGoodsGtid(L[0]);if(e.active=0==i,t.active=0!=i,null!=configSeason_station_level.getDataByKey(IS(I).station_level+1)){var o=configSeason_station_level.getDataByKey(IS(I).station_level+1).expend[0][1];o-=IS(I).station_exp,n.string=i>=o?""+o:""+i}else n.string="1"},l.onBeforeClose=function(){},l.onDestroy=function(){},i}(y)),function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).txtBase=void 0,e.txtNext=void 0,e}e(n,t);var i=n.prototype;return i.onInit=function(){this.txtBase=p.findChildComponent(this.node,"name",a),this.txtNext=p.findChildComponent(this.node,"attr",a)},i.onRender=function(t,e){var n,i,o=t.base,s=t.next,r=configAttribute.getDataByKey(o[0]),a=1==r.num_type?"":"%";2==r.show_type?(n=m.formatStr(l.uiMirror?"##2##1+":"+##1##2",m.GetNumString(o[1]/100),a),i=m.formatStr(l.uiMirror?"##2##1+":"+##1##2",m.GetNumString(s[1]/100),a)):3==r.show_type?(n=m.formatStr(l.uiMirror?"##1+":"+##1",m.GetNumString(Math.floor(o[1]/100)/100)),i=m.formatStr(l.uiMirror?"##1+":"+##1",m.GetNumString(Math.floor(s[1]/100)/100))):(n=m.formatStr(l.uiMirror?"##2##1+":"+##1##2",m.GetNumString(o[1]),a),i=m.formatStr(l.uiMirror?"##2##1+":"+##1##2",m.GetNumString(s[1]),a)),this.txtBase.string=(l.uiMirror?m:h).formatStr(GetLanguage(204567),r.name,n),g.isEmpty(s)?this.txtNext.string="":this.txtNext.string=(l.uiMirror?m:h).formatStr(GetLanguage(204568),i)},n}(u));i._RF.pop()}}}));
