System.register("chunks:///_virtual/ActivityMergeServersLotteryPreView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./ActivityDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,r,n,o,s,a,l,d,c,u,h;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy,n=t.Button,o=t.ScrollView,s=t.Label,a=t.js},function(t){l=t.ItemGrid},function(t){d=t.ListItem},function(t){c=t.default},null,function(t){u=t.default},function(t){h=t.BaseView}],execute:function(){r._RF.push({},"cfd58/2e41H9rNR2IUT6DgB","ActivityMergeServersLotteryPreView",void 0);var f=0,v=(t("default",function(t){function r(){var e;return(e=t.call(this)||this).scroll1=void 0,e.scroll2=void 0,e.name="ActivityMergeServersLotteryPreView",e.url="ui/module/activityMergeServers/ActivityMergeServersLotteryPreView",e}e(r,t);var s=r.prototype;return s.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.scroll1=this.addUIList(this.findChildComponent("view/item1/ScrollView",o),v),this.scroll2=this.addUIList(this.findChildComponent("view/item2/ScrollView",o),v)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){var t=IS(u).getLotteryInfo(this.openArgs[0]),e=[],r=[];f=0;for(var n,o=configDouble_probabillity.getDatas(),s=i(o);!(n=s()).done;){var a=n.value;a.id==t.round_cfg_id&&(f+=a.weight,1==a.reward_type||2==a.reward_type?e.push(a):r.push(a))}this.scroll1.datas=e,this.scroll2.datas=r},s.onBeforeClose=function(){},s.onDestroy=function(){},r}(h)),function(t){function r(){for(var e,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).itemGrid=void 0,e.txtLimit=void 0,e.reward=void 0,e}e(r,t);var n=r.prototype;return n.onInit=function(){this.itemGrid=new l(this.view,c.findChild(this.node,"itemGrid")),this.txtLimit=c.findChildComponent(this.node,"txtLimit",s)},n.onRender=function(t,e){var r=IS(u).getLotteryInfo(this.view.openArgs[0]);if(t.reward_replace.length>0){var n,o=null!=(n=r.choose_list[t.reward_id])?n:0;if(0!=o)for(var s,l=i(t.reward_replace);!(s=l()).done;){var d=s.value;if(d[0]==o){this.reward=d[1];break}}else this.reward=t.reward}else this.reward=t.reward;this.itemGrid.SetItemId(this.reward[0],this.reward[1]),this.txtLimit.string=a.formatStr("%s%",(t.weight/f*100).toFixed(2))},r}(d));r._RF.pop()}}}));
