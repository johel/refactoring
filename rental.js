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

	Rental.prototype.getCharge = function() {
		var result = 0;
		switch  this.getMovie().getPriceCode()) {
			case Movie.REGULAR:
				result += 2;
				if  this.getDaysRented() > 2)
					result +=  this.getDaysRented() - 2) * 1.5;
				break;
			case Movie.NEW_RELEASE:
				result += this.getDaysRented() * 3;
				break;
			case Movie.CHILDRENS:
				result += 1.5;
				if (this.getDaysRented() > 3)
					result +=  this.getDaysRented() - 3) * 1.5;
				break;
		};

		return result;
	};

	return Rental;
}());