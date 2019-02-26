import React, { Component } from 'react';
import {graphql} from 'react-apollo';

//import queries
import {getBooksQuery} from '../queries/queries';

class BookList extends Component {
    displayBooks(){
        const data = this.props.data;
        if(data.loading){
            return (
                <div> Loading Books ... </div>
            );
        }else{
            return(
                data.books.map(book =>{
                    return(
                        <li key={book.id}>{book.name}
                             Written by <i className="author" title={book.author.age}>{book.author.name}</i>
                        </li>
                    )
                })
            )
        }
    }
  render() {
    return (
        <div>
            <ul id="book-list">
                {this.displayBooks()}
            </ul>
        </div>
    );
  }
}

// bind query with component and export it
export default graphql(getBooksQuery)(BookList);