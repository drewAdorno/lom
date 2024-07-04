System.register("chunks:///_virtual/BattleChapterWorldBossPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MetaAttrib.ts","./EventDefine.ts","./index3.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./FixMath.ts","./ChapterDataCache.ts","./ChapterDefine.ts","./DungeonControl.ts","./MessageView.ts","./RoleDataCache.ts","./EaseMethod.ts"],(function(t){"use strict";var e,i,n,s,o,a,h,r,d,l,p,u,c,f,m,v,C,g,x,b,T,_,B,S;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.ProgressBar,s=t.Label,o=t.Sprite,a=t.UITransform,h=t.Button,r=t.math,d=t.ScrollView,l=t.Vec3},function(t){p=t.AttribDefine},function(t){u=t.EventDefine},null,function(t){c=t.ListItem},function(t){f=t.default},function(t){m=t.default},function(t){v=t.default},function(t){C=t.FixMath},function(t){g=t.ChapterDataCache},function(t){x=t.ChapterEventDefine},function(t){b=t.default},function(t){T=t.default,_=t.TYPE_YES},function(t){B=t.RoleDataCache},function(t){S=t.EasingMethod}],execute:function(){i._RF.push({},"72a21LpCqtJeo0d8EGAEb47","BattleChapterWorldBossPanel",void 0);t("BattleChapterWorldBossPanel",function(){function t(t,e){this.view=void 0,this.node=void 0,this.bottomY=-20,this.nodeTime=void 0,this.pbTime=void 0,this.txtTime=void 0,this.pbBossHP=void 0,this.txtBossHP=void 0,this.chapterTime=0,this._progress=1,this._curPress=1,this._utBar=void 0,this._barAni=!1,this._lastTime=0,this._speed=3,this.txtLevel=void 0,this.rankPanel=void 0,this.node=e,this.view=t,this.onInit()}var e=t.prototype;return e.reset=function(){configWorld_boss.getDataByKey(battleMain.data.chapterId);this.updateTime(),this.pbBossHP.progress=1,this._utBar.width=582},e.onInit=function(){var t=this;this.nodeTime=f.findChild(this.node,"time"),this.pbTime=f.findChildComponent(this.nodeTime,"pbTime",n),this.txtTime=f.findChildComponent(this.nodeTime,"txtTime",s);var e=f.findChildComponent(this.nodeTime,"Sprite",o);this.view.loadIcon(e,"battle","zxgq_ui_shijian"),this.pbBossHP=f.findChildComponent(this.node,"pbBossHP",n),this.txtBossHP=f.findChildComponent(this.node,"pbBossHP/txtBossHP",s),this._utBar=f.findChildComponent(this.node,"pbBossHP/imgBar",a),this.txtLevel=f.findChildComponent(this.node,"boss/txtLevel",s);var i=f.findChild(this.node,"btnExit");this.view.addComponentCallbackListener(i,h.EventType.CLICK,(function(){T.showBoxTip({tip:GetLanguage(104145),ensure:GetLanguage(200129),cancel:GetLanguage(200054),func:function(e){e==_&&t.exitBattle()}})})),this.rankPanel=new P(this,f.findChild(this.node,"rankView"))},e.initBattleEvent=function(){var t=this;battleEvent.on(u.BossHpChange,this.onBossHpChange,this),battleEvent.on(u.UnitHpNumChange,this.onUnitHpNumChange,this),battleEvent.on(u.WorldBossRank,(function(e){t.rankPanel.reset(e)})),this.onUnitHpNumChange(0),this.rankPanel.reset(battleMain.chapter)},e.onBossHpChange=function(t,e){this._progress=t.data.currenHp/t.data.getAttrib(p.hp),this.pbBossHP.progress=this._progress,this.txtBossHP.string=t.data.currenHp+"/"+t.data.getAttrib(p.hp)},e.onUnitHpNumChange=function(t){t++,this.txtLevel.string=t>100?"Lv.∞":"Lv."+t,this._curPress=1,this._utBar.width=582*this._curPress},e.updateTime=function(){this.chapterTime!=Math.floor(battleMain.chapter.chapterTime)&&(this.chapterTime=Math.floor(battleMain.chapter.chapterTime),this.txtTime.string=v.formatTimeForSecond(this.chapterTime)),this.pbTime.progress=battleMain.chapter.chapterTime/battleMain.chapter.maxChapterTime},e.updatePart=function(){},e.exitBattle=function(){IS(b).reqDungeonBattleResult(battleMain.data.chapterType,battleMain.data.chapterId,1),battleMain.enterChapter(),normalEvent.emit(x.BATTLE_STATE,battleMain.data.chapterType,!1),this.rankPanel.exit()},e.onUpdate=function(t){battleMain.chapter.timeModel&&this.updateTime();var e=C.round(Math.abs(this._curPress-this._progress));if(this._barAni){if(this._lastTime=0,e<this._speed*t&&this._speed<=1)return this._barAni=!1,this._utBar.width=582*this._progress,void(this._curPress=this._progress);this._curPress=r.lerp(this._curPress,this._progress,this._speed*t),this._utBar.width=582*this._curPress,e=C.round(Math.abs(this._curPress-this._progress))}0!=e&&(this._lastTime+=t,this._lastTime>.3&&(this._barAni=!0,this._speed=r.clamp(1/(1-e),1,3)))},t}());var P=function(){function t(t,e){var i=this;this.panel=void 0,this.node=void 0,this.nodeRank=void 0,this.rankList=void 0,this.txtSelfRank=void 0,this.txtSelfName=void 0,this.txtSelfHurt=void 0,this.nodeOpenState1=void 0,this.nodeOpenState2=void 0,this.moveTween=void 0,this.openState=1,this.panel=t,this.node=e,this.nodeRank=f.findChild(e,"rank");var n=f.findChildComponent(this.nodeRank,"scrollRankList",d);this.rankList=this.panel.view.addUIList(n,k);var o=f.findChildComponent(this.node,"btnOpen",h);this.panel.view.addComponentCallbackListener(o.node,h.EventType.CLICK,(function(){0==i.openState?(i.openState=1,i.resetExitButton(!0)):(i.openState=0,i.resetExitButton(!1))})),this.nodeOpenState1=f.findChild(o.node,"state1"),this.nodeOpenState2=f.findChild(o.node,"state2"),this.txtSelfName=f.findChildComponent(this.node,"self/txtSelfName",s),this.txtSelfHurt=f.findChildComponent(this.node,"self/txtSelfHurt",s),this.txtSelfRank=f.findChildComponent(this.node,"self/txtSelfRank",s)}var e=t.prototype;return e.reset=function(t){this.txtSelfName.string=IS(B).GetRoleName(),this.txtSelfHurt.string=t.bossUnit?m.GetNumString(t.bossUnit.hurtNum):"0",this.txtSelfRank.string=String(t.selfRank+1),IS(g).worldBossRank&&(this.rankList.datas=IS(g).worldBossRank)},e.resetExitButton=function(t){var e=this;void 0===t&&(t=!0),this.nodeOpenState1.active=t,this.nodeOpenState2.active=!t,null!=this.moveTween&&this.moveTween.stop();var i=new l;this.nodeRank.active=t;var n=this.node.position,s=new l(n.x,n.y),o=new l(n.x,t?-294:-156),a=l.subtract(new l,o,n);this.moveTween=normalTween.to(0,1,.5,(function(t,n){i.set(s).add3f(0,a.y*n,0),e.node.position=i})).easing(S.LINEAR).call((function(){e.moveTween=null})).start()},e.exit=function(){this.rankList.clearData()},t}(),k=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).txtName=void 0,e.txtRank=void 0,e.txtHurt=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.txtName=f.findChildComponent(this.node,"txtName",s),this.txtRank=f.findChildComponent(this.node,"txtRank",s),this.txtHurt=f.findChildComponent(this.node,"txtHurt",s)},n.onRender=function(t,e){this.txtName.string=t.name,this.txtRank.string=e+1+"",this.txtHurt.string=m.GetNumString(t.hurt)},i}(c);i._RF.pop()}}}));

