System.register("chunks:///_virtual/FateMergeView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./ItemIcon.ts","./ConfigGlobal.ts","./BagModel.ts","./MessageView.ts","./FateControl.ts","./FateDataCache.ts","./FateDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,s,a,o,d,c,l,h,r,f,v,u,g,p,m,I,w,F,C;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,s=t.Button,a=t.Label,o=t.sys,d=t.HorizontalTextAlignment,c=t.ScrollView,l=t.Sprite},function(t){h=t.V2},function(t){r=t.SelectedType,f=t.ListItem},function(t){v=t.default},null,function(t){u=t.IconAseetType},function(t){g=t.ConfigGlobal},function(t){p=t.BagModel},function(t){m=t.default},function(t){I=t.default},function(t){w=t.default},function(t){F=t.FateEventDefine},function(t){C=t.BaseSubView}],execute:function(){n._RF.push({},"37ac37RRp9J+5yVGa5MPsDx","FateMergeView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).fateList=void 0,e.fateScroll=void 0,e.mergeItems=[],e.nothing=void 0,e.topNode=void 0,e.txtTips=void 0,e.curIndex=-1,e.selectFate=[],e.isAnim=void 0,e.name="FateMergeView",e.url="ui/module/fate/FateMergeView",e}e(n,t);var l=n.prototype;return l.onInit=function(){var t=this,e=this.findChild("view/root/btn");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.selectFate[1]&&t.selectFate[2]?t.isAnim||(t.selectFate[1].skill&&t.selectFate[2].skill?m.showBoxTip({tip:GetLanguage(200291),func:function(e){"type_yes"==e&&(t.isAnim=!0,t.addUIEffect("prefab/ui-effect/MX_tx_wuhunronghe",t.topNode,1,new h(0,-315)),t.addTimer(1,1,(function(){var e=configFate_fusion.getDatas()[t.curIndex];IS(I).send_35_11(e.id,[t.selectFate[1].id,t.selectFate[2].id]),t.isAnim=!1})))}}):(t.isAnim=!0,t.addUIEffect("prefab/ui-effect/MX_tx_wuhunronghe",t.topNode,1,new h(0,-315)),t.addTimer(1,1,(function(){var e=configFate_fusion.getDatas()[t.curIndex];IS(I).send_35_11(e.id,[t.selectFate[1].id,t.selectFate[2].id]),t.isAnim=!1})))):m.showFlyTip(GetLanguage(200290))})),this.topNode=this.findChild("view/root/top");for(var i=0;i<=2;i++){var n=new _;n.init(this.findChild("view/root/top/mergeItem/item"+i),this,i),this.mergeItems.push(n)}this.txtTips=this.findChildComponent("view/root/top/tips/Label",a);var l=this.findChild("view/root/top/btnTips");this.addComponentCallbackListener(l,s.EventType.CLICK,(function(){m.showBoxTip({tip:GetLanguage(200715),btnCnt:1,horizontalAlign:o.uiMirror?d.RIGHT:d.LEFT})}));var f=this.findChildComponent("view/root/fateList",c);this.fateList=this.addUIList(f,x),this.fateList.selectedMode=r.SINGLE,this.nothing=this.findChild("view/root/nothing");var v=this.findChildComponent("view/root/fateScroll",c);this.fateScroll=this.addUIList(v,y)},l.registerUpdateHandler=function(){this.addEvent(F.OnFateInfoUpdate,this.UpdateInfo,this),this.addEvent(F.FateMergeSet,this.SetItem,this)},l.onAfterOpen=function(){IS(I).send_35_12();var t=configFate_fusion.getDatas();this.fateList.datas=t,this.updateScroll(),this.SetIndex(0)},l.onBeforeClose=function(){this.curIndex=-1,this.selectFate=[],this.isAnim=!1},l.onDestroy=function(){},l.SetIndex=function(t){if(this.curIndex!=t){this.curIndex=t,this.selectFate=[];for(var e,n=i(this.mergeItems);!(e=n()).done;){e.value.show()}this.fateList.updateAll(),this.updateScroll();var s=configFate_fusion.getDatas()[this.curIndex];s&&(this.txtTips.string=s.desc)}},l.UpdateInfo=function(){this.selectFate=[];for(var t,e=i(this.mergeItems);!(t=e()).done;){t.value.show()}this.updateScroll()},l.updateScroll=function(){var t=configFate_fusion.getDatas()[this.curIndex];if(t){var e=IS(w).GetFateList(),n=[];for(var s in e)if(e.hasOwnProperty(s))for(var a,o=e[s],d=i(t.material_fate_id);!(a=d()).done;){if(a.value.includes(o.cfg_id)){n.push(o);break}}n.sort((function(t,e){return t.cfg.quality!=e.cfg.quality?e.cfg.quality-t.cfg.quality:t.lv!=e.lv?e.lv-t.lv:t.cfg_id-e.cfg_id}));for(var c,l=[],h=configGoods.getDatas(),r=i(h);!(c=r()).done;){var f=c.value;if(20==f.type){var v=IS(p).getGoodsCountByGoodsGtid(f.id);if(v>0)for(var u=0;u<v;u++)l.push(f)}}n=n.concat(l),this.fateScroll.datas=n,this.nothing.active=0==n.length}},l.SetItem=function(t,e){var n=this;if(1==e)if(this.selectFate[1]){if(!this.selectFate[2]){var s=IS(w).GetFateItem(t);this.selectFate[1].skill&&s.skill?m.showBoxTip({tip:GetLanguage(200292),func:function(t){if("type_yes"==t){n.selectFate[2]=s;for(var e,a=i(n.mergeItems);!(e=a()).done;){e.value.show()}n.fateScroll.updateAll()}}}):this.selectFate[2]=s}}else{var a,o=IS(w).GetFateItem(t);null!=(a=this.selectFate[2])&&a.skill&&o.skill?m.showBoxTip({tip:GetLanguage(200292),func:function(t){if("type_yes"==t){n.selectFate[1]=o;for(var e,s=i(n.mergeItems);!(e=s()).done;){e.value.show()}n.fateScroll.updateAll()}}}):this.selectFate[1]=o}else if(2==e)for(var d in this.selectFate){if(this.selectFate.hasOwnProperty(d))if(this.selectFate[d].id==t){delete this.selectFate[d];break}}for(var c,l=i(this.mergeItems);!(c=l()).done;){c.value.show()}this.fateScroll.updateAll()},n}(C));var _=function(){function t(){this.view=void 0,this.node=void 0,this.index=void 0,this.imgBg=void 0,this.imgIcon=void 0,this.txtLevel=void 0,this.nodeWear=void 0,this.btnWear=void 0}var e=t.prototype;return e.init=function(t,e,i){this.view=e,this.node=t,this.index=i,this.onInit()},e.onInit=function(){var t=this;this.imgBg=v.findChildComponent(this.node,"imgBg",l),this.btnWear=v.findChild(this.node,"btnWear"),this.nodeWear=v.findChild(this.node,"nodeWear"),this.imgIcon=v.findChildComponent(this.node,"nodeWear/imgIcon",l),this.txtLevel=v.findChildComponent(this.node,"nodeWear/txtLevel",a),this.view.addComponentCallbackListener(this.node,s.EventType.CLICK,(function(){if(0!=t.index){var e=t.view.selectFate[t.index];e&&uiMgr.openView("FateInfoView",e,2)}else{var i=configFate_fusion.getDatas()[t.view.curIndex];i&&uiMgr.openView("FateInfoView",i.get_fate_id,1)}}))},e.show=function(){if(0==this.index){this.imgBg.node.active=!1,this.btnWear.active=!1;var t=configFate_fusion.getDatas()[this.view.curIndex];if(t){var e=configFate.getDataByKey(t.get_fate_id);this.txtLevel.string="lv.1",this.view.loadIcon(this.imgIcon,"icon_fate",e.icon,null,u.ICON_SPRITE)}}else{this.imgBg.node.active=!0;var i=this.view.selectFate[this.index];i?(this.nodeWear.active=!0,this.btnWear.active=!1,this.txtLevel.string="lv."+i.lv,this.view.loadIcon(this.imgBg,"fate",g.fate_quality_pos[i.cfg.quality-1][1]),this.view.loadIcon(this.imgIcon,"icon_fate",i.cfg.icon,null,u.ICON_SPRITE)):(this.nodeWear.active=!1,this.btnWear.active=!0,this.view.loadIcon(this.imgBg,"fate","mg_ui_pinzhidi"))}},t}(),x=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).txtName=void 0,e.nodeSelect=void 0,e.red=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.txtName=v.findChildComponent(this.node,"txtName",a),this.nodeSelect=v.findChild(this.node,"imgSelected"),this.red=v.findChild(this.node,"red")},n.onRender=function(t,e){var i=configFate.getDataByKey(t.get_fate_id);this.txtName.string=i.name,this.nodeSelect.active=this.view.curIndex==e,this.red.active=IS(w).haveFateRed(t.id)},n.onItemClick=function(){this.view.isAnim||(this.view.SetIndex(this.index),this.red.active&&(this.red.active=!1,IS(w).setFateRed(this.data.id)))},i}(f),y=function(t){function n(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).imgIcon=void 0,e.txtLevel=void 0,e.mask=void 0,e.select=void 0,e.equip=void 0,e}e(n,t);var o=n.prototype;return o.onInit=function(){var t=this;this.imgIcon=v.findChildComponent(this.node,"imgIcon",l),this.txtLevel=v.findChildComponent(this.node,"txtLevel",a),this.mask=v.findChild(this.node,"mask"),this.select=v.findChild(this.node,"select"),this.equip=v.findChild(this.node,"equip"),this.view.addComponentCallbackListener(this.node,s.EventType.CLICK,(function(){if(t.data.cfg){var e=1;t.mask.active||t.equip.active?e=3:t.select.active&&(e=2),uiMgr.openView("FateInfoView",t.data,e)}else uiMgr.openView("FateChooseView",t.data.id)}))},o.onRender=function(t,e){if(t.cfg){this.txtLevel.string="lv."+t.lv,this.view.loadIcon(this.imgIcon,"icon_fate",t.cfg.icon,null,u.ICON_SPRITE);var n=configFate_fusion.getDatas()[this.view.curIndex];if(n){var s=this.view.selectFate;if(s[1]||s[2])if(s[1]&&s[2])s[1].id==t.id||s[2].id==t.id?(this.mask.active=!1,this.select.active=!0):(this.mask.active=!0,this.select.active=!1);else{var a,o=null!=(a=s[1])?a:s[2];if(o.id==t.id)this.mask.active=!1,this.select.active=!0;else{this.mask.active=!0,this.select.active=!1;for(var d,c=i(n.material_fate_id);!(d=c()).done;){var l=d.value;if(l.includes(o.cfg_id)&&(l[0]==l[1]||o.cfg_id!=t.cfg_id)&&l.includes(t.cfg_id)){this.mask.active=!1;break}}}}else{var h;this.select.active=!1;for(var r,f=i(n.material_fate_id);!(r=f()).done;){if(r.value.includes(t.cfg_id)){h=!0;break}}this.mask.active=!h}}else this.mask.active=!0,this.select.active=!1;if(this.mask.active||this.select.active)this.equip.active=!1;else{this.equip.active=!1;var v=IS(w).GetPosInfo();for(var g in v){if(v.hasOwnProperty(g))if(v[g].id==t.id){this.equip.active=!0;break}}}}else this.select.active=!1,this.equip.active=!1,this.mask.active=!1,this.txtLevel.node.active=!1,this.view.loadIcon(this.imgIcon,t.icon_group,t.icon)},n}(f);n._RF.pop()}}}));
