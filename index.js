// Write your solution in this file!
let employees = {
    name : 'kevin',
    streetAddress : 'windsor', 
}

function updateEmployeeWithKeyAndValue(employees, name, val) {
    let copyOfEmployees = {...employees};
    copyOfEmployees.name = val

    return copyOfEmployees;
}