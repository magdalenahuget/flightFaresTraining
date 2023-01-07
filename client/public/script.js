import { fares } from '/data.js';


// TASK 1 - Display on page flights in h2 tag according to the below example: 
// departureAirport.city.name —> arrivalAirport.city.name arrivalDate price.value price.currencySymbol
// eg. Kraków - Barcelona 2022-12-21T14:00:00 98 zł



const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency) {
  return `<h2>
      ${departureAirport} --> ${arrivalAirport} 
      ${arrivalDate} 
      ${price} ${currency}
    </h2>`;
}

const loadEvent = function () {


  const root = document.getElementById("root");
  console.log(fares);


  fares.forEach((fare) => {
    const outbound = fare.outbound;
    const h2FareElement = fareElement (
      outbound.departureAirport.name,
      outbound.arrivalAirport.name,
      outbound.arrivalDate,
      outbound.price.value,
      outbound.price.currencyCode
    );
    root.insertAdjacentHTML("beforeend", h2FareElement);
  })


}

window.addEventListener("load", loadEvent);