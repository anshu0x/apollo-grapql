// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const author = {
  id: 1,
  name: "anshu",
};
import { books } from "../../fake.js";
export const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, contextValue, info) => {
      return books.find((book) => book.id == args.id);
    },
  },
  Book: {
    author: () => author,
  },
};
