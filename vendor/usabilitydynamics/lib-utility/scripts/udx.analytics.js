define("udx.analytics",["//www.google-analytics.com/analytics.js"],function(){function a(a){return"string"==typeof a&&(a={id:a}),"function"!=typeof ga?console.error("udx.analytics","The ga variable is not a function."):a.id?(ga("create",a.id,{userId:a.userId||void 0,cookieDomain:window.location.hostname}),this.setView(),this):console.error("udx.analytics","No id provided.")}return Object.defineProperties(a.prototype,{ga:{value:ga,enumerable:!0,configurable:!0,writable:!0},autoLink:{value:function(){return ga(function(a){a.get("name")}),this},enumerable:!0,configurable:!0,writable:!0},emit:{value:function(a,b,c,d){return ga("send","event",{eventCategory:a,eventAction:b,eventLabel:c,eventValue:d}),this},enumerable:!0,configurable:!0,writable:!0},set:{value:function(a,b){return ga("set",a,b),this},enumerable:!0,configurable:!0,writable:!0},sendHit:{value:function(a,b){return ga("send",{hitType:a||"pageview",page:b||document.location.pathname}),this},enumerable:!0,configurable:!0,writable:!0},setView:{value:function(){return ga("send","pageview"),this},enumerable:!0,configurable:!0,writable:!0},setClient:{value:function(){},enumerable:!0,configurable:!0,writable:!0},setSocial:{value:function(){},enumerable:!0,configurable:!0,writable:!0}}),Object.defineProperties(a,{create:{value:function(b){return new a(b)},enumerable:!0,configurable:!0,writable:!0}}),a});