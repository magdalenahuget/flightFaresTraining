import { fares } from '/data.js';


// TASK 1 - Display on page flights in h2 tag according to the below example: 
// departureAirport.city.name —> arrivalAirport.city.name arrivalDate price.value price.currencySymbol
// eg. Kraków - Barcelona 2022-12-21T14:00:00 98 zł



// const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency) {
//   return `<h2>
//       ${departureAirport} --> ${arrivalAirport} 
//       ${arrivalDate} 
//       ${price} ${currency}
//     </h2>`;
// }

// const loadEvent = function () {


//   const root = document.getElementById("root");
//   console.log(fares);


//   fares.forEach((fare) => {
//     const outbound = fare.outbound;
//     const h2FareElement = fareElement (
//       outbound.departureAirport.name,
//       outbound.arrivalAirport.name,
//       outbound.arrivalDate,
//       outbound.price.value,
//       outbound.price.currencyCode
//     );
//     root.insertAdjacentHTML("beforeend", h2FareElement);
//   })


// }

// window.addEventListener("load", loadEvent);





// TASK 2 - Find the first cheapest fare - return the departure, arrival airport and it's price in an object.



const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency) {
    return `<h2>
      ${departureAirport} --> ${arrivalAirport} 
      ${arrivalDate} 
      ${price} ${currency}
    </h2>`;
}

const fareElementTheCheapest = function (content) {
    console.log(content)
    return `<h1><em>The cheapest fare:</em> ${content.outbound.departureAirport.name} - ${content.outbound.arrivalAirport.name} ${content.outbound.price.value} ${content.outbound.price.currencyCode}<em>!!!</em></h1>`
}

const taskNumber = (command) => {
    return `<h4>Task ${command}</h4>`;
}

const loadEvent = function () {


    const root = document.getElementById("root");
    console.log(fares);

    root.insertAdjacentHTML("beforeend", taskNumber(1));

    fares.forEach((fare) => {
        const outbound = fare.outbound;
        const h2FareElement = fareElement(
            outbound.departureAirport.name,
            outbound.arrivalAirport.name,
            outbound.arrivalDate,
            outbound.price.value,
            outbound.price.currencyCode
        );
        root.insertAdjacentHTML("beforeend", h2FareElement);


    })

    // root.insertAdjacentHTML("beforebegin", taskNumber(1));

    const theCheapest = () => {

        let cheapestFlight = fares[0]
        for (let fare of fares) {
            if (fare.outbound.price.value < cheapestFlight.outbound.price.value) {
                cheapestFlight = fare;
            }
        }
        return cheapestFlight;
    }
    root.insertAdjacentHTML("beforeend", "</br></br>");
    root.insertAdjacentHTML("beforeend", taskNumber(2));
    root.insertAdjacentHTML("beforeend", fareElementTheCheapest(theCheapest()));



}

window.addEventListener("load", loadEvent);