(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.CheckLunchList = function(){
			var list = $scope.DishesList;
			console.log();
			if(list !== undefined){
				var numberOfDishesItems = getDishesNumber(list);
				$scope.fontColor = "green";
				$scope.inputColor = "greenInput";
				if(numberOfDishesItems <= 3){
					$scope.message = "Enjoy!";
				}
				else
				{
					$scope.message = "Too much!";
				}		
			}
			else{
				$scope.fontColor = "red";
				$scope.inputColor = "redInput";
				$scope.message = "Please enter data first!";
			}
				
		}

		function getDishesNumber(itemsToCountString){
			var splittedDishes = itemsToCountString.split(",");
			splittedDishes = deleteSpaces(splittedDishes);
			return countDishes(splittedDishes);
		}

		function getCommaPositions(textString){
			var commas = [];
			var textStringLength = textString.length;
			for (var i = 0; i < textStringLength; i++) {
				if (textString.charAt(i) === ',') {
					commas.push(i);
				}
			}
			return commas;
		}

		function deleteSpaces(testArray){
			var arrayLength = testArray.length;
			for (var i = 0; i < arrayLength; i++) {
				while(testArray[i].length != 0 && testArray[i].charAt(0) === ' '){
					testArray[i] = testArray[i].substring(1, testArray[i].length);
				}

				while(testArray[i].length != 0 && testArray[i].charAt(testArray[i].length - 1) === ' '){
					testArray[i] = testArray[i].substring(0, testArray[i].length - 1);
				}

			}
			return testArray;
		}

		function countDishes(dishesArray){
			var dishesArrayLength = dishesArray.length;
			var count = 0;
			for (var i = 0; i < dishesArrayLength; i++) {
				if(dishesArray[i] !== ""){
					count++;
				}
			}
			return count;
		}
	}
})();