System.register("chunks:///_virtual/HorseUpgradeInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,s,r,c,d,a;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.Label,s=t.UITransform,r=t.Node,c=t.Layout},function(t){d=t.default},function(t){a=t.BaseView}],execute:function(){n._RF.push({},"ed8dcTMW5ZM45SJEbgFqTYt","HorseUpgradeInfoView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).txtCurName=void 0,e.txtNextName=void 0,e.txtCurDesc=void 0,e.txtNextDesc=void 0,e.nodeStar1=void 0,e.nodeStar2=void 0,e.nextLevel=5,e.id=void 0,e.arrowLeft=void 0,e.arrowRight=void 0,e.name="HorseUpgradeInfoView",e.url="ui/module/horse/HorseUpgradeInfoView",e.fullScreen=!1,e}e(n,t);var a=n.prototype;return a.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()})),this.arrowLeft=this.findChild("content/nodeNextEffect/arrowLeft"),this.addComponentCallbackListener(this.arrowLeft,i.EventType.CLICK,(function(){t.nextLevel=5,t.updateNextInfo()})),this.arrowRight=this.findChild("content/nodeNextEffect/arrowRight"),this.addComponentCallbackListener(this.arrowRight,i.EventType.CLICK,(function(){t.nextLevel=10,t.updateNextInfo()})),this.txtCurName=this.findChildComponent("content/nodeCurEffect/content/txtCurName",o),this.txtNextName=this.findChildComponent("content/nodeNextEffect/content/txtNextName",o),this.txtCurDesc=this.findChildComponent("content/nodeCurEffect/content/ScrollView/view/content/item",o),this.txtNextDesc=this.findChildComponent("content/nodeNextEffect/content/ScrollView/view/content/item",o),this.nodeStar1=this.findChild("content/nodeNextEffect/nodeName/nodeStar1"),this.nodeStar2=this.findChild("content/nodeNextEffect/nodeName/nodeStar2");var n=this.findChild("content/nodeCurEffect/content/ScrollView/view/content/item"),d=this.findChildComponent("content/nodeCurEffect/content/ScrollView/view/content",s);n.on(r.EventType.SIZE_CHANGED,(function(){d.height=n.getComponent(s).height}));var a=this.findChild("content/nodeNextEffect/content/ScrollView/view/content/item"),l=this.findChildComponent("content/nodeNextEffect/content/ScrollView/view/content",s);a.on(r.EventType.SIZE_CHANGED,(function(){l.height=a.getComponent(s).height})),this.dealMirrorLayout(this.findChildComponent("content/nodeNextEffect/nodeName",c))},a.registerUpdateHandler=function(){},a.onAfterOpen=function(){this.updateInfo(this.openArgs[0],this.openArgs[1])},a.onBeforeClose=function(){},a.onDestroy=function(){},a.updateInfo=function(t,e){this.nextLevel=e<5?5:10,this.id=t;var n=configMount_skin.getDataByKeys("mount_id",t,"skin_level",e),i=configSkill.getDataByKey(n.skin_skill[0][0]);this.txtCurName.string=i.name,this.txtNextName.string=i.name;var o=configSkill_level.getDataByKeys("id",n.skin_skill[0][0],"level",n.skin_skill[0][1]);this.txtCurDesc.string=d.formatStr.apply(d,[o.desc].concat(o.desc_parm)),this.updateNextInfo()},a.updateNextInfo=function(){this.arrowLeft.active=10==this.nextLevel,this.arrowRight.active=5==this.nextLevel,this.nodeStar1.active=5==this.nextLevel,this.nodeStar2.active=10==this.nextLevel;var t=configMount_skin.getDataByKeys("mount_id",this.id,"skin_level",this.nextLevel),e=configSkill_level.getDataByKeys("id",t.skin_skill[0][0],"level",t.skin_skill[0][1]);this.txtNextDesc.string=d.formatStr.apply(d,[e.desc].concat(e.desc_parm))},n}(a));n._RF.pop()}}}));
