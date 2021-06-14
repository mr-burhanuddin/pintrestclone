import React from "react";
import "./Search.css";
class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search">
        <img
          className="search__icon"
          src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png"
          alt=""
        />
        <div className="search__buttonContainer">
          <button className="search__button">Home</button>
          <button className="search__button">Today</button>
        </div>

        <form onSubmit={this.onFormSubmit} className="search__form">
          <div className="search__feild">
            <input
              className="search__input"
              type="text"
              placeholder="  Search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <i className="icon bell large"></i>
        <i className="icon comment alternate large"></i>
        <div className="section__person">
          <img
            className="search__icon"
            src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
            alt=""
          />
          <i className="icon angle down large"></i>
        </div>
      </div>
    );
  }
}
export default SearchBar;
