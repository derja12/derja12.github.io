// note: collapsing functions makes things MUCH easier to navigate and read

// 
// Data
// 

DefaultBorderColor = "#0F0F0F";

columnToDayConversions = {
    "2" : "monday-column",
    "3" : "tuesday-column",
    "4" : "wednesday-column",
    "5" : "thursday-column",
    "6" : "friday-column",
    "7" : "saturday-column"
}

monIndexArray1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
tueIndexArray1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
wedIndexArray1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
thurIndexArray1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
friIndexArray1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
satIndexArray1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]

monIndexArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
tueIndexArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
wedIndexArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
thurIndexArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
friIndexArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
satIndexArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]

hourToRowConversions = {
    "8:00" : "2 / 3",
    "8:30" : "3 / 4",
    "9:00" : "4 / 5",
    "9:30" : "5 / 6",
    "10:00" : "6 / 7",
    "10:30" : "7 / 8",
    "11:00" : "8 / 9",
    "11:30" : "9 / 10",
    "12:00" : "10 / 11",
    "12:30" : "11 / 12",
    "13:00" : "12 / 13",
    "13:30" : "13 / 14",
    "14:00" : "14 / 15",
    "14:30" : "15 / 16",
    "15:00" : "16 / 17",
    "15:30" : "17 / 18",
    "16:00" : "18 / 19",
    "16:30" : "19 / 20",
    "17:00" : "20 / 21",
    "17:30" : "21 / 22",
    "18:00" : "22 / 23",
    "18:30" : "23 / 24",
    "19:00" : "24 / 25",
    "19:30" : "25 / 26",
    "20:00" : "26 / 27",
    "20:30" : "27 / 28",
    "21:00" : "28 / 29",
    "21:30" : "29 / 30",
    "22:00" : "30 / 31"
}

militaryToHourConversions = {
    "8:00" : "8:00am",
    "8:30" : "8:30am",
    "9:00" : "9:00am",
    "9:30" : "9:30am",
    "10:00" : "10:00am",
    "10:30" : "10:30am",
    "11:00" : "11:00am",
    "11:30" : "11:30am",
    "12:00" : "12:00pm",
    "12:30" : "12:30pm",
    "13:00" : "1:00pm",
    "13:30" : "1:30pm",
    "14:00" : "2:00pm",
    "14:30" : "2:30pm",
    "15:00" : "3:00pm",
    "15:30" : "3:30pm",
    "16:00" : "4:00pm",
    "16:30" : "4:30pm",
    "17:00" : "5:00pm",
    "17:30" : "5:30pm",
    "18:00" : "6:00pm",
    "18:30" : "6:30pm",
    "19:00" : "7:00pm",
    "19:30" : "7:30pm",
    "20:00" : "8:00pm",
    "20:30" : "8:30pm",
    "21:00" : "9:00pm",
    "21:30" : "9:30pm",
    "22:00" : "10:00pm"
}

ADD_MODE_ENABLED = false;
DELETE_MODE_ENABLED = false;
SELECTED_EMPLOYEE_NAME = "";
SELECTED_EMPLOYEE_COLOR = "";
SELECTED_EMPLOYEE_ID = -1;
LOADING_EMPLOYEE = false;
REGSITERING = false;

LOCAL_EMPLOYEE_COPIES = []

SCHEDULE_LOAD_VER1 = true;



//
// ONCLICKS/EVENTS and FUNCTIONS
//



// ADD HOURS BUTTON TOGGLE
var addHoursButton = document.querySelector("#add-hours-button");
addHoursButton.onclick = function () {
    if (!ADD_MODE_ENABLED) {
        ADD_MODE_ENABLED = true;
        addHoursButton.style.backgroundColor = "#400601";
        addHoursButton.style.color = "#D90B1C";
        addHoursButton.style.border = "1px solid #FF0000";
    } else {
        ADD_MODE_ENABLED = false;
        addHoursButton.style.backgroundColor = "";
        addHoursButton.style.color = "";
        addHoursButton.style.border = "";
    }

    DELETE_MODE_ENABLED = false;
    deleteHoursButton.style.backgroundColor = "";
    deleteHoursButton.style.color = "";
    deleteHoursButton.style.border = "";
}

// DELETE HOURS BUTTON TOGGLE
var deleteHoursButton = document.querySelector("#delete-hours-button");
deleteHoursButton.onclick = function () {
    if (!DELETE_MODE_ENABLED) {
        DELETE_MODE_ENABLED = true;
        deleteHoursButton.style.backgroundColor = "#400601";
        deleteHoursButton.style.color = "#D90B1C";
        deleteHoursButton.style.border = "1px solid #FF0000";
    } else {
        DELETE_MODE_ENABLED = false;
        deleteHoursButton.style.backgroundColor = "";
        deleteHoursButton.style.color = "";
        deleteHoursButton.style.border = "";
    }

    ADD_MODE_ENABLED = false;
    addHoursButton.style.backgroundColor = "";
    addHoursButton.style.color = "";
    addHoursButton.style.border = "";
}

