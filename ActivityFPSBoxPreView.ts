System.register("chunks:///_virtual/ActivityFPSBoxPreView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,o,r,n,a,s,d,l,h,c,u,f,v,p;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){o=t.cclegacy,r=t.Button,n=t.Label,a=t.ScrollView,s=t.Sprite,d=t.UITransform},function(t){l=t.ItemGrid},function(t){h=t.ListItem},function(t){c=t.default},function(t){u=t.default},null,function(t){f=t.default},function(t){v=t.ActivityType},function(t){p=t.BaseView}],execute:function(){o._RF.push({},"af471pR3yVCMIZQmYGQBzZU","ActivityFPSBoxPreView",void 0);t("default",function(t){function o(){var i;return(i=t.call(this)||this).scroll=void 0,i.txtLevel=void 0,i.name="ActivityFPSBoxPreView",i.url="ui/module/activityFPS/ActivityFPSBoxPreView",i}i(o,t);var s=o.prototype;return s.onInit=function(){var t=this,i=this.findChild("btnClose");this.addComponentCallbackListener(i,r.EventType.CLICK,(function(){t.close()})),this.txtLevel=this.findChildComponent("view/level/Label",n);var e=this.findChildComponent("view/scroll",a);this.scroll=this.addUIList(e,g,!0,0)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){for(var t,i,o=IS(f).GetActivityInfo(v.FPSBox),r=IS(f).getBoxInfo(v.FPSBox),n=r.id,a=e(configBox_tower_level.getDatas());!(i=a()).done;){var s=i.value;if(o.roundCfg.group_id==s.group&&1==s.final){t=s;break}}0==r.id&&(n=t.id);var d=configBox_tower_level.getDataByKey(n);this.txtLevel.string=u.formatStrWithMirrorDeal(GetLanguage(200284),Math.min(d.level,5));for(var l,h=[{type:1,title:201757,reward:[],shape:""},{type:3,title:201758,reward:[],shape:""},{type:4,title:201759,reward:[],shape:""},{type:5,title:201760,reward:[],shape:""}],c=configBox_tower_reward_preview.getDatas(),p=function(){var t=l.value;if(t.group==o.roundCfg.group_id){var i=h.find((function(i){return i.type==t.box_type}));""==i.shape&&(i.shape=t.shape),5!=t.box_type&&i.reward.push(t.goods)}},g=e(c);!(l=g()).done;)p();h.sort((function(t,i){return i.type-t.type})),this.scroll.datas=h},s.onBeforeClose=function(){},s.onDestroy=function(){},o}(p));var g=function(t){function o(){for(var i,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(i=t.call.apply(t,[this].concat(o))||this).rewardScroll=void 0,i.txtTitle=void 0,i.txtDesc=void 0,i.txtRatio=void 0,i.utReward=void 0,i.utScroll=void 0,i.utScrollView=void 0,i.img=void 0,i.isGet=void 0,i}i(o,t);var r=o.prototype;return r.onInit=function(){this.adaptiveSize=!0,this.img=c.findChildComponent(this.node,"top/img",s),this.txtTitle=c.findChildComponent(this.node,"top/imgTitle/Label",n),this.isGet=c.findChild(this.node,"reward/isGet"),this.txtDesc=c.findChildComponent(this.node,"reward/txtDesc",n),this.txtRatio=c.findChildComponent(this.node,"top/ratio",n);var t=c.findChildComponent(this.node,"reward/rewardScroll",a);this.rewardScroll=this.view.addUIList(t,w,!1,0),this.utReward=c.findChildComponent(this.node,"reward",d),this.utScroll=c.findChildComponent(this.node,"reward/rewardScroll",d),this.utScrollView=c.findChildComponent(this.node,"reward/rewardScroll/view",d)},r.onRender=function(t,i){this.txtTitle.string=GetLanguage(t.title),this.view.loadIcon(this.img,"act_fps_box",t.shape);for(var o,r,n=IS(f).GetActivityInfo(v.FPSBox),a=IS(f).getBoxInfo(v.FPSBox),s=a.id,d=e(configBox_tower_level.getDatas());!(r=d()).done;){var l=r.value;if(n.roundCfg.group_id==l.group&&1==l.final){o=l;break}}0==a.id&&(s=o.id);var h=configBox_tower_level.getDataByKey(s),c=[];if(5==t.type)c=h.grand_prize,0==a.id?(this.txtRatio.string=u.formatStrWithMirrorDeal(GetLanguage(201756),"0%"),this.isGet.active=!0,this.txtDesc.string=GetLanguage(201773)):(this.txtRatio.string=u.formatStrWithMirrorDeal(GetLanguage(201756),h.big_prize_prob/100+"%"),this.isGet.active=!1,this.txtDesc.string=GetLanguage(201754));else{for(var p,g=e(h.box_prob);!(p=g()).done;){var w=p.value;if(configBox_tower_box.getDataByKey(w[0]).quality==t.type){this.txtRatio.string=u.formatStrWithMirrorDeal(GetLanguage(201755),w[1]+"%");break}}this.txtDesc.string=GetLanguage(201761),c=t.reward,this.isGet.active=!1}var y=Math.ceil(c.length/5),x=95*y+5*(y-1);this.ut.height=100+x+40+10,this.utReward.height=x+40,this.utScroll.height=x,this.utScrollView.height=x,this.rewardScroll.datas=c},o}(h),w=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(i=t.call.apply(t,[this].concat(o))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){this.itemGridNode=c.findChild(this.node,"itemGrid"),this.itemGrid=new l(this.view,this.itemGridNode)},o.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(h);o._RF.pop()}}}));
