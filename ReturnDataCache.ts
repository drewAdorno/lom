System.register("chunks:///_virtual/ReturnDataCache.ts",["cc","./RedPointMgr.ts","./StorageUtil.ts","./index57.ts","./ConfigGlobal.ts","./ObjectUtil.ts","./BagModel.ts","./PayDefine.ts","./RoleDataCache.ts","./RoleDefine.ts","./SdkControl.ts","./TaskDataCache.ts","./TaskDefine.ts","./ActivityDefine.ts","./ReturnControl.ts","./ReturnDefine.ts","./UIDefine.ts"],(function(e){"use strict";var t,n,r,i,a,s,o,d,u,h,l,c,f,R,_,p,I,k,v,g;return{setters:[function(e){t=e.cclegacy},function(e){n=e.RedPointMgr},function(e){r=e.default},null,function(e){i=e.ConfigGlobal},function(e){a=e.default},function(e){s=e.BagModel},function(e){o=e.PayEventDefine},function(e){d=e.RoleDataCache},function(e){u=e.RoleEventDefine},function(e){h=e.default},function(e){l=e.TaskDataCache},function(e){c=e.TaskType,f=e.TaskState,R=e.TaskEventDefine},function(e){_=e.ActivityTaskState},function(e){p=e.default},function(e){I=e.ReturnEventDefine,k=e.ReturnTaskType,v=e.CallFriendTaskType},function(e){g=e.OpenFunction}],execute:function(){t._RF.push({},"a606bvCWohHOZDMDgkERDIt","ReturnDataCache",void 0);e("ReturnDataCache",function(){function e(){this.returnInfo=void 0,this.loginInfo=void 0,this.loginRed=0,this.returnTask={},this.redTask={},this.callFriendTaskRed={},this.callFriendTask={},this.chargeBindRed=0,this.returnCodeRed=0,this.chargeRed=0,this.shopRed=0,this.openWheelRed=0,this.returnTaskDay=0,this.new_serv_id=void 0,this.max_reward_val=void 0,this.returnCodeBind=void 0,this.chargeInfo=void 0,this.wheelInfo=void 0,this.wheelId=0,this.isReceiveInfo=!1,normalEvent.on(u.ROLE_RES_UPDATE,this.UpdateReturnShopRed,this),normalEvent.on(u.ROLE_INFO_INIT,this.UpdateWheelOpenRed,this),normalEvent.on(u.ROLE_OPEN_FUNCTION_UPDATE,this.UpdateWheelOpenRed,this),normalEvent.on(o.PAY_RECHARGE_INFO_UPDATE,this.UpdateChargeRed,this),normalEvent.on(R.TASK_INFO_UPDATE,this.UpdateCallFriendTask,this)}var t=e.prototype;return t.clear=function(){},t.GetReturnDay=function(){return{openday:this.returnInfo.open_day,lostDay:this.returnInfo.loss_day}},t.checkReturnDay=function(e,t){var n=!1;n=e.openday>=t.open_day[0]&&e.openday<=t.open_day[1];var r=!1;return r=e.lostDay>=t.lost_day[0]&&e.lostDay<=t.lost_day[1],n&&r},t.SetReturnInfo=function(e){this.returnInfo=e,this.UpdateReturnShopRed(),this.isReceiveInfo||(1==this.returnInfo.return_type?(IS(p).send_return_checkin_info_c2s(),IS(p).send_return_task_c2s(0),IS(p).send_return_bind_status_c2s()):2==this.returnInfo.return_type&&(IS(p).send_return_task_c2s(0),IS(p).send_return_act_rebate_info_c2s())),this.isReceiveInfo=!0,normalEvent.emit(I.UpdateReturnInfo)},t.GetReturnInfo=function(){var e;return null!=(e=this.returnInfo)?e:{}},t.UpdateReturnChoose=function(e){0==e.is_serv&&uiMgr.addPopView("ReturnPopView",e),normalEvent.emit(I.UpdateReturnChoose,e)},t.UpdateReturnRoleList=function(e){normalEvent.emit(I.UpdateReturnRoleList,e)},t.SetReturnCheckinInfo=function(e){this.loginInfo=a.clone(e),this.UpdateReturnCheckinRed(),normalEvent.emit(I.UpdatReturnCheckinInfo)},t.UpdateReturnCheckinInfo=function(e){this.loginInfo&&(this.loginInfo.get_day=e.get_day,this.UpdateReturnCheckinRed()),normalEvent.emit(I.UpdatReturnCheckinInfo)},t.GetReturnCheckinInfo=function(){var e;return null!=(e=this.loginInfo)?e:{}},t.UpdateReturnCheckinRed=function(){var e=0;if(this.loginInfo&&this.returnInfo&&1==this.returnInfo.return_type){for(var t={},r=0;r<this.loginInfo.get_day.length;r++)t[this.loginInfo.get_day[r]]=!0;for(var i=0;i<this.loginInfo.day_conf.length;i++){var a=configBack_checkin.getDataByKey(this.loginInfo.day_conf[i]);if(a.day<=this.loginInfo.day&&!t[a.day]){e=1;break}}}e!=this.loginRed&&(this.loginRed=e,IS(n).changeValue("return_red/login",e),IS(n).changeValue("return_red",this.GetReturnRed()),normalEvent.emit(I.UpdateLoginRed))},t.GetLoginRed=function(){return this.loginRed},t.SetReturnTaskInfo=function(e){this.returnTaskDay=e.day;for(var t=0;t<e.task_list.length;t++)this.returnTask[e.task_list[t].group_id]||(this.returnTask[e.task_list[t].group_id]={}),this.returnTask[e.task_list[t].group_id][e.task_list[t].task_id]=e.task_list[t],this.UpdateTaskRed();normalEvent.emit(I.UpdatReturnTaskInfo)},t.UpdateReturnTaskInfo=function(e){for(var t=0;t<e.task_list.length;t++)this.returnTask[e.task_list[t].group_id]||(this.returnTask[e.task_list[t].group_id]={}),this.returnTask[e.task_list[t].group_id][e.task_list[t].task_id]=e.task_list[t],this.UpdateTaskRed();normalEvent.emit(I.UpdatReturnTaskInfo)},t.UpdateReturnTaskReward=function(e){this.returnTask[e.act_type]&&this.returnTask[e.act_type][e.task_id]&&(this.returnTask[e.act_type][e.task_id].state=_.HadGet,this.UpdateTaskRed(),normalEvent.emit(I.UpdatReturnTaskInfo))},t.UpdateTaskRed=function(){var e={};if(this.returnTask){var t,r=((t={})[k.ReturnTask]=1,t[k.NewReturnTask]=2,t);for(var i in this.returnTask){var a=this.returnTask[i];if(r[i]){if(!this.returnInfo)continue;if(r[i]!=this.returnInfo.return_type)continue}for(var s in this.returnInfo&&this.returnInfo.return_type,a){if(1==a[s].state){e[i]=1;break}}}}var o={};for(var d in this.redTask)e[d]||(o[d]=!0);for(var u in e)this.returnTask[u]||(o[u]=!0);for(var h in this.redTask=e,o){var l,c=null!=(l=this.redTask[h])?l:0;parseInt(h)==k.ReturnTask?(IS(n).changeValue("return_red/returnTask",c),IS(n).changeValue("return_red",this.GetReturnRed())):parseInt(h)==k.NewReturnTask&&(IS(n).changeValue("return_red/newReturnTask",c),IS(n).changeValue("return_red",this.GetReturnRed())),normalEvent.emit(I.UpdateTaskRed)}},t.GetTaskRed=function(e){var t;return null!=(t=this.redTask[e])?t:0},t.UpdateReturnShopRed=function(){var e=0;if(this.returnInfo&&1==this.returnInfo.return_type)for(var t,a=IS(s).getGoodsCountByGoodsGtid(14),o="ReturnActivity/ShopGoods"+IS(d).GetRoleId(),u=null!=(t=r.get(o))?t:0,h=i.back_number,l=0;l<h.length;l++)if(a>=h[l]&&h[l]>u){e=h[l];break}e!=this.shopRed&&(this.shopRed=e,IS(n).changeValue("return_red/shop",e),IS(n).changeValue("return_red",this.GetReturnRed()),normalEvent.emit(I.UpdateShopRed))},t.SetShopRed=function(){if(this.shopRed>0){var e="ReturnActivity/ShopGoods"+IS(d).GetRoleId();r.set(e,this.shopRed),this.UpdateReturnShopRed()}},t.GetShopRed=function(){return this.shopRed},t.GetReturnTaskList=function(e){return this.returnTask[e]?this.returnTask[e]:null},t.GetReturnTaskInfo=function(e,t){return this.returnTask[e]?this.returnTask[e][t]:null},t.UpdateReturnNewServPush=function(e){this.new_serv_id=e.new_serv_id,this.max_reward_val=e.max_reward_val,normalEvent.emit(I.UpdatReturnNewServPush)},t.GetReturnNewServPush=function(){return this.new_serv_id},t.GetReturnNewMaxMoney=function(){var e;return null!=(e=this.max_reward_val)?e:0},t.GetReturnRed=function(){var e=0;for(var t in this.redTask)if(parseInt(t)==k.ReturnTask||parseInt(t)==k.NewReturnTask){e=1;break}return this.loginRed+e+(this.shopRed>0?1:0)+this.returnCodeRed+this.GetChargeRed()},t.SetReturnBindStatus=function(e){this.returnCodeBind=a.clone(e),this.UpdateReturnCodeRed(),normalEvent.emit(I.UpdatReturnBindStatus)},t.UpdateReturnCodeRed=function(){var e=0;this.returnCodeBind&&this.returnInfo&&1==this.returnInfo.return_type&&""!=this.returnCodeBind.bind_code&&1==this.returnCodeBind.status&&(e=1),e!=this.returnCodeRed&&(this.returnCodeRed=e,IS(n).changeValue("return_red/code",this.returnCodeRed),IS(n).changeValue("return_red",this.GetReturnRed()),normalEvent.emit(I.UpdateReturnCodeRed))},t.GetReturnCodeRed=function(){return this.returnCodeRed},t.UpdateReturnBindStatus=function(e){0==e.code&&1==e.bind_type&&this.returnCodeBind&&(this.returnCodeBind.status=2,this.UpdateReturnCodeRed(),normalEvent.emit(I.UpdatReturnBindStatus))},t.GetReturnBindStatus=function(){var e;return null!=(e=this.returnCodeBind)?e:{}},t.SetActChargeInfo=function(e){this.chargeInfo=e,this.UpdateChargeRed(),normalEvent.emit(I.UpdateReturnChargeInfo)},t.GetActChargeInfo=function(){return this.chargeInfo},t.UpdateChargeRed=function(){var e=0,t=0;if(this.chargeInfo&&this.returnInfo&&2==this.returnInfo.return_type)if(this.chargeInfo.role_id>1){if(this.chargeInfo.level_id>0){var r=configBack_level_rebate.getDataByKey(this.chargeInfo.level_id);IS(d).GetLevel()>=r.level&&(t=1)}if(this.chargeInfo.charge_id>0){var i=configBack_pay_rebate.getDataByKey(this.chargeInfo.charge_id);this.chargeInfo.charge>=i.number&&(t=1)}}else 1==this.chargeInfo.role_id&&(e=1);this.chargeBindRed==e&&this.chargeRed==t||(this.chargeBindRed=e,this.chargeRed=t,IS(n).changeValue("return_red/returnCharge",this.GetChargeRed()),IS(n).changeValue("return_red",this.GetReturnRed()),normalEvent.emit(I.UpdateChargeRed))},t.GetChargeRed=function(){return this.chargeBindRed+this.chargeRed},t.GetActChargeRewardState=function(e){if(e.level){if(IS(d).GetLevel()>=e.level)return!0}else if(e.number&&this.chargeInfo&&this.chargeInfo.charge>=e.number)return!0;return!1},t.SetWheelInfo=function(e){this.wheelInfo=a.clone(e),IS(n).changeValue("return_callFriend/wheel",this.GetWheelRed()),IS(n).changeValue("return_callFriend",this.GetCallFriendRed()),normalEvent.emit(I.UpdateWheelRed),normalEvent.emit(I.UpdateWheelInfo)},t.GetWheelInfo=function(){return this.wheelInfo},t.WheelSpin=function(e){this.wheelInfo&&(this.wheelInfo.num-=1,this.wheelInfo.conf_list.push(e.conf_id),IS(n).changeValue("return_callFriend/wheel",this.GetWheelRed()),IS(n).changeValue("return_callFriend",this.GetCallFriendRed()),normalEvent.emit(I.UpdateWheelRed)),this.wheelId=e.conf_id,normalEvent.emit(I.RewardWheel,e.conf_id)},t.UpdateWheelOpenRed=function(e){var t=0;if(!e||e[g.FUNC_RECALL_TURNTABLE]){if(IS(d).CheckFuncOpen(g.FUNC_RECALL_TURNTABLE)){var i="ReturnTurntable_Open_"+IS(d).GetRoleId();r.get(i)||(t=1),IS(p).send_return_wheel_info_c2s()}this.openWheelRed!=t&&(this.openWheelRed=t,IS(n).changeValue("return_callFriend/wheel",this.GetWheelRed()),IS(n).changeValue("return_callFriend",this.GetCallFriendRed()),normalEvent.emit(I.UpdateWheelRed))}},t.SetWheelOpenRed=function(){if(this.openWheelRed>0){var e="ReturnTurntable_Open_"+IS(d).GetRoleId();r.set(e,1),this.UpdateWheelOpenRed()}},t.GetWheelRed=function(){var e=0;return IS(d).CheckFuncOpen(g.FUNC_RECALL_TURNTABLE)&&this.wheelInfo&&this.wheelInfo.num>0&&e++,e+this.openWheelRed},t.UpdateCallFriendTask=function(){var e=IS(l).GetTaskList(c.RebetTunble);if(e){for(var t in e){var n=e[t],r=n.task_id,i=configRecall_reward.getDataByKey(r);this.callFriendTask[i.type]||(this.callFriendTask[i.type]={}),this.callFriendTask[i.type][r]=n}this.UpdateCallFriendTaskRed(),normalEvent.emit(I.UpdateCallFriendTask)}},t.UpdateCallFriendTaskRed=function(){var e={};for(var t in this.callFriendTask){var r=this.callFriendTask[t];for(var i in r){if(r[i].state==f.Complete){e[t]=1;break}}}var a={};for(var s in this.callFriendTaskRed)e[s]||(a[s]=!0);for(var o in e)this.callFriendTaskRed[o]||(a[o]=!0);for(var d in this.callFriendTaskRed=e,a){var u,h=null!=(u=this.callFriendTaskRed[d])?u:0;parseInt(d)==v.CallFriendRewardTask?(IS(n).changeValue("return_callFriend/RewardTask",h),IS(n).changeValue("return_callFriend",this.GetCallFriendRed())):parseInt(d)==v.CallFriendRewardLoginTask&&(IS(n).changeValue("return_callFriend/RewardLoginTask",h),IS(n).changeValue("return_callFriend",this.GetCallFriendRed())),normalEvent.emit(I.UpdateCallFriendTaskRed)}},t.GetCallFriendTaskInfo=function(e){return this.callFriendTask[e]},t.GetCallFriendTaskRed=function(e){var t;return null!=(t=this.callFriendTaskRed[e])?t:0},t.GetCallFriendRed=function(){var e=0;if(IS(d).CheckFuncOpen(g.FUNC_RECALL_TURNTABLE))for(var t in this.callFriendTaskRed){e=1;break}return e+this.GetWheelRed()},t.ShareMyCode=function(e){IS(h).weinxinNormalShare("菇菇回归领好礼","https://mmocgame.qpic.cn/wechatgame/EWl4jNx9ibkCoeON1BsuDoClqjqrDagWhvzckeHicMOo4TYiaP7fia0zCeAibCslLsRAC/0","+ln/tHL4SP6bwvvTRq/6ZA==",null,1,{returnCode:e})},e}());t._RF.pop()}}}));

