
var Movie = (function() {
	'use strict';
	
	//privates
	var _title, _code;

	function Movie(title,priceCode) {
		_title = title;
		_priceCode = priceCode;
	}

	//simplificado, pois não são exatamente constantes
	Movie.REGULAR = 0;
	Movie.NEW_RELEASE = 1;
	Movie.CHILDRENS = 2;

	Movie.prototype = {
		constructor: Movie,
		getPriceCode: function(){
			return _priceCode;
		},
		setPriceCode: function(priceCode){
			_priceCode = priceCode;
		},
		getTitle: function(){
			return _title;
		}
	}

	return Movie;
}());