// SAVE SCHEDULE BUTTON
var saveScheduleButton = document.querySelector("#save-schedule-button");
saveScheduleButton.onclick = function () {
    LOCAL_EMPLOYEE_COPIES.forEach(function (currentEmployee) {
        if (currentEmployee.id != -1) {
            currentEmployee.monhours.sort();
            var monhours = "";
            for (var i = 0; i < currentEmployee.monhours.length; i++) {
                monhours += currentEmployee.monhours[i] + ",";
                if (i == currentEmployee.monhours.length - 1) {
                    monhours = monhours.slice(0, -1);
                }
            }
            if (currentEmployee["monhours"].length < 1) {
                monhours = "";
            }
        
            currentEmployee.tuehours.sort();
            var tuehours = "";
            for (var i = 0; i < currentEmployee.tuehours.length; i++) {
                tuehours += currentEmployee.tuehours[i] + ",";
                if (i == currentEmployee.tuehours.length - 1) {
                    tuehours = tuehours.slice(0, -1);
                }
            }
            if (currentEmployee["tuehours"].length < 1) {
                tuehours = "";
            }
        
            currentEmployee.wedhours.sort();
            var wedhours = "";
            for (var i = 0; i < currentEmployee.wedhours.length; i++) {
                wedhours += currentEmployee.wedhours[i] + ",";
                if (i == currentEmployee.wedhours.length - 1) {
                    wedhours = wedhours.slice(0, -1);
                }
            }
            if (currentEmployee["wedhours"].length < 1) {
                wedhours = "";
            }
        
            currentEmployee.thurhours.sort();
            var thurhours = "";
            for (var i = 0; i < currentEmployee.thurhours.length; i++) {
                thurhours += currentEmployee.thurhours[i] + ",";
                if (i == currentEmployee.thurhours.length - 1) {
                    thurhours = thurhours.slice(0, -1);
                }
            }
            if (currentEmployee["thurhours"].length < 1) {
                thurhours = "";
            }
        
            currentEmployee.frihours.sort();
            var frihours = "";
            for (var i = 0; i < currentEmployee.frihours.length; i++) {
                frihours += currentEmployee.frihours[i] + ",";
                if (i == currentEmployee.frihours.length - 1) {
                    frihours = frihours.slice(0, -1);
                }
            }
            if (currentEmployee["frihours"].length < 1) {
                frihours = "";
            }
        
            var sathours = "";
            for (var i = 0; i < currentEmployee.sathours.length; i++) {
                sathours += currentEmployee.sathours[i] + ",";
                if (i == currentEmployee.sathours.length - 1) {
                    sathours = sathours.slice(0, -1);
                }
            }
            if (currentEmployee["sathours"].length < 1) {
                sathours = "";
            }
            var reload = false;
            if (currentEmployee == LOCAL_EMPLOYEE_COPIES[LOCAL_EMPLOYEE_COPIES.length-1]) {
                reload = true;
            }
            
            updateEmployee(
                currentEmployee.id, 
                currentEmployee.name, 
                currentEmployee.totalhours, 
                currentEmployee.shiftcolor, 
                monhours,
                tuehours,
                wedhours,
                thurhours,
                frihours,
                sathours,
                reload
                );
        }
    });
    ADD_MODE_ENABLED = false;
    addHoursButton.style.backgroundColor = "";
    addHoursButton.style.color = "";
    addHoursButton.style.border = "";
    
    DELETE_MODE_ENABLED = false;
    deleteHoursButton.style.backgroundColor = "";
    deleteHoursButton.style.color = "";
    deleteHoursButton.style.border = "";

}


// NEW EMPLOYEE BUTTON
var newEmployeeButton = document.querySelector("#new-employee-button");
newEmployeeButton.onclick = function () {
    darken = document.createElement("div");
    darken.id = "dark-background";
    

    employeeFormArea = document.createElement("div");
    employeeFormArea.id = "employee-form-area";

    employeeFormHeader = document.createElement("div");
    employeeFormHeader.id = "employee-form-header";
    employeeFormHeader.innerHTML = "New Employee";

    employeeNameQuestion = document.createElement("div");
    employeeNameQuestion.id = "employee-name-question";
    employeeNameQuestion.classList.add("question");
    employeeNameQuestion.innerHTML = "Employee Name:";
    employeeNameQuestion.style.gridRow = "2 / 2";
        
    employeeNameInput = document.createElement("input");
    employeeNameInput.id = "employee-name-input";
    employeeNameInput.classList.add("input");
    employeeNameInput.style.gridRow = "2 / 2";
    employeeNameInput.placeholder = "name";

    employeeColorQuestion = document.createElement("div");
    employeeColorQuestion.id = "employee-color-question";
    employeeColorQuestion.classList.add("question");
    employeeColorQuestion.innerHTML = "Employee Color:";
    employeeColorQuestion.style.gridRow = "4 / 4";

    employeeColorInput = document.createElement("input");
    employeeColorInput.id = "employee-color-input";
    employeeColorInput.classList.add("input");
    employeeColorInput.style.gridRow = "4 / 4";
    employeeColorInput.placeholder = "#FFFFFF";

    submitButton = document.createElement("button");
    submitButton.id = "submit-button";
    submitButton.innerHTML = "SUBMIT";
    submitButton.classList.add("button");
    submitButton.style.gridRow = "6 / 6";
    submitButton.style.gridColumn = "2 / 2";
    submitButton.style.border = "1px solid " + DefaultBorderColor;

    cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.innerHTML = "CANCEL";
    cancelButton.classList.add("button");
    cancelButton.style.gridRow = "6 / 6";
    cancelButton.style.gridColumn = "3 / 3";
    cancelButton.style.border = "1px solid " + DefaultBorderColor;

    body = document.querySelector("body");
    body.appendChild(darken);
    body.appendChild(employeeFormArea);
    employeeFormArea.appendChild(employeeFormHeader);
    employeeFormArea.appendChild(employeeNameQuestion);
    employeeFormArea.appendChild(employeeColorQuestion);
    employeeFormArea.appendChild(employeeNameInput);
    employeeFormArea.appendChild(employeeColorInput);
    employeeFormArea.appendChild(submitButton);
    employeeFormArea.appendChild(cancelButton);

    darken.onclick = function () {
        darken.remove();
        employeeFormArea.remove();
    }

    cancelButton.onclick = function () {
        darken.remove();
        employeeFormArea.remove();
    }

    submitButton.onclick = function () {
        console.log(employeeColorInput.value)
        createEmployee(employeeNameInput.value, employeeColorInput.value);
        darken.remove();
        employeeFormArea.remove();
    }
    
}

