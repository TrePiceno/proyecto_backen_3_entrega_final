import Adoption from "../src/dao/Adoption.js";
import mongoose from "mongoose";
import { expect } from "chai";
import { describe, it, before, beforeEach, afterEach } from "mocha";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URI } = process.env;

before( async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(MONGO_URI);
        console.log("Conexión a la base de datos exitosa.");
    } catch (error) {
        console.error(`Error al conectar a la base de datos: ${error.message}`);
    }
});

describe("Test unitarios entrega final backend III", function () {
    this.timeout(5000);
    const daoAdoptions = new Adoption();

    const adoptionMock = {
        owner: "685ddde2fad0cc8022c91218",
        pet: "68605a411fce9be1f15294f8" 
    };

    beforeEach(async () => {
        await mongoose.connection.collection("adoptions").deleteMany({});
    });

    afterEach(async () => {
        await mongoose.connection.collection("adoptions").deleteMany({});
    });

    it("save() debe crear y devolver una adopción con _id", async () => {
        const result = await daoAdoptions.save(adoptionMock);
        expect(result).to.have.property("_id");
        expect(result.owner.toString()).to.equal(adoptionMock.owner);
    });

    it("get() debe obtener un arreglo de adopciones", async () => {
        await daoAdoptions.save(adoptionMock);
        const result = await daoAdoptions.get({});
        expect(result).to.be.an("array");
        expect(result.length).to.be.greaterThan(0);
    });

    it("getBy() debe obtener una única adopción por filtro", async () => {
        const adoption = await daoAdoptions.save(adoptionMock);
        const result = await daoAdoptions.getBy({ owner: adoptionMock.owner });
        expect(result).to.exist;
        expect(result.owner.toString()).to.equal(adoptionMock.owner);
    });

    it("delete() debe eliminar una adopción por su id", async () => {
        const newAdoption = await daoAdoptions.save(adoptionMock);
        const deleted = await daoAdoptions.delete(newAdoption._id);
        expect(deleted).to.exist;
        const found = await daoAdoptions.getBy({ _id: newAdoption._id });
        expect(found).to.be.null;
    });

});
