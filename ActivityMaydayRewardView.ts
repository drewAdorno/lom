System.register("chunks:///_virtual/ActivityMaydayRewardView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BaseView.ts"],(function(t){"use strict";var e,i,a,n,o,r,d;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,a=t.Button,n=t.Sprite,o=t.Label,r=t.js},null,function(t){d=t.BaseView}],execute:function(){i._RF.push({},"28c41GlpxFIILHo46bE8Q/4","ActivityMaydayRewardView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).imgIcon=void 0,e.imgHead=void 0,e.imgHeadFrame=void 0,e.txtRewardName=void 0,e.txtRewardNum=void 0,e.txtRoleName=void 0,e.name="ActivityMaydayRewardView",e.url="ui/module/activity/ActivityMaydayRewardView",e}e(i,t);var d=i.prototype;return d.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.close()})),this.imgIcon=this.findChildComponent("container/imgIcon",n),this.imgHead=this.findChildComponent("container/head",n),this.imgHeadFrame=this.findChildComponent("container/imgHeadFrame",n),this.txtRewardName=this.findChildComponent("container/tip/info/txtName",o),this.txtRewardNum=this.findChildComponent("container/tip/info/txtValue",o),this.txtRoleName=this.findChildComponent("container/txtName",o)},d.registerUpdateHandler=function(){},d.onAfterOpen=function(){var t=this.openArgs[0],e=t.lottery_id,i=configMayday_lottery.getDataByKey(e);this.loadIcon(this.imgIcon,"act_mayday_draw",i.pic),this.txtRewardName.string=i.name,this.txtRewardNum.node.active=1==i.type,1==i.type&&(this.txtRewardNum.string=r.formatStr("x%s",i.rewards[0][1]/100)),this.txtRoleName.string=r.formatStr("[%s]%s",t.lottery_role_list[0].server_id,t.lottery_role_list[0].role_name),this.loadRemoteIcon(t.lottery_role_list[0].head.url,this.imgHead);var a=t.lottery_role_list[0].head.frame_id;if(a>0){this.imgHeadFrame.node.active=!0;var n=configAvatar_frame.getDataByKey(a);this.loadIcon(this.imgHeadFrame,"icon_frame",n.icon)}else this.imgHeadFrame.node.active=!1},d.onBeforeClose=function(){},d.onDestroy=function(){},i}(d));i._RF.pop()}}}));
