let totalExpense = 0;

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (!title || !amount || !category) {
        alert("Please fill all fields");
        return;
    }

    const expenseList = document.getElementById("expenseList");

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${title} (${category})</span>
        <strong>₹${amount}</strong>
    `;

    expenseList.appendChild(li);

    totalExpense += parseFloat(amount);
    document.getElementById("total").innerText = totalExpense;

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
}
