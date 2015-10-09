var Rental = (function() {
	'use strict';

	var _movie, daysRented;

	function Rental(movie, daysRented) {
		_movie = movie;
		_daysRented = daysRented;
	}

	Rental.prototype.getDaysRented = function() {
		return _daysRented;
	};

	Rental.prototype.getMovie = function() {
		return _movie;
	};

	return Rental;
}());