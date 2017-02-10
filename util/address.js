/**
 * Created by archmagece on 2017-02-10.
 */

/**
 * JQuery Extends
 * 그냥 function으로 해도 상관없음.
 * url 파라미터 분리하는 기능
 */
$.extend({
	getUrlVars: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar: function(name) {
		return $.getUrlVars()[name];
	}
});