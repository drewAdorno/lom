System.register("chunks:///_virtual/PlayerMbtiView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./index57.ts","./ItemIcon.ts","./RoleControl.ts","./BaseView.ts"],(function(i){"use strict";var t,e,n,o,s,r,c,d,a,l,h,u,f;return{setters:[function(i){t=i.inheritsLoose},function(i){e=i.cclegacy,n=i.Button,o=i.ScrollView,s=i.sys,r=i.Layout,c=i.Sprite,d=i.Label},function(i){a=i.ListItem},function(i){l=i.default},null,function(i){h=i.IconAseetType},function(i){u=i.default},function(i){f=i.BaseView}],execute:function(){e._RF.push({},"9c8c6/hLiNB/ozrRGTIAys0","PlayerMbtiView",void 0);var g={0:"grxx_ui_renge01",1:"grxx_ui_renge02",2:"grxx_ui_renge03",3:"grxx_ui_renge04"},m=(i("default",function(i){function e(){var t;return(t=i.call(this)||this).MbtiList=void 0,t.curMbtiId=void 0,t.name="PlayerMbtiView",t.url="ui/module/player/PlayerMbtiView",t}t(e,i);var c=e.prototype;return c.onInit=function(){var i=this,t=this.findChild("imgMask");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){i.close()}));var e=this.findChild("content/btnChange");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){i.onChangeClick()}));var c=this.findChildComponent("content/ScrollView",o);if(this.MbtiList=this.addUIList(c,m),s.uiMirror){var d=this.findChildComponent("content/ScrollView/view/content",r);d.horizontalDirection=1==d.horizontalDirection?0:1}},c.onChangeClick=function(){IS(u).send_role_change_mbti_c2s(this.curMbtiId),this.close()},c.registerUpdateHandler=function(){},c.onAfterOpen=function(){this.curMbtiId=this.openArgs[0];for(var i=[],t=configMbti,e=1;e<=16;e++){var n={id:e,type:t.getDataByKey(e).type,isSelected:this.curMbtiId==e};i.push(n)}this.MbtiList.datas=i},c.onBeforeClose=function(){},c.onDestroy=function(){},c.updateList=function(i){var t=[];this.curMbtiId=i;for(var e=configMbti,n=1;n<=16;n++){var o={id:n,type:e.getDataByKey(n).type,isSelected:this.curMbtiId==n};t.push(o)}this.MbtiList.datas=t},e}(f)),function(i){function e(){for(var t,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))||this).imgBg=void 0,t.imgSelected=void 0,t.imgConfirm=void 0,t.txtName=void 0,t.id=void 0,t.isSelected=void 0,t.btnItem=void 0,t}t(e,i);var o=e.prototype;return o.onInit=function(){var i=this;this.imgBg=l.findChildComponent(this.node,"imgBg",c),this.imgSelected=l.findChildComponent(this.node,"imgSelected",c),this.imgConfirm=l.findChildComponent(this.node,"imgConfirm",c),this.txtName=l.findChildComponent(this.node,"txtName",d),this.view.addComponentCallbackListener(this.node,n.EventType.CLICK,(function(){i.onItemClick()})),s.uiMirror&&this.view.loadIcon(this.imgConfirm,"player","grxx_ui_gouxuan")},o.onRender=function(i,t){var e=t%4;this.view.loadIcon(this.imgBg,"player",g[e],null,h.UI_ATLAS,!0),this.imgSelected.node.active=i.isSelected,this.imgConfirm.node.active=i.isSelected,this.isSelected=i.isSelected,this.txtName.string=i.type,this.id=i.id},o.onItemClick=function(){this.imgSelected.node.active=!this.imgSelected.node.active,this.imgConfirm.node.active=!this.imgSelected.node.active,this.isSelected=!this.isSelected,this.view.curMbtiId!=this.id?this.view.updateList(this.id):this.view.updateList(0)},e}(a));e._RF.pop()}}}));

