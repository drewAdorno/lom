System.register("chunks:///_virtual/CustomeHeadControl.ts",["cc","./CustomeHeadDataCache.ts"],(function(e){"use strict";var o,t;return{setters:[function(e){o=e.cclegacy},function(e){t=e.CustomeHeadDataCache}],execute:function(){o._RF.push({},"532439bMx5OZZA3mGXWjqUo","CustomeHeadControl",void 0);e("default",function(){var e=o.prototype;function o(){netManager.addEventListener("role.role_photo_list_s2c",this.on_role_photo_list_s2c,this),netManager.addEventListener("role.role_add_photo_s2c",this.on_role_add_photo_s2c,this),netManager.addEventListener("role.role_change_photo_state_s2c",this.on_role_change_photo_state_s2c,this),netManager.addEventListener("role.role_delete_photo_s2c",this.on_role_delete_photo_s2c,this)}return e.clear=function(){},e.send_role_photo_list_c2s=function(){netManager.send("role.role_photo_list_c2s",{})},e.on_role_photo_list_s2c=function(e){IS(t).UpdateCustomeHeadInfo(e)},e.send_role_add_photo_c2s=function(e,o){netManager.send("role.role_add_photo_c2s",{url:e,pos:o})},e.on_role_add_photo_s2c=function(e){IS(t).AddPhoto(e)},e.on_role_change_photo_state_s2c=function(e){IS(t).UpdateCustomeHeadState(e)},e.send_role_delete_photo_c2s=function(e){netManager.send("role.role_delete_photo_c2s",{id:e})},e.on_role_delete_photo_s2c=function(e){IS(t).DeletePhoto(e)},e.send_role_use_photo_c2s=function(e){netManager.send("role.role_use_photo_c2s",{id:e})},o}());o._RF.pop()}}}));

