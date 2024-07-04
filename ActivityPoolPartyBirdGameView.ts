System.register("chunks:///_virtual/ActivityPoolPartyBirdGameView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./NodeUtil.ts","./index57.ts","./ConfigGlobal.ts","./ActivityDefine.ts","./ActivityPoolPartyControl.ts","./BaseView.ts"],(function(t){"use strict";var i,e,o,s,n,l,h,r,a,d,c,f,u,v,p,m,g,b,_,y,L;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){o=t.cclegacy,s=t.Label,n=t.Button,l=t.Node,h=t.UITransform,r=t.CircleCollider2D,a=t.Contact2DType,d=t.RigidBody2D,c=t.Vec2,f=t.Vec3,u=t.Widget,v=t.BoxCollider2D,p=t.Size},function(t){m=t.audioMgr},function(t){g=t.default},null,function(t){b=t.ConfigGlobal},function(t){_=t.ActivityType},function(t){y=t.default},function(t){L=t.BaseView}],execute:function(){o._RF.push({},"7237d0rLnhCb5q6+6BV7OlT","ActivityPoolPartyBirdGameView",void 0);var C=b.space_frog_get_score,k=b.space_frog_origin_location,P=b.space_frog_g,S=b.space_frog_click_speed,B=b.space_frog_incline_limit,w=b.space_frog_speed_limit,M=(t("default",function(t){function o(){var i;return(i=t.call(this)||this).nodeBottom=void 0,i.nodeBlock=void 0,i.itemBlock=void 0,i.imgBottom1=void 0,i.imgBottom2=void 0,i.nodePlayer=void 0,i.nodeEffect=void 0,i.nodeStart=void 0,i.txtScore=void 0,i.modelId=-1,i.startModelId=-1,i.playerRig=void 0,i.isPlaying=!1,i.isStart=!1,i.totalDistance=0,i.imgDistance=0,i.levelDistance=0,i.mapSpeed=20,i.curSpeed=0,i.curLevel=0,i.curScore=0,i.blockHeight=900,i.curGap=100,i.mapAry=[],i.levelList=[],i.blockList=[],i.name="ActivityPoolPartyBirdGameView",i.url="ui/module/activityPoolParty/ActivityPoolPartyBirdGameView",i.banDefeat=!0,i}i(o,t);var v=o.prototype;return v.onInit=function(){var t=this;this.nodeBottom=this.findChild("content/nodeBottom");var i=this.findChild("content/nodeBottom/img1"),e=this.findChild("content/nodeBottom/img2");this.mapAry.push(i),this.mapAry.push(e),this.nodeBlock=this.findChild("content/nodeBlock"),this.itemBlock=this.findChild("content/nodeBlock/itemBlock"),this.nodePlayer=this.findChild("content/nodePlayer"),this.nodeStart=this.findChild("btnStart"),this.nodeEffect=this.findChild("content/nodePlayer/nodeEffect"),this.imgBottom1=this.findChild("content/nodeBottom/imgBottom1"),this.imgBottom2=this.findChild("content/nodeBottom/imgBottom2"),this.txtScore=this.findChildComponent("txtScore",s);var o=this.findChild("bottom/btnClose");this.addComponentCallbackListener(o,n.EventType.CLICK,(function(){t.destroy()}));var r=this.findChild("bottom/btnGuide");this.addComponentCallbackListener(r,n.EventType.CLICK,(function(){uiMgr.openView("ActivityPoolPartyGameGuideView",2)}));var a=this.findChild("btnJump");this.addComponentCallbackListener(a,n.EventType.CLICK,(function(){t.isPlaying&&(m.playSound("bsw_tiaoyue"),t.curSpeed=S)}));var d=this.findChild("btnStart");this.addComponentCallbackListener(d,l.EventType.TOUCH_START,(function(i){if(!t.isStart){t.isStart=!0,t.isPlaying=!0,t.nodeStart.active=!1,t.blockHeight=t.nodeBlock.getComponent(h).height;var e=t.levelList[t.curLevel].lower_half_length[0]+Math.floor(Math.random()*(t.levelList[t.curLevel].lower_half_length[1]-t.levelList[t.curLevel].lower_half_length[0]));t.CreateBlock(0,e),IS(y).send_24_131(_.PoolPartyEndBirdGame),m.playSound("common_tap")}})),this.adjustMirrorNode(this.findChild("content")),this.adjustMirrorNode(this.findChild("bottom/btnGuide/img"))},v.registerUpdateHandler=function(){},v.onAfterOpen=function(){var t=this;this.SetPlayerPosition(k[0],k[1]),this.modelId=this.addUIEffect("prefab/ui-effect/MX_tx_qianshuitinggu",this.nodeEffect,-1,null,.4,(function(i){i.node.getComponent(r).on(a.BEGIN_CONTACT,t.onBeginContact,t),t.playerRig=i.node.getComponent(d),t.addTimer(.2,0,(function(){i.node.setPosition(0,0)}))})),this.nodeStart.active=!0,this.initLevel()},v.onBeforeClose=function(){this.isPlaying=!1;for(var t,i=e(this.blockList);!(t=i()).done;){t.value.destroy()}this.blockList=[],this.playerRig.linearVelocity=new c(0,0),this.removeUIEffect(this.modelId),-1!=this.startModelId&&this.removeUIEffect(this.startModelId)},v.onDestroy=function(){},v.onUpdate=function(t){this.isPlaying&&(this.MoveMap(t),this.MovePlayer(t))},v.initLevel=function(){this.curLevel=0,this.totalDistance=0,this.imgDistance=0,this.curScore=0,this.isStart=!1,this.isPlaying=!1,this.levelList=[],this.blockList=[],this.txtScore.string=this.curScore.toString(),this.mapAry[0].setPosition(702.5,-159.5),this.mapAry[1].setPosition(2107.5,-159.5);for(var t,i=e(configFlappy_bird.getDatas());!(t=i()).done;){var o=t.value;this.levelList.push(o)}this.UpdateLevel()},v.MoveMap=function(t){this.totalDistance+=t*this.mapSpeed,this.imgDistance+=t*this.mapSpeed,this.levelDistance+=t*this.mapSpeed,this.nodeBlock.translate(new f(-t*this.mapSpeed,0,0));for(var i,o=e(this.blockList);!(i=o()).done;){i.value.resetPos()}if(this.nodeBottom.translate(new f(-t*this.mapSpeed,0,0)),this.imgDistance>1405){for(var s=0;s<2;s++)if(this.mapAry[s].worldPosition.x<0){this.mapAry[s].setPosition(this.mapAry[s].position.x+2810,-159.5);break}this.imgDistance-=1405}this.levelDistance>this.curGap&&(this.levelDistance-=this.curGap,this.UpdateLevel(),this.CreateBlock(this.totalDistance,this.blockList[this.blockList.length-1].b_length))},v.MovePlayer=function(t){this.curSpeed=this.curSpeed-t*P>w[0]?this.curSpeed-t*P:w[0],this.playerRig.linearVelocity=new c(0,this.curSpeed);var i=0;this.curSpeed>0?i=Math.abs(this.curSpeed)/Math.abs(w[1])*B[1]:this.curSpeed<0&&(i=Math.abs(this.curSpeed)/Math.abs(w[0])*B[0]),this.getUIEffect(this.modelId).node.angle=i,this.CheckPass()},v.SetPlayerPosition=function(t,i){this.nodePlayer.getComponent(u).left=t,this.nodePlayer.getComponent(u).bottom=i},v.CheckPass=function(){for(var t=this.blockList.length-1;t>=0;t--)this.blockList[t].isPassed||this.getUIEffect(this.modelId).node.worldPosition.x-120>this.blockList[t].node.worldPosition.x&&(m.playSound("common_reward"),this.blockList[t].isPassed=!0,this.curScore+=C,this.txtScore.string=this.curScore.toString(),this.UpdateLevel()),this.blockList[t].checkIsOutRange(this.totalDistance)&&(this.blockList[t].destroy(),this.blockList.splice(t,1))},v.CreateBlock=function(t,i){var e=nodeInstantiate.instantiate(this.itemBlock);this.nodeBlock.addChild(e),this.blockList.push(new M(e,this,this.curLevel,t,i))},v.UpdateLevel=function(){this.curLevel=-1;for(var t,i=e(this.levelList);!(t=i()).done;){var o=t.value;this.curScore>=o.score&&this.curLevel++}this.mapSpeed=this.levelList[this.curLevel].scene_speed,this.curGap=this.levelList[this.curLevel].barrier_interval[0]+Math.floor(Math.random()*(this.levelList[this.curLevel].barrier_interval[1]-this.levelList[this.curLevel].barrier_interval[0]))},v.onBeginContact=function(t,i){var e=this;m.playSound("bsw_zhuiji"),this.isPlaying=!1,this.playerRig.linearVelocity=new c(0,0),this.addTimer(.2,0,(function(){uiMgr.openView("ActivityPoolPartyBirdGameResultView",e.curScore)}))},o}(L)),function(){function t(t,i,e,o,s){this.node=void 0,this.view=void 0,this.block_bottom=void 0,this.block_top=void 0,this.widget_bottom=void 0,this.widget_top=void 0,this.collider_bottom=void 0,this.collider_top=void 0,this.startX=void 0,this.b_length=void 0,this.isPassed=!1,this.view=i,this.node=t,this.startX=o,this.node.setPosition(o,0),this.block_bottom=g.findChild(this.node,"block1"),this.block_top=g.findChild(this.node,"block2"),this.widget_bottom=g.findChildComponent(this.node,"block1",u),this.widget_top=g.findChildComponent(this.node,"block2",u),this.collider_bottom=g.findChildComponent(this.node,"block1",v),this.collider_top=g.findChildComponent(this.node,"block2",v);var n=this.view,l=n.levelList[n.curLevel].length_offset[0]+Math.floor(Math.random()*(n.levelList[n.curLevel].length_offset[1]-n.levelList[n.curLevel].length_offset[0])),h=n.levelList[n.curLevel].safe_length[0]+Math.floor(Math.random()*(n.levelList[n.curLevel].safe_length[1]-n.levelList[n.curLevel].safe_length[0]));this.b_length=s+l,this.b_length>n.levelList[n.curLevel].lower_half_length[1]&&(this.b_length=n.levelList[n.curLevel].lower_half_length[1]),this.b_length<n.levelList[n.curLevel].lower_half_length[0]&&(this.b_length=n.levelList[n.curLevel].lower_half_length[0]),this.widget_bottom.top=n.blockHeight-this.b_length,this.widget_bottom.bottom=0,this.widget_top.bottom=this.b_length+h,this.widget_top.top=0,this.collider_bottom.size=new p(87,this.b_length),this.collider_bottom.offset.y=this.b_length/2,this.collider_top.size=new p(87,n.blockHeight-h-this.b_length),this.collider_top.offset.y=(h+this.b_length-n.blockHeight)/2,this.collider_bottom.apply(),this.collider_top.apply()}var i=t.prototype;return i.checkIsOutRange=function(t){return t-this.startX>800},i.resetPos=function(){this.block_bottom.setPosition(0,this.block_bottom.position.y),this.block_top.setPosition(0,this.block_top.position.y)},i.destroy=function(){this.block_bottom&&this.block_bottom.destroy(),this.block_top&&this.block_top.destroy(),this.node&&this.node.destroy()},t}());o._RF.pop()}}}));

