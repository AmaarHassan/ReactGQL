import React, { Component } from 'react';
import {graphql} from 'react-apollo';

//import queries
import {getBookDetailsQuery} from '../queries/queries';

class BookDetails extends Component {
    displayBookDetails(){
        if(this.props.data.loading){
            return(
                <div>
                    <p> ...Getting Details... </p>
                </div>
            )
        }
        const {book} = this.props.data;
        if(book){
            return(
                <div>
                    <h2> {book.name} </h2>
                    <p> {book.genre} </p>
                    <p> {book.author.name} </p>
                    <p> All books by the author</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item =>{
                                return <li key={item.id}> {item.name} </li> 
                            })
                        }
                    </ul>
                </div>
            );
        }else{
          return(
              <div>
                    <h3> No book selected </h3>
              </div>
          )
        }
    }
    
    render() {
        return (
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        );
  }
}

// since the query is expecting an id, we register it into options
export default graphql(getBookDetailsQuery,{
    options: (props)=>{
        return{
            variables: {
                id: props.id
            }
        }
    }
})(BookDetails);