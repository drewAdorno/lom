System.register("chunks:///_virtual/WelfareShareView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UILabel.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./MulLanguageUtil.ts","./GameSetting.ts","./NativeToJs.ts","./WelfareControl.ts","./WelfareDataCache.ts","./WelfareDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,o,s,d,h,a,l,r,c,b,_,f,u;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.sys,o=t.Sprite,s=t.Button},function(t){d=t.ItemGrid},function(t){h=t.UILabel},null,null,null,function(t){a=t.default},function(t){l=t.default,r=t.GameSettingKey},function(t){c=t.NativeToJs},function(t){b=t.default},function(t){_=t.WelfareDataCache},function(t){f=t.WelfareEvent},function(t){u=t.BaseSubView}],execute:function(){i._RF.push({},"12471LMVNhN4bVNoryiHdt7","WelfareShareView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).rewardList1=void 0,e.rewardList2=void 0,e.btnShare=void 0,e.btnLike=void 0,e.btn_face_icon=void 0,e.btn_vk_icon=void 0,e.btn_face_lab=void 0,e.btn_dis_lab=void 0,e.title1=void 0,e.title2=void 0,e.share_goods1=void 0,e.share_goods2=void 0,e.share_get1=void 0,e.share_get2=void 0,e.redPoint1=void 0,e.redPoint2=void 0,e.twitter_btn=void 0,e.youtebe_btn=void 0,e.tiktok_btn=void 0,e.twitter_btn_lab=void 0,e.youtebe_btn_lab=void 0,e.tiktok_btn_lab=void 0,e.twitter_bubble=void 0,e.youtebe_bubble=void 0,e.tiktok_bubble=void 0,e.twitter_goods=void 0,e.youtebe_goods=void 0,e.tiktok_goods=void 0,e.share_id=1,e.name="WelfareShareView",e.url="ui/module/welfare/WelfareShareView",e}e(i,t);var u=i.prototype;return u.onInit=function(){var t=this,e=this.findChild("content/ScrollView/view/content/item1/item/itemGrid");if(this.share_goods1=new d(this,e,(function(){var e;1==(null!=(e=IS(_).share_info[t.share_id])?e:0)&&IS(b).sendFbShareReward(t.share_id,2)})),this.share_get1=this.findChild("content/ScrollView/view/content/item1/item/get"),this.share_get2=this.findChild("content/ScrollView/view/content/item2/item/get"),n.uiMirror){var i=this.findChildComponent("content/ScrollView/view/content/item1/item/get/Sprite",o),l=this.findChildComponent("content/ScrollView/view/content/item2/item/get/Sprite",o);this.loadIcon(i,"common","common_ui_dagou"),this.loadIcon(l,"common","common_ui_dagou")}this.title1=this.findChild("content/ScrollView/view/content/item1/txtTitle1"),this.title2=this.findChild("content/ScrollView/view/content/item1/txtTitle2"),this.redPoint1=this.findChild("content/ScrollView/view/content/item1/item/RedPoint");var r=this.findChild("content/ScrollView/view/content/item2/item/itemGrid");this.share_goods2=new d(this,r,(function(){var t;1==(null!=(t=IS(_).share_info[2])?t:0)&&IS(b).sendFbShareReward(2,2)})),this.redPoint2=this.findChild("content/ScrollView/view/content/item2/item/RedPoint"),this.twitter_btn_lab=this.findChildComponent("content/btn_list/btn1/Label",h),this.youtebe_btn_lab=this.findChildComponent("content/btn_list/btn2/Label",h),this.tiktok_btn_lab=this.findChildComponent("content/btn_list/btn3/Label",h);var f=this.findChildComponent("content/btn_list/btn1/img",o);this.loadIcon(f,"flzx","fxyl_om_icom_01");var u=this.findChildComponent("content/btn_list/btn2/img",o);this.loadIcon(u,"flzx","fxyl_om_icom_02");var v=this.findChildComponent("content/btn_list/btn3/img",o);this.loadIcon(v,"flzx","fxyl_om_icom_03"),this.twitter_btn=this.findChild("content/btn_list/btn1"),this.addComponentCallbackListener(this.twitter_btn,s.EventType.CLICK,(function(){c.openURL("https://twitter.com/legendofmush")})),this.youtebe_btn=this.findChild("content/btn_list/btn2"),this.addComponentCallbackListener(this.youtebe_btn,s.EventType.CLICK,(function(){c.openURL("https://www.youtube.com/@legendofmushroom")})),this.tiktok_btn=this.findChild("content/btn_list/btn3"),this.addComponentCallbackListener(this.tiktok_btn,s.EventType.CLICK,(function(){c.openURL("https://www.tiktok.com/@legendofmushroom")})),this.twitter_bubble=this.findChild("content/btn_list/btn1/bubble");var m=this.findChild("content/btn_list/btn1/bubble/itemGrid");this.twitter_goods=new d(this,m,(function(){var t;1==(null!=(t=IS(_).share_info[3])?t:0)&&IS(b).sendFbShareReward(3,2)})),this.youtebe_bubble=this.findChild("content/btn_list/btn2/bubble");var w=this.findChild("content/btn_list/btn2/bubble/itemGrid");this.youtebe_goods=new d(this,w,(function(){var t;1==(null!=(t=IS(_).share_info[4])?t:0)&&IS(b).sendFbShareReward(4,2)})),this.tiktok_bubble=this.findChild("content/btn_list/btn3/bubble");var C=this.findChild("content/btn_list/btn3/bubble/itemGrid");this.tiktok_goods=new d(this,C,(function(){var t;1==(null!=(t=IS(_).share_info[5])?t:0)&&IS(b).sendFbShareReward(5,2)})),this.btn_face_icon=this.findChild("content/ScrollView/view/content/item1/btnReward/imgF"),this.loadIcon(this.btn_face_icon.getComponent(o),"flzx","fxyl_om_img03"),this.btn_vk_icon=this.findChild("content/ScrollView/view/content/item1/btnReward/imgV"),this.loadIcon(this.btn_vk_icon.getComponent(o),"flzx","fxyl_om_img02");var S=this.findChildComponent("content/ScrollView/view/content/item2/btnReward/imgF",o);this.loadIcon(S,"flzx","fxyl_om_img01"),this.btn_face_lab=this.findChildComponent("content/ScrollView/view/content/item1/btnReward/txtReward0",h),this.btn_dis_lab=this.findChildComponent("content/ScrollView/view/content/item2/btnReward/txtReward0",h),this.btnShare=this.findChild("content/ScrollView/view/content/item1/btnReward"),this.addComponentCallbackListener(this.btnShare,s.EventType.CLICK,(function(){var e,i=null!=(e=IS(_).share_info[t.share_id])?e:0;"ru"==a.GetGurLanuage()?(c.openURL("https://vk.com/legendofmushroom"),0==i&&IS(b).sendFbShareReward(t.share_id,1)):c.fbShowShareDialog()})),this.btnLike=this.findChild("content/ScrollView/view/content/item2/btnReward"),this.addComponentCallbackListener(this.btnLike,s.EventType.CLICK,(function(){var t;0==(null!=(t=IS(_).share_info[2])?t:0)&&IS(b).sendFbShareReward(2,1),c.openURL("https://discord.gg/rgX9GT9h4S")}));var g=this.findChild("btnClose");this.addComponentCallbackListener(g,s.EventType.CLICK,(function(){uiMgr.close("MenuView"),uiMgr.close("WelfareCenterView")}))},u.registerUpdateHandler=function(){this.addEvent(f.FB_REWARD_UPDATE,this.updateInfo,this),this.addEvent(f.WELFARE_SHARE_CALLBACK,this.onShareComplete,this),this.addEvent(f.WELFARE_LIKE_CALLBACK,this.onLikeComplete,this)},u.onAfterOpen=function(){"ru"==a.GetGurLanuage()?(this.share_id=6,this.btn_face_icon.active=!1,this.btn_vk_icon.active=!0,this.title1.active=!1,this.title2.active=!0):(this.btn_face_icon.active=!0,this.btn_vk_icon.active=!1,this.title2.active=!1,this.title1.active=!0),IS(b).reqFbRewardInfo()},u.onBeforeClose=function(){IS(l).set(r.FACEBOOK_SHARE,1)},u.onDestroy=function(){},u.updateInfo=function(){var t=IS(_).share_info;printLogErr(t),this.redPoint1.active=t[this.share_id]&&1==t[this.share_id],this.redPoint2.active=t[2]&&1==t[2],this.share_get1.active=t[this.share_id]&&2==t[this.share_id],this.share_get2.active=t[2]&&2==t[2];var e=configFacebookshare.getDataByKey(this.share_id);this.share_goods1.SetItemId(e.reward[0],e.reward[1]),e=configFacebookshare.getDataByKey(2),this.share_goods2.SetItemId(e.reward[0],e.reward[1])},u.onShareComplete=function(t){void 0===t&&(t=0),1==t&&2!=IS(_).fbShareReward&&IS(b).sendFbShareReward(1,1)},u.onLikeComplete=function(t){void 0===t&&(t=0),1==t&&IS(b).sendFbLikeReward(1)},i}(u));i._RF.pop()}}}));
