System.register("chunks:///_virtual/Tween.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EaseMethod.ts"],(function(t){"use strict";var i,e,s,r,n;return{setters:[function(t){i=t.createClass},function(t){e=t.cclegacy,s=t.math},function(t){r=t.easingFn,n=t.EasingMethod}],execute:function(){var a;e._RF.push({},"008b265prlNpL+bEh5/cp+9","Tween",void 0),function(t){t[t.Play=0]="Play",t[t.Stop=1]="Stop",t[t.Delay=2]="Delay",t[t.CBDelay=3]="CBDelay"}(a||(a={}));var h=t("Tween",function(){function t(t,i){this._from=0,this._to=1,this._duration=void 0,this._currenTime=void 0,this._ease=n.LINEAR,this._state=a.Stop,this._onUpdate=void 0,this._callback=void 0,this._loop=1,this._currenLoop=1,this._delay=void 0,this._cbDelay=void 0,this._currenDelay=void 0,this._duration=t,this._onUpdate=i}var e=t.prototype;return e.update=function(t){var i=this._state;if(i!=a.Stop){if(i==a.Delay){if(!(this._currenDelay>=this._delay))return void(this._currenDelay+=t);this._state=a.Play}if(i==a.CBDelay)return this._currenDelay>=this._cbDelay&&(this._state=a.Stop,this._callback&&this._callback(this)),void(this._currenDelay+=t);var e=this._duration;this._currenTime=Math.min(this._currenTime,e);var n=this._currenTime/e;if(n=r(this._ease)(n),this._onUpdate(this,s.lerp(this._from,this._to,n)),this._currenTime>=e)return-1==this._loop||this._currenLoop<this._loop?(this._currenTime=0,void this._currenLoop++):void(this._cbDelay>0?(this._state=a.CBDelay,this._currenDelay=0):(this._state=a.Stop,this._callback&&this._callback(this)));this._currenTime+=t}},e.stop=function(){return this._state=a.Stop,this._currenTime=this._currenDelay=0,this._currenLoop=1,this},e.start=function(){return this._state=this._delay>0?a.Delay:a.Play,this._currenTime=this._currenDelay=0,this._currenLoop=1,this},e.restart=function(){return this.start()},e.loop=function(t){return this._loop=t,this},e.changeValues=function(t,i,e){return this._from=t,this._to=i,this._duration=e,this},e.easing=function(t){return this._ease=t,this},e.call=function(t,i){return void 0===i&&(i=0),this._callback=t,this._cbDelay=i,this},e.delay=function(t){return this._delay=t,this},i(t,[{key:"state",get:function(){return this._state}}]),t}());t("TweenGroup",function(){function t(t){this._name=void 0,this._list=[],this._name=t}var i=t.prototype;return i.to=function(t,i,e,s){void 0===t&&(t=0),void 0===i&&(i=1),void 0===e&&(e=1);var r=new h(e,s);return r.changeValues(t,i,e),this._list.push(r),r},i.stop=function(t){t.stop()},i.update=function(t){if(0!=this._list.length)for(var i=0;i<this._list.length;i++){var e=this._list[i];e.update(t),e.state!=a.Stop||(this._list.splice(i,1),i--)}},i.clear=function(){this._list.length=0},t}());e._RF.pop()}}}));
