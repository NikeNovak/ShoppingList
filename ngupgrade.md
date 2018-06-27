Step-by-step guide to prepare for ngUpgrade and then go through ngUpgrade.
We will go through this simple shopping list repo written in angularjs and migrate it to angular. 

## Prepare for ngUpgrade
### (1) AngularJS v1.4 app
In this version, we have $scope, controllers, a single JavaScript page, and a single HTML page. 

app.js
   
      var app = angular.module("myShoppingList", []); 
      app.controller("myCtrl", function($scope) {
      $scope.products = ["Milk", "Bread", "Cheese", "Avocado"];
      $scope.addItem = function() {
          $scope.errortext = "";
          if(!$scope.addMe) {return;}
          if($scope.products.indexOf($scope.addMe) == -1)
          {
              $scope.products.push($scope.addMe);
          } else {
              $scope.errortext = "The item has already been added to the shopping list.";
          }
          };
          $scope.removeItem = function(x) {
              $scope.errortext = "";
              $scope.products.splice(x, 1);
          };
      });

index.html

      <!DOCTYPE html>
      <html>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
      <script type ="text/javascript" src ="app.js"></script>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <body> 
          <div ng-app="myShoppingList" ng-cloak ng-controller="myCtrl" class="w3-card-2 w3-margin" style="max-width:400px;">
              <header class="w3-container w3-light-grey w3-padding-16">
                  <h3>My Shopping List</h3>
              </header>
              <ul class="w3-ul">
                  <li ng-repeat="x in products" class="w3-padding-16">{{x}}<span ng-click="removeItem($index)" style="cursor:pointer;" class="w3-right w3-margin-right">×</span></li>
              </ul>
              <div class="w3-container w3-light-grey w3-padding-16">
                  <div class="w3-row w3-margin-top">
                  <div class="w3-col s10">
                      <input placeholder="Add shopping items here" ng-model="addMe" class="w3-input w3-border w3-padding">
                  </div>
                  <div class="w3-col s2">
                      <button ng-click="addItem()" class="w3-btn w3-padding w3-green">Add</button>
                  </div>
                  </div>
                  <p class="w3-text-red">{{errortext}}</p>
              </div>
          </div>  
      </body>
      </html>
      
      


## Go through ngUpgrade
