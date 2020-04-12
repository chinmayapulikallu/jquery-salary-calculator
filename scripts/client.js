$(document).ready(handleReady);

let dataBase = [];
const verbose = true;


function addDetails() {
    if(verbose) console.log('in addDetails');
    
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
        if (verbose) console.log('employee details:', empDetails);
        dataBase.push(empDetails);
        console.log('employee database:', dataBase);
        $('#employeeFirstName').val('');
        $('#employeeLastName').val('');
        $('#idNumber').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');
        displayDetails();
    } //end has employee first name
} //end addDetails

function deleteDetails(id) {
    if (verbose) console.log('in deleteDetails'+id);
    $(`#trId${id}`).remove();
    dataBase.splice(id,1);
    displayDetails();
    console.log(`DataBase of employee after deletion:`, dataBase);
} //end deleteDetails

function displayDetails() {
    if (verbose) console.log('in display details');
        let el = $('#tableBody');
        el.empty();
        let sumOfMonthlyCost = 0;
        let totalMonthlyCost = 0;
        for( let i=0; i<dataBase.length; i++) {
            $('#tableBody').append(`<tr id="trId${i}" ><td>${dataBase[i].empFirstName}</td><td>${dataBase[i].empLastName}</td>
            <td>${dataBase[i].empId}</td><td>${dataBase[i].empTitle}</td><td>${dataBase[i].empSalary}</td>
            <td><button id="deleteBtn${i}" class="btn btn-danger" onClick= "deleteDetails(${i})">Delete</button></td></tr>`);
            sumOfMonthlyCost += Number(dataBase[i].empSalary);
            totalMonthlyCost = Math.round(sumOfMonthlyCost / 12);
        } // end for
    $('#totalMonth').text(`Total Monthly: $ ${totalMonthlyCost}`);
    if (totalMonthlyCost > 20000) {
        $('#totalMonth').addClass('red');
    } else {
        $('#totalMonth').removeClass('red');
    }
} //end displayDetails

function handleReady() {
   $('#addBtn').on('click', addDetails);
} //end handleReady

