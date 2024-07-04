System.register("chunks:///_virtual/ActivityFrogPassBuyView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BagModel.ts","./BattlePassDataCache.ts","./PayControl.ts","./ActivityDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,a,r,d,s,l,u,c,f,h,v,g,y;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,a=t.Label,r=t.Sprite,d=t.ScrollView},function(t){s=t.ItemGrid},function(t){l=t.ListItem},function(t){u=t.default},function(t){c=t.default},null,function(t){f=t.BagModel},function(t){h=t.BattlePassDataCache},function(t){v=t.default},function(t){g=t.default},function(t){y=t.BaseView}],execute:function(){n._RF.push({},"4797d7C5TBEqpG2daUFHzvd","ActivityFrogPassBuyView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).nodeReward1=void 0,i.nodeReward2=void 0,i.scroll1=void 0,i.scroll2=void 0,i.imgTitle=void 0,i.rewardTitle=void 0,i.txtContent=void 0,i.txtDiamond=void 0,i.cfgId=0,i.name="ActivityFrogPassBuyView",i.url="ui/module/activityFrog/ActivityFrogPassBuyView",i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()})),this.txtContent=this.findChildComponent("view/tips/btnDiamond/txtContent",a),this.txtDiamond=this.findChildComponent("view/tips/btnDiamond/txtDiamond",a),this.imgTitle=this.findChildComponent("view/imgBG/imgTitle",r),this.nodeReward1=this.findChild("view/reward1"),this.nodeReward2=this.findChild("view/reward2"),this.rewardTitle=this.findChildComponent("view/reward2/title/Label",a);var e=this.findChildComponent("view/reward1/rewardScroll",d);this.scroll1=this.addUIList(e,m);var n=this.findChildComponent("view/reward2/rewardScroll",d);this.scroll2=this.addUIList(n,m);var s=this.findChild("view/tips/buttons/btnEnsure");this.addComponentCallbackListener(s,o.EventType.CLICK,(function(){IS(v).send_19_5(t.cfgId),t.close()}));var l=this.findChild("view/tips/buttons/btnCancel");this.addComponentCallbackListener(l,o.EventType.CLICK,(function(){t.close()}))},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){this.txtDiamond.string=c.GetNumString(IS(f).getGoodsCountByGoodsGtid(999));var t=IS(g).GetActivityInfo(this.openArgs[0]),i=this.openArgs[1],n=t.roundCfg.group_id,o=IS(h).getPassInfo(n),a=configWartoken_reward.getDataByList("id",n);if(a){var r="";if(1==i){r="high_reward";var d=configWartoken.getDataByKey(n),s=configPay_mall.getDataByKey(d.bundle_id);this.txtContent.string=c.formatStrWithMirrorDeal(GetLanguage(200475),s.price),this.cfgId=d.bundle_id}else if(2==i){r="middle_reward";var l=configWartoken.getDataByKey(n),u=configPay_mall.getDataByKey(l.bundle_id2);this.txtContent.string=c.formatStrWithMirrorDeal(GetLanguage(200475),u.price),this.cfgId=l.bundle_id2}var v=0,y=[];y[1]=0;for(var m=0;m<a.length;m++){var C=a[m];v+=C.exp,y[C.level+1]=v}this.rewardTitle.string=c.formatStr(GetLanguage(204311),GetLanguage(400591),y[o.max_lev]);for(var w,p=[],B=e(a);!(w=B()).done;)for(var I,G=w.value,D=e(G[r]);!(I=D()).done;){var L=I.value;o.lev<G.level||(p[L[0]]||(p[L[0]]={id:L[0],num:0}),p[L[0]].num=p[L[0]].num+L[1])}var _=[];for(var b in p)p.hasOwnProperty(b)&&_.push(p[b]);if(_.sort((function(t,i){var e=configGoods.getDataByKey(t.id),n=configGoods.getDataByKey(i.id);return e.quality==n.quality?t.id-i.id:n.quality-e.quality})),this.scroll1.datas=_,o.lev<o.max_lev){this.nodeReward1.setPosition(0,155),this.nodeReward2.active=!0;for(var P,S=[],x=e(a);!(P=x()).done;)for(var K,R=P.value,A=e(R[r]);!(K=A()).done;){var T=K.value;S[T[0]]||(S[T[0]]={id:T[0],num:0}),S[T[0]].num=S[T[0]].num+T[1]}var q=[];for(var F in S)S.hasOwnProperty(F)&&q.push(S[F]);q.sort((function(t,i){var e=configGoods.getDataByKey(t.id),n=configGoods.getDataByKey(i.id);return e.quality==n.quality?t.id-i.id:n.quality-e.quality})),this.scroll2.datas=q}else this.nodeReward1.setPosition(0,60),this.nodeReward2.active=!1}},s.onBeforeClose=function(){this.cfgId=0},s.onDestroy=function(){},n}(y));var m=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=u.findChild(this.node,"itemGrid"),this.itemGrid=new s(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t.id,t.num)},e}(l);n._RF.pop()}}}));
