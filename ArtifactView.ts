System.register("chunks:///_virtual/ArtifactView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index57.ts","./ArtifactDataCache.ts","./NodeUtil.ts","./RoleDataCache.ts","./UIDefine.ts","./BaseTabView.ts"],(function(t){"use strict";var e,i,n,a,c,r,s,o,f,u,h;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button},function(t){a=t.audioMgr},null,function(t){c=t.ArtifactDataCache},function(t){r=t.default},function(t){s=t.RoleDataCache},function(t){o=t.PanelTabType,f=t.OpenFunction,u=t.UIViewState},function(t){h=t.BaseTabView}],execute:function(){i._RF.push({},"7c00eJc6YxOOInwRomhIIn6","ArtifactView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).isActive=!1,e.parentView=void 0,e.name="ArtifactView",e.url="ui/module/artifact/ArtifactView",e.tabTypes=[o.Artifact_Upgrade,o.Artifact_Refined,o.Artifact_Skin],e}e(i,t);var h=i.prototype;return h.canShowType=function(t){return!(t==o.Artifact_Refined&&!IS(s).CheckFuncOpen(f.FUNC_ARTIFACT_GEM))},h.replaceParent=function(){var t=uiMgr.getOpenView("MainView");if(this.parentView=t,this.state==u.Init){var e=r.findChild(this.parentView.node,"container/"+this.name);e||(e=this.parentView.node),this.node.parent=e}},h.setActive=function(t){this.isActive!=t&&(this.isActive=t,t?(this.trySetOpenType()||this.trySetDefaultOpenTab(),this.open()):this.close())},h.trySetDefaultOpenTab=function(){1==IS(c).checkSkinRP()?this.setIndex(o.Artifact_Skin):this.setIndex(o.Artifact_Upgrade)},h.onAfterOpenTab=function(){var t=this;this.replaceParent(),a.playSound("common_jiemian"),this.trySetDefaultOpenTab();var e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.setRedPoint(o.Artifact_Skin,IS(c).checkSkinRP()),this.setRedPoint(o.Artifact_Upgrade,IS(c).checkUpgradeRP())},i}(h));i._RF.pop()}}}));

