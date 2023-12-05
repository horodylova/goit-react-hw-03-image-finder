import React from 'react';

export class Searchbar extends React.Component {
    state = {
        image: ''
    }
handleNameChange = e => {
    this.setState({image: e.currentTarget.value.toLowerCase()})
}
    handleSubmit  = e => {
    e.preventDefault();


    this.props.onSubmit(this.state.image);
    this.setState( {image: ''})
    }
    render() {
        return (<header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
      
          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>)
}
}