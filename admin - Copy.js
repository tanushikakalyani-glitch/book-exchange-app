
let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const condition = document.getElementById("condition").value;
  const price = document.getElementById("price").value;
  const pdf = document.getElementById("pdf").value;

  if (!name || !subject || !condition) {
    alert("Please fill all required fields");
    return;
  }

  const book = {
    name,
    subject,
    condition,
    price,
    pdf
  };

  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));

  clearForm();
  displayBooks();
}

function displayBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";

    div.innerHTML = `
      <h4>${book.name}</h4>
      <p>Condition: ${book.condition}</p>
      <p>${book.price ? "Price: ₹" + book.price : "Free / Donate"}</p>
      ${book.pdf ? `<a href="${book.pdf}" target="_blank">📄 View PDF</a>` : ""}
    `;

    list.appendChild(div);
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("condition").value = "";
  document.getElementById("price").value = "";
  document.getElementById("pdf").value = "";
}

displayBooks();