System.register("chunks:///_virtual/DoubleChapterPlanSetView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./MessageView.ts","./EquipDefine.ts","./PetDefine.ts","./RoleControl.ts","./RoleDefine.ts","./PlanDetailContent.ts","./SkillDefine.ts","./StatueControl.ts","./StatueDefine.ts","./ChapterDefine.ts","./DungeonControl.ts","./UIDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,o,a,s,l,h,p,u,d,r,f,c,C,v,L,I,E,_,m,D,b,g,S,N,y;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.HorizontalTextAlignment,a=t.RichText,s=t.Layout,l=t.ScrollView,h=t.js,p=t.Sprite,u=t.Label},function(t){d=t.SelectedType,r=t.ListItem},function(t){f=t.default},function(t){c=t.default},null,function(t){C=t.default},function(t){v=t.EquipEventDefine},function(t){L=t.PetEventDefine},function(t){I=t.default},function(t){E=t.RoleEventDefine},function(t){_=t.PlanDetailContent},function(t){m=t.SKILLEventDefine},function(t){D=t.default},function(t){b=t.StatueEventDefine},function(t){g=t.ChapterEventDefine},function(t){S=t.default},function(t){N=t.OpenFunction},function(t){y=t.BaseSubView}],execute:function(){i._RF.push({},"4e5afM47Y9ARJIQvVGG6YfH","DoubleChapterPlanSetView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtNum=void 0,e.planDetail=void 0,e.scrollHelpList=void 0,e.maxHelpNum=void 0,e.helpList=void 0,e.applyList=void 0,e.name="DoubleChapterPlanSetView",e.url="ui/module/dungeon/DoubleChapterPlanSetView",e}e(i,t);var p=i.prototype;return p.onInit=function(){var t=this.findChild("btnTip");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){C.showBoxTip({tip:GetLanguage(204797),btnCnt:1,horizontalAlign:o.LEFT})}));var e=this.findChild("btnOneKey");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){IS(I).send_role_quick_set_double_chapter_plan()}));var i=this.findChild("btnSetting");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){uiMgr.openView("DoubleChapterInvateSettingView")})),this.txtNum=this.findChildComponent("common_ui_xiaotidi/txtNum",a),this.dealMirrorLayout(this.findChildComponent("common_ui_xiaotidi",s)),this.adjustMirrorNode(this.txtNum.node,0,!0),this.planDetail=new _(this,this.findChild("scroll/view/PlanDetailContent")),this.planDetail.init();var h=this.findChildComponent("scrollHelpList",l);this.scrollHelpList=this.addUIList(h,w),this.scrollHelpList.selectedMode=d.SINGLE},p.registerUpdateHandler=function(){this.addEvent(E.PLAN_INFO_BACK,this.OnPlanInfoBack,this),this.addEvent(E.PLAN_INFO_UPDATE,this.onPlanInfoUpdate,this),this.addEvent(v.EQUIP_LIST_UPDATE,this.updateEquipShow,this),this.addEvent(E.ROLE_OPEN_FUNCTION_UPDATE,this.onRoleOpenFunctionUpdate,this),this.addEvent(m.SKILL_TAB_INFO_UPDATE,this.onSkillTabInfoUpdate,this),this.addEvent(L.PET_TAB_INFO_UPDATE,this.onPetTabInfoUpdate,this),this.addEvent(b.HOME_FARM_STATUE_INFO_BACK,this.onHomeFarmStatueInfoBack,this),this.addEvent(g.DOUBLE_CHAPTER_GET_HELP_MANAGE_INFO_BACK,this.onDoubleChapterGetHelpManageInfoBack,this),this.addEvent(g.DOUBLE_CHAPTER_AGREE_INVITE,this.onDoubleChapterAgreeInvate,this),this.addEvent(g.DOUBLE_CHAPTER_REFUSE_INVITE,this.onDoubleChapterRefuseInvate,this),this.addEvent(g.DOUBLE_CHAPTER_CANCEL_HELP,this.onDoubleChapterCancelHelp,this)},p.onAfterOpen=function(){this.updateContent(),IS(D).reqStatueInfo(),IS(S).reqDoubleChapterGetHelpManageInfo()},p.updateContent=function(){this.showContent()},p.showContent=function(){this.planDetail.showContent(0)},p.updateEquipShow=function(){this.planDetail.updateEquipShow()},p.showList=function(t){this.maxHelpNum=t.max_help_num,this.helpList=t.help_list,this.applyList=t.apply_list,this.updateList(),this.updateNum()},p.updateList=function(){var t=new Array;if(this.helpList)for(var e=0;e<this.helpList.length;e++)t.push({info:this.helpList[e],type:1});if(this.applyList)for(var i=0;i<this.applyList.length;i++)t.push({info:this.applyList[i],type:2});this.scrollHelpList.datas=t},p.updateNum=function(){var t=this.helpList.length,e=t>=this.maxHelpNum?"#e53b3b":"#544231";this.txtNum.string=h.formatStr("<b><color=%s>%s</color><color = #544231>/%s</color></b>",e,t,this.maxHelpNum)},p.onAgreeInvate=function(t){if(null!=this.applyList){for(var e,i,n=0;n<this.applyList.length;n++)if(this.applyList[n].role_id==t){e=this.applyList[n],i=n;break}this.applyList.splice(i,1),this.helpList.push(e),this.updateList(),this.updateNum()}},p.onRefuseInvate=function(t){if(null!=this.applyList){for(var e,i=0;i<this.applyList.length;i++)if(this.applyList[i].role_id==t){e=i;break}this.applyList.splice(e,1),this.updateList(),this.updateNum()}},p.onCancelHelp=function(t){if(null!=this.helpList){for(var e,i=0;i<this.helpList.length;i++)if(this.helpList[i].role_id==t){e=i;break}this.helpList.splice(e,1),this.updateList(),this.updateNum()}},p.onRoleOpenFunctionUpdate=function(t){t==N.FUNC_EQUIP_SKIN&&this.planDetail.updateEquipShow(),t==N.FUNC_LEGACY&&this.showContent()},p.onSkillTabInfoUpdate=function(t){this.planDetail.tryUpdateTabSkill(t)},p.onPetTabInfoUpdate=function(t){this.planDetail.tryUpdateTabPet(t)},p.onHomeFarmStatueInfoBack=function(t){this.planDetail.curStatueInfo=t,this.showContent()},p.onDoubleChapterGetHelpManageInfoBack=function(t){this.showList(t)},p.onDoubleChapterAgreeInvate=function(t){this.onAgreeInvate(t)},p.onDoubleChapterRefuseInvate=function(t){this.onRefuseInvate(t)},p.onDoubleChapterCancelHelp=function(t){this.onCancelHelp(t)},p.OnPlanInfoBack=function(){this.updateContent()},p.onPlanInfoUpdate=function(t){0==t&&this.showContent()},p.onBeforeClose=function(){},p.onDestroy=function(){},i}(y));var w=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).imgHead=void 0,e.nodeChapter=void 0,e.txtChapter=void 0,e.nodeInvate=void 0,e.txtName=void 0,e.txtLevel=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.imgHead=f.findChildComponent(this.node,"head",p),this.nodeChapter=f.findChild(this.node,"chapter"),this.txtChapter=f.findChildComponent(this.node,"chapter/Label",u),this.nodeInvate=f.findChild(this.node,"newInvate"),this.txtName=f.findChildComponent(this.node,"txtName",u),this.txtLevel=f.findChildComponent(this.node,"txtLevel",u),this.view.adjustMirrorNode(this.txtLevel.node,0,!0)},n.onRender=function(t,e){var i=t.info,n=t.type;this.nodeChapter.active=1==n,this.nodeInvate.active=2==n,this.txtName.string=i.name,this.txtLevel.string=h.formatStr("Lv.%s",i.level),this.view.loadRemoteIcon(i.head.url,this.imgHead),1==n&&(this.txtChapter.string=c.formatStr(GetLanguage(204880),i.help_chapter_num))},n.onItemClick=function(){1==this.data.type?uiMgr.openView("DoubleChapterHelpManageView",this.data.info):2==this.data.type&&uiMgr.openView("DoubleChapterInvateDealView",this.data.info)},i}(r);i._RF.pop()}}}));
