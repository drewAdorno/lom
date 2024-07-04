System.register("chunks:///_virtual/PvpRewardView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RankTitle.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ItemIcon.ts","./BagModel.ts","./PvpControl.ts","./PvpDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,a,s,r,d,l,h,c,u,f,m,v,p,g,C,w,I,y;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Label,o=t.ScrollView,a=t.Button,s=t.RichText,r=t.js,d=t.Sprite,l=t.sys},function(t){h=t.RankTitle,c=t.TitleType},function(t){u=t.SelectedType,f=t.ListItem},function(t){m=t.default},function(t){v=t.default},function(t){p=t.default},null,function(t){g=t.IconAseetType},function(t){C=t.BagModel},function(t){w=t.default},function(t){I=t.PvpDataCache},function(t){y=t.BaseView}],execute:function(){i._RF.push({},"b4870jIsCFJ4a3611rh0Tm8","PvpRewardView",void 0);t("PvpRewardView",function(t){function i(){var e;return(e=t.call(this)||this).txtRank=void 0,e.txtTips=void 0,e.RewardUIList=void 0,e.layoutItem=void 0,e.btnSeason=void 0,e.btnToday=void 0,e.btnSeasonSel=void 0,e.btnTodaySel=void 0,e.curShowType=void 0,e.selfRewardList=void 0,e.selfRewarddata=void 0,e.txtTime=void 0,e.name="PvpRewardView",e.url="ui/module/pvp/PvpRewardView",e}e(i,t);var f=i.prototype;return f.onInit=function(){var t=this;this.txtRank=this.findChildComponent("root/content/txtRank",n),this.txtTime=this.findChildComponent("root/content/nodeTop/txtTime",n);var e=this.findChildComponent("root/ScrollView",o);this.RewardUIList=this.addUIList(e,T),this.RewardUIList.selectedMode=u.SINGLE;var i=this.findChildComponent("root/content/nodeTop/ScrollView",o);this.selfRewardList=this.addUIList(i,S),this.selfRewardList.selectedMode=u.SINGLE;var r=this.findChild("root/btnClose");this.addComponentCallbackListener(r,a.EventType.CLICK,(function(){t.close()})),this.btnToday=this.findChild("root/btnToday"),this.addComponentCallbackListener(this.btnToday,a.EventType.CLICK,(function(){t.switchRewardShow(1)})),this.btnSeason=this.findChild("root/btnSeason"),this.addComponentCallbackListener(this.btnSeason,a.EventType.CLICK,(function(){t.switchRewardShow(2)})),this.btnTodaySel=this.findChild("root/btnTodaySel"),this.addComponentCallbackListener(this.btnTodaySel,a.EventType.CLICK,(function(){t.switchRewardShow(1)})),this.btnSeasonSel=this.findChild("root/btnSeasonSel"),this.addComponentCallbackListener(this.btnSeasonSel,a.EventType.CLICK,(function(){t.switchRewardShow(2)})),this.layoutItem=m.findChild(this.node,"root/content/nodeTop/nodeItem"),this.txtTips=this.findChildComponent("root/content/nodeTop/txtTips",s)},f.onAfterOpen=function(){var t=this;this.switchRewardShow(1);var e=configPvp_reward.getDataByList("type",1);this.curShowType=1,this.RewardUIList.datas=e;var i=IS(I).rankList.my_rank;this.txtRank.string=String(i);for(var o=[],s=0;s<e.length;s++)if(i>=e[s].rank[0]&&i<=e[s].rank[1]){var u=GetLanguage(200567),f=e[s].rank[0]+"-"+e[s].rank[1];i<=3&&(f=String(i));var v=GetLanguage(200568);this.txtTips.string=r.formatStr("<bold><color=#544231>%s</color><color=#c56405>%s</color><color=#544231>%s</color></bold>",u,f,v),o=e[s].reward;break}if(this.updateTime(),this.addTimer(1,-1,(function(){t.updateTime()})),this.selfRewarddata=o,o.length>5)this.selfRewardList.datas=this.selfRewarddata;else{for(var p=[],w=null,y=0;y<o.length;y++){var T=configGoods.getDataByKey(o[y][0]);17==T.type?w=T:p.push(o[y])}this.layoutItem.removeAllChildren();for(var S=function(e){var i=m.findChild(t.node,"root/content/nodeTop/imgIconBG"),o=nodeInstantiate.instantiate(i);o.active=!0,o.setParent(t.layoutItem);var s=configGoods.getDataByKey(p[e][0]),r=configColor.getDataByKey(s.quality),h=o.getComponent(d),c=m.findChildComponent(o,"imgIcon",d),u=m.findChildComponent(o,"txtCount",n);u.string=p[e][1],t.loadIcon(h,"icon_equip",r.path),t.loadIcon(c,s.icon_group,s.icon,null,g.UI_ATLAS,!0),l.uiMirror&&u.node.setScale(1,1,1),t.addComponentCallbackListener(o,a.EventType.CLICK,(function(){IS(C).OpenItemTips(s.id,c.node)}))},L=0;L<p.length;L++)S(L);if(null!=w&&null!=w.effect){var R=m.findChild(this.node,"root/content/nodeTop/titleIcon"),b=nodeInstantiate.instantiate(R);b.active=!0,b.setParent(this.layoutItem);var k=w.effect[0];new h(this,b).SetRankTitle(k,c.NORMAL)}}},f.updateTime=function(){var t="--:--:--";if(2==this.curShowType){if(null==IS(I).rankList)return;var e=IS(I).rankList.end_time-p.serverTime;if(e<0)return void IS(w).reqRankList();var i=Math.floor(e/3600)%24,n=Math.floor(e/86400);t=n>0?v.formatStrWithMirrorDeal(GetLanguage(200006),n,i):p.formatTimeForSecond(e)}else{var o=new Date(new Date(1e3*p.serverTime).toLocaleDateString()).getTime(),a=(new Date(o+864e5).getTime()-1e3*p.serverTime)/1e3;if(a<0)return void IS(w).reqRankList();t=p.formatTimeForSecond(a)}this.txtTime.string=GetLanguage(300051)+t},f.switchRewardShow=function(t){if(this.curShowType!=t){this.curShowType=t,this.btnToday.active=2==t,this.btnSeason.active=1==t,this.btnTodaySel.active=1==t,this.btnSeasonSel.active=2==t;var e=configPvp_reward.getDataByList("type",t);this.RewardUIList.datas=e,this.updateTime()}},f.registerUpdateHandler=function(){},f.onBeforeClose=function(){},f.onDestroy=function(){},i}(y));var T=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,e.imgIcon=void 0,e.titleIcon=void 0,e.txtNum=void 0,e.imgNum1=void 0,e.imgNum2=void 0,e.imgNum3=void 0,e.selfRewardList=void 0,e.selfRewarddata=void 0,e}e(i,t);var a=i.prototype;return a.onInit=function(){this.titleIcon=m.findChild(this.node,"titleIcon"),this.txtNum=m.findChildComponent(this.node,"txtNum",n),this.imgNum1=m.findChild(this.node,"imgNum1"),this.imgNum2=m.findChild(this.node,"imgNum2"),this.imgNum3=m.findChild(this.node,"imgNum3"),this.view.loadIcon(this.imgNum1.getComponent(d),"friend","hy_ICON_paiming01"),this.view.loadIcon(this.imgNum2.getComponent(d),"friend","hy_ICON_paiming02"),this.view.loadIcon(this.imgNum3.getComponent(d),"friend","hy_ICON_paiming03");var t=m.findChildComponent(this.node,"ScrollView",o);this.selfRewardList=this.view.addUIList(t,S),this.selfRewardList.selectedMode=u.SINGLE},a.onRender=function(t,e){t.rank[0]==t.rank[1]?(this.txtNum.node.active=!1,this.imgNum1.active=1==t.rank[0],this.imgNum2.active=2==t.rank[0],this.imgNum3.active=3==t.rank[0]):(this.imgNum1.active=!1,this.imgNum2.active=!1,this.imgNum3.active=!1,this.txtNum.node.active=!0,this.txtNum.string=t.rank[0]+"-"+t.rank[1]);for(var i=[],n=null,o=0;o<t.reward.length;o++){var a=configGoods.getDataByKey(t.reward[o][0]);17==a.type?n=a:i.push(t.reward[o])}if(this.selfRewarddata=i,this.selfRewardList.datas=this.selfRewarddata,1==this.view.curShowType)if(null!=n&&null!=n.effect){var s=n.effect[0];new h(this.view,this.titleIcon).SetRankTitle(s,c.NORMAL),this.titleIcon.active=!0}else this.titleIcon.active=!1;else this.titleIcon.active=!1},i}(f),S=function(t){function i(){return t.apply(this,arguments)||this}return e(i,t),i.prototype.onRender=function(t,e){var i=configGoods.getDataByKey(t[0]),o=configColor.getDataByKey(i.quality),s=this.node.getComponent(d),r=m.findChildComponent(this.node,"imgIcon",d),h=m.findChildComponent(this.node,"txtCount",n);h.string=t[1],this.view.loadIcon(s,"icon_equip",o.path),this.view.loadIcon(r,i.icon_group,i.icon,null,g.UI_ATLAS,!0),l.uiMirror&&h.node.setScale(1,1,1),this.view.addComponentCallbackListener(this.node,a.EventType.CLICK,(function(){IS(C).OpenItemTips(i.id,r.node)}))},i}(f);i._RF.pop()}}}));
