var Customer = (function() {
	'use strict';

	var _name, _rentals = [];

	function Customer(name) {
		_name = name
	}

	Customer.prototype.addRental = function(rental) {
		_rentals.push(rental);
	};

	Customer.prototype.getName = function(rental) {
		return _name;
	};

	Customer.prototype.statement = function(){
		var totalAmount = 0;
		var frequentRenterPoints = 0;
		var rentals = _rentals;
		var result = "Registro de aluguel para " + this.getName() + "\n";
		var rental, thisAmount;
		for (var i = 0; i < rentals.length; i++) {
		    rental = rentals[i];
		    thisAmount = rental.getCharge();
			// adiciona pontos de fidelidade
			frequentRenterPoints ++;
			// adiciona bonus a lancamentos com mais de um dia de aluguel
			if ((rental.getMovie().getPriceCode() == Movie.NEW_RELEASE) && rental.getDaysRented() > 1)
				 frequentRenterPoints ++;
			//mostra os montantes do aluguel
			result += "\t" + rental.getMovie().getTitle()+ "\t" + String.valueOf(thisAmount)+ "\n";
			totalAmount += thisAmount;
		}

		//adiciona as linhas de rodape
		result += "O total devido eh " + String.valueOf(totalAmount) + "\n";
		result += "Vocce ganhou " + String.valueOf(frequentRenterPoints) + " pontos de fidelidade";

		return Customer;
	}	

}());