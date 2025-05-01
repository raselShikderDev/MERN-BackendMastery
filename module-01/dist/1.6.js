"use strict";
{
    // Normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    // add(1, 2)
    // add(1, "2")
    // Arrow Function
    const substract = (num3, num4) => num3 - num4;
    // substract(4, 3)
    // substract(4, "3")
    // Object method
    const userBalance = {
        name: "Rase",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
    const grades = [34, 56, 67, 23, 43];
    const checkedGrades = grades.map((num) => num * num);
}
