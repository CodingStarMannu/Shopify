const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedList = document.getElementById('selected-list');
const totalElement = document.getElementById('total');

const maxItems = 8;
let selectedItems = [];

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const selectedCount = selectedItems.length;
        if (this.checked && selectedCount < maxItems) {
            selectedItems.push(this.value);
        } else if (!this.checked) {
            const index = selectedItems.indexOf(this.value);
            if (index !== -1) {
                selectedItems.splice(index, 1);
            }
        } else {
            this.checked = false;
        }
        updateSelectedList();
        calculateTotalPrice();
    });
});

function updateSelectedList() {
    selectedList.innerHTML = '';
    selectedItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        selectedList.appendChild(li);
    });
}

function calculateTotalPrice() {
    // You would implement the logic to calculate the total price based on selected items here
    // Update the totalElement.textContent with the calculated price
    totalElement.textContent = calculatePrice(selectedItems);
}

function calculatePrice(selectedItems) {
    // Implement your price calculation logic here
    // You might have a predefined price for each chocolate type and calculate the total price accordingly
    let totalPrice = 0;
    selectedItems.forEach((item) => {
        // Calculate the price for each selected item and add it to totalPrice
        // Example: totalPrice += getPriceForItem(item);
    });
    return totalPrice;
}
