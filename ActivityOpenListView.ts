System.register("chunks:///_virtual/ActivityOpenListView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./RedPointMgr.ts","./NodeUtil.ts","./BaseView.ts","./CommonDefine.ts","./MainViewModel.ts","./MainView_SystemTop.ts"],(function(t){"use strict";var i,e,n,o,s,c,a,r,d,h,f,u,l,p,v;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,o=t.ScrollView,s=t.Sprite,c=t.Label,a=t.sys},function(t){r=t.SelectedType,d=t.ListItem},function(t){h=t.RedPointMgr},function(t){f=t.default},function(t){u=t.BaseView},function(t){l=t.CommonEventDefine},function(t){p=t.MainViewModel},function(t){v=t.iconIdList}],execute:function(){var m;e._RF.push({},"adfbfSFtTJJ0YjvjUf38pJF","ActivityOpenListView",void 0);var L=((m={})[1]="kfhd_img_kuangsongsanqianchou",m[2]="kfhd_img_kaifuleijixiaofei",m[15]="kfhd_img_qirishilian",m),g=(t("default",function(t){function e(){var i;return(i=t.call(this)||this).itemList=void 0,i.name="ActivityOpenListView",i.url="ui/module/activity/ActivityOpenListView",i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this,i=this.findChild("root/imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.onMaskClick()}));var e=this.findChild("root/content/btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var s=this.findChildComponent("root/content/ScrollView",o);this.itemList=this.addUIList(s,g,!0),this.itemList.selectedMode=r.SINGLE},s.registerUpdateHandler=function(){this.addEvent(l.MAIN_ADD_ICON,this.refreshList,this),this.addEvent(l.MAIN_REMOVE_ICON,this.refreshList,this),this.addEvent(l.MAIN_SET_ICON,this.refreshList,this),this.addEvent(l.UPDATE_FOLD_ICON_RED,this.updateList)},s.onMaskClick=function(){this.close()},s.onAfterOpen=function(){this.refreshList()},s.refreshList=function(){var t=[];this.itemList.clearData();for(var i=IS(p).getIconInfoList(),e=0;e<v.length;e++){var n=v[e];null!=i[n]&&t.push(n)}this.itemList.datas=t},s.updateList=function(){this.itemList.updateAll()},s.onBeforeClose=function(){},s.onDestroy=function(){},e}(u)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).imgIcon=void 0,i.txtTitle=void 0,i.nodeRed=void 0,i.cfg=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.imgIcon=this.node.getComponent(s),this.txtTitle=f.findChildComponent(this.node,"txtTitle",c),a.uiMirror&&this.txtTitle.node.setScale(1,1,1),this.nodeRed=f.findChild(this.node,"point")},n.onRender=function(t,i){this.view.loadIcon(this.imgIcon,"act_open",L[t]),this.cfg=configMainicon.getDataByKey(t),this.txtTitle.string=this.cfg.name,this.updateRed()},n.updateRed=function(){this.nodeRed.active=IS(h).getRedNum("MainIcon/"+this.data)>0},n.onItemClick=function(){uiMgr.openView(this.cfg.viewName[0])},e}(d));e._RF.pop()}}}));
