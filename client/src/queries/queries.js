import {gql} from 'apollo-boost';

//gql import: for creating query
const getAuthorsQuery = gql`
{
    authors{
        id
        name
    }
}
`;

//gql import: for creating query
const getBooksQuery = gql`
{
    books{
        name
        id
        author{
            name
            age
        }
    }
}
`;
// make query variables that take in parameters passed to this function
// ! mark tells that these values are not supposed to be empty
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorID: ID!){
        addBook(name: $name, genre: $genre, authorID: $authorID){
            name
            id
        }
    }
`;

export {getAuthorsQuery, getBooksQuery, addBookMutation}