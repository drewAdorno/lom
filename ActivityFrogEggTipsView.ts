System.register("chunks:///_virtual/ActivityFrogEggTipsView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./NodeUtil.ts","./index57.ts","./ActivityDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,r,n,o,s,d,a,h,g;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy,n=t.Button,o=t.js,s=t.Label},function(t){d=t.ItemGrid},function(t){a=t.default},null,function(t){h=t.default},function(t){g=t.BaseView}],execute:function(){r._RF.push({},"7b54f7UYYhOGJg6axa1IQYn","ActivityFrogEggTipsView",void 0);t("default",function(t){function r(){var e;return(e=t.call(this)||this).nodeRewardItem=void 0,e.nodeRewardContent=void 0,e.rewardList=void 0,e.name="ActivityFrogEggTipsView",e.url="ui/module/activityFrog/ActivityFrogEggTipsView",e}e(r,t);var g=r.prototype;return g.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.nodeRewardContent=this.findChild("view/content"),this.nodeRewardItem=this.findChild("view/content/item"),this.nodeRewardItem.active=!1},g.registerUpdateHandler=function(){},g.onAfterOpen=function(){for(var t,e=IS(h).GetActivityInfo(this.openArgs[0]),r=IS(h).getEggInfo(this.openArgs[0]).ceng,n=[],s=i(configBreak_gold_egg_weight.getDatas());!(t=s()).done;){var d=t.value;d.type==e.type&&d.group_id==e.roundCfg.group_id&&n.push(d)}n.sort((function(t,e){return t.id-e.id}));for(var a=[],g=0,l=n;g<l.length;g++){var c=l[g];c.layers==r&&a.push(c)}if(0==a.length){r=n[n.length-1].layers;for(var f,u=i(n);!(f=u()).done;){var v=f.value;v.layers==r&&a.push(v)}}null==this.rewardList&&(this.rewardList=new Array);for(var w=0,p=0,m=a;p<m.length;p++){w+=m[p].weight}for(var I=0;I<a.length;I++){var L=this.rewardList[I]||this.newRewardItem();if(0==I){var C=IS(h).getEggInfo(this.openArgs[0]);C&&0!=C.choose_goods.gtid?L.itemGrid.SetItemId(C.choose_goods.gtid,C.choose_goods.num):L.itemGrid.SetItemId(a[I].reward[0],a[I].reward[1])}else L.itemGrid.SetItemId(a[I].reward[0],a[I].reward[1]);L.txtWeight.string=o.formatStr("%s%",(a[I].weight/w*100).toFixed(2)),L.node.active=!0,this.rewardList[I]=L}for(var y=a.length;y<this.rewardList.length;y++)this.rewardList[y].node.active=!1},g.newRewardItem=function(){var t=nodeInstantiate.instantiate(this.nodeRewardItem);return t.parent=this.nodeRewardContent,{node:t,itemGrid:new d(this,a.findChild(t,"itemGrid")),txtWeight:a.findChildComponent(t,"txtLevel",s)}},g.onBeforeClose=function(){if(this.rewardList)for(var t=0;t<this.rewardList.length;t++)this.rewardList[t].node.active=!1},g.onDestroy=function(){if(this.rewardList){for(var t=0;t<this.rewardList.length;t++)this.rewardList[t].node.destroy();this.rewardList=null}},r}(g));r._RF.pop()}}}));

