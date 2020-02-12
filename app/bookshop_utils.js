
function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName(firstName, lastName){
    return  firstName + " " + lastName
}
function makeHalfPrice(price){
    return price*0.5
}
function countBooks(x){
    return x.length;
};
function isInStock(book) {
  if(book.quantity>=1)
        return true;
    
    else {return false;}
  }
  function countBooks(x){
    return x.length;
};
function getTotalOrderPrice(price, quantity) {
  return price*quantity*0.20;
  }
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};