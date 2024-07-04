System.register("chunks:///_virtual/ActivityValentineSelectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,o,a,l,r,d,c,h,u,f,v,m;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,s=t.ScrollView,o=t.Sprite,a=t.Label},function(t){l=t.ListItem},function(t){r=t.default},function(t){d=t.default},function(t){c=t.default},function(t){h=t.default},null,function(t){u=t.default},function(t){f=t.default},function(t){v=t.ActivityEventDefine},function(t){m=t.BaseView}],execute:function(){e._RF.push({},"8a84b8M4BtN8ZPPgJ2WbxRy","ActivityValentineSelectView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).scroll=void 0,i.noList=void 0,i.askList=[],i.name="ActivityValentineSelectView",i.url="ui/module/valentine/ActivityValentineSelectView",i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this,i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.noList=this.findChild("view/noList");var e=this.findChildComponent("view/list",s);this.scroll=this.addUIList(e,p)},o.registerUpdateHandler=function(){this.addEvent(v.OnActivityQixiAskList,this.updateInfo,this),this.addEvent(v.OnActivityQixiAsk,this.updateAsk,this)},o.onAfterOpen=function(){d.set("ValentineAskListTime",h.serverTime),IS(f).send_24_27()},o.onBeforeClose=function(){},o.onDestroy=function(){},o.updateInfo=function(t){t&&(this.askList=t.ask_list),null==this.askList||0==this.askList.length?(this.noList.active=!0,this.scroll.node.active=!1):(this.noList.active=!1,this.scroll.node.active=!0,this.scroll.datas=this.askList)},o.updateAsk=function(t){for(var i=0;i<this.askList.length;i++)if(this.askList[i].role_id==t.role_id){this.askList.splice(i,1);break}this.updateInfo()},e}(m));var p=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,i.imgIcon=void 0,i.txtName=void 0,i.txtPower=void 0,i.txtState=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.imgFrame=r.findChildComponent(this.node,"imgFrame",o),this.imgIcon=r.findChildComponent(this.node,"imgFrame/imgIcon",o),this.txtName=r.findChildComponent(this.node,"name",a),this.txtPower=r.findChildComponent(this.node,"power",a),this.txtState=r.findChildComponent(this.node,"state",a);var i=r.findChild(this.node,"btnAgree");this.view.addComponentCallbackListener(i,n.EventType.CLICK,(function(){u.showBoxTip({tip:GetLanguage(200067),title:GetLanguage(200048),ensure:GetLanguage(200053),cancel:GetLanguage(200054),func:function(i){"type_yes"==i&&IS(f).send_24_28(t.data.role_id,1)}})}));var e=r.findChild(this.node,"btnRefuse");this.view.addComponentCallbackListener(e,n.EventType.CLICK,(function(){IS(f).send_24_28(t.data.role_id,2)}))},s.onRender=function(t,i){this.txtName.string=t.name,this.txtPower.string=c.GetNumString(t.power),1==t.offline_time?this.txtState.string=GetLanguage(200057):this.txtState.string=h.getDateDiff(t.offline_time),this.view.loadRemoteIcon(t.head.url,this.imgIcon)},e}(l);e._RF.pop()}}}));

