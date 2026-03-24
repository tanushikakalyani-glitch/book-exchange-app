// ---------------- DUMMY DATA (AUTO LOAD ONCE) ----------------
if (!localStorage.getItem("books")) {
  localStorage.setItem(
    "books",
    JSON.stringify([
      {
        name: "Data Structures Using C",
        subject: "Data Structures",
        price: 250,
        type: "Sell"
      },
      {
        name: "Linear Algebra Notes",
        subject: "Mathematics",
        price: 0,
        type: "Free"
      },
      {
        name: "Engineering Mathematics – I",
        subject: "Mathematics",
        price: 0,
        type: "Donate"
      },
      {
        name: "Introduction to Programming",
        subject: "C Programming",
        price: 200,
        type: "Sell"
      },
      {
        name: "Physics for Engineers",
        subject: "Physics",
        price: 0,
        type: "Donate"
      }
    ])
  );
}

// ---------------- IMPACT CALCULATION ----------------
const books = JSON.parse(localStorage.getItem("books")) || [];

let totalMoney = 0;
let donated = [];

books.forEach(book => {
  if (book.price) totalMoney += Number(book.price);
  if (book.type === "Donate") donated.push(book.name);
});

document.getElementById("booksCount").innerText = books.length;
document.getElementById("moneySaved").innerText = totalMoney;
document.getElementById("booksReused").innerText = books.length;
document.getElementById("paperSaved").innerText = books.length * 150;

// ---------------- DONATED BOOKS LIST ----------------
const donatedList = document.getElementById("donatedBooks");

donated.forEach(book => {
  const li = document.createElement("li");
  li.textContent = "📘 " + book;
  donatedList.appendChild(li);
});
// ---------- CHARTS ----------

// Bar Chart
const barCtx = document.getElementById("impactBarChart").getContext("2d");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Books Exchanged", "Books Reused", "Donations"],
    datasets: [{
      label: "Count",
      data: [
        books.length,
        books.length,
        donated.length
      ],
      backgroundColor: ["#66bb6a", "#42a5f5", "#ff7043"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Pie Chart
const pieCtx = document.getElementById("impactPieChart").getContext("2d");

new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["Money Saved", "Free Books", "Donated Books"],
    datasets: [{
      data: [
        totalMoney,
        books.length - donated.length,
        donated.length
      ],
      backgroundColor: ["#2e7d32", "#1976d2", "#f57c00"]
    }]
  },
  options: {
    responsive: true
  }
});