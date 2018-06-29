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