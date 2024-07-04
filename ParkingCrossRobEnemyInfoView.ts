System.register("chunks:///_virtual/ParkingCrossRobEnemyInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./MessageView.ts","./FriendControl.ts","./RoleDataCache.ts","./RoleDefine.ts","./ParkingControl.ts","./ParkingDataCache.ts","./ParkingDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,s,a,r,l,d,h,f,c,u,v,g,_,m,C,R,I,L;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.ScrollView,a=t.Label,r=t.Sprite,l=t.ProgressBar},function(t){d=t.ListItem},function(t){h=t.default},function(t){f=t.default},function(t){c=t.default},null,function(t){u=t.default,v=t.TYPE_YES},function(t){g=t.default},function(t){_=t.RoleDataCache},function(t){m=t.PlayerAttr},function(t){C=t.default},function(t){R=t.ParkingDataCache},function(t){I=t.ParkingEventDefine},function(t){L=t.BaseView}],execute:function(){n._RF.push({},"838c0I3snNG8bnqeZFuPiIS","ParkingCrossRobEnemyInfoView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).playerList=void 0,e.btnCancel=void 0,e.btnJoin=void 0,e.showList=void 0,e.name="ParkingCrossRobEnemyInfoView",e.url="ui/module/parking/ParkingCrossRobEnemyInfoView",e.poolTime=3e3,e}e(n,t);var r=n.prototype;return r.onInit=function(){var t=this,e=this.findChild("content/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()}));var i=this.findChildComponent("content/ScrollView",s);this.playerList=this.addUIList(i,p,!0),this.btnCancel=this.findChild("content/btnCancel"),this.addComponentCallbackListener(this.btnCancel,o.EventType.CLICK,(function(){1==t.checkSelfStatus()?u.showFlyTip(GetLanguage(201953)):u.showBoxTip({title:GetLanguage(201384),tip:GetLanguage(201952),func:function(t){t==v&&IS(C).reqCrossParkBattleJoin(1,IS(R).master_id,0)}})})),this.btnJoin=this.findChild("content/btnJoin"),this.addComponentCallbackListener(this.btnJoin,o.EventType.CLICK,(function(){IS(R).roleState[1].freeze_time>c.serverTime?u.showFlyTip(GetLanguage(201955)):u.showBoxTip({title:GetLanguage(201384),tip:GetLanguage(201954),func:function(t){t==v&&IS(C).reqCrossParkBattleJoin(1,IS(R).master_id,1)}})}))},r.registerUpdateHandler=function(){this.addEvent(I.PARKING_CROSS_FIGHTING_QUEUE_LIST,this.onListUpdate,this),this.addEvent(I.PARKING_CROSS_STATUS_INFO,this.checkBtnShow,this)},r.onAfterOpen=function(){var t=this;this.findChildComponent("content/txtDesc1",a).string=GetLanguage(204837),IS(C).reqCrossParkBattleQueue(1,IS(R).master_id),this.addTimer(1,-1,(function(){t.playerList.updateAll()}))},r.onListUpdate=function(t){this.playerList.datas=t.list,this.showList=t.list,IS(C).reqCrossParkRoleState(1)},r.checkBtnShow=function(){var t=IS(R);t.roleState[1].park_id==t.master_id?(this.btnJoin.active=!1,this.btnCancel.active=!0):(this.btnJoin.active=!0,this.btnCancel.active=!1),t.serv_id==IS(_).GetServerId()&&(this.btnJoin.active=!1,this.btnCancel.active=!1)},r.checkSelfStatus=function(){for(var t,e,n,o=null,s=i(this.showList);!(n=s()).done;){for(var a,r=n.value,l=i(r.info_list.ks);!(a=l()).done;){if(a.value.k==m.ROLE_ATTR_ID){o=r;break}}if(o)break}return null!=(t=null==(e=o)?void 0:e.status)?t:0},r.onBeforeClose=function(){},r.onDestroy=function(){},n}(L));var p=function(t){function n(){for(var e,i,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(i=t.call.apply(t,[this].concat(o))||this).txtRank=void 0,i.txtName=void 0,i.txtLevel=void 0,i.txtPower=void 0,i.nodeBuff=void 0,i.imgHead=void 0,i.imgHeadFrame=void 0,i.pbHP=void 0,i.txtPb=void 0,i.imgBg=void 0,i.roleInfo=((e={})[m.ROLE_ATTR_LVL]=0,e[m.ROLE_ATTR_ID]=0,e[m.ROLE_ATTR_NAME]="",e[m.ROLE_ATTR_SERVER]=0,e[m.ROLE_ATTR_CUR_POWER]=0,e[m.ROLE_ATTR_POWER_SHOW]=0,e[m.ROLE_ATTR_HEAD_ID]=0,e[m.ROLE_ATTR_HEAD_FRAME_ID]=0,e[m.ROLE_ATTR_HEAD_URL]="",e),i}e(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.txtRank=h.findChildComponent(this.node,"txtIndex",a),this.txtName=h.findChildComponent(this.node,"txtName",a),this.txtLevel=h.findChildComponent(this.node,"txtLevel",a),this.txtPower=h.findChildComponent(this.node,"txtFightPower",a),this.imgHead=h.findChildComponent(this.node,"head",r),this.imgHeadFrame=h.findChildComponent(this.node,"imgHeadFrame",r),this.pbHP=h.findChildComponent(this.node,"ProgressBar",l),this.txtPb=h.findChildComponent(this.node,"ProgressBar/num",a),this.nodeBuff=h.findChild(this.node,"SpecialBuff"),this.imgBg=h.findChildComponent(this.node,"imgBg",r);var e=h.findChild(this.node,"clickNode");this.view.addComponentCallbackListener(e,o.EventType.CLICK,(function(){IS(g).reqOtherRoleNotice(t.roleInfo[m.ROLE_ATTR_ID])}))},s.onRender=function(t,e){var n=t.info_list.kv,o=t.info_list.ks;if(null!=n)for(var s,r=i(n);!(s=r()).done;){var l=s.value;this.roleInfo[l.k]=l.v}if(null!=o)for(var d,u=i(o);!(d=u()).done;){var v=d.value;this.roleInfo[v.k]=v.s}for(var g,C=0,R=0,I=0,L=i(t.ext);!(g=L()).done;){var p=g.value;1==p.k?C=p.v:2==p.k?R=p.v:3==p.k&&(I=p.v)}if(!configPark_pvp_debuff.getDataByKeys("num",R,"type",3)||0==R&&I<=c.serverTime)this.nodeBuff.active=!1;else{var T,E=h.findChildComponent(this.nodeBuff,"nodeTime/txtTime",a);T=I>c.serverTime?c.getTimeLeft(I-c.serverTime):c.getTimeLeft(R-c.serverTime),E.string=T}this.txtPb.string=(C/100).toFixed(2)+"%",this.pbHP.progress=C/1e4,this.txtRank.string=1==t.status?"":t.order,this.txtName.string="[s"+this.roleInfo[m.ROLE_ATTR_SERVER]+"]"+this.roleInfo[m.ROLE_ATTR_NAME],this.txtLevel.string="Lv."+this.roleInfo[m.ROLE_ATTR_LVL],this.txtPower.string=f.GetNumString(this.roleInfo[m.ROLE_ATTR_POWER_SHOW]);var k=this.roleInfo[m.ROLE_ATTR_HEAD_FRAME_ID];if(null!=k)if(this.view.loadRemoteIcon(this.roleInfo[m.ROLE_ATTR_HEAD_URL],this.imgHead),k>0){var S=configAvatar_frame.getDataByKey(k);this.view.loadIcon(this.imgHeadFrame,"icon_frame",S.icon),this.imgHeadFrame.node.active=!0}else this.imgHeadFrame.node.active=!1;1==t.status?this.view.loadIcon(this.imgBg,"parking","gg_ui_red02"):this.roleInfo[m.ROLE_ATTR_SERVER]==IS(_).GetServerId()?this.view.loadIcon(this.imgBg,"parking","gg_ui_blue01"):this.roleInfo[m.ROLE_ATTR_ID]==IS(_).GetRoleId()?this.view.loadIcon(this.imgBg,"parking","gg_ui_green01"):this.view.loadIcon(this.imgBg,"parking","gg_ui_red01"),h.findChild(this.node,"combat").active=1==t.status},s.onItemClick=function(){},n}(d);n._RF.pop()}}}));