// EDIT EMPLOYEE BUTTON
var editEmployeeButton = document.querySelector("#edit-employee-button");
editEmployeeButton.style.backgroundColor = "rgba(0,0,0,.2)";
editEmployeeButton.classList.remove("enabled");
editEmployeeButton.onclick = function () {
    if (SELECTED_EMPLOYEE_ID != -1) {
        var currentEmployee = currentlySelectedEmployee();
        darken = document.createElement("div");
        darken.id = "dark-background";
        
    
        employeeFormArea = document.createElement("div");
        employeeFormArea.id = "employee-form-area";
    
        employeeFormHeader = document.createElement("div");
        employeeFormHeader.id = "employee-form-header";
        employeeFormHeader.innerHTML = "Edit Employee";
    
        employeeNameQuestion = document.createElement("div");
        employeeNameQuestion.id = "employee-name-question";
        employeeNameQuestion.classList.add("question");
        employeeNameQuestion.innerHTML = "Employee Name:";
        employeeNameQuestion.style.gridRow = "2 / 2";
            
        employeeNameInput = document.createElement("input");
        employeeNameInput.id = "employee-name-input";
        employeeNameInput.classList.add("input");
        employeeNameInput.style.gridRow = "2 / 2";
        employeeNameInput.value = currentEmployee["name"];
    
        employeeColorQuestion = document.createElement("div");
        employeeColorQuestion.id = "employee-color-question";
        employeeColorQuestion.classList.add("question");
        employeeColorQuestion.innerHTML = "Employee Color:";
        employeeColorQuestion.style.gridRow = "4 / 4";
    
        employeeColorInput = document.createElement("input");
        employeeColorInput.id = "employee-color-input";
        employeeColorInput.classList.add("input");
        employeeColorInput.style.gridRow = "4 / 4";
        employeeColorInput.value = currentEmployee.shiftcolor;
    
        submitButton = document.createElement("button");
        submitButton.id = "submit-button";
        submitButton.innerHTML = "SAVE";
        submitButton.classList.add("button");
        submitButton.style.gridRow = "6 / 6";
        submitButton.style.gridColumn = "2 / 2";
        submitButton.style.border = "1px solid " + DefaultBorderColor;
    
        cancelButton = document.createElement("button");
        cancelButton.id = "cancel-button";
        cancelButton.innerHTML = "CANCEL";
        cancelButton.classList.add("button");
        cancelButton.style.gridRow = "6 / 6";
        cancelButton.style.gridColumn = "3 / 3";
        cancelButton.style.border = "1px solid " + DefaultBorderColor;
    
        body = document.querySelector("body");
        body.appendChild(darken);
        body.appendChild(employeeFormArea);
        employeeFormArea.appendChild(employeeFormHeader);
        employeeFormArea.appendChild(employeeNameQuestion);
        employeeFormArea.appendChild(employeeColorQuestion);
        employeeFormArea.appendChild(employeeNameInput);
        employeeFormArea.appendChild(employeeColorInput);
        employeeFormArea.appendChild(submitButton);
        employeeFormArea.appendChild(cancelButton);
    
        darken.onclick = function () {
            darken.remove();
            employeeFormArea.remove();
        }
    
        cancelButton.onclick = function () {
            darken.remove();
            employeeFormArea.remove();
        }
    
        submitButton.onclick = function () {
            if (currentEmployee) {
                currentEmployee.monhours.sort();
                var monhours = "";
                for (var i = 0; i < currentEmployee.monhours.length; i++) {
                    monhours += currentEmployee.monhours[i] + ",";
                    if (i == currentEmployee.monhours.length - 1) {
                        monhours = monhours.slice(0, -1);
                    }
                }
                if (currentEmployee["monhours"].length < 1) {
                    monhours = "";
                }

                currentEmployee.tuehours.sort();
                var tuehours = "";
                for (var i = 0; i < currentEmployee.tuehours.length; i++) {
                    tuehours += currentEmployee.tuehours[i] + ",";
                    if (i == currentEmployee.tuehours.length - 1) {
                        tuehours = tuehours.slice(0, -1);
                    }
                }
                if (currentEmployee["tuehours"].length < 1) {
                    tuehours = "";
                }

                currentEmployee.wedhours.sort();
                var wedhours = "";
                for (var i = 0; i < currentEmployee.wedhours.length; i++) {
                    wedhours += currentEmployee.wedhours[i] + ",";
                    if (i == currentEmployee.wedhours.length - 1) {
                        wedhours = wedhours.slice(0, -1);
                    }
                }
                if (currentEmployee["wedhours"].length < 1) {
                    wedhours = "";
                }

                currentEmployee.thurhours.sort();
                var thurhours = "";
                for (var i = 0; i < currentEmployee.thurhours.length; i++) {
                    thurhours += currentEmployee.thurhours[i] + ",";
                    if (i == currentEmployee.thurhours.length - 1) {
                        thurhours = thurhours.slice(0, -1);
                    }
                }
                if (currentEmployee["thurhours"].length < 1) {
                    thurhours = "";
                }

                currentEmployee.frihours.sort();
                var frihours = "";
                for (var i = 0; i < currentEmployee.frihours.length; i++) {
                    frihours += currentEmployee.frihours[i] + ",";
                    if (i == currentEmployee.frihours.length - 1) {
                        frihours = frihours.slice(0, -1);
                    }
                }
                if (currentEmployee["frihours"].length < 1) {
                    frihours = "";
                }

                currentEmployee.sathours.sort();
                var sathours = "";
                for (var i = 0; i < currentEmployee.sathours.length; i++) {
                    sathours += currentEmployee.sathours[i] + ",";
                    if (i == currentEmployee.sathours.length - 1) {
                        sathours = sathours.slice(0, -1);
                    }
                }
                if (currentEmployee["sathours"].length < 1) {
                    sathours = "";
                }

                patchEmployee(
                    SELECTED_EMPLOYEE_ID, 
                    employeeNameInput.value, 
                    employeeColorInput.value,
                    true
                    );
            }
            darken.remove();
            employeeFormArea.remove();
        }
    }
}

// GET CURRENTLY SELECTED EMPLOYEE
function currentlySelectedEmployee() {
    for (var i = 0; i < LOCAL_EMPLOYEE_COPIES.length; i++) {
        if (LOCAL_EMPLOYEE_COPIES[i].id == SELECTED_EMPLOYEE_ID) {
            return LOCAL_EMPLOYEE_COPIES[i];
        }
    }
    return null;
}

// SELECT EMPLOYEE
var employeeSelection = document.querySelector("#employee-selection")
employeeSelection.onchange = function () {
    employee_id = employeeSelection.value;
    if (employee_id != -1) {
        LOADING_EMPLOYEE = true;
        loadEmployee(employee_id);
        editEmployeeButton.style.backgroundColor = "";
        deleteEmployeeButton.style.backgroundColor = "";
        editEmployeeButton.classList.add("enabled");
        deleteEmployeeButton.classList.add("enabled");
    } else {
        if(LOADING_EMPLOYEE) {
            setTimeout(() => {
              }, 1000);
        }
        SELECTED_EMPLOYEE_ID = -1;
        editEmployeeButton.style.backgroundColor = "rgba(0,0,0,.2)";
        deleteEmployeeButton.style.backgroundColor = "rgba(0,0,0,.2)";
        editEmployeeButton.classList.remove("enabled");
        deleteEmployeeButton.classList.remove("enabled");
    }
}

