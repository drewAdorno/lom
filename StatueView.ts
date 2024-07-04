System.register("chunks:///_virtual/StatueView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./UILabel.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagModel.ts","./ResItems.ts","./MessageView.ts","./GainBuffDataCache.ts","./GainBuffDefine.ts","./RoleDefine.ts","./StatueControl.ts","./StatueDataCache.ts","./StatueDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,a,o,s,f,h,l,r,u,d,c,g,v,p,m,b,C,L,S,_,B,y,w,x,T,D,I,E,k;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,a=t.Button,o=t.ProgressBar,s=t.ScrollView,f=t.LabelOutline,h=t.Label,l=t.Color,r=t.Vec2,u=t.Sprite},function(t){d=t.audioMgr},function(t){c=t.UILabel},function(t){g=t.ListItem},function(t){v=t.default},function(t){p=t.default},function(t){m=t.default},null,function(t){b=t.ConfigGlobal},function(t){C=t.BagModel},function(t){L=t.ResItems},function(t){S=t.default},function(t){_=t.GainBuffDataCache},function(t){B=t.GainBuffEventDefine,y=t.GainBuffType,w=t.GainBuff},function(t){x=t.RoleEventDefine,T=t.PlayerAttr},function(t){D=t.default},function(t){I=t.StatueDataCache},function(t){E=t.StatueEventDefine},function(t){k=t.BaseView}],execute:function(){n._RF.push({},"6de88LAcwdGw5Js8TBielRu","StatueView",void 0);var P,U=[{id:9}];t("StatueView",function(t){function n(){var i;(i=t.call(this)||this).buffEntries=void 0,i.btnDraw=void 0,i.txtDraw=void 0,i.pbExp=void 0,i.txtExp=void 0,i.txtTitle=void 0,i.btnChange=void 0,i.nodeChangeState=void 0,i.nodeSpecialBuff=void 0,i.nodeBuff=void 0,i.updatebufftime=void 0,i.outlineDrawTxt=void 0,i.buffList=void 0,i.nutrientsToDraw=1,i.cfg={exp:0,level:1,maxLevel:1},i.suit_id=void 0,i.curTab=void 0,i.curData=void 0,i.resItems=void 0,i.txtCurPlan=void 0,i.btnCurPlan=void 0,i.isSelect=!1,i.nodePlanDown=void 0,i.nodePlanUp=void 0,i.nodeSelectPlan=void 0,i.nodeSelectPlanMask=void 0,i.planItemList=[],i.name="StatueView",i.url="ui/module/statue/StatueView",i.poolTime=3e3,i.fullScreen=!0;var e=configStatue_level.getDatas();return i.cfg.maxLevel=e[e.length-1].level,i}i(n,t);var u=n.prototype;return u.onInit=function(){var t=this;this.resItems=new L(this,"content/resRoot"),this.resItems.init(U);var i=this.findChild("content/btnClose");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.close()}));var e=this.findChild("content/btnDetail");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){uiMgr.openView("StatueDetailView",t.cfg)})),this.txtTitle=this.findChildComponent("content/txtTitle",c),this.pbExp=this.findChildComponent("content/pbExp",o),this.txtExp=this.pbExp.getComponentInChildren(c);var n=this.findChildComponent("content/ScrollView",s);this.buffEntries=this.addUIList(n,G,!1),this.btnDraw=this.findChild("content/btnDraw"),this.addComponentCallbackListener(this.btnDraw,a.EventType.CLICK,(function(){t.onDraw()})),this.txtDraw=v.findChildComponent(this.btnDraw,"txtCost",c),this.outlineDrawTxt=this.txtDraw.node.getComponent(f),this.nodeSelectPlanMask=this.findChild("content/maskSelectPlan"),this.addComponentCallbackListener(this.nodeSelectPlanMask,a.EventType.CLICK,(function(){t.setSelectPlanActive(!1)})),this.nodePlanDown=this.findChild("content/btnCurPlan/imgDown"),this.nodePlanUp=this.findChild("content/btnCurPlan/imgUp"),this.nodeSelectPlan=this.findChild("content/planSelect"),this.btnCurPlan=this.findChild("content/btnCurPlan"),this.addComponentCallbackListener(this.btnCurPlan,a.EventType.CLICK,(function(){t.setSelectPlanActive(!t.isSelect)})),this.nodeChangeState=this.findChild("content/changeState"),this.btnChange=this.findChild("content/btnChange"),this.addComponentCallbackListener(this.btnChange,a.EventType.CLICK,(function(){IS(D).sendTabchange(t.curTab)})),this.nodeSpecialBuff=this.findChild("content/SpecialBuff");for(var h=0;h<4;h++)this.planItemList[h]=new F(this.findChild("content/planSelect/selectItem"+(h+1)),this,h+1);var l=this.findChild("content/btnRename");this.addComponentCallbackListener(l,a.EventType.CLICK,(function(){uiMgr.openView("StatueRenameView",t.curTab)}))},u.onAfterOpen=function(){IS(D).reqStatueInfo(),this.onGainBuffUpdate(),this.setSelectPlanActive(!1)},u.registerUpdateHandler=function(){this.addEvent(E.HOME_FARM_STATUE_INFO_BACK,this.onUpdateBuffEntries,this),this.addEvent(x.ROLE_RES_UPDATE,this.onUpdateNutrients,this),this.addEvent(E.HOME_FARM_STATUE_UPDATE_BUFF_LOCK,this.onUpdateBuffEntryLockState,this),this.addEvent(E.HOME_FARM_STATUE_UPDATE_TAB_NAME,this.onUpdateTabName,this),this.addEvent(E.HOME_FARM_STATUE_UPDATE_TAB_IDX,this.onUpdateTabIdx,this),this.addEvent(B.GAINBUFF_INFO_UPDATE,this.onGainBuffUpdate,this)},u.onBeforeClose=function(){},u.onDestroy=function(){},u.onUpdate=function(t){this.updatebufftime>0&&(this.updatebufftime=this.updatebufftime-t,this.updatebufftime<=0&&(this.updatebufftime=0,this.nodeSpecialBuff.active=!1),this.nodeBuff.txtTime.string=m.formatTimeForSecond(this.updatebufftime))},u.onGainBuffUpdate=function(){var t={},i=IS(_).gain_buff_info[y.StatueBuff];if(i){this.nodeSpecialBuff.active=!0;for(var n,a=e(i);!(n=a()).done;){var o=n.value;t[o.k]=o.v}this.nodeBuff=new w(this.nodeSpecialBuff,this,y.StatueBuff);var s=configSpecil_buff.getDataByKey(y.StatueBuff);this.loadIcon(this.nodeBuff.icon,"icon_buff",s.state_icon),s.time>0?(this.nodeBuff.nodeTime.active=!0,this.updatebufftime=t[2]-m.serverTime,this.nodeBuff.txtTime.string=m.formatTimeForSecond(t[2]-m.serverTime)):this.nodeBuff.nodeTime.active=!1,s.quantity>0?(t[1]<=0&&(this.nodeSpecialBuff.active=!1),this.nodeBuff.txtNum.node.active=!0,this.nodeBuff.txtNum.string=t[1]+"/"+s.quantity):this.nodeBuff.txtNum.node.active=!1}else this.nodeSpecialBuff.active=!1},u.setSelectPlanActive=function(t){this.nodePlanDown.active=!t,this.nodePlanUp.active=t,this.nodeSelectPlan.active=t,this.nodeSelectPlanMask.active=t,this.isSelect=t,t&&this.refreshPlanList()},u.refreshPlanList=function(){for(var t=0,i=0;i<b.statue_tab_limit.length;i++)i!=this.curTab-1&&(this.planItemList[t].txtName.string=IS(I).statuePlanName[i],this.planItemList[t].imgLock.active=IS(I).statuePlanLocked[i],this.planItemList[t].planId=i+1,t++)},u.refreshShow=function(t){if(this.curData){this.nodeChangeState.active=this.suit_id==this.curTab,this.btnChange.active=this.suit_id!=this.curTab;for(var i=null,e=0;e<b.statue_tab_limit.length;e++){var n=void 0;this.curData.tab_list[e]?(n=""==this.curData.tab_list[e].name?p.formatStrWithMirrorDeal(GetLanguage(200488),this.curData.tab_list[e].tab):this.curData.tab_list[e].name,this.curData.tab_list[e].tab==t&&(i=this.curData.tab_list[e],this.btnCurPlan.getComponentInChildren(h).string=n),IS(I).statuePlanName[this.curData.tab_list[e].tab-1]=n):(n=p.formatStrWithMirrorDeal(GetLanguage(200488),e+1),IS(I).statuePlanName[e]=n),IS(I).statuePlanLocked[e]=this.cfg.level<b.statue_tab_limit[e][1]}var a=configStatue_pos.getDatas();this.buffList=i.attr_list,this.sortBuffList(),this.buffList.length=a.length,this.buffEntries.datas=this.buffList,this.updateTxtNutrientsNum()}},u.onUpdateBuffEntries=function(t){if(this.curData=t,this.cfg.exp=t.exp,this.cfg.level=t.level,this.txtTitle.string=p.formatStrWithMirrorDeal(GetLanguage(201853),t.level),t.level>=this.cfg.maxLevel){var i,e=(null==(i=configStatue_level.getDataByKey(this.cfg.maxLevel))?void 0:i.expend)||0;this.pbExp.progress=1,this.txtExp.string=String(e)}else{var n,a,o=(null==(n=configStatue_level.getDataByKey(t.level))?void 0:n.expend)||0,s=(null==(a=configStatue_level.getDataByKey(t.level+1))?void 0:a.expend)||0,f=t.exp-o,h=s-o;this.pbExp.progress=f/h,this.txtExp.string=f+"/"+h}this.suit_id=t.tab,this.curTab=t.show_tab,this.nodeChangeState.active=this.suit_id==this.curTab,this.btnChange.active=this.suit_id!=this.curTab,this.refreshShow(t.show_tab)},u.updateTxtNutrientsNum=function(){for(var t,i=0,n=0,a=e(this.buffList);!(t=a()).done;){var o=t.value;o&&-1!=o.pos&&2!=o.is_lock&&(n+=1,i+=o.is_lock?1:0)}this.nutrientsToDraw=i==n?0:configStatue_spend.getDataByKey(i).spend[1],this.txtDraw.string=i==n?GetLanguage_UI(300326):String(this.nutrientsToDraw);var s=i==n||IS(C).getGoodsCountByGoodsGtid(9)>=this.nutrientsToDraw;this.txtDraw.color=s?new l(255,255,255):new l(242,52,52),this.outlineDrawTxt.color=s?new l(41,65,21):new l(76,76,76)},u.onUpdateNutrients=function(t){t==T.ROLE_NUTRIENTS&&this.resItems.update()},u.onDraw=function(){for(var t=this,i=0;i<this.buffList.length;i++)if(null!=this.buffList[i]&&null!=this.buffList[i].is_lock&&2==this.buffList[i].is_lock){var e=configErrorInfo.getDataByKey(125).info;return void S.showFlyTip(e)}if(0!=this.nutrientsToDraw)if(IS(C).getGoodsCountByGoodsGtid(9)<this.nutrientsToDraw){var n=configErrorInfo.getDataByKey(127).info;S.showFlyTip(n)}else{for(var a=!0,o=IS(I).getMaxQualityByLev(this.cfg.level),s=0;s<this.buffList.length;++s)this.buffList[s]&&this.buffList[s].quality==o&&0==this.buffList[s].is_lock&&(a=!1);if(a)this.sendDraw();else{var f=GetLanguage(200606);S.showBoxTip({tip:f,title:GetLanguage(200048),todayTog:"sendDraw9",func:function(i){"type_yes"==i&&t.sendDraw()}})}}else{var h=configErrorInfo.getDataByKey(162).info;S.showFlyTip(h)}},u.sendDraw=function(){IS(D).reqStatueDraw(this.curTab),this.addUIEffect("prefab/ui-effect/MX_tx_diaoxiang_gongpin",this.node,1,new r(0,300)),d.playSound("qiling_qidao"),this.buffEntries.items.forEach((function(t,i,e){t.playEffect()}))},u.onUpdateBuffEntryLockState=function(t){for(var i=0;i<this.buffList.length;++i)this.buffList[i]&&this.buffList[i].pos==t.pos&&(this.buffList[i]=t);this.sortBuffList(),this.buffEntries.datas=this.buffList,this.updateTxtNutrientsNum()},u.onUpdateTabName=function(t){var i=""==t.name?p.formatStrWithMirrorDeal(GetLanguage(200488),t.tab):t.name;IS(I).statuePlanName[t.tab-1]=i,t.tab==this.curTab&&(this.btnCurPlan.getComponentInChildren(h).string=i)},u.onUpdateTabIdx=function(t){this.suit_id=t.tab,this.nodeChangeState.active=this.suit_id==this.curTab,this.btnChange.active=this.suit_id!=this.curTab},u.sortBuffList=function(){this.buffList.sort((function(t,i){return t?i?t.pos<i.pos?-1:1:-1:1}))},u.unlockBuffEntry=function(t){IS(D).reqStatueUnlockBuff(t,this.curTab)},u.setBuffEntryLockState=function(t){IS(D).reqStatueSetBuffLockState(t,this.curTab)},n}(k));!function(t){t[t.BuffUnlock=0]="BuffUnlock",t[t.BuffLock=1]="BuffLock",t[t.LevelUnlockable=2]="LevelUnlockable",t[t.LevelLock=3]="LevelLock"}(P||(P={}));var R=["jy_png_di02","jy_png_di01","jy_png_di03","jy_png_di05"],M="farm_statue",A={6:{"%":String.fromCharCode(32),"(":String.fromCharCode(33),")":String.fromCharCode(34),offset:-13},7:{"%":String.fromCharCode(45),"(":String.fromCharCode(46),")":String.fromCharCode(47),offset:0},8:{"%":String.fromCharCode(58),"(":String.fromCharCode(59),")":String.fromCharCode(60),offset:13},9:{"%":String.fromCharCode(71),"(":String.fromCharCode(72),")":String.fromCharCode(73),offset:26}},G=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(i=t.call.apply(t,[this].concat(n))||this).imgBg=void 0,i.imgLevel=void 0,i.imgLevel1=void 0,i.imgLine1=void 0,i.txtProbability=void 0,i.outlineProbability=void 0,i.txtRatio=void 0,i.txtRatioBmfont=void 0,i.imgLine2=void 0,i.imgLock=void 0,i.imgHighlight=void 0,i._view=void 0,i.state=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.imgBg=v.findChildComponent(this.node,"imgBg",u),this.imgLevel=v.findChildComponent(this.node,"imgLevel",u),this.imgLevel1=v.findChildComponent(this.node,"imgLevel1",u),this.imgLine1=v.findChildComponent(this.node,"imgLine1",u),this.txtProbability=v.findChildComponent(this.node,"text/txtProbability",c),this.outlineProbability=this.txtProbability.node.getComponent(f),this.txtRatio=v.findChildComponent(this.node,"txtRatio",c),this.txtRatioBmfont=v.findChildComponent(this.node,"txtRatioBmfont",c),this.imgLine2=v.findChildComponent(this.node,"imgLine2",u),this.imgLock=v.findChildComponent(this.node,"imgLock",u),this.imgHighlight=v.findChildComponent(this.node,"imgHighlight",u),this._view=this.view,this.view.addComponentCallbackListener(this.node,a.EventType.CLICK,(function(){t.onUnlockOrLockToggle()}))},n.onRender=function(t,i){if(this.state=null==t?P.LevelLock:t.is_lock,this.view.loadIcon(this.imgBg,M,R[this.state]),this.state<=P.BuffLock){var e;this.imgLevel.node.active=!0,this.imgLevel1.node.active=!1;var n=configColor.getDataByKey(t.quality);this.view.loadIcon(this.imgLevel,M,"jy_png_"+n.statue_name),this.view.loadIcon(this.imgLine1,M,"jy_png_fengexian01");var a=(null==(e=configAttribute.getDataByKey(t.attr_id))?void 0:e.desc)||"";this.txtProbability.string=a+"+"+(.01*t.value).toFixed(2)+"%";for(var o=this.view,s=configStatue_level.getDataByKey(o.cfg.level).pro_quality,f=1,h=s.length-1;h>=0;--h)if(s[h][1]>0){f=s[h][0];break}for(var r=1,u=configStatue_attr.getDatas(),d=u.length-1;d>=0;--d)if(u[d].attr_id==t.attr_id&&u[d].product<=f){r=u[d].value[1];break}if(t.quality>=6){for(var c=A[t.quality],g=String(Math.ceil(100*t.value/r)),v=[],p=0;p<g.length;++p)v.push(g.charCodeAt(p)),v[p]+=c.offset;this.txtRatioBmfont.string=""+c["("]+String.fromCharCode.apply(String,v)+c["%"]+c[")"],this.txtRatio.node.active=!1,this.txtRatioBmfont.node.active=!0}else{var m=(null==n?void 0:n.color)||"#FFFFFF",b=new l;l.fromHEX(b,m),this.txtRatio.color=b,this.txtRatio.string="( "+Math.ceil(100*t.value/r)+"% )",this.txtRatio.node.active=!0,this.txtRatioBmfont.node.active=!1}this.imgLine2.node.active=!0,this.view.loadIcon(this.imgLock,M,this.state==P.BuffLock?"jy_suo_01":"jy_suo_02"),this.imgLock.node.active=!0,this.imgHighlight.node.active=!1}else{var C,L=this.state==P.LevelUnlockable;this.imgLevel.node.active=!1,this.imgLevel1.node.active=!0,this.txtRatioBmfont.node.active=!1,this.view.loadIcon(this.imgLine1,M,L?"jy_png_fengexian01":"jy_png_fengexian02"),this.txtRatio.node.active=!1,this.txtProbability.string=L?"????????("+GetLanguage(300081)+")":"????????("+((null==(C=configStatue_pos.getDataByKey(i+1))?void 0:C.desc)||"")+")",this.outlineProbability.color=L?new l(92,55,26):new l(0,0,0),this.outlineProbability.width=L?3:2,this.imgLine2.node.active=!1,this.imgLock.node.active=!1,this.imgHighlight.node.active=L}},n.onUnlockOrLockToggle=function(){this.data&&(this.state==P.LevelUnlockable?(this._view.unlockBuffEntry(this.data.pos),d.playSound("diaoxiang_jiesuo"),this.view.addUIEffect("prefab/ui-effect/MX_tx_diaoxiang_jiesuo",this.node,1.4,new r(310,-35))):this.state<=P.BuffLock&&(S.showFlyTip(this.state==P.BuffLock?GetLanguage(200611):GetLanguage(200612)),this._view.setBuffEntryLockState(this.data.pos)))},n.playEffect=function(){this.state==P.BuffUnlock&&this.view.addUIEffect("prefab/ui-effect/MX_tx_diaoxiang_citiao",this.node,1.4,new r(310,-35))},e}(g),F=function(t,i,e){var n=this;this.node=void 0,this.view=void 0,this.txtName=void 0,this.imgLock=void 0,this.planId=void 0,this.node=t,this.view=i,this.txtName=v.findChildComponent(this.node,"txtPlan",h),this.imgLock=v.findChild(this.node,"lock"),this.planId=e,this.view.addComponentCallbackListener(this.node,a.EventType.CLICK,(function(){if(n.imgLock.active)S.showFlyTip(p.formatStrWithMirrorDeal(GetLanguage(201896),b.statue_tab_limit[n.planId-1][1]));else{var t=n.view;t.curTab=n.planId,t.refreshShow(n.planId),t.setSelectPlanActive(!1)}}))};n._RF.pop()}}}));
