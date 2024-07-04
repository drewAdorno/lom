System.register("chunks:///_virtual/ShipModel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnumDefine.ts","./V2.ts","./AssetPool.ts","./BaseAsset.ts","./NodeUtil.ts","./SlotEquip.ts","./SpineSkeleton.ts"],(function(t){"use strict";var o,e,n,i,l,a,s,u,c,d;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t.isValid},function(t){i=t.BattleFlag},function(t){l=t.V2},function(t){a=t.AssetPoolState},function(t){s=t.BaseAsset},function(t){u=t.default},function(t){c=t.SlotEquip},function(t){d=t.SpineSkeleton}],execute:function(){var p;e._RF.push({},"e0c77pMtK5GAozsuC9tIA1H","ShipModel",void 0),function(t){t[t.Not=0]="Not",t[t.All=16777215]="All"}(p||(p={}));new l,t("ShipModel",function(t){function e(){for(var o,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(o=t.call.apply(t,[this].concat(n))||this)._animator=void 0,o.configModel=void 0,o.data=void 0,o._model=void 0,o._slotEquip=void 0,o}o(e,t),e.alloc=function(t){var o=configUnitModel.getDataByKey(t.config.model_ID),e=shipModelPool.alloc(o.path,o.maxNum,o.maxTime);return e.parent=battleMain.shipRoot,e.configModel=o,e.data=t,e.visible=!0,battleMain.battleFlag&i.OPEN_GRAPHIC&&e.loadSync(),e},e.free=function(t){t.free()};var l=e.prototype;return l.onLoadComplete=function(){var t=this._node;this._model=u.findChild(t,"model");var o=this._model.getComponent(d);null==o&&(o=u.findChildComponent(this._model,"spine",d)),this._animator=o,o.__preload()},l.onUpdate=function(o){if(t.prototype.onUpdate.call(this,o),!(this.poolState>a.Useing)){var e=this._animator;if(n(e)&&e._skeleton&&this.data.skinChange){var i;e._skeleton.setSlotsToSetupPose(),e.invalidAnimationCache();var l=this.configModel,s=null!=(i=this._slotEquip)?i:this.node.getComponent(c);s.init(e,l.mountPos),s.loadEquip([this.data.ram]),this._slotEquip=s,this.data.skinChange=!1}}},l.onApply=function(t){},l.cacheReset=function(){var o;(t.prototype.cacheReset.call(this),n(this.node))&&(null==(o=this._slotEquip)||o.unload())},e}(s));e._RF.pop()}}}));