// CREATES SCHEDULE WITH ONCLICKS FOR EACH HALF-HOUR-DIV
function createSchedule() {
    var scheduleGridElement = document.createElement("div");
    var saveFinishedDiv = document.querySelector("#save-complete-notification");
    saveFinishedDiv.style.display = "none";
    scheduleGridElement.innerHTML = '<div class="weekday-headers" id="empty-header"></div><div class="weekday-headers"><p>Monday</p></div><div class="weekday-headers"><p>Tueday</p></div><div class="weekday-headers"><p>Wednesday</p></div><div class="weekday-headers"><p>Thursday</p></div><div class="weekday-headers"><p>Friday</p></div><div class="weekday-headers"><p>Saturday</p></div>';
    scheduleGridElement.style.display = "none";
    for (var i = 0; i < Object.keys(hourToRowConversions).length; i++) {
        var key = Object.keys(hourToRowConversions)[i];
        var halfHourDiv = document.createElement("div");
        halfHourDiv.classList.add("key-column");
        halfHourDiv.style.gridRow = hourToRowConversions[key];
        halfHourDiv.style.gridColumn = "1";
        scheduleGridElement.appendChild(halfHourDiv);
        if (i % 2 == 0) {
            halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            halfHourDiv.innerHTML = militaryToHourConversions[key];
        } else {
            halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
        }
        if (i == Object.keys(hourToRowConversions).length-1) {
            halfHourDiv.style.borderBottom = "";
        }
    }

    // CREATION OF ONCLICKS
    if(SCHEDULE_LOAD_VER1) {
        // MONDAY HOUR BOXES
        monIndexArray1.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[2]);
            halfHourDiv.id = columnToDayConversions[2] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "2";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "monday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.monhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.monhours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        } else {
                            if (ADD_MODE_ENABLED) {
                                var index = localEmployee.monhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index > -1) {       
                                    localEmployee.monhours.splice(index, 1);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.monhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.monhours.splice(index, 1);
                            }
                        }
                    });
                }    
            }
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // TUESDAY HOURS BOXES
        tueIndexArray1.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[3]);
            halfHourDiv.id = columnToDayConversions[3] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "3";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "tuesday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.tuehours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.tuehours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.tuehours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.tuehours.splice(index, 1);
                            }
                        }
                    });
                }
            }  
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // WEDNESDAY HOURS BOXES
        wedIndexArray1.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[4]);
            halfHourDiv.id = columnToDayConversions[4] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "4";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "wednesday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.wedhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.wedhours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.wedhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.wedhours.splice(index, 1);
                            }
                        }
                    });
                }       
            }
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // THURSDAY HOURS BOXES
        thurIndexArray1.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[5]);
            halfHourDiv.id = columnToDayConversions[5] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "5";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "thursday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.thurhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.thurhours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.thurhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.thurhours.splice(index, 1);
                            }
                        }
                    });
                }    
            }
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // FRIDAY HOURS BOXES
        friIndexArray1.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[6]);
            halfHourDiv.id = columnToDayConversions[6] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "6";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "friday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.frihours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.frihours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.frihours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.frihours.splice(index, 1);
                            }
                        }
                    });
                }   
            } 
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // SATURDAY HOURS BOXES
        satIndexArray1.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[7]);
            halfHourDiv.id = columnToDayConversions[7] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "7";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            } 
            if (halfHourDiv.id == "saturday-column-800" 
                || halfHourDiv.id == "saturday-column-830" 
                || halfHourDiv.id == "saturday-column-900"
                || halfHourDiv.id == "saturday-column-1730"
                || halfHourDiv.id == "saturday-column-1800"
                || halfHourDiv.id == "saturday-column-1830"
                || halfHourDiv.id == "saturday-column-1900"
                || halfHourDiv.id == "saturday-column-1930"
                || halfHourDiv.id == "saturday-column-2000"
                || halfHourDiv.id == "saturday-column-2030"
                || halfHourDiv.id == "saturday-column-2100"
                || halfHourDiv.id == "saturday-column-2130" 
                || halfHourDiv.id == "saturday-column-2200") {
                halfHourDiv.innerHTML = "";
                halfHourDiv.classList.remove("half-hour-box");
                halfHourDiv.classList.remove(columnToDayConversions[7]);
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.borderLeft = "1px solid " + DefaultBorderColor;
            } else if (halfHourDiv.id != "saturday-column-1700" && halfHourDiv.id != "saturday-column-930") {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.sathours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.sathours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.sathours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.sathours.splice(index, 1);
                            }
                        }
                    });
                }
            } else if (halfHourDiv.id == "saturday-column-930") {
                halfHourDiv.innerHTML = "";
                halfHourDiv.classList.remove("half-hour-box");
                halfHourDiv.classList.remove(columnToDayConversions[7]);
                halfHourDiv.style.borderLeft = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.backgroundColor = "#000000";
            }          
            scheduleGridElement.appendChild(halfHourDiv);
        });
    } else {
        // MONDAY HOUR BOXES
        monIndexArray2.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[2]);
            halfHourDiv.id = columnToDayConversions[2] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "2";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "monday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.monhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.monhours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        } else {
                            if (ADD_MODE_ENABLED) {
                                var index = localEmployee.monhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index > -1) {       
                                    localEmployee.monhours.splice(index, 1);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.monhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.monhours.splice(index, 1);
                            }
                        }
                    });
                }    
            }
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // TUESDAY HOURS BOXES
        tueIndexArray2.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[3]);
            halfHourDiv.id = columnToDayConversions[3] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "3";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "tuesday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.tuehours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.tuehours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.tuehours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.tuehours.splice(index, 1);
                            }
                        }
                    });
                }
            }  
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // WEDNESDAY HOURS BOXES
        wedIndexArray2.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[4]);
            halfHourDiv.id = columnToDayConversions[4] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "4";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "wednesday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.wedhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.wedhours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.wedhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.wedhours.splice(index, 1);
                            }
                        }
                    });
                }       
            }
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // THURSDAY HOURS BOXES
        thurIndexArray2.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[5]);
            halfHourDiv.id = columnToDayConversions[5] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "5";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "thursday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.thurhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.thurhours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.thurhours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.thurhours.splice(index, 1);
                            }
                        }
                    });
                }    
            }
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // FRIDAY HOURS BOXES
        friIndexArray2.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[6]);
            halfHourDiv.id = columnToDayConversions[6] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "6";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            }
            if (halfHourDiv.id == "friday-column-2200") {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.backgroundColor = "#000000";
            } else {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.frihours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.frihours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.frihours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.frihours.splice(index, 1);
                            }
                        }
                    });
                }   
            } 
            scheduleGridElement.appendChild(halfHourDiv);
        });

        // SATURDAY HOURS BOXES
        satIndexArray2.forEach(function (index) {
            var key = Object.keys(hourToRowConversions)[index];
            var halfHourDiv = document.createElement("div");
            halfHourDiv.innerHTML = "No Labbie";
            halfHourDiv.classList.add("half-hour-box");
            halfHourDiv.classList.add(columnToDayConversions[7]);
            halfHourDiv.id = columnToDayConversions[7] + "-" + key.split(":")[0]+key.split(":")[1];
            halfHourDiv.style.gridRow = hourToRowConversions[key];
            halfHourDiv.style.gridColumn = "7";
            if (index % 2 == 0) {
                halfHourDiv.style.borderBottom = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.style.borderBottom = "2px solid " + DefaultBorderColor;
            } 
            if (halfHourDiv.id == "saturday-column-800" 
                || halfHourDiv.id == "saturday-column-830" 
                || halfHourDiv.id == "saturday-column-900"
                || halfHourDiv.id == "saturday-column-1730"
                || halfHourDiv.id == "saturday-column-1800"
                || halfHourDiv.id == "saturday-column-1830"
                || halfHourDiv.id == "saturday-column-1900"
                || halfHourDiv.id == "saturday-column-1930"
                || halfHourDiv.id == "saturday-column-2000"
                || halfHourDiv.id == "saturday-column-2030"
                || halfHourDiv.id == "saturday-column-2100"
                || halfHourDiv.id == "saturday-column-2130" 
                || halfHourDiv.id == "saturday-column-2200") {
                halfHourDiv.innerHTML = "";
                halfHourDiv.classList.remove("half-hour-box");
                halfHourDiv.classList.remove(columnToDayConversions[7]);
                halfHourDiv.style.borderBottom = "0";
                halfHourDiv.style.borderLeft = "1px solid " + DefaultBorderColor;
            } else if (halfHourDiv.id != "saturday-column-1700" && halfHourDiv.id != "saturday-column-930") {
                halfHourDiv.onclick = function () {
                    LOCAL_EMPLOYEE_COPIES.forEach(function (localEmployee) {
                        if (SELECTED_EMPLOYEE_ID == localEmployee.id) {
                            if (ADD_MODE_ENABLED) {
                                halfHourDiv.style.backgroundColor = localEmployee.shiftcolor;
                                halfHourDiv.innerHTML = localEmployee.name;
                                var index = localEmployee.sathours.indexOf(key.split(":")[0]+key.split(":")[1]);
                                if (index <= -1) {
                                    localEmployee.sathours.push(key.split(":")[0]+key.split(":")[1]);
                                }
                            }
                        }
                        if (DELETE_MODE_ENABLED) {
                            halfHourDiv.style.backgroundColor = "";
                            halfHourDiv.innerHTML = "No Labbie";
                            var index = localEmployee.sathours.indexOf(key.split(":")[0]+key.split(":")[1]);
                            if (index > -1) {       
                                localEmployee.sathours.splice(index, 1);
                            }
                        }
                    });
                }
            } else if (halfHourDiv.id == "saturday-column-930") {
                halfHourDiv.innerHTML = "";
                halfHourDiv.classList.remove("half-hour-box");
                halfHourDiv.classList.remove(columnToDayConversions[7]);
                halfHourDiv.style.borderLeft = "1px solid " + DefaultBorderColor;
            } else {
                halfHourDiv.classList.add("closed-box");
                halfHourDiv.innerHTML = "<b>Closed</b>";
                halfHourDiv.style.backgroundColor = "#000000";
            }          
            scheduleGridElement.appendChild(halfHourDiv);
        });
    }
    

    if (SCHEDULE_LOAD_VER1) {
        scheduleGridElement.id = "schedule1";
    } else {
        scheduleGridElement.id = "schedule2";
    }
    var body = document.querySelector("body");
    body.appendChild(scheduleGridElement);
}

