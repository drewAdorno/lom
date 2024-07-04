System.register("chunks:///_virtual/UIUnitModelObj.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AssetPool.ts","./BaseAsset.ts","./NodeUtil.ts","./ConfigGlobal.ts","./FixMath.ts","./SlotEquip.ts","./SpineSkeleton.ts","./UIEffectAsset.ts","./UIMountAsset.ts"],(function(t){"use strict";var i,n,o,e,s,a,l,h,u,_,c,f,r,d,m,p,g,k,y;return{setters:[function(t){i=t.inheritsLoose,n=t.createClass,o=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy,s=t.isValid,a=t.Color,l=t.sp,h=t.Layers},function(t){u=t.V2},function(t){_=t.AssetPoolState},function(t){c=t.BaseAsset},function(t){f=t.default},function(t){r=t.ConfigGlobal},function(t){d=t.FixMath},function(t){m=t.SlotEquip},function(t){p=t.SpineSkeleton,g=t.AnimationType},function(t){k=t.UIEffectAsset},function(t){y=t.UIMountAsset}],execute:function(){e._RF.push({},"15015eg0n5AQqa/Iy0VR6PY","UIUnitModelObj",void 0);var v,M={1:"lv",2:"lan",3:"zi",4:"huang"};!function(t){t[t.Not=0]="Not",t[t.Scale=1]="Scale",t[t.Ani=128]="Ani",t[t.SetMount=512]="SetMount",t[t.Depth=1024]="Depth",t[t.AniColor=2048]="AniColor"}(v||(v={}));t("UIUnitModelObj",function(t){function e(){var i;return(i=t.call(this)||this).id=0,i._animator=void 0,i._modelId=void 0,i._skin={color:0,weapon:0,ornaments:0,face:0,fate:0,wing:0},i.skinChange=!1,i._maxTime=-1,i._ani="idle",i._mount=0,i._depth=void 0,i.configModel=void 0,i._model=void 0,i._bottom=void 0,i._top=void 0,i._mountTop=void 0,i._mountBottom=void 0,i._slotEquip=void 0,i._fateEffect=void 0,i.animationColor=new a(255,255,255,255),i.isUI=!0,i}i(e,t),e.getModelId=function(t,i,n){void 0===n&&(n=1);var e=configJobs.getDataByKey(t);if(e||(e=configJobs.getDataByKey(1001),printLogErr("不存在的job_id = "+t)),i>0){n=n||1;for(var s,a=o(e.fashion);!(s=a()).done;){var l=s.value;if(l[0]==i)return l[1][n-1]}}return configUnit.getDataByKey(e.model).model},e.alloc=function(t,i,n,o,e){void 0===n&&(n=1),void 0===e&&(e=-1);var s=this.getModelId(t,i,n);return this.allocModel(s,o,e)},e.allocModel=function(t,i,n){void 0===n&&(n=-1);var o=configUnitModel.getDataByKey(t),e=uiUnitModelPool.alloc(o.path,o.maxNum,o.maxTime);return e._modelId=t,e.parent=i,e.layer=h.Enum.UI_2D,e.loadSync(),e.scale=.666,e._maxTime=n,e.aniName="idle",e.direction=1,e.position=u.ZERO,e.configModel=o,e},e.free=function(t){t.free()};var c=e.prototype;return c.onLoadComplete=function(){var t=this._node;this._model=f.findChild(t,"model");var i=this._model.getComponent(p);null==i&&(i=f.findChildComponent(this._model,"spine",p)),this._animator=i,i.animationType=g.UI,configUnitModel.getDataByKey(this._modelId).mountPos>0&&(this._bottom=f.findChild(t,"bottom"),this._top=f.findChild(t,"top")),i.__preload()},c.loadMount=function(){var t,i;if(null==(t=this._mountTop)||t.free(),null==(i=this._mountBottom)||i.free(),this._mountTop=null,this._mountBottom=null,this._mount>0){var n=configUnitModel.getDataByKey(this._modelId),o=configMount.getDataByKey(this._mount);if(!o)return;1!=o.type&&3!=o.type||(this._mountTop=y.alloc(this._mount,this._top,this._model,n.mountPos),this._mountTop.aniName="idle_1",this._mountTop.layer=this.layer),2!=o.type&&3!=o.type||(this._mountBottom=y.alloc(this._mount,this._bottom,null==this._mountTop?this._model:null,n.mountPos),this._mountBottom.aniName="idle_2")}},c.cacheReset=function(){t.prototype.cacheReset.call(this),this._maxTime=-1,this._depth=-1,this.skinChange=!1,this._skin.color=0,this._skin.weapon=0,this._skin.ornaments=0,this._skin.face=0,this._skin.fate=0;var i,n=this._animator;(s(n)&&(n.color=new a(255,255,255,255)),this.animationColor=new a(255,255,255,255),this.mount>0&&s(this._model)&&this._model.setPosition(0,0,0),this._mount=0,this._fateEffect&&this._fateEffect.free(),this._fateEffect=null,s(this.node))&&(this.loadMount(),null==(i=this._slotEquip)||i.unload())},c.mountAni=function(t){if(void 0===t&&(t=!1),0!=this._mount){if(t)return null!=this._mountTop&&(this._mountTop.aniName="run_1"),void(null!=this._mountBottom&&(this._mountBottom.aniName="run_2"));null!=this._mountTop&&(this._mountTop.aniName="idle_1"),null!=this._mountBottom&&(this._mountBottom.aniName="idle_2")}},c.onUpdate=function(i){if(t.prototype.onUpdate.call(this,i),-1!=this._maxTime){if(this._maxTime<=0)return void uiUnitModelPool.free(this);this._maxTime-=i}if(!(this.poolState>_.Useing)){var n=this._animator;if(s(n)&&n._skeleton&&this.skinChange){var o;this.skinChange=!1;var e=this._skin;if(r.hide_bowl_cut.includes(this._modelId))try{e.ornaments<=0?n.setSkin(e.color+""):(n._skeleton.setSkin(null),n._skeleton.setSlotsToSetupPose(),n.invalidAnimationCache())}catch(t){}else try{if(null!=this.configModel.skin&&""!=this.configModel.skin){var a=new l.spine.Skin("all");a.addSkin(n._skeleton.data.findSkin(e.color+"")),a.addSkin(n._skeleton.data.findSkin(this.configModel.skin)),n._skeleton.setSkin(a),n._skeleton.setSlotsToSetupPose(),n.invalidAnimationCache()}else n.setSkin(e.color+"")}catch(t){printLogErr("缺少皮肤！！！",this.url)}var h=configUnitModel.getDataByKey(this._modelId),u=null!=(o=this._slotEquip)?o:this.node.getComponent(m);if(u.init(n,h.mountPos,1==h.change_times),u.loadEquip([e.weapon,e.ornaments,e.face,e.wing],this.layer),e.fate>0){var c=configFate.getDataByKey(e.fate),f=configEffect.getDataByKey(c.effect);if(null==this._fateEffect||f.path!=this._fateEffect.url){this._fateEffect&&this._fateEffect.free(),this._fateEffect=null;var d=k.alloc(f.path,this._node,f.max_time);d.position=this._pos,d.depth=0,c.quality<=4&&(d.aniName=M[c.quality]),this._fateEffect=d}}this._slotEquip=u}}},c.onApply=function(t){if(this._changeValue&v.Depth&&this._node.getSiblingIndex()!=this._depth&&this._node.setSiblingIndex(this._depth||0),this._changeValue&v.SetMount&&this.loadMount(),this._changeValue&v.Ani&&""!=this._ani){var i=this._mount>0&&"run"==this._ani?"idle":this._ani;this.mountAni("run"==this._ani),this._animator.setAnimation(0,i,!0)}this._changeValue&v.AniColor&&(this._animator.color=this.animationColor),this._fateEffect&&(this._fateEffect.position=this._pos)},c.GetAnimator=function(){return this._animator},c.setSkin=function(t,i,n,o,e,s,a){void 0===e&&(e=0),void 0===s&&(s=0),void 0===a&&(a=0),e>0&&(i=e),this._skin.color==t&&this._skin.weapon==i&&this._skin.ornaments==n&&this._skin.face==o&&this._skin.wing==a||(this._skin.color=t,this._skin.weapon=i,this._skin.ornaments=n,this._skin.face=o,this._skin.fate=s,this._skin.wing=a,this.skinChange=!0)},n(e,[{key:"skin",get:function(){return this._skin}},{key:"aniName",set:function(t){this._ani!=t&&(this._ani=t,this._changeValue=this._changeValue|v.Ani)}},{key:"aniColor",set:function(t){this.animationColor!=t&&(this.animationColor=t,this._changeValue=this._changeValue|v.AniColor)}},{key:"direction",get:function(){return this._dir},set:function(t){this.dir=t}},{key:"mount",get:function(){return this._mount},set:function(t){this._mount!=t&&(this._mount=t,this._changeValue=this._changeValue|v.SetMount)}},{key:"modelHeight",get:function(){var t=this.configModel.bp_top[1];this._mount>0&&(t+=configMount.getDataByKey(this._mount).binds[0][1]);return t*this._scale}},{key:"scale",get:function(){return this._scale},set:function(t){t=d.round(.66*t),this._scale!=t&&(this._scale=t,this._changeValue=this._changeValue|v.Scale)}},{key:"depth",get:function(){return this._depth},set:function(t){this._depth!=t&&(this._depth=t,this._changeValue=this._changeValue|v.Depth)}}]),e}(c));e._RF.pop()}}}));
