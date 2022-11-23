const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateMarkdown = require('./src/script');
const { validateEmail } = require('./validation/validate');
const { validateNum } = require('./validation/validate');
const { validateString } = require('./validation/validate');

const employeeArray = [];

const managerData = [
    {
        type: 'input',
        message: '¿Cuál es el nombre del gerente de equipo ? ',
        name: 'managerName'
    },
    {
        type: 'number',
        message: '¿Cuál es el identificador de este empleado? ',
        name: 'id'
    },
    {
        type: 'email',
        message: '¿Cuál es su correo electrónico? ',
        name: 'email'
    },

    {
        type: 'number',
        message: '¿Cuál es el número de oficina de este emplado? ',
        name: 'numOficina'
    },
];

const menu = [

    {
        type: 'list',
        message: '=====================  MENU  =====================',
        name: 'agregar',
        choices: [
            'Agregar un ingeniero',
            'Agregar un pasante',
            'Terminar de formar mi equipo'
        ]
    },
]

const op1 = [
    {
        type: 'input',
        message: '¿Cuál es el nombre del ingeniero ? ',
        name: 'engineerName'
    },
    {
        type: 'number',
        message: '¿Cuál es el identificador de este empleado? ',
        name: 'id'
    },
    {
        type: 'email',
        message: '¿Cuál es su correo electrónico? ',
        name: 'email'
    },
    {
        type: 'input',
        message: '¿Cuál es el nombre de usuario de GitHub? ',
        name: 'gitHub'
    },
]

const op2 = [
    {
        type: 'input',
        message: '¿Cuál es el nombre del pasante ? ',
        name: 'pasanteName'
    },
    {
        type: 'number',
        message: '¿Cuál es el identificador de este pasante? ',
        name: 'id'
    },
    {
        type: 'email',
        message: '¿Cuál es su correo electrónico? ',
        name: 'email'
    },
    {
        type: 'input',
        message: '¿Cuál es la escuela del pasante? ',
        name: 'escuela'
    },
]


function writeToFile(archivo, codigo) {
    fs.writeFileSync(archivo, codigo);
}


// TODO: Crear una función para inicializar la aplicación
const init = () => {
    console.clear();
    console.log('==================================================',);
    console.log('     Forma tu equipo de ingeniería de software    ',);
    console.log('==================================================',);
    inquirer.prompt(managerData).then((data) => {
        const nombre = validateString(data.managerName);
        const identificador = validateNum(data.id);
        const correo = validateEmail(data.email);
        const numeroOficina = validateNum(data.numOficina);
        const gerente = new Manager(nombre, identificador, correo, numeroOficina);
        // guardar objeto en arreglo de empleados
        employeeArray.push(gerente);
    }).then(() => opcionMenu());
}

function opcionMenu() {
    inquirer.prompt(menu).then((menuOpc) => {
        if (menuOpc.agregar == 'Agregar un ingeniero') {
            agregarIngeniero();
        } else if (menuOpc.agregar == 'Agregar un pasante') {
            agregarPasante();
        } else {
            // generar el html  
            writeToFile('./dist/empleados.html', generateMarkdown(employeeArray));
        }
    });
}

function agregarIngeniero() {
    inquirer.prompt(op1).then((op1Data) => {
        const nombre = validateString(op1Data.engineerName);
        const identificador = validateNum(op1Data.id);
        const correo = validateEmail(op1Data.email);
        const git = validateString(op1Data.gitHub);
        const ingeniero = new Engineer(nombre, identificador, correo, git);
        // guardar objeto en arreglo de empleados
        employeeArray.push(ingeniero);
    }).then(() => opcionMenu());
}

function agregarPasante() {
    inquirer.prompt(op2).then((op2Data) => {
        const nombre = validateString(op2Data.pasanteName);
        const identificador = validateNum(op2Data.id);
        const correo = validateEmail(op2Data.email);
        const escuela = validateString(op2Data.escuela);
        const pasante = new Intern(nombre, identificador, correo, escuela);
        // guardar objeto en arreglo de empleados
        employeeArray.push(pasante);
    }).then(() => opcionMenu());
}

// Llamada de función para inicializar la aplicación
init();