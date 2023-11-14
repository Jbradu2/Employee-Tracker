const inquirer = require('inquirer');
const mysql = require('mysql');

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_db',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  startApp();
});

// Function to view all departments
function viewAllDepartments() {
  const query = 'SELECT * FROM departments';
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    startApp();
  });
}

// Function to view all roles
function viewAllRoles() {
  const query = 'SELECT * FROM roles';
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    startApp();
  });
}

// Function to view all employees
function viewAllEmployees() {
  const query = 'SELECT * FROM employees';
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    startApp();
  });
}

// Function to add a department
function addDepartment() {
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    })
    .then((answer) => {
      const query = 'INSERT INTO departments SET ?';
      connection.query(query, { name: answer.name }, (err) => {
        if (err) throw err;
        console.log('Department added successfully!');
        startApp();
      });
    });
}
//enter the name, salary, and department for the role and that role is added to the database
// Function to add a role
function addRole() {
  inquirer
  .prompt([
{
type: 'input',
name: 'name',
message: 'Enter the name of the department:',
},
{type: 'input',
name: 'salary',
message: 'Enter the salary for this role:',
},
{
type: 'input',
name: 'department_id',
message: 'Enter the department id for this role:'
},
  ])
.then((answer) => {
  const query = 'INSERT INTO roles SET ?';
  connection.query(query, answer, (err) => {
    if (err) throw err;
    console.log('Role added successfully!');
    startApp();
  });
});
}


// Function to add an employee
//enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {

}

// Function to update an employee role
// select an employee to update and their new role
function updateEmployeeRole() {

}

// Main application logic
function startApp() {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],


    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          break;
      }
    });
}
