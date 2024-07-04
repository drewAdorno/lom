System.register("chunks:///_virtual/UIList.ts",["./rollupPluginModLoBabelHelpers.js","cc","./env","./ObjectPool.ts"],(function(t){"use strict";var i,e,s,o,h,n,a,l,c,_,r,d,u,m,p,v;return{setters:[function(t){i=t.createClass},function(t){e=t.cclegacy,s=t._decorator,o=t.UITransform,h=t.isValid,n=t.Button,a=t.Node,l=t.ScrollView,c=t.Layout,_=t.sys,r=t.Size,d=t.Vec3,u=t.Event,m=t.instantiate},function(t){p=t.DEV},function(t){v=t.ObjectPool}],execute:function(){t({SelectedType:void 0,SlideType:void 0}),e._RF.push({},"d268bSP0JlNnLdatvIxhwJP","UIList",void 0);var T,f;s.ccclass,s.property,s.disallowMultiple,s.menu,s.executionOrder,s.requireComponent;!function(t){t[t.NORMAL=1]="NORMAL",t[t.ADHERING=2]="ADHERING"}(T||(T=t("SlideType",{}))),function(t){t[t.NONE=0]="NONE",t[t.SINGLE=1]="SINGLE",t[t.MULT=2]="MULT"}(f||(f=t("SelectedType",{})));var I=[],g=t("ListItem",function(){function t(){this.node=void 0,this.ut=void 0,this.view=void 0,this.data=void 0,this.index=0,this.selectedMode=f.NONE,this.adaptiveSize=!1,this._selected=!1,this._btnCom=void 0,this.list=void 0,this._eventReg=!1,this.listId=void 0}var e=t.prototype;return e.init=function(t,i,e){this.node=i,this.list=t,this.ut=null==i?void 0:i.getComponent(o),this.view=e,this.onInit()},e.cacheReset=function(){h(this.node)&&this.node.removeFromParent()},e.onRender=function(t,i){},e.onInit=function(){},e.onItemClick=function(){},e.destroy=function(){h(this.node)&&this.node.destroy()},e.cacheDestroy=function(){this.destroy()},e._registerEvent=function(){this._eventReg||(this.btnCom&&this.list.selectedMode>0&&this.btnCom.node.on(n.EventType.CLICK,this.onClickThis,this),this.adaptiveSize&&this.node.on(a.EventType.SIZE_CHANGED,this._onSizeChange,this),this._eventReg=!0)},e._onSizeChange=function(){this.list._onItemAdaptive(this)},e._render=function(t,i){this.data=t,this.index=i;try{this.onRender(t,i)}catch(t){var e,s;printLogException(t,"[UIList] view: "+(null==(e=this.view)?void 0:e.name)+' " error:" '+(null==(s=this.list.node)?void 0:s.name))}},e.onClickThis=function(){this.list.selectedId=this.listId,this.onItemClick()},i(t,[{key:"selected",get:function(){return this._selected},set:function(t){this._selected=t}},{key:"btnCom",get:function(){return this._btnCom||(this._btnCom=this.node.getComponent(n)),this._btnCom}}]),t}());t("UIList",function(){function t(){this._slideMode=T.NORMAL,this.node=void 0,this.virtual=!0,this.cyclic=!1,this.lackCenter=!1,this.lackSlide=!1,this._updateRate=0,this.frameRenderTime=0,this.frameMaxNum=0,this.selectedMode=f.NONE,this.repeatEventSingle=!1,this._touchEvent=!0,this.outScroll=void 0,this._isRegisterEvent=!1,this._selectedId=-1,this._lastSelectedId=void 0,this.multSelected=void 0,this._forceUpdate=!1,this._align=void 0,this._horizontalDir=void 0,this._verticalDir=void 0,this._startAxis=void 0,this._alignCalcType=void 0,this.content=void 0,this._contentUt=void 0,this.firstListId=void 0,this.displayItemNum=void 0,this._updateDone=!0,this._updateCounter=void 0,this._actualNumItems=void 0,this._cyclicNum=void 0,this._cyclicPos1=void 0,this._cyclicPos2=void 0,this._cyclicAllItemSize=void 0,this._items=[],this._datas=I,this._numItems=0,this._view=void 0,this._inited=!1,this._scrollView=void 0,this._layout=void 0,this._resizeMode=void 0,this._topGap=void 0,this._rightGap=void 0,this._bottomGap=void 0,this._leftGap=void 0,this._columnGap=void 0,this._lineGap=void 0,this._colLineNum=void 0,this._lastDisplayData=void 0,this.displayData=void 0,this._pool=void 0,this._itemTmp=void 0,this._itemTmpUt=void 0,this._itemSize=void 0,this._sizeType=void 0,this._customSize=void 0,this.frameCount=void 0,this.viewTop=void 0,this.viewRight=void 0,this.viewBottom=void 0,this.viewLeft=void 0,this._doneAfterUpdate=!1,this.elasticTop=void 0,this.elasticRight=void 0,this.elasticBottom=void 0,this.elasticLeft=void 0,this.scrollToListId=void 0,this.adhering=!1,this._adheringBarrier=!1,this.nearestListId=void 0,this._scrollPos=void 0,this._scrollToListId=void 0,this._scrollToEndTime=void 0,this._scrollToSo=void 0,this._lack=void 0,this._allItemSize=void 0,this._allItemSizeNoEdge=void 0,this._scrollItem=void 0,this._viewUt=void 0,this._nodeUt=void 0,this._isDestroy=!1,this._inBottomFunc=void 0}var e=t.prototype;return e.destroy=function(){var t=this;t._isDestroy||(t._isDestroy=!0,this._unregisterEvent(),h(t._itemTmp)&&t._itemTmp.destroy(),t._pool&&t._pool.destroy(!0))},e.clearData=function(){null!=this.displayData&&(this.displayData.length=0,this._lastDisplayData.length=0),this._datas=null;for(var t=this._items.length-1;t>=0;t--){var i=this._items[t];this._pool.free(i)}this._numItems=0,this._items.length=0},e._registerEvent=function(){if(!this._isRegisterEvent){var t=this.scrollView;this._touchEvent&&t&&(t.node.on(a.EventType.TOUCH_START,this._onTouchStart,this),t.node.on(a.EventType.TOUCH_MOVE,this._onTouchMove,this),t.node.on(a.EventType.TOUCH_END,this._onTouchEnd,this),t.node.on(l.EventType.TOUCH_UP,this._onTouchUp,this),t.node.on(a.EventType.TOUCH_CANCEL,this._onTouchCancelled,this),t.node.on(l.EventType.SCROLL_ENDED,this._onScrollEnded,this),t.node.on(l.EventType.SCROLLING,this._onScrolling,this),this._isRegisterEvent=!0),t&&t.node.on(a.EventType.SIZE_CHANGED,this._onSizeChanged,this)}},e._unregisterEvent=function(){if(this._isRegisterEvent){var t=this.scrollView;this.touchEvent&&t&&(t.node.off(a.EventType.TOUCH_START,this._onTouchStart,this),t.node.off(a.EventType.TOUCH_MOVE,this._onTouchMove,this),t.node.off(a.EventType.TOUCH_END,this._onTouchEnd,this),t.node.off(l.EventType.TOUCH_UP,this._onTouchUp,this),t.node.off(a.EventType.TOUCH_CANCEL,this._onTouchCancelled,this),t.node.off(l.EventType.SCROLL_ENDED,this._onScrollEnded,this),t.node.off(l.EventType.SCROLLING,this._onScrolling,this),this._isRegisterEvent=!1),t&&t.node.off(a.EventType.SIZE_CHANGED,this._onSizeChanged,this)}},e.init=function(t,i,e){this._init(t,i,e)},e._init=function(t,i,e,s){var h=this;if(h._inited||(this._pool=new v(null!=e?e:g,10,!1)),this._scrollView=t,h._inited||(this.node=t.node,this.node.once(a.EventType.NODE_DESTROYED,this.destroy,this)),h._nodeUt=this.node.getComponent(o),h._viewUt=h._nodeUt,h.content=h._scrollView.content,h._contentUt=h.content.getComponent(o),h.content){switch(this._registerEvent(),h._view=i,h._layout=h.content.getComponent(c),h._align=h._layout.type,h._resizeMode=h._layout.resizeMode,h._startAxis=h._layout.startAxis,h._topGap=h._layout.paddingTop,h._rightGap=h._layout.paddingRight,h._bottomGap=h._layout.paddingBottom,h._leftGap=h._layout.paddingLeft,h._columnGap=h._layout.spacingX,h._lineGap=h._layout.spacingY,h._colLineNum,h._verticalDir=h._layout.verticalDirection,h._horizontalDir=h._layout.horizontalDirection,h.setTemplateItem(t.content.children[0]),h._slideMode==T.ADHERING&&(h._scrollView.inertia=!1,h._scrollView._onMouseWheel=function(){}),h._lastDisplayData=[],h.displayData=[],h._forceUpdate=!1,h._updateCounter=0,h._updateDone=!0,h.cyclic&&(h._scrollView._startBounceBackIfNeeded=function(){return!1}),h._align){case c.Type.HORIZONTAL:switch(h._horizontalDir){case c.HorizontalDirection.LEFT_TO_RIGHT:h._alignCalcType=1;break;case c.HorizontalDirection.RIGHT_TO_LEFT:h._alignCalcType=2}break;case c.Type.VERTICAL:switch(h._verticalDir){case c.VerticalDirection.TOP_TO_BOTTOM:h._alignCalcType=3;break;case c.VerticalDirection.BOTTOM_TO_TOP:h._alignCalcType=4}break;case c.Type.GRID:switch(h._startAxis){case c.AxisDirection.HORIZONTAL:switch(h._verticalDir){case c.VerticalDirection.TOP_TO_BOTTOM:h._alignCalcType=3;break;case c.VerticalDirection.BOTTOM_TO_TOP:h._alignCalcType=4}break;case c.AxisDirection.VERTICAL:switch(h._horizontalDir){case c.HorizontalDirection.LEFT_TO_RIGHT:h._alignCalcType=1;break;case c.HorizontalDirection.RIGHT_TO_LEFT:h._alignCalcType=2}}}h.content.removeAllChildren(),h._inited=!0}else printLogErr(h.node.name+"'s ScrollView unset content!")},e.setTemplateItem=function(t){if(t){var i=this;if(_.uiMirror,t.removeFromParent(),i._itemTmp=t,i._itemTmpUt=t.getComponent(o),i._resizeMode==c.ResizeMode.CHILDREN)i._itemSize=i._layout.cellSize;else{var e=t.getComponent(o);i._itemSize=new r(e.width,e.height)}switch(i.selectedMode==f.MULT&&(i.multSelected=[]),i._align){case c.Type.HORIZONTAL:i._colLineNum=1,i._sizeType=!1;break;case c.Type.VERTICAL:i._colLineNum=1,i._sizeType=!0;break;case c.Type.GRID:switch(i._startAxis){case c.AxisDirection.HORIZONTAL:var s=i._contentUt.width-i._leftGap-i._rightGap;i._colLineNum=Math.floor((s+i._columnGap)/(i._itemSize.width+i._columnGap)),i._sizeType=!0;break;case c.AxisDirection.VERTICAL:var h=i._contentUt.height-i._topGap-i._bottomGap;i._colLineNum=Math.floor((h+i._lineGap)/(i._itemSize.height+i._lineGap)),i._sizeType=!1}}}},e.setTemplateNodeSize=function(t){this._itemTmpUt.setContentSize(t),this._itemSize=t},e.checkInited=function(t){return void 0===t&&(t=!0),!!this._inited||(t&&printLogErr("List initialization not completed!"),!1)},e._resizeContent=function(){var t,i=this;switch(i._align){case c.Type.HORIZONTAL:if(i._customSize){var e=i._getFixedSize(null);t=i._leftGap+e.val+i._itemSize.width*(i._numItems-e.count)+i._columnGap*(i._numItems-1)+i._rightGap}else t=i._leftGap+i._itemSize.width*i._numItems+i._columnGap*(i._numItems-1)+i._rightGap;break;case c.Type.VERTICAL:if(i._customSize){var s=i._getFixedSize(null);t=i._topGap+s.val+i._itemSize.height*(i._numItems-s.count)+i._lineGap*(i._numItems-1)+i._bottomGap}else t=i._topGap+i._itemSize.height*i._numItems+i._lineGap*(i._numItems-1)+i._bottomGap;break;case c.Type.GRID:switch(i.lackCenter&&(i.lackCenter=!1),i._startAxis){case c.AxisDirection.HORIZONTAL:var o=Math.ceil(i._numItems/i._colLineNum);t=i._topGap+i._itemSize.height*o+i._lineGap*(o-1)+i._bottomGap;break;case c.AxisDirection.VERTICAL:var h=Math.ceil(i._numItems/i._colLineNum);t=i._leftGap+i._itemSize.width*h+i._columnGap*(h-1)+i._rightGap}}var n=i.content.getComponent(c);if(n&&(n.enabled=!1),i._allItemSize=t,i._allItemSizeNoEdge=i._allItemSize-(i._sizeType?i._topGap+i._bottomGap:i._leftGap+i._rightGap),i.cyclic){var a=i._sizeType?i._viewUt.height:i._viewUt.width;i._cyclicPos1=0,a-=i._cyclicPos1,i._cyclicNum=Math.ceil(a/i._allItemSizeNoEdge)+1;var l=i._sizeType?i._lineGap:i._columnGap;i._cyclicPos2=i._cyclicPos1+i._allItemSizeNoEdge+l,i._cyclicAllItemSize=i._allItemSize+i._allItemSizeNoEdge*(i._cyclicNum-1)+l*(i._cyclicNum-1)}i._lack=!i.cyclic&&i._allItemSize<(i._sizeType?i._viewUt.height:i._viewUt.width);var _=i._lack&&i.lackCenter||!i.lackSlide?.1:0,r=i._lack?(i._sizeType?i._viewUt.height:i._viewUt.width)-_:i.cyclic?i._cyclicAllItemSize:i._allItemSize;r<0&&(r=0),i._sizeType?i._contentUt.height=r:i._contentUt.width=r},e._onScrolling=function(t){if(void 0===t&&(t=null),null==this.frameCount&&(this.frameCount=this._updateRate),!this._forceUpdate&&t&&"scroll-ended"!=t.type&&this.frameCount>0)this.frameCount--;else{if(this.frameCount=this._updateRate,this.cyclic){var i=this.content.getPosition(),e=this._sizeType?i.y:i.x,s=this._allItemSizeNoEdge+(this._sizeType?this._lineGap:this._columnGap),o=this._sizeType?new d(0,s,0):new d(s,0,0),h=this.content.getPosition();switch(this._alignCalcType){case 1:e>-this._cyclicPos1?(h.set(-this._cyclicPos2,h.y,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.subtract(o))):e<-this._cyclicPos2&&(h.set(-this._cyclicPos1,h.y,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.add(o)));break;case 2:e<this._cyclicPos1?(h.set(this._cyclicPos2,h.y,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.add(o))):e>this._cyclicPos2&&(h.set(this._cyclicPos1,h.y,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.subtract(o)));break;case 3:e<this._cyclicPos1?(h.set(h.x,this._cyclicPos2,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.add(o))):e>this._cyclicPos2&&(h.set(h.x,this._cyclicPos1,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.subtract(o)));break;case 4:e>-this._cyclicPos1?(h.set(h.x,-this._cyclicPos2,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.subtract(o))):e<-this._cyclicPos2&&(h.set(h.x,-this._cyclicPos1,h.z),this.content.setPosition(h),this._scrollView.isAutoScrolling()&&(this._scrollView._autoScrollStartPosition=this._scrollView._autoScrollStartPosition.add(o)))}}if(this._calcViewPos(),this.virtual){var n,a,l,_,r;this._sizeType?(n=this.viewTop,l=this.viewBottom):(a=this.viewRight,_=this.viewLeft),this.displayData=[];var u=0,m=this._numItems-1;if(this._customSize){for(var p=!1,v=0,T=m,f=Math.floor(T/2),I={};!p;){switch(r=this._calcItemPos(f),I[f]=r,this._align){case c.Type.HORIZONTAL:r.right>=_&&r.left<=a?p=!0:r.right<_?v=f+1:r.left>a&&(T=f-1),f=Math.floor((v+T)/2);break;case c.Type.VERTICAL:r.bottom<=n&&r.top>=l?p=!0:r.bottom>n?v=f+1:r.top<l&&(T=f-1),f=Math.floor((v+T)/2);break;case c.Type.GRID:switch(this._startAxis){case c.AxisDirection.HORIZONTAL:r.bottom<=n&&r.top>=l?p=!0:r.bottom>n?v=f+1:r.top<l&&(T=f-1),f=Math.floor((v+T)/2);break;case c.AxisDirection.VERTICAL:r.right>=_&&r.left<=a?p=!0:r.right<_?v=f+1:r.left>a&&(T=f-1),f=Math.floor((v+T)/2)}}(v==T||v>T)&&(p=!0)}for(var g=[{min:f=Math.max(f,0),max:0},{min:f+1,max:m}],y=0;y<=g.length-1;y++){var S=g[y].min,w=g[y].max;if(p=!1,u=S,1==y&&S>w)break;for(;!p;){switch((r=I[u])||(r=this._calcItemPos(u)),this._align){case c.Type.HORIZONTAL:r.right>=_&&r.left<=a?this.displayData.push(r):p=!0;break;case c.Type.VERTICAL:r.bottom<=n&&r.top>=l?this.displayData.push(r):p=!0;break;case c.Type.GRID:switch(this._startAxis){case c.AxisDirection.HORIZONTAL:r.bottom<=n&&r.top>=l?this.displayData.push(r):p=!0;break;case c.AxisDirection.VERTICAL:r.right>=_&&r.left<=a?this.displayData.push(r):p=!0}}S>w?(u-=1)<0&&(p=!0):(S==w||(u+=1)>w)&&(p=!0),p&&0==y&&this.displayData.length>0&&this.displayData.reverse()}}}else{var z=this._itemSize.width+this._columnGap,D=this._itemSize.height+this._lineGap;switch(this._alignCalcType){case 1:u=(_-this._leftGap)/z,m=(a-this._leftGap)/z;break;case 2:u=(-a-this._rightGap)/z,m=(-_-this._rightGap)/z;break;case 3:u=(-n-this._topGap)/D,m=(-l-this._topGap)/D;break;case 4:u=(l-this._bottomGap)/D,m=(n-this._bottomGap)/D}for(u=Math.floor(u)*this._colLineNum,m=Math.ceil(m)*this._colLineNum,u<0&&(u=0),--m>=this._numItems&&(m=this._numItems-1);u<=m;u++)this.displayData.push(this._calcItemPos(u))}if(this._delRedundantItem(),this.displayData.length<=0||!this._numItems)this._lastDisplayData=[];else{this.firstListId=this.displayData[0].id,this.displayItemNum=this.displayData.length;var L=this._lastDisplayData.length,G=this.displayItemNum!=L;if(G&&(G=this.firstListId!=this._lastDisplayData[0]||this.displayData[this.displayItemNum-1].id!=this._lastDisplayData[L-1]),this._forceUpdate||G)if(this.frameRenderTime>0)this._numItems>0?(this._updateDone?this._updateCounter=0:this._doneAfterUpdate=!0,this._updateDone=!1):(this._updateCounter=0,this._updateDone=!0);else{this._lastDisplayData=[];for(var E=0;E<this.displayItemNum;E++)this._createOrUpdateItem(this.displayData[E]);this._forceUpdate=!1}this._calcNearestItem(),this._inBottomFunc&&this.getIsShowBottomItem()&&this._inBottomFunc()}}}},e.setCustomItemsSize=function(t,i,e){var s,o=this;void 0===e&&(e=!1),this._customSize=null!=(s=this._customSize)?s:{},e&&(this._customSize={}),t.forEach((function(t,e){o._customSize[e]=i(e)}))},e.setCustomItemSize=function(t,i){var e;this._customSize=null!=(e=this._customSize)?e:{},this._customSize[t]=i},e.clearCustomSize=function(){this._customSize={}},e._calcViewPos=function(){var t=this.content.getPosition();switch(this._alignCalcType){case 1:this.elasticLeft=t.x>0?t.x:0,this.viewLeft=(t.x<0?-t.x:0)-this.elasticLeft,this.viewRight=this.viewLeft+this._viewUt.width,this.elasticRight=this.viewRight>this._contentUt.width?Math.abs(this.viewRight-this._contentUt.width):0,this.viewRight+=this.elasticRight;break;case 2:this.elasticRight=t.x<0?-t.x:0,this.viewRight=(t.x>0?-t.x:0)+this.elasticRight,this.viewLeft=this.viewRight-this._viewUt.width,this.elasticLeft=this.viewLeft<-this._contentUt.width?Math.abs(this.viewLeft+this._contentUt.width):0,this.viewLeft-=this.elasticLeft;break;case 3:this.elasticTop=t.y<0?Math.abs(t.y):0,this.viewTop=(t.y>0?-t.y:0)+this.elasticTop,this.viewBottom=this.viewTop-this._viewUt.height,this.elasticBottom=this.viewBottom<-this._contentUt.height?Math.abs(this.viewBottom+this._contentUt.height):0,this.viewBottom+=this.elasticBottom;break;case 4:this.elasticBottom=t.y>0?Math.abs(t.y):0,this.viewBottom=(t.y<0?-t.y:0)-this.elasticBottom,this.viewTop=this.viewBottom+this._viewUt.height,this.elasticTop=this.viewTop>this._contentUt.height?Math.abs(this.viewTop-this._contentUt.height):0,this.viewTop-=this.elasticTop}},e._calcItemPos=function(t){var i,e,s,o,h,n,a,l;switch(this._align){case c.Type.HORIZONTAL:switch(this._horizontalDir){case c.HorizontalDirection.LEFT_TO_RIGHT:if(this._customSize){var _=this._getFixedSize(t);h=this._leftGap+(this._itemSize.width+this._columnGap)*(t-_.count)+(_.val+this._columnGap*_.count);var r=this._customSize[t];i=r>0?r:this._itemSize.width}else h=this._leftGap+(this._itemSize.width+this._columnGap)*t,i=this._itemSize.width;if(this.lackCenter)h-=this._leftGap,h+=this._contentUt.width/2-this._allItemSizeNoEdge/2;return{id:t,left:h,right:n=h+i,x:h+this._itemTmpUt.anchorX*i,y:this._itemTmp.position.y};case c.HorizontalDirection.RIGHT_TO_LEFT:if(this._customSize){var d=this._getFixedSize(t);n=-this._rightGap-(this._itemSize.width+this._columnGap)*(t-d.count)-(d.val+this._columnGap*d.count);var u=this._customSize[t];i=u>0?u:this._itemSize.width}else n=-this._rightGap-(this._itemSize.width+this._columnGap)*t,i=this._itemSize.width;if(this.lackCenter)n+=this._rightGap,n-=this._contentUt.width/2-this._allItemSizeNoEdge/2;return{id:t,right:n,left:h=n-i,x:h+this._itemTmpUt.anchorX*i,y:this._itemTmp.position.y}}break;case c.Type.VERTICAL:switch(this._verticalDir){case c.VerticalDirection.TOP_TO_BOTTOM:if(this._customSize){var m=this._getFixedSize(t);s=-this._topGap-(this._itemSize.height+this._lineGap)*(t-m.count)-(m.val+this._lineGap*m.count);var p=this._customSize[t];e=p>0?p:this._itemSize.height}else s=-this._topGap-(this._itemSize.height+this._lineGap)*t,e=this._itemSize.height;if(this.lackCenter)s+=this._topGap,s-=this._contentUt.height/2-this._allItemSizeNoEdge/2;return{id:t,top:s,bottom:o=s-e,x:this._itemTmp.position.x,y:o+this._itemTmpUt.anchorY*e};case c.VerticalDirection.BOTTOM_TO_TOP:if(this._customSize){var v=this._getFixedSize(t);o=this._bottomGap+(this._itemSize.height+this._lineGap)*(t-v.count)+(v.val+this._lineGap*v.count);var T=this._customSize[t];e=T>0?T:this._itemSize.height}else o=this._bottomGap+(this._itemSize.height+this._lineGap)*t,e=this._itemSize.height;if(this.lackCenter)o-=this._bottomGap,o+=this._contentUt.height/2-this._allItemSizeNoEdge/2;return{id:t,top:s=o+e,bottom:o,x:this._itemTmp.position.x,y:o+this._itemTmpUt.anchorY*e}}case c.Type.GRID:var f=Math.floor(t/this._colLineNum);switch(this._startAxis){case c.AxisDirection.HORIZONTAL:switch(this._verticalDir){case c.VerticalDirection.TOP_TO_BOTTOM:l=(o=(s=-this._topGap-(this._itemSize.height+this._lineGap)*f)-this._itemSize.height)+this._itemTmpUt.anchorY*this._itemSize.height;break;case c.VerticalDirection.BOTTOM_TO_TOP:s=(o=this._bottomGap+(this._itemSize.height+this._lineGap)*f)+this._itemSize.height,l=o+this._itemTmpUt.anchorY*this._itemSize.height}switch(a=this._leftGap+t%this._colLineNum*(this._itemSize.width+this._columnGap),this._horizontalDir){case c.HorizontalDirection.LEFT_TO_RIGHT:a+=this._itemTmpUt.anchorX*this._itemSize.width,a-=this._contentUt.anchorX*this._contentUt.width;break;case c.HorizontalDirection.RIGHT_TO_LEFT:a+=(1-this._itemTmpUt.anchorX)*this._itemSize.width,a-=(1-this._contentUt.anchorX)*this._contentUt.width,a*=-1}return{id:t,top:s,bottom:o,x:a,y:l};case c.AxisDirection.VERTICAL:switch(this._horizontalDir){case c.HorizontalDirection.LEFT_TO_RIGHT:n=(h=this._leftGap+(this._itemSize.width+this._columnGap)*f)+this._itemSize.width,a=h+this._itemTmpUt.anchorX*this._itemSize.width,a-=this._contentUt.anchorX*this._contentUt.width;break;case c.HorizontalDirection.RIGHT_TO_LEFT:a=(h=(n=-this._rightGap-(this._itemSize.width+this._columnGap)*f)-this._itemSize.width)+this._itemTmpUt.anchorX*this._itemSize.width,a+=(1-this._contentUt.anchorX)*this._contentUt.width}switch(l=-this._topGap-t%this._colLineNum*(this._itemSize.height+this._lineGap),this._verticalDir){case c.VerticalDirection.TOP_TO_BOTTOM:l-=(1-this._itemTmpUt.anchorY)*this._itemSize.height,l+=(1-this._contentUt.anchorY)*this._contentUt.height;break;case c.VerticalDirection.BOTTOM_TO_TOP:l-=this._itemTmpUt.anchorY*this._itemSize.height,l+=this._contentUt.anchorY*this._contentUt.height,l*=-1}return{id:t,left:h,right:n,x:a,y:l}}}},e._calcExistItemPos=function(t){var i=this.getItemByListId(t);if(!i)return null;var e=i.getComponent(o),s=i.getPosition(),h={id:t,x:s.x,y:s.y};return this._sizeType?(h.top=s.y+e.height*(1-e.anchorY),h.bottom=s.y-e.height*e.anchorY):(h.left=s.x-e.width*e.anchorX,h.right=s.x+e.width*(1-e.anchorX)),h},e.getItemPos=function(t){return this.virtual||this.frameRenderTime?this._calcItemPos(t):this._calcExistItemPos(t)},e._getFixedSize=function(t){if(!this._customSize)return null;null==t&&(t=this._numItems);var i=0,e=0;for(var s in this._customSize)parseInt(s)<t&&(i+=this._customSize[s],e++);return{val:i,count:e}},e._onScrollEnded=function(){var t=this;null!=t.scrollToListId&&(t.scrollToListId=null),t._onScrolling(),t._slideMode!=T.ADHERING||t.adhering||t.adhere()},e._onTouchStart=function(t,i){if(!this.outScroll||Math.abs(t.getDelta().x)>Math.abs(t.getDelta.y)){if(!this._scrollView._hasNestedViewGroup(t,i)){if(!(t.eventPhase===u.AT_TARGET&&t.target===this.node)){for(var e=t.target;null==e._listId&&e.parent;)e=e.parent;this._scrollItem=null!=e._listId?e:t.target}this._stopPropagationIfTargetIsMe(t)}}else this.outScroll._onTouchBegan(t,i)},e._onTouchMove=function(t,i){h(this.outScroll)&&(Math.abs(t.getDelta().x)>Math.abs(t.getDelta.y)?this._onScrolling(t):this.outScroll._onTouchMoved(t,i))},e._onTouchEnd=function(t,i){h(this.outScroll)&&this.outScroll._onTouchEnded(t,i)},e._onTouchUp=function(t){var i=this;i._scrollPos=null,i._slideMode==T.ADHERING&&(this.adhering&&(this._adheringBarrier=!0),i.adhere()),this._scrollItem=null},e._onTouchCancelled=function(t,i){if(this.outScroll)return this.scrollView.enabled=!0,void this.outScroll._onTouchCancelled(t,i);var e=this;e._scrollView._hasNestedViewGroup(t,i)||t.simulate||(e._scrollPos=null,e._slideMode==T.ADHERING&&(e.adhering&&(e._adheringBarrier=!0),e.adhere()),this._scrollItem=null,this._stopPropagationIfTargetIsMe(t))},e._stopPropagationIfTargetIsMe=function(t){t.eventPhase===u.AT_TARGET&&t.target===this.node&&(t.propagationStopped=!0)},e._onSizeChanged=function(){this.checkInited(!1)&&(this._resizeContent(),this._onScrolling())},e._onItemAdaptive=function(t){var i=t.ut;if(!this._sizeType&&i.width!=this._itemSize.width||this._sizeType&&i.height!=this._itemSize.height){this._customSize||(this._customSize={});var e=this._sizeType?i.height:i.width;this._customSize[t.listId]!=e&&(this._customSize[t.listId]=e,this._resizeContent(),this.updateAll(),null!=this._scrollToListId&&(this._scrollPos=null,this.scrollView.unschedule(this._scrollToSo),this.scrollTo(this._scrollToListId,Math.max(0,this._scrollToEndTime-(new Date).getTime()/1e3))))}},e.adhere=function(){var t=this;if(t.checkInited()&&!(t.elasticTop>0||t.elasticRight>0||t.elasticBottom>0||t.elasticLeft>0)){t.adhering=!0,t._calcNearestItem();var i=(t._sizeType?t._topGap:t._leftGap)/(t._sizeType?t._viewUt.height:t._viewUt.width);t.scrollTo(t.nearestListId,.7,i)}},e.update=function(){if(!(this.frameRenderTime<=0||this._updateDone)){var t=_.now(),i=0;if(this.virtual){for(var e=this.displayItemNum,s=this._updateCounter;s<e&&!(i>this.frameMaxNum)&&!(_.now()-t>this.frameRenderTime);s++){var o=this.displayData[s];o&&this._createOrUpdateItem(o),this._updateCounter++,i++}this._updateCounter>=this.displayItemNum&&(this._doneAfterUpdate?(this._updateCounter=0,this._updateDone=!1,this._doneAfterUpdate=!1):(this._updateDone=!0,this._delRedundantItem(),this._forceUpdate=!1,this._calcNearestItem()))}else if(this._updateCounter<this._numItems)for(var h=this._numItems,n=this._updateCounter;n<h&&!(i>this.frameMaxNum)&&!(_.now()-t>this.frameRenderTime);n++)this._createOrUpdateItem2(n),this._updateCounter++,i++;else this._updateDone=!0,this._calcNearestItem()}},e._createOrUpdateItem=function(t){if(!(null==this._datas||this._datas.length<=0)){var i=this.getItemByListId(t.id);if(i){if(this._forceUpdate){var e;null==(e=i.node)||e.setPosition(new d(t.x,t.y,0)),this._resetItemSize(i);var s=t.id%this._actualNumItems;i._render(this._datas[s],s)}}else{if(!this._itemTmp)return void printLogErr("不存在模板item");var o=this._pool.alloc(),n=o.node;if(h(n)||(n=m(this._itemTmp),o.init(this,n,this._view)),n._listId=t.id,o.listId!=t.id)o.listId=t.id,o.ut.setContentSize(this._itemSize);n.name=String(t.id),n.setPosition(new d(t.x,t.y,0)),this._resetItemSize(o),this.content.addChild(n),this._items.push(o),n.setSiblingIndex(this._items.length-1),o.listId=t.id,o._registerEvent();var a=t.id%this._actualNumItems;o._render(this._datas[a],a)}this._resetItemSize(i),this._updateListItem(i),this._lastDisplayData.indexOf(t.id)<0&&this._lastDisplayData.push(t.id)}},e._createOrUpdateItem2=function(t){if(!(null==this._datas||this._datas.length<=0)){var i=this.getItemByListId(t);if(i)this._forceUpdate&&(i.listId=t,i._render(this._datas[t],t));else{var e=this._pool.alloc(),s=e.node;h(s)||(s=m(this._itemTmp),e.init(this,s,this._view)),s._listId=t,s.name=String(t),e.listId=t,this.content.addChild(s),this._items.push(e),e._render(this._datas[t],t)}this._updateListItem(i),this._lastDisplayData.indexOf(t)<0&&this._lastDisplayData.push(t)}},e._updateListItem=function(t){if(t&&this.selectedMode>f.NONE)switch(this.selectedMode){case f.SINGLE:t.selected=this.selectedId==t.listId;break;case f.MULT:t.selected=this.multSelected.indexOf(t.listId)>=0}},e._resetItemSize=function(t){},e.setMultSelected=function(t,i){var e=this;if(e.checkInited()){var s,o;if(Array.isArray(t)||(t=[t]),null==i)e.multSelected=t;else if(i)for(var h=t.length-1;h>=0;h--)s=t[h],(o=e.multSelected.indexOf(s))<0&&e.multSelected.push(s);else for(var n=t.length-1;n>=0;n--)s=t[n],(o=e.multSelected.indexOf(s))>=0&&e.multSelected.splice(o,1);e._forceUpdate=!0,e._onScrolling()}},e.getMultSelected=function(){return this.multSelected},e.hasMultSelected=function(t){return this.multSelected&&this.multSelected.indexOf(t)>=0},e.updateItem=function(t){if(this.checkInited()){Array.isArray(t)||(t=[t]);for(var i=0,e=t.length;i<e;i++){var s=t[i],o=this.getItemByListId(s),h=s%this._actualNumItems;null!=o&&o._render(this._datas[h],h)}}},e.updateAll=function(){this.checkInited()&&(this.datas=this._datas)},e.getItemByListId=function(t){if(this.content)for(var i=this._items.length-1;i>=0;i--){var e=this._items[i];if(e.listId==t)return e}},e._delRedundantItem=function(){var t;if(this.virtual){for(var i=this._items.length-1;i>=0;i--)if(t=this._items[i],!(this._scrollItem&&t.listId==this._scrollItem._listId||this.displayData.find((function(i){return i.id==t.listId})))){this._items.splice(i,1),this._pool.free(t);for(var e=this._lastDisplayData.length-1;e>=0;e--)if(this._lastDisplayData[e]==t.listId){this._lastDisplayData.splice(e,1);break}}}else for(var s=this._items.length-1;s>this._numItems-1;s--)t=this._items[s],this._items.splice(s,1),this._pool.free(t)},e.scrollTo=function(t,i,e){void 0===i&&(i=.5),void 0===e&&(e=null);var s=this;if(s.checkInited(!1)){null==i?i=.5:i<0&&(i=0),t<0?t=0:t>=s._numItems&&(t=s._numItems-1),!s.virtual&&s._layout&&s._layout.enabled&&s._layout.updateLayout();var o,h,n=s.getItemPos(t);if(!n)return p;switch(s._alignCalcType){case 1:o=n.left,o-=null!=e?s._viewUt.width*e:s._leftGap,n=new d(o,0,0);break;case 2:o=n.right-s._viewUt.width,o+=null!=e?s._viewUt.width*e:s._rightGap,n=new d(o+s._contentUt.width,0,0);break;case 3:h=n.top,h+=null!=e?s._viewUt.height*e:s._topGap,n=new d(0,-h,0);break;case 4:h=n.bottom+s._viewUt.height,h-=null!=e?s._viewUt.height*e:s._bottomGap,n=new d(0,-h+s._contentUt.height,0)}s._scrollView.stopAutoScroll();var a=s.content.getPosition();a=Math.abs(s._sizeType?a.y:a.x);var l=s._sizeType?n.y:n.x;Math.abs((null!=s._scrollPos?s._scrollPos:a)-l)>.5&&(s._scrollView.scrollToOffset(n,i),s._scrollToListId=t,s._scrollToEndTime=(new Date).getTime()/1e3+i,s._scrollToSo=s.scrollView.scheduleOnce((function(){s._adheringBarrier||(s.adhering=s._adheringBarrier=!1),s._scrollPos=s._scrollToListId=s._scrollToEndTime=s._scrollToSo=null}),i+.1),i<=0&&s._onScrolling())}},e._calcNearestItem=function(){var t,i,e,s,o,h,n=this;n.nearestListId=null,n._calcViewPos(),e=n.viewTop,s=n.viewRight,o=n.viewBottom,h=n.viewLeft;for(var a=!1,l=0;l<n._items.length&&!a;l+=n._colLineNum)if(t=n.displayData[l])switch(i=n._sizeType?(t.top+t.bottom)/2:i=(t.left+t.right)/2,n._alignCalcType){case 1:t.right>=h&&(n.nearestListId=t.id,h>i&&(n.nearestListId+=n._colLineNum),a=!0);break;case 2:t.left<=s&&(n.nearestListId=t.id,s<i&&(n.nearestListId+=n._colLineNum),a=!0);break;case 3:t.bottom<=e&&(n.nearestListId=t.id,e<i&&(n.nearestListId+=n._colLineNum),a=!0);break;case 4:t.top>=o&&(n.nearestListId=t.id,o>i&&(n.nearestListId+=n._colLineNum),a=!0)}if((t=n.displayData[n.displayItemNum-1])&&t.id==n._numItems-1)switch(i=n._sizeType?(t.top+t.bottom)/2:i=(t.left+t.right)/2,n._alignCalcType){case 1:s>i&&(n.nearestListId=t.id);break;case 2:h<i&&(n.nearestListId=t.id);break;case 3:o<i&&(n.nearestListId=t.id);break;case 4:e>i&&(n.nearestListId=t.id)}},e.getIsShowBottomItem=function(t){if(this.displayData[this.displayItemNum-1]){var i=this.displayData[this.displayItemNum-1];if(this._datas&&i){var e=null!=t?t:this._datas.length-1;return i.id==e}}return!0},e.getDisplayRange=function(){if(this.displayData.length>0)return{top:this.displayData[0],bottom:this.displayData[this.displayData.length-1]}},i(t,[{key:"items",get:function(){return this._items}},{key:"slideMode",get:function(){return this._slideMode},set:function(t){this._slideMode=t,t!=T.NORMAL&&(this.cyclic=!1)}},{key:"updateRate",get:function(){return this._updateRate},set:function(t){t>=0&&t<=6&&(this._updateRate=t)}},{key:"touchEvent",set:function(t){this._touchEvent=t,t?this._registerEvent():this._unregisterEvent()}},{key:"datas",set:function(t){var i=this;if(i.checkInited(!1))if(null!=t)if(i._actualNumItems=i._numItems=t.length,i._forceUpdate=!0,i._datas=t,this.virtual)i._resizeContent(),i.cyclic&&(i._numItems=i._cyclicNum*i._numItems),i._onScrolling();else{i.cyclic&&(i._resizeContent(),i._numItems=i._cyclicNum*i._numItems);var e=i.content.getComponent(c);if(e&&(e.enabled=!0),i._delRedundantItem(),i.firstListId=0,i.frameRenderTime>0)i._updateDone=!1,i._updateCounter=0;else{for(var s=0;s<i._numItems;s++)i._createOrUpdateItem2(s);i.displayItemNum=i._numItems}}else this._datas=null}},{key:"selectedId",get:function(){return this._selectedId},set:function(t){var i,e=this;switch(e.selectedMode){case f.SINGLE:if(!e.repeatEventSingle&&t==e._selectedId)return;if(i=e.getItemByListId(t),e._selectedId>=0?e._lastSelectedId=e._selectedId:e._lastSelectedId=null,e._selectedId=t,i.selected=!0,e._lastSelectedId>=0&&e._lastSelectedId!=e._selectedId){var s=e.getItemByListId(e._lastSelectedId);s&&(s.selected=!1)}break;case f.MULT:if(!(i=e.getItemByListId(t)))return;e._selectedId>=0&&(e._lastSelectedId=e._selectedId),e._selectedId=t;var o=!i.selected;i.selected=o;var h=e.multSelected.indexOf(t);o&&h<0?e.multSelected.push(t):!o&&h>=0&&e.multSelected.splice(h,1)}}},{key:"scrollView",get:function(){return this._scrollView}},{key:"width",set:function(t){h(this._viewUt)&&(this._viewUt.width=t,this._nodeUt.width=t)}},{key:"height",set:function(t){h(this._viewUt)&&(this._viewUt.height=t,this._nodeUt.height=t)}},{key:"inBottomFunc",set:function(t){this._inBottomFunc=t}}]),t}());e._RF.pop()}}}));

