System.register("chunks:///_virtual/NoticeControl.ts",["cc","./StorageUtil.ts","./index57.ts","./ControlMgr.ts","./RoleDataCache.ts","./RoleDefine.ts","./NativeToJs.ts","./UIDefine.ts"],(function(e){"use strict";var t,n,i,o,c,s,r;return{setters:[function(e){t=e.cclegacy},function(e){n=e.default},null,function(e){i=e.controlMgr},function(e){o=e.RoleDataCache},function(e){c=e.RoleEventDefine},function(e){s=e.NativeToJs},function(e){r=e.OpenFunction}],execute:function(){t._RF.push({},"eddb2WmEv9AZ6fyrpisNDhk","NoticeControl",void 0);e("default",function(){var e=t.prototype;function t(){i.addControl(this)}return e.clear=function(){printLog("NoticeCotrol")},e.onLogin=function(){normalEvent.on(c.ROLE_INFO_INIT,this.CheckFunc)},e.CheckFunc=function(){if(IS(o).CheckFuncOpen(r.FUNC_ANNOUNCEMENT_APPEAR)&&!s.IsPreviewServer){var e=n.get("NoticeTime"),t=new Date;if(null==e)return n.set("NoticeTime",{times:1,stamp:(new Date).getTime()}),void uiMgr.openView("NoticeView");new Date(e.stamp).getDate()==t.getDate()&&new Date(e.stamp).getMonth()==t.getMonth()?(e.times<3&&uiMgr.openView("NoticeView"),n.set("NoticeTime",{times:e.times+1,stamp:(new Date).getTime()})):(n.set("NoticeTime",{times:1,stamp:(new Date).getTime()}),uiMgr.openView("NoticeView"))}},e.onReconnect=function(){},t}());t._RF.pop()}}}));

