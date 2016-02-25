angular
  .module('app')
  .controller('contactCtrl', ['$scope', '$state',function($scope,$state) {
         var uname=localStorage.getItem('lastname');
    //$scope.title = "Order details";
    $scope.title="Hi !!" + " " +uname;
    $scope.start=function()
    {
          

          //alert('I came in');

          // alert(localStorage.getItem('lastname'));

         var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
         var msg;
         
          var fish_name=$scope.fname;
          
          var quan=$scope.quans;       
          

         db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS FISH (id unique, name, price)');
            tx.executeSql('INSERT INTO FISH (id, name, price) VALUES (1, "Kendai",200)');
            tx.executeSql('INSERT INTO FISH (id, name,price) VALUES (2, "Catla",400)');
             tx.executeSql('INSERT INTO FISH (id, name,price) VALUES (2, "Rohu",500)');
            //msg = 'Successfully registered';
            //document.querySelector('#status').innerHTML =  msg;
            alert('correct');

        tx.executeSql('SELECT NAME FROM FISH', [], function (tx, results) {
        	var i=0;
            while(i<results.rows.length){
                  var row = results.rows.item(i).name;
               alert('Reached');    
              
           if(fish_name==row)
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

         },null);
$state.go('exit');
  }
  }]);