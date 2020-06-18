import React from 'react';
export default function SearchDrop (props) {
    return (
      <div className = {props.dropIsInvisible ? "search-drop-header-nothidden" : "search-drop-header"}>
        <div className="container-header">
          <div className="search-form-container">
            <input className="input-search" placeholder="Search for..." onChange={(event) => props.onChangeInput(event)} />
            <button className="search-button-input">
              <i className="fas fa-search search-icon-input">
              </i>
            </button>
          </div>
        </div>
      </div>
    )
}