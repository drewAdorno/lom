System.register("chunks:///_virtual/ActivitySakuraPassBuyView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BagModel.ts","./BattlePassDataCache.ts","./PayControl.ts","./ActivityDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,a,o,r,d,s,l,u,c,f,h,v,g;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,a=t.Button,o=t.Label,r=t.ScrollView},function(t){d=t.ItemGrid},function(t){s=t.ListItem},function(t){l=t.default},function(t){u=t.default},null,function(t){c=t.BagModel},function(t){f=t.BattlePassDataCache},function(t){h=t.default},function(t){v=t.default},function(t){g=t.BaseView}],execute:function(){n._RF.push({},"2456elfKNhNnrcZdY1JW/Uo","ActivitySakuraPassBuyView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).nodeReward1=void 0,i.nodeReward2=void 0,i.scroll1=void 0,i.scroll2=void 0,i.rewardTitle=void 0,i.txtContent=void 0,i.txtDiamond=void 0,i.cfgId=0,i.name="ActivitySakuraPassBuyView",i.url="ui/module/activitySakura/ActivitySakuraPassBuyView",i}i(n,t);var d=n.prototype;return d.onInit=function(){var t=this,i=this.findChild("btnClose");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.close()})),this.txtContent=this.findChildComponent("view/tips/btnDiamond/txtContent",o),this.txtDiamond=this.findChildComponent("view/tips/btnDiamond/txtDiamond",o),this.nodeReward1=this.findChild("view/reward1"),this.nodeReward2=this.findChild("view/reward2"),this.rewardTitle=this.findChildComponent("view/reward2/title/Label",o);var e=this.findChildComponent("view/reward1/rewardScroll",r);this.scroll1=this.addUIList(e,y);var n=this.findChildComponent("view/reward2/rewardScroll",r);this.scroll2=this.addUIList(n,y);var d=this.findChild("view/tips/buttons/btnEnsure");this.addComponentCallbackListener(d,a.EventType.CLICK,(function(){IS(h).send_19_5(t.cfgId),t.close()}));var s=this.findChild("view/tips/buttons/btnCancel");this.addComponentCallbackListener(s,a.EventType.CLICK,(function(){t.close()}))},d.registerUpdateHandler=function(){},d.onAfterOpen=function(){this.txtDiamond.string=u.GetNumString(IS(c).getGoodsCountByGoodsGtid(999));var t=IS(v).GetActivityInfo(this.openArgs[0]),i=this.openArgs[1],n=t.roundCfg.group_id,a=IS(f).getPassInfo(n),o=configWartoken_reward.getDataByList("id",n);if(o){var r="";if(1==i){r="high_reward";var d=configWartoken.getDataByKey(n),s=configPay_mall.getDataByKey(d.bundle_id);this.txtContent.string=u.formatStrWithMirrorDeal(GetLanguage(200475),s.price),this.cfgId=d.bundle_id}else if(2==i){r="middle_reward";var l=configWartoken.getDataByKey(n),h=configPay_mall.getDataByKey(l.bundle_id2);this.txtContent.string=u.formatStrWithMirrorDeal(GetLanguage(200475),h.price),this.cfgId=l.bundle_id2}var g=0,y=[];y[1]=0;for(var m=0;m<o.length;m++){var w=o[m];g+=w.exp,y[w.level+1]=g}this.rewardTitle.string=u.formatStr(GetLanguage(204311),GetLanguage(999300132),y[a.max_lev]);for(var C,p=[],I=e(o);!(C=I()).done;)for(var B,G=C.value,D=e(G[r]);!(B=D()).done;){var L=B.value;a.lev<G.level||(p[L[0]]||(p[L[0]]={id:L[0],num:0}),p[L[0]].num=p[L[0]].num+L[1])}var S=[];for(var b in p)p.hasOwnProperty(b)&&S.push(p[b]);if(S.sort((function(t,i){var e=configGoods.getDataByKey(t.id),n=configGoods.getDataByKey(i.id);return e.quality==n.quality?t.id-i.id:n.quality-e.quality})),this.scroll1.datas=S,a.lev<a.max_lev){this.nodeReward1.setPosition(0,90),this.nodeReward2.active=!0;for(var _,P=[],x=e(o);!(_=x()).done;)for(var k,K=_.value,R=e(K[r]);!(k=R()).done;){var A=k.value;P[A[0]]||(P[A[0]]={id:A[0],num:0}),P[A[0]].num=P[A[0]].num+A[1]}var q=[];for(var N in P)P.hasOwnProperty(N)&&q.push(P[N]);q.sort((function(t,i){var e=configGoods.getDataByKey(t.id),n=configGoods.getDataByKey(i.id);return e.quality==n.quality?t.id-i.id:n.quality-e.quality})),this.scroll2.datas=q}else this.nodeReward1.setPosition(0,0),this.nodeReward2.active=!1}},d.onBeforeClose=function(){this.cfgId=0},d.onDestroy=function(){},n}(g));var y=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=l.findChild(this.node,"itemGrid"),this.itemGrid=new d(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t.id,t.num)},e}(s);n._RF.pop()}}}));
