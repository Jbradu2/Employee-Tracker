-- Insert departments
INSERT INTO departments (name) VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Human Resources');

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Associate', 35000.00, 1),
  ('Sales Manager', 70000.00, 1);
  ('Software Engineer', 80000.00, 2),
  ('Financial Analyst', 90000.00, 3),
  ('Human Resource Manager', 75000.00, 4);

-- Insert employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('Victor', 'Vondoom', 1, NULL),
  ('Wanda', 'Maximoff', 2, 1),
  ('James', 'Bradshaw', 3, 2),
  ('Madalyn', 'Martinez', 4, 3);
  ('Chris', 'Anderson', 1, NULL);