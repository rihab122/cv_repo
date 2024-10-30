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
