$(document).ready(handleReady);

let dataBase = [];


function addDetails() {
    console.log('in addDetails');
    
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
    } //end has employee first name
} //end addDetails

function deleteDetails(id) {
    console.log('in deleteDetails'+id);
    // console.log($('#tableBody').find(`#trId${id}`))
    $(`#trId${id}`).remove();
    dataBase.splice(id,1);
    displayDetails();
} //end deleteDetails

function displayDetails() {
        console.log('in display details');
        let el = $('#tableBody');
        el.empty();
        let sumOfMonthlyCost = 0;
        let totalMonthlyCost;
        for( let i=0; i<dataBase.length; i++) {
            $('#tableBody').append(`<tr id="trId${i}"  ><td>${dataBase[i].empFirstName}</td><td>${dataBase[i].empLastName}</td>
            <td>${dataBase[i].empId}</td><td>${dataBase[i].empTitle}</td>
            <td>${dataBase[i].empSalary}</td><td><button id="deleteBtn${i}" onClick= "deleteDetails(${i})">delete</button></td></tr>`);
            // $(`#deleteBtn${i}`).on('click', deleteDetails(i));
            sumOfMonthlyCost += Number(dataBase[i].empSalary);
            totalMonthlyCost = Math.round(sumOfMonthlyCost / 12);
            $('#totalMonth').text(`Total Monthly: $ ${totalMonthlyCost}`);
            if (totalMonthlyCost > 20000) {
                $('#totalMonth').addClass('red');
            } // end if
        } // end for
} //end displayDetails

function handleReady() {
   $('#addBtn').on('click', addDetails);
} //end handleReady

