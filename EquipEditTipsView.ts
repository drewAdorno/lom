System.register("chunks:///_virtual/EquipEditTipsView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BasePopupView.ts"],(function(t){"use strict";var i,e,n,o,s;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.UITransform,o=t.Label},null,function(t){s=t.BasePopupView}],execute:function(){e._RF.push({},"b6ad64hzpVNGaaz8ryM6wQS","EquipEditTipsView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtName=void 0,i.txtDesc=void 0,i.bgNode=void 0,i.bgUT=void 0,i.viewContainerNode=void 0,i.arrNode=void 0,i.targetNode=void 0,i.name="EquipEditTipsView",i.url="ui/module/equip/EquipEditTipsView",i}i(e,t);var s=e.prototype;return s.onInit=function(){this.viewContainerNode=this.findChild("view"),this.bgNode=this.findChild("view/imgBg"),this.bgUT=this.bgNode.getComponent(n),this.arrNode=this.findChild("view/imgBg/imgArr"),this.txtName=this.findChildComponent("view/imgBg/txtName",o),this.txtDesc=this.findChildComponent("view/imgBg/txtDesc",o)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){t.prototype.onAfterOpen.call(this),this.targetNode=this.openArgs[2],this.txtName.string=this.openArgs[0],this.txtDesc.string=this.openArgs[1],this.UpdateAlign()},s.onDestroy=function(){},s.UpdateAlign=function(){var t=this.GetAlignCenter(),i=t.posX,e=t.posY,n=t.angleX,o=t.angleY;this.viewContainerNode.setPosition(i,e),this.arrNode.setRotationFromEuler(n,o,0)},s.GetAlignCenter=function(){var t=this.targetNode.worldPosition,i=this.targetNode.getComponent(n),e=this.node.getComponent(n).convertToNodeSpaceAR(t),o=e.x-this.bgUT.width/2,s=e.x+this.bgUT.width/2,r=0,h=0,d=0,g=0,a=0;if((r=e.x)>=0){var p=s-360;p>0&&(a=p-12,g=0)}else{var u=o- -360;u<0&&(g=180,a=u-12)}return r=r-a-24,e.y<0?(h=e.y+i.height/2+this.bgUT.height/2-12,d=0):(h=e.y-i.height/2-this.bgUT.height/2-24,d=180),{posX:r,posY:h,angleX:d,angleY:g}},e}(s));e._RF.pop()}}}));
