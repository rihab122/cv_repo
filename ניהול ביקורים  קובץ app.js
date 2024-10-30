async function addVisit() {
    const pointId = document.getElementById('pointId').value;
    const guardName = document.getElementById('guardName').value;
    const status = document.getElementById('status').value;

    await fetch('/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pointId, guardName, status }),
    });
    loadVisits();
}
async function deleteVisit() {
    const deleteId = document.getElementById('deleteId').value;

    await fetch(`/visits/${deleteId}`, { method: 'DELETE' });
    loadVisits();
}
async function updateVisit() {
    const updateId = document.getElementById('updateId').value;
    const guardName = document.getElementById('updateGuardName').value;
    const status = document.getElementById('updateStatus').value;

    await fetch(`/visits/${updateId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guardName, status }),
    });
    loadVisits();
}
