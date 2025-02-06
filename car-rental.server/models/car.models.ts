import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
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
        default: "Draft"
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
        // enum: {
        //     values: [
        //         "Audi",
        //         "BMW",
        //         "Chevorlet",
        //         "Ford",
        //         "Ford",
        //         "Honda",
        //         "Hyundai",
        //         "Mercedes Benz",
        //         "Nissan",
        //         "Toyota",
        //         "Volkswagen",
        //         "Volvo",
        //     ]
        // }
    },
    year: {
        type: Number,
        required: [true, "Please Enter car year"]
    },
    transmission: {
        type: String,
        required: [true, "Please Enter car transmission"]
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
        required: [true, "Please Enter car seats"]
    },
    doors: {
        type: Number,
        required: [true, "Please Enter car doors"]
    },
    fuelType: {
        type: String,
        required: [true, "Please Enter car fuel type"]
    },
    category: {
        type: String,
        required: [true, "Please Enter car category"]
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

const Car = mongoose.model("Car", carSchema);
export default Car;