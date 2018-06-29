Step-by-step guide to prepare for ngUpgrade and then go through ngUpgrade.
We will go through this simple shopping list repo written in angularjs and migrate it to angular. 

## Prepare for ngUpgrade
### (1) AngularJS v1.4 app
In this version, we have $scope, controllers, a single JavaScript page, and a single HTML page. 

![screen shot 2018-06-27 at 2 45 28 pm](https://user-images.githubusercontent.com/27384475/42001455-e1076468-7a18-11e8-86ea-4131d38bec42.png)

app1.4.js
   
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

index1.4.html

      <!DOCTYPE html>
      <html>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
      <script type ="text/javascript" src ="app1.4.js"></script>
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
      
### (2) AngularJS v1.5 app

app1.5.js

      var app = angular.module("myShoppingList", []);
      app.component("shoppingList", {
          template:
              `<div  ng-cloak  class="w3-card-2 w3-margin" style="max-width:400px;">
              <header class="w3-container w3-light-grey w3-padding-16">
                  <h3>My Shopping List</h3>
              </header>
              <ul class="w3-ul">
                  <li ng-repeat="x in $ctrl.products" 
                  class="w3-padding-16">{{x}}
                      <span ng-click="$ctrl.removeItem($index)" 
                      style="cursor:pointer;" 
                      class="w3-right w3-margin-right">x</span>
                  </li>
              </ul>
              <div class="w3-container w3-light-grey w3-padding-16">
                  <div class="w3-row w3-margin-top">
                  <div class="w3-col s10">
                      <input placeholder="Add shopping items here" ng-model="$ctrl.addMe" class="w3-input w3-border w3-padding">
                  </div>
                  <div class="w3-col s2">
                      <button ng-click="$ctrl.addItem()" class="w3-btn w3-padding w3-green">Add</button>
                  </div>
                  </div>
                  <p class="w3-text-red">{{$ctrl.errortext}}</p>
              </div>
              </div>  `,

          controller: function () {
              this.products = ["Milk", "Bread", "Cheese", "Avocado"];
              this.addItem = function () {
                  this.errortext = "";
                  if (!this.addMe) { return; }
                  if (this.products.indexOf(this.addMe) == -1) {
                      this.products.push(this.addMe);
                  } else {
                      this.errortext = "The item has already been added to the shopping list.";
                  }
              };
              this.removeItem = function (x) {
                  this.errortext = "";
                  this.products.splice(x, 1);
              };
          }
      });

index1.5.html

      <!DOCTYPE html>
      <html ng-app="myShoppingList">
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
      <script type="text/javascript" src="app1.5.js"></script>

      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

      <body>
          <shopping-list></shopping-list>
      </body>

      </html>

## Go through ngUpgrade