// LOAD SCHEDULE WITH FETCHED EMPLOYEES
function loadSchedule(employeeArray, newEmployeeCreated) {
    if (SCHEDULE_LOAD_VER1) {
        var oldSchedule = document.querySelector("#schedule2"); 
        var scheduleGridElement = document.querySelector("#schedule1");
    } else {
        var oldSchedule = document.querySelector("#schedule1"); 
        var scheduleGridElement = document.querySelector("#schedule2");
    }   
    if (oldSchedule) {
        oldSchedule.remove()
    }
    

    SCHEDULE_LOAD_VER1 = !SCHEDULE_LOAD_VER1;
    var employeeList = document.querySelector("#employee-selection");
    selectedValue = employeeList.value;
    employeeList.innerHTML = '<option value="-1">-------------------</option>';
    LOCAL_EMPLOYEE_COPIES = [];
    employeeArray.forEach(function (employee) {
        localEmployee = employee;
        
        var employeeOption = document.createElement("option");
        employeeOption.style.fontSize = ".8rem";
        employeeOption.innerHTML = employee.name;
        employeeOption.value = employee.id;
        employeeList.appendChild(employeeOption);

        if (employee.monhours) { // MONDAY HOURS
            parsedHours = employee.monhours.split(",");
            localEmployee.monhours = parsedHours;
            parsedHours.forEach(function (HalfHour) {
                var halfHourDiv = document.querySelector("#monday-column-"+HalfHour);
                halfHourDiv.style.backgroundColor = employee.shiftcolor;
                halfHourDiv.innerHTML = employee.name;
            });
        } else {
            localEmployee.monhours = [];
        }

        if (employee.tuehours) { // TUESDAY HOURS
            parsedHours = employee.tuehours.split(",");
            localEmployee.tuehours = parsedHours;
            parsedHours.forEach(function (HalfHour) {
                var halfHourDiv = document.querySelector("#tuesday-column-"+HalfHour);
                halfHourDiv.style.backgroundColor = employee.shiftcolor;
                halfHourDiv.innerHTML = employee.name;
            });
        } else {
            localEmployee.tuehours = [];
        }

        if (employee.wedhours) { // WEDNESDAY HOURS
            parsedHours = employee.wedhours.split(",");
            localEmployee.wedhours = parsedHours;
            parsedHours.forEach(function (HalfHour) {
                var halfHourDiv = document.querySelector("#wednesday-column-"+HalfHour);
                halfHourDiv.style.backgroundColor = employee.shiftcolor;
                halfHourDiv.innerHTML = employee.name;
            });
        } else {
            localEmployee.wedhours = [];
        }

        if (employee.thurhours) { // THURSDAY HOURS
            parsedHours = employee.thurhours.split(",");
            localEmployee.thurhours = parsedHours;
            parsedHours.forEach(function (HalfHour) {
                var halfHourDiv = document.querySelector("#thursday-column-"+HalfHour);
                halfHourDiv.style.backgroundColor = employee.shiftcolor;
                halfHourDiv.innerHTML = employee.name;
            });
        } else {
            localEmployee.thurhours = [];
        }

        if (employee.frihours) { // FRIDAY HOURS
            parsedHours = employee.frihours.split(",");
            localEmployee.frihours = parsedHours;
            parsedHours.forEach(function (HalfHour) {
                var halfHourDiv = document.querySelector("#friday-column-"+HalfHour);
                halfHourDiv.style.backgroundColor = employee.shiftcolor;
                halfHourDiv.innerHTML = employee.name;
            });
        } else {
            localEmployee.frihours = [];
        }

        if (employee.sathours) { // SATURDAY HOURS
            parsedHours = employee.sathours.split(",");
            localEmployee.sathours = parsedHours;
            parsedHours.forEach(function (HalfHour) {
                var halfHourDiv = document.querySelector("#saturday-column-"+HalfHour);
                halfHourDiv.style.backgroundColor = employee.shiftcolor;
                halfHourDiv.innerHTML = employee.name;
            });
        } else {
            localEmployee.sathours = [];
        }

        LOCAL_EMPLOYEE_COPIES.push(localEmployee);


        // employeeDiv.innerHTML = formattedMessage;
        // chatMessageList.insertBefore(newMessage, chatMessageList.childNodes[0])
        // if (chatMessageList.childElementCount > 10) {
        //     chatMessageList.removeChild(chatMessageList.childNodes[chatMessageList.childElementCount-1])
        // }
    });
    scheduleGridElement.style.display = "";
    for(var i = 0; i < employeeList.options.length; i++) {
        if (employeeList.options[i].value == selectedValue) {
            employeeList.value = selectedValue;
        }
    }
    if (newEmployeeCreated) {
        employeeList.value = employeeList.options[employeeList.options.length-1].value;
    }
    if (employeeList.value != -1) {
        LOADING_EMPLOYEE = true;
        loadEmployee(employeeList.value);
        editEmployeeButton.style.backgroundColor = "";
        deleteEmployeeButton.style.backgroundColor = "";
        editEmployeeButton.classList.add("enabled");
        deleteEmployeeButton.classList.add("enabled");
    } else {
        SELECTED_EMPLOYEE_ID = -1;
        editEmployeeButton.style.backgroundColor = "rgba(0,0,0,.2)";
        deleteEmployeeButton.style.backgroundColor = "rgba(0,0,0,.2)";
        editEmployeeButton.classList.remove("enabled");
        deleteEmployeeButton.classList.remove("enabled");
    }
    if (document.querySelector("#white-background")) {
        document.querySelector("#white-background").remove();
    }

    if (document.querySelector("#page-loading-cover")) {
        document.querySelector("#page-loading-cover").remove();
    }
}

