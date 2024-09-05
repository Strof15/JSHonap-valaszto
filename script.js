"use strict";


const months = [
    { name: "Január", days: 31 },
    { name: "Február", days: 28 }, // 2025 nem szökőév
    { name: "Március", days: 31 },
    { name: "Április", days: 30 },
    { name: "Május", days: 31 },
    { name: "Június", days: 30 },
    { name: "Július", days: 31 },
    { name: "Augusztus", days: 31 },
    { name: "Szeptember", days: 30 },
    { name: "Október", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 }
];

const selectElement = document.getElementById('months');
const daysTableBody = document.querySelector('#daysTable tbody');

months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = month.name;
    selectElement.appendChild(option);
});

selectElement.addEventListener('change', function() {
    const selectedMonthIndex = parseInt(this.value);
    const selectedMonth = months[selectedMonthIndex];

    daysTableBody.innerHTML = '';

    for (let day = 1; day <= selectedMonth.days; day++) {
        const row = document.createElement('tr');

        const dayCell = document.createElement('td');
        dayCell.textContent = day;
        row.appendChild(dayCell);

        const inputCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        inputCell.appendChild(input);
        row.appendChild(inputCell);

        daysTableBody.appendChild(row);
    }
});

