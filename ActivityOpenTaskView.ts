System.register("chunks:///_virtual/ActivityOpenTaskView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ItemIcon.ts","./PayControl.ts","./PayDataCache.ts","./PayDefine.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,a,o,d,r,c,h,u,f,v,l,m,p,y,I,b,g,G,C,T,x,S,_;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,s=t.Button,a=t.Sprite,o=t.Label,d=t.ScrollView,r=t.ProgressBar,c=t.js},function(t){h=t.ItemGrid},function(t){u=t.ListItem},function(t){f=t.default},function(t){v=t.default},function(t){l=t.default},null,function(t){m=t.IconAseetType},function(t){p=t.default},function(t){y=t.default},function(t){I=t.PayEventDefine,b=t.GiftType},function(t){g=t.default},function(t){G=t.default},function(t){C=t.ActivityEventDefine,T=t.ActivityType,x=t.ActivityState,S=t.ActivityTaskState},function(t){_=t.BaseView}],execute:function(){n._RF.push({},"e7341pe8O9Ny4/baBZVJj9V","ActivityOpenTaskView",void 0);var k=1,L=2,B=(t("default",function(t){function n(){var i;return(i=t.call(this)||this).taskRed=void 0,i.payRed=void 0,i.topBg=void 0,i.txtLeftTime=void 0,i.payList=void 0,i.taskList=void 0,i.curIndex=0,i.tabBtns=[],i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.name="ActivityOpenTaskView",i.url="ui/module/activity/ActivityOpenTaskView",i}i(n,t);var r=n.prototype;return r.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,s.EventType.CLICK,(function(){t.close()}));var e=this.findChild("btnClose");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.close()})),this.topBg=this.findChildComponent("container/topBg",a),this.txtLeftTime=this.findChildComponent("container/topBg/txtLeftTime",o),this.taskRed=this.findChild("tab/scrollTab/view/content/item1/red"),this.payRed=this.findChild("tab/scrollTab/view/content/item2/red");for(var n=function(i){var e=f.findChild(t.node,c.formatStr("tab/scrollTab/view/content/item%s",i)),n={itemGo:e,normalGo:f.findChild(e,"normal"),selectedGo:f.findChild(e,"selected"),index:i};t.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.SetIndex(n.index)})),t.tabBtns[i]=n},r=1;r<=2;r++)n(r);var h=this.findChildComponent("container/payList",d);this.payList=this.addUIList(h,B,!0);var u=this.findChildComponent("container/taskList",d);this.taskList=this.addUIList(u,w)},r.registerUpdateHandler=function(){this.addEvent(I.PAY_INFO_UPDATE,this.OnPayGiftInfoUpdate,this),this.addEvent(C.OnActivityInfoTaskUpdate,this.OnTaskUpdate,this),this.addEvent(C.OnActivityInfoUpdate,this.OnTaskUpdate,this)},r.onAfterOpen=function(){var t;IS(g).send_24_14(T.OpenTask);var i=IS(G).GetActivityInfo(T.OpenTask);this.taskRed.active=IS(G).GetTaskRedNum(i.type)>0;var n=null!=(t=i.state_time[i.state])?t:i.state_time[x.Open];this.leftTime=n.end_time-l.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=l.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(200026);var s=IS(y).GetAcivityGift(b.Activity,i.type,i.round);s.length>0?(this.tabBtns[L].itemGo.active=!0,s.sort((function(t,i){var e=IS(y).GetPayGiftInfo(t.id),n=IS(y).GetPayGiftInfo(i.id),s=e&&e.bought_times&&e.bought_times>=e.payCfg.buy_times;return s!=(n&&n.bought_times&&n.bought_times>=n.payCfg.buy_times)?s?1:-1:t.id-i.id})),this.payList.datas=s):this.tabBtns[L].itemGo.active=!1,this.payRed.active=!1;for(var a,o=e(s);!(a=o()).done;){var d=a.value;if(0==d.price){var r=IS(y).GetPayGiftInfo(d.id);if(!r||2!=r.rewardState){this.payRed.active=!0;break}}}var c=[];for(var h in i.task_list)i.task_list.hasOwnProperty(h)&&c.push(i.task_list[h]);c.sort((function(t,i){return 1==t.state&&1!=i.state?-1:1!=t.state&&1==i.state?1:t.state!=i.state?t.state-i.state:t.id-i.id})),this.taskList.datas=c,this.SetIndex(k)},r.onBeforeClose=function(){this.canUpdate=!1,this.curIndex>0&&(this.tabBtns[this.curIndex].normalGo.active=!0,this.tabBtns[this.curIndex].selectedGo.active=!1,this.curIndex=0)},r.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=l.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},r.onDestroy=function(){},r.SetIndex=function(t){this.curIndex!=t&&(this.curIndex>0&&(this.tabBtns[this.curIndex].selectedGo.active=!1,this.tabBtns[this.curIndex].normalGo.active=!0),this.curIndex=t,this.tabBtns[this.curIndex].normalGo.active=!1,this.tabBtns[this.curIndex].selectedGo.active=!0,this.curIndex==L?(this.payList.node.active=!0,this.taskList.node.active=!1,this.loadIcon(this.topBg,"xfkh","xfkh_img_kflb",null,m.UI_ATLAS,!0)):this.curIndex==k&&(this.payList.node.active=!1,this.taskList.node.active=!0,this.loadIcon(this.topBg,"xfkh","xfkh_img_sqc",null,m.UI_ATLAS,!0)))},r.OnPayGiftInfoUpdate=function(){var t=IS(G).GetActivityInfo(T.OpenTask),i=IS(y).GetAcivityGift(b.Activity,t.type,t.round);i.sort((function(t,i){var e=IS(y).GetPayGiftInfo(t.id),n=IS(y).GetPayGiftInfo(i.id),s=e&&e.bought_times&&e.bought_times>=e.payCfg.buy_times;return s!=(n&&n.bought_times&&n.bought_times>=n.payCfg.buy_times)?s?1:-1:t.id-i.id})),this.payList.datas=i,this.payRed.active=!1;for(var n,s=e(i);!(n=s()).done;){var a=n.value;if(0==a.price){var o=IS(y).GetPayGiftInfo(a.id);if(!o||2!=o.rewardState){this.payRed.active=!0;break}}}IS(G).UpdateMainRedByActType(T.OpenTask)},r.OnTaskUpdate=function(){this.taskRed.active=IS(G).GetTaskRedNum(T.OpenTask)>0;var t=IS(G).GetActivityInfo(T.OpenTask),i=[];for(var e in t.task_list)t.task_list.hasOwnProperty(e)&&i.push(t.task_list[e]);i.sort((function(t,i){return 1==t.state&&1!=i.state?-1:1!=t.state&&1==i.state?1:t.state!=i.state?t.state-i.state:t.id-i.id})),this.taskList.datas=i},n}(_)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtDesc=void 0,i.txtPrice=void 0,i.btnBuy=void 0,i.out=void 0,i.rewardScroll=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.txtName=f.findChildComponent(this.node,"title/Label",o),this.txtDesc=f.findChildComponent(this.node,"txtDesc",o),this.txtPrice=f.findChildComponent(this.node,"btnBuy/Label",o),this.out=f.findChild(this.node,"out"),this.btnBuy=f.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,s.EventType.CLICK,(function(){0==t.data.price?IS(p).send_19_2(t.data.id):IS(y).Pay(t.data.id)}));var i=f.findChildComponent(this.node,"rewardScroll",d);this.rewardScroll=this.view.addUIList(i,A,!1),this.rewardScroll.touchEvent=!1},n.onRender=function(t,i){this.txtName.string=t.name,this.rewardScroll.datas=t.reward;var e=IS(y).GetPayGiftInfo(t.id);0==t.price?(this.txtPrice.string=GetLanguage(200045),e&&2==e.rewardState?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=v.formatStrWithMirrorDeal(GetLanguage(200046),t.buy_times))):(this.txtPrice.string=IS(y).GetPriceString(t.cost_level),0==t.buy_times?(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!1):e&&e.bought_times?e.bought_times>=e.payCfg.buy_times?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=v.formatStrWithMirrorDeal(GetLanguage(200028),t.buy_times-e.bought_times,t.buy_times)):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=v.formatStrWithMirrorDeal(GetLanguage(200028),t.buy_times,t.buy_times)))},e}(u)),w=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).txtDesc=void 0,i.btnGet=void 0,i.received=void 0,i.undone=void 0,i.pb=void 0,i.schedule=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.itemGridNode=f.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode),this.txtDesc=f.findChildComponent(this.node,"txtDesc",o),this.pb=f.findChildComponent(this.node,"ProgressBar",r),this.schedule=f.findChildComponent(this.node,"ProgressBar/schedule",o),this.received=f.findChild(this.node,"received"),this.undone=f.findChild(this.node,"undone"),this.btnGet=f.findChild(this.node,"btnGet"),this.view.addComponentCallbackListener(this.btnGet,s.EventType.CLICK,(function(){IS(g).send_24_15(T.OpenTask,t.data.task_id,t.data.group_id)}))},n.onRender=function(t,i){this.txtDesc.string=t.cfg.desc,this.itemGrid.SetItemId(t.cfg.reward[0][0],t.cfg.reward[0][1]),this.schedule.string=c.formatStr("%s/%s",t.count,t.cfg.condition[2]),this.pb.progress=t.count/t.cfg.condition[2],t.state==S.CanGet?(this.received.active=!1,this.undone.active=!1,this.btnGet.active=!0):t.state==S.HadGet?(this.received.active=!0,this.undone.active=!1,this.btnGet.active=!1):(this.received.active=!1,this.undone.active=!0,this.btnGet.active=!1)},e}(u),A=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=f.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(u);n._RF.pop()}}}));