// DELETE EMPLOYEE BUTTON
var deleteEmployeeButton = document.querySelector("#delete-employee-button");
deleteEmployeeButton.style.backgroundColor = "rgba(0,0,0,.2)";
deleteEmployeeButton.classList.remove("enabled");
deleteEmployeeButton.onclick = function () {
    if (currentlySelectedEmployee()){
        darken = document.createElement("div");
        darken.id = "dark-background";
        

        employeeFormArea = document.createElement("div");
        employeeFormArea.id = "employee-form-area";

        employeeFormHeader = document.createElement("div");
        employeeFormHeader.id = "employee-form-header";
        employeeFormHeader.innerHTML = "Delete Employee";

        employeeNameQuestion = document.createElement("div");
        employeeNameQuestion.id = "employee-name-question";
        employeeNameQuestion.classList.add("question");
        employeeNameQuestion.innerHTML = "Type the name to confirm:";
        employeeNameQuestion.style.gridRow = "2 / 5";
            
        employeeNameInput = document.createElement("input");
        employeeNameInput.id = "employee-name-input";
        employeeNameInput.classList.add("input");
        employeeNameInput.style.gridRow = "2 / 5";
        employeeNameInput.placeholder = currentlySelectedEmployee().name;

        submitButton = document.createElement("button");
        submitButton.id = "submit-button";
        submitButton.innerHTML = "SUBMIT";
        submitButton.classList.add("button");
        submitButton.style.gridRow = "6 / 6";
        submitButton.style.gridColumn = "2 / 2";
        submitButton.style.border = "1px solid " + DefaultBorderColor;

        cancelButton = document.createElement("button");
        cancelButton.id = "cancel-button";
        cancelButton.innerHTML = "CANCEL";
        cancelButton.classList.add("button");
        cancelButton.style.gridRow = "6 / 6";
        cancelButton.style.gridColumn = "3 / 3";
        cancelButton.style.border = "1px solid " + DefaultBorderColor;

        body = document.querySelector("body");
        body.appendChild(darken);
        body.appendChild(employeeFormArea);
        employeeFormArea.appendChild(employeeFormHeader);
        employeeFormArea.appendChild(employeeNameQuestion);
        employeeFormArea.appendChild(employeeNameInput);
        employeeFormArea.appendChild(submitButton);
        employeeFormArea.appendChild(cancelButton);

        darken.onclick = function () {
            darken.remove();
            employeeFormArea.remove();
        }

        cancelButton.onclick = function () {
            darken.remove();
            employeeFormArea.remove();
        }

        submitButton.disabled = true;
        employeeNameInput.addEventListener("input", function () {
            if (employeeNameInput.value == currentlySelectedEmployee().name) {
                submitButton.disabled = false;
                submitButton.onclick = function () {
                    deleteOnServer(SELECTED_EMPLOYEE_ID);
                    darken.remove();
                    employeeFormArea.remove();
                }
            } else {
                submitButton.disabled = true;
            }
        });    
    }
}

