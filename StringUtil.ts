System.register("chunks:///_virtual/StringUtil.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TimeUtil.ts"],(function(t){"use strict";var e,r,n,a,i;return{setters:[function(t){e=t.createForOfIteratorHelperLoose},function(t){r=t.cclegacy,n=t.js,a=t.sys},function(t){i=t.default}],execute:function(){r._RF.push({},"44f1ebHQfpKuZTjQ203QdCw","StringUtil",void 0);t("default",function(){function t(){}return t.isDWORD=function(t){return/[^\x00-\xff]/.test(t)},t.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},t.split=function(t,e,r){return t.split(e,r)},t.isEmpty=function(t){return null==t||(""===t||void 0)},t.getStringLength=function(t){for(var e=t,r=0,n=0,a=e.length;n<a;n++){r+=e.charCodeAt(n)<=255?1:2}return Math.ceil(r/2)},t.getStrLength=function(t){for(var e=0,r=0,n=t.length;r<n;r++)/[\u4e00-\u9fa5]/.test(t[r])?e+=2:e+=1;return e},t.startsWith=function(t,e,r){return(t=t.substring(r)).startsWith(e)},t.endsWith=function(t,e,r){return(t=t.substring(r)).endsWith(e)},t.GetURLWithTime=function(t){return null!=t&&this.getStringLength(t)>0?t+"?"+i.getLocalTime():t},t.formatMoney=function(t){for(var e=["","K","M","G","T","P","E","Z","Y","B","N","D"],r="",n=0;n<e.length;n++){if(!(t>=1e4)){r=Math.floor(t)+e[n];break}t/=1e3}return""===r&&(r=Math.floor(t)+"U"),r},t.formatTwoDigits=function(t){return(Array(2).join("0")+t).slice(-2)},t.format_p_lang_info=function(t,r,a,o){void 0===a&&(a=void 0),void 0===o&&(o=void 0);var u={leftTimeCallback:function(t){return t}};o&&"object"==typeof o&&Object.assign(u,o);var s=[];if(r&&r.arg_list)for(var c,f=e(r.arg_list);!(c=f()).done;){var l=c.value;switch(l.k){case 0:s.push(l.v);break;case 1:var g=GetLanguage(l.v);s.push(g);break;case 2:var h=configGoods.getDataByKey(l.v);s.push(h?h.name:"");break;case 3:if(0==r.id)return l.name;s.push(l.name);break;case 4:s.push(l.v);break;case 5:s.push(i.formatTimestampToMonthTime(l.v));break;case 6:s.push(u.leftTimeCallback(l.v))}}return a&&s.push.apply(s,a),-1==t.indexOf("##1")?n.formatStr.apply(n,[t].concat(s)):this.formatStr.apply(this,[t].concat(s))},t.GetFullStringByP_lang_info=function(t,r,a){void 0===r&&(r=void 0),void 0===a&&(a=void 0);var o={leftTimeCallback:function(t){return t}};a&&"object"==typeof a&&Object.assign(o,a);var u=[];if(t&&t.arg_list)for(var s,c=e(t.arg_list);!(s=c()).done;){var f=s.value;switch(f.k){case 0:u.push(f.v);break;case 1:if(0==t.id&&0!=f.v)return GetLanguage(f.v);u.push(GetLanguage(f.v));break;case 2:var l=configGoods.getDataByKey(f.v);u.push(l?l.name:"");break;case 3:if(0==t.id)return f.name;u.push(f.name);break;case 4:u.push(f.v);break;case 5:u.push(i.formatTimestampToMonthTime(f.v));break;case 6:u.push(o.leftTimeCallback(f.v))}}r&&u.push.apply(u,r);var g=GetLanguage(t.id);return-1==(g=g.replace(/~s/g,"%s")).indexOf("##1")?n.formatStr.apply(n,[g].concat(u)):this.formatStr.apply(this,[g].concat(u))},t.GetNumString=function(t,e,r){void 0===e&&(e=!1),void 0===r&&(r=1);var n=t,a="";if(t>=1e11)n=t/1e9,a="B";else if(t>=1e8)n=t/1e6,a="M";else{if(!(t>=1e5))return String(t);n=t/1e3,a="K"}return e&&(a=a.toLowerCase()),""==a?n+a:n.toFixed(r)+a},t.GetLanguage=function(t){var e=configLanguage.getDataByKey(2e5);return null==e?"Error Language":e.text},t.getRootDomain=function(t){var e=t.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);return e&&e.length>=2?e[1]:""},t.GetServNameById=function(t){return t?n.formatStr("[s%s]",t):""},t.formatStr=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(0===arguments.length)return"";if(0===r.length)return""+t;for(var a=1;a<=r.length;a++){var i=r[a-1];t=t.replace("##"+a,i)}return t},t.formatStrWithMirrorDeal=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return a.uiMirror?this.formatStr.apply(this,[t].concat(r)):n.formatStr.apply(n,[t].concat(r))},t}());r._RF.pop()}}}));
