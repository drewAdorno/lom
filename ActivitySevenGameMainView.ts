System.register("chunks:///_virtual/ActivitySevenGameMainView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ObjectUtil.ts","./BagModel.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivitySevenDataCache.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,a,s,r,h,o,d,c,l,u,f,p,v,C,m,g,S,I,k,y,L,T,w,_,G,A;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Label,a=t.Layout,s=t.Button,r=t.sys,h=t.HorizontalTextAlignment,o=t.ScrollView,d=t.js,c=t.Sprite,l=t.Color},function(t){u=t.ItemGrid},function(t){f=t.SelectedType,p=t.ListItem},function(t){v=t.default},function(t){C=t.default},function(t){m=t.default},null,function(t){g=t.default},function(t){S=t.BagModel},function(t){I=t.default},function(t){k=t.default},function(t){y=t.default},function(t){L=t.ActivityEventDefine,T=t.ActivityType,w=t.ActivityState,_=t.ActivityTaskState},function(t){G=t.default},function(t){A=t.BaseSubView}],execute:function(){i._RF.push({},"6746f5/vWtEcammBypJSzUu","ActivitySevenGameMainView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtLeftTime=void 0,e.taskItems=[],e.scrollChapter=void 0,e.curChapter=void 0,e.time=0,e.endTime=0,e.roundCfg=void 0,e.startTime=0,e.totalLength=void 0,e.name="ActivitySevenGameMainView",e}e(i,t);var c=i.prototype;return c.onInit=function(){var t=this;this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",n),this.dealMirrorLayout(this.findChildComponent("view/nodeTime",a));var e=this.findChild("btnTip");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){I.showBoxTip({tip:GetLanguage(201662),btnCnt:1,horizontalAlign:r.uiMirror?h.RIGHT:h.LEFT})}));var i=this.findChild("view/btnStart");this.addComponentCallbackListener(i,s.EventType.CLICK,(function(){t.onStartClick()})),this.taskItems=[];for(var c=function(e){var i=t.findChild(d.formatStr("view/task/task%s",e)),a=v.findChild(i,"btnFetch");t.addComponentCallbackListener(a,s.EventType.CLICK,(function(){t.onFetchClick(e)}));var r=v.findChild(i,"rewardContent/item");r.active=!1,t.taskItems.push({node:i,index:e,btnFetch:a,nodeHasFetch:v.findChild(i,"hasFetch"),nodeCantFetch:v.findChild(i,"txtCantFetch"),txtDesc:v.findChildComponent(i,"txtDesc",n),nodeRewardItem:r,nodeRewardContent:v.findChild(i,"rewardContent")})},l=1;l<=3;l++)c(l);var u=this.findChildComponent("view/ScrollView",o);this.scrollChapter=this.addUIList(u,B),this.scrollChapter.selectedMode=f.SINGLE},c.registerUpdateHandler=function(){this.addEvent(L.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(L.OnActivityInfoTaskUpdate,this.updateContent,this),this.addEvent(L.OnSevenChapterBack,this.OnSevenChapterBack,this)},c.onAfterOpen=function(){IS(k).send_24_104();var t=IS(y).GetActivityInfo(T.SevenGame);if(null!=t&&t.state==w.Open){this.roundCfg=IS(y).GetRoundCfg(T.SevenGame,t.round);var e=t.state_time[w.Open];this.endTime=e.end_time,this.startTime=e.start_time,this.curChapter=this.getDefaultSelectChapter();var i=configSeven_trial_stage.getDatas();this.totalLength=i.length,this.scrollChapter.datas=i;for(var n=0,a=0;a<i.length;a++)if(i[a].id==this.curChapter){n=a;break}this.scrollChapter.scrollTo(n),this.updateContent(),this.updateLeftTime()}else this.close()},c.updateContent=function(){for(var t=this.getTaskListByChapter(this.curChapter),e=0;e<this.taskItems.length;e++)this.updateSingleTask(this.taskItems[e],t[e]);this.updateChapterRed()},c.updateSingleTask=function(t,e){var i=configActivity_task.getDataByKey(e);t.txtDesc.string=i.desc;var n=this.getTaskState(e);t.btnFetch.active=n==_.CanGet,t.nodeHasFetch.active=n==_.HadGet,t.nodeCantFetch.active=n==_.Normal,null==t.rewardList&&(t.rewardList=[]);for(var a=i.reward||[],s=0;s<a.length;s++){var r=t.rewardList[s]||this.newRewardItem(t);r.itemId=a[s][0],r.itemGrid.SetItemId(a[s][0],a[s][1]),r.node.active=!0,t.rewardList[s]=r}for(var h=a.length;h<t.rewardList.length;h++)t.rewardList[h].node.active=!1},c.newRewardItem=function(t){var e=nodeInstantiate.instantiate(t.nodeRewardItem);e.parent=t.nodeRewardContent;var i=v.findChild(e,"itemGrid"),n={node:e,itemGrid:new u(this,i,(function(){IS(S).OpenItemTips(n.itemId,i)})),itemId:0};return n},c.getDefaultSelectChapter=function(){var t=this,e=g.clone(IS(G).sevenChapterIdList);return e.length<=0?1:(e.sort((function(e,i){var n=t.checkChapterHasTaskState(e,_.CanGet);return n!=t.checkChapterHasTaskState(i,_.CanGet)||t.checkChapterHasTaskState(e,_.Normal)!=t.checkChapterHasTaskState(i,_.Normal)?n?-1:1:i-e})),e[0])},c.getTaskListByChapter=function(t){var e=this.roundCfg.task_list[t-1];return configActivity_task_group.getDataByKey(e).task_list},c.getTaskState=function(t){var e=IS(y).GetActivityInfo(T.SevenGame).task_list[t];return null==e?_.Normal:e.state},c.checkChapterHasTaskState=function(t,e){for(var i=this.getTaskListByChapter(t),n=0;n<i.length;n++)if(this.getTaskState(i[n])==e)return!0;return!1},c.onBeforeClose=function(){this.time=0,this.endTime=0,this.startTime=0;for(var t=0;t<this.taskItems.length;t++){var e=this.taskItems[t].rewardList;if(null!=e)for(var i=0;i<e.length;i++)e[i].node.active=!1}},c.onUpdate=function(t){this.time=this.time+t,this.time>=1&&(this.time=0,this.updateLeftTime())},c.updateLeftTime=function(){this.txtLeftTime.string=m.formatTimeStringForSecond(Math.max(0,this.endTime-m.serverTime))},c.onDestroy=function(){for(var t=0;t<this.taskItems.length;t++){var e=this.taskItems[t].rewardList;if(null!=e){for(var i=0;i<e.length;i++)e[i].node.destroy(),delete e[i];this.taskItems[t].rewardList=null}}},c.updateInfo=function(t){t.type!=T.SevenGame||t.state==w.Open?this.updateContent():this.close()},c.OnSevenChapterBack=function(){this.scrollChapter.updateAll()},c.updateSelect=function(){this.scrollChapter.items.forEach((function(t,e,i){t.updateSelect()}))},c.updateChapterRed=function(){this.scrollChapter.items.forEach((function(t,e,i){t.updateRed(),t.updateStar()}))},c.onStartClick=function(){if(IS(G).checkChapterUnlock(this.curChapter))uiMgr.openView("ActivitySevenShotView",this.curChapter);else{var t=configSeven_trial_stage.getDataByKey(this.curChapter).open_day;this.getActivityOpenDay()<t?I.showFlyTip(C.formatStrWithMirrorDeal(GetLanguage(201212),t)):I.showFlyTip(GetLanguage(201214))}},c.onFetchClick=function(t){var e=this.getTaskListByChapter(this.curChapter)[t-1];if(this.getTaskState(e)==_.CanGet){var i=this.roundCfg.task_list[this.curChapter-1];IS(k).send_24_15(T.SevenGame,e,i)}},c.getActivityOpenDay=function(){var t=m.ServerDate(1e3*this.startTime),e=d.formatStr("%s/%s/%s %s:%s:%s",t.getFullYear(),t.getMonth()+1,t.getDate(),0,0,0),i=m.getServerDateByLocalStr(e).getTime()/1e3,n=m.serverTime-i;return Math.floor(n/86400+1)},i}(A));var B=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).chapterId=void 0,e.cfg=void 0,e.txtIndex=void 0,e.imgBg=void 0,e.nodeSelect=void 0,e.nodeRed=void 0,e.nodeStars=void 0,e.starItem=[],e.nodeLine=void 0,e.imgLine1=void 0,e.imgLine2=void 0,e}e(i,t);var a=i.prototype;return a.onInit=function(){this.txtIndex=v.findChildComponent(this.node,"txtChapter",n),this.imgBg=v.findChildComponent(this.node,"imgBg",c),this.nodeSelect=v.findChild(this.node,"imgSelect"),this.nodeRed=v.findChild(this.node,"RedPoint"),this.nodeStars=v.findChild(this.node,"stars");for(var t=1;t<=3;t++)this.starItem.push({node:v.findChild(this.node,d.formatStr("stars/star%s/imgStarOk",t)),star:t});this.nodeLine=v.findChild(this.node,"line"),this.imgLine1=v.findChildComponent(this.node,"line/line1",c),this.imgLine2=v.findChildComponent(this.node,"line/line2",c)},a.onRender=function(t,e){this.cfg=t,this.chapterId=t.id,this.txtIndex.string=String(this.chapterId),this.imgBg.grayscale=!IS(G).checkChapterUnlock(this.chapterId),this.txtIndex.color=IS(G).checkChapterUnlock(this.chapterId)?new l(70,17,8):new l(21,10,1);var i=this.view;this.nodeLine.active=this.chapterId<i.totalLength,this.updateSelect(),this.updateRed(),this.updateStar(),this.updateLine()},a.updateLine=function(){var t=this.view;this.chapterId>=t.totalLength||(this.view.loadIcon(this.imgLine1,"act_seven",IS(G).checkChapterUnlock(this.chapterId+1)?"zchd_ui_line01":"zchd_ui_line02"),this.view.loadIcon(this.imgLine2,"act_seven",IS(G).checkChapterUnlock(this.chapterId+1)?"zchd_ui_line01":"zchd_ui_line02"))},a.updateSelect=function(){var t=this.view;this.nodeSelect.active=t.curChapter==this.chapterId},a.updateStar=function(){if(IS(G).checkChapterUnlock(this.chapterId)){this.nodeStars.active=!0;for(var t=this.view,e=t.getTaskListByChapter(this.chapterId),i=0,n=0;n<e.length;n++)t.getTaskState(e[n])!=_.Normal&&(i+=1);for(var a=0;a<this.starItem.length;a++)this.starItem[a].node.active=this.starItem[a].star<=i}else this.nodeStars.active=!1},a.updateRed=function(){for(var t=this.view,e=t.getTaskListByChapter(this.chapterId),i=!1,n=0;n<e.length;n++)if(t.getTaskState(e[n])==_.CanGet){i=!0;break}this.nodeRed.active=i},a.onItemClick=function(){var t=this.view;if(IS(G).checkChapterUnlock(this.chapterId))t.curChapter!=this.chapterId&&(t.curChapter=this.chapterId,t.updateContent(),t.updateSelect());else{var e=this.cfg.open_day;t.getActivityOpenDay()<e?I.showFlyTip(C.formatStrWithMirrorDeal(GetLanguage(201212),e)):I.showFlyTip(GetLanguage(201214))}},i}(p);i._RF.pop()}}}));
