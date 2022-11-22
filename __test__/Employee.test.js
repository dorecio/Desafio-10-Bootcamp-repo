const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Construir", () => {
        it("Debe crer un objeto 'empleado' con 'id','name','email'", () => {
            const empleado = new Employee('Andres', 1, 'test@test.com');
            expect(typeof empleado).toEqual('object');
            expect(empleado.name).toEqual('Andres');
            expect(empleado.id).toEqual(1);
            expect(empleado.email).toEqual('test@test.com');
        });
    });
    describe("getName", () => {
        it("Debe obtener el nombre del empleado y guardarlo en la propiedad 'name' del objeto", () => {
            const dataName = "Andres";
            const empleado = new Employee('Andres', 1, 'test@test.com');
            expect(empleado.getName()).toEqual(dataName);
        });
    });

    describe("getId", () => {
        it("Debe obtener el 'id' del empleado, el cual será un numero y guardarlo en la propiedad 'id' del objeto", () => {
            const empleado = new Employee('Andres', 1, 'test@test.com');
            const dataId = 1;
            expect(empleado.getId()).toEqual(dataId);
        });
    });

    describe("getEmail", () => {
        it("Debe obtener el e-mail del empleado y guardarlo en la propiedad 'email' del objeto", () => {
            const empleado = new Employee('Andres', 1, 'correo@gmail.com');
            const dataEmail = "correo@gmail.com";
            expect(empleado.getEmail()).toEqual(dataEmail);
        });
    });

    describe("getRole", () => {
        it("Debe crear una propiedad 'role' del objeto y asignar el rol de empleado", () => {
            const empleado = new Employee('Andres', 1, 'test@test.com');
            const role = "Empleado";
            expect(empleado.getRole()).toEqual(role);
        });
    });

});