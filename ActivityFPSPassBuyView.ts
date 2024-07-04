System.register("chunks:///_virtual/ActivityFPSPassBuyView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BagModel.ts","./BattlePassDataCache.ts","./PayControl.ts","./ActivityDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,a,r,d,s,l,u,c,f,h,v,y;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,a=t.Label,r=t.ScrollView},function(t){d=t.ItemGrid},function(t){s=t.ListItem},function(t){l=t.default},function(t){u=t.default},null,function(t){c=t.BagModel},function(t){f=t.BattlePassDataCache},function(t){h=t.default},function(t){v=t.default},function(t){y=t.BaseView}],execute:function(){n._RF.push({},"f42e1gD1+VBD6HdBxr8y5yN","ActivityFPSPassBuyView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).nodeReward1=void 0,i.nodeReward2=void 0,i.scroll1=void 0,i.scroll2=void 0,i.rewardTitle=void 0,i.txtContent=void 0,i.txtDiamond=void 0,i.cfgId=0,i.name="ActivityFPSPassBuyView",i.url="ui/module/activityFPS/ActivityFPSPassBuyView",i}i(n,t);var d=n.prototype;return d.onInit=function(){var t=this,i=this.findChild("btnClose");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()})),this.txtContent=this.findChildComponent("view/tips/btnDiamond/txtContent",a),this.txtDiamond=this.findChildComponent("view/tips/btnDiamond/txtDiamond",a),this.nodeReward1=this.findChild("view/reward1"),this.nodeReward2=this.findChild("view/reward2"),this.rewardTitle=this.findChildComponent("view/reward2/title/Label",a);var e=this.findChildComponent("view/reward1/rewardScroll",r);this.scroll1=this.addUIList(e,g);var n=this.findChildComponent("view/reward2/rewardScroll",r);this.scroll2=this.addUIList(n,g);var d=this.findChild("view/tips/buttons/btnEnsure");this.addComponentCallbackListener(d,o.EventType.CLICK,(function(){IS(h).send_19_5(t.cfgId),t.close()}));var s=this.findChild("view/tips/buttons/btnCancel");this.addComponentCallbackListener(s,o.EventType.CLICK,(function(){t.close()}))},d.registerUpdateHandler=function(){},d.onAfterOpen=function(){this.txtDiamond.string=u.GetNumString(IS(c).getGoodsCountByGoodsGtid(999));var t=IS(v).GetActivityInfo(this.openArgs[0]),i=this.openArgs[1],n=t.roundCfg.group_id,o=IS(f).getPassInfo(n),a=configWartoken_reward.getDataByList("id",n);if(a){var r="";if(1==i){r="high_reward";var d=configWartoken.getDataByKey(n),s=configPay_mall.getDataByKey(d.bundle_id);this.txtContent.string=u.formatStrWithMirrorDeal(GetLanguage(200475),s.price),this.cfgId=d.bundle_id}else if(2==i){r="middle_reward";var l=configWartoken.getDataByKey(n),h=configPay_mall.getDataByKey(l.bundle_id2);this.txtContent.string=u.formatStrWithMirrorDeal(GetLanguage(200475),h.price),this.cfgId=l.bundle_id2}var y=0,g=[];g[1]=0;for(var m=0;m<a.length;m++){var w=a[m];y+=w.exp,g[w.level+1]=y}this.rewardTitle.string=u.formatStr(GetLanguage(204311),GetLanguage(600002016),g[o.max_lev]);for(var C,p=[],B=e(a);!(C=B()).done;)for(var I,D=C.value,G=e(D[r]);!(I=G()).done;){var L=I.value;o.lev<D.level||(p[L[0]]||(p[L[0]]={id:L[0],num:0}),p[L[0]].num=p[L[0]].num+L[1])}var P=[];for(var S in p)p.hasOwnProperty(S)&&P.push(p[S]);if(P.sort((function(t,i){var e=configGoods.getDataByKey(t.id),n=configGoods.getDataByKey(i.id);return e.quality==n.quality?t.id-i.id:n.quality-e.quality})),this.scroll1.datas=P,o.lev<o.max_lev){this.nodeReward1.setPosition(0,195),this.nodeReward2.active=!0;for(var b,_=[],x=e(a);!(b=x()).done;)for(var K,R=b.value,A=e(R[r]);!(K=A()).done;){var q=K.value;_[q[0]]||(_[q[0]]={id:q[0],num:0}),_[q[0]].num=_[q[0]].num+q[1]}var F=[];for(var V in _)_.hasOwnProperty(V)&&F.push(_[V]);F.sort((function(t,i){var e=configGoods.getDataByKey(t.id),n=configGoods.getDataByKey(i.id);return e.quality==n.quality?t.id-i.id:n.quality-e.quality})),this.scroll2.datas=F}else this.nodeReward1.setPosition(0,100),this.nodeReward2.active=!1}},d.onBeforeClose=function(){this.cfgId=0},d.onDestroy=function(){},n}(y));var g=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=l.findChild(this.node,"itemGrid"),this.itemGrid=new d(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t.id,t.num)},e}(s);n._RF.pop()}}}));

