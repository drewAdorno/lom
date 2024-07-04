System.register("chunks:///_virtual/AudioMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSetting.ts","./AssetPool.ts","./BaseAsset.ts"],(function(i){"use strict";var t,o,s,u,e,n,r,c,l,a,d,h,p,S,f,m,g;return{setters:[function(i){t=i.createClass},function(i){o=i.cclegacy,s=i.find,u=i.Node,e=i.AudioSource,n=i.director,r=i.Director,c=i.isValid,l=i.sys,a=i.game,d=i.clamp01,h=i.AudioClip},function(i){p=i.default,S=i.GameSettingKey},function(i){f=i.AssetPool,m=i.AssetPoolState},function(i){g=i.LoadState}],execute:function(){o._RF.push({},"6a4c2XIJG9NKZRlDRp2AH7Q","AudioMgr",void 0);var v=function(){function i(){this.freeTime=void 0,this.url=void 0,this.name=void 0,this.poolState=void 0,this.pool=void 0,this.isMusic=0,this.isGuideMusic=!1,this._loadState=g.Not,this.clip=void 0,this._loadCb=void 0,this._time=0}var t=i.prototype;return t.loadSync=function(){return c(this.clip)&&this.play(),!(this.poolState>m.Useing)&&(null!=this.url&&(this._loadState==g.Not&&(this._loadState=g.Ready,this.resLoad(),!0)))},t.resLoad=function(){var i=this;this._loadState==g.Ready&&(this._loadState=g.Loading,this._loadCb=function(t){i.onModelLoaded(t)},resourceMgr.loadRes(this.url,h,this._loadCb))},t.onModelLoaded=function(i){if(this._loadState=g.Finish,this._loadCb=null,null==i.item||null==i.item.asset)return printLogErr("预制加载错误:",this.url),void(this._time=0);var t=i.item.asset;if(null==t)return printLogErr("预制为空，路径：",this.url),void(this._time=0);this.clip=t,this.play()},t.play=function(){if(c(this.clip))if(1==this.isMusic){var i=M.musicSource;if(!c(i))return;i.clip=this.clip,i.playing||i.play()}else if(2==this.isMusic){var t=M.specialSoundSorce;if(!c(t))return;t.clip=this.clip,t.playing||t.play()}else if(this.isGuideMusic){var o=M.guideSoundSource;if(!c(o))return;o.clip=this.clip,o.playing||o.play()}else{var s=M.soundSource;if(this._time=this.clip.getDuration(),!c(s))return;s.playOneShot(this.clip,M.soundValue)}},t.destroy=function(){this.poolState!=m.Destroy&&(this.poolState=m.Destroy,this._loadState!=g.Finish?(this._loadState==g.Loading&&resourceMgr.cancelLoadRes(this.url,this._loadCb),this._loadCb=null):(this._loadState==g.Finish&&resourceMgr.releaseResRef(this.url),this._loadState=g.Ready),this.url=null)},t.free=function(){this.poolState==m.Useing&&this.pool.free(this)},t.cacheUse=function(){this._time=-1},t.onAfterCacheFree=function(){this._loadState!=g.Finish&&(this._loadState==g.Loading&&resourceMgr.cancelLoadRes(this.url,this._loadCb),this._loadCb=null,this._loadState=g.Not)},t.onUpdate=function(i){-1!=this._time&&(this._time<=0?this.pool.free(this):this._time-=i)},i}(),M=i("audioMgr",new(function(){function i(){this.musicSource=void 0,this.soundSource=void 0,this.specialSoundSorce=void 0,this.guideSoundSource=void 0,this.soundVolume=1,this.musicVolume=1,this.clips=[],this.soundInfos={},this.curMusic=void 0,this.curGuideMusic=void 0,this._pool=void 0,this.curSpecialMusic=void 0}var o=i.prototype;return o.init=function(){this._pool=new f(v,8e3);var i=s("Launch"),t=new u("Music");t.parent=i,this.musicSource=t.addComponent(e),this.musicSource.loop=!0,this.musicSource.volume=1,(t=new u("Sound")).parent=i,this.soundSource=t.addComponent(e),this.soundSource.loop=!1,this.soundSource.volume=1,(t=new u("SpecialSound")).parent=i,this.specialSoundSorce=t.addComponent(e),this.specialSoundSorce.loop=!1,this.specialSoundSorce.volume=1,(t=new u("GuideSound")).parent=i,this.guideSoundSource=t.addComponent(e),this.guideSoundSource.loop=!1,this.guideSoundSource.volume=1,n.on(r.EVENT_AFTER_DRAW,this.onEndDrawUpdate,this)},o.playGuideSound=function(i){var t=this.guideSoundSource;if(c(t)){if(!(IS(p).Get(S.SOUND_ON)<=0)){null!=this.curGuideMusic&&(this.curGuideMusic.free(),this.curGuideMusic=null),t.stop(),t.clip=null;var o="audio/music/"+i,s=this._pool.alloc(o,1,5e3);s.isMusic=0,s.isGuideMusic=!0,s.loadSync(),this.curGuideMusic=s,t.loop=!1}}else printLogErr("AudioManager not inited!")},o.stopGuideSound=function(){null!=this.curGuideMusic&&(this.curGuideMusic.free(),this.curGuideMusic=null),this.guideSoundSource.stop(),this.guideSoundSource.clip=null},o.playMusic=function(i,t){void 0===t&&(t=!0);var o=this.musicSource;if(c(o)){null!=this.curMusic&&(this.curMusic.free(),this.curMusic=null),o.stop(),o.clip=null;var s="audio/music/"+i,u=this._pool.alloc(s,1,5e3);u.isMusic=1,u.loadSync(),this.curMusic=u,o.loop=t}else printLogErr("AudioManager not inited!")},o.stopMusic=function(){var i=this.musicSource;c(i)?i.stop():printLogErr("no music is playing")},o.pauseMusic=function(){var i=this.musicSource;c(i)?i.pause():printLogErr("no music is playing")},o.restoreMusic=function(){var i=this.musicSource;c(i)?2==i.state?i.play():printLogErr("no music is pausing"):printLogErr("no music is playing")},o.replayMusic=function(){try{if(null==this._pool)return;this._pool.clearPool();var i="battle";null!=this.curMusic&&(i=this.curMusic.url.replace("audio/music/","")),this.curMusic=null;var t=this.musicSource;c(t)&&(this.musicSource.destroy(),this.musicSource=null);var o=s("Launch"),n=new u("Music");n.parent=o,this.musicSource=n.addComponent(e),this.musicSource.loop=!0,this.musicSource.volume=this.musicVolume,this.playMusic(i)}catch(i){printLogException(i,"replay music")}},o.playSpecialSound=function(i,t){if(void 0===t&&(t=!0),this.soundVolume<=0)return!1;var o=this.specialSoundSorce;if(c(o)){null!=this.curSpecialMusic&&(this.curSpecialMusic.free(),this.curSpecialMusic=null),o.stop(),o.clip=null;var s="audio/sound/"+i;printLogErr("ggggggggggg",s);var u=this._pool.alloc(s,1,5e3);u.isMusic=2,u.loadSync(),this.curMusic=u,o.loop=t}else printLogErr("AudioManager not inited!")},o.stopSpecialMusic=function(){var i=this.specialSoundSorce;c(i)?(printLogErr("no music is playing11111111111"),i.stop(),null!=this.curSpecialMusic&&(this.curSpecialMusic.free(),this.curSpecialMusic=null)):printLogErr("no music is playing")},o.pauseSpecialMusic=function(){var i=this.specialSoundSorce;c(i)?(printLogErr("no music is playing222222222222"),i.pause()):printLogErr("no music is playing")},o.restoreSpecialMusic=function(){var i=this.specialSoundSorce;c(i)?2==i.state?i.play():printLogErr("no music is pausing"):printLogErr("no music is playing")},o._playSound=function(i,t,o){var s;if(void 0===t&&(t=0),void 0===o&&(o=0),this.soundVolume<=0)return!1;var u=this.soundSource;if(!c(u))return printLogErr("AudioManager not inited!"),!1;this.soundInfos[i]=null!=(s=this.soundInfos[i])?s:{frame:0,num:1,time:l.now()};var e=this.soundInfos[i];if(n.getTotalFrames()-e.frame<5)return!1;if(e.frame=n.getTotalFrames(),t>0&&l.now()-e.time<t)return!1;if(o>0&&e.num>o)return!1;e.num++;var r="audio/sound/"+i,a=this._pool.alloc(r,5,5e3);a.isMusic=0,a.name=i,a.loadSync(),this.clips.push(a)},o.playSoundById=function(i){if(!(this.soundVolume<=0)){var t=configSound.getDataByKey(i);null!=t?this._playSound(t.path,t.cd,t.max):printLogErr("缺少配置声音配置:",i)}},o.playSound=function(i){this._playSound(i)},o.update=function(){for(var i=this.clips,t=i.length-1;t>=0;t--){var o=i[t];if(o.onUpdate(a.deltaTime),o.poolState>0){i.splice(t,1);var s=this.soundInfos[o.name];s&&(s.num--,s.num<=0&&delete this.soundInfos[o.name])}}},o.onEndDrawUpdate=function(){this.update()},o.setMusicVolume=function(i){i=d(i),this.musicVolume=i;var t=this.musicSource;c(t)?t.volume=i:printLogErr("AudioManager not inited!")},o.setSoundVolume=function(i){this.soundVolume=i},o.clear=function(){n.off(r.EVENT_AFTER_DRAW,this.onEndDrawUpdate,this),this.soundInfos={},this.clips.length=0,this._pool.clearPool()},t(i,[{key:"soundValue",get:function(){return this.soundVolume}}]),i}()));o._RF.pop()}}}));

