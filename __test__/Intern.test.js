const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("extends", () => {
        it("Debe crear una clase 'Intern' extendida de la clase 'Employee'", () => {
            const intern = new Employee('Pedro',321,'correoPedro@gamil.com');
            expect(intern.name).toEqual('Pedro');
            expect(intern.id).toEqual(321);
            expect(intern.email).toEqual('correoPedro@gamil.com');
        });
    }); 

    describe("getSchool", () => {
        it("Debe crear una propiedad nueva del objeto llamada 'school' en la cual se almacene la escuela del Interno o Pasante ", () => {
            const intern = new Employee('Pedro', 321, 'correoPedro@gamil.com');
            const nameSchool = 'Tec';
            intern.school = nameSchool;
            expect(nameSchool).toEqual('Tec');
            expect(intern.school).toEqual('Tec');
        });
    });

    describe("getRole", () => {
        it("Debe cambiar la propiedad 'role' del objeto y asignar el rol de Interno o Pasante", () => {
            const intern = new Employee();
            const role = 'Interno o Pasante';
            intern.role = role;
            expect(role).toEqual('Interno o Pasante');
            expect(intern.role).toEqual('Interno o Pasante');
        });
    });
});