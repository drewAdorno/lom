System.register("chunks:///_virtual/SeasonShipEquipEditView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./StringUtil.ts","./BaseView.ts","./ItemIcon.ts","./ObjectUtil.ts","./MessageView.ts","./SeasonControl.ts","./SeasonDefine.ts","./SeasonShipModel.ts"],(function(t){"use strict";var i,n,e,o,r,a,s,u,h,d,c,p,g,l,m,f,I,E;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Button,o=t.UITransform,r=t.js,a=t.Sprite,s=t.Label,u=t.Vec3,h=t.sys},function(t){d=t.default},function(t){c=t.default},function(t){p=t.BaseView},function(t){g=t.IconAseetType},function(t){l=t.default},function(t){m=t.default},function(t){f=t.default},function(t){I=t.SeasonShipEventDefind},function(t){E=t.SeasonShipModel}],execute:function(){var v;t("ShipEquipChangeType",void 0),n._RF.push({},"52e82XuM0pELIJA8zr5M/5Y","SeasonShipEquipEditView",void 0),function(t){t[t.UPDATE=1]="UPDATE",t[t.ADD=2]="ADD",t[t.DELETE=3]="DELETE"}(v||(v=t("ShipEquipChangeType",{})));for(var C=[10001,10002,10003],q=t("attrToIndex",{}),S=0;S<C.length;S++)q[C[S]]=S;t("default",function(t){function n(){var i;return(i=t.call(this)||this).nodeContent=void 0,i.nodeWearing=void 0,i.nodeCurrent=void 0,i.utContent=void 0,i.utWearing=void 0,i.utCurrent=void 0,i.utInfoWearing=void 0,i.utInfoCurrent=void 0,i.wearingEquipInfo=void 0,i.currentEquipInfo=void 0,i.btnSold=void 0,i.btnWear=void 0,i.currentEquipId=void 0,i.wearingEquipId=void 0,i.isAllHigher=void 0,i.oriBottomPosY=void 0,i.waitingBack=void 0,i.waitTimer=void 0,i.oriWearEquipId=void 0,i.curLocation=void 0,i.canWear=!0,i.name="SeasonShipEquipEditView",i.url="ui/module/season/SeasonShipEquipEditView",i.poolTime=3e3,i}i(n,t);var p=n.prototype;return p.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.onMaskClick()})),this.nodeContent=this.findChild("content"),this.utContent=this.nodeContent.getComponent(o),this.nodeWearing=this.findChild("content/wearing"),this.utWearing=this.nodeWearing.getComponent(o),this.nodeCurrent=this.findChild("content/current"),this.utCurrent=this.nodeCurrent.getComponent(o),this.wearingEquipInfo=this.initEquipItem("wearing"),this.currentEquipInfo=this.initEquipItem("current"),this.btnSold=this.findChild("content/current/btnParent/btnSold"),this.addComponentCallbackListener(this.btnSold,e.EventType.CLICK,(function(){t.onSoldClick()})),this.btnWear=this.findChild("content/current/btnParent/btnWear"),this.addComponentCallbackListener(this.btnWear,e.EventType.CLICK,(function(){t.canWear&&(t.onWearClick(),t.canWear=!1,t.addTimer(.2,1,(function(){t.canWear=!0})))}));var n=this.nodeContent.position,r=this.utContent.height;this.oriBottomPosY=n.y-r},p.initEquipItem=function(t){for(var i={imgFrame:this.findChildComponent(r.formatStr("content/%s/head/imgFrame",t),a),imgIcon:this.findChildComponent(r.formatStr("content/%s/head/imgIcon",t),a),txtLevel:this.findChildComponent(r.formatStr("content/%s/head/txtLevel",t),s),txtName:this.findChildComponent(r.formatStr("content/%s/content/txtName",t),s),nodeSpe:this.findChild(r.formatStr("content/%s/content/base/attrs/specAttr",t)),AttrItems:{normalAttrItems:[],speAttrItems:[]}},n=0;n<2;n++){var e=this.findChild(r.formatStr("content/%s/content/base/attrs/baseAttr/baseAttrItem%s",t,n+1)),o={txtName:d.findChildComponent(e,"txtName",s),txtValue:d.findChildComponent(e,"txtValue",s),imgFlag:d.findChildComponent(e,"imgFlag",a),node:e};i.AttrItems.normalAttrItems.push(o)}for(var u=0;u<2;u++){var h=this.findChild(r.formatStr("content/%s/content/base/attrs/specAttr/specAttrItem%s",t,u+1)),c={txtName:d.findChildComponent(h,"txtName",s),txtValue:d.findChildComponent(h,"txtValue",s),imgFlag:d.findChildComponent(h,"imgFlag",a),node:h};i.AttrItems.speAttrItems.push(c)}return i},p.registerUpdateHandler=function(){this.addEvent(I.SHIP_EQUIP_LIST_UPDATE,this.onEquipListUpdate,this)},p.onAfterOpen=function(){if(this.canWear=!0,this.currentEquipId=this.openArgs[0]||0,0!=this.currentEquipId){var t=IS(E).getEquipInfoByEquipId(this.currentEquipId);if(null!=t){var i=configSeason_equipment.getDataByKey(t.config_id);this.curLocation=i.part;var n=IS(E).getEquipByLocation(this.curLocation),e=l.isEmpty(n);if(e)this.wearingEquipId=0;else if(this.wearingEquipId=n.equip_id,this.wearingEquipId==this.currentEquipId)return;this.btnSold.active=!e,this.oriWearEquipId=this.wearingEquipId,this.updateEquipInfos()}}},p.updateEquipInfos=function(){if(0==this.currentEquipId)return this.tryShowEquipChange(),void this.close();this.isAllHigher=!1;var t,i,n=this.showEquipInfo(this.wearingEquipInfo,this.wearingEquipId,this.nodeWearing,!1),e=this.showEquipInfo(this.currentEquipInfo,this.currentEquipId,this.nodeContent,!0);this.utInfoWearing=this.findChildComponent("content/wearing/content",o),this.utInfoCurrent=this.findChildComponent("content/current/content",o),"hide"==n.status?(i=0,t=-9.5):(this.utInfoWearing.height=170+(n.randAttr>0?30*n.randAttr+30:0),i=this.utInfoWearing.height+92,this.utWearing.height=i,t=-9.5-i-6);var r=this.nodeCurrent.getPosition();this.nodeCurrent.setPosition(new u(r.x,t,r.z)),this.utInfoCurrent.height=170+(e.randAttr>0?30*e.randAttr+30:0);var a=191+this.utInfoCurrent.height;this.utCurrent.height=a;var s=9.5+i+6+a+24.5;this.utContent.height=s;var h=this.oriBottomPosY+s,d=this.nodeContent.position;this.nodeContent.setPosition(new u(d.x,h,d.z))},p.showEquipInfo=function(t,i,n,e){if(0==i)return n.active=!1,{status:"hide"};n.active=!0;var o,r=IS(E).getEquipInfoByEquipId(i),a=configSeason_equipment.getDataByKey(r.config_id),s={},u={},d=[];if(1==e&&(o=IS(E).getEquipInfoByEquipId(this.wearingEquipId),!l.isEmpty(o))){for(var p=0;p<o.base_attr.length;p++){var m=o.base_attr[p];s[m.k]=m.v}d=o.rand_attr||[];for(var f=0;f<d.length;f++){var I=d[f];u[I.k]=I.v}}var v=IS(E).getEquipNameShowByEquipConfigId(r.config_id);t.txtName.string=v.name,t.txtName.color=v.color,this.loadIcon(t.imgIcon,a.atlas,a.icon,null,g.ICON_SPRITE),this.loadIcon(t.imgFrame,"icon_equip",configColor.getDataByKey(a.quality).path),t.txtLevel.string=c.formatStr(h.uiMirror?"##1.Lv":"Lv.##1",r.equip_lv);var C=r.base_attr;C.sort((function(t,i){return q[t.k]<q[i.k]?-1:1}));for(var S,w,_=!0,y=!0,A=0;A<2;A++){var L=t.AttrItems.normalAttrItems[A],T=C[A];if(l.isEmpty(T))L.node.active=!1;else{L.node.active=!0,S=T.k,w=T.v;var x=configAttribute.getDataByKey(S);L.txtName.string=x.name;var B=1==x.num_type?"":"%";if(printLogErr("=============",B),2==x.show_type?L.txtValue.string=c.formatStr("+##1",c.GetNumString(w/100))+B:3==x.show_type?L.txtValue.string=c.GetNumString(Math.floor(w/100)/100):L.txtValue.string=c.formatStr("+##1",c.GetNumString(w))+B,0==e)L.imgFlag.node.active=!1,y=!1;else if(l.isEmpty(s))L.imgFlag.node.active=!0,this.loadIcon(L.imgFlag,"common","common_ui_tisheng"),y=!1;else{var b=s[S]||0;L.imgFlag.node.active=b!=w||!1,this.loadIcon(L.imgFlag,"common",w>=b?"common_ui_tisheng":"common_ui_xiajiang"),w<b&&(_=!1),w!=b&&(y=!1)}}}var W=r.rand_attr||[];t.nodeSpe.active=W.length>0;for(var k=0;k<2;k++){var P=t.AttrItems.speAttrItems[k],F=W[k];if(l.isEmpty(F))P.node.active=!1;else{P.node.active=!0,S=F.k,w=F.v;var D=configAttribute.getDataByKey(S);P.txtName.string=D.name;var N=1==D.num_type?"":"%";if(2==D.show_type?P.txtValue.string=c.formatStr("+##1##2",c.GetNumString(w/100),N):3==D.show_type?P.txtValue.string=c.GetNumString(Math.floor(w/100)/100):P.txtValue.string=c.formatStr("+##1##2",c.GetNumString(w),N),0==e)P.imgFlag.node.active=!1;else if(u[S]){var V=u[S];P.imgFlag.node.active=V!=w||!1,this.loadIcon(P.imgFlag,"common",w>=V?"common_ui_tisheng":"common_ui_xiajiang")}else P.imgFlag.node.active=!1}}return 1==e&&(this.isAllHigher=!y&&_),{status:"show",randAttr:W.length}},p.onBeforeClose=function(){this.curLocation=0,this.oriWearEquipId=0,this.wearingEquipId=0,this.currentEquipId=0,this.waitingBack=!1},p.tryShowEquipChange=function(){var t=IS(E).getEquipByLocation(this.curLocation);(t?t.equip_id:0)!=this.oriWearEquipId&&normalEvent.emit(I.SHIP_EQUIP_TRY_PLAY_EFFECT,this.curLocation)},p.onDestroy=function(){},p.onEquipListUpdate=function(t){if(t==v.UPDATE){this.clearTimer(),this.waitingBack=!1;var i=IS(E).getEquipByLocation(this.curLocation),n=i?i.equip_id:0;if(this.wearingEquipId!=n){var e=this.currentEquipId;this.currentEquipId=this.wearingEquipId,this.wearingEquipId=e,this.updateEquipInfos()}else this.updateEquipInfos()}},p.onMaskClick=function(){this.tryShowEquipChange(),this.close()},p.onSoldClick=function(){var t=this;if(!this.waitingBack)return 0==this.isAllHigher?(IS(f).reqShipEquipSell([this.currentEquipId]),this.tryShowEquipChange(),void this.close()):void m.showBoxTip({tip:GetLanguage(200269),title:GetLanguage(200048),ensure:GetLanguage(200054),cancel:GetLanguage(200053),exchange:!0,func:function(i){"type_yes"==i&&(IS(f).reqShipEquipSell([t.currentEquipId]),t.tryShowEquipChange(),t.close())}})},p.onWearClick=function(){var t=this;if(!this.waitingBack){IS(f).reqShipEquipWear(this.currentEquipId),this.waitingBack=!0,this.clearTimer(),this.waitTimer=this.addTimer(1,1,(function(){t.waitingBack=!1})),0==this.wearingEquipId&&(normalEvent.emit(I.SHIP_EQUIP_TRY_PLAY_EFFECT,this.curLocation),this.close());var i=IS(E).getEquipByLocation(this.curLocation);l.isEmpty(i)&&IS(E).getAutoOpen()&&normalEvent.emit(I.TYPE_SHIP_EQUIP_BUILD_START)}},p.clearTimer=function(){this.waitTimer&&(this.removeTimer(this.waitTimer),this.waitTimer=null)},n}(p));n._RF.pop()}}}));
