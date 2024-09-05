"use strict";

        const months = [
            { name: "Január", days: 31 },
            { name: "Február", days: 28 }, 
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
        const daysContainer = document.getElementById('daysContainer');

        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.text = month.name;
            selectElement.appendChild(option);
        });

        selectElement.addEventListener('change', function() {
            const selectedMonthIndex = parseInt(this.value);
            const selectedMonth = months[selectedMonthIndex];

            daysContainer.innerHTML = '';
            const headerRow = document.createElement('div');
            headerRow.classList.add('row', 'header');

            const headerDay = document.createElement('div');
            headerDay.classList.add('cell');
            headerDay.textContent = 'Nap';
            headerRow.appendChild(headerDay);

            const headerInput = document.createElement('div');
            headerInput.classList.add('cell');
            headerInput.textContent = 'Beviteli mező';
            headerRow.appendChild(headerInput);

            daysContainer.appendChild(headerRow);

            for (let day = 1; day <= selectedMonth.days; day++) {
                const row = document.createElement('div');
                row.classList.add('row');
                const dayCell = document.createElement('div');
                dayCell.classList.add('cell');
                dayCell.textContent = day;
                row.appendChild(dayCell);
                const inputCell = document.createElement('div');
                inputCell.classList.add('cell', 'input-cell');
                const input = document.createElement('input');
                input.type = 'text';
                inputCell.appendChild(input);
                row.appendChild(inputCell);
                daysContainer.appendChild(row);
            }
        });
