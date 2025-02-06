import Car from "../models/car.models";
import { CarInput } from "../types/car.types";

export const getAllCars = async () => {
  // logic to get all cars
  const cars = await Car.find();
  return cars;
};


export const createCar = async (carInput: CarInput) => {
  const newCar = await Car.create(carInput);
  return newCar;
}

export const getCarById = async (carId: string) => {
  const car = await Car.findById(carId);

  if (!car) {
    throw new Error(`Car:${carId} not find`);
  }

  return car;
}

export const updateCar = async (carId: string, carInput: CarInput) => {
  const car = await Car.findById(carId);

  if (!car) {
    throw new Error(`Car:${carId} not find`);
  }

  await car.set(carInput).save();
  return true;
}

