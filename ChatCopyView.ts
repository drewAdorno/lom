System.register("chunks:///_virtual/ChatCopyView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./ChatDefine.ts","./BasePopupView.ts"],(function(t){"use strict";var e,n,i,o,a,s,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.UITransform,o=t.Button},null,function(t){a=t.ChatDefine,s=t.ChatEventDefine},function(t){h=t.BasePopupView}],execute:function(){n._RF.push({},"f40f7cUwc5CqoZu3NnVdNgR","ChatCopyView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).data=void 0,e.bgNode=void 0,e.bgUT=void 0,e.viewContainerNode=void 0,e.targetNode=void 0,e.chatBtn=void 0,e.name="ChatCopyView",e.url="ui/module/Chat/ChatCopyView",e}e(n,t);var h=n.prototype;return h.onInit=function(){var t=this;this.viewContainerNode=this.findChild("view"),this.bgNode=this.findChild("view/imgBg"),this.bgUT=this.bgNode.getComponent(i),this.chatBtn=this.findChild("view/imgBg/btn"),this.addComponentCallbackListener(this.chatBtn,o.EventType.CLICK,(function(){t.data.type==a.ChatContentType.Face?normalEvent.emit(s.SendFace,t.data.content,a.ChatContentType.Face):normalEvent.emit(s.UpdateCopyContent,t.data),t.close()}))},h.registerUpdateHandler=function(){},h.onAfterOpen=function(){t.prototype.onAfterOpen.call(this),this.data=this.openArgs[0],this.targetNode=this.openArgs[1],this.UpdateAlign()},h.onDestroy=function(){},h.UpdateAlign=function(){var t=this.GetAlignCenter(),e=t.posX,n=t.posY;this.viewContainerNode.setPosition(e,n)},h.GetAlignCenter=function(){var t=this.targetNode.worldPosition,e=this.targetNode.getComponent(i),n=this.node.getComponent(i).convertToNodeSpaceAR(t);n.x,this.bgUT.width,n.x,this.bgUT.width;return{posX:n.x,posY:n.y-e.height*this.targetNode.scale.y-this.bgUT.height/2}},n}(h));n._RF.pop()}}}));
