/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-10

	http://www.uize.com/reference/Uize.Data.PathsTree.CompactString.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Data.PathsTree.CompactString',builder:function(){var _a=function(){},_b={},_c=Uize.defaultNully;_a.fromCompactString=function(_d,_e){_e||(_e=_b);var _f=_c(_e.opener,'[')+'',_g=_c(_e.closer,']')+'',_h=_c(_e.separator,'|')+'',_i=_f.length,_j=_g.length,_k=_h.length,_l={},_m=[_l],_n=_l,_o=0,_p=_d.length,_q=_p+1,_r,_s,_t,_u,_v;while(_o<_p){_t=_d.slice(_o,_u=Math.min(_r=((_d.indexOf(_f,_o)+1)||_q)-1,_s=((_d.indexOf(_g,_o)+1)||_q)-1,((_d.indexOf(_h,_o)+1)||_q)-1));_o=_u;if(_o<_p){if(_u==_r){_m.push(_n=_n[_t]={});_v=false;_o+=_i;}else{if(!_v)_n[_t]=0;if(_v=_u==_s){_n=_m[--_m.length-1];_o+=_j;}else{_o+=_k;}}if(_o==_p&& !_v)_n['']=0;}else{_n[_t]=0;}}return _m[0];};_a.toCompactString=function(_l,_e){_e||(_e=_b);var _f=_c(_e.opener,'[')+'',_g=_c(_e.closer,']')+'',_h=_c(_e.separator,'|')+'';function _w(_l){if(typeof _l!='object'|| !_l)return null;var _x=[];for(var _y in _l){var _z=_w(_l[_y]);_x.push(_y+(_z!=null?_f+_z+_g:''));}return _x.join(_h);}return _w(_l)||'';};return _a;}});