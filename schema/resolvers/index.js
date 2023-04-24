// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const author = {
  id: 1,
  name: "anshu",
};
import { books, booksPub } from "../../fake.js";
export const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, contextValue, info) => {
      return books.find((book) => book.id == args.id);
    },
  },
  Mutation: {
    createBook(_, { book }) {
      let new_book = {
        id: books.length + 1,
        ...book,
      };
      books.push(new_book);
      return new_book;
    },
  }, //  name should be same as the type of query
  Book: {
    author: (parent) => {
      // it will print the parent query data
      console.log(parent);
      return author;
    },
    year: (parent) => {
      return booksPub.find((book) => book.id == parent.id).year;
    },
  },
};

/* 
fragments in grapqhl are used to reuse the query 

 query Books {
  books {
    author {
      ...author_Data
    }
    title
    id
    gender
  }
}

fragment author_Data on Author{
  id
  name
}

*/
