var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Marca"] = document.getElementById("Marca").value;
    formData["modelo"] = document.getElementById("modelo").value;
    formData["imei"] = document.getElementById("imei").value;
    formData["base"] = document.getElementById("base").value;
    formData["color"] = document.getElementById("color").value;
    formData["cambios"] = document.getElementById("cambios").value;
    formData["estado"] = document.getElementById("estado").value;
    formData["provedor"] = document.getElementById("provedor").value;
    formData["fechaIngreso"] = document.getElementById("fechaIngreso").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Marca;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.modelo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.imei;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.base;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.color;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cambios;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.estado;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.provedor;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.fechaIngreso;
    

    cell10 = newRow.insertCell(9);
    cell10.innerHTML = ` <a class="btn btn-primary" onClick="onEdit(this)" role="button"><i class="bi bi-pencil-square"></i> </a>`;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<a class="btn btn-danger" onClick="onDelete(this)" role="button"> <i class="bi bi-trash-fill"></i></a>`
}

function resetForm() {
    document.getElementById("Marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("imei").value = "";
    document.getElementById("base").value = "";
    document.getElementById("color").value = "";
    document.getElementById("cambios").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("provedor").value = "";
    document.getElementById("fechaIngreso").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Marca").value = selectedRow.cells[0].innerHTML;
    document.getElementById("modelo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("imei").value = selectedRow.cells[2].innerHTML;
    document.getElementById("base").value = selectedRow.cells[3].innerHTML;
    document.getElementById("color").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cambios").value = selectedRow.cells[5].innerHTML;
    document.getElementById("estado").value = selectedRow.cells[6].innerHTML;
    document.getElementById("provedor").value = selectedRow.cells[7].innerHTML;
    document.getElementById("fechaIngreso").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Marca;
    selectedRow.cells[1].innerHTML = formData.modelo;
    selectedRow.cells[2].innerHTML = formData.imei;
    selectedRow.cells[3].innerHTML = formData.base;
    selectedRow.cells[4].innerHTML = formData.color;
    selectedRow.cells[5].innerHTML = formData.cambios;
    selectedRow.cells[6].innerHTML = formData.estado;
    selectedRow.cells[7].innerHTML = formData.provedor;
    selectedRow.cells[8].innerHTML = formData.fechaIngreso;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Marca").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}