System.register("chunks:///_virtual/GainBuffDefine.ts",["cc","./NodeUtil.ts","./BagModel.ts"],(function(i){"use strict";var t,e,f,n,o,u;return{setters:[function(i){t=i.cclegacy,e=i.Sprite,f=i.Label,n=i.Button},function(i){o=i.default},function(i){u=i.BagModel}],execute:function(){var d;t._RF.push({},"70bf80fc1hEfosLcupDZ7zb","GainBuffDefine",void 0);i("GainBuffEventDefine",{GAINBUFF_INFO_UPDATE:"GAINBUFF_INFO_UPDATE"});var s=i("GainBuffType",{BoxBuff:10001,MineBuff:20001,IdleBuff:30001,StatueBuff:40001,BasicBuff:50001,FarmBuff:60001,SkillBuff:70001,PetBuff:80001}),B=i("GainBuffItemId",((d={})[s.BoxBuff]=240001,d[s.MineBuff]=240002,d[s.IdleBuff]=240003,d[s.StatueBuff]=240004,d[s.BasicBuff]=240005,d[s.FarmBuff]=240006,d[s.SkillBuff]=240007,d[s.PetBuff]=240008,d));i("GainBuff",(function(i,t,d){var s=this;this.node=void 0,this.icon=void 0,this.txtNum=void 0,this.nodeTime=void 0,this.txtTime=void 0,this.view=void 0,this.times=void 0,this.node=i,this.view=t,this.icon=o.findChildComponent(this.node,"imgIcon",e),this.txtNum=o.findChildComponent(this.node,"num",f),this.nodeTime=o.findChild(this.node,"nodeTime"),this.txtTime=o.findChildComponent(this.node,"nodeTime/txtTime",f),this.view.addComponentCallbackListener(this.node,n.EventType.CLICK,(function(){IS(u).OpenItemTips(B[d],s.node)}))}));t._RF.pop()}}}));

