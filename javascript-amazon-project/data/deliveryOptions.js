export const deliveryOptions = [{
  id: '1',
  deliverDays: 7, 
  priceCents: 0
}, {
  id: '2',
  deliverDays: 4, 
  priceCents: 499
}, {
  id: '3',
  deliverDays: 1, 
  priceCents: 999   
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  }); 

  return deliveryOption || deliveryOption[0];
}