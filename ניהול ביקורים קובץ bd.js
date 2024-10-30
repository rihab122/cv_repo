document.getElementById('addVisitForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const visitId = document.getElementById('visitId').value;
    const guardName = document.getElementById('guardName').value;
    const status = document.getElementById('status').value;

    const visitTableBody = document.getElementById('visitTableBody');
    const newRow = visitTableBody.insertRow();

    newRow.innerHTML = `
        <td>${visitId}</td>
        <td>${guardName}</td>
        <td>${new Date().toLocaleString()}</td>
        <td>${status}</td>
        <td>
            <button onclick="editVisit(this)">ערוך</button>
            <button onclick="deleteVisit(this)">מחק</button>
        </td>
    `;

    logActivity("הוספת ביקור", ` מספר נקודה: ${visitId}`);
    updateStats();
    document.getElementById('addVisitForm').reset();
});
function deleteVisit(button) {
    if (confirm("האם אתה בטוח שברצונך למחוק ביקור זה?")) {
        const row = button.parentElement.parentElement;
        const visitId = row.cells[0].innerText;
        logActivity("מחיקת ביקור", ` מספר נקודה: ${visitId}`);
        row.remove();
        updateStats();
    }
}
function editVisit(button) {
    if (confirm("האם אתה בטוח שברצונך לערוך ביקור זה?")) {
        const row = button.parentElement.parentElement;
        const visitId = row.cells[0].innerText;
        document.getElementById('visitId').value = row.cells[0].innerText;
        document.getElementById('guardName').value = row.cells[1].innerText;
        document.getElementById('status').value = row.cells[3].innerText;
        logActivity("עריכת ביקור", ` מספר נקודה: ${visitId}`);
        row.remove();
        updateStats();
    }
}
function filterVisits() {
    const filterStatus = document.getElementById("filterStatus").value;
    const tableBody = document.getElementById("visitTableBody");
    const rows = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const status = rows[i].cells[3].innerText;
        rows[i].style.display = (filterStatus === "all" || status === filterStatus) ? "" : "none";
    }
}
function exportToExcel() {
    const table = document.getElementById("visitTableBody");
    const data = [];

    for (let i = 0, row; row = table.rows[i]; i++) {
        const rowData = [];
        for (let j = 0, col; col = row.cells[j]; j++) {
            rowData.push(col.innerText);
        }
        data.push(rowData);
    }

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Visits");
    XLSX.writeFile(wb, "ביקורים.xlsx");
}
function logActivity(action, details) {
    const logList = document.getElementById("activityLog");
    const logEntry = document.createElement("li");
    logEntry.innerText = `${new Date().toLocaleString()} - ${action}: ${details}`;
    logList.appendChild(logEntry);
}
function updateStats() {
    const rows = document.getElementById("visitTableBody").getElementsByTagName("tr");
    let completedCount = 0;
    let inProgressCount = 0;

    for (let i = 0; i < rows.length; i++) {
        const status = rows[i].cells[3].innerText;
        if (status === "הושלם") completedCount++;
        if (status === "במהלך") inProgressCount++;
    }

    document.getElementById("completedVisits").innerText = completedCount;
    document.getElementById("inProgressVisits").innerText = inProgressCount;
}
