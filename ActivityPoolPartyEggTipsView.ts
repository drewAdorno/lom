System.register("chunks:///_virtual/ActivityPoolPartyEggTipsView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ActivityDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,r,n,o,s,a,d,h,l;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy,n=t.Button,o=t.Label},function(t){s=t.ItemGrid},function(t){a=t.default},function(t){d=t.default},null,function(t){h=t.default},function(t){l=t.BaseView}],execute:function(){r._RF.push({},"47faaTdG0RGzroKNXTVzbAG","ActivityPoolPartyEggTipsView",void 0);t("default",function(t){function r(){var e;return(e=t.call(this)||this).nodeRewardItem=void 0,e.nodeRewardContent=void 0,e.rewardList=void 0,e.name="ActivityPoolPartyEggTipsView",e.url="ui/module/activityPoolParty/ActivityPoolPartyEggTipsView",e}e(r,t);var l=r.prototype;return l.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.nodeRewardContent=this.findChild("view/content"),this.nodeRewardItem=this.findChild("view/content/item"),this.nodeRewardItem.active=!1},l.registerUpdateHandler=function(){},l.onAfterOpen=function(){for(var t,e=IS(h).GetActivityInfo(this.openArgs[0]),r=IS(h).getEggInfo(this.openArgs[0]).ceng,n=[],o=i(configBreak_gold_egg_weight.getDatas());!(t=o()).done;){var s=t.value;s.type==e.type&&s.group_id==e.roundCfg.group_id&&n.push(s)}n.sort((function(t,e){return t.id-e.id}));for(var a=[],l=0,g=n;l<g.length;l++){var c=g[l];c.layers==r&&a.push(c)}if(0==a.length){r=n[n.length-1].layers;for(var u,f=i(n);!(u=f()).done;){var v=u.value;v.layers==r&&a.push(v)}}null==this.rewardList&&(this.rewardList=new Array);for(var w=0,p=0,m=a;p<m.length;p++){w+=m[p].weight}for(var y=0;y<a.length;y++){var I=this.rewardList[y]||this.newRewardItem();if(0==y){var L=IS(h).getEggInfo(this.openArgs[0]);L&&0!=L.choose_goods.gtid?I.itemGrid.SetItemId(L.choose_goods.gtid,L.choose_goods.num):I.itemGrid.SetItemId(a[y].reward[0],a[y].reward[1])}else I.itemGrid.SetItemId(a[y].reward[0],a[y].reward[1]);I.txtWeight.string=d.formatStrWithMirrorDeal(GetLanguage(700030183),(a[y].weight/w*100).toFixed(2)),I.node.active=!0,this.rewardList[y]=I}for(var C=a.length;C<this.rewardList.length;C++)this.rewardList[C].node.active=!1},l.newRewardItem=function(){var t=nodeInstantiate.instantiate(this.nodeRewardItem);return t.parent=this.nodeRewardContent,{node:t,itemGrid:new s(this,a.findChild(t,"itemGrid")),txtWeight:a.findChildComponent(t,"txtLevel",o)}},l.onBeforeClose=function(){if(this.rewardList)for(var t=0;t<this.rewardList.length;t++)this.rewardList[t].node.active=!1},l.onDestroy=function(){if(this.rewardList){for(var t=0;t<this.rewardList.length;t++)this.rewardList[t].node.destroy();this.rewardList=null}},r}(l));r._RF.pop()}}}));
