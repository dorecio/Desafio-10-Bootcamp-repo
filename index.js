const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateMarkdown = require('./src/script');

const employeeArray = [];

const managerData = [
    {
        type: 'input',
        message: '¿Cuál es el nombre del gerente de equipo ? ',
        name: 'managerName'
    },
    {
        type: 'input',
        message: '¿Cuál es el identificador de este empleado? ',
        name: 'id'
    },
    {
        type: 'input',
        message: '¿Cuál es su correo electrónico? ',
        name: 'email'
    },

    {
        type: 'input',
        message: '¿Cuál es el número de oficina de este emplado? ',
        name: 'numOficina'
    },
];

const menu =[

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
        type: 'input',
        message: '¿Cuál es el identificador de este empleado? ',
        name: 'id'
    },
    {
        type: 'input',
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
        type: 'input',
        message: '¿Cuál es el identificador de este pasante? ',
        name: 'id'
    },
    {
        type: 'input',
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

// TODO: Crear una función para escribir el archivo HTML
//function writeToFile(fileName, html) {
//    fs.writeFileSync(fileName, html);
//}

// TODO: Crear una función para inicializar la aplicación
const init = () => {
    console.clear();
    console.log('==================================================',);
    console.log('     Forma tu equipo de ingeniería de software    ',);
    console.log('==================================================',);
    inquirer.prompt(managerData).then((data) => {
        console.log('DATA ',data);
        const gerente = new Manager(data.managerName,data.id,data.email,data.numOficina);
        console.log('GERENTE  ====>', gerente);
        // guardar objeto en arreglo de empleados
        employeeArray.push(gerente);
      
    }).then(() => opcionMenu());
}

function opcionMenu() {
    inquirer.prompt(menu).then((menuOpc) => {
        console.log(menuOpc);
        if (menuOpc.agregar == 'Agregar un ingeniero') {
            agregarIngeniero();
        } else if (menuOpc.agregar == 'Agregar un pasante') {
            agregarPasante();
        } else {
            console.log(employeeArray);
            // generar el html  
            writeToFile('./dist/empleados.html', generateMarkdown(employeeArray));
        }
    });
}
 
function agregarIngeniero() {
    inquirer.prompt(op1).then((op1Data) => {
        console.log('DATOS',op1Data);
        const ingeniero = new Engineer(op1Data.engineerName, op1Data.id, op1Data.email, op1Data.gitHub);
        console.log('INGENIERO  ====>', ingeniero);
        // guardar objeto en arreglo de empleados
        employeeArray.push(ingeniero);
      
    }).then(() => opcionMenu());
}

function agregarPasante() {
    inquirer.prompt(op2).then((op2Data) => {
        console.log('DATO_PAS',op2Data);
        const pasante = new Intern(op2Data.pasanteName, op2Data.id, op2Data.email, op2Data.escuela);
        console.log('PASANTE  ====>', pasante);
        // guardar objeto en arreglo de empleados
        employeeArray.push(pasante);
    
    }).then(() => opcionMenu());
}

// Llamada de función para inicializar la aplicación
init();