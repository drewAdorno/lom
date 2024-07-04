System.register("chunks:///_virtual/ArtifactDataCache.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPointMgr.ts","./TimeUtil.ts","./ObjectUtil.ts","./BagModel.ts","./EquipDefine.ts"],(function(t){"use strict";var e,a,r,i,n,c,o,s;return{setters:[function(t){e=t.createForOfIteratorHelperLoose},function(t){a=t.cclegacy,r=t.Color},function(t){i=t.RedPointMgr},function(t){n=t.default},function(t){c=t.default},function(t){o=t.BagModel},function(t){s=t.EquipQuality}],execute:function(){a._RF.push({},"b45a49qT5ZIE6Qb7Lc3kqcn","ArtifactDataCache",void 0);t("ArtifactDataCache",function(){function t(){this.artifact_id=void 0,this.prviewId=void 0,this.curLevel=0,this.curexp=void 0,this.skill_use=void 0,this.skin_list=void 0,this.normalArtifact=void 0,this.pos_list={},this.gem_list=[]}var a=t.prototype;return a.clear=function(){},a.initPosList=function(t){for(var a,r=e(t);!(a=r()).done;){var i=a.value;this.pos_list[i.k]=i.v}},a.getSkinLevelByID=function(t){var a=0;if(null==this.skin_list)return a;for(var r,i=e(this.skin_list);!(r=i()).done;){var n=r.value,c=n.k,o=n.v;if(c==t){a=o;break}}return a},a.getAllArtifactState=function(e){if(!this.normalArtifact){this.normalArtifact={};for(var a=configArtifact_level.getDatas(),r=0;r<a.length;r++)a[r].unlock>0&&(this.normalArtifact[a[r].unlock]=a[r].level)}return this.normalArtifact[e]?e==IS(t).artifact_id?4:this.curLevel>=configArtifact_level.getDatas().length?3:this.curLevel>=this.normalArtifact[e]?2:1:e==IS(t).artifact_id?4:this.getSkinLevelByID(e)>0?2:1},a.getArtifactState=function(e){var a=configArtifact_skin.getDataByKeys("artifact_id",e,"skin_level",this.getSkinLevelByID(e));return null==a.expend||0==a.expend.length?e==IS(t).artifact_id?4:3:IS(o).getGoodsCountByGoodsGtid(a.expend[0][0])>=a.expend[0][1]?5:e==IS(t).artifact_id?4:0==a.attr.length?1:2},a.checkUpgradeRP=function(){var e=IS(o).getGoodsCountByGoodsGtid(1017);if(null!=configArtifact_level.getDataByKey(IS(t).curLevel+1)){var a=configArtifact_level.getDataByKey(IS(t).curLevel+1).expend_exp;if(e>=(a-=IS(t).curexp))return IS(i).changeValue("artifact_upgrade_active",1),1}return IS(i).changeValue("artifact_upgrade_active",0),0},a.checkSkinRP=function(){var a=configArtifact_skin.getDataByList("skin_level",0);if(!a)return 0;for(var r,n=e(a);!(r=n()).done;){var c=r.value;if(IS(t).checkArtifactCanShow(c.artifact_id)&&5==IS(t).getArtifactState(c.artifact_id))return IS(i).changeValue("artifact_skin_unlock_active",1),1}return IS(i).changeValue("artifact_skin_unlock_active",0),0},a.checkGemRP=function(){for(var a=0,r=1;r<7;r++){for(var n,c=e(IS(t).gem_list);!(n=c()).done;){var o=n.value,s=IS(t).pos_list[r];if(o.pos==r&&(!s||0==s)){a+=1;break}}if(a>0)break}return IS(i).changeValue("artifact_refined_active",a),IS(i).changeValue("artifact_refined_active/btnChange",a),a},a.checkArtifactCanShow=function(t){var e=configArtifact.getDataByKey(t);if(null==e)return!1;var a=e.open_time;return!!c.isEmpty(a)||n.checkOpenTime(a)},a.getStoneInfoByID=function(t){for(var a,r=e(this.gem_list);!(a=r()).done;){var i=a.value;if(i.id==t)return i}},a.getStoneSuitInfo=function(){var e={};for(var a in IS(t).pos_list){var r=IS(t).pos_list[a];if(0!=r){var i=IS(t).getStoneInfoByID(r);null==e[i.suit]?e[i.suit]=1:e[i.suit]+=1}}return e},a.getAllGemAttr=function(){var t={},a={},r={};for(var i in this.pos_list){var n=this.getStoneInfoByID(this.pos_list[i]);if(n){t[n.base_attr[0].k]?t[n.base_attr[0].k]=t[n.base_attr[0].k]+n.base_attr[0].v:t[n.base_attr[0].k]=n.base_attr[0].v;for(var c,o=e(n.rand_attr);!(c=o()).done;){var s=c.value;a[s.k]?a[s.k]=a[s.k]+s.v:a[s.k]=s.v}}}for(var u in a)t[u]?t[u]+=a[u]:r[u]=a[u];var l=[];for(var f in t)l.push({attr:f,value:t[f]});for(var v in r)l.push({attr:v,value:r[v]});return l},a.getSortedGemList=function(){var e=IS(t).gem_list;return e.sort((function(t,e){return t.quality>e.quality?-1:t.quality<e.quality?1:t.lv>e.lv?-1:t.lv<e.lv?1:t.suit>e.suit?-1:1})),e},a.getGenQualityList=function(){return Array.from({length:configArtifact_gemquality.getDatas().length},(function(t,e){return configArtifact_gemquality.getDatas()[e].id}))},a.getGemQualityNameAndColor=function(t,e){var a,i=configArtifact_gemquality.getDataByKey(t).color;switch(t){case s.WHITE:a=e?new r(193,189,176):new r(83,62,42);break;case s.GREEN:a=e?new r(89,197,144):new r(36,115,67);break;case s.BLUE:a=e?new r(125,172,248):new r(47,69,130);break;case s.PURPLE:a=e?new r(216,121,255):new r(110,15,139);break;case s.GOLD:a=e?new r(243,207,67):new r(151,107,0);break;case s.ORANGE:a=e?new r(252,140,31):new r(167,76,0);break;case s.RED:a=e?new r(254,70,70):new r(156,9,9);break;case s.PINK:a=e?new r(205,105,137):new r(170,0,104);break;case s.MULTICOLOR:a=e?new r(60,208,235):new r(5,99,250);break;case s.GILT:a=new r(227,119,13)}return{nameStr:i,nameColor:a}},a.getGemAttrColor=function(t,e){for(var a=configArtifact_gemattr.getDataByList("attr_id",t),i=a[a.length-1].color,n=Math.ceil((i[1]-i[0])/6),c=0,o=0,s=[i[0]+1*n,i[0]+2*n,i[0]+3*n,i[0]+4*n,i[0]+5*n,i[1]];o<s.length;o++){e>=s[o]&&(c+=1)}switch(c){case 0:return new r("#398760");case 1:return new r("#5377b0");case 2:return new r("#9954b6");case 3:return new r("#ce5913");case 4:return new r("#d93535");case 5:case 6:return new r("#e13a95")}return new r("#398760")},t}());a._RF.pop()}}}));
