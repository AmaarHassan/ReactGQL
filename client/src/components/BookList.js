import React, { Component } from 'react';
import {graphql} from 'react-apollo';

//components
import BookDetails from './BookDetails';
//import queries
import {getBooksQuery} from '../queries/queries';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };
    }
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
                        <li key={book.id} onClick={(e) => {this.setState({selected:book.id})}}>{book.name}
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
            <BookDetails id={this.state.selected}/>
        </div>
    );
  }
}

// bind query with component and export it
export default graphql(getBooksQuery)(BookList);