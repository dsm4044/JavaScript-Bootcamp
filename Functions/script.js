'use strict';

const bookings = [];
const createBooking = function(flightNum,numPassengers = 2,price = 800){

    const booking={
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LM123');