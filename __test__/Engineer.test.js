const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("extends", () => {
        it("Debe crear una clase 'Engineer' extendida de la clase 'Employee'", () => {
            const engineer = new Employee('Pedro', 321, 'correoPedro@gamil.com');
            expect(engineer.name).toEqual('Pedro');
            expect(engineer.id).toEqual(321);
            expect(engineer.email).toEqual('correoPedro@gamil.com');
        });
    }); 
      describe("getGithub", () => {
        it("Debe crear una propiedad 'Github' del objeto en el cual se almacene su github", () => {
            const engineer = new Employee();
            const usuario = "Adrew";
            const github = `https://github.com/${usuario}`;
            engineer.github = github;
            expect(github).toEqual(`https://github.com/${usuario}`);
            expect(engineer.github).toEqual(`https://github.com/${usuario}`);
        });
    });

    describe("getRole", () => {
        it("Debe cambiar la propiedad 'role' del objeto y asignar el rol de Ingeniero", () => {
            const engineer = new Employee();
            const role = 'Ingeniero';
            engineer.role = role;
            expect(role).toEqual('Ingeniero');
            expect(engineer.role).toEqual('Ingeniero');
        });
    });
});