System.register("chunks:///_virtual/ParkingCrossNoteView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GuildPinItem.ts","./UIList.ts","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./ParkingControl.ts","./ParkingDefine.ts","./StringUtil.ts","./BaseView.ts"],(function(t){"use strict";var n,e,i,o,s,r,a,l,u,d,c,f,h,g;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,i=t.Button,o=t.ScrollView,s=t.RichText,r=t.Label},function(t){a=t.GuildPinItem},function(t){l=t.ListItem},function(t){u=t.default},function(t){d=t.default},null,function(t){c=t.default},function(t){f=t.ParkingEventDefine},function(t){h=t.default},function(t){g=t.BaseView}],execute:function(){e._RF.push({},"ea9eeouA+9JS5xs8orsjIFF","ParkingCrossNoteView",void 0);t("default",function(t){function e(){var n;return(n=t.call(this)||this).reportList=void 0,n.name="ParkingCrossNoteView",n.url="ui/module/parking/ParkingCrossNoteView",n.poolTime=3e3,n}n(e,t);var s=e.prototype;return s.onInit=function(){var t=this,n=this.findChild("root/content/btnClose");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){t.close()}));var e=this.findChildComponent("root/content/scroll",o);this.reportList=this.addUIList(e,p,!0)},s.registerUpdateHandler=function(){this.addEvent(f.PARKING_CROSS_REFRESH_RANK_INFO,this.onShowLog,this)},s.onAfterOpen=function(){IS(c).reqCrossParkRank()},s.onShowLog=function(t){this.reportList.datas=t.log_list},s.onBeforeClose=function(){},s.onDestroy=function(){},e}(g));var p=function(t){function e(){for(var n,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))||this).desc=void 0,n.time=void 0,n.nodeFlag=void 0,n}n(e,t);var i=e.prototype;return i.onInit=function(){this.desc=u.findChildComponent(this.node,"txtName",s),this.time=u.findChildComponent(this.node,"txtTime",r),this.nodeFlag=new a(this.view,u.findChild(this.node,"GuildPinItem"))},i.onRender=function(t,n){this.desc.string=h.formatStr(GetLanguage(203830),t.new_server,t.old_server,t.park_id%100),this.time.string=d.formatDate(d.ServerDate(1e3*t.happen_time),"yyyy/MM/dd\nhh:mm:ss"),this.nodeFlag.SetItem(t.guild_flag)},e}(l);e._RF.pop()}}}));
