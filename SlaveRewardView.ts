System.register("chunks:///_virtual/SlaveRewardView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./BaseView.ts","./ConfigGlobal.ts","./MessageView.ts","./SlaveControl.ts","./SlaveDataCache.ts","./SlaveDefine.ts"],(function(t){"use strict";var e,i,n,o,a,s,r,d,l,h,u,c,m,p,f,v,S,T,g,C,I;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.Sprite,a=t.sys,s=t.HorizontalTextAlignment,r=t.ScrollView,d=t.Label,l=t.Color,h=t.js},function(t){u=t.SelectedType,c=t.ListItem},function(t){m=t.default},function(t){p=t.default},function(t){f=t.default},function(t){v=t.BaseView},function(t){S=t.ConfigGlobal},function(t){T=t.default},function(t){g=t.default},function(t){C=t.SlaveDataCache},function(t){I=t.SlaveEventDefine}],execute:function(){var y;i._RF.push({},"16a373d5yFJfL/C13sF9cGz","SlaveRewardView",void 0);var R=S.capture_slave_reward_limit,w=S.capture_slave_collecttime,L=0,_=1,x=((y={})[_]=0,y[L]=1,y),E=(t("default",function(t){function i(){var e;return(e=t.call(this)||this).scrollEquipList=void 0,e.nodeScroll=void 0,e.curType=void 0,e.timeTitleTxt=void 0,e.timeTxt=void 0,e.iconBg=void 0,e.rateTxt=void 0,e.awardTxt=void 0,e.dataInfo=void 0,e.addTimeCount=void 0,e.time=void 0,e.lightId=30001,e.imgBtnStart=void 0,e.startTime=void 0,e.typeItems=void 0,e.nodeRedFetch=void 0,e.name="SlaveRewardView",e.url="ui/module/slave/SlaveRewardView",e.poolTime=3e3,e}e(i,t);var c=i.prototype;return c.onInit=function(){var t=this,e=this.findChild("root/imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.onMaskClick()}));var i=this.findChild("root/content/btnStart");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){if(t.dataInfo&&!(t.curType==_&&t.dataInfo.sum_second<w)){if(t.curType==L){if(null==t.startTime)return;var e=f.serverTime-t.startTime;if(t.dataInfo.sum_second+e<w)return}IS(g).reqCaptureSlaveRewardGet(x[t.curType])}})),this.imgBtnStart=i.getComponent(o),this.nodeRedFetch=this.findChild("root/content/btnStart/point");var l=this.findChild("root/content/btnRule");this.addComponentCallbackListener(l,n.EventType.CLICK,(function(){T.showBoxTip({tip:GetLanguage(201790),btnCnt:1,horizontalAlign:a.uiMirror?s.RIGHT:s.LEFT})}));var c=this.findChildComponent("root/content/scrollEquipList",r);this.scrollEquipList=this.addUIList(c,E),this.scrollEquipList.selectedMode=u.SINGLE,this.nodeScroll=c.node,this.timeTitleTxt=this.findChildComponent("root/content/timeTxt",d),this.timeTxt=this.findChildComponent("root/content/timeTxt/time",d),a.uiMirror&&this.timeTxt.node.setScale(1,1,1),this.iconBg=this.findChild("root/content/icon_bg"),this.rateTxt=this.findChildComponent("root/content/icon_bg/rateTxt",d),this.awardTxt=this.findChildComponent("root/content/icon_bg/awardTxt",d),this.typeItems=[];for(var p=function(e){var i=t.findChild(h.formatStr("root/content/tabBtns/btnType%s",e)),o=e-1;t.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.curType!=o&&(t.curType=o,t.updateSelect())})),t.typeItems.push({txtName:m.findChildComponent(i,"txtNum",d),nodeSelect:m.findChild(i,"imgSelect"),type:o,nodeRed:m.findChild(i,"point")})},v=1;v<=2;v++)p(v)},c.registerUpdateHandler=function(){this.addEvent(I.SLAVE_REWARD_INFO_BACK,this.onSlaveRewardInfoBack,this)},c.onMaskClick=function(){this.close()},c.onAfterOpen=function(){this.time=0,this.curType=this.openArgs[0]||L,this.updateSelect()},c.updateTabRed=function(){for(var t=0;t<this.typeItems.length;t++){var e=this.typeItems[t],i=e.type;e.nodeRed.active=i==L?IS(C).getSlaveOnLineCanFetchRed()+IS(C).getSlaveOnlineFullRewardRed()>0:IS(C).getSlaveOutLineCanFetchRed()+IS(C).getSlaveOutlineFullRewardRed()>0}},c.updateFetchRed=function(){this.nodeRedFetch.active=this.curType==L?IS(C).getSlaveOnLineCanFetchRed()+IS(C).getSlaveOnlineFullRewardRed()>0:IS(C).getSlaveOutLineCanFetchRed()+IS(C).getSlaveOutlineFullRewardRed()>0},c.trySetRewardSee=function(){this.curType==L&&0==IS(C).hasSeeOnlineReward&&(IS(C).hasSeeOnlineReward=!0,IS(C).updateSlaveRedpoint(),normalEvent.emit(I.SLAVE_SEE_REWARD)),this.curType==_&&0==IS(C).hasSeeOutlineReward&&(IS(C).hasSeeOutlineReward=!0,IS(C).updateSlaveRedpoint(),normalEvent.emit(I.SLAVE_SEE_REWARD))},c.updateSelect=function(){for(var t=0;t<this.typeItems.length;t++){var e=this.typeItems[t].type;this.typeItems[t].nodeSelect.active=this.curType==e,this.typeItems[t].txtName.color=this.curType==e?new l(98,67,36):new l(242,220,184)}this.timeTitleTxt.string=this.curType==L?GetLanguage(200465):GetLanguage(200466),IS(g).reqCaptureSlaveReward(x[this.curType])},c.onBeforeClose=function(){this.time=0,this.dataInfo=null,this.curType=null,this.startTime=null},c.onDestroy=function(){},c.updateData=function(){this.rateTxt.string=h.formatStr("%s/m",this.dataInfo.coin_speed);for(var t=this.dataInfo.reward_list||[],e=new Array,i=0,n=0;n<t.length;n++)1!=t[n].gtid?e.push(t[n]):i=t[n].num;this.awardTxt.string=p.GetNumString(i),this.scrollEquipList.datas=e,this.updateTimeShow()},c.tryUpdateTimeShow=function(){if(null!=this.dataInfo&&(this.curType!=L||null!=this.startTime)){var t=this.curType==_?this.dataInfo.sum_second:this.dataInfo.sum_second+f.serverTime-this.startTime;this.dataInfo.coin_speed<=0&&t>=w||this.updateTimeShow()}},c.updateTimeShow=function(){if(null!=this.dataInfo&&(this.curType!=L||null!=this.startTime)){var t=this.curType==_?this.dataInfo.sum_second:this.dataInfo.sum_second+f.serverTime-this.startTime,e=t>=R,i=f.formatTimeForSecond(Math.min(t,R));this.timeTxt.string=e?h.formatStr("%s(%s)",i,GetLanguage(201359)):i,this.updateBtnStatus()}},c.updateBtnStatus=function(){var t=(this.curType==_?this.dataInfo.sum_second:this.dataInfo.sum_second+f.serverTime-this.startTime)>=w;this.imgBtnStart.grayscale=!t},c.onUpdate=function(t){null!=this.time&&(this.time=this.time+t,this.time>=1&&(this.time=0,this.tryUpdateTimeShow()))},c.onSlaveRewardInfoBack=function(t){t.type==x[this.curType]&&(this.dataInfo=t,this.curType==L&&(this.startTime=f.serverTime),this.updateData(),this.updateTabRed(),this.updateFetchRed(),this.trySetRewardSee())},i}(v)),function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,e.imgIcon=void 0,e.txtNum=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.imgFrame=m.findChildComponent(this.node,"imgFrame",o),this.imgIcon=m.findChildComponent(this.node,"imgIcon",o),this.txtNum=m.findChildComponent(this.node,"num",d)},n.onRender=function(t,e){var i=configGoods.getDataByKey(t.gtid),n=configColor.getDataByKey(i.quality);this.view.loadIcon(this.imgFrame,"icon_equip",n.path),this.view.loadIcon(this.imgIcon,i.icon_group,i.icon),this.txtNum.string=t.num+""},n.onItemClick=function(){},i}(c));i._RF.pop()}}}));

