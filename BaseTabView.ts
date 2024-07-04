System.register("chunks:///_virtual/BaseTabView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ListPool.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./BaseView.ts","./ItemIcon.ts","./UIDefine.ts"],(function(t){"use strict";var e,i,n,s,o,a,h,r,d,l,c,u,p,f,v,T,P,m,y,b;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,s=t.error,o=t.ScrollView,a=t.sys,h=t.Button,r=t.Label,d=t.UITransform,l=t.Vec2,c=t.Sprite,u=t.Vec3},function(t){p=t.ListPool},function(t){f=t.RedPointType},function(t){v=t.RedPointMgr},function(t){T=t.default},function(t){P=t.BaseView},function(t){m=t.IconAseetType},function(t){y=t.UIViewState,b=t.PanelTabData}],execute:function(){n._RF.push({},"7b83bwT62hB24J2A2LExKsR","BaseTabView",void 0);var w=new p,I=(t("BaseTabView",function(t){function n(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).tabTypes=[],e.initTypes=[],e.tabPanel={},e.btnList=[],e.scrollTab=void 0,e.nodeContent=void 0,e.nodeItemRender=void 0,e.curType=0,e.openType=0,e.curPanel=void 0,e.defaultMaker=void 0,e.redPoints=void 0,e}e(n,t);var h=n.prototype;return h.onInit=function(){if(this.tabTypes)if(this.scrollTab=this.findChildComponent("tab/scrollTab",o),this.scrollTab){this.nodeContent=T.findChild(this.scrollTab.node,"view/content"),null==this.defaultMaker&&(this.defaultMaker=I),this.nodeItemRender=this.nodeContent.children[0],this.nodeItemRender.active=!1;for(var t,e=i(this.tabTypes);!(t=e()).done;){var n=t.value;this.initTypes.push(n)}}else s(this.name+"页签界面模板错误，请检查UI预设是否存在scrollTab");else s(this.name+"未初始化tab数据")},h.canShowType=function(t){return!0},h.clearTab=function(){},h.updateTabScroll=function(){this.curType&&this.curType>0&&!this.canShowType(this.curType)&&this.clearTab(),this.openType&&!this.canShowType(this.openType)&&(this.openType=0);for(var t,e=1,n=i(this.initTypes);!(t=n()).done;){var s=t.value;this.canShowType(s)?(this.tabTypes.push(s),this.addBtnItem(s,e),e+=1,this.curType<=0&&!this.openType&&(this.openType=s)):this.removeBtnItem(s)}this.curType<=0&&!this.openType?this.close():this.openType&&this.openType>0&&(this.setIndex(this.openType),this.openType=0)},h.addBtnItem=function(t,e){var i=this.btnList[t];if(!i){var n=nodeInstantiate.instantiate(this.nodeItemRender);n.name=String(t),n.parent=this.nodeItemRender.parent,n.active=!0,(i=new this.defaultMaker).init(this,n,this.scrollTab),i.setData(t,e),this.btnList[t]=i}i.show()},h.removeBtnItem=function(t){var e=this.btnList[t];null==e||e.hide()},h.onTabSelected=function(t,e){this.setIndex(t)},h.setIndex=function(t){if(this.curType!=t){if(this.curType>0){this.btnList[this.curType].setSelected(!1);var e=this.getTabPanel(this.curType);null==e||e.setActive(!1)}this.curType=t,this.btnList[this.curType].setSelected(!0),this.curPanel=this.getTabPanel(this.curType),this.curPanel&&(this.curPanel.openArgs=this.openArgs,this.curPanel.setActive(!0))}},h.setRedPoint=function(t,e){var i;this.redPoints=null!=(i=this.redPoints)?i:{},this.redPoints||(this.redPoints[t]=0),this.redPoints[t]!=e&&(this.redPoints[t]=e,this.btnList[t]&&this.btnList[t].setRedPoint(e))},h.updateRed=function(t){this.btnList[t]&&this.btnList[t].updateRed()},h.trySetOpenType=function(){if(null==this.openArgs||null==this.openArgs[0])return!1;var t=this.openArgs[0];if(null==this.tabTypes)return!1;for(var e=0;e<this.tabTypes.length;e++)if(this.tabTypes[e]==t)return this.openType=t,!0;return!1},h.trySetDefaultOpenTab=function(){},h.getRedPointData=function(t){if(null!=this.redPoints)return this.redPoints[t]},h.registerUpdateHandler=function(){},h.onAfterOpen=function(){this.updateTabScroll(),this.onAfterOpenTab()},h.onBeforeClose=function(){var t;this.curPanel=this.tabPanel[this.curType],this.curPanel&&this.curPanel.setActive(!1),null==(t=this.btnList[this.curType])||t.setSelected(!1),this.curType=0},h.onDestroy=function(){},h.checkFunctionOpen=function(t){return!0},h.onClearCloseView=function(){var t=a.now(),e=w.alloc();for(var n in this.tabPanel){var s=this.tabPanel[n];if(s.state==y.Close&&(-1!=s.poolTime&&t-s.closeTime>s.poolTime)){try{s.destroy()}catch(t){printLogException(t,"[ClearCloseView] view:"+s.name)}this.removeSubView(s.name),e.push(n);break}}for(var o,h=i(e);!(o=h()).done;){var r=o.value;delete this.tabPanel[r]}w.free(e)},h.onUpdate=function(e){t.prototype.onUpdate.call(this,e),this.onClearCloseView()},h.getTabPanel=function(t,e){void 0===e&&(e=!0);var i=this.tabPanel[t];return e&&null==i&&(i=this.addSubView(b[t].v),this.tabPanel[t]=i),i},n}(P)),t("ItemTabBtn",function(){function t(){this.nodeItem=void 0,this.view=void 0,this.scrollTab=void 0,this.nodeNormal=void 0,this.nodeSelected=void 0,this.selected=void 0,this.type=void 0,this.index=0,this.data=void 0,this.txtName=void 0,this.txtSelectName=void 0,this.redPointPath=void 0,this.redOnNormal=!1}var e=t.prototype;return e.init=function(t,e,i){var n=this;this.nodeItem=e,this.view=t,this.scrollTab=i,this.nodeNormal=T.findChild(e,"normal"),this.nodeSelected=T.findChild(e,"selected"),this.nodeSelected.active=!1,t.addComponentCallbackListener(e,h.EventType.CLICK,(function(){n.onClickHandler()})),this.txtName=T.findChildComponent(this.nodeNormal,"txtName",r),this.txtSelectName=T.findChildComponent(this.nodeSelected,"txtName",r)},e.onClickHandler=function(){var t=this.data.openFuncId;t&&!this.view.checkFunctionOpen(t)||this.view.onTabSelected(this.type,this.index)},e.setSelected=function(t){this.selected!=t&&(this.selected=t,this.nodeNormal.active=!t,this.nodeSelected.active=t)},e.setData=function(t,e){this.type=t,this.index=e,this.nodeItem.setSiblingIndex(e-1);var i=b[t];this.data=i,this.setText(i);var n=this.view.getRedPointData(t);n&&this.setRedPoint(n)},e.setText=function(t){this.txtName&&(this.txtName.string=GetLanguage(t.name)),this.txtSelectName&&(this.txtSelectName.string=GetLanguage(t.name))},e.setRedPoint=function(t){if(null==this.redPointPath){var e,i,n;if(this.redPointPath=null!=(e=this.data.redPointPath)?e:this.view.name+"/tab-"+this.type,this.data.redPos)n=this.data.redPos;else{var s=this.nodeItem.getComponent(d),o=s.width,a=s.height;n=new l(o/2,a/2)}var h=null!=(i=this.data.redType)?i:f.NumDot;this.view.addRedPoint(this.redPointPath,this.redOnNormal?this.nodeNormal:this.nodeItem,n,h,this.data.redScale)}IS(v).changeValue(this.redPointPath,t)},e.updateRed=function(){if(null==this.redPointPath){var t,e,i;if(this.redPointPath=null!=(t=this.data.redPointPath)?t:this.view.name+"/tab-"+this.type,this.data.redPos)i=this.data.redPos;else{var n=this.nodeItem.getComponent(d),s=n.width,o=n.height;i=new l(s/2,o/2)}var a=null!=(e=this.data.redType)?e:f.NumDot;this.view.addRedPoint(this.redPointPath,this.redOnNormal?this.nodeNormal:this.nodeItem,i,a,this.data.redScale)}IS(v).updateRed(this.redPointPath)},e.show=function(){this.nodeItem.active=!0},e.hide=function(){this.nodeItem.active=!1},e.refreshIcon=function(t,e,i,n){var s=1==t?this.nodeSelected:this.nodeNormal,o=s.getComponent(c);this.view.loadIcon(o,e,i,null,m.UI_ATLAS,!0),n&&(s.scale=n,T.findChild(s,"txtName").scale=new u(1/n.x,1/n.y,1/n.z))},t}()));n._RF.pop()}}}));

