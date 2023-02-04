///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const summedPrice = cart.reduce((accumulator, food) => accumulator + food.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE



function calcFinalPrice(cartTotal, couponValue, tax){
    return (cartTotal * tax) + cartTotal - couponValue
}
console.log(calcFinalPrice(10, 3, .1))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

Customer name because it's an easy way to identify someone. This will be a string because it's just normal text.
Customer email because I can send them special offers if needed. This will be a string because it will not need to be changed.
Customer phone number so I can call them if they are placing a to go order. THis will be a string because I'm not performing calculations on it.
If the Customer is under 3 years old, they will eat free. This will be a boolean value because I can check if they are under 3 and make sure they eat free.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const cust1 = {
    name: "John Smith",
    email: "jsmith@email.com",
    phonenumber: "888-777-6666",
    isYoungerThan3: false,
}

console.log(cust1)