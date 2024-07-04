System.register("chunks:///_virtual/ChapterMapView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./NodeUtil.ts","./index57.ts","./EquipModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./ChapterDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,o,n,s,r,a,c,l,h,p,u,f,d;return{setters:[function(t){e=t.inheritsLoose,i=t.regeneratorRuntime,o=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,s=t.ScrollView,r=t.Sprite,a=t.Color},function(t){c=t.V2},function(t){l=t.default},null,function(t){h=t.EquipModel},function(t){p=t.RoleDataCache},function(t){u=t.PlayerAttr},function(t){f=t.ChapterEventDefine},function(t){d=t.BaseView}],execute:function(){n._RF.push({},"9fa2bjNzhVBrIBLgLy4TCP5","ChapterMapView",void 0);var m=new c;t("ChapterMapView",function(t){function n(){var e;return(e=t.call(this)||this).scrollMap=void 0,e.items=[],e.mask=void 0,e.nodeEffect=void 0,e.imgBgs=void 0,e.name="ChapterMapView",e.url="ui/module/chapter/ChapterMapView",e.poolTime=2e3,e.fullScreen=!0,e}e(n,t);var d=n.prototype;return d.onInit=function(){this.scrollMap=this.findChildComponent("scrollMap",s),this.imgBgs=[],this.imgBgs.push(l.findChildComponent(this.scrollMap.content,"di",r));for(var t=0;t<10;t++)this.items[t]=l.findChild(this.scrollMap.content,"item"+(t+1)),this.imgBgs.push(this.items[t].getComponent(r));this.mask=this.findChild("mask"),this.nodeEffect=l.findChild(this.scrollMap.content,"effect")},d.registerUpdateHandler=function(){},d.ani10_1=i().mark((function t(e,o,n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,coroutine.wait(.5);case 2:return n.position=new c(0,99999),this.mask.active=!0,t.next=6,coroutine.wait(1);case 6:return this.scrollMap.scrollToBottom(),this.updateColor(o),this.mask.active=!1,this.addUIEffect("prefab/ui-effect/MX_chuansong_2",this.nodeEffect,1,e),t.next=12,coroutine.wait(.5);case 12:return n.position=e,t.next=15,coroutine.wait(1);case 15:this.close();case 16:case"end":return t.stop()}}),t,this)})),d.updateColor=function(t){var e=a.WHITE;(t-1)%2==1&&(e=new a(117,127,238,255));for(var i,n=o(this.imgBgs);!(i=n()).done;){i.value.color=e}},d.onAfterOpen=function(){var t=this,e=IS(h).getShowEquipCfgIdByLocation(1),i=IS(h).getShowEquipCfgIdByLocation(2),o=IS(h).getShowEquipCfgIdByLocation(3),n=IS(p).GetTypeUsedSkin(1),s=this.addUnitModel({job:IS(p).GetJob(),dressId:IS(p).GetTypeUsedSkin(2)||0,gender:IS(p).GetRoleAttr(u.ROLE_ATTR_GENDER),weapon:e,ornaments:i,face:o,color:n,parent:this.scrollMap.content,shenqi:0}),r=this.getUnitModel(s);r.depth=this.scrollMap.content.children.length,r.aniName="run";var a=this.openArgs[0],l=chapterDataCache.getChapterConfig(a);this.updateColor(l.level);var d=l.chapter-1,C=d+1;C=C>=10?0:C;var g=new c(this.items[d].position.x,this.items[d].position.y);r.position=g;var v=new c(this.items[C].position.x,this.items[C].position.y);if(d>4?this.scrollMap.scrollToTop():this.scrollMap.scrollToBottom(),d>=9)return this.addUIEffect("prefab/ui-effect/MX_chuansong_1",this.nodeEffect,1,g),void this.startCoroutine(this.ani10_1(v,l.level+1,r));var w=v.x-g.x;r.direction=w>0?1:-1;var M=c.subtract(new c,v,g);this.addTween(0,1,3,(function(t,e){null!=r&&(m.set(g).add2f(M.x*e,M.y*e),r.position=m)})).start(),this.addTimer(3.5,1,(function(){t.close(),battleMain.enterChapter()})),normalEvent.emit(f.CHAPTER_MAP_INIT)},d.onBeforeClose=function(){},d.onDestroy=function(){},d.onUpdate=function(t){},n}(d));n._RF.pop()}}}));
