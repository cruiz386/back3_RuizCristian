import { fakerDE as faker } from '@faker-js/faker';
import bcrypt from "bcrypt";

const generateUser = async () => {
  return {
    name: faker.person.fullName(),
    mail: faker.internet.email(),
    password: await bcrypt.hash("coder123", 10),
    role: Math.random() > 0.5 ? "user" : "admin",
    pets: [],
  };
};

const generatePet = () => {
  return {
    name: faker.person.firstName(),
    owner: faker.database.mongodbObjectId(),
  };
};

export { generateUser, generatePet };


