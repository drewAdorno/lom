System.register("chunks:///_virtual/ActivityStrategySkillMainView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ObjectUtil.ts","./MessageView.ts","./ActivityDefine.ts","./ActivityStrategyControl.ts","./ActivityStrategyDataCache.ts","./BaseView.ts"],(function(i){"use strict";var t,e,n,o,l,s,a,d,r,c,h,k,f,v,m,S,u,g,C;return{setters:[function(i){t=i.inheritsLoose},function(i){e=i.cclegacy,n=i.Button,o=i.Label,l=i.ScrollView,s=i.js,a=i.Sprite,d=i.ProgressBar},function(i){r=i.audioMgr},function(i){c=i.SelectedType,h=i.ListItem},function(i){k=i.default},function(i){f=i.default},null,function(i){v=i.default},function(i){m=i.default},function(i){S=i.ActivityEventDefine},function(i){u=i.default},function(i){g=i.default},function(i){C=i.BaseView}],execute:function(){e._RF.push({},"716feh46SFFYbgA+Yhv+nRy","ActivityStrategySkillMainView",void 0);i("default",function(i){function e(){var t;return(t=i.call(this)||this).nodeWearMask=void 0,t.imgBtnOneKeyUpgrade=void 0,t.outlineOneKeyUpgrade=void 0,t.scrollSkillList=void 0,t.nodeScroll=void 0,t.posItemList=[],t.skillList=void 0,t.curChooseSkillId=void 0,t.recommendSkill=void 0,t.txtTotalEffect=void 0,t.name="ActivityStrategySkillMainView",t.url="ui/module/ActivityStrategy/ActivityStrategySkillMainView",t}t(e,i);var h=e.prototype;return h.onInit=function(){var i=this;this.nodeWearMask=this.findChild("btnWearMask"),this.addComponentCallbackListener(this.nodeWearMask,n.EventType.CLICK,(function(){i.onWearMaskClick()}));var t=this.findChild("content/btnOneKeyWear");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){i.onOneKeyWearClick()}));var e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){i.close()}));var r=this.findChild("content/btnClose");this.addComponentCallbackListener(r,n.EventType.CLICK,(function(){i.close()})),this.txtTotalEffect=this.findChildComponent("totalEffect/txtEffect",o);var h=this.findChildComponent("content/scrollSkillList",l);this.scrollSkillList=this.addUIList(h,I),this.scrollSkillList.selectedMode=c.SINGLE,this.nodeScroll=h.node,this.posItemList=[];for(var f=function(t){var e=i.findChild(s.formatStr("wearParent/item%s",t)),l={node:e,nodeWear:k.findChild(e,"nodeWear"),imgFrame:k.findChildComponent(e,"imgFrame",a),imgIcon:k.findChildComponent(e,"nodeWear/imgIcon",a),txtLevel:k.findChildComponent(e,"nodeWear/txtLevel",o),pbNum:k.findChildComponent(e,"nodeWear/pbNum",d),txtNum:k.findChildComponent(e,"nodeWear/txtNum",o),btnRemove:k.findChild(e,"nodeWear/btnRemove"),nodeEmpty:k.findChild(e,"btnWear"),nodeLock:k.findChild(e,"imgLock"),pos:t};i.addComponentCallbackListener(l.node,n.EventType.CLICK,(function(){i.onPosItemClick(t)})),i.addComponentCallbackListener(l.btnRemove,n.EventType.CLICK,(function(){i.onPosRemoveClick(t)})),i.posItemList.push(l)},v=2;v<=6;v++)f(v)},h.registerUpdateHandler=function(){this.addEvent(S.OnStrategySkillListUpdate,this.onSkillListUpdate,this),this.addEvent(S.OnStrategySkillSelectWear,this.onSkillInfoViewSelectWear,this)},h.onAfterOpen=function(){r.playSound("common_jiemian");var i=IS(g).job,t=configJobs.getDataByKey(i);if(this.recommendSkill={},null!=t){var e=t.recommend_skill;if(null!=e)for(var n=0;n<e.length;n++)this.recommendSkill[e[n]]=!0}this.curChooseSkillId=0,this.nodeWearMask.active=!1,this.updatePosItems(),this.showSkillList(),this.updateTotalEffectShow()},h.updatePosItems=function(){for(var i=0;i<this.posItemList.length;i++)this.updateSinglePosItem(this.posItemList[i])},h.updateSinglePosItem=function(i){i.nodeLock.active=!1,i.nodeEmpty.active=!1,i.nodeWear.active=!1;var t=i.pos;i.imgFrame.grayscale=!1;var e=IS(g).getSkillByPos(t);if(v.isEmpty(e)||0==e.skill_id)return this.loadIcon(i.imgFrame,"icon_skill","common_ICON_jinengkuang01"),void(i.nodeEmpty.active=!0);var n=e.skill_id,o=configSkill.getDataByKey(n);this.loadIcon(i.imgFrame,"icon_skill",s.formatStr("common_ICON_jinengkuang0%s",o.quality)),this.loadIcon(i.imgIcon,"icon_skill",o.icon),i.nodeWear.active=!0;var l=e.skill_lv;i.txtLevel.string=s.formatStr("Lv.%s",l)},h.showSkillList=function(){this.skillList=IS(g).getSortAllSkillList(),this.scrollSkillList.datas=this.skillList},h.updateTotalEffectShow=function(){for(var i,t,e={},n=0;n<this.skillList.length;n++){i=this.skillList[n];var o=IS(g).getSkillInfoBySkillId(i);if(!v.isEmpty(o)&&-1!=o.pos_id){t=o.skill_lv;for(var l=configSkill_level.getDataByKeys("id",i,"level",t).ownEffect,s=void 0,a=void 0,d=0;d<l.length;d++)s=l[d][0],a=l[d][1],e[s]||(e[s]=0),e[s]=e[s]+a}}var r=0;for(var c in e){r=e[c]||0;break}this.txtTotalEffect.string=f.formatStrWithMirrorDeal(GetLanguage(200099),r/100)},h.onBeforeClose=function(){},h.onDestroy=function(){},h.onOneKeyWearClick=function(){for(var i,t=this,e=[],n=0;n<this.skillList.length;n++){i=this.skillList[n];var o=IS(g).getSkillInfoBySkillId(i);v.isEmpty(o)||-1!=o.pos_id&&e.push(i)}if(e.length<=0)m.showFlyTip(GetLanguage(200112));else{e.sort((function(i,e){var n=t.recommendSkill[i]||!1;if(n!=(t.recommendSkill[e]||!1))return 1==n?-1:1;var o=configSkill.getDataByKey(i),l=configSkill.getDataByKey(e),s=o.quality,a=l.quality;if(s!=a)return s>a?-1:1;var d=IS(g).getSkillInfoBySkillId(i),r=IS(g).getSkillInfoBySkillId(e),c=d.skill_lv,h=r.skill_lv;return c!=h?c>h?-1:1:i>e?-1:1}));for(var l,s=new Array,a=2;a<=6;a++){l=e[a-2]||0;var d=IS(g).getSkillByPos(a);(v.isEmpty(d)||d.skill_id!=l)&&s.push({k:a,v:l})}s.length<=0||IS(u).reqActStrategyTabSkill(s)}},h.onSkillListUpdate=function(){this.updatePosItems(),this.showSkillList(),this.updateTotalEffectShow()},h.onSkillInfoViewSelectWear=function(i){this.setChooseskillId(i)},h.setChooseskillId=function(i){this.curChooseSkillId=i,this.nodeWearMask.active=0!=i||!1,this.updatePosItems()},h.onWearMaskClick=function(){this.setChooseskillId(0)},h.onPosItemClick=function(i){var t=IS(g).getSkillByPos(i);if(!v.isEmpty(t)){var e=t.skill_id;if(0!=e)return 0!=this.curChooseSkillId?(IS(u).reqActStrategyTabSkill([{k:i,v:this.curChooseSkillId}]),void this.setChooseskillId(0)):void uiMgr.openView("ActivityStrategySkillInfoView",e)}},h.onPosRemoveClick=function(i){var t=IS(g).getSkillByPos(i);v.isEmpty(t)||0!=t.skill_id&&0==this.curChooseSkillId&&IS(u).reqActStrategyTabSkill([{k:i,v:0}])},e}(C));var I=function(i){function e(){for(var t,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))||this).imgFrame=void 0,t.imgIcon=void 0,t.txtLevel=void 0,t.nodeRecommend=void 0,t.btnWear=void 0,t.nodeMask=void 0,t.btnRemove=void 0,t.nodeLock=void 0,t.nodeHasWear=void 0,t.nodeCost=void 0,t.txtCost=void 0,t.skillId=void 0,t}t(e,i);var l=e.prototype;return l.onInit=function(){var i=this;this.imgFrame=k.findChildComponent(this.node,"imgFrame",a),this.imgIcon=k.findChildComponent(this.node,"imgIcon",a),this.nodeMask=k.findChild(this.node,"imgMask"),this.txtLevel=k.findChildComponent(this.node,"txtLevel",o),this.nodeRecommend=k.findChild(this.node,"imgRecommend"),this.btnWear=k.findChild(this.node,"btnWear"),this.view.addComponentCallbackListener(this.btnWear,n.EventType.CLICK,(function(){i.onWearClick()})),this.btnRemove=k.findChild(this.node,"btnRemove"),this.view.addComponentCallbackListener(this.btnRemove,n.EventType.CLICK,(function(){i.onRemoveClick()})),this.nodeLock=k.findChild(this.node,"imgLock"),this.nodeCost=k.findChild(this.node,"cost"),this.txtCost=k.findChildComponent(this.node,"cost/txtNum",o),this.nodeHasWear=k.findChild(this.node,"txtHasWear")},l.onRender=function(i,t){this.skillId=i;var e=configSkill.getDataByKey(this.skillId);this.view.loadIcon(this.imgFrame,"icon_skill",s.formatStr("common_ICON_jinengkuang0%s",e.quality)),this.view.loadIcon(this.imgIcon,"icon_skill",e.icon);var n=IS(g).getSkillInfoBySkillId(this.skillId),o=-1==n.pos_id;this.nodeMask.active=o,this.nodeCost.active=o;var l=configStrategy_activity_skill.getDataByKey(this.skillId);this.txtCost.string=String(l.unlock_cost),this.nodeLock.active=o||!1,this.txtLevel.string=o?"":s.formatStr("Lv.%s",n.skill_lv);var a=this.view;this.nodeRecommend.active=1==a.recommendSkill[this.skillId]||!1,this.btnWear.active=0==o&&0==n.pos_id||!1,this.btnRemove.active=0==o&&0!=n.pos_id||!1,this.nodeHasWear.active=0==o&&0!=n.pos_id||!1},l.onItemClick=function(){var i=this,t=IS(g).getSkillInfoBySkillId(this.skillId),e=configStrategy_activity_skill.getDataByKey(this.skillId);-1!=t.pos_id?uiMgr.openView("ActivityStrategySkillInfoView",this.skillId):uiMgr.openView("ActivityStrategyConfirmView",{desc1:GetLanguage(999000607),num:e.unlock_cost,goodsId:1038,cb:function(t){1==t&&IS(u).reqActStrategyTabSkillUnlock(i.skillId)}})},l.onWearClick=function(){var i=IS(g).getSkillEmptyPos();null==i?this.view.setChooseskillId(this.skillId):IS(u).reqActStrategyTabSkill([{k:i,v:this.skillId}])},l.onRemoveClick=function(){var i=IS(g).getSkillInfoBySkillId(this.skillId);IS(u).reqActStrategyTabSkill([{k:i.pos_id,v:0}])},e}(h);e._RF.pop()}}}));

