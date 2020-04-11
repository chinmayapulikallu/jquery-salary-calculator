$(document).ready(handleReady);

let dataBase = [];
let sumOfMonthlyCost = 0;
let totalMonthlyCost;

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
        displayDetails();
        sumOfMonthlyCost += Number(empDetails.empSalary);
        totalMonthlyCost = Math.round(sumOfMonthlyCost / 12);
        $('#totalMonth').text(`Total Monthly: $ ${totalMonthlyCost}`);
    } //end has employee first name
} //end addDetails


function displayDetails() {
        console.log('in display details');
        let el = $('#tableBody');
        el.empty();
        for( let i=0; i<dataBase.length; i++) {
            $('#tableBody').append(`<tr><td>${dataBase[i].empFirstName}</td><td>${dataBase[i].empLastName}</td>
            <td>${dataBase[i].empId}</td><td>${dataBase[i].empTitle}</td>
            <td>${dataBase[i].empSalary}</td><td><button>delete</button></td></tr>`);
        } // end for
} //end displayDetails

function handleReady() {
   $('#addBtn').on('click', addDetails);
} //end handleReady

