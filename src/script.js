const html = [];
const html01 = [];



/*const num = 1
const arr = [1, 2, 3, 4, 5, 6]
html.push(arr.filter((numero) => numero !== num).map((datos)=> numbers(datos)).join(''))


function numbers(nums) {
    return `
    <h1>${nums}</h1>
    `
} */
function codigoManager(empleado) {
    return `<div class="p-2">Office number: ${empleado.officeNumber}</div> `
}

function codigoEngineer(empleado) {
    return `<div class="p-2">GitHub: <a href="${empleado.github}">${empleado.github}</a></div> `
}

function codigoIntern(empleado) {
    return `<div class="p-2">School: ${empleado.school}</div> `
}

function codigo(empleados) {
    let codigoMan = '';
    if (empleados.role == 'Manager') {
        codigoMan = codigoManager(empleados);
    } else if (empleados.role == 'Engineer') {
        codigoMan = codigoEngineer(empleados);
    } else if (empleados.role =='Intern'){
        codigoMan = codigoIntern(empleados);
    }
    return `
    <div class=" col-md-4 d-flex flex-wrap shadow-lg p-3 mb-5 bg-body rounded">
                <div class="col-md-12 bg-secondary text-light ">
                    <h2>${empleados.name}</h2>
                    <h3>${empleados.role}</h3>
                </div>
                <div class="col-md-12 bg-light text-secondary">
                    <div class="p-2">ID: ${empleados.id}</div>
                    <div class="p-2">Email: <a href="mailto:${empleados.email}">${empleados.email}</a></div>
                    ${codigoMan}
                </div>
            </div>
    `
}

function generateMarkdown(employeeArray) {
   // console.log('ELEMENTOS DEL ARREGLO ====> ');
    let engineer = employeeArray.filter((ing) => ing.role == 'Engineer');
    let intern = employeeArray.filter((interno) => interno.role == 'Intern');
    html01.push(employeeArray[0]);
    const html02 = [...html01, ...engineer, ...intern];
  //  console.log('HTML =======>', html02);
    html.push(html02.map((empleados) => codigo(empleados)).join(''));   //AQUI MAPEO PARA GENERAR EL CODIGO PARA CADA ELEMENTO DEL AREGLO
  // console.log('HTML ====>', html);

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    
    <title>Plantilla HTML</title>
</head>
<body>
    <div class="container col-lg-12">
        <h1 class="display-5 text-light bg-primary text-center">EQUIPO DE INGENIERÍA DE SOFTWARE</h1>
        <div class="container col-md-12 d-flex flex-wrap justify-content-center p-1">
          ${html.join('')}
        </div>
    </div>
</body>
</html>
    `
}
 
module.exports = generateMarkdown
