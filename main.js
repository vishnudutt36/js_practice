// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

function addItem (item) {
    return user.cart.push(item);
}

function addTax () { 
    let sumCart = user.cart.sum() * 3%
    return sumCart;
}

function buyItem () {
    if 
}

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.