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
