System.register("chunks:///_virtual/ActivityReverseRewardView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./PayDataCache.ts","./PayDefine.ts","./ActivityDefine.ts","./ActivityReverseControl.ts","./ActivityReverseDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,a,s,r,d,h,c,l,v,u,f,m,C,b,w,p,y,I;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,a=t.ScrollView,s=t.Label,r=t.Sprite,d=t.RichText,h=t.Vec3,c=t.js},function(t){l=t.ItemGrid},function(t){v=t.ListItem},function(t){u=t.default},function(t){f=t.default},null,function(t){m=t.default},function(t){C=t.PayEventDefine,b=t.GiftType},function(t){w=t.ActivityEventDefine},function(t){p=t.default},function(t){y=t.default},function(t){I=t.BaseView}],execute:function(){n._RF.push({},"0c058JXwjpB6KkJKN6/FVv2","ActivityReverseRewardView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).tabScroll=void 0,e.rewardScroll=void 0,e.curIndex=0,e.openDay=0,e.name="ActivityReverseRewardView",e.url="ui/module/reverse/ActivityReverseRewardView",e}e(n,t);var s=n.prototype;return s.onInit=function(){var t=this,e=this.findChild("btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()})),this.tabScroll=this.addUIList(this.findChildComponent("view/tabScroll",a),g),this.rewardScroll=this.addUIList(this.findChildComponent("view/scroll",a),L,!0,0)},s.registerUpdateHandler=function(){this.addEvent(w.OnActivityReverseUpdate,this.updateInfo,this),this.addEvent(C.PAY_CUSTOM_INFO_SET,this.updateInfo,this),this.addEvent(C.PAY_INFO_UPDATE,this.updateInfo,this)},s.onAfterOpen=function(){this.openDay=IS(y).getOpenDay();for(var t,e=configReversion_war_reward.getDatas(),n=[],o=[],a=i(e);!(t=a()).done;){var s=t.value;o[s.day]||(n.push(s.day),o[s.day]=!0)}n.sort((function(t,e){return t-e})),this.tabScroll.datas=n,this.setIndex(Math.min(this.openDay,n[n.length-1]))},s.onBeforeClose=function(){this.curIndex=0},s.onDestroy=function(){},s.setIndex=function(t){if(this.curIndex!=t){this.curIndex=t,IS(y).setRewardRed(t),this.tabScroll.updateAll();for(var e,n=configReversion_war_reward.getDatas(),o=[],a=i(n);!(e=a()).done;){var s=e.value;s.day==this.curIndex&&o.push(s)}o.sort((function(t,e){return t.star_num-e.star_num})),this.rewardScroll.datas=o}},s.updateInfo=function(){this.tabScroll.updateAll(),this.rewardScroll.updateAll()},n}(I));var g=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).normal=void 0,e.select=void 0,e.lock=void 0,e.txt=void 0,e.red=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){var t=this;this.normal=u.findChild(this.node,"normal"),this.select=u.findChild(this.node,"selected"),this.lock=u.findChild(this.node,"lock"),this.red=u.findChild(this.node,"red"),this.txt=u.findChildComponent(this.node,"Label",s),this.view.addComponentCallbackListener(this.node,o.EventType.CLICK,(function(){t.lock.active||t.view.setIndex(t.data)}))},n.onRender=function(t,e){this.txt.string=f.formatStrWithMirrorDeal(GetLanguage(200319),t),this.red.active=1==IS(y).getRewardRed(t),t>this.view.openDay?(this.normal.active=!1,this.select.active=!1,this.lock.active=!0):t==this.view.curIndex?(this.normal.active=!1,this.select.active=!0,this.lock.active=!1):(this.normal.active=!0,this.select.active=!1,this.lock.active=!1)},i}(v),L=function(t){function n(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).btnList=void 0,e.rewarded=void 0,e.btnGet=void 0,e.btnGetLable=void 0,e.red=void 0,e.btnLock=void 0,e.btnCharge=void 0,e.btnChargeTxt=void 0,e.ad=void 0,e.arrowNormal=void 0,e.sel=void 0,e.tipNode=void 0,e.tipNum=void 0,e.target=void 0,e.rewardList=void 0,e.nodeChoose=void 0,e.notSet1=void 0,e.notSet2=void 0,e.itemGrid1=void 0,e.itemGrid2=void 0,e.chooseItems=[],e}e(n,t);var v=n.prototype;return v.onInit=function(){var t=this;this.rewarded=u.findChild(this.node,"rewarded"),this.btnList=u.findChild(this.node,"btnList"),this.btnLock=u.findChild(this.node,"btnList/btnLock"),this.btnCharge=u.findChildComponent(this.node,"btnList/btnCharge",r),this.btnChargeTxt=u.findChildComponent(this.node,"btnList/btnCharge/Label",s),this.view.addComponentCallbackListener(this.btnCharge.node,o.EventType.CLICK,(function(){t.ClickReward()})),this.ad=u.findChild(this.node,"btnList/btnGet/ad"),this.red=u.findChild(this.node,"btnList/btnGet/red"),this.btnGet=u.findChildComponent(this.node,"btnList/btnGet",r),this.btnGetLable=u.findChild(this.node,"btnList/btnGet/Label"),this.view.addComponentCallbackListener(this.btnGet.node,o.EventType.CLICK,(function(){t.ClickReward()})),this.arrowNormal=u.findChild(this.node,"arrowNormal"),this.sel=u.findChild(this.node,"sel"),this.tipNode=u.findChild(this.node,"tip"),this.tipNum=u.findChildComponent(this.node,"tip/num",s),this.target=u.findChildComponent(this.node,"target",d);var e=u.findChildComponent(this.node,"rewardScroll",a);this.rewardList=this.view.addUIList(e,_,!1,0),this.rewardList.touchEvent=!1,this.nodeChoose=u.findChild(this.node,"choose");for(var i=function(e){var i=u.findChild(t.node,"choose/item"+e),n=u.findChild(i,"notSet"),a=new l(t.view,u.findChild(i,"itemGrid"));t.view.addComponentCallbackListener(i,o.EventType.CLICK,(function(){var i=t.data.get_way,n=configPay_mall.getDataByKey(i[1]),o=IS(m).GetPayGiftInfo(n.id);n.buy_times>0&&o&&o.bought_times>=n.buy_times||uiMgr.openView("PayOptionalSelectView",t.data.get_way[1],e)}));var s={node:i,notSet:n,itemGrid:a};t.chooseItems[e]=s},n=1;n<=2;n++)i(n)},v.onRender=function(t,e){var n,o,a=this,s=IS(y).getInfo(),r=null!=(n=s.star_list[this.view.curIndex])?n:0,d=null!=(o=s.day_rewards[t.id])?o:0,l=r>=t.star_num,v=IS(y).getRewardSche(this.view.curIndex);if(l)this.target.string="",this.btnList.position=new h(177,0,0);else{for(var u,C=[],w=i(t.desc_parm);!(u=w()).done;){var p=u.value;C.push(c.formatStr("<color=#ab630e>%s</color>",p))}this.target.string=c.formatStr("<b><color=#544231>%s</color></b>",f.formatStr(t.desc,C)),this.btnList.position=new h(177,15,0)}this.rewarded.active=d,this.sel.active=v==t.star_num,this.arrowNormal.active=v!=t.star_num,this.btnLock.active=v<t.star_num;var I=t.get_way;if(2==I[0]){this.btnGet.node.active=!1,this.btnCharge.node.active=!d;var g=configPay_mall.getDataByKey(I[1]);this.btnChargeTxt.string=IS(m).GetPriceString(g.cost_level);var L=IS(m).GetPayGiftInfo(g.id),_=g.buy_times>0&&L&&L.bought_times>=g.buy_times;if(this.btnCharge.grayscale=!l||v<t.star_num||_,this.tipNode.active=g.ratio>0,this.tipNum.string=g.ratio>0?100*g.ratio+"%":"",g.type==b.Custom){var S;this.nodeChoose.active=!0;var G=null!=(S=IS(m).GetCustomInfoList(g.id))?S:[],R=configCustom_mall.getDataByKey(g.id);this.rewardList.datas=R.regular_reward;for(var k=R.custom_reward,x=function(t){var e=k.find((function(e){return e[0]==t}));if(e){var i,n;a.chooseItems[t].node.active=!0;var o=null!=(i=null==(n=G.find((function(e){return e.k==t})))?void 0:n.v)?i:0,s=e[1].findIndex((function(t){return t[0]==o}));if(-1!=s){a.chooseItems[t].notSet.active=!1,a.chooseItems[t].itemGrid.node.active=!0;var r=e[1][s];a.chooseItems[t].itemGrid.SetItemId(r[0],r[1])}else a.chooseItems[t].notSet.active=!0,a.chooseItems[t].itemGrid.node.active=!1}else a.chooseItems[t].node.active=!1},D=1;D<=2;D++)x(D)}else this.nodeChoose.active=!1,this.rewardList.datas=g.reward}else 1==I[0]?(this.btnGet.node.active=!d,this.btnCharge.node.active=!1,this.ad.active=!0,this.btnGetLable.active=!1,this.btnGet.grayscale=!l||v<t.star_num,this.tipNode.active=!1,this.rewardList.datas=t.reward,this.nodeChoose.active=!1):(this.btnGet.node.active=!d,this.btnCharge.node.active=!1,this.ad.active=!1,this.btnGetLable.active=!0,this.btnGet.grayscale=!l||v<t.star_num,this.tipNode.active=!1,this.rewardList.datas=t.reward,this.nodeChoose.active=!1,this.red.active=l&&v==t.star_num)},v.ClickReward=function(){var t,e,i=IS(y).getInfo(),n=null!=(t=i.star_list[this.view.curIndex])?t:0,o=null!=(e=i.day_rewards[this.data.id])?e:0,a=n>=this.data.star_num;if(!o&&a&&!this.btnLock.active){var s=this.data.get_way;if(2==s[0]){var r=configPay_mall.getDataByKey(s[1]),d=IS(m).GetPayGiftInfo(r.id);if(r.buy_times>0&&d&&d.bought_times>=r.buy_times)return;IS(m).Pay(s[1])}else 1==s[0]||IS(p).send_24_114(this.data.id)}},n}(v),_=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=u.findChild(this.node,"itemGrid"),this.itemGrid=new l(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(v);n._RF.pop()}}}));
