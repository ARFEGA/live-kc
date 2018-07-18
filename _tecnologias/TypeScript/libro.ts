class book {
  autor: String;
  title: String;
  constructor(autor, title) {
    this.autor = autor;
    this.title = title;
  }
}

let libro = new book("Perez", "La noche");

console.log(libro.autor);
