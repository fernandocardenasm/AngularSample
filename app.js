(function(){
	
	var app = angular.module('main',[]);

	app.controller('dataTableController',['$http',function($http){
		var auxiliar = this;
		auxiliar.loaded = false;
		$http.get('https://script.google.com/macros/s/AKfycbzrnl4RsjevblKaA71SbqQxfL2_lYWezClDLDMZyX4yy2VlEOM_/exec').success(function(data){
			auxiliar.loaded = true;
			auxiliar.product = data.values;
			
		}).error(function(data,status){
		});
		
	}]);

	/*app.directive('loadFile',function(){
		return{
			restrict: 'E',
			templateUrl: 'loader.html',
			controller: function(){

			},
			controllerAs:'loader'
		}
	});
*/


	var gem = {
	name: 'Dodecahedron',
	price: 2.95,
	description: '. . .',
	};


})();

