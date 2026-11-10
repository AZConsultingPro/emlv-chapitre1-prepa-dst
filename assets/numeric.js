(function(root){
function parseNumeric(raw,expectedUnit=''){
 let s=String(raw??'').trim().replace(/[−–]/g,'-');
 if(!s)return {ok:false,reason:'Saisissez une réponse : une case vide ne signifie pas zéro.'};
 const match=s.match(/\s*(%|k€|M€|M\$|€|euros?|millions?|milliers?)\s*$/i);
 const given=match?match[1]:''; if(match)s=s.slice(0,match.index).trim();
 const norm=u=>u.toLowerCase().replace(/euros?/,'€');
 if(given && norm(given)!==norm(expectedUnit))return {ok:false,reason:`L’unité attendue est ${expectedUnit||'un nombre sans unité'}. Convertissez explicitement avant de répondre.`};
 if(!/^[+-]?(?:\d+|\d{1,3}(?:[ \u00a0\u202f]\d{3})+)(?:[.,]\d+)?$/.test(s))return {ok:false,reason:'Format à préciser : utilisez par exemple 1 250,50, sans séparateurs de milliers en point ou virgule.'};
 const value=Number(s.replace(/[ \u00a0\u202f]/g,'').replace(',','.'));
 return Number.isFinite(value)?{ok:true,value}:{ok:false,reason:'Ce nombre n’est pas lisible.'};
}
function checkNumeric(raw,expected,unit,precision=2){const p=parseNumeric(raw,unit);return p.ok?{...p,correct:Math.abs(p.value-expected)<=.5*Math.pow(10,-precision)+1e-9}:p;}
root.EMLVNumeric={parseNumeric,checkNumeric};
})(typeof module==='object'?module.exports:window);
