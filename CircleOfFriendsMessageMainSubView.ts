System.register("chunks:///_virtual/CircleOfFriendsMessageMainSubView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./ConfigGlobal.ts","./CommonDefine.ts","./MessageView.ts","./CircleOfFriendsControl.ts","./CircleOfFriendsDataCache.ts","./CircleOfFriendsDefine.ts","./CircleOfFriendsDynamicMainMessageItem.ts","./BaseSubView.ts"],(function(e){"use strict";var t,i,n,s,o,a,r,h,c,l,d,m,f,u,g,p,C,v;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Button,s=e.EditBox,o=e.ScrollView,a=e.UITransform,r=e.Node,h=e.instantiate,c=e.Vec3},null,function(e){l=e.ConfigGlobal},function(e){d=e.CommonEventDefine},function(e){m=e.default},function(e){f=e.default},function(e){u=e.CircleOfFriendsDataCache},function(e){g=e.CircleOfFriendsEvent,p=e.CircleOfFriendsDefine},function(e){C=e.CircleOfFriendsDynamicMainMessageItem},function(e){v=e.BaseSubView}],execute:function(){i._RF.push({},"aca00JaPwRPEqf9C2MtVKG6","CircleOfFriendsMessageMainSubView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).normalBgTrans=void 0,t.commentBgTrans=void 0,t.dynamicData=void 0,t.commentBgPosOffset=0,t.input=void 0,t.ScrollView=void 0,t.contentTrans=void 0,t.tempMessageItem=void 0,t.list=[],t.isSendToServer=void 0,t.page=void 0,t.isTopRefresh=void 0,t.inform_btn=void 0,t.name="CircleOfFriendsMainSubView",t.fullScreen=!1,t}t(i,e);var v=i.prototype;return v.registerUpdateHandler=function(){this.addEvent(g.UpdateDynamicDiscuss,this.RefreshContent,this),this.addEvent(g.UpdateDynamicInfo,this.RefreshContent,this),this.addEvent(g.InsertDiscusses,this.InsertDiscuss,this),this.addEvent(g.DeleteDynamic,this.DeleteDynamic,this),this.addEvent(g.DeleteDynamicDiscuss,this.RefreshContent,this),this.addEvent(g.UpdateAttentionInfo,this.RefreshContent,this),this.addEvent(d.UpdateTranslateResult,this.updateTranslate,this)},v.onInit=function(){var e=this;this.InitTempItem(),this.InitScroll(),this.addComponentCallbackListener(this.findChild("bottom/btnClose"),n.EventType.CLICK,(function(){IS(u).ClearDisscussInfo(),normalEvent.emit(g.CloseChildView,p.ViewType.MessageMainPanel)})),this.input=this.findChildComponent("input/inputField",s),this.input.placeholder=GetLanguage_UI(300127),this.input.maxLength=l.circle_comment_limit,this.addComponentCallbackListener(this.findChild("input/sendBtn"),n.EventType.CLICK,(function(){""!=e.input.string?(IS(f).sendToPostDiscuss(e.dynamicData.id,e.input.string),e.input.string=""):m.showFlyTip(GetLanguage(300141))})),this.inform_btn=this.findChild("informBtn"),this.addComponentCallbackListener(this.inform_btn,n.EventType.CLICK,(function(){uiMgr.openView("InformView",{id:e.dynamicData.role_id,name:e.dynamicData.name})}))},v.InitScroll=function(){var e=this,t=this.findChildComponent("ScrollView",o);this.ScrollView=this.addUIList(t,C),this.ScrollView.lackSlide=!0,this.addComponentCallbackListener(t.node,o.EventType.SCROLL_TO_BOTTOM,(function(){if(!e.isSendToServer){var t=IS(u).GetDiscussDynamicInfo();!t.isMaxPage&&t.page&&(e.page=t.page+1,e.isSendToServer=!0,IS(f).sendToGetDiscuss(e.dynamicData.id,e.page,p.PageSize))}})),this.addComponentCallbackListener(t.node,o.EventType.BOUNCE_TOP,(function(){e.isTopRefresh&&(e.isTopRefresh=!1,e.page=1,IS(f).sendToGetDiscuss(e.dynamicData.id,e.page,p.PageSize))})),this.contentTrans=this.findChildComponent("ScrollView/view/content",a),this.addComponentCallbackListener(this.contentTrans.node,r.EventType.TRANSFORM_CHANGED,(function(t){t&r.TransformBit.POSITION&&(e.contentTrans.node.position.y<p.ContentRefeshPos&&(e.isTopRefresh=!0),e.refreshBgPos())})),this.normalBgTrans=this.findChildComponent("ScrollView/view/normalBg",a),this.commentBgTrans=this.findChildComponent("ScrollView/view/commentBg",a)},v.InitTempItem=function(){this.tempMessageItem=new C;var e=this.findChild("ScrollView/view/content/item"),t=h(e);t.setParent(this.node),t.active=!0,t.position=new c(99999,99999,99999),this.tempMessageItem.isTempItem=!0,this.tempMessageItem.init(null,t,this)},v.onAfterOpen=function(){var e;this.page=1,this.dynamicData=null!=(e=this.openArgs[0])?e:this.dynamicData,this.openArgs[0]&&(this.ScrollView.scrollView.scrollToTop(),IS(f).sendToGetDiscuss(this.dynamicData.id,1,p.PageSize)),this.inform_btn.active=this.dynamicData.role_id>0,this.RefreshContent()},v.updateTranslate=function(e){var t=this,i=this.list;if(i&&i.length>0)for(var n=0;n<i.length;n++){var s=i[n];if("CircleOfFriend"==e.key1&&s.id==Number(e.key2)){var o=0,a=0,r=0;delete i[n].mainMessageheight,this.ScrollView.setCustomItemsSize(i,(function(e){var n=t.CalcHeightByIndex(i[e]);return 0==e&&(r=n,1==i.length&&(n+=10),o+=n),e>0&&(a+=n,o+=n),e>0&&e==i.length-1&&(n+=20,o+=20),n}),!0),this.ScrollView.datas=i,this.commentBgPosOffset=r,this.normalBgTrans.height=o-94,this.commentBgTrans.height=a,this.refreshBgPos();break}}},v.ClickInput=function(){this.input.setFocus()},v.RefreshContent=function(){var e=this,t=[this.dynamicData];t=t.concat(IS(u).GetDiscussList(this.dynamicData.id)),this.dynamicData.discuss_num=Math.max(this.dynamicData.discuss_num,t.length-1);var i=0,n=0,s=0;this.ScrollView.setCustomItemsSize(t,(function(o){var a=e.CalcHeightByIndex(t[o]);return 0==o&&(s=a,1==t.length&&(a+=10),i+=a),o>0&&(n+=a,i+=a),o>0&&o==t.length-1&&(a+=20,i+=20),a}),!0),this.list=t,this.ScrollView.datas=t,this.isSendToServer=!1,this.commentBgPosOffset=s,this.normalBgTrans.height=i-94,this.commentBgTrans.height=n,this.refreshBgPos()},v.refreshBgPos=function(){var e=this.normalBgTrans.node.position;this.normalBgTrans.node.position=new c(e.x,this.contentTrans.node.position.y-94,0),e=this.commentBgTrans.node.position,this.commentBgTrans.node.position=new c(e.x,this.contentTrans.node.position.y-this.commentBgPosOffset,0)},v.CalcHeightByIndex=function(e){if(e){var t=this.tempMessageItem.GetShowContent(e);if(e.mainMessageheight&&t==e.mainMessageheight.content)return e.mainMessageheight.height;var i=this.tempMessageItem.CalcHeight(e);return e.mainMessageheight={height:i,content:t},i}},v.InsertDiscuss=function(){this.ScrollView.scrollTo(1,-1),IS(f).sendToGetDiscuss(this.dynamicData.id,1,p.PageSize)},v.DeleteDynamic=function(e){this.dynamicData.id==e&&(IS(u).ClearDisscussInfo(),normalEvent.emit(g.CloseChildView,p.ViewType.MessageMainPanel))},v.onBeforeClose=function(){},v.onDestroy=function(){},i}(v));i._RF.pop()}}}));
