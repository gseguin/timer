/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-10

	http://www.uize.com/reference/Uize.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget',superclass:'Uize.Class',required:'Uize.Node',builder:function(b_a){var b_b=null,b_c=true,b_d=false,b_e='string',b_f=Uize,b_g=b_f.isFunction,b_h='concatenated',b_i,b_j=b_f.Node,b_k=b_j.doForAll,b_l=b_j.isNode,b_m=b_j.getById;var b_n=b_a.subclass(function(b_o){var b_p=this;if(b_o){var b_q=b_p.b_r(b_o.idPrefix,b_o.parent);b_q&&b_f.copyInto(b_o,b_q);delete b_o.widgetClass;}b_p.b_s={};b_p.children=b_p.b_t={};}),b_u=b_n.prototype;b_u.b_r=function(b_v,b_w){var b_o,b_x;(b_v&&(b_o=window[b_x='$'+b_v])&&typeof b_o=='object'&&(!b_w||b_v!=b_w.b_v))?(window[b_x]=b_i):(b_o=b_i);return b_o;};b_u.b_y=function(){var b_p=this,b_q=b_p.b_r(b_p.b_v,b_p.parent);b_q&&b_p.set(b_q);};b_u.b_z=function(b_A,b_B,b_C,b_D){return((!b_D||b_D==b_h)&&b_A!=b_i?(b_A+(b_C!==''?'_':'')+b_C):(b_D=='same as parent'?b_A:b_B));};var b_E={b_F:b_d,b_G:b_c};function b_H(){(this.b_I=='inherit'?(this.parent||b_E).b_F:this.b_I)!=this.b_F&&this.set({b_F:!this.b_F});}function b_J(){
