/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[1],{522:function(wa,sa,r){r.r(sa);var pa=r(0),na=r(294);wa=r(518);r=r(439);var oa=window,ia=function(ka){function ha(y,x){var f=ka.call(this,y,x)||this;f.url=y;f.range=x;f.request=new XMLHttpRequest;f.request.open("GET",f.url,!0);oa.Uint8Array&&(f.request.responseType="arraybuffer");f.request.setRequestHeader("X-Requested-With","XMLHttpRequest");f.status=na.a.NOT_STARTED;return f}Object(pa.c)(ha,ka);return ha}(wa.ByteRangeRequest);
wa=function(ka){function ha(y,x,f,e){y=ka.call(this,y,x,f,e)||this;y.KB=ia;return y}Object(pa.c)(ha,ka);ha.prototype.gz=function(y,x){return y+"/bytes="+x.start+","+(x.stop?x.stop:"")};return ha}(wa["default"]);Object(r.a)(wa);Object(r.b)(wa);sa["default"]=wa}}]);}).call(this || window)
