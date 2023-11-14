-- Creates the employee_db database if it doesn't exist
CREATE DATABASE IF NOT EXISTS employee_db;

-- Use the employee_db database
USE employee_db;

-- Drop the departments table if it exists
DROP TABLE IF EXISTS departments;

-- Create the departments table
CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- Drop the roles table if it exists
DROP TABLE IF EXISTS roles;
-- Create the roles table
-- The job title, role id, the department that role belongs to, and the salary for that role

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Drop the employees table if it exists
DROP TABLE IF EXISTS employees;

-- Create the employees table
-- Employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);
