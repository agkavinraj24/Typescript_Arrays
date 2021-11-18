"use strict";
exports.__esModule = true;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayFindMultiples = function (myArray) {
        var x = 0;
        var number = [];
        myArray.filter(function (num) {
            if (typeof (num) == 'number') {
                num % 5 == 0;
                number[x] = num;
                x++;
            }
        });
        return number;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        return myArray.filter(function (num) { return isNaN(num); });
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var primenum = [];
        var k = 0;
        str.filter(function (num) {
            var count = 0;
            if (typeof (num) == 'number') {
                for (var i = 2; i < num / 2; i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0) {
                    primenum[k] = num;
                    k++;
                }
            }
        });
        return primenum;
    };
    ArrayComponent.prototype.arraySort = function (strarray) {
        strarray.sort();
        strarray.reverse();
        return strarray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        return myArray.map(function (num) { return num % 3 == 0 ? 5 : num; });
    };
    return ArrayComponent;
}());
var myArray = [12, 90, "hello", "10", "world", 3, 85, 7, 20, 100,];
var strarray = ["a", "aa", "aaa", "aaaaaaaa", "aaa"];
var array = new ArrayComponent();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(strarray));
console.log(array.arrayReplace(myArray));
