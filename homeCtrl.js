 angular
  .module('app')
  .controller('homeCtrl', ['$scope', '$state',function($scope,$state) {
    $scope.title = "Register";
    $scope.run=function()
    {
          //alert('I came in');
         var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
         var msg;
         //var username=document.getElementById("uname").value;
          var username=$scope.uname;
          var pword=$scope.passwd;
          var eMail=$scope.email;       
        // var pword=document.getElementById("passwd").value;
         //var eMail=document.getElementById("email").value;

         //alert(username);
          if(username==undefined && pword== undefined && eMail == undefined)
          {
            alert('Not entered');
             $state.go('home');
          }
        else
        {  




         localStorage.setItem('lastname', username);
         db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS REGISTER (uname, password, email)');
            tx.executeSql('INSERT INTO REGISTER (uname, password, email) VALUES ("cibe", "foobar","cibe.sridharan@checkpt")');
            tx.executeSql('INSERT INTO REGISTER (uname, password, email) VALUES ("ams", "lomsg","amritha.r@checkpt.com")');
            tx.executeSql('INSERT INTO REGISTER (uname, password, email) VALUES (?, ?,?)', [username,pword,eMail]);

            //msg = 'Successfully registered';
            //document.querySelector('#status').innerHTML =  msg;

            alert('Successfully registered');
              $state.go('about')

         },null);
       }
  }
  }]);