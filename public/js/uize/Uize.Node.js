/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-10

	http://www.uize.com/reference/Uize.Node.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Node',required:'Uize.Class',builder:function(){var _a=function(){},_b,_c='string',_d='object',_e='function',_f=true,_g=false,_h=null,_i='hidden',_j=Uize,_k=_j.copyInto,_l=_j.isPrimitive,_m=_j.returnFalse;var _n=typeof navigator!='undefined',_o=_n?navigator:{userAgent:'',appName:''},_p=_o.userAgent.toLowerCase(),_q=_o.appName=='Microsoft Internet Explorer',_r={TABLE:_f,THEAD:_f,TFOOT:_f,TBODY:_f,TR:_f,COL:_f,COLGRPUP:_f,FRAMESET:_f,HEAD:_f,HTML:_f,STYLE:_f,TITLE:_f},_s=_p.indexOf('applewebkit')> -1,_t=_p.indexOf('gecko')> -1,_u=_p.indexOf('opera')> -1,_v=_t||_u,_w= +(_q&&(_p.match(/MSIE\s*(\d+)/i)||[0,0])[1]),_x=_q&&_w<9,_y=_a._y={},_z={},_A=0,_B={clientX:0,clientY:0,pageX:0,pageY:0};var _C=_a._C=function(_D){_B.clientX=_D.clientX;_B.clientY=_D.clientY;_B.pageX=_D.pageX;_B.pageY=_D.pageY;};function _E(_F){var _G=document.getElementById(_F);return(!_q||(_G&&_G.id==_F))?_G:_h;}function _H(){return document[_s?'body':'documentElement'];}function _I(_J){
