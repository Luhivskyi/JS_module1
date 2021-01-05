function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  let price;
  const CHINA = 'Китай';
  const CHILE = 'Чили';
  const AUSTRALIA = 'Австралия';
  const JAMAICA = 'Ямайка';
  
 
switch(country){
    
  case CHINA:
    price = 100;
    message = `Доставка в ${CHINA} будет стоить ${price} кредитов`;
    break;
    
  case CHILE:
    price = 250;
    message = `Доставка в ${CHILE} будет стоить ${price} кредитов`;
    break;
    
  case AUSTRALIA:
    price = 170;
    message = `Доставка в ${AUSTRALIA} будет стоить ${price} кредитов`;
    break;
    
  case JAMAICA:
    price = 120;
    message = `Доставка в ${JAMAICA} будет стоить ${price} кредитов`;
    break;
    
  default:
    message = 'Извините, в вашу страну доставки нет';
    
}
  // Пиши код выше этой строки
  return message;
}