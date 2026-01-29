let expenses = [];
let totalExpense = 0;

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!title || !amount || !category || !date) {
        alert("Please fill all fields");
        return;
    }

    expenses.push({ title, amount, category, date });
    updateUI();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}

function sortByDate() {
    expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    updateUI();
}

function sortByAmount() {
    expenses.sort((a, b) => a.amount - b.amount);
    updateUI();
}

               function updateUI() {
                      const expenseList = document.getElementById("expenseList");
                        expenseList.innerHTML = "";
                         totalExpense = 0;

                          expenses.forEach((exp, index) => {
                         totalExpense += exp.amount;

                       const li = document.createElement("li");
                        li.innerHTML = `
                       <span>
                       <strong>${exp.title}</strong><br>
                        ${exp.category} | ${exp.date}
                     </span>
                               <div>
                                       <strong>₹${exp.amount}</strong><br>
                                          <button class="delete-btn" onclick="deleteExpense(${index})">Remove</button>
                               </div>
                              `;
                      expenseList.appendChild(li);
                  });

                 document.getElementById("total").innerText = totalExpense;
          }

                    let events = [];

                          function addEvent() {
                                    const title = document.getElementById("eventTitle").value;
                                    const date = document.getElementById("eventDate").value;

                                     if (!title || !date) {
                                        alert("Please fill all event fields");
                                         return;
                                            }

                              events.push({ title, date });
                       updateEvents();

                         document.getElementById("eventTitle").value = "";
                         document.getElementById("eventDate").value = "";
                                 }

              function updateEvents() {
                   const list = document.getElementById("eventList");
                      list.innerHTML = "";

                   events.forEach(event => {
                    const li = document.createElement("li");
                     li.innerHTML = `
                          <span>
                             <strong>${event.title}</strong><br>
                           ${event.date}
                         </span>
                         `;
              list.appendChild(li);
               });
}
