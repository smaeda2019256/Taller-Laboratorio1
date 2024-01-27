document.addEventListener('DOMContentLoaded', function() {
    const gradoSelect = document.getElementById('grado-select');
    const lenguajesTable = document.getElementById('lenguajes-table').getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    gradoSelect.addEventListener('change', function() {
        const selectedGrado = this.value;

        for (let i = 0; i < lenguajesTable.length; i++) {
            const grado = lenguajesTable[i].getElementsByTagName('td')[4].textContent.toLowerCase();
            if (selectedGrado === 'todos' || grado === selectedGrado) {
                lenguajesTable[i].style.display = '';
            } else {
                lenguajesTable[i].style.display = 'none';
            }
        }
    });
});