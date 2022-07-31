var crust = ["Thin", "Thick", "Pan", "Deep Dish"]
var sauce = ["None", "Marinara", "Pesto"]
var cheese = ["Provolone", "American", "Mozarella"]
var toppings = [["Pepperoni","Sausage","Olives","Banana Peppers"],["Ham","Pineapple"],["Pepperoni","Sausage","Ham","Bacon"],["Spinach","Banana Peppers"],["Roasted Tomatoe","Spinach","Olives","Red Peppers"]]

function randomPizza(crust, sauce, cheese, tops){
    function pizzaOven(crustType, sauceType, cheeses, toppings){
        var pizza = {}
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheeses = cheeses;
        pizza.toppings = toppings;
        return pizza;
    }

    return pizzaOven(crust, sauce, cheese, tops)
}

console.log(randomPizza(crust[Math.round(Math.random() * crust.length)], sauce[Math.round(Math.random() * sauce.length)], cheese[Math.round(Math.random() * cheese.length)], toppings[Math.round(Math.random() * toppings.length)]))