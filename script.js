function updateTotals() {
    let totalLabor = 0, totalLifter = 0, totalQuli = 0;

    document.querySelectorAll('.labor').forEach(cell => {
        totalLabor += Number(cell.innerText) || 0;
    });
    document.querySelectorAll('.lifter').forEach(cell => {
        totalLifter += Number(cell.innerText) || 0;
    });
    document.querySelectorAll('.quli').forEach(cell => {
        totalQuli += Number(cell.innerText) || 0;
    });

    // Update totals in the table
    document.getElementById('total-labor').innerText = totalLabor;
    document.getElementById('total-lifter').innerText = totalLifter;
    document.getElementById('total-quli').innerText = totalQuli;

    // Update subtotal
    document.getElementById('subtotal').innerText = totalLabor + totalLifter + totalQuli;

    // Update each row's bill dynamically
    document.querySelectorAll('#warehouse-table tr').forEach(row => {
        let labor = Number(row.querySelector('.labor')?.innerText) || 0;
        let lifter = Number(row.querySelector('.lifter')?.innerText) || 0;
        let quli = Number(row.querySelector('.quli')?.innerText) || 0;
        let billCell = row.querySelector('.bill');

        if (billCell) {
            billCell.innerText = labor + lifter + quli;
        }
    });
}

// Add event listener to each editable cell
document.querySelectorAll('.labor, .lifter, .quli').forEach(cell => {
    cell.addEventListener('input', updateTotals);
});

// Initial calculation
updateTotals();