import mongoose from "mongoose";

import { CarBrand, CarCategories, CarDoors, CarFuelTypes, CarSeats, CarStatus, CarTransmissions, ICar } from '@car-rental/shared';

const carSchema = new mongoose.Schema<ICar>({
    name: {
        type: String,
        required: [true, "Please Enter car name"]
    },
    description: {
        type: String,
        required: [true, "Please Enter car description"]
    },
    status: {
        type: String,
        default: "Draft",
        enum: {
            values: CarStatus,
            message: "please select correct status of car"
        }
    },
    rentPerDay: {
        type: Number,
        required: [true, "Please Enter rent per day"]
    },
    address: {
        type: String,
        required: [true, "Please Enter address"]
    },
    images: [
        {
            url: String,
            public_id: String
        }
    ],
    brand: {
        type: String,
        required: [true, "Please Enter car brand"],
        enum: {
            values: CarBrand,
            message: "please select correct brand for car"
        }
    },
    year: {
        type: Number,
        required: [true, "Please Enter car year"]
    },
    transmissions: {
        type: String,
        required: [true, "Please Enter car transmission"],
        enum: {
            values: CarTransmissions,
            message: "please select correct transmission for car"
        }
    },
    milleage: {
        type: Number,
        required: [true, "Please Enter car milleage"]
    },
    power: {
        type: Number,
        required: [true, "Please Enter car power"]
    },
    seats: {
        type: Number,
        required: [true, "Please Enter car seats"],
        enum: {
            values: CarSeats,
            message: "please select correct seats for car"
        }
    },
    doors: {
        type: Number,
        required: [true, "Please Enter car doors"],
        enum: {
            values: CarDoors,
            message: "please select correct doors for car"
        }
    },
    fuelType: {
        type: String,
        required: [true, "Please Enter car fuel type"],
        enum: {
            values: CarFuelTypes,
            message: "please select correct fuelType for car",
        }
    },
    category: {
        type: String,
        required: [true, "Please Enter car category"],
        enum: {
            values: CarCategories,
            message: "please select correct category for car",
        }
    },
    reviews: [String]
},
    {
        timestamps: true
    }
)

carSchema.virtual("ratings").get(function () {
    return {
        value: 5,
        count: 10
    }
})

const Car = mongoose.model<ICar>("Car", carSchema);
export default Car;