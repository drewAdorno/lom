System.register("chunks:///_virtual/FriendAttrCompareView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./UIList.ts","./NodeUtil.ts","./ConfigGlobal.ts","./RoleControl.ts","./RoleDefine.ts","./StringUtil.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,r,a,s,l,u,h,d,c,f,v;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,r=t.ScrollView,a=t.js,s=t.Label},null,function(t){l=t.ListItem},function(t){u=t.default},function(t){h=t.ConfigGlobal},function(t){d=t.default},function(t){c=t.RoleEventDefine},function(t){f=t.default},function(t){v=t.BaseView}],execute:function(){n._RF.push({},"c1c38xCppZPKpqJu5escU+s","FriendAttrCompareView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).attrList=void 0,e.attrIdToValue={},e.otherIdToValue={},e.other_attr=void 0,e.name="FriendAttrCompareView",e.url="ui/module/friend/FriendAttrCompareView",e}e(n,t);var s=n.prototype;return s.onInit=function(){var t=this,e=this.findChild("node/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.onCloseClick()}));var i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onCloseClick()}));var n=this.findChildComponent("node/attrList",r);this.attrList=this.addUIList(n,p)},s.onCloseClick=function(){this.close()},s.registerUpdateHandler=function(){this.addEvent(c.ROLE_ATTR_LIST_UPDATE_VIRTUAL,this.updateInfo,this)},s.onAfterOpen=function(){this.other_attr=this.openArgs[0],this.attrIdToValue={},this.otherIdToValue={},IS(d).send_3_7(1)},s.onBeforeClose=function(){},s.onDestroy=function(){},s.GetAttrList=function(t){var e=[],n=h.base_attr;2==t?n=h.advanced_attr:3==t&&(n=h.finally_attr);for(var o,r=i(n);!(o=r()).done;){var a=o.value;e.push({id:a,me_val:this.attrIdToValue[a]||0,other_val:this.otherIdToValue[a]||0})}return e},s.updateInfo=function(t){for(var e,n=i(t);!(e=n()).done;){var o=e.value;this.attrIdToValue[o.k]=o.v}for(var r,a=i(this.other_attr);!(r=a()).done;){var s=r.value;this.otherIdToValue[s.k]=s.v}var l=this.GetAttrList(1),u=[GetLanguage(200103),l],h=this.GetAttrList(2),d=[GetLanguage(200104),h],c=this.GetAttrList(3),f=[GetLanguage(200105),c],v=[];v.push(u),v.push(d),v.push(f),this.attrList.datas=v},s.getRoleAttrById=function(t){var e=this.attrIdToValue[t];return null==e?0:e},s.getAttrValue=function(t){var e=configAttribute.getDataByKey(t),i=this.getRoleAttrById(t);if(0==i&&3==e.type&&null!=e.group){var n=this.getRoleAttrById(e.group-1e3),o=this.getRoleAttrById(e.group),r=1;2==e.show_type&&(r=1e4),i=(n-o)/o*r}return 2==e.show_type?a.formatStr("%s%",f.GetNumString(i/100)):3==e.show_type?f.GetNumString(Math.floor(i/100)/100):f.GetNumString(i)},n}(v));var p=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtTitle=void 0,e.scroll=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.adaptiveSize=!0,this.txtTitle=u.findChildComponent(this.node,"title/Label",s);var t=u.findChildComponent(this.node,"scroll",r);this.scroll=this.view.addUIList(t,g,!1),this.scroll.touchEvent=!1},n.onRender=function(t,e){this.txtTitle.string=t[0];var i=40*Math.ceil(t[1].length)+15+15+.01;this.scroll.height=i,this.scroll.datas=t[1],this.ut.height=42+i},i}(l),g=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtName=void 0,e.txtValue=void 0,e.txtValue2=void 0,e.upIcon=void 0,e.dowenIcon=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.txtName=u.findChildComponent(this.node,"txtAttrName",s),this.txtValue=u.findChildComponent(this.node,"txtAttrValue",s),this.txtValue2=u.findChildComponent(this.node,"txtAttrValue2",s),this.upIcon=u.findChild(this.node,"up"),this.dowenIcon=u.findChild(this.node,"down")},n.getAttrValueById=function(t,e){e=e||0;var i=f.GetNumString(e)+"",n=configAttribute.getDataByKey(t);return 2==n.show_type?i=a.formatStr("%s%",f.GetNumString(e/100)):3==n.show_type&&(i=f.GetNumString(Math.floor(e/100)/100)+""),i},n.onRender=function(t,e){var i=configAttribute.getDataByKey(t.id);this.txtName.string=i.name,this.txtValue.string=this.getAttrValueById(t.id,t.me_val),this.txtValue2.string=this.getAttrValueById(t.id,t.other_val),this.upIcon.active=t.me_val>t.other_val,this.dowenIcon.active=t.me_val<t.other_val},i}(l);n._RF.pop()}}}));

