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

export const getCarById = async (id: string) => {
  const car = await Car.findById(id);

  if (!car) {
    throw new Error(`Car:${id} not find`);
  }

  return car;
}