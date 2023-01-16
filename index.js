const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/gen-template');
const employeeList = [];

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Whats your employees id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of employee?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Required!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'title',
            message: 'What is thier title in the company?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then(employeeData => {
            if (employeeData.confirmAddEmployee) {
                return promptEmployee(employeeData);
            } else {
                return employeeData;
            }
        });
};

promptEmployee();