(this.b_K=='inherit'?(this.parent||b_E).b_G:this.b_K)!=this.b_G&&this.set({b_G:!this.b_G});}b_u.b_L=function(b_M,b_N,b_O){var b_P='show'+b_f.capFirstChar(b_M);this.getProvider(b_P)?this.callInherited(b_P)(b_N):setTimeout(function(){var b_Q=b_O();(b_N.callback||(b_Q?b_N.yesHandler:b_N.noHandler)||b_f.nop)(b_Q)},0);};b_u.confirm=function(b_N){this.b_L('confirm',b_N,function(){return confirm(b_N.message)});};b_u.showInform=b_u.showConfirm=b_i;b_u.inform=function(b_N){this.b_L('inform',b_N,function(){alert(b_N.message);return b_c})};b_u.ajax=function(b_R,b_S){this.callInherited('performAjax')(b_R,b_f.isFunction(b_S)?{callback:b_S}:b_S||{})};b_u.localize=function(b_T,b_U,b_V){var b_W,b_X=this;while(!(b_W=b_X.b_Y?b_X.b_Y[b_T]:b_i)&&(b_X=b_X.parent));return(b_g(b_W)?b_W.call(this,b_U):b_f.substituteInto(b_W,b_U,b_V||'{KEY}'));};b_u.buildHtml=function(b_Z){var b_p=this,b_0=b_p.b_0;if(b_0!=b_i){var b_1=b_p.b_2||b_p.getNode('shell')||b_p.getNode();if(b_0===b_c){b_0=b_p.b_0=b_f.Template&&b_1?{
process:b_f.Template.compile((b_j.find({root:b_1,tagName:'SCRIPT',type:'text/jst'})[0]||b_1).innerHTML,{openerToken:'[%',closerToken:'%]'})}:b_i;if(!b_0)return;}b_p.b_v||b_p.set({b_v:b_p.instanceId});var b_3=b_f.copyInto({pathToResources:b_f.pathToResources,blankGif:b_n.getBlankImageUrl()},b_Z||b_p.get()),b_4;b_j.injectHtml(b_1||document.body,typeof b_0!=b_e&&b_g(b_0.process)?b_0.process.call(b_p,b_3):b_g(b_0)?typeof(b_4=b_0(b_3))==='string'?b_f.substituteInto(b_4,b_3):b_4:b_f.substituteInto(b_0,b_3),b_p.b_5||(b_1?'inner replace':'inner bottom'));b_p.b_6=b_b;b_p.set({b_7:b_c});}};function b_8(b_9,b_ba){b_u[b_9+'Node'+b_ba]=new Function('arguments.length'+'?(arguments[0]=this.getNode(arguments[0]))'+':(arguments[arguments.length++]=this.getNode());'+'return Uize.Node.'+b_9+b_ba+'.apply(0,arguments)');}b_u.getNode=function(b_bb){if(b_bb==b_b){if(b_bb===b_b)return b_b;b_bb='';}var b_p=this;if(b_p.b_bc&&typeof b_bb==b_e){var b_bd=b_p.b_bc[b_bb];if(b_bd!==b_i)b_bb=b_bd;}if(typeof b_bb==b_e){
return b_m(b_bb,b_p.b_v,b_p.b_6||(b_p.b_6={}));}else if(b_l(b_bb)){return b_bb;}else{var b_be=b_b;b_k(b_bb,function(b_bf){(b_be||(b_be=[])).push(b_bf)},b_p.b_v,b_p.b_6||(b_p.b_6={}));return b_be;}};b_8('get','Style');b_8('get','Value');b_u.flushNodeCache=function(b_bg){if(this.b_6)b_bg==b_i?(this.b_6=b_b):delete this.b_6[b_bg];};b_u.globalizeNode=function(b_bh){var b_p=this,b_bi=document.body;b_k(b_p.getNode(b_bh),function(b_bf){if(b_bf.parentNode!=b_bi){(b_p.b_bj||(b_p.b_bj=[])).push(b_bf);b_j.setStyle(b_bf,{position:'absolute',left:-10000,top:-10000});b_bi.appendChild(b_bf);}});};b_8('display','');b_8('inject','Html');b_u.removeNode=function(b_bh){b_j.remove(this.getNode(b_bh));this.flushNodeCache(b_bh);};b_8('set','Properties');b_8('set','Opacity');b_8('set','Style');b_8('set','ClipRect');b_8('set','InnerHtml');b_8('set','Value');b_8('show','');b_u.wireNode=function(b_bh,b_bk,b_bl){arguments.length==3?b_j.wire(this.getNode(b_bh),b_bk,b_bl,this.instanceId):b_j.wire(this.getNode(b_bh),b_bk,this.instanceId);
};b_u.unwireNode=function(b_bh,b_bk,b_bl){if(b_bh!==b_i)b_bh=this.getNode(b_bh);arguments.length==2&&typeof b_bk=='object'&&b_bk&& !b_bk.virtualDomEvent?b_j.unwire(b_bh,b_bk,this.instanceId):b_j.unwire(b_bh,b_bk,b_bl,this.instanceId);};b_u.unwireNodeEventsByMatch=function(b_bh,b_bm){this.unwireNode(b_bh,(b_bm||(b_bm={})).eventName,b_bm.handler);};b_u.addChild=function(b_C,b_bn,b_o){if(!b_o)b_o={};var b_p=this,b_v=b_p.b_v,b_bo=b_f.isInstance(b_bn)?b_bn:b_b,b_B='idPrefix'in b_o?b_o.idPrefix:b_o.node,b_bp=b_o.idPrefixConstruction;b_o.parent=b_p;if(b_C==b_i)b_C=b_o.name;if(b_bo){if(b_C==b_i)b_C=b_bo.b_bq;if(b_B==b_i)b_B=b_bo.b_v;if(!b_bp)b_bp=b_bo.b_D;}b_o.idPrefix=b_p.b_z(b_v,b_B,b_o.name=b_C,b_o.idPrefixConstruction=b_bp||(b_B==b_i?b_h:'explicit'));var b_s=b_p.b_s,b_br=b_s[b_C];if(b_br){b_f.copyInto(b_o,b_br);delete b_s[b_C];}b_bo&&b_bo.set(b_o);return b_p.b_t[b_C]=b_bo||new b_bn(b_o);};b_u.removeChild=function(b_bs){var b_t=this.b_t,b_C=typeof b_bs==b_e||b_f.isNumber(b_bs)?b_bs:b_bs.b_bq,b_bo=b_t[b_C];
if(b_bo){b_bo.unwireUi();delete b_bo.parent;delete b_t[b_C];}};b_u.getProvider=function(b_bt){var b_bu=this,b_bv;while(((b_bv=b_bu.get(b_bt))==='inherit'||b_bv===b_i)&&(b_bu=b_bu.parent));return b_bu;};b_u.getInherited=function(b_bt){var b_bw=this.getProvider(b_bt);return b_bw?b_bw.get(b_bt):b_i;};b_u.setInherited=function(b_o){var b_bw;for(var b_bx in b_o){if(b_bw=this.getProvider(b_bx))b_bw.set(b_bx,b_o[b_bx]);}};b_u.callInherited=function(b_bt){var b_p=this;return(function(){var b_bw=b_p.getProvider(b_bt),b_be;if(b_bw){var b_by=b_bw.get(b_bt);if(b_g(b_by))b_be=b_by.apply(b_bw,arguments);}return b_be;});};b_u.kill=function(){b_f.callOn(this.b_t,'kill');b_a.prototype.kill.call(this);};b_u.insertOrWireUi=function(){this.b_7?this.wireUi():this.insertUi();};b_u.insertUi=function(){this.buildHtml();this.wireUi();};b_u.removeUi=function(){this.unwireUi();this.removeNode();b_j.remove(this.b_bj);this.b_bj=b_i;b_f.callOn(this.b_t,'removeUi');this.set({b_7:b_d});};b_u.updateUi=function(){};b_u.wireUi=function(){
if(!this.isWired){this.b_y();this.set({wired:b_c});b_f.callOn(this.b_t,'insertOrWireUi');this.updateUi();}};b_u.unwireUi=function(){if(this.isWired){this.b_6=b_b;this.unwireNode();b_f.callOn(this.b_t,'unwireUi');this.set({wired:b_d});}};b_n.getBlankImageUrl=function(){return b_f.pathToResources+'Uize/blank.gif';};b_n.spawn=function(b_o,b_w){var b_p=this,b_bz=[],b_bu,b_bA=b_w&&b_w.b_v?b_w.b_v+'_':'',b_bB=b_bA.length;b_k(b_f.Node.find(b_o.idPrefix),function(b_bf){b_o.idPrefix=b_bf;b_w?(b_bu=b_w.addChild(b_bf.id.slice(0,b_bB)==b_bA?b_bf.id.slice(b_bB):'generatedChildName'+b_f.getGuid(),b_p,b_o)):(b_bu=new b_p(b_o)).insertOrWireUi();b_bz.push(b_bu);});return b_bz;};b_n.registerProperties({b_7:{name:'built',value:b_c},b_I:{name:'busy',onChange:b_H,value:'inherit'},b_F:{name:'busyInherited',onChange:function(){b_f.callOn(this.b_t,b_H)},value:b_d},b_t:{name:'children',conformer:function(b_bv){if(b_bv){var b_t=this.b_t,b_s=this.b_s;for(var b_C in b_bv){var b_bC=b_bv[b_C];b_t[b_C]?b_t[b_C].set(b_bC):b_s[b_C]=b_bC;}}
return this.b_t;}},b_2:'container',b_K:{name:'enabled',onChange:b_J,value:'inherit'},b_G:{name:'enabledInherited',onChange:function(){b_f.callOn(this.b_t,b_J)},value:b_c},b_0:'html',b_v:{name:'idPrefix|node',conformer:function(b_v){return(b_l(b_v)?(b_v.id||(b_v.id=b_f.getGuid())):b_v);},onChange:function(){var b_p=this,b_v=b_p.b_v;b_p.b_6=b_b;if(b_v!=b_i){b_p.b_y();var b_t=b_p.b_t,b_bo;for(var b_C in b_t)(b_bo=b_t[b_C]).set({b_v:b_p.b_z(b_v,b_bo.b_v,b_C,b_bo.b_D)});if(b_p.isWired){b_p.set({wired:b_d});b_p.wireUi();}}}},b_D:'idPrefixConstruction',b_5:'insertionMode',b_Y:'localized',b_bq:'name',b_bc:'nodeMap',isWired:{name:'wired',value:b_d}});return b_n;}});