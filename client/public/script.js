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



// const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency) {
//     return `<h2>
//       ${departureAirport} --> ${arrivalAirport} 
//       ${arrivalDate} 
//       ${price} ${currency}
//     </h2>`;
// }

// const fareElementTheCheapest = function (content) {
//     console.log(content)
//     return `<h1><em>The cheapest fare:</em> ${content.outbound.departureAirport.name} - ${content.outbound.arrivalAirport.name} ${content.outbound.price.value} ${content.outbound.price.currencyCode}<em>!!!</em></h1>`
// }

// const taskNumber = (command) => {
//     return `<h4>Task ${command}</h4>`;
// }

// const loadEvent = function () {


//     const root = document.getElementById("root");
//     console.log(fares);

//     root.insertAdjacentHTML("beforeend", taskNumber(1));

//     fares.forEach((fare) => {
//         const outbound = fare.outbound;
//         const h2FareElement = fareElement(
//             outbound.departureAirport.name,
//             outbound.arrivalAirport.name,
//             outbound.arrivalDate,
//             outbound.price.value,
//             outbound.price.currencyCode
//         );
//         root.insertAdjacentHTML("beforeend", h2FareElement);


//     })

//     // root.insertAdjacentHTML("beforebegin", taskNumber(1));

//     const theCheapest = () => {

//         let cheapestFlight = fares[0]
//         for (let fare of fares) {
//             if (fare.outbound.price.value < cheapestFlight.outbound.price.value) {
//                 cheapestFlight = fare;
//             }
//         }
//         return cheapestFlight;
//     }
//     root.insertAdjacentHTML("beforeend", "</br></br>");
//     root.insertAdjacentHTML("beforeend", taskNumber(2));
//     root.insertAdjacentHTML("beforeend", fareElementTheCheapest(theCheapest()));



// }

// window.addEventListener("load", loadEvent);




// TASK 3 - How many flights from Kraków to Dortmund are in the list - return a number?



// const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency) {
//     return `<h2>
//       ${departureAirport} --> ${arrivalAirport} 
//       ${arrivalDate} 
//       ${price} ${currency}
//     </h2>`;
// }

// const fareElementTheCheapest = function (content) {
//     console.log(content)
//     return `<h1><em>The cheapest fare:</em> ${content.outbound.departureAirport.name} - ${content.outbound.arrivalAirport.name} ${content.outbound.price.value} ${content.outbound.price.currencyCode}<em>!!!</em></h1>`
// }

// const fareElementFromKrkToDtm = function (number) {
//     return `<h2>Number of flights from KRK to DTM: ${number}</h2>`
// }

// const taskNumber = (command) => {
//     return `<h4>Task ${command}</h4>`;
// }

// const loadEvent = function () {


//     const root = document.getElementById("root");
//     console.log(fares);

//     root.insertAdjacentHTML("beforeend", taskNumber(1));

//     fares.forEach((fare) => {
//         const outbound = fare.outbound;
//         const h2FareElement = fareElement(
//             outbound.departureAirport.name,
//             outbound.arrivalAirport.name,
//             outbound.arrivalDate,
//             outbound.price.value,
//             outbound.price.currencyCode
//         );
//         root.insertAdjacentHTML("beforeend", h2FareElement);


//     })

//     const theCheapest = () => {

//         let cheapestFlight = fares[0]
//         for (let fare of fares) {
//             if (fare.outbound.price.value < cheapestFlight.outbound.price.value) {
//                 cheapestFlight = fare;
//             }
//         }
//         return cheapestFlight;
//     }
//     root.insertAdjacentHTML("beforeend", "</br></br>");
//     root.insertAdjacentHTML("beforeend", taskNumber(2));
//     root.insertAdjacentHTML("beforeend", fareElementTheCheapest(theCheapest()));



//     const fromKrkToDtm = () => {

//         let numberOfFlights = 0;
//         for (let fare of fares) {
//             if (fare.outbound.departureAirport.iataCode === "KRK" && fare.outbound.arrivalAirport.iataCode === "DTM") {
//                 numberOfFlights += 1;
//             }
//         }
//         return numberOfFlights;
//     }


//     root.insertAdjacentHTML("beforeend", "</br></br>");
//     root.insertAdjacentHTML("beforeend", taskNumber(3));
//     root.insertAdjacentHTML("beforeend", fareElementFromKrkToDtm(fromKrkToDtm()));

// }

// window.addEventListener("load", loadEvent);






// TASK 4 - On the list from task 1 display flight duration in minutes.



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

const fareElementFromKrkToDtm = function (number) {
    return `<h2>Number of flights from KRK to DTM: ${number}</h2>`
}

const taskNumber = (command) => {
    return `<h4>Task ${command}</h4>`;
}

const loadEvent = function () {


    const root = document.getElementById("root");
    console.log(fares);

    root.insertAdjacentHTML("beforeend", taskNumber(1));

    const flightDuration = (outbound) => {

        let duration = 0;
        let arrivalTime = new Date(outbound.arrivalDate);
        let departureTime = new Date(outbound.departureDate);
        duration = (arrivalTime - departureTime) / 1000 / 60;
        return duration;
    }


    fares.forEach((fare) => {
        const outbound = fare.outbound;
        const h2FareElement = fareElement(
            outbound.departureAirport.name,
            outbound.arrivalAirport.name,
            `${flightDuration(outbound)} min`,
            outbound.price.value,
            outbound.price.currencyCode
        );
        root.insertAdjacentHTML("beforeend", h2FareElement);


    })

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



    const fromKrkToDtm = () => {

        let numberOfFlights = 0;
        for (let fare of fares) {
            if (fare.outbound.departureAirport.iataCode === "KRK" && fare.outbound.arrivalAirport.iataCode === "DTM") {
                numberOfFlights += 1;
            }
        }
        return numberOfFlights;
    }


    root.insertAdjacentHTML("beforeend", "</br></br>");
    root.insertAdjacentHTML("beforeend", taskNumber(3));
    root.insertAdjacentHTML("beforeend", fareElementFromKrkToDtm(fromKrkToDtm()));





   



    root.insertAdjacentHTML("beforeend", "</br></br>");
    root.insertAdjacentHTML("beforeend", taskNumber(4));
    root.insertAdjacentHTML("beforeend", `Solution --> see the task 1`);






}

window.addEventListener("load", loadEvent);