let orderCount = 0;

const takeOrder = (topping, crustType) => {
  console.log('Order: '+crustType+' pizza '+topping);
  orderCount ++;  
};

const getSubTotal = (itemCount) =>{
  return itemCount *7.5;
};

const getTax = (orderCount) => {
 return getSubTotal(orderCount) *0.06;
};

const getTotal = () =>{
  return getSubTotal(orderCount) + getTax(orderCount);
};

takeOrder("topped with mushrooms", "thin crust");
takeOrder("topped with ham", "thick crust");
takeOrder("topped with ruccola", "italian crust");

console.log(getTotal());
