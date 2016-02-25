angular
  .module('app')
  .controller('aboutCtrl', ['$scope','$state', function($scope,$state) {
    $scope.title = "Login details";
   $scope.func=function()
   {
		
         var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
		 if(db)
		 {
		 	//alert('come in');
		 	db.transaction(function (tx) {
               var tmp=tx.executeSql("SELECT PASSWORD FROM REGISTER", [], function (tx, results) {
               	//alert('mid part');
               	var uname=$scope.name1;
               	//document.getElementById('uname').value;
            	var passwd=$scope.pass1;
            	//document.getElementById('passwd').value;
            	//$scope.uname=uname;
            	//alert(uname);
              

            	var flag;
            	//for (var i = 0; i < results.rows.length; i++) {
            		var i=0;
                 while(i<results.rows.length){
                  var row = results.rows.item(i).password;
                   
              
           if(passwd==row)
           {    
           		
           		//alert("Validating user name and passwords");
                //document.getElementById("stat").innerHTML="You will be now redirected to product page";
               alert('Credentials correct');
               break;
            }

            else
            {			
              i=i+1;

              
            }
}

			

               	}, null);
		  } );
	    }

      $state.go('details')
   }

   
  }]);