// LOGIN PANEL CLICKS/EVENTS
function createLoginPanelOnclicks() {
    const registerLink = document.querySelector("#register-link");
    const loginUsernameInput = document.querySelector("#login-user-input");
    const loginPasswordInput = document.querySelector("#login-pass-input");
    loginUsernameInput.onkeyup = submitLogin;
    loginPasswordInput.onkeyup = submitLogin;
    registerLink.onclick = function () {

        REGSITERING = true;

        var loginArea = document.querySelector("#login-area");
        loginArea.style.gridTemplateRows = ".8fr auto auto auto auto 1fr .8fr";

        loginUsernameInput.value = "";
        loginPasswordInput.value = "";

        var firstNameText = document.createElement("div");
        firstNameText.innerHTML = "First Name";
        firstNameText.id = "first-name-text";
        firstNameText.classList.add("login-text");
        var lastNameText = document.createElement("div");
        lastNameText.innerHTML = "Last Name";
        lastNameText.id = "last-name-text";
        lastNameText.classList.add("login-text");

        var firstNameInput = document.createElement("input");
        firstNameInput.id = "first-name-input";
        firstNameInput.classList.add("login-input");
        firstNameInput.onkeyup = submitRegister;
        var lastNameInput = document.createElement("input");
        lastNameInput.id = "last-name-input";
        lastNameInput.classList.add("login-input");
        lastNameInput.onkeyup = submitRegister;


        var registerButton = document.createElement("button");
        registerButton.id = "login-register-button";
        registerButton.innerHTML = "Register";
        registerButton.classList.add("login-button");
        registerButton.onkeyup = submitRegister;

        var goBackText = document.createElement("div");
        goBackText.id = "back-to-login-text";
        goBackText.innerHTML = 'Back to <a id="login-link">Login</a> screen';


        loginArea.appendChild(firstNameText);
        loginArea.appendChild(lastNameText);
        loginArea.appendChild(firstNameInput);
        loginArea.appendChild(lastNameInput);
        loginArea.appendChild(registerButton);
        loginArea.appendChild(goBackText);

        document.querySelector("#login-link").onclick = toLoginFromRegister;

        document.querySelector("#login-register-text").remove();
        document.querySelector("#login-submit-button").remove();
        document.querySelector("#white-background").style.gridTemplateRows = "1fr minmax(0px, 500px) 1fr";
        document.querySelector("#login-area-header").innerHTML = "Register";

        registerButton.onclick = function () {
            var username = loginUsernameInput.value;
            var password = loginPasswordInput.value;
            var firstName = firstNameInput.value;
            var lastName = lastNameInput.value;
            createUser(username, password, firstName, lastName);
        }
    }

    const loginButton = document.querySelector("#login-submit-button");
    loginButton.onclick = function () {
        var username = loginUsernameInput.value;
        var password = loginPasswordInput.value;
        createSession(username, password);
    }
}

// EVENT FOR LOGIN
function submitLogin(event) {
    if (event.keyCode == 13) {
        if (REGSITERING) {
            submitRegister(event);
        } else {
            loginUsernameInput = document.querySelector("#login-user-input");
            loginPasswordInput = document.querySelector("#login-pass-input");
            var username = loginUsernameInput.value;
            var password = loginPasswordInput.value;
            createSession(username, password);
        }
    }
}

// EVENT FOR REGISTER
function submitRegister(event) {
    if (event.keyCode == 13) {
        loginUsernameInput = document.querySelector("#login-user-input");
        loginPasswordInput = document.querySelector("#login-pass-input");
        firstNameInput = document.querySelector("#first-name-input");
        lastNameInput = document.querySelector("#last-name-input");
        var username = loginUsernameInput.value;
        var password = loginPasswordInput.value;
        var firstName = firstNameInput.value;
        var lastName = lastNameInput.value;
        createUser(username, password, firstName, lastName);
    }
}

// LOGIN SCREEN CREATE
function createLoginScreen() {
    whiteBackground = document.createElement("div");
    whiteBackground.id = "white-background";
    whiteBackground.innerHTML = '<div id="login-area"><div id="login-area-header">Login</div><div id="login-user-text" class="login-text">Email</div><input id="login-user-input" class="login-input"><div id="login-pass-text" class="login-text">Password</div><input id="login-pass-input" type="password" class="login-input"><button id="login-submit-button" class="login-button" onkeyup="submitLogin(event)">Login</button><div id="login-register-text">Haven\'t <a id="register-link">Registered</a> yet?</div></div>'
    document.querySelector("body").appendChild(whiteBackground);
    createLoginPanelOnclicks();
}

// LOGIN SCREEN FROM REGISTER SCREEN
function toLoginFromRegister() {
    REGSITERING = false;
    var loginArea = document.querySelector("#login-area");
    loginArea.style.gridTemplateRows = ".8fr auto auto 1fr .8fr";
    document.querySelector("#white-background").remove();
    createLoginScreen();
}

// LOGOUT FUNCTION
document.querySelector("#logout-button").onclick = function() {
    console.log("logout clicked.")
    deleteSessionOnServer()
}

//
// FETCH's
//



// FETCH/GET ONE EMPLOYEE
function loadEmployee(employee_id) {
    fetch("https://lab-assistant-schedule.herokuapp.com/employees/"+employee_id, {
        credentials: "include"
    }).then(function (response) {
        response.json().then(function (employee_array) {
            SELECTED_EMPLOYEE_COLOR = employee_array.shiftcolor;
            SELECTED_EMPLOYEE_ID = employee_array.id;
            SELECTED_EMPLOYEE_NAME = employee_array.name;
            LOADING_EMPLOYEE = false;
        });
    });
}

