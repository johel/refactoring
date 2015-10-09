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
		    thisAmount = 0;
			//determina o aluguel de acordo com o tipo
			switch  rental.getMovie().getPriceCode()) {
				case Movie.REGULAR:
					thisAmount += 2;
					if  rental.getDaysRented() > 2)
						thisAmount +=  rental.getDaysRented() - 2) * 1.5;
					break;
				case Movie.NEW_RELEASE:
					thisAmount += rental.getDaysRented() * 3;
					break;
				case Movie.CHILDRENS:
					thisAmount += 1.5;
					if (rental.getDaysRented() > 3)
						thisAmount +=  rental.getDaysRented() - 3) * 1.5;
					break;
			};

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