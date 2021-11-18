import {StringManipulationService} from "./app-service";


class ArrayComponent implements StringManipulationService 
{
    public arrayFindMultiples(myArray: any): number[] 
    {
        let i = 0;
        let arr1 = [];
        myArray.filter(num => 
        {
            if (typeof (num) == 'number') 
            {
                num % 5 == 0;
                arr1[i] = num;
                i++;
            }
        });
        return arr1;
    }


    public arraySeparate(myArray: any): Array<string> 
    {
        return myArray.filter(num => isNaN(num));
    }


    public arraySplit(str: any): any[] 
    {
        let prime_number = [];
        let k = 0;
        str.filter(num => 
        {
            let count = 0;
            if (typeof (num) == 'number') 
            {
                for (let i = 2; i < num / 2; i++) 
                {
                    if (num % i == 0) 
                    {
                        count++;
                    }
                }
                if (count == 0) 
                {
                    prime_number[k] = num;
                    k++;
                }
            }
        });
        return prime_number;
    }


    public arraySort(string_array:any):any[]
    {
        string_array.sort();
        string_array.reverse();
        return string_array;
    }


    public arrayReplace(myArray:any):any[]
    {
        return myArray.map(num=>num%3==0?5:num);
    }

}
let myArray: any[] = [12, 90,"hello","10","world", 3, 85, 7, 20, 100,];
let string_array:any[]=["a","aa","aaa","aaaaaaaa", "aaa"];
let array = new ArrayComponent();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(string_array));
console.log(array.arrayReplace(myArray));