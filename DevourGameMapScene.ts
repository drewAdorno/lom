System.register("chunks:///_virtual/DevourGameMapScene.ts",["cc","./V2.ts","./NodeUtil.ts","./MessageView.ts","./GameCenterControl.ts","./GameCenterModel.ts","./DevourGameDefine.ts","./SceneCamera6.ts","./SceneUnit9.ts"],(function(e){"use strict";var t,n,i,o,s,a,r,u,c,d,h,l,m,f,w,p,v,S,C;return{setters:[function(e){t=e.cclegacy,n=e.Prefab,i=e.UITransform,o=e.Node,s=e.Vec3,a=e.find,r=e.Camera},function(e){u=e.V2},function(e){c=e.default},function(e){d=e.default},function(e){h=e.default},function(e){l=e.default},function(e){m=e.UnitsNum,f=e.MaxRadius,w=e.DevourSpeed,p=e.MinRadius},function(e){v=e.SceneCamera},function(e){S=e.SceneRole,C=e.SceneUnit}],execute:function(){var g;t._RF.push({},"5f646ef/DFMcqMHoQqmMPCZ","DevourGameMapScene",void 0);e("DevourGameMapScene",function(){function e(e){this.units=[],this.node=void 0,this.view=void 0,this.mapCamera=new v,this.owner=void 0,this.polyNav=void 0,this.ut=void 0,this.onLoadViewSuccess=void 0,this.startTouchPos=void 0,this.frameNum=0,this.completeGame=!1,g=a("SceneRoot"),this.view=e,this.mapCamera.nodeCamera=c.findChild(g,"SceneCamera"),this.mapCamera.camera=this.mapCamera.nodeCamera.getComponent(r)}var t=e.prototype;return t.load=function(){var e=this;this.node||(null!==this.onLoadViewSuccess&&(resourceMgr.cancelLoadRes("ui/module/devourGame/DevourGameMapScene",this.onLoadViewSuccess),this.onLoadViewSuccess=null),this.onLoadViewSuccess=function(t){if(e.onLoadViewSuccess=null,!t.error&&null!==t.item&&null!==t.item.asset){var n=t.item.asset,i=nodeInstantiate.instantiate(n);e.node=i,i.setParent(g),e.onInit()}},resourceMgr.loadRes("ui/module/devourGame/DevourGameMapScene",n,this.onLoadViewSuccess))},t.onInit=function(){var e=this,t=this.view,n=c.findChild(this.node,"map_xiaoyouxi_02"),a=c.findChild(this.node,"player"),r=c.findChildComponent(this.node,"player",i);this.owner=new S(a,r),this.mapCamera.follow=this.owner;for(var u=1;u<=m;u++){var d=c.findChild(this.node,"mogu/mogu_"+u.toString()),h=c.findChildComponent(this.node,"mogu/mogu_"+u.toString(),i),l=new C(d,h);this.units.push(l)}t.addComponentCallbackListener(n,o.EventType.TOUCH_END,(function(t){if(e.owner){var n=t.getLocation(),i=new s(n.x,n.y,0);e.mapCamera.camera.screenToWorld(i).add3f(2e3,0,0)}})),this.open()},t.registerEvent=function(){},t.open=function(){if(g.active||(g.active=!0),this.node)return this.registerEvent(),void this.onAfterOpen();this.load()},t.close=function(){g.active&&(g.active=!1),null!==this.onLoadViewSuccess&&(resourceMgr.cancelLoadRes("ui/module/devourGame/DevourGameMapScene",this.onLoadViewSuccess),this.onLoadViewSuccess=null),this.onBeforeClose()},t.destroy=function(){this.close(),this.node&&(this.node.destroy(),resourceMgr.releaseResRef("ui/module/devourGame/DevourGameMapScene"),this.node=null)},t.onAfterOpen=function(){this.completeGame=!1},t.onBeforeClose=function(){null!==this.owner&&(this.mapCamera.follow=null,this.owner=null)},t.onDestroy=function(){},t.onUpdate=function(e){this.owner&&(this.completeGame||(this.mapCamera.onUpdate(),this.owner.onUpdate(e)),2===this.frameNum?(this.DetectRole(e),this.frameNum=0):this.frameNum++)},t.DetectRole=function(e){for(var t=this,n=this.owner.node.position,i=0;i<m;i++){var o=this.units[i].node.position;if(!(u.distance(n,o)>this.owner.radius+this.units[i].radius))if(this.owner.radius>this.units[i].radius&&this.units[i].radius>0&&0==this.completeGame){this.owner.radius>f&&(2==i||5==i||16==i)&&(this.completeGame=!0,d.showBoxTip({tip:"您已通关！",btnCnt:1,func:function(e){t.destroy(),uiMgr.getOpenView("DevourGameMapSceneView").destroy();var n=IS(l).getRewardInfo(7);n&&2!=n.status&&IS(h).repTakeReward(7)},ensure:GetLanguage(200129)}));var a=new s(this.owner.node.scale.x+w,this.owner.node.scale.y+w,this.owner.node.scale.z),r=new s(this.units[i].node.scale.x-w,this.units[i].node.scale.y-w,this.units[i].node.scale.z);this.owner.node.setScale(a),this.units[i].node.setScale(r),this.owner.resetSize(),this.units[i].resetSize()}else if(this.owner.radius<this.units[i].radius&&this.owner.radius>0&&0==this.completeGame){var c=new s(this.owner.node.scale.x-w,this.owner.node.scale.y-w,this.owner.node.scale.z),v=new s(this.units[i].node.scale.x+w,this.units[i].node.scale.y+w,this.units[i].node.scale.z);this.owner.node.setScale(c),this.units[i].node.setScale(v),this.owner.resetSize(),this.units[i].resetSize()}}this.owner.radius<=p&&(this.completeGame=!0,d.showBoxTip({tip:"闯关失败！",btnCnt:1,func:function(e){t.destroy(),uiMgr.getOpenView("DevourGameMapSceneView").destroy(),uiMgr.openView("DevourGameMapSceneView")},ensure:GetLanguage(200129)}))},t.moveOwner=function(e){this.owner&&this.owner.moveToDir(e)},e}());t._RF.pop()}}}));
