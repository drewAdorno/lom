System.register("chunks:///_virtual/ActivityStrategyPetMainView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ObjectUtil.ts","./MessageView.ts","./ActivityDefine.ts","./ActivityStrategyControl.ts","./ActivityStrategyDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,o,n,s,a,d,r,c,h,l,f,v,u,m,p,g,I;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,o=t.Button,n=t.Label,s=t.ScrollView,a=t.js,d=t.Sprite},function(t){r=t.audioMgr},function(t){c=t.SelectedType,h=t.ListItem},function(t){l=t.default},function(t){f=t.default},null,function(t){v=t.default},function(t){u=t.default},function(t){m=t.ActivityEventDefine},function(t){p=t.default},function(t){g=t.default},function(t){I=t.BaseView}],execute:function(){i._RF.push({},"a2e17a0bcdNV7GIALnDjFuB","ActivityStrategyPetMainView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).nodeWearMask=void 0,e.scrollPetList=void 0,e.nodeScroll=void 0,e.posItemList=[],e.petList=void 0,e.curChoosePetId=void 0,e.recommendPet=void 0,e.txtTotalEffect=void 0,e.name="ActivityStrategyPetMainView",e.url="ui/module/ActivityStrategy/ActivityStrategyPetMainView",e}e(i,t);var h=i.prototype;return h.onInit=function(){var t=this;this.nodeWearMask=this.findChild("btnWearMask"),this.addComponentCallbackListener(this.nodeWearMask,o.EventType.CLICK,(function(){t.onWearMaskClick()}));var e=this.findChild("content/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()}));var i=this.findChild("content/bottom/btnOneKeyWear");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onOneKeyWearClick()}));var r=this.findChild("imgMask");this.addComponentCallbackListener(r,o.EventType.CLICK,(function(){t.close()})),this.txtTotalEffect=this.findChildComponent("totalEffect/txtEffect",n);var h=this.findChildComponent("content/scrollPetList",s);this.nodeScroll=h.node,this.scrollPetList=this.addUIList(h,C),this.scrollPetList.selectedMode=c.SINGLE,this.posItemList=[];for(var f=function(e){var i=t.findChild(a.formatStr("wearParent/item%s",e)),s={node:i,nodeWear:l.findChild(i,"nodeWear"),imgFrame:l.findChildComponent(i,"imgFrame",d),imgIcon:l.findChildComponent(i,"nodeWear/imgIcon",d),txtLevel:l.findChildComponent(i,"nodeWear/txtLevel",n),btnRemove:l.findChild(i,"nodeWear/btnRemove"),nodeEmpty:l.findChild(i,"btnWear"),nodeLock:l.findChild(i,"imgLock"),pos:e};t.addComponentCallbackListener(s.node,o.EventType.CLICK,(function(){t.onPosItemClick(e)})),t.addComponentCallbackListener(s.btnRemove,o.EventType.CLICK,(function(){t.onPosRemoveClick(e)})),t.posItemList.push(s)},v=1;v<=5;v++)f(v)},h.registerUpdateHandler=function(){this.addEvent(m.OnStrategyPetListUpdate,this.onPetListUpdate,this),this.addEvent(m.OnStrategyPetSelectWear,this.onPetInfoViewSelectWear,this)},h.onAfterOpen=function(){r.playSound("common_jiemian");var t=IS(g).job,e=configJobs.getDataByKey(t);if(this.recommendPet={},null!=e){var i=e.recommend_pet;if(null!=i)for(var o=0;o<i.length;o++)this.recommendPet[i[o]]=!0}this.curChoosePetId=0,this.nodeWearMask.active=!1,this.updatePosItems(),this.showPetList(),this.updateTotalEffectShow()},h.updatePosItems=function(){for(var t=0;t<this.posItemList.length;t++)this.updateSinglePosItem(this.posItemList[t])},h.updateSinglePosItem=function(t){t.nodeLock.active=!1,t.nodeEmpty.active=!1,t.nodeWear.active=!1;var e=t.pos;t.imgFrame.grayscale=!1;var i=IS(g).getPetByPos(e);if(v.isEmpty(i))return this.loadIcon(t.imgFrame,"icon_pet","zjm_ui_pinzhikuangbai"),void(t.nodeEmpty.active=!0);var o=i.pet_id,n=configPet.getDataByKey(o);this.loadIcon(t.imgFrame,"icon_pet",configColor.getDataByKey(n.quality).path),this.loadIcon(t.imgIcon,"icon_pet",n.icon),t.nodeWear.active=!0;var s=i.level;t.txtLevel.string=a.formatStr("Lv.%s",s)},h.showPetList=function(){this.petList=IS(g).getSortAllPetList(),this.scrollPetList.datas=this.petList},h.updateTotalEffectShow=function(){for(var t,e,i={},o=0;o<this.petList.length;o++){t=this.petList[o];var n=IS(g).getPetInfoByPetId(t);if(!v.isEmpty(n)&&-1!=n.pos){e=n.level;for(var s=configPetlevel.getDataByKeys("id",t,"level",e).ownEffect,a=void 0,d=void 0,r=0;r<s.length;r++)a=s[r][0],d=s[r][1],i[a]||(i[a]=0),i[a]=i[a]+d}}var c=0;for(var h in i){c=i[h]||0;break}this.txtTotalEffect.string=f.formatStrWithMirrorDeal(GetLanguage(200099),c/100)},h.onBeforeClose=function(){},h.onDestroy=function(){},h.onOneKeyWearClick=function(){for(var t,e=this,i=[],o=0;o<this.petList.length;o++){t=this.petList[o];var n=IS(g).getPetInfoByPetId(t);v.isEmpty(n)||-1!=n.pos&&i.push(t)}if(i.length<=0)u.showFlyTip(GetLanguage(200100));else{i.sort((function(t,i){var o=e.recommendPet[t]||!1;if(o!=(e.recommendPet[i]||!1))return 1==o?-1:1;var n=configPet.getDataByKey(t),s=configPet.getDataByKey(i),a=n.quality,d=s.quality;if(a!=d)return a>d?-1:1;var r=IS(g).getPetInfoByPetId(t),c=IS(g).getPetInfoByPetId(i),h=r.level,l=c.level;return h!=l?h>l?-1:1:t>i?-1:1}));for(var s,a=new Array,d=1;d<=5;d++)if(null!=(s=i[d-1])){var r=IS(g).getPetByPos(d);if(!v.isEmpty(r)&&r.pet_id==s)continue;a.push({k:d,v:s})}a.length<=0||IS(p).reqActStrategyTabPet(a)}},h.onPetListUpdate=function(){this.updatePosItems(),this.showPetList(),this.updateTotalEffectShow()},h.onPetPosUnlock=function(){this.updatePosItems(),this.showPetList()},h.onPetInfoViewSelectWear=function(t){this.setChoosePetId(t)},h.setChoosePetId=function(t){this.curChoosePetId=t,this.nodeWearMask.active=0!=t||!1,this.updatePosItems()},h.onWearMaskClick=function(){this.setChoosePetId(0)},h.onPosItemClick=function(t){var e=IS(g).getPetByPos(t);if(!v.isEmpty(e))return 0!=this.curChoosePetId?(IS(p).reqActStrategyTabPet([{k:t,v:this.curChoosePetId}]),void this.setChoosePetId(0)):void uiMgr.openView("ActivityStrategyPetInfoView",e.pet_id)},h.onPosRemoveClick=function(t){var e=IS(g).getPetByPos(t);v.isEmpty(e)||0==this.curChoosePetId&&IS(p).reqActStrategyTabPet([{k:t,v:0}])},i}(I));var C=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).imgFrame=void 0,e.imgIcon=void 0,e.txtLevel=void 0,e.nodeRecommend=void 0,e.btnWear=void 0,e.btnRemove=void 0,e.nodeHasWear=void 0,e.nodeLock=void 0,e.nodeMask=void 0,e.nodeCost=void 0,e.txtCost=void 0,e.petId=void 0,e}e(i,t);var s=i.prototype;return s.onInit=function(){var t=this;this.imgFrame=l.findChildComponent(this.node,"imgFrame",d),this.imgIcon=l.findChildComponent(this.node,"imgIcon",d),this.nodeMask=l.findChild(this.node,"imgMask"),this.txtLevel=l.findChildComponent(this.node,"txtLevel",n),this.nodeRecommend=l.findChild(this.node,"imgRecommend"),this.btnWear=l.findChild(this.node,"btnWear"),this.view.addComponentCallbackListener(this.btnWear,o.EventType.CLICK,(function(){t.onWearClick()})),this.btnRemove=l.findChild(this.node,"btnRemove"),this.view.addComponentCallbackListener(this.btnRemove,o.EventType.CLICK,(function(){t.onRemoveClick()})),this.nodeLock=l.findChild(this.node,"imgLock"),this.nodeHasWear=l.findChild(this.node,"txtHasWear"),this.nodeCost=l.findChild(this.node,"cost"),this.txtCost=l.findChildComponent(this.node,"cost/txtNum",n)},s.onRender=function(t,e){this.petId=t;var i=configPet.getDataByKey(this.petId);this.view.loadIcon(this.imgFrame,"icon_pet",configColor.getDataByKey(i.quality).path),this.view.loadIcon(this.imgIcon,"icon_pet",i.icon);var o=IS(g).getPetInfoByPetId(this.petId),n=-1==o.pos;this.nodeCost.active=n,this.nodeMask.active=n,this.nodeLock.active=n||!1,this.txtLevel.string=n?"":a.formatStr("Lv.%s",o.level);var s=configStrategy_activity_pet.getDataByKey(this.petId);this.txtCost.string=String(s.unlock_cost);var d=this.view;this.nodeRecommend.active=1==d.recommendPet[this.petId]||!1,this.btnWear.active=0==n&&0==o.pos||!1,this.btnRemove.active=0==n&&0!=o.pos||!1,this.nodeHasWear.active=0==n&&0!=o.pos||!1},s.onItemClick=function(){var t=this,e=IS(g).getPetInfoByPetId(this.petId),i=configStrategy_activity_pet.getDataByKey(this.petId);-1!=e.pos?uiMgr.openView("ActivityStrategyPetInfoView",this.petId):uiMgr.openView("ActivityStrategyConfirmView",{desc1:GetLanguage(999000607),num:i.unlock_cost,goodsId:1038,cb:function(e){1==e&&IS(p).reqActStrategyTabPetUnlock(t.petId)}})},s.onWearClick=function(){var t=IS(g).getPetEmptyPos();null==t?this.view.setChoosePetId(this.petId):IS(p).reqActStrategyTabPet([{k:t,v:this.petId}])},s.onRemoveClick=function(){var t=IS(g).getPetInfoByPetId(this.petId);IS(p).reqActStrategyTabPet([{k:t.pos,v:this.petId}])},i}(h);i._RF.pop()}}}));
