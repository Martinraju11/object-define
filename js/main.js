var car = {
    carname: "City",
    brand: "Honda",
    varient: "petrol",
    color: "White",
    mileage: 15,
    person_capacity: 5,
    showroom_price: 1600000,
    tax: 200000,
    total_price() { return this.showroom_price + this.tax }
}

document.write(`The selected car is ${car.carname}`, "<br>");
document.write(`Total price of ${car.brand} ${car.carname} is ${car.total_price()}`, "<br>");

document.write(`keys of car is ${Object.keys(car)}`, "<br>", `values of car is ${Object.values(car)}`, "<br>", `entries of car is ${Object.entries(car)}`, "<br>", "<br>", "<br>");


var shirt = {
    brand: "Otto",
    color: "white",
    size: "L",
    model: "plain",
    type: "full-handed",
    price: 500,
    full_details() {
        return (this.brand + " " + this.color + " " + this.size + " " + this.model + " " + this.type + " " + this.price);
    }
}

document.write(`keys of shirt is ${Object.keys(shirt)}`, "<br>", `values of shirt is ${Object.values(shirt)}`, "<br>", `entries of shirt is ${Object.entries(shirt)}`, "<br>");

document.write(`Brand of shirt is ${shirt.brand}`, "<br>");
document.write(`full details of the shirt (brand , color , size , model , type, price) is ${shirt.full_details()} `, "<br>", "<br>", "<br>");


var person_bio = {
    fname: "Martin",
    lname: "raju",
    full_name() { return this.fname + " " + this.lname },
    gender: "male",
    place_of_birth: "tirunelveli",
    id: 01,
    contact: {
        personal: 9486987082,
        home: 8667458723
    },
    marks: {
        mark_10th: 94.6,
        mark_12th: 97.6
    }
}

document.write(`keys of person is ${Object.keys(person_bio)}`, "<br>", `values of person is ${Object.values(person_bio)}`, "<br>", `entries of person is ${Object.entries(person_bio)}`, "<br>");

document.write(`${person_bio.full_name()} is the person's full name`, "<br>");

document.write(`${person_bio.contact.personal} is the person's personal phone number`, "<br>", "<br>", "<br>");

var air_conditioner = {
    brand: "Samsung",
    tonnage: 1.5,
    type: "inverter AC",
    model: "AR18CYNZABE",
    color: "white",
    original_price: 72990,
    offer_price: 42500,
    discount() { return this.original_price - this.offer_price },
    discount_percent() { return ((this.original_price - this.offer_price) / this.original_price) * 100 }
}

document.write(`keys of AC is ${Object.keys(air_conditioner)}`, "<br>", `values of AC is ${Object.values(air_conditioner)}`, "<br>", `entries of AC is ${Object.entries(air_conditioner)}`, "<br>");

document.write(`Tonnage of ${air_conditioner.brand} Air conditioner is ${air_conditioner.tonnage}`, "<br>");

document.write(`Amount discounted is ${air_conditioner.discount()}`, "<br>");
document.write(`Percentage discounted is ${air_conditioner.discount_percent()}`, "<br>", "<br>", "<br>");


var tredmill = {
    brand: "Fitkit",
    motor_power: "2HP",
    max_speed: "14km/hr",
    color: "black",
    material: "Alloy steel",
    price: 14799,
    emi: 707,
    emi_months() {
        return parseInt(this.price / this.emi);
    }
}

document.write(`keys of tredmill is ${Object.keys(tredmill)}`, "<br>", `values of tredmill is ${Object.values(tredmill)}`, "<br>", `entries of tredmill is ${Object.entries(tredmill)}`, "<br>");

document.write(`Motor power of tredmill is ${tredmill.motor_power}`, "<br>");

document.write(`EMI duration for tredmill is ${tredmill.emi_months()}`, "<br>", "<br>");