// FETCH/GET ALL EMPLOYEES
function loadEmployees(newEmployeeCreated) {
    fetch("https://lab-assistant-schedule.herokuapp.com/employees", {
        credentials: "include"
    }).then(function (response) {
        if (response.status == 200) {
            response.json().then(function (dataFromServer) {
                loadSchedule(dataFromServer, newEmployeeCreated);
            });
        } 
    });
}

// FETCH/CREATE EMPLOYEE
function createEmployee(name, color) {
    var data = "name=" + encodeURIComponent(name) + "&shiftcolor=" + encodeURIComponent(color);
    fetch("https://lab-assistant-schedule.herokuapp.com/employees", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }).then(function (response) {
        createSchedule();
        loadEmployees(true);
        ADD_MODE_ENABLED = false;
        addHoursButton.style.backgroundColor = "";
        addHoursButton.style.color = "";
        addHoursButton.style.border = "";
        
        DELETE_MODE_ENABLED = false;
        deleteHoursButton.style.backgroundColor = "";
        deleteHoursButton.style.color = "";
        deleteHoursButton.style.border = "";
    });
}

// FETCH/DELETE EMPLOYEE
function deleteOnServer(id) {
    fetch("https://lab-assistant-schedule.herokuapp.com/employees/" + id, {
        method: "DELETE",
        credentials: "include"
    }).then(function (response) {
        createSchedule();
        loadEmployees(false);
    });
}

// FETCH/UPDATE EMPLOYEE
function updateEmployee(id, name, totalhours, shiftcolor, monhours, tuehours, wedhours, thurhours, frihours, sathours, reload) {
    var data =  "name=" + encodeURIComponent(name) + 
                "&totalhours=" + encodeURIComponent(totalhours) + 
                "&shiftcolor=" + encodeURIComponent(shiftcolor) + 
                "&monhours=" + encodeURIComponent(monhours) + 
                "&tuehours=" + encodeURIComponent(tuehours) + 
                "&wedhours=" + encodeURIComponent(wedhours) + 
                "&thurhours=" + encodeURIComponent(thurhours) + 
                "&frihours=" + encodeURIComponent(frihours) + 
                "&sathours=" + encodeURIComponent(sathours);

    fetch("https://lab-assistant-schedule.herokuapp.com/employees/" + id, {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }).then(function (response) {
        if (reload) {
            createSchedule();
            loadEmployees(false);
            var saveFinishedDiv = document.querySelector("#save-complete-notification");
            saveFinishedDiv.style.display = "";
            saveFinishedDiv.style.color = "";
            saveFinishedDiv.style.backgroundColor = "";
            setTimeout(() => {
                saveFinishedDiv.style.color = "rgba(0,0,0,0)";
                saveFinishedDiv.style.backgroundColor = "rgba(0,0,0,0)";
                setTimeout(() => {saveFinishedDiv.style.display = "none";}, 1000);
            }, 1000);
        }
    });
}

// FETCH/PATCH EMPLOYEE
function patchEmployee(id, name, shiftcolor, reload) {
    var data =  "name=" + encodeURIComponent(name) + 
                "&shiftcolor=" + encodeURIComponent(shiftcolor);

    fetch("https://lab-assistant-schedule.herokuapp.com/employees/" + id, {
        method: "PATCH",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }).then(function (response) {
        if (reload) {
            createSchedule();
            loadEmployees(false);
        }
    });
}

// FETCH/CREATE User
function createUser(email, pass, fName, lName) {
    var data = "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(pass) + "&firstName=" + encodeURIComponent(fName) + "&lastName=" + encodeURIComponent(lName);
    fetch("https://lab-assistant-schedule.herokuapp.com/users", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }).then(function (response) {
        if (response.status == 201) {
            toLoginFromRegister();
        } else {
            var registrationFailedText = document.createElement("div");
            registrationFailedText.innerHTML = "Email already in use.";
            registrationFailedText.id = "registration-fail-text";
            document.querySelector("#white-background").appendChild(registrationFailedText);
            setTimeout(function() {
                registrationFailedText.style.color = "rgba(0,0,0,0)";
                setTimeout(function(){registrationFailedText.remove()}, 
                1000)},
            3000);
        }
    });
}

// FETCH/CREATE Session
function createSession(email, pass) {
    var data = "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(pass);
    fetch("https://lab-assistant-schedule.herokuapp.com/sessions", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }, 
        credentials: "include"
    }).then(function (response) {
        if (response.status == 401) {
            var loginFailedText = document.createElement("div");
            loginFailedText.innerHTML = "Login Attempt Failed. Try Again.";
            loginFailedText.id = "login-fail-text";
            document.querySelector("#white-background").appendChild(loginFailedText);
            setTimeout(function() {
                loginFailedText.style.color = "rgba(0,0,0,0)";
                setTimeout(function(){loginFailedText.remove()}, 
                1000)},
            3000);
        } else if (response.status == 201) {
            isNewEmployeeCreated = false;
            loadEmployees(isNewEmployeeCreated);
            createSchedule();            
        }
    });
}

// FETCH/GET SESSION
function loadSessionID() {
    fetch("https://lab-assistant-schedule.herokuapp.com/sessions", {
        credentials: "include"
    }).then(function (response) {
        if (response.status == 200) {
            console.log("successful user load")
            isNewEmployeeCreated = false;
            loadEmployees(isNewEmployeeCreated);
            createSchedule(); 
        } else {
            createLoginScreen();
            if (document.querySelector("#page-loading-cover")) {
                document.querySelector("#page-loading-cover").remove();
            }
        }
    });
}

// FETCH/DELETE SESSION
function deleteSessionOnServer() {
    fetch("https://lab-assistant-schedule.herokuapp.com/sessions", {
        method: "DELETE",
        credentials: "include"
    }).then(function (response) {
        loadSessionID();
    });
}

// RUNTIME EVENTS

document.querySelector("#save-complete-notification").style.display = "none";
loadSessionID();



//  201/401 AUTHENTICATION

//  201/422 REGISTER
//      (422 for email already in use)

// TODO:
// [ ] MAKE THEM LOGIN AFTER REGISTERING!!!