import React, { Component } from 'react';
import {graphql} from 'react-apollo';

//import queries
import {getBookDetailsQuery} from '../queries/queries';

class BookDetails extends Component {
  render() {
    return (
        <div id="book-details">
            <p> {this.props.id} </p>
        </div>
    );
  }
}

// bind query with component and export it
export default graphql(getBookDetailsQuery)(BookDetails);