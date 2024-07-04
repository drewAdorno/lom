System.register("chunks:///_virtual/WorldBossRewardView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./StringUtil.ts","./ChapterDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,n,o,i,r,s,a,d;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){o=t.cclegacy,i=t.Button,r=t.Label},null,function(t){s=t.default},function(t){a=t.ChapterDataCache},function(t){d=t.BaseView}],execute:function(){o._RF.push({},"d86beFndCtIG76JZ2UKVjpL","WorldBossRewardView",void 0);t("default",function(t){function o(){var e;return(e=t.call(this)||this).data=void 0,e.name="WorldBossRewardView",e.url="ui/module/dungeon/WorldBossRewardView",e.poolTime=3e3,e}e(o,t);var d=o.prototype;return d.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()}))},d.onAfterOpen=function(){this.data=this.openArgs[0],this.refreshRewardTips()},d.registerUpdateHandler=function(){},d.refreshRewardTips=function(){for(var t,e=this.findChild("root/Node/txtDesc2"),o=this.findChild("root/Node/node1/num"),i=this.findChild("root/Node/node1/num1"),d=this.findChild("root/Node/node2/num"),u=this.findChild("root/Node/node2/num1"),c=0,l=0,h=n(this.data.ext);!(t=h()).done;){var f=t.value,p=f.k,m=f.v;2==p?(c=m,o.getComponent(r).string=s.GetNumString(m),i.getComponent(r).string=s.GetNumString(m)):4==p&&(l=m,d.getComponent(r).string=""+m,u.getComponent(r).string=""+m)}var C=IS(a).worldBossInfo;o.active=c>=C.my_hurt,i.active=c<C.my_hurt,d.active=l<C.my_rank,u.active=l>=C.my_rank,e.active=!1,(c>=C.my_hurt||l<C.my_rank)&&(e.active=!0)},d.onBeforeClose=function(){},d.onDestroy=function(){},o}(d));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/script', 'chunks:///_virtual/script'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});