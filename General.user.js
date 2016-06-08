// ==UserScript==
// @name        General
// @namespace   general
// @include     https://pinkong.tmall.com/item_detail.htm?sMpsId=*
// @version     1
// @grant       none
// ==/UserScript==


javascript:(function(){


	var Oversion = 3.70;  //记得改完给remoteIMGw 版本+1    version存在fuwu.zhtech.
	var OnextVersion = Oversion+0.01;
	var yiweinextVersion = parseFloat(OnextVersion).toFixed(2);
	var version = "v"+Oversion;		
    var nextVersion = "v"+yiweinextVersion;
	
	//定义 合格
function qualifiedVK(TR){	
					  var $option = TR.find("#qcItemResultCode1").find("option:contains('合格')").map(function(){ 					  
					  
							  if ($(this).text() == "合格") {
								  return this;  
									  }  
								  });  
								  //alert($option.length > 0 ? "有对象" : "无对象");  
								  $option.attr("selected", true);								  								  
								  TR.find("textarea").val("合格");
								  TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex=1;
								  
							}

//定义 不合格 无 选择函数
function UnqualifiedVK(TR,category,FillCC){
					  var $option = TR.find("#qcItemResultCode1").find("option:contains('不合格')").map(function(){
							  if ($(this).text() == "不合格") {
								  return this;  
									  }  
								  });  
								  //alert($option.length > 0 ? "有对象" : "无对象");  
								  $option.attr("selected", true);

								//获得当前按钮按下的TD名称 用switch具体化处理
	var UnqualifiedTDItem = TR.children("td").eq(1).text();


								  if(category.indexOf("肉")>=0){

									   TR.find("textarea").val("检测其成分阳性");
									  }
									  else if(FillCC=='食品室'){

									  TR.find("textarea").val("结果数据:888888 CFU/g，限量要求:≤ 8888 CFU/g"); //先整体不合格一遍

									  switch (UnqualifiedTDItem)   //再具体项目具体覆盖
									  {
										  case '邻苯二甲酸酯类物质（塑化剂）':
											  TR.find("textarea").val("邻苯二甲酸二丁酯（ DBP）结果数据:888888 mg/kg，限量要求:≤ 0.3 mg/kg").css({height:'50px'});
											  break;
									  }

								  }

								  else if(FillCC=='电气室'){
									 // alert(FillCC);
									  TR.find("textarea").val("不合格，详见检测报告内容");
									  switch (UnqualifiedTDItem)   //再具体项目具体覆盖
									  {
										  case '标识标志（普通LED灯（GB 24906-2010））':
											  TR.find("textarea").val("").css({height:'200px'});
											  break;
										  case '标记（灯具上的标记、说明书等附加内容）（灯具）':

											  TR.find("textarea").val("").css({height:'200px'});
											  break;

									  }


								  }

								  			else{

												  TR.find("textarea").val("不合格");
												}

								 
								  TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex=1;
								  
							}
	//具体项目不合格辅助	 适用于具体的项目名称 单独定义
	function UnqualifiedVK_detail(TR,UnqualifiedNum) {

		var $option = TR.find("#qcItemResultCode1").find("option:contains('不合格')").map(function () {

			if ($(this).text() == "不合格") {
				return this;
			}
		});
		//alert($option.length > 0 ? "有对象" : "无对象");
		$option.attr("selected", true);

		if (UnqualifiedNum == 1) {

			TR.find("textarea").val("无 CCC 认证标志");
			alert(333);
			TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex = 1;
		}
		if (UnqualifiedNum == 2) {
			TR.find("textarea").val("我是第2种不合格");
			TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex = 1;
		}


	}
function ShangBiaoYiZhi(TR){	
					 var $option = TR.find("#qcItemResultCode1").find("option:contains('合格')").map(function(){ 					  
					  
							  if ($(this).text() == "合格") {  
								  return this;  
									  }  
								  });  
								  //alert($option.length > 0 ? "有对象" : "无对象");  
								  $option.attr("selected", true);								  								  
								  TR.find("textarea").val("页面描述商标与实物商标一致");
								  TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex=1;
								  
							}
function WuVK(TR){	
					 var $option = TR.find("#qcItemResultCode1").find("option:contains('无')").map(function(){ 					  
					  
							  if ($(this).text() == "无") {  
								  return this;  
									  }  
								  });  
								  //alert($option.length > 0 ? "有对象" : "无对象");  
								  $option.attr("selected", true);								  								  
								  TR.find("textarea").val("无");
								  TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex=0;
								  
							}
function CancelVK(TR){	

					  var $option = TR.find("#qcItemResultCode1").find("option:contains('无')").map(function(){ 					  
					  
							  if ($(this).text() == "无") {  //实测天猫里这步不能少
								  return this;  
									  }  
								  });  
								  //alert($option.length > 0 ? "有对象" : "无对象");  
								  $option.attr("selected", true);								  								  
								  TR.find("textarea").val("项目不适用取消");
								  TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex=0;
								  
							}

	function RepeatCancelVK(TR){

		var $option = TR.find("#qcItemResultCode1").find("option:contains('无')").map(function(){

			if ($(this).text() == "无") {  //实测天猫里这步不能少
				return this;
			}
		});
		//alert($option.length > 0 ? "有对象" : "无对象");
		$option.attr("selected", true);
		TR.find("textarea").val("项目重复取消");
		TR.find("textarea").parent("td").prev("td").find("select").get(0).selectedIndex=0;

	}




!function(){function a(b){var d=c[b],e="exports";return"object"==typeof d?d:(d[e]||(d[e]={},d[e]=d.call(d[e],a,d[e],d)||d[e]),d[e])}function b(a,b){c[a]=b}var c={};b("jquery",function(){return jQuery}),b("popup",function(a){function b(){this.destroyed=!1,this.__popup=c("<div />").css({display:"none",position:"absolute",outline:0}).attr("tabindex","-1").html(this.innerHTML).appendTo("body"),this.__backdrop=this.__mask=c("<div />").css({opacity:.7,background:"#000"}),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],d++}var c=a("jquery"),d=0,e=!("minWidth"in c("html")[0].style),f=!e;return c.extend(b.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",innerHTML:"",className:"ui-popup",show:function(a){if(this.destroyed)return this;var d=this.__popup,g=this.__backdrop;if(this.__activeElement=this.__getActive(),this.open=!0,this.follow=a||this.follow,!this.__ready){if(d.addClass(this.className).attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute"),e||c(window).on("resize",c.proxy(this.reset,this)),this.modal){var h={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",zIndex:this.zIndex||b.zIndex};d.addClass(this.className+"-modal"),f||c.extend(h,{position:"absolute",width:c(window).width()+"px",height:c(document).height()+"px"}),g.css(h).attr({tabindex:"0"}).on("focus",c.proxy(this.focus,this)),this.__mask=g.clone(!0).attr("style","").insertAfter(d),g.addClass(this.className+"-backdrop").insertBefore(d),this.__ready=!0}d.html()||d.html(this.innerHTML)}return d.addClass(this.className+"-show").show(),g.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(a){return!this.destroyed&&this.open&&(void 0!==a&&(this.returnValue=a),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),b.current===this&&(b.current=null),this.__popup.remove(),this.__backdrop.remove(),this.__mask.remove(),e||c(window).off("resize",this.reset),this.__dispatchEvent("remove");for(var a in this)delete this[a];return this},reset:function(){var a=this.follow;return a?this.__follow(a):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var a=this.node,d=this.__popup,e=b.current,f=this.zIndex=b.zIndex++;if(e&&e!==this&&e.blur(!1),!c.contains(a,this.__getActive())){var g=d.find("[autofocus]")[0];!this._autofocus&&g?this._autofocus=!0:g=a,this.__focus(g)}return d.css("zIndex",f),b.current=this,d.addClass(this.className+"-focus"),this.__dispatchEvent("focus"),this},blur:function(){var a=this.__activeElement,b=arguments[0];return b!==!1&&this.__focus(a),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(a,b){return this.__getEventListener(a).push(b),this},removeEventListener:function(a,b){for(var c=this.__getEventListener(a),d=0;d<c.length;d++)b===c[d]&&c.splice(d--,1);return this},__getEventListener:function(a){var b=this.__listener;return b||(b=this.__listener={}),b[a]||(b[a]=[]),b[a]},__dispatchEvent:function(a){var b=this.__getEventListener(a);this["on"+a]&&this["on"+a]();for(var c=0;c<b.length;c++)b[c].call(this)},__focus:function(a){try{this.autofocus&&!/^iframe$/i.test(a.nodeName)&&a.focus()}catch(b){}},__getActive:function(){try{var a=document.activeElement,b=a.contentDocument,c=b&&b.activeElement||a;return c}catch(d){}},__center:function(){var a=this.__popup,b=c(window),d=c(document),e=this.fixed,f=e?0:d.scrollLeft(),g=e?0:d.scrollTop(),h=b.width(),i=b.height(),j=a.width(),k=a.height(),l=(h-j)/2+f,m=382*(i-k)/1e3+g,n=a[0].style;n.left=Math.max(parseInt(l),f)+"px",n.top=Math.max(parseInt(m),g)+"px"},__follow:function(a){var b=a.parentNode&&c(a),d=this.__popup;if(this.__followSkin&&d.removeClass(this.__followSkin),b){var e=b.offset();if(e.left*e.top<0)return this.__center()}var f=this,g=this.fixed,h=c(window),i=c(document),j=h.width(),k=h.height(),l=i.scrollLeft(),m=i.scrollTop(),n=d.width(),o=d.height(),p=b?b.outerWidth():0,q=b?b.outerHeight():0,r=this.__offset(a),s=r.left,t=r.top,u=g?s-l:s,v=g?t-m:t,w=g?0:l,x=g?0:m,y=w+j-n,z=x+k-o,A={},B=this.align.split(" "),C=this.className+"-",D={top:"bottom",bottom:"top",left:"right",right:"left"},E={top:"top",bottom:"top",left:"left",right:"left"},F=[{top:v-o,bottom:v+q,left:u-n,right:u+p},{top:v,bottom:v-o+q,left:u,right:u-n+p}],G={left:u+p/2-n/2,top:v+q/2-o/2},H={left:[w,y],top:[x,z]};c.each(B,function(a,b){F[a][b]>H[E[b]][1]&&(b=B[a]=D[b]),F[a][b]<H[E[b]][0]&&(B[a]=D[b])}),B[1]||(E[B[1]]="left"===E[B[0]]?"top":"left",F[1][B[1]]=G[E[B[1]]]),C+=B.join("-")+" "+this.className+"-follow",f.__followSkin=C,b&&d.addClass(C),A[E[B[0]]]=parseInt(F[0][B[0]]),A[E[B[1]]]=parseInt(F[1][B[1]]),d.css(A)},__offset:function(a){var b=a.parentNode,d=b?c(a).offset():{left:a.pageX,top:a.pageY};a=b?a:a.target;var e=a.ownerDocument,f=e.defaultView||e.parentWindow;if(f==window)return d;var g=f.frameElement,h=c(e),i=h.scrollLeft(),j=h.scrollTop(),k=c(g).offset(),l=k.left,m=k.top;return{left:d.left+l-i,top:d.top+m-j}}}),b.zIndex=1024,b.current=null,b}),b("dialog-config",{backdropBackground:"#000",backdropOpacity:.7,content:'<span class="ui-dialog-loading">Loading..</span>',title:"",statusbar:"",button:null,ok:null,cancel:null,okValue:"ok",cancelValue:"cancel",cancelDisplay:!0,width:"",height:"",padding:"",skin:"",quickClose:!1,cssUri:"../css/ui-dialog.css",innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'}),b("dialog",function(a){var b=a("jquery"),c=a("popup"),d=a("dialog-config"),e=d.cssUri;if(e){var f=a[a.toUrl?"toUrl":"resolve"];f&&(e=f(e),e='<link rel="stylesheet" href="'+e+'" />',b("base")[0]?b("base").before(e):b("head").append(e))}var g=0,h=new Date-0,i=!("minWidth"in b("html")[0].style),j="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),k=!i&&!j,l=function(a,c,d){var e=a=a||{};("string"==typeof a||1===a.nodeType)&&(a={content:a,fixed:!j}),a=b.extend(!0,{},l.defaults,a),a.original=e;var f=a.id=a.id||h+g,i=l.get(f);return i?i.focus():(k||(a.fixed=!1),a.quickClose&&(a.modal=!0,a.backdropOpacity=0),b.isArray(a.button)||(a.button=[]),void 0!==d&&(a.cancel=d),a.cancel&&a.button.push({id:"cancel",value:a.cancelValue,callback:a.cancel,display:a.cancelDisplay}),void 0!==c&&(a.ok=c),a.ok&&a.button.push({id:"ok",value:a.okValue,callback:a.ok,autofocus:!0}),l.list[f]=new l.create(a))},m=function(){};m.prototype=c.prototype;var n=l.prototype=new m;return l.create=function(a){var d=this;b.extend(this,new c);var e=(a.original,b(this.node).html(a.innerHTML)),f=b(this.backdrop);return this.options=a,this._popup=e,b.each(a,function(a,b){"function"==typeof d[a]?d[a](b):d[a]=b}),a.zIndex&&(c.zIndex=a.zIndex),e.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",this.cancel===!1?"none":"").attr("title",this.cancelValue).on("click",function(a){d._trigger("cancel"),a.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),a.quickClose&&f.on("onmousedown"in document?"mousedown":"click",function(){return d._trigger("cancel"),!1}),this.addEventListener("show",function(){f.css({opacity:0,background:a.backdropBackground}).animate({opacity:a.backdropOpacity},150)}),this._esc=function(a){var b=a.target,e=b.nodeName,f=/^input|textarea$/i,g=c.current===d,h=a.keyCode;!g||f.test(e)&&"button"!==b.type||27===h&&d._trigger("cancel")},b(document).on("keydown",this._esc),this.addEventListener("remove",function(){b(document).off("keydown",this._esc),delete l.list[this.id]}),g++,l.oncreate(this),this},l.create.prototype=n,b.extend(n,{content:function(a){var c=this._$("content");return"object"==typeof a?(a=b(a),c.empty("").append(a.show()),this.addEventListener("beforeremove",function(){b("body").append(a.hide())})):c.html(a),this.reset()},title:function(a){return this._$("title").text(a),this._$("header")[a?"show":"hide"](),this},width:function(a){return this._$("content").css("width",a),this.reset()},height:function(a){return this._$("content").css("height",a),this.reset()},button:function(a){a=a||[];var c=this,d="",e=0;return this.callbacks={},"string"==typeof a?(d=a,e++):b.each(a,function(a,f){var g=f.id=f.id||f.value,h="";c.callbacks[g]=f.callback,f.display===!1?h=' style="display:none"':e++,d+='<button type="button" i-id="'+g+'"'+h+(f.disabled?" disabled":"")+(f.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+f.value+"</button>",c._$("button").on("click","[i-id="+g+"]",function(a){var d=b(this);d.attr("disabled")||c._trigger(g),a.preventDefault()})}),this._$("button").html(d),this._$("footer")[e?"show":"hide"](),this},statusbar:function(a){return this._$("statusbar").html(a)[a?"show":"hide"](),this},_$:function(a){return this._popup.find("[i="+a+"]")},_trigger:function(a){var b=this.callbacks[a];return"function"!=typeof b||b.call(this)!==!1?this.close().remove():this}}),l.oncreate=b.noop,l.getCurrent=function(){return c.current},l.get=function(a){return void 0===a?l.list:l.list[a]},l.list={},l.defaults=d,l}),b("drag",function(a){var b=a("jquery"),c=b(window),d=b(document),e="createTouch"in document,f=document.documentElement,g=!("minWidth"in f.style),h=!g&&"onlosecapture"in f,i="setCapture"in f,j={start:e?"touchstart":"mousedown",over:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"},k=e?function(a){return a.touches||(a=a.originalEvent.touches.item(0)),a}:function(a){return a},l=function(){this.start=b.proxy(this.start,this),this.over=b.proxy(this.over,this),this.end=b.proxy(this.end,this),this.onstart=this.onover=this.onend=b.noop};return l.types=j,l.prototype={start:function(a){return a=this.startFix(a),d.on(j.over,this.over).on(j.end,this.end),this.onstart(a),!1},over:function(a){return a=this.overFix(a),this.onover(a),!1},end:function(a){return a=this.endFix(a),d.off(j.over,this.over).off(j.end,this.end),this.onend(a),!1},startFix:function(a){return a=k(a),this.target=b(a.target),this.selectstart=function(){return!1},d.on("selectstart",this.selectstart).on("dblclick",this.end),h?this.target.on("losecapture",this.end):c.on("blur",this.end),i&&this.target[0].setCapture(),a},overFix:function(a){return a=k(a)},endFix:function(a){return a=k(a),d.off("selectstart",this.selectstart).off("dblclick",this.end),h?this.target.off("losecapture",this.end):c.off("blur",this.end),i&&this.target[0].releaseCapture(),a}},l.create=function(a,e){var f,g,h,i,j=b(a),k=new l,m=l.types.start,n=function(){},o=a.className.replace(/^\s|\s.*/g,"")+"-drag-start",p={onstart:n,onover:n,onend:n,off:function(){j.off(m,k.start)}};return k.onstart=function(b){var e="fixed"===j.css("position"),k=d.scrollLeft(),l=d.scrollTop(),m=j.width(),n=j.height();f=0,g=0,h=e?c.width()-m+f:d.width()-m,i=e?c.height()-n+g:d.height()-n;var q=j.offset(),r=this.startLeft=e?q.left-k:q.left,s=this.startTop=e?q.top-l:q.top;this.clientX=b.clientX,this.clientY=b.clientY,j.addClass(o),p.onstart.call(a,b,r,s)},k.onover=function(b){var c=b.clientX-this.clientX+this.startLeft,d=b.clientY-this.clientY+this.startTop,e=j[0].style;c=Math.max(f,Math.min(h,c)),d=Math.max(g,Math.min(i,d)),e.left=c+"px",e.top=d+"px",p.onover.call(a,b,c,d)},k.onend=function(b){var c=j.position(),d=c.left,e=c.top;j.removeClass(o),p.onend.call(a,b,d,e)},k.off=function(){j.off(m,k.start)},e?k.start(e):j.on(m,k.start),p},l}),b("dialog-plus",function(a){var b=a("jquery"),c=a("dialog"),d=a("drag");return c.oncreate=function(a){var c,e=a.options,f=e.original,g=e.url,h=e.oniframeload;if(g&&(this.padding=e.padding=0,c=b("<iframe />"),c.attr({src:g,name:a.id,width:"100%",height:"100%",allowtransparency:"yes",frameborder:"no",scrolling:"no"}).on("load",function(){var b;try{b=c[0].contentWindow.frameElement}catch(d){}b&&(e.width||a.width(c.contents().width()),e.height||a.height(c.contents().height())),h&&h.call(a)}),a.addEventListener("beforeremove",function(){c.attr("src","about:blank").remove()},!1),a.content(c[0]),a.iframeNode=c[0]),!(f instanceof Object))for(var i=function(){a.close().remove()},j=0;j<frames.length;j++)try{if(f instanceof frames[j].Object){b(frames[j]).one("unload",i);break}}catch(k){}b(a.node).on(d.types.start,"[i=title]",function(b){a.follow||(a.focus(),d.create(a.node,b))})},c.get=function(a){if(a&&a.frameElement){var b,d=a.frameElement,e=c.list;for(var f in e)if(b=e[f],b.node.getElementsByTagName("iframe")[0]===d)return b}else if(a)return c.list[a]},c}),window.dialog=a("dialog-plus")}();
	
	
	/*$("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://vinkins.com/PinKongJSorCSS/AutoComplete.css\">");*/
	$("head").append("<style>@charset \"utf-8\";.trans{transition: all 400ms ease-in-out 0s;}#VKautoType{display:block;font-family:\"微软雅黑\";text-align:center;width:230px;}#vkcontainer{display:none}#VKsaveAll{display:block;font-family:\"微软雅黑\";margin:0 auto;text-align:center;width:170px;}#VKsaveAll:hover{text-decoration:none}#VKautoType:hover{text-decoration:none}#VKautoType2:hover{text-decoration:none}#VKautoType{display:block;font-family:\"微软雅黑\";margin:24px auto 77px;text-align:center;}@keyframes vkfirst{0%{background:red}25%{background:#ff0}50%{background:#00f}100%{background:green}}@-moz-keyframes vkfirst{0%{background:red}25%{background:#ff0}50%{background:#00f}100%{background:green}}#labOrderId{color:#FFF;font-family:微软雅黑;font-weight:700;height:30px;width:130px;background:#C50102;animation:myfirst 5s;-moz-animation:vkfirst 2s;animation-iteration-count:infinite;animation-direction:alternate}@keyframes vkfirst{from{background:#C50102;color:#fff}to{background:#ff0;color:#343434}}#vkcontainer{background:none repeat scroll 0 0 #C9C9C9;border-radius:4px;font-size:12px;height:auto;margin:19px auto 0;min-height:20px;overflow:hidden;text-align:center;width:400px}#vkstatus{position:absolute;left:38%;top:670px;background:none repeat scroll 0 0 #eee;border-radius:4px;font-size:12px;height:auto;margin:19px auto 0;min-height:45px;overflow:hidden;text-align:center;width:400px;display:none}.ajaxShow{height:45px;line-height:45px;text-align:center;width:100%}.bbbbbbbbbbbbbbtttttttttttttton{}.button{display:inline-block;*display:inline;zoom:1;padding:6px 20px;margin:0;cursor:pointer;border:1px solid #bbb;overflow:visible;font:normal 13px arial,helvetica,sans-serif;text-decoration:none;white-space:nowrap;color:#555;background-image:-moz-linear-gradient(top,#fefefe,#dbdbdb);transition:background-color .2s ease-out;background-clip:padding-box;border-radius:5px;box-shadow:0 1px 0 rgba(0,0,0,.1),0 2px 2px -1px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.3) inset;text-shadow:0 1px 0 rgba(255,255,255,.9);}.button:hover{background-image:-moz-linear-gradient(top,#fefefe,#efefef);color:#555;}.button:active{background:#e9e9e9;position:relative;top:1px;text-shadow:none;box-shadow:0 1px 1px rgba(0,0,0,.3) inset;}.button.large{padding:12px 30px;text-transform:uppercase;}.button.large:active{top:2px;}.button[disabled],.button[disabled]:hover,.button[disabled]:active{border-color:#eaeaea;background:#fafafa;cursor:default;position:static;color:#999;box-shadow:none !important;text-shadow:none !important;}.FangGenZong:hover{text-decoration: none;transition: all 300ms ease-in-out 0s;background:#2B6D00;color:#fff;}.FangGenZong{transition: all 300ms ease-in-out 0s;display: block; height: 30px; line-height: 30px; background:#fff; border-radius: 5px; text-indent: 1em; text-decoration:none;outline:none;}#ajaxTips2{display:none;border:1px dotted #a5a4ff;color:#001f8e;font-size:12px;height:auto;overflow:hidden;padding:5px;position:absolute;right:830px;text-indent:0em;top:65px;width:400px}.wwwwwwwwwwwwwwwwoooooooooooosssssssssssssshhhhhhhhhhiiiiiiifffffffffffffffeeeeenge{}.ui-dialog{*zoom:1;_float:left;position:relative;background-color:#fff;border:1px solid #999;border-radius:6px;outline:0;background-clip:padding-box;font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.428571429;color:#333;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .15s ease-in-out,opacity .15s ease-in-out;transition:transform .15s ease-in-out,opacity .15s ease-in-out}.ui-popup-show .ui-dialog{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.ui-popup-focus .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1)}.ui-popup-modal .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16pc hsla(0,0%,100%,.3)}.ui-dialog-grid{width:auto;margin:0;border:0 none;border-collapse:collapse;border-spacing:0;background:transparent}.ui-dialog-body,.ui-dialog-footer,.ui-dialog-header{padding:0;border:0 none;text-align:left;background:transparent}.ui-dialog-header{white-space:nowrap;border-bottom:1px solid #e5e5e5}.ui-dialog-close{position:relative;_position:absolute;float:right;top:13px;right:13px;_height:26px;padding:0 4px;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20);cursor:pointer;background:transparent;_background:#fff;border:0;-webkit-appearance:none}.ui-dialog-close:focus,.ui-dialog-close:hover{color:#000;text-decoration:none;cursor:pointer;outline:0;opacity:.5;filter:alpha(opacity=50)}.ui-dialog-title{margin:0;line-height:1.428571429;min-height:16.428571429px;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700;cursor:default}.ui-dialog-body{padding:20px;text-align:center}.ui-dialog-content{display:inline-block;position:relative;vertical-align:middle;*zoom:1;*display:inline;text-align:left}.ui-dialog-footer{padding:0 20px 20px}.ui-dialog-statusbar{float:left;margin-right:20px;padding:6px 0;line-height:1.428571429;font-size:14px;color:#888;white-space:nowrap}.ui-dialog-statusbar label:hover{color:#333}.ui-dialog-statusbar .label,.ui-dialog-statusbar input{vertical-align:middle}.ui-dialog-button{float:right;white-space:nowrap}.ui-dialog-footer button+button{margin-bottom:0;margin-left:5px}.ui-dialog-footer button{width:auto;overflow:visible;display:inline-block;padding:6px 9pt;_margin-left:5px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.428571429;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.ui-dialog-footer button:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;text-decoration:none}.ui-dialog-footer button:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.ui-dialog-footer button[disabled]{pointer-events:none;cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.ui-dialog-footer button{color:#333;background-color:#fff;border-color:#ccc}.ui-dialog-footer button:active,.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;background-color:#ebebeb;border-color:#adadad}.ui-dialog-footer button:active{background-image:none}.ui-dialog-footer button[disabled],.ui-dialog-footer button[disabled]:active,.ui-dialog-footer button[disabled]:focus,.ui-dialog-footer button[disabled]:hover{background-color:#fff;border-color:#ccc}.ui-dialog-footer button.ui-dialog-autofocus{color:#fff;background-color:#428bca;border-color:#357ebd}.ui-dialog-footer button.ui-dialog-autofocus:active,.ui-dialog-footer button.ui-dialog-autofocus:focus,.ui-dialog-footer button.ui-dialog-autofocus:hover{color:#fff;background-color:#3276b1;border-color:#285e8e}.ui-dialog-footer button.ui-dialog-autofocus:active{background-image:none}.ui-popup-top .ui-dialog,.ui-popup-top-left .ui-dialog,.ui-popup-top-right .ui-dialog{top:-8px}.ui-popup-bottom .ui-dialog,.ui-popup-bottom-left .ui-dialog,.ui-popup-bottom-right .ui-dialog{top:8px}.ui-popup-left .ui-dialog,.ui-popup-left-bottom .ui-dialog,.ui-popup-left-top .ui-dialog{left:-8px}.ui-popup-right .ui-dialog,.ui-popup-right-bottom .ui-dialog,.ui-popup-right-top .ui-dialog{left:8px}.ui-dialog-arrow-a,.ui-dialog-arrow-b{position:absolute;display:none;width:0;height:0;overflow:hidden;_color:#ff3fff;_filter:chroma(color=#FF3FFF);border:8px dashed transparent}.ui-popup-follow .ui-dialog-arrow-a,.ui-popup-follow .ui-dialog-arrow-b{display:block}.ui-popup-top .ui-dialog-arrow-a,.ui-popup-top-left .ui-dialog-arrow-a,.ui-popup-top-right .ui-dialog-arrow-a{bottom:-1pc;border-top:8px solid #7c7c7c}.ui-popup-top .ui-dialog-arrow-b,.ui-popup-top-left .ui-dialog-arrow-b,.ui-popup-top-right .ui-dialog-arrow-b{bottom:-15px;border-top:8px solid #fff}.ui-popup-top-left .ui-dialog-arrow-a,.ui-popup-top-left .ui-dialog-arrow-b{left:15px}.ui-popup-top .ui-dialog-arrow-a,.ui-popup-top .ui-dialog-arrow-b{left:50%;margin-left:-8px}.ui-popup-top-right .ui-dialog-arrow-a,.ui-popup-top-right .ui-dialog-arrow-b{right:15px}.ui-popup-bottom .ui-dialog-arrow-a,.ui-popup-bottom-left .ui-dialog-arrow-a,.ui-popup-bottom-right .ui-dialog-arrow-a{top:-1pc;border-bottom:8px solid #7c7c7c}.ui-popup-bottom .ui-dialog-arrow-b,.ui-popup-bottom-left .ui-dialog-arrow-b,.ui-popup-bottom-right .ui-dialog-arrow-b{top:-15px;border-bottom:8px solid #fff}.ui-popup-bottom-left .ui-dialog-arrow-a,.ui-popup-bottom-left .ui-dialog-arrow-b{left:15px}.ui-popup-bottom .ui-dialog-arrow-a,.ui-popup-bottom .ui-dialog-arrow-b{margin-left:-8px;left:50%}.ui-popup-bottom-right .ui-dialog-arrow-a,.ui-popup-bottom-right .ui-dialog-arrow-b{right:15px}.ui-popup-left .ui-dialog-arrow-a,.ui-popup-left-bottom .ui-dialog-arrow-a,.ui-popup-left-top .ui-dialog-arrow-a{right:-1pc;border-left:8px solid #7c7c7c}.ui-popup-left .ui-dialog-arrow-b,.ui-popup-left-bottom .ui-dialog-arrow-b,.ui-popup-left-top .ui-dialog-arrow-b{right:-15px;border-left:8px solid #fff}.ui-popup-left-top .ui-dialog-arrow-a,.ui-popup-left-top .ui-dialog-arrow-b{top:15px}.ui-popup-left .ui-dialog-arrow-a,.ui-popup-left .ui-dialog-arrow-b{margin-top:-8px;top:50%}.ui-popup-left-bottom .ui-dialog-arrow-a,.ui-popup-left-bottom .ui-dialog-arrow-b{bottom:15px}.ui-popup-right .ui-dialog-arrow-a,.ui-popup-right-bottom .ui-dialog-arrow-a,.ui-popup-right-top .ui-dialog-arrow-a{left:-1pc;border-right:8px solid #7c7c7c}.ui-popup-right .ui-dialog-arrow-b,.ui-popup-right-bottom .ui-dialog-arrow-b,.ui-popup-right-top .ui-dialog-arrow-b{left:-15px;border-right:8px solid #fff}.ui-popup-right-top .ui-dialog-arrow-a,.ui-popup-right-top .ui-dialog-arrow-b{top:15px}.ui-popup-right .ui-dialog-arrow-a,.ui-popup-right .ui-dialog-arrow-b{margin-top:-8px;top:50%}.ui-popup-right-bottom .ui-dialog-arrow-a,.ui-popup-right-bottom .ui-dialog-arrow-b{bottom:15px}@-webkit-keyframes ui-dialog-loading{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes ui-dialog-loading{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.ui-dialog-loading{vertical-align:middle;position:relative;display:block;*zoom:1;*display:inline;overflow:hidden;width:2pc;height:2pc;top:50%;margin:-1pc auto 0;font-size:0;text-indent:-999em;color:#666;width:100;text-indent:0;line-height:32;text-align:center\/\/9;font-size:12}.ui-dialog-loading:after{position:absolute;content:\'\';width:3px;height:3px;margin:14.5px 0 0 14.5px;border-radius:100%;box-shadow:0 -10px 0 1px #ccc,10px 0 #ccc,0 10px #ccc,-10px 0 #ccc,-7px -7px 0 .5px #ccc,7px -7px 0 1.5px #ccc,7px 7px #ccc,-7px 7px #ccc;-webkit-transform:rotate(360deg);-webkit-animation:ui-dialog-loading 1.5s infinite linear;transform:rotate(360deg);animation:ui-dialog-loading 1.5s infinite linear;display:none\/\/9}</style>");
	//判断是登记页才执行
   var OJ_QcResultDiv = document.getElementById("J_QcResultDiv");
   
   if(OJ_QcResultDiv){



	   //页面CSS更改
	   $("#J_SearchCondition div span a.ui-btn-s-primary").css({width:'135px',height:'40px',border:'none',display:'inline-block',background:'none'});
	   //折叠订单信息
	   $("#J_OrderInfoDiv_Fold i").trigger('click');


	
	$("#J_QcResultPriceDiv").append("<a class=\"large button\" id=\"VKsaveAll\">保存全部</a>");
	$("#J_QcResultDiv").prepend("<input type=\"button\" class=\"large button\" id=\"VKautoType\" value=\"自动填单和不合格卡\"><div id=\"vkcontainer\"></div>");
	$("body").append("<div id=\"CurrentVersion\" style=\"text-align:center;width:100px;height:25px;line-height:24px;top:0px;right:29px;position:absolute;background-color:#ededed;border:1px solid #999;border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;border-top:none;outline:0;background-clip:padding-box;font-family:Helvetica,arial,sans-serif;font-size:12px;color:#333;-webkit-transition:-webkit-transform .15s ease-in-out,opacity .15s ease-in-out;transition:transform .15s ease-in-out,opacity .15s ease-in-out\">当前插件<span id=\"CurrentVersionSpan\"></span><span id=\"remoteVersion\" style=\"display:none\"></span></div><div style=\"width:475px;height:auto;overflow:hidden;top:0px;right:150px;position:absolute;\" id=\"TopTips\"><img id=\"tmallVersionIMG\" style=\"display:none\" src=\"#######\"/><img src=\"http://vinkins.com/ZHTC/img/tmalltips.png\"/></div><div id=\"ajaxTips2\">loading...</div>");

	   //var Faterbody = $("body").get(0).parent.window.document.body;
	   //$("#fatherBody").append("<div id=\"ajaxTips2\">loading...</div>");
	
	$("#CurrentVersionSpan").text(version);


	   //点击显示取到的AJAX表单
	   $("#J_OrderInfoDiv_Fold").click(function () {
		   $("#vkcontainer").show();
	   });

   }
   
   
   
   
   

   
   
   
   
	
	 //质检套餐选择
	
	selectT=setTimeout(autoselect,1000);
	var category=null;
	function autoselect(){
		var categoryO = $("#J_ApplyInfoDiv_Content table tbody tr td:contains('质检套餐')").addClass("trans").css({color:'#38af03',textIndent:'3em'}).text();
	var categoryO1 = $.trim(categoryO);
	var categoryO2 = categoryO1.split('质检套餐：');
	category= categoryO2[1];
	
	//alert(category);
	$("#J_QcResultDiv div ul li:eq(1) span").each(function(index, element) {
       var CurrentTaoCanO = $(this).text();
	   var CurrentTaoCan = $.trim(CurrentTaoCanO);
	   //$(this).css({background:'red'});
	  
	   if(category==CurrentTaoCan){
		   
		   $(this).css({color:'#008000'}).children("input").trigger('click');	
		   }
	   
    });
	//弃用选择器方法 因为contains语句不精确 比如纺织品会也选择‘含里层的纺织品’$("#J_QcResultDiv div ul li span:contains('"+category+"')").css({color:'#008000'}).children("input").trigger('click');



		if(category.indexOf("学生用品")>=0){
			var specialFillCC = "化学室";

			$("#identifyInputPerson").val(specialFillCC).css({background:'#72C4FF'})
		}

		}

	var FillCC=null; //定义实验室变量
		function taocanTEXT(){
			       
			  
				   
		//var $taocanTIP = $("#J_Abort_Message div.ui-msg div.ui-msg-con span").length;
		var $isInputPage = $("#J_QcResultDiv").length;
		if($isInputPage == 1){//确认是在登记页
		
		 //如果有天猫警告套餐不一致的info  则也弹出正在切换信息
				   
				   if($("#J_Abort_Message").length){
		//alert();
			var d1 = dialog({
					  content: "正在切换正确类目...|键取消",
					  fixed: true
								  });
				  d1.show();								   
						setTimeout(function () {
					  d1.close().remove();
				  }, 1000);
			 }
			}
		
		 
		
		 //$taocanTIP.css({fontSize:'22px',lineHeight:'30px',fontFamily:'Microsoft YaHei',fontWeight:'bold',cursor:'pointer',color:'#3a92ff'}).text('正在切换正确类目...Ese取消');	
		  var d = dialog({
					  content: "自动切换已取消",
					  fixed: true
								  });
		$(document).keydown(function (event) {
		  if (event.keyCode == 220) {
			 clearTimeout(selectT);			  
	 d1.close().remove();
					d.show();								   
						setTimeout(function () {
					  d.close().remove();
				  }, 1000);
			
		  };
		  
	  });
	  
	  
	  //食品室 电气室 轻纺室 填写
	  $("#identifyVerifyAddress").val("珠海");
//根据所属大类具体实验室
	  var CurCategoriesO = $("#J_ApplyInfoDiv_Content tbody tr:eq(6)").children("td").eq(1).addClass("trans").css({color:'#2FB2FF',textIndent:'2em'}).text();
	  var CurCategories = $.trim(CurCategoriesO);
	  console.log("商品所属大类："+CurCategories);
	  switch(CurCategories){
		  case '食品':
		  FillCC = "食品室";
		   //alert(FillCC);	
		  break;
		  case '电器':
		  FillCC = "电气室";
		  break;
		  case '服装':
		  FillCC = "轻纺室";
		  break;
		   case '男装':
		  FillCC = "轻纺室";
		  break;
		   case '女装':
		  FillCC = "轻纺室";
		  break;
		   case '童装':
		  FillCC = "轻纺室";
		  break;
		   case '数码':
		  FillCC = "电气室";
		  break;
		  case '家装':
			  FillCC = "电气室";
			  break;
		  case '保健品':
			  FillCC = "食品室";
			  break;

		  }

			//特别的一些实验室放在autoselect函数里 1s后才执行


			console.log(FillCC);
		  var AlreadyCC = $("#identifyInputPerson").val();
		  
		  //alert(FillCC+" yijin--- "+AlreadyCC);
		  if(FillCC!==AlreadyCC){
			  $("#identifyInputPerson").val(FillCC).css({background:'#6FFF8E'}).prev('strong').text('质检人已经更正');
			  }

			else{

			  $("#identifyInputPerson").css({color:'#31C500'}).prev('strong').text('质检人已检查').css({color:'#31C500'});
		  }
		  
		  
		
			}
		
		
	
	
	
	//判断是登记页才执行
  
   
   if(OJ_QcResultDiv){
	
	//获取远程图片版本  先多次操作他 让它充分加载  random 或者new Date()防止缓存
	
	function allowin(){
		//如果版本不对  则提示
		if(remoteIMGw!==6){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
			$("#VKautoType").remove();
			$("#VKsaveAll").remove();


			
			clearTimeout(selectT);			
			var d = dialog({
				title: '错误',
				content: '与当前页面不匹配,无法运行',
				ok: function () {},
				fixed:true,
				statusbar: '<label><input type="checkbox">不再提醒</label>'
			});
			d.show();
	}////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		else{
			//版本对则运行------------------------------------------------------------
			taocanTEXT();
			
			
			$("#VKautoType").trigger("click");
			
			
			
			//点body一次聚焦sm框
			
			$("body").dblclick(function(){
				$("#sMpsId").focusEnd();
				});
			
		
			
			
			/*防止跟踪链接*/    
	var goodsA= $("#J_ApplyInfoDiv_Content tr:eq(2)").find("td").eq(1).find("a");	
	goodsA.addClass("FangGenZong").attr({title:'防跟踪链接'});
	var OfanggenzongTEXT = goodsA.text();
	goodsA.text(OfanggenzongTEXT+"————防跟踪链接");
	var goodsURl = goodsA.attr("href");
	goodsA.attr({href:'#'}).removeAttr("target");	
	var openner = null;
	goodsA.click(function(){
		openner = window.open(goodsURl);		
		openner.document.title="防跟踪链接打开中....";		
		//e.preventDefault();
		});
	/*防止跟踪链接*/    

			
			
			
			
			
			
			
		
			
			
			}
		
		}
		
var userIconUrl = 'http://vinkins.com/ZHTC/img/tmallver/tmallVersion.png';
	$("#tmallVersionIMG").attr("src", userIconUrl + "?temp=" + Math.random());
	
	var remoteIMGw = $("#tmallVersionIMG").width();
		
		
		
	function remoteIMGZero(){
		
		if(remoteIMGw==0||remoteIMGw==24){
		remoteIMGw = $("#tmallVersionIMG").width();
		
		var timeremote = setTimeout(function(){
			remoteIMGZero();//如果宽度为0 24 就不断运行  知道获取到真正不为0 或者的宽度为止
			},300);
		
		}
		else{
			clearTimeout(timeremote);
			allowin();
			
			}
		
		}
	
	
	//alert(remoteIMGw);
	remoteIMGZero();
	
	
    
	
	 
   }
	
	//加入AJAX状态栏 默认隐藏
		$("#VKautoType").after("<div id=\"vkstatus\"><div class=\"ajaxShow\"></div></div>");
    
   
	
	
	
	//质检套餐选择END
	
		var SMnum_org = $("#J_ApplyInfoDiv_Content table tbody tr td:contains('抽检编号')").next("td").text();
		var SMnum = $.trim(SMnum_org);
	
	$("#J_QcResultDiv h2").text("请核对SM编号："+SMnum).hide();
	document.body.title=SMnum;

	$.ajax({
		type:'GET',
		url:'http://vinkins.com/ZHTC/changeCtgry/returntxt.php',
		success:function(data){

			var smTips = data;
			$("#ajaxTips2").text(smTips);
			var smTipsLen = smTips.indexOf(SMnum);

			if(smTipsLen>=0&&SMnum!=""){
				console.log("smTipsLen="+smTipsLen);
				$("#ajaxTips2").show().css({position:'fixed',color:'red'});

			}
		},
		error:function () {
			alert("连接远端套餐更改备注信息失败");
		}



	});



	//滚动屏幕到报告编号处

	

	$("#labOrderId").css({width:'130px'}).bind("change",function(){
		$(this).css({animation:'none',background:'none',color:'#000'});
		});	
	//上为最后给绑定值变化事件
	
//加入id，定位到填表的table   注意这里默认是'质检项目'   'SM编号是上面做自动选套餐是更改的'
			$("#J_QcResultDiv h2:contains('SM编号')").nextAll("div").eq(1).attr({id:'VKbiaodan'});		
	//console.dirxml(TR);
	
	
	
	
	
	
	
	/*-------------键盘快捷键的项目取消等-------------------------*/	
		var AllTextArea = $("#VKbiaodan textarea");
		var AllTextAreaLenth = $("#VKbiaodan textarea").length;
		
		for(i=0;i<=AllTextAreaLenth;i++){
			
            AllTextArea.eq(i).click(function(){				
			var isFocus= $(this).is(":focus");			
			if(isFocus==true){  
			$(this).addClass("thisfoucus");
				$(document).keydown(function (e) {
					
					var e = e || event;
					  if(e.keyCode==114) {//按下F3  shift+c则是 79&&e.altKey
				  　 　 setTimeout(function(){
							 						  
						//这里不能用this  用则指向的是键盘
						
						$(".thisfoucus").parents("tr").map(function(index, element) {
                        CancelVK($(this));
                    });
						
					
					
						 $(".thisfoucus").removeClass("thisfoucus");
						
						  
						  },0);
						  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
						 
					  }
					  
					  /*-------商标一致-----------*/
		
					  else if(e.keyCode==119) {//按下F8  shift+c则是 79&&e.altKey					  	
			
				  　 　 setTimeout(function(){
							 						  
						//这里不能用this  用则指向的是键盘
						
						$(".thisfoucus").parents("tr").map(function(index, element) {
                        CancelVK($(this));
                    });
						
					
					
						 $(".thisfoucus").removeClass("thisfoucus");
						
						  
						  },0);
						  e.preventDefault ? e.preventDefault() : (e.returnValue = false);						 
					  }
	 /*-------商标一致END-----------*/
					  

					else if (e.keyCode==115 ){ //按下F4  buhege
					
				  　 　 setTimeout(function(){
							 						  
						//这里不能用this  用则指向的是键盘
										
					$(".thisfoucus").parents("tr").map(function(index, element) {
                        UnqualifiedVK($(this),category,FillCC);
                    });
													
						 $(".thisfoucus").removeClass("thisfoucus");
						
						  
						  },0);
						  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
					  
					} 
					
					//F7 合格
					else if (e.keyCode==118){ //按下f7 合格
					
				  　 　 setTimeout(function(){
							 						  
						//这里不能用this  用则指向的是键盘
									
					$(".thisfoucus").parents("tr").map(function(index, element) {
                        qualifiedVK($(this));
                    });
													
						 $(".thisfoucus").removeClass("thisfoucus");
						
						  
						  },0);
						  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
					  
					
					} 
					
					
					
	  });
			  }	
			  
			  $(this).blur(function(){
				  $(this).removeClass("thisfoucus");
				  });
			  
			  		
			});
        
			}
		/*-------------键盘快捷键的项目取消等END-------------------------*/	
	
	
	
	
	
	
	
	$("#VKautoType").click(function(e){
		$(this).attr({disabled:''});
		$("#vkstatus").fadeIn('normal').html("<div class=\"ajaxShow\"><span id=\"ajaxinfoSpan\">执行中...</span><img src=\"http://vinkins.com/ZHTC/img/loading.gif\" width=\"100\" height=\"16\" alt=\"\"/></div>");
		
		
		var loading1 = setTimeout(function(){
			$("#ajaxinfoSpan").text("检查套餐类目....");

			var loading2 = setTimeout(function(){
						$("#ajaxinfoSpan").text("正在通用选择...");
						
						var loading3 = setTimeout(function(){
						$("#ajaxinfoSpan").text("正在检查填过表单...");
						
						var loading4 = setTimeout(function(){
						$("#ajaxinfoSpan").text("检查三行结构...");
						
						var loading5 = setTimeout(function(){
						$("#ajaxinfoSpan").text("检查有无特殊结构...");
						VKanalyse2();
						},10);//检查三行结  250
						
						
						},10);//正在检查填过表100
						
						},10);//通用50
						
						
						},10);//50

			
			},10);//150
		
		
		function VKanalyse2(){
			setTimeout(function(){
				

			
		//通用合格全部合格选择			原理是 只有没被取消.available class的td都会被填合格
		try{
			var AllTR = $("#VKbiaodan tbody tr");
			var AllTD = $("#VKbiaodan td");
			//给每个TD添加avilable   等到检测到已经填过时  改成not avilable   使得二次填表选择器找不到他
			var AllTDLen= $("#VKbiaodan td").length;
			AllTD.each(function(){
				$(this).addClass("available");				
				});
			$("#VKbiaodan textarea").each(function(){

				$(this).addClass("availableTextArea");

			});
			
			var trLenth = AllTR.length-1; //减去个表头  不然FOR循环多一次会报错
		    var HasfilledArr = [];
			var someoneHasfilled = false;
			
			for(i=0;i<=trLenth;i++){
				//如果有表单有内容就不更改	
				AllTR.eq(i).attr("vkTR","");
				//检测遍历到的TD如有"标识标志（"这样的字样就取消 因为很可能是重复的

				var ItemName = AllTR.eq(i).children("td").eq(1).text();
				var ItemNameIsBiaoZhi = ItemName.indexOf("标识标志（");
				var liwai1 = ItemName.indexOf("标识标志（CCC");
				var ItemNameIsBiaoZhi2 = ItemName.indexOf("耐热（");
				var liwai2 = ItemName.indexOf('标识标志（普通LED灯');
				if(ItemNameIsBiaoZhi2>=0){alert("耐热可能有两个")};
				if(ItemNameIsBiaoZhi>=0&&liwai1==-1&&liwai2==-1){
					console.log('检测到有ItemNameIsBiaoZhi这样的字样 很可能是多余的 所以取消它 ');

					try
					{AllTR.eq(i).children("td").eq(1).css({background:'#F584D2'}).parent("tr").map(function(index, element) {
						CancelVK($(this));
					});
					}
					catch(err){}

				}

				//注意这里有的地方坑爹  一般情况textarea在eq4处  有的 eq5、eq3的TD才有textarea  所以要加个判断是否有textarea
				var  eq3TextareaLenth = AllTR.eq(i).children("td").eq(3).find("textarea").length;
				var  eq4TextareaLenth = AllTR.eq(i).children("td").eq(4).find("textarea").length;
				var  eq5TextareaLenth = AllTR.eq(i).children("td").eq(5).find("textarea").length;
						
				
				var whereTextarea = null;
				if(eq3TextareaLenth==1){
					whereTextarea = 3;
					}
				if(eq4TextareaLenth==1){
					whereTextarea = 4;
					}
				if(eq5TextareaLenth==1){
					whereTextarea = 5;
					}
					//alert(whereTextarea);
				
				var ISfulfil = AllTR.eq(i).children("td").eq(whereTextarea).attr("hastextarea","").find("textarea").val();	
				var trimISfulfil = $.trim(ISfulfil);
				var TDwithTextarea = AllTR.eq(i).children("td").eq(whereTextarea);

				if(trimISfulfil==""){
					//如果表单没填过  那么开始执行了	
					//alert("没填过");					
					TDwithTextarea.attr("vkTD","").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
					//alert('没填过的已运行完');
					//alert(i);
					}
				
				else{
					//alert("填过");
					AllTR.eq(i).children("td").eq(whereTextarea).find("textarea").removeClass('availableTextArea');

					someoneHasfilled = true;
					
					var fillxuhao = TDwithTextarea.parent("tr").attr("hasfilledTR","").children("td").eq(0).text();
					HasfilledArr.push(fillxuhao);//将已经填写过得行数序号push进数组
					
					TDwithTextarea.attr({class:'xuanran'});
					TDwithTextarea.siblings("td").css({backgroundColor:'#c0ffc8'});
					var FulfileNAME =TDwithTextarea.siblings("td").eq(1).text();
					//删除原有TD 的项目名字
					TDwithTextarea.siblings("td").eq(1).text("");
					//删除原TD里available的Class 让下来的js里选择不到 则不改已有内容的项目
					TDwithTextarea.siblings("td").removeClass("available");
					
					TDwithTextarea.parent("tr").css({position:"relative"}).append("<span style='position: absolute; top: 35px; left: 94px;'>"+FulfileNAME+"<b style='font-size:12px;'>【保持已填内容】</b></span>");
					
					
						
					//alert("我是已经填过的i="+i);
					}
					
				}//for结束
				//alert(someoneHasfilled);
				if(someoneHasfilled == true){  //如果存在填过的单  再提示
				var d = dialog({
					  content: "请注意序号"+HasfilledArr+"已经填过，标记为红色背景，并保持已填内容",
					  fixed: true
								  });

					d.show();								   
						setTimeout(function () {
					  d.close().remove();
				  }, 2000);
					}
			
			}catch(err){}
		//通用全部合格选择END
		
			  

		
			




		//--------------------------------------------------具体项目规则  注意用.available:contains选择器-------------------
		//7.24糕点  标识标志质量问题

		try
				{
					$(".available:contains('标识标志质量问题')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });

				}
				catch(err){}
		
		
		


		
		
		try
				{
										
					$(".available:contains('志贺氏菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("未检出").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
				$(".available:contains('志贺氏菌')").next("td").text('5次未检出').css({backgroundColor:'#DDEAFD',boxShadow:'1px 1px 0 #CCCCCC',cursor:'pointer'}).text("5次未检出").attr({id:'wuci'});
		
		$("#wuci").click(function(){
			$(this).css({backgroundColor:'#C0FFC8',boxShadow:'none',cursor:'default'});
			$(".available:contains('志贺氏菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("5次未检出").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
			$(".available:contains('志贺氏菌')").siblings("td").find("select").get(0).selectedIndex=5;			
				
				});
				
				}
		catch(err){}
		
		
		try
				{
										
					$(".available:contains('沙门氏菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("5次未检出").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
				$(".available:contains('沙门氏菌')").siblings("td").find("select").get(0).selectedIndex=5;
				
				}
			catch(err){}
		
		try
				{
					$(".available:contains('金黄色葡萄球菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("5次检测<10").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
				$(".available:contains('金黄色葡萄球菌')").siblings("td").find("select").get(0).selectedIndex=5;
				}
		catch(err){}
				


				try{
				    $(".available:contains('电气间隙')").next("td").text('不合格').css({backgroundColor:'#DDEAFD',boxShadow:'1px 1px 0 #CCCCCC',cursor:'pointer'}).click(function(){
					
					$(this).css({backgroundColor:'#C0FFC8',boxShadow:'none',cursor:'default'}).next("td").find("select").get(0).selectedIndex=1;
					$(this).nextAll("td").eq(1).find("textarea").val("一次电路与二次电路之间电气间隙要求值(mm)≥≥4.0×1.48,电气间隙测量值(mm)8888;\n一次电路与二次电路之间爬电距离要求值(mm)≥≥5.92爬电距离测量值(mm)8888;").css({height:'140px'});
					$(this).nextAll("td").eq(2).find("#qcItemResultCode1").get(0).selectedIndex=2;
					
					});				
				}catch(err){}
				try{
					$(".available:contains('电气结构检查')").next("td").text('不合格').css({backgroundColor:'#DDEAFD',boxShadow:'1px 1px 0 #CCCCCC',cursor:'pointer'}).click(function(){

						$(this).css({backgroundColor:'#C0FFC8',boxShadow:'none',cursor:'default'}).next("td").find("select").get(0).selectedIndex=1;
						$(this).nextAll("td").eq(1).find("textarea").val("一次电路与二次电路之间电气间隙要求值(mm)≥≥4.0×1.48,电气间隙测量值(mm)8888;\n一次电路与二次电路之间爬电距离要求值(mm)≥≥5.92爬电距离测量值(mm)8888;").css({height:'140px'});
						$(this).nextAll("td").eq(2).find("#qcItemResultCode1").get(0).selectedIndex=2;

					});
				}catch(err){}

			try{
				$(".available:contains('工作温度下')").next("td").text('不合格').css({backgroundColor:'#DDEAFD',boxShadow:'1px 1px 0 #CCCCCC',cursor:'pointer'}).click(function(){
					
					$(this).css({backgroundColor:'#C0FFC8',boxShadow:'none',cursor:'default'}).next("td").find("select").get(0).selectedIndex=1;
					$(this).nextAll("td").eq(1).find("textarea").val("工作温度下的电气强度测试中,电源两极与金属或带电部件之间 3000V 时击穿");
					$(this).nextAll("td").eq(2).find("#qcItemResultCode1").get(0).selectedIndex=2;
					
					});	
				}catch(err){}
				
				try{
				$(".available:contains('抗电强度')").next("td").text('不合格').css({backgroundColor:'#DDEAFD',boxShadow:'1px 1px 0 #CCCCCC',cursor:'pointer'}).click(function(){
					
					$(this).css({backgroundColor:'#C0FFC8',boxShadow:'none',cursor:'default'}).next("td").find("select").get(0).selectedIndex=1;
					$(this).nextAll("td").eq(1).find("textarea").val("抗电强度试验和脉冲试验中,一次电路与二次电路之间3000V 时击穿");
					$(this).nextAll("td").eq(2).find("#qcItemResultCode1").get(0).selectedIndex=2;
					
					});	
				}catch(err){}
				
			/*	try{
					$(".available:contains('商标')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val('页面描述商标与实物商标一致 ').parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
					
					}
				catch(err){}*/
				
				try{$(".available:contains('标识标志')").not(".available:contains('标识标志是否合格')").parent("tr").children("td:eq(0)").attr({id:'biaozhibuhege'});
				}
			catch(err){}
			/*------食品新加商标开始-----*/
				try				
				{					
					$(".available:contains('QS')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
					
				}
				catch(err){}
				try				
				{					
					$(".available:contains('健字号')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
					
				}
				catch(err){}
				try				
				{					
					$(".available:contains('生产日期')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
					
				}
				catch(err){}
				try				
				{					
					$(".available:contains('临界保质期商品')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
					
				}
				catch(err){}
				try				
				{					
					$(".available:contains('页面虚假宣传')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
					
				}
				catch(err){}
				try				
				{					
					$(".available:contains('认证问题')").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
					
				}
				catch(err){}
				
				
				
				try//因为有两个其他 所以用each
				{$(".available:contains('其他')").each(function(index, element) {
					
					$(this).css({backgroundColor:'#c0ffc8'});
					
                    $(this).parent("tr").map(function(index, element) {
                        WuVK($(this));
                    });
				});}
				catch(err){}
				
				/*------食品新加商标结束-----*/
				try
				{$(".available:contains('地西泮')").css({backgroundColor:'#C0FFC7'}).parent("tr").map(function(index, element) {
                CancelVK($(this));
            });
				}
				catch(err){}
				
				try
				{$(".available:contains('内酰胺酶')").css({backgroundColor:'#C0FFC7'}).parent("tr").map(function(index, element) {
                CancelVK($(this));
            });
				}
				catch(err){}
				
				
				
				try
				{$(".available:contains('磺胺二甲嘧啶')").css({backgroundColor:'#C0FFC7'}).parent("tr").map(function(index, element) {
                CancelVK($(this));
            });
				}
				catch(err){}
				
			
			
			
					/*try{
			
				$(".available:contains('纤维含量')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").eq(4).find("textarea").val('检测材质结果：').parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
		
			
			}
		catch(err){}*/
		try
				{$(".available:contains('特殊纤维含量')").css({backgroundColor:'#C0FFC7'}).parent("tr").map(function(index, element) {
                CancelVK($(this));
            });
				}
				catch(err){}
				
					try
				{$(".available:contains('起毛起球')").css({backgroundColor:'#C0FFC7'}).parent("tr").map(function(index, element) {
                CancelVK($(this));
            });
				}
				catch(err){}
				//TODO 新添加具体项目规则


			










				
				$(".xuanran").css({backgroundColor:"#ffdada"});//对应之前 渲染那些已经填过的表单为红色


				
				
				
				/*开始AJAX*/
				$("#ajaxinfoSpan").text("Loading...");
				$("#vkcontainer").load("http://localhost/smphp/"+SMnum_org+".php",{limit: 25},
			function(response, status, xhr) {			  
           if (status == "error") {
               //$("#vkcontainer").html("<div class=\"ajaxShow\">未取到此报告</div>").show().css({color:'red'});
			   $("#labOrderId").val("取编号出错");
			   $("#vkstatus div.ajaxShow").text("未取到此报告,aferBIGajax函数未执行").css({color:'red'});
            }
			 
			 if (status == "complete"){ $("#vkstatus .ajaxShow").text("complete状态");}
			 if (status == "success"){
				 $("#ajaxinfoSpan").text("ajax sccs! 951begin...");
				 $("#vkcontainer").css({width:'800px'});

				 //一、开始填报告编号
				 //这里的报告编号可能在eq2或者eq3里 把两个都取 反正一个是空的
				 var BaoGaoBianHao_1 = $("#vkcontainer .MsoNormal span:contains('报告编号')").parents("p").find("span").eq(2).attr({vk:'red'}).text();
				 var BaoGaoBianHao_2 = $("#vkcontainer .MsoNormal span:contains('报告编号')").parents("p").find("span").eq(3).attr({vk:'red'}).text();
				 var BaoGaoBianHao=$.trim(BaoGaoBianHao_1+BaoGaoBianHao_2);
				 var baogaoreg = new RegExp("^[0-9]*$");
				 if(!baogaoreg.test(BaoGaoBianHao)){
					 alert("取到的报告编号不是数字");
				 }
				 if(BaoGaoBianHao==""){alert("取到的报告编号为空值")};
				//alert(BaoGaoBianHao);
				$("#J_QcResultDiv div ul li span strong:contains('实验室报告编号：')").next("input").val(BaoGaoBianHao);
				$("#labOrderId").css({animation:'none',background:'none',color:'#11AB80'});
				 //一、开始填报告编号END

				 //二、填写实验室 在211行

				 //三、开始其他  TODO 优化遍历


				var AJAXarr=[];
				var manualTEXTjson = {'铝的':'铝','苯甲酸':'苯甲酸','标识标志':'标签','酸价':'KOH','黄曲霉毒素':'黄曲霉毒素','脂肪酸组成':'亚油酸','苯并':'苯并','金黄色':'金黄色','甜蜜':'甜蜜','山梨酸':'山梨酸','脱氢乙酸':'脱氢乙酸','合成着色剂':'亮蓝','碱性橙':'碱性橙','工作温度下':'工作温度下','稳定性':'稳定性','耐潮湿':'耐潮湿','电源连接':'电源连接','标识标志':'标志','耐热':'耐热','马源':'马源','牛源':'牛源','猪源':'猪源','鸭源':'鸭源','驴源':'驴源','狗源':'狗源','猫源':'猫源','狐狸源':'狐狸源','端子':'端子','骚扰电压':'骚扰电压','骚扰功率':'骚扰功率','传导骚扰':'传导骚扰','标记和说明':'标志','CCC':'CCC认证 ','电气间隙':'电气间隙','输入功率':'输入功率','结构':'结构','铅':'铅','铬':'铬','镍':'镍','镉':'镉','砷':'砷','锑':'锑','酚':'酚','乙酸':'乙酸','乙醇':'乙醇','正己烷':'正己烷','蒸发残渣（水）':'水，','PH':'pH','可分解':'可分解','起毛':'起毛','商业无菌':'商业无菌','固形物':'固形物','pH':'pH','起球':'起球','元器件':'元件','防触电保护':'对触及','发热':'发热','接地':'接地','对触及':'对触及','机械强度':'机械强度','内部布线':'内部布线','元件':'元件','螺钉':'螺钉','开关外壳':'外壳提供','绝缘材料':'绝缘材料','测试静电':'静电放电','电源端传导':'电源端子','乙酰磺胺酸钾':'乙酰磺胺酸钾','邻苯二甲酸':'邻苯二甲酸','乙酰磺胺酸钾':'乙酰磺胺酸钾','对地泄漏电流':'接触电流和保护导体电流','AAA':'AAA','标记':'标记','外部接线':'外部接线和内部接线','硝基呋喃类药物':'呋喃','苏丹红':'苏丹红','对地泄漏电流':'接触电流和保护导体电流','阻燃性能':'防火','互换性':'互换性','意外接触带电部件的防护':'意外接触带电部件的防护','潮湿处理后的绝缘电阻和介电强度':'潮湿处理后的绝缘电阻和介电强度','灯头温升':'灯头温升','防火与防燃':'防火与防燃','故障状态':'故障状态','标识标志（普通LED灯（GB 24906-2010））':'标志','结构':'结构','外部接线和内部接线':'外部接线和内部接线','耐热':'耐热','耐火':'耐火','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa','aaa':'aaa',};  //键名是用来去匹配天猫的词汇(用的是indexof 所以可以模糊匹配) 如果匹配到结果 则修正为后面的键值  才去搜索AJAX的词汇





				 //将“检验项目”周边的文字push进数组  注意这里有些食品可能检验项目不填或者直接没有
				 try{
					 try{$("#vkcontainer .Section1 span:contains('经检验')").attr({id:'jlSpan'}).parent("p").attr({id:'JianYanJieLunP'});}catch(err){}

					 try{$("#vkcontainer .Section0 span:contains('经检验')").attr({id:'jlSpan'}).parent("p").attr({id:'JianYanJieLunP'});}catch(err){}
					 try{$("#vkcontainer .Section2 span:contains('经检验')").attr({id:'jlSpan'}).parent("p").attr({id:'JianYanJieLunP'});}catch(err){}

					 var jyxmNextAllP = $("#JianYanJieLunP").nextAll("p").addClass("jyxmNextAllP");

					 var JianYanJieLun1 =$("#JianYanJieLunP").text();
					 var JianYanJieLun2 =jyxmNextAllP.eq(0).text();
					 var JianYanJieLun3 =jyxmNextAllP.eq(1).text();
					 var JianYanJieLun4 =jyxmNextAllP.eq(2).text();
					 var JianYanJieLun5 =jyxmNextAllP.eq(3).text();
					 var JianYanJieLun6 =jyxmNextAllP.eq(4).text();
					 var JianYanJieLun7 =jyxmNextAllP.eq(5).text();
					 var JianYanJieLun8 =jyxmNextAllP.eq(6).text();
					 var JianYanJieLun9 =jyxmNextAllP.eq(8).text();
					 var JianYanJieLun10 =jyxmNextAllP.eq(9).text();
					 var JianYanJieLun11 =jyxmNextAllP.eq(10).text();
					 var JianYanJieLun12 =jyxmNextAllP.eq(11).text();


					 var JianYanJieLunO =  JianYanJieLun1+ JianYanJieLun2+ JianYanJieLun3+ JianYanJieLun4+ JianYanJieLun5+ JianYanJieLun6+ JianYanJieLun7+ JianYanJieLun8+ JianYanJieLun9+ JianYanJieLun10+ JianYanJieLun11;
					 //alert(JianYanJieLunO);
					 var JianYanJieLunOO = $.trim(JianYanJieLunO);
					 JianYanJieLunOOO= JianYanJieLunOO.replace(/\r|\n/ig,"");//先除一次换行
					 JianYanJieLunOOOO = JianYanJieLunOOO.replace(/\s/g,"");//再去除一次空格
					 var JianYanJieLun=JianYanJieLunOOOO.replace(/\?/g,"");

					 console.log("我是待检测有几个'不'字的JianYanJieLun字段："+JianYanJieLun);

					 //是否有CCC
					 var isCCC = JianYanJieLun.indexOf('无CCC');

					 var isCCCtext ="";
					 if(isCCC>=0){
						 isCCCtext="无CCC标识";

						 try{


							 var aaa = $(".available:contains('CCC')").length;

							 $(".available:contains('CCC')").css({backgroundColor:'#B690E0'}).parent("tr").map(function(index, element) {
								 UnqualifiedVK_detail($(this),1);
							 });
						 }catch(err){}



					 }

					 var NoTextLen = 0;

					 try{

						 vkreg= eval("/"+"不"+"/ig");//没有这个正则  match只能返回1
						 NoTextLen = JianYanJieLun.match(vkreg).length;

					 }catch(err){};//这里match如果找不到关键字就直接出错不运行后面js了 坑爹
					 // function patch(re,allTEXT){ //参数1正则式，参数2字符串
						//  vkreg= eval("/"+re+"/ig"); //不区分大小写，如须则去掉i,改为 re=eval_r("/"+re+"/g")
						//  var nolen = JianYanJieLun.match("食").length;
						//  alert(nolen);
						//  return nolen;
					 // }
                     //
					 // var NoTextLen = patch("不",JianYanJieLun);
					 // alert("不字有"+NoTextLen);



				 }catch(err){}


				 // 其实不用遍历 直接取vkcontainer的txt  然后只留英文字符 和汉字就行

				console.time("text获取执行时间");
				 //先删除取到的报告里的style标签
				 $("#vkcontainer style").remove();
				var vkcontainerTEXTo = $("#vkcontainer").text();
				 var vkcontainerO1 = $.trim(vkcontainerTEXTo);

				 //match 汉字和英文
				 var dictionaryArr = vkcontainerO1.match(/[\u2E80-\u2EFF\u2F00-\u2FDF\u31C0-\u31EF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FBF\uF900-\uFAFF\uFE30-\uFE4F\a-zA-Z]+/g);

				 var dictionaryString = dictionaryArr.join(""); //将数组元素用某个字符连接成字符串




				console.log('所有文字大搜索：'+dictionaryString);
				console.timeEnd("text获取执行时间");


				 var isBiaoQian = dictionaryString.indexOf('标签');
				 var isBiaoZhi = dictionaryString.indexOf('标识');
				 var isBiaoJi = dictionaryString.indexOf('标记');
				 var Biao = isBiaoQian+isBiaoZhi+isBiaoJi;
				 if(Biao==-3){
					 if(FillCC=="食品室"){alert('没有检测任何标签')};
				 }



				 var AJAXarrString = dictionaryString;
				 //判断【不合格】【检出猪源性】字否在数组中
				//console.log(AJAXarrString);
					//var BuHeGe = AJAXarrString.indexOf('不合格');
				    var pig = AJAXarrString.indexOf('检出猪源性');
					//console.log(BuHeGe);
				 //console.log("检测出有"+NoTextLen+"个不字");
					if(NoTextLen>0||pig>=0){
						$("#VKbiaodan table.table thead tr th:contains('检测结果')").text('▲结论不： '+NoTextLen+'||||'+isCCCtext).addClass('buhegeNOTICE').css({color:'red',fontWeight:'bold'});
						$("#J_QC_MENU_TOTAL_PRICE").text('▲cnclsn'+NoTextLen+'illgl '+isCCCtext).addClass('buhegeNOTICE2').css({color:'red',fontWeight:'bold',margin:'0 auto',display:'block',textAlign:'center'});
						//$("#VKsaveAll").css({background:'#FF9393'});
						}
						
						else{
							console.log('未在AJAXarr里检测到 不 或者 检出猪源性 字样');
							}
				
				 
				 //console.log(AJAXarr);
				 
				 //看天猫表单里的  遍历天猫表单里的项目名 去匹配已经存好的JAXA项目名数组 看是否在数组中

				 
				 $("#VKbiaodan td").each(function(index, element) {
					 $(this).css({color:'#505050',fontSize:'12px'});
					 
                    if($(this).children().length){
						  //含有子元素  说明不是项目名称的TD 什么也不做
					  }else{
						  var BiaodanTDtextOO= $(this).text();
						  //加强去空格
						  
					var BiaodanTDtextO = $.trim(BiaodanTDtextOO);
					 var BiaodanTDtext=BiaodanTDtextO.replace(/\?/g,"");
					
						if(BiaodanTDtext!==""){
					
					//再次人工修正些不匹配的字段
					
					//遍历人工各别规定的搜索词JSON--manualTEXTjson  用JSON去匹配当前BiaodanTDtext 看是否包括在BiaodanTDtext字符串里
					
					for(var key in manualTEXTjson){
						
						
						var keyString = key.toString();
						var isIN = BiaodanTDtext.indexOf(keyString);
						//alert($.type(keyString)+'biaodan:'+$.type(BiaodanTDtext));
						
						
						if(isIN>=0){  //因为如果在字符串刚开始找到就是0
							//alert('天猫key现在是:'+keyString+'BiaodanTDtext修正优化后的搜索词是'+BiaodanTDtext+'前者在后者里面吗:'+isIN);
							BiaodanTDtext = manualTEXTjson[key].toString();
							
							//alert('新的去数组搜索的搜索词是：'+BiaodanTDtext);
							}
						
						}
					//for in 循环结束





					
					
					//判断BiaodanTDtext是否在大搜索中
					var ThreeOrOne = AJAXarrString.indexOf(BiaodanTDtext);

					//判断BiaodanTDtext是否在检验结论中  如果在则说明不合格   这里把检验结论里的数字去掉 不然会匹配
							var reg2 =  new RegExp(/[1-9]\d*/g);  //不加冒号 用斜杠 包裹正则 最后写g

							var JianYanJieLun2 = JianYanJieLun.replace(reg2,'');
							//console.log(JianYanJieLun2);

							if(BiaodanTDtext!=="不合格"&&BiaodanTDtext!=="CCC认证"&&BiaodanTDtext!=="标志"){  //排除TD内容是“不合格”三个字的 有些电器做的按钮是这样
								var IsInJieLun = JianYanJieLun2.indexOf(BiaodanTDtext);

							}
							else{var IsInJieLun = -1}

					//console.log(AJAXarr);
					//console.log("ThreeOrOne="+ThreeOrOne+'此时BiaodanTDtext='+BiaodanTDtext);
					//alert(ThreeOrOne);
					if(ThreeOrOne>=0){
						$(this).css({color:'green',fontWeight:'bold'}).attr({charge:'true'});//.parent("tr").children("td").css({backgroundColor:'#C0FFC8'})
						}
					if(IsInJieLun>=0){
						$(this).css({color:'#CA0000',fontWeight:'bold'}).attr({charge:'true'}).parent("tr").map(function(index, element) {

							try{

								UnqualifiedVK($(this),category,FillCC);

							}catch(err){}


						});//.parent("tr").children("td").css({backgroundColor:'#C0FFC8'})



							}
					
					
					
					}
					
					  }
					 

 });

				
				 
				 $("#vkstatus .ajaxShow").text("afterBIGajax未执行完全");

				 aferBIGajax();
				 
				 }//success END
				
					
                });//each OVER



//中键 除换行  并且把空格换成换行符

				$("#VKbiaodan textarea").each(function(){

					$(this).click(function(e){
						//这里鼠标左键是1 中键是2 左键没值
						if(e.which==2){

							// var result=str.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
							// return  result.replace(/\s/g,"");//去除文章中间空格

							var beforeForm = $(this).val();
							var afterForm_O =beforeForm.replace(/\?/g,"");
							afterFormo= afterForm_O.replace(/\r|\n/ig,"");//先除一次换行
							afterFormoo = afterFormo.replace(/\s/g,"");//再去除一次空格
							console.log("替换`前的文本是："+afterFormoo);
							afterForm = afterFormoo.replace(/`/g,"；\n");//把文章中间`换成；+换行符    JS 没有提供replaceAll  使用正则表/g可以达成ReplaceAll 的效果  str.replace(/word/g,"Excel")
							console.log("替换`后的文本是："+afterForm);


							$(this).val(afterForm);

						}


					});

				});



				function aferBIGajax() {


				//标识标志  来自fangzhi.js

				 if(FillCC=='轻纺室'){

					 try{
						 $("#vkcontainer div.Section0 table tbody tr td p.p0 span:contains('检验方法')").css({backgroundColor:'red'}).parents("tr").attr({id:'biaozhiTRfirst'});
						 $("#biaozhiTRfirst").parent("tbody").attr({id:'BaoGaoDanTbody'});
						 var BadBiaoZhiArr=[];
						 var $biaozhiTR = $("#biaozhiTRfirst").siblings("tr");
						 for(i=0;i<7;i++){
							 var hangshu = i+1;
							 //alert('第'+hangshu+'行');
							 $biaozhiTR.eq(i).css({backgroundColor:'#a9fff2'});
							 var bufuheVK = $biaozhiTR.siblings("tr").eq(hangshu).find("p:contains('不符合要求')").length;
							 //alert('不符合要求'+bufuheVK);
							 var weibiaozhuVK = $biaozhiTR.siblings("tr").eq(hangshu).find("p:contains('未标注')").length;
							 //alert('未标注'+weibiaozhuVK);
							 var jianyiVK = $biaozhiTR.siblings("tr").eq(hangshu).find("p:contains('建议根据')").length;
							 //alert('建议'+jianyiVK);
							 //如果检测到有不符合的字样
							 if(bufuheVK==1){
								 switch(hangshu){
									 case 1:
										 biaozhiLEFT = '制造者名称和地址';
										 break;
									 case 2:
										 biaozhiLEFT = '产品名称';
										 break;
									 case 3:
										 biaozhiLEFT = '产品号型或规格';
										 break;
									 case 4:
										 biaozhiLEFT = '纤维成分及含量';
										 break;
									 case 5:
										 biaozhiLEFT = '维护方法';
										 break;
									 case 6:
										 biaozhiLEFT = '执行的产品标准';
										 break;
									 case 7:
										 biaozhiLEFT = '安全类别';
										 break;
								 }
								 var lastBIAOZHI1 = "【"+biaozhiLEFT+"】"+"不符合要求";
								 //alert(lastBIAOZHI1);
								 BadBiaoZhiArr.push(lastBIAOZHI1);
							 }

							 if(weibiaozhuVK==1){
								 switch(hangshu){
									 case 1:
										 biaozhiLEFT = '制造者名称和地址';
										 break;
									 case 2:
										 biaozhiLEFT = '产品名称';
										 break;
									 case 3:
										 biaozhiLEFT = '产品号型或规格';
										 break;
									 case 4:
										 biaozhiLEFT = '纤维成分及含量';
										 break;
									 case 5:
										 biaozhiLEFT = '维护方法';
										 break;
									 case 6:
										 biaozhiLEFT = '执行的产品标准';
										 break;
									 case 7:
										 biaozhiLEFT = '安全类别';
										 break;
								 }
								 var lastBIAOZHI2 = "【"+biaozhiLEFT+"】"+"未标注";
								 //alert(lastBIAOZHI2);
								 BadBiaoZhiArr.push(lastBIAOZHI2);
							 }

							 if(jianyiVK==1){

								 var lastBIAOZHI3 = '【维护方法】建议根据GB/T 8685-2008标注正确';
								 //alert(lastBIAOZHI3);
								 BadBiaoZhiArr.push(lastBIAOZHI3);
							 }

						 }
						 //for循环结束
						 //alert(BadBiaoZhiArr);
						 var buhegeLength = BadBiaoZhiArr.length;
						 //alert(buhegeLength);
						 if(BadBiaoZhiArr==''){
							 //alert('合格');
							 $("#VKbiaodan td:contains('标识')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val('合格').parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
						 }
						 else if(buhegeLength>=4){
							 //alert('不合格大于等于4了');
							 $("#VKbiaodan td:contains('标识')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val(BadBiaoZhiArr).parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=2;
						 }
						 else{
							 //alert('我是小于4的情况');

							 //如果纤维含量不合格 仍然也判断不合格
							 //alert(BadBiaoZhiArr);
							 var xianweiAllright = BadBiaoZhiArr.indexOf("【纤维成分及含量】不合格");
							 //alert(xianweiAllright);
							 var xianweiAllrightAdd = BadBiaoZhiArr.indexOf("【纤维成分及含量】不符合要求");

							 if(xianweiAllright>-1||xianweiAllrightAdd>-1){$("#VKbiaodan td:contains('标识')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val(BadBiaoZhiArr).parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=2;}
							 else{$("#VKbiaodan td:contains('标识')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val(BadBiaoZhiArr).parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;}
						 }


					 }catch(err){}

				 }

				 //标志标识END

					$("#vkstatus .ajaxShow").text("afterBIGajax轻纺室done");


/*不合格卡相关开始*/


/*------------------标签--------------------*/
if(FillCC=='食品室'){

	try{

		//无论是否合格都执行的情况
		try{
			$(".available:contains('进口商品无中文标签')").css({backgroundColor:'#C0FFC8'}).siblings("td").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
				WuVK($(this));
			});
		}catch(err){}

		try{
			$(".available:contains('冒用许可')").css({backgroundColor:'#C0FFC8'}).siblings("td").css({backgroundColor:'#C0FFC8'}).parent("tr").map(function(index, element) {
				WuVK($(this));
			});

		}catch(err){}





		//判断如果实验室格式不规范 没写这四个字时发出提示
		// var jyjg = $("#vkcontainer div.Section1 p.MsoNormal span:contains('检验结果')").length;
        //
		// if(jyjg>=1) {
		// 	$("#vkcontainer div.Section1 p.MsoNormal span:contains('检验结果')").parent('p').attr({id: 'jianyanjieguo'});
		// }
		// else{
		// 	alert('检测到报告格式不规范 无检验结果字样 结果可能出错');
		// }
		//将检验结论的字符串统一放在jianyanjielun
		var BiaoZhiRough1= $("#vkcontainer .Section1 span:contains('检验结论')").parent("p").attr({id:'Firstp'}).text();

		//html body div#content#vkcontainer div.Section1 p.MsoNormal span
		//是否有检验结论
		//var jianyanjielunshiping = $("#vkcontainer.Section1 span:contains('检验')").length;
		//alert(jianyanjielunshiping);

		var BiaoZhiRough2= $("#Firstp").nextAll("p").eq(0).attr({jielun:'p'}).text();
		var BiaoZhiRough3= $("#Firstp").nextAll("p").eq(1).attr({jielun:'p'}).text();
		var BiaoZhiRough4=$("#Firstp").nextAll("p").eq(2).attr({jielun:'p'}).text();
		var BiaoZhiRough5=$("#Firstp").nextAll("p").eq(3).attr({jielun:'p'}).text();
		console.log("食品室检测-原始报告单上文字："+BiaoZhiRough1+BiaoZhiRough2+BiaoZhiRough3+BiaoZhiRough4+BiaoZhiRough5);
		var jianyanjielun = $.trim(BiaoZhiRough1+BiaoZhiRough2+BiaoZhiRough3+BiaoZhiRough4+BiaoZhiRough5);
		BiaoZhiClearo=jianyanjielun.replace(/\?/g,"");

		BiaoZhiClear = BiaoZhiClearo.replace(/\r|\n/ig,"");
		//上面这个只能去除标准空格，还有特么的诡异奇怪空格不去掉的话最后会变成问号  这里还是之前的 试试新的会怎样   其中怪异空格去除不了  用变量获取这个空格
		var o1 = BiaoZhiClear.split('检验结论：');
		var o2 = o1[1];
		var o3 = o2.substr(0,1);
		//将O3转换为全局变量monstrousSpace  最后使用
		monstrousSpace = o3;
		//检测前100个字符内有无 “不符合字样”
		var IShegefou = BiaoZhiClear.substr(0,100);
		console.log("这里是食品室才有的检测字段："+IShegefou);   //这里其实直接可以用上面的检验结论JianYanJieLun 全局变量  但已经上面写了这么多就没忍心删
		var isBuFuHe = IShegefou.indexOf("标签的结果不符合");
		if(isBuFuHe>0){
			//alert('开始取不合格卡');



			var obuhegeNOTICEO = $(".buhegeNOTICE").text();
			var cardNum=1;

			$(".buhegeNOTICE,.buhegeNOTICE2").text("食品标签不符合   "+obuhegeNOTICEO);
			$("#vkcontainer").append('<div id=\"SubstandardCardContainer\"></div>');
			$("#SubstandardCardContainer").hide();

			//不合格卡不足6个时的情况


				$("#SubstandardCardContainer").load("http://localhost/smphp/card"+cardNum+".php",{limit: 25},
					function(response, status, xhr) {
						if (status == "error") {
							if(cardNum<6){

								SubstandardCardSearch();

							}
							else{
								alert('检测到标签不合格,但取不合格卡时error');

							}


						}
						if (status == "success") {
							SubstandardCardSearch();
						}
					});




			//不合格卡查询程序


			function SubstandardCardSearch(){
				//判断一下是否有两个不合格卡内容
				//alert(SMnum);
				var SubstandardCardSearchLENGTH = $("#SubstandardCardContainer div.Section0 table tbody tr td p:contains('"+SMnum+"')").length;

				if(SubstandardCardSearchLENGTH>1){alert('发现有不止一个不合格卡内容哦,可能是改过不合格卡 新旧内容都在请务必核对');}
				else if(SubstandardCardSearchLENGTH==0){
					if(cardNum<10){
					cardNum++;

					//当找不到内容时 ，再load一个不合格卡card2进来
					$("#SubstandardCardContainer").load("http://localhost/smphp/card"+cardNum+".php",{limit: 25},
						function(response, status, xhr) {
							if (status == "error") {
								//此时为card.php文件缺失的情况

								if(cardNum<10){
									SubstandardCardSearch();
								}
								else{
									alert('有标签不合格啊,但取到'+cardNum+'时已经没有不合格卡');
									$(".ajaxShow").text("不合卡取到"+cardNum+"时没有文件");
								}
							}
							if (status == "success") {

								$(".ajaxShow").text("取不合格卡"+cardNum+"中...");
								SubstandardCardSearch();
							}
						});
					}
					else{alert('已取到不合格卡 但搜索不到此报告');}

					}

				else{
//contains('"+VinkinsTPC+"')").
				$("#SubstandardCardContainer div.Section0 table tbody tr td p:contains('"+SMnum+"')").css({background:'red'}).parents('table').attr({id:'ThisBuHeGe'});
				$("#ThisBuHeGe span:contains('标签'):eq(0)").parents("td").css({background:'red'}).siblings("td").eq(2).css({background:'blue'});
				var BiaoZhiRoughBuHeGe = $("#ThisBuHeGe span:contains('标签')").parents("td").siblings("td").eq(2).text();
				//去除多余空格
				var BZRBGo=BiaoZhiRoughBuHeGe.replace(/\?/g,"");
				//删除'不合格内容'字样
				var BZRBG = BZRBGo.split('不合格内容：');
				var BiaoZhiBuHeGeO = BZRBG[1];
				//TODO 去掉BiaoZhiBuHeGe的奇怪问号
					var BiaoZhiBuHeGeOO= BiaoZhiBuHeGeO.replace(/\r|\n/ig,"");//先除一次换行
					var BiaoZhiBuHeGe = BiaoZhiBuHeGeOO.replace(/\s/g,"");//再去除一次空格

				$("#qcRemark").val(BiaoZhiBuHeGe).css({width:'500px',height:'100px'});

				try{$(".available:contains('普通标签标识不合格')").parent("tr").children("td").css({backgroundColor:'#FFA7A7'}).end().children("td:eq(3)").find("textarea").val(BiaoZhiBuHeGe).parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=2;$(".available:contains('普通标签标识不合格')").next("td").find("select").get(0).selectedIndex=1;//价格选择
				}catch(err){}

					$(".ajaxShow").text("成功在"+cardNum+"中，执行成功");


				}
			}//SubstandardCardSearch END



		}
			//else合格的情况
		else{

			try{$(".available:contains('普通标签标识不合格')").parent("tr").children("td").end().children("td:eq(3)").find("textarea").val('标签合格').parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;$(".available:contains('普通标签标识不合格')").next("td").find("select").get(0).selectedIndex=1;//价格选择
			}catch(err){}

		}




	}catch(err){}


}

					$("#vkstatus .ajaxShow").text("afterBIGajax食品室done");





	//蜂蜜
				if(category.indexOf("蜂蜜")>=0){
					alert("蜂蜜的来了 看三菌是否自动选择了1次 标签是否反了");

					try
					{
						$(".available:contains('志贺氏菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
						$(".available:contains('志贺氏菌')").siblings("td").find("select").get(0).selectedIndex=1;

					}
					catch(err){}


					try
					{

						$(".available:contains('沙门氏菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
						$(".available:contains('沙门氏菌')").siblings("td").find("select").get(0).selectedIndex=1;

					}
					catch(err){}

					try
					{
						$(".available:contains('金黄色葡萄球菌')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
						$(".available:contains('金黄色葡萄球菌')").siblings("td").find("select").get(0).selectedIndex=1;
					}
					catch(err){}



				}
					$("#vkstatus .ajaxShow").text("afterBIGajax蜂蜜done");


	//豆制品
					if(category.indexOf("豆制品")>=0){

						try
						{
							$(".available:contains('大肠菌群')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("5次检测<10").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;
							$(".available:contains('大肠菌群')").siblings("td").find("select").get(0).selectedIndex=5;
						}
						catch(err){}

					}
					//生鲜-蔬菜
					if(category.indexOf("生鲜-蔬菜")>=0){

						alert("1546生鲜-蔬菜无标签");

					}

//液体加热器BEGIN
					if(category.indexOf("液体加热器具")>=0){
						try{

							$("td:contains('铅（以Pb计）【液体加热器具 （热水壶、咖啡壶等）】')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;

							$("td:contains('镍（以Ni计）【液体加热器具 （热水壶、咖啡壶等）】')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;

							$("td:contains('镉（以Cd计）【液体加热器具 （热水壶、咖啡壶等）】')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;

							$("td:contains('铬（以Cr计）【液体加热器具 （热水壶、咖啡壶等）】')").parent("tr").children("td").end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;

							$("td:contains('砷（以As计）【液体加热器具 （热水壶、咖啡壶等）】')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("合格").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=1;

							$("td:contains('锑')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('锑')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;

							$("td:contains('酚')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('酚')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;

							$("td:contains('蒸发残渣（4%乙酸）')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('蒸发残渣（4%乙酸）')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;

							$("td:contains('蒸发残渣（20%乙醇）')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('蒸发残渣（20%乙醇）')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;

							$("td:contains('蒸发残渣（正己烷）')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('蒸发残渣（正己烷）')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;

							$("td:contains('蒸发残渣（65%乙醇）')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('蒸发残渣（65%乙醇）')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;

							$("td:contains('蒸发残渣（水）')").css({backgroundColor:'#C0FFC8'}).parent("tr").children("td").css({backgroundColor:'#C0FFC8'}).end().children("td:eq(4)").find("textarea").val("项目不适用,取消").parents("tr").find("#qcItemResultCode1").get(0).selectedIndex=3;
							$("td:contains('蒸发残渣（水）')").parents("tr").find("td").eq(3).find("select").get(0).selectedIndex=0;


							$("td:contains('暂无')").each(function(index, element) {
								$(this).text('变换').css({backgroundColor:'#DDEAFD',boxShadow:'1px 1px 0 #CCCCCC',cursor:'pointer'}).click(function(){

									$(this).css({backgroundColor:'#C0FFC8',boxShadow:'none',cursor:'default'}).next("td").find("select").get(0).selectedIndex=1;
									$(this).nextAll("td").eq(1).find("textarea").val("与食品接触的部件： 透明 PC 组件:");
									$(this).nextAll("td").eq(2).find("#qcItemResultCode1").get(0).selectedIndex=1;

								});

							});




						}catch(err){}
					}
					//液体加热器END
					$("#vkstatus .ajaxShow").text("afterBIGajax液体加热done");


//遍历textarea将charge不等于true也就是没有检测未检测的变成取消
					$("#VKbiaodan textarea").each(function(index,element){
						//看表单的值是不是需要替换的那种
						var CurVal = $(this).val();
						//看其父兄弟有无charge属性 也就是检测了没

						var isCharge = $(this).parent("td").prevAll("td").eq(2).attr("charge");

//console.log($.type(isCharge)); string

						//看是否有availableTextArea的class  没有availableTextArea则说明已经被填过 TODO 可能还有部分项目保持不了
						var isavailableTextArea = $(this).hasClass("availableTextArea");


						if (CurVal == "5次未检出" || CurVal == "合格" || CurVal == "5次检测<10" ||CurVal == "未检出") {
							//如果检测标识不等于true 并且 也没有填过(即class是availabletextarea)
							if (isCharge !== "true"&&isavailableTextArea==true) {
								//$(this).get(0).style.background = "#FFCC80";
								//console.log("isCharge="+isCharge);
								$(this).addClass("WeiJianCe").parents("tr").map(function(index, element) {
									CancelVK($(this));
								});
							}


						}



					});


					//判断质检人为空则提示
					var zhijianren = $("#identifyInputPerson").val();
					if(zhijianren==""){alert('质检人为空');};

					$("#vkstatus .ajaxShow").text("已全部执行");







				}//afterBIGajax END







				
				
				
				
				
				
				
				
				
				
				
				

				
				},300);			
			}
		
			
			
				
		e.preventDefault();		
		});	
		
		
		
			$('#VKsaveAll').click(function(e) {
			$("a[name='J_save']").trigger("click");
			$(this).text("已执行").css({cursor:'default',background:'#ccc',boxShadow:'none'});
			setTimeout(function(){
				$("#VKsaveAll").text("再次保存").attr({style:''});
				$("body").animate({scrollTop: $('#content').offset().top}, 200);
				$("#sMpsId").val("sm-16-5-");
/*光标移动到SM编号末尾开始*/
//设置插件			
	$.fn.setCursorPosition = function(position){
    if(this.lengh == 0) return this;
    return $(this).setSelection(position, position);
}

$.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.lengh == 0) return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}

$.fn.focusEnd = function(){
    this.setCursorPosition(this.val().length);
}
//开始调用
$("#sMpsId").focusEnd();

		/*光标移动到SM编号末尾结束*/	
				
				},1000);  
				
			
			e.preventDefault();
        });
		
	
	




	
	})();