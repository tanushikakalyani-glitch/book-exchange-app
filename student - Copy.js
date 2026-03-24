// ---------------- BOOK DATA (FOR JUDGES) ----------------
const books = [
  {
    title: "Introduction to C",
    subject: "Programming",
    type: "Sell",
    price: 150
  },
  {
    title: "Data Structures Using C",
    subject: "Data Structures",
    type: "Free",
    price: 0
  },
  {
    title: "Engineering Mathematics",
    subject: "Linear Algebra",
    type: "Sell",
    price: 200
  },
  {
    title: "Physics Textbook",
    subject: "Physics",
    type: "Donate",
    price: 0
  }
];

// ---------------- SUBJECT + PDF DATA ----------------
const subjects = {
  "Data Structures": [
    "DS Unit 1 Notes.pdf",
    "Stacks and Queues.pdf",
    "Trees.pdf",
    "Graphs.pdf"
  ],
  "Linear Algebra": [
    "Matrices.pdf",
    "Eigen Values.pdf",
    "Vector Spaces.pdf",
    "Linear Transformations.pdf"
  ]
};

// ---------------- RENDER BOOKS ----------------
function renderBooks(list) {
  const bookSection = document.getElementById("bookSection");
  bookSection.innerHTML = "";

  list.forEach(book => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${book.title}</h3>
      <p><b>Subject:</b> ${book.subject}</p>
      <p><b>Type:</b> ${book.type}</p>
      <p><b>Price:</b> ${book.price === 0 ? "Free" : "₹" + book.price}</p>
    `;

    bookSection.appendChild(div);
  });
}

// ---------------- RENDER SUBJECTS ----------------
function renderSubjects() {
  const subjectSection = document.getElementById("subjectSection");

  for (let subject in subjects) {
    const div = document.createElement("div");
    div.className = "subject-card";

    let pdfList = subjects[subject]
      .map(pdf => `<li><a href="#">📄 ${pdf}</a></li>`)
      .join("");

    div.innerHTML = `
      <h3>${subject}</h3>
      <ul>${pdfList}</ul>
    `;

    subjectSection.appendChild(div);
  }
}

// ---------------- SEARCH ----------------
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = books.filter(
    b =>
      b.title.toLowerCase().includes(value) ||
      b.subject.toLowerCase().includes(value)
  );
  renderBooks(filtered);
});

// ---------------- INITIAL LOAD ----------------
renderBooks(books);
renderSubjects();

