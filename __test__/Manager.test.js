const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("extends", () => {
        it("Debe crear una clase 'Manager' extendida de la clase 'Employee'", () => {
            const manager = new Employee('Pedro', 321, 'correoPedro@gamil.com');
            expect(manager.name).toEqual('Pedro');
            expect(manager.id).toEqual(321);
            expect(manager.email).toEqual('correoPedro@gamil.com');
        });
    }); 

    describe("getOfficeNumber", () => {
        it("Debe crear una propiedad nueva del objeto llamada 'officeNumber' en la cual se almacene el numero de oficina del Manager ", () => {
            const manager = new Employee('Pedro', 321, 'correoPedro@gamil.com');
            const officeNumber = 8;
            manager.officeNumber = officeNumber;
            expect(officeNumber).toEqual(8);
            expect(manager.officeNumber).toEqual(8);
        });
    });

    describe("getRole", () => {
        it("Debe cambiar la propiedad 'role' del objeto y asignar el rol de Manager", () => {
            const manager = new Employee();
            const role = 'Manager';
            manager.role = role;
            expect(role).toEqual('Manager');
            expect(manager.role).toEqual('Manager');
        });
    });
});