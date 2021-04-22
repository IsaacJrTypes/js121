var hotel = {
    name: 'Quay',
    //name: value  same
    //key: value  same
    rooms: 40,
    booked: 25,
    gym: true,
// method: roomTypes with index: [0, 1, 2]
    roomTypes: ['twin', 'doubles', 'suite']
    checkAvailability: function () {
    // method == value is the function in an object
        return this.rooms - this.booked;
    }
};

//Go into object: hotel, go to roomTypes method and print out index 2
console.log(hotel.roomTypes[2]);

//functions is outside an object
function checkAvailability() {
    return hotel.rooms - hotel.booked;
}

//go into object and use method to printo out function results
console.log(hotel.checkAvailability())