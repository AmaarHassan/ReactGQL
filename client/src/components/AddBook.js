import React, { Component } from 'react';
import {compose, graphql} from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries';
import {addBookMutation} from '../queries/queries';

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            genre: '',
            authorID: ''
        }
    }
  displayAuthors(){
      var data = this.props.getAuthorsQuery;    //now we have two queries passed in as props
      if(data.loading){
          return (<option disabled> loading authors...</option>);
      }else{
          return data.authors.map(author =>{
              return (
                  <option key={author.id} value={author.id}> {author.name} </option>
              )
          })
      }
  }

  submitForm(e){
    e.preventDefault();
    // pass variables to the mutation function
    // mutation function gets these variables and owns them by a $ sign
    this.props.addBookMutation({
        variables: {
            name: this.state.name,
            genre: this.state.genre,
            authorID: this.state.authorID
        }
    });
  }
  render() {
    return (
        <div>
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label> Book Name </label>
                    <input type="text" onChange={ (e) => this.setState({name:e.target.value})}/>
                </div>
                <div className="field">
                    <label> Genre </label>
                    <input type="text"  onChange={ (e) => this.setState({genre:e.target.value})}/>
                </div>
                <div className="field">
                    <select  onChange={ (e) => this.setState({authorID:e.target.value})}>
                        <option> Select Author </option>
                       {this.displayAuthors()}
                    </select>
                </div>
                
                <button> + </button>
            </form>
        </div>
    );
  }
}

// you can bind multiple queries with the component using "compose" of "react-apollo"
export default compose(
        graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
        graphql(addBookMutation, {name: "addBookMutation"})
    )(AddBook);