$(document).ready(handleReady);

let dataBase = [];

function addDetails() {
    if($('#employeeFirstName').val() === '') {
        alert('employee first name is missing');
    }  // end no employee firts name
    else {
        let empDetails = {
            empFirstName: $('#employeeFirstName').val(),
            empLastName: $('#employeeLastName').val(),
            empId: $('#idNumber').val(),
            empTitle: $('#jobTitle').val(),
            empSalary: $('#annualSalary').val()
        }; //end detailsToAdd
        console.log('employee details:', empDetails);
        dataBase.push(empDetails);
        console.log('employee database:', dataBase);
        $('#employeeFirstName').val('');
        $('#employeeLastName').val('');
        $('#idNumber').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');
    } //end has employee first name
} //end addDetails

function handleReady() {
   $('#addBtn').on('click', addDetails);
} //end handleReady

