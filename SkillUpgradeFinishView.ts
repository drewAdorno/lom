System.register("chunks:///_virtual/SkillUpgradeFinishView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./BaseView.ts"],(function(i){"use strict";var t,e,n,s,l,o,r,h,a,d,c,v,f;return{setters:[function(i){t=i.inheritsLoose},function(i){e=i.cclegacy,n=i.Button,s=i.ScrollView,l=i.UITransform,o=i.Sprite,r=i.Label,h=i.sys,a=i.js},function(i){d=i.SelectedType,c=i.ListItem},function(i){v=i.default},function(i){f=i.BaseView}],execute:function(){e._RF.push({},"1acdaW+4T9I3J5iS1j/NZzZ","SkillUpgradeFinishView",void 0);i("default",function(i){function e(){var t;return(t=i.call(this)||this).skillInfoList=void 0,t.scrollSkillList=void 0,t.nodeScroll=void 0,t.nodeSkillParent=void 0,t.nodeSkillItem=void 0,t.nodeRawParent=void 0,t.skillItems=void 0,t.name="SkillUpgradeFinishView",t.url="ui/module/skill/SkillUpgradeFinishView",t}t(e,i);var o=e.prototype;return o.onInit=function(){var i=this;this.skillItems=new Array;var t=this.findChild("imgMask");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){i.onMaskClick()}));var e=this.findChild("btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){i.onCloseClick()}));var l=this.findChildComponent("scrollSkillList",s);this.scrollSkillList=this.addUIList(l,k),this.scrollSkillList.selectedMode=d.SINGLE,this.nodeScroll=l.node,this.nodeRawParent=this.findChild("rawParent"),this.nodeSkillParent=this.findChild("rawParent/skillParent"),this.nodeSkillItem=this.findChild("rawParent/skillParent/skillItem"),this.nodeSkillItem.active=!1},o.registerUpdateHandler=function(){},o.onAfterOpen=function(){this.skillInfoList=this.openArgs[0];var i=this.skillInfoList.length;i<=5?this.showSkillInfos():this.showSkillList();var t=this.findChildComponent("imgBG",l),e=Math.min(Math.max(40+150*Math.ceil(i/5),590),800);t.height=e},o.showSkillInfos=function(){this.nodeScroll.active=!1,this.nodeRawParent.active=!0;for(var i=0;i<this.skillItems.length;i++)this.skillItems[i].hide();for(var t=0;t<this.skillInfoList.length;t++){var e=this.skillItems[t];if(null==e){var n=nodeInstantiate.instantiate(this.nodeSkillItem);n.parent=this.nodeSkillParent,(e=new m).onInit(n,this)}var s=this.skillInfoList[t];e.show(s),this.skillItems[t]=e}},o.showSkillList=function(){this.nodeRawParent.active=!1,this.nodeScroll.active=!0;var i=1,t=0,e=new Array;e[0]=new Array;for(var n=0;n<this.skillInfoList.length;n++)i>5&&(i=1,e[t+=1]=new Array),e[t].push(this.skillInfoList[n]),i+=1;this.scrollSkillList.datas=e},o.onBeforeClose=function(){for(var i=0;i<this.skillItems;i++)this.skillItems[i].hide()},o.onDestroy=function(){for(var i=0;i<this.skillItems;i++)this.skillItems[i].destroy();this.skillItems={}},o.onMaskClick=function(){this.close()},o.onCloseClick=function(){this.close()},e}(f));var k=function(i){function e(){for(var t,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(t=i.call.apply(i,[this].concat(n))||this).nodeParent=void 0,t.nodeItem=void 0,t.skillItems=void 0,t}t(e,i);var n=e.prototype;return n.onInit=function(){this.nodeParent=v.findChild(this.node,"skillParent"),this.nodeItem=v.findChild(this.node,"skillParent/skillItem"),this.nodeItem.active=!1},n.onRender=function(i,t){null==this.skillItems&&(this.skillItems=[]);for(var e=0;e<this.skillItems.length;e++)this.skillItems[e].hide();for(var n=0;n<i.length;n++){var s=this.skillItems[n];if(null==s){var l=nodeInstantiate.instantiate(this.nodeItem);l.parent=this.nodeParent,(s=new m).onInit(l,this.view)}s.show(i[n]),this.skillItems[n]=s}},n.destroy=function(){if(null!=this.skillItems){for(var t=0;t<this.skillItems.length;t++)this.skillItems[t].destroy();this.skillItems=null}i.prototype.destroy.call(this)},e}(c),m=function(){function i(){this.node=void 0,this.imgFrame=void 0,this.imgIcon=void 0,this.txtOriLevel=void 0,this.txtNowLevel=void 0,this.view=void 0}var t=i.prototype;return t.onInit=function(i,t){this.node=i,this.view=t,this.imgFrame=v.findChildComponent(this.node,"imgFrame",o),this.imgIcon=v.findChildComponent(this.node,"imgIcon",o);var e=v.findChild(this.node,"levelNode");if(this.txtOriLevel=v.findChildComponent(this.node,"levelNode/txtOriLevel",r),this.txtNowLevel=v.findChildComponent(this.node,"levelNode/txtNowLevel",r),h.uiMirror){e.setScale(-1,1,1);var n=this.txtOriLevel.node;n.setScale(1,1,1),n.getComponent(l).anchorX=1;var s=this.txtNowLevel.node;s.setScale(1,1,1),s.getComponent(l).anchorX=0}},t.show=function(i){this.node.active=!0;var t=configSkill.getDataByKey(i.skillId);this.view.loadIcon(this.imgFrame,"icon_skill",a.formatStr("common_ICON_jinengkuang0%s",t.quality)),this.view.loadIcon(this.imgIcon,"icon_skill",t.icon),this.txtOriLevel.string=i.oriLevel,this.txtNowLevel.string=i.nowLevel},t.hide=function(){this.node.active=!1},t.destroy=function(){this.view=null,this.node.destroy()},i}();e._RF.pop()}}}));