var _K=(_J=_J+'').slice(_J.indexOf('(')+1,_J.indexOf(')'));return Function.apply({},(_K?_K.split(','):[]).concat(_J.slice(_J.indexOf('{')+1,_J.lastIndexOf('}'))));}function _L(_M){if(_M.charCodeAt(0)==111&&_M.charCodeAt(1)==110)_M=_M.slice(2);return(_M.charCodeAt(_M.length-1)==41&&_a.VirtualEvent?_a.VirtualEvent.resolve(_M):_M);}var _N='table-',_O=_N+'row',_P=_N+'cell',_Q=_k({SPAN:'inline',THEAD:_N+'header-group',TFOOT:_N+'footer-group',LI:'list-item'},_q&&typeof DOMImplementation=='undefined'?_h:{TABLE:'table',TR:_O,TH:_P,TD:_P,TBODY:_O+'-group',COLGROUP:_N+'column-group',COL:_N+'column',CAPTION:_N+'caption'});_a.display=function(_R,_S){_S=_S===_b|| !!_S;_T(_R,function(_U){_U.style.display=_S?(_Q[_U.tagName]||'block'):'none';});};var _T=_a.doForAll=function(_R,_J,_V,_W){if(typeof _R==_c)_R=_X(_R,_V,_W);if(_R!=_b){if(_Y(_R)){_J(_R);}else{var _Z=typeof _R;if((_Z==_d||_Z==_e)&&typeof _R.length=='number'){for(var _0= -1,_1=_R.length;++_0<_1;)_T(_R[_0],_J,_V,_W);}else if(_Z==_d){for(var _2 in _R)
_T(_R[_2],_J,_V,_W);}}}};var _3=_a.doRectanglesOverlap=function(_4,_5,_6,_7,_8,_9,_ba,_bb){return(_6-1+ +_4>=_8&&_ba-1+ +_8>=_4&&_7-1+ +_5>=_9&&_bb-1+ +_9>=_5);};var _X=_a.getById=function(_U,_V,_W){if(typeof _U!=_c)return _U;var _G=_W?_W[_U]:_b;if(_G===_b){var _bc=_bd(_V,_U);(_G=_E(_bc))||(((_G=document.getElementsByName(_bc)).length<2)&&(_G=_G[0]||_h));if(_W)_W[_U]=_G;}return _G;};_a.find=function(_be){if(typeof _be!=_d|| !_be||typeof _be.length=='number'||_Y(_be))return _be;var _bf=document,_bg=[],_bh=_k({},_be),_bi='root'in _bh?_X(_bh.root):_bf;delete _bh.root;if(_bi){var _bj=_bh.tagName;if('id'in _bh&&_l(_bh.id)){var _U=_E(_bh.id);_U&&_bg.push(_U);delete _bh.id;}else if('name'in _bh&&_l(_bh.name)){_bg=_bf.getElementsByName(_bh.name);delete _bh.name;}else{var _bk=_l(_bj);_bk&&delete _bh.tagName;_bg=_bi.getElementsByTagName(_bj&&_bk?_bj:'*');_bi=_h;}if(_bi==_bf)_bi=_h;if(!_bj||_bj=='*')delete _bh.tagName;}var _bl=_bg.length;for(var _bm in _bh)break;if(!_bl||(_bm==_b&& !_bi))return _bg;var _bn=[],_bo;
for(var _bp= -1;++_bp<_bl;){var _U=_bg[_bp];if(_bo=_bi?_bq(_U,_bi):_f){for(var _br in _bh){var _bs=_U[_br],_bt=_bh[_br],_bu=_j.isFunction;if(!(_l(_bt)?_bs==_bt:(_bt instanceof RegExp?_bt.test(_bs||''):(_bu(_bt)?_bt.call(_U,_bs):_f)))){_bo=_g;break;}}}_bo&&_bn.push(_U);}return _bn;};var _bv=_a.getCoords=function(_U){var _bw=0,_bx=0,_by=0,_bz=0,_bA=_f,_bB=100,_bC=_H(),_bD=_bE(window);function _bF(){_bw+=_bC.scrollLeft;_bx+=_bC.scrollTop;}if(_U==window){_bF();_by=_bD.width;_bz=_bD.height;}else if(_Y(_U=_X(_U))){_by=_U.offsetWidth;_bz=_U.offsetHeight;if(!(_by&&_bz)&&_U.tagName=='DIV'){for(var _bG=_U.childNodes,_bH=_bG.length;--_bH>=0;){if(_bG[_bH].nodeName.charAt(0)!='#'){var _bI=_bv(_bG[_bH]);if(_bI.width||_bI.height){_by=Math.max(_by,_bI.right-_bw+1);_bz=Math.max(_bz,_bI.bottom-_bx+1);}}}}function _bJ(_U){return _bK(_U,'display')=='none'||_bK(_U,'visibility')==_i;}if(_U.tagName=='A'&&_U.childNodes.length==1&&_U.childNodes[0].tagName=='IMG')_U=_U.childNodes[0];var _bL=_bA= !_bJ(_U),_bM=_U,_bN=_U,_bO=_bD.width,
_bP=_bD.height,_bQ=_bC.scrollLeft,_bR=_bC.scrollTop,_bS=_bQ+_bO,_bT=_bR+_bP;while(_bN.parentNode&&typeof _bN.parentNode!='unknown'){var _bU=_bN.offsetLeft||0,_bV=_bN.offsetTop||0,_bW=_bN.offsetWidth,_bX=_bN.offsetHeight;if(_bA&&_bJ(_bN))_bA=_g;if(_bN==_bM){_bw+=_bU+(parseInt(_bK(_bN,'borderLeftWidth'))||0);_bx+=_bV+(parseInt(_bK(_bN,'borderTopWidth'))||0);_bM=_bN.offsetParent;_bK(_bN,'position')=='fixed'&&_bF();}if(_bN!=_U&&_bN!=document.body&&_bN!=document.documentElement&&(_bN.scrollWidth>_bW||_bN.scrollHeight>_bX)){_bw-=_bN.scrollLeft;_bx-=_bN.scrollTop;if(_q){_bw+=_bN.clientLeft;_bx+=_bN.clientTop;}if(_bA)_bA=_3(_bw,_bx,_by,_bz,_bU,_bV,_bW,_bX);}_bN=_bN.parentNode;}if(_bA)_bA=_3(_bw,_bx,_by,_bz,_bQ,_bR,_bO,_bP);_bB=_bA?((Math.min(_bw+_by,_bS)-Math.min(Math.max(_bw,_bQ),_bS))*(Math.min(_bx+_bz,_bT)-Math.min(Math.max(_bx,_bR),_bT)))/(_by*_bz)*100:0;}return{x:_bw,y:_bx,width:_by,height:_bz,area:_by*_bz,left:_bw,top:_bx,right:_bw+_by-1,bottom:_bx+_bz-1,seen:_bA,percentSeen:_bB};};
var _bE=_a.getDimensions=function(_U){if(_U==window){var _bC=document.documentElement;return{width:_bC.clientWidth||window.innerWidth||_bC.offsetWidth,height:_bC.clientHeight||window.innerHeight||_bC.offsetHeight};}else if(_U=_X(_U)){return{width:_U.offsetWidth||parseInt(_bK(_U,'width'))||0,height:_U.offsetHeight||parseInt(_bK(_U,'height'))||0};}else{return{width:0,height:0};}};var _bY={borderColor:['border','Color'],borderWidth:['border','Width'],padding:1,margin:1},_bK=_a.getStyle=function(_U,_bZ){var _b0='';if(typeof _bZ==_c){if(_U){var _b1=_q&&_bZ=='opacity',_b2=document.defaultView,_b3=_b2&&_b2.getComputedStyle(_U,'');if(_b1)_bZ='filter';if(_b3){if(!(_b0=_b3[_bZ])){var _b4=_bY[_bZ];if(_b4){var _b5=_b4[0]||_bZ,_b6=_b4[1]||'',_b7=_b3[_b5+'Top'+_b6],_b8=_b3[_b5+'Right'+_b6],_b9=_b3[_b5+'Bottom'+_b6],_ca=_b3[_b5+'Left'+_b6];_b0=_b7==_b8&&_b8==_b9&&_b9==_ca?_ca:_b7+' '+_b8+' '+_b9+' '+_ca;}}}else{var _cb=_U.currentStyle;_b0=_cb?_cb.getAttribute(_bZ):_U.style[_bZ];}if(_b1){
var _cc=(_b0||'').match(/alpha\s*\(\s*opacity\s*=([^\)]*)\)/i);_b0=_cc?_cc[1]/100:1;}}}else{_b0={};if(_U)for(_bZ in _bZ)_b0[_bZ]=_bK(_U,_bZ);}return _b0;};var _cd=_a.getText=function(_U){var _ce='';if(_U=_X(_U)){function _cf(_U){if(typeof _U.innerText==_c){_ce+=_U.innerText.replace(/\r|\n|\r\n/g,'');}else if(typeof _U.textContent==_c){_ce+=_U.textContent;}else{if(_U.nodeType==3)_ce+=_U.data;_U.childNodes&&_j.forEach(_U.childNodes,_cf);}}_cf(_U);}return _ce;};_a.getValue=function(_U){var _b0;if(_U=_X(_U)){if(_Y(_U)){var _cg=_U.tagName;if(_cg=='TEXTAREA'){_b0=_U.value;}else if(_cg=='INPUT'){_b0=_U.type=='checkbox'?_U.checked:_U.value;}else if(_cg=='SELECT'){if(_U.multiple){_b0=[];_j.forEach(_U.options,function(_ch){_ch.selected&&_b0.push(_ch.value)});}else{_b0=_U.value;}}else if(_cg=='IMG'){_b0=_U.src;}else{_b0=_U.innerHTML.replace(/<br\/?>/gi,'\n').replace(/&nbsp;/g,' ');}}else{_b0=(_j.findRecord(_U,{tagName:'INPUT',type:'radio',checked:_f})||{}).value;}}return _b0;};_a.injectHtml=function(_R,_ci,_cj){var
 _ck,_cl,_cm,_cn,_co,_cp,_cq=_j.isArray(_ci)||(_Y(_ci)&&(_ci=[_ci]));((_ck=_cj=='inner replace')||(_cl=_cj=='outer replace')||(_cm=_cj=='inner top')||(_cn=_cj=='outer top')||(_co=_cj=='outer bottom')||(_cp=_f));_cq||(_ci+='');_T(_R,function(_U){var _cr=_U.childNodes;function _cs(_ct){return _ct&&/<script/i.test(_ct)}function _cu(){return _cs(_ci)}if((_ck||(!_cr.length&&(_cm||_cp)))&& !_Y&& !_cu()){_U.innerHTML=_ci;}else if(_cl&&_q&& !_Y&& !_cu()){_U.outerHTML=_ci;}else{if(_ck)if(_q&&_r[_U.tagName]){var _cv=_U.cloneNode();_U.replaceNode(_cv);_U=_cv;}else _U.innerHTML='';if(_cq){var _cw=[];for(var _bp= -1,_cx=_ci.length;++_bp<_cx;)_cw.push(_ci[_bp].cloneNode(_f));}else{var _cy=document.createElement('DIV');_cy.innerHTML='<i>e</i>'+_ci;var _cw=_cy.childNodes}var _cz=_cm?_cr[0]:_co?_U.nextSibling:_U,_cA=_U.parentNode,_cB= +!_cq;function _cC(_U){if(_U.tagName=='SCRIPT'){var _cD=document.createElement('script');if(_U.id)_cD.id=_U.id;if(_U.type)_cD.type=_U.type;_cD.text=_U.text;if(_U.src)_cD.src=_U.src;
_U.parentNode.replaceChild(_cD,_U);}else if(_cs(_U.innerHTML)){_j.forEach(_U.childNodes,_cC);}}while(_cw.length>_cB){var _cE=_cq?_cw.shift():_cw[_cB];if(_cp||_ck){_U.appendChild(_cE);}else if(_cm){_cz?_U.insertBefore(_cE,_cz):_U.appendChild(_cE);}else if(_cn||_cl){_cA.insertBefore(_cE,_cz);}else if(_co){_cz?_cA.insertBefore(_cE,_cz):_cA.appendChild(_cE);}_cq||_cC(_cE);}_cl&&_cA.removeChild(_U);}});};var _Y=_a.isNode=function(_U){return!!(_U&&typeof _U==_d&&(_U.getAttribute||_U.documentElement||(_U.self&&_U.self==_U)));};var _bq=_a.isOnNodeTree=function(_U,_cF){_U=_X(_U);_cF=_X(_cF);while(_U){if(_U==_cF)return _f;_U=_U.parentNode;}return _g;};var _bd=_a.joinIdPrefixAndNodeId=function(_V,_F){return(_V||'')+(_V&&_F?'-':'')+_F;};_a.remove=function(_R){_T(_R,function(_U){_U.parentNode.removeChild(_U)});};_a.setClipRect=function(_R,_b7,_b8,_b9,_ca){var _cG='rect('+_b7+'px, '+_b8+'px, '+_b9+'px, '+_ca+'px)';_T(_R,function(_U){_U.style.clip=_cG});};var _cH=['left','top','width','height'];
_a.setCoords=function(_R,_cI){_cJ(_R,_j.isArray(_cI)?_j.meldKeysValues(_cH,_cI):_cI);};_a.centerInWindow=function(_R){var _cK=_bv(window);_T(_R,function(_U){var _cL=_bE(_U);_a.setCoords(_U,{left:_cK.x+((_cK.width-_cL.width)>>1),top:_cK.y+((_cK.height-_cL.height)>>1)});});};_a.getEventAbsPos=function(_cM){var _cN=(_cM||(_cM=_B)).targetTouches;if(_cN&&_cN.length)_cM=_cN[0];if(_cM.pageX!=_b){return{left:_cM.pageX,top:_cM.pageY};}else{var _bC=_H();return{left:_cM.clientX+_bC.scrollLeft,top:_cM.clientY+_bC.scrollTop};}};var _cO=_a.setAbsPos=function(_R,_cP,_cQ){_cQ=typeof _cQ=='number'?{x:_cQ,y:_cQ}:(_cQ||{x:0,y:0});var _bC=document[_s?'body':'documentElement'],_cR=_bE(window);_T(_R,function(_U){function _cS(_cT,_cU,_cV,_cW){var _cX=_cP[_cT],_cY=_cQ[_cW],_cZ=_cX-_bC[_cU],_c0=_cY+_cL[_cV];return(_cX+(_cZ+_c0>_cR[_cV]?Math.max(-_c0,-_cZ):_cY));}var _cL=_bE(_U);_cJ(_U,{left:_cS('left','scrollLeft','width','x'),top:_cS('top','scrollTop','height','y'),right:'auto',bottom:'auto'});});};
_a.setAbsPosAdjacentTo=function(_R,_c1,_c2){_c1=_X(_c1);var _c3=_bv(_c1),_c4=_c3.width/2,_c5=_c3.height/2,_c6=_c2=='x'? -1:1;if(!_c4&& !_c5)_c3=_a.getEventAbsPos();_T(_R,function(_U){_cO(_U,{left:_c3.left+_c4,top:_c3.top+_c5},{x:-_c4*_c6,y:_c5*_c6});});};_a.setInnerHtml=function(_R,_ct){_ct+='';_T(_R,function(_U){_U.innerHTML=_ct});};var _c7={};_a.setOpacity=function(_R,_c8){_c7.opacity=_c8;_cJ(_R,_c7);};_a.setProperties=function(_R,_be){_T(_R,function(_U){_k(_U,_be)});};var _cJ=_a.setStyle=function(_R,_be){_T(_R,function(_U){var _c9=_U.style,_da;if(_q&&'opacity'in _be)_c9.filter=(_da=Math.round(_be.opacity*100))<100?'alpha(opacity='+_da+')':'';for(var _bZ in _be)_c9[_bZ]=(typeof(_da=_be[_bZ])==_d&&_da?(_da=_da.valueOf()):_da)!=_b?(typeof _da=='number'&&_bZ!='opacity'&&_bZ!='zIndex'?Math.round(_da)+'px':_da+''):'';});};_a.setValue=function(_R,_b0){_b0+='';_T(_R,function(_U){var _cg=_U.tagName,_db=_U.readOnly;if(_db)_U.readOnly=_g;if(_cg=='TEXTAREA'){_U.value=_b0;}else if(_cg=='INPUT'){var _dc=_U.type;
if(_dc=='text'||_dc==_i||_dc=='password'){_U.value=_b0;}else if(_dc=='checkbox'){_U.checked=_b0=='true';}else if(_dc=='radio'){_U.checked=_U.value==_b0;}}else if(_cg=='SELECT'){if(!_b0){_U.selectedIndex= -1;}else{var _dd=_U.options;if(_U.multiple&&(_b0=='*'||_b0.indexOf(',')> -1)){var _de=_b0!='*'?_j.lookup(_b0.split(',')):_b;for(var _df=_dd.length,_ch;--_df>=0;)(_ch=_dd[_df]).selected= !_de||_de[_ch.value];}else{_U.selectedIndex=_j.findRecordNo(_dd,{value:_b0},_U.selectedIndex);}}}else if(_cg=='IMG'){if(_b0)_U.src=_b0;}else{_cg=='PRE'&&_q?(_U.innerText=_b0):(_U.innerHTML=_b0.replace(/</g,'&lt;').replace(/\n/g,'<br/>'));}if(_db)_U.readOnly=_db;});};_a.show=function(_R,_dg){_cJ(_R,{visibility:_dg||_dg===_b?'inherit':_i});};_a.showClickable=function(_R,_dh){_cJ(_R,{cursor:_dh||_dh===_b?(_x?'hand':'pointer'):'default'});};var _di=_a.unwire=function(_R,_dj,_dk,_dl){if(typeof _dj==_d&&_dj&& !_dj.virtualDomEvent){for(var _M in _dj)_di(_R,_M,_dj[_M],_dk);}else{_a.unwireEventsByOwnerId(_dl,_R!==_b||_dj!=_b||_dk!=_b
?{node:_R,eventName:_dj,handler:_dk}:_b);}};_a.unwireEventsByOwnerId=function(_dm,_dn){var _do=_z[_dm=_dm||''];if(_do){function _dp(_dq){if(_dq!==_h){var _dr=_dn&&_dn.eventName,_ds=_dn&&_dn.handler,_dt=_dq||_dr||_ds;if(_dr&&_dr.charCodeAt)_dr=_L(_dr);for(var _du=_do.length;--_du>=0;){var _dv=_do[_du],_dw=_y[_dv],_U=_dw._U,_M=_dw._M;if(!_dt||((!_dq||_dq==(_dw._dx||_U))&&(!_dr||_dr==_M)&&(!_ds||_ds==_dw._dy))){_dt&&_do.splice(_du,1);if(_dw._dz){_a.unwireEventsByOwnerId(_dw._dz)}else{try{_U==window?_dA.unwire(_M,_dw._dB):_q?_U.detachEvent('on'+_M,_dw._dB):_U.removeEventListener(_M,_dw._dB,_g);}catch(_dC){}}delete _y[_dv];}}(_dt&&_do.length)||delete _z[_dm];}}_dn&&_dn.node!==_b?_T(_dn.node,_dp):_dp();}};var _dD=_I(function(_dv){return(function(_D){var _dw=window.Uize&&Uize.Node._y[_dv];return _dw&&_dw._dy.call(_dw._U,_D.windowEvent);});}),_dE=_I(function(_dv){return(function(_D){var _dw=window.Uize&&Uize.Node._y[_dv];return _dw&&_dw._dy.call(_dw._U,_D||window.event);});}),_dF={click:_dE,mouseover:_I(
function(_dv){return(function(_D){var _dw=window.Uize&&Uize.Node._y[_dv],_dG=(_D||(_D=window.event)).fromElement||_D.relatedTarget;if(_dw){if(_dG){try{if(!_dG.Uize_Widget_Drag_shield&& !Uize.Node.isOnNodeTree(_dG,_dw._U))_dG=null;}catch(_dC){_dG=null;}}if(!_dG){Uize.Node._C(_D);return _dw._dy.call(_dw._U,_D);}}});}),mouseout:_I(function(_dv){return(function(_D){var _dw=window.Uize&&Uize.Node._y[_dv],_dH=(_D||(_D=window.event)).toElement||_D.relatedTarget;if(_dw){if(_dH){try{if(!_dH.Uize_Widget_Drag_shield&& !Uize.Node.isOnNodeTree(_dH,_dw._U))_dH=null;}catch(_dC){_dH=null;}}if(!_dH)return _dw._dy.call(_dw._U,_D);}});}),mousedown:_dE,mouseup:_dE};_a.wire=function(_R,_M,_dy,_dm){if(!_M)return;if(_dm==_b)_dm='';var _dI;if(_M.charCodeAt)_M=_L(_M);if(typeof _M==_d&& !(_dI= !!_M.virtualDomEvent)){_dm=arguments[2]||'';for(var _D in _M)_a.wire(_R,_D,_M[_D],_dm);return;}_T(_R,function(_U){var _cg=_U.tagName;(_z[_dm]||(_z[_dm]=[])).push(_A);var _dB=(_dI?_m:_U==window?_dD:_dF[_M]||_dE)(_A);var _dw=_y[_A++]={_U:_U,_M:_M,
_dy:_dy,_dB:_dB};if(_v&&_cg=='BODY'&&_M=='scroll'){_dw._dx=_U;_U=_dw._U=document;}if(_dB){var _dJ='on'+_M;_U==window?_dA.wire(_M,_dB):_q?_U.attachEvent(_dJ,_dB):_U.addEventListener(_M,_dB,_g);if(_cg=='A'&&(_M=='mousedown'||_M=='click')&& !_U[_dJ])_U[_dJ]=_m;}else if(_dI){_M.wire(_U,_dy,_dw._dz=_j.getGuid());}});};_a.ieMajorVersion=_w;_a.isIe=_q;_a.isSafari=_s;_a.isMozilla=_t;if(_n){_a.wire(document.documentElement,'mousemove',_C);var _dA=Uize.Class(),_dK=setTimeout(function(){_dA.fire('load')},15000);_j.forEach(['focus','blur','load','beforeunload','unload','resize','scroll'],function(_dL){var _dM='on'+_dL,_dN=window[_dM]||_m;window[_dM]=function(_D){_dL=='load'&&clearTimeout(_dK);_dN.call(window,_D||(_D=window.event));_dA.fire({name:_dL,windowEvent:_D});};});}_a.returnFalse=_m;_a.returnTrue=_j.returnTrue;return _a;}});