export const typeDefs =`
  enum Gender {
    Male
    Female
  }
  type Author {
    id : ID!
    name:String!
  }
  
  type Book {
    id : ID!
    title: String!
    author: Author!
    gender : Gender!
  }

  type Query {
    books: [Book!]!
    book(id:ID!) : Book
  }
   input createBook {
    title:String!
    author: String!
    gender : Gender!
  }

  type Mutation {
      createBook(book:createBook!):Book!
   }
  
`;
