System.register("chunks:///_virtual/CircleOfFriendsPosView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameLoadingView.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./ObjectUtil.ts","./CircleOfFriendsControl.ts","./BaseView.ts"],(function(t){"use strict";var e,i,s,o,n,r,l,a,c,d,h,f,u,m,p;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,s=t.Button,o=t.UITransform,n=t.Vec3,r=t.Vec2,l=t.Label,a=t.Color,c=t.ScrollView},function(t){d=t.GameLoadingView},function(t){h=t.ListItem},function(t){f=t.default},null,function(t){u=t.default},function(t){m=t.default},function(t){p=t.BaseView}],execute:function(){i._RF.push({},"29350SURbJG1qvzuiiD8OmL","CircleOfFriendsPosView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).showNode=void 0,e.isNeedChange={},e.dataList={},e.sizeList={},e.selectIdx={},e.PosType={Pos:1,SubPos:2},e.scrollItem={},e.timer={},e.name="CircleOfFriendsPosView",e.url="ui/module/CircleOfFriends/CircleOfFriendsPosView",e.fullScreen=!1,e}e(i,t);var l=i.prototype;return l.registerUpdateHandler=function(){},l.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.close()})),this.showNode=this.findChildComponent("content/show",o);for(var i=function(e){var i={contentTrans:t.findChildComponent("content/scroll"+e+"/view/content",o),scrollList:t.addUIList(t.findChildComponent("content/scroll"+e,c),L)};t.addComponentCallbackListener(i.scrollList.scrollView.node,c.EventType.SCROLL_BEGAN,(function(){t.isNeedChange[e]=!0})),t.addComponentCallbackListener(i.scrollList.scrollView.node,c.EventType.SCROLL_ENDED,(function(){t.isNeedChange[e]&&t.SelectIdx(e)})),t.addComponentCallbackListener(i.scrollList.scrollView.node,c.EventType.TOUCH_UP,(function(){t.timer[e]&&t.SelectIdx(e)})),t.scrollItem[e]=i},n=1;n<=2;n++)i(n);var r=this.findChild("content/sendBtn");this.addComponentCallbackListener(r,s.EventType.CLICK,(function(){IS(m).sendToSetArea(t.selectIdx[t.PosType.Pos],0),t.close()}))},l.onAfterOpen=function(){this.selectIdx={},this.RefreshPos(this.PosType.Pos);var t=this.openArgs[0],e=(this.openArgs[1],0);if(t>0){for(var i=0;i<this.dataList[this.PosType.Pos].length;i++)if(this.dataList[this.PosType.Pos][i].id==t){e=i;break}this.SelectIdx(this.PosType.Pos,e)}else{for(var s=d.instance.curlaguage,o=0;o<this.dataList[this.PosType.Pos].length;o++){var n=this.dataList[this.PosType.Pos][o].type;if((n||0==n)&&(e=o),n==s){e=o;break}}this.SelectIdx(this.PosType.Pos,e)}},l.GetShowInfo=function(t,e){var i=this.dataList[t][e];if(!i.id)return null;var s=e*-this.sizeList[t][e],o=this.scrollItem[t].contentTrans.convertToWorldSpaceAR(new n(0,s,0)),r=this.showNode.convertToNodeSpaceAR(o);return{info:i,compareY:Math.abs(r.y),oriCompareY:-r.y,centerPos:s}},l.SelectIdx=function(t,e){var i=this,s=null;if(e)s=this.GetShowInfo(t,e);else for(var o=0;o<this.dataList[t].length;o++){var n=this.GetShowInfo(t,o);n&&((!s||n.compareY<s.compareY)&&(s=n))}if(this.scrollItem[t].scrollList.scrollView.stopAutoScroll(),s){var l=this.scrollItem[t].scrollList.scrollView.content.getPosition();this.timer[t]&&(this.removeTimer(this.timer[t]),this.timer[t]=null),e&&(this.timer[t]=this.addTimer(.5,1,(function(){i.timer[t]=null}))),this.scrollItem[t].scrollList.scrollView.scrollToOffset(new r(0,l.y+s.oriCompareY),.5),this.isNeedChange[t]=!1,s.info.id!=this.selectIdx[t]&&(this.selectIdx[t]=s.info.id,this.scrollItem[t].scrollList.updateAll(),this.PosType.Pos)}},l.RefreshPos=function(t){var e=this;if(delete this.selectIdx[t],this.dataList[t]=[],this.sizeList[t]=[],this.scrollItem[t].scrollList.scrollView.scrollToTop(),t==this.PosType.Pos){var i=u.copyArray(configCircle_location.getDatas());i.sort((function(t,e){return t.rank<e.rank?-1:1}));for(var s=i.length+8,o=0,n=0;n<s;n++){var r={};n>3&&n<s-4&&i[o]&&(r=i[o],o++),this.dataList[this.PosType.Pos].push(r)}}this.scrollItem[t].scrollList.setCustomItemsSize(this.dataList[t],(function(i){return 0==i?(e.sizeList[t][i]=37.7,37.7):i==e.dataList[t].length-1?(e.sizeList[t][i]=17.7,17.7):(e.sizeList[t][i]=51,51)}),!0),this.scrollItem[t].scrollList.datas=this.dataList[t],this.SelectIdx(t)},l.onBeforeClose=function(){for(var t in this.timer)this.timer[t]&&this.removeTimer(this.timer[t]);this.timer={}},l.onDestroy=function(){},i}(p));var L=t("ItemMaker",function(t){function i(){for(var e,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))||this).name=void 0,e}e(i,t);var o=i.prototype;return o.onInit=function(){var t=this;this.name=f.findChildComponent(this.node,"pos",l),this.view.addComponentCallbackListener(f.findChild(this.node,"pos"),s.EventType.CLICK,(function(){if(t.data.id){var e=t.data.belong?1:2;if(t.view.selectIdx[e]==t.index)return;t.view.SelectIdx(e,t.index)}}))},o.onRender=function(t,e){if(t.id){this.name.string=t.name;var i=t.belong?1:2;this.name.color=new a(t.id==this.view.selectIdx[i]?"ffffff":"#544231")}else this.name.string=""},i}(h));i._RF.pop()}}}));
