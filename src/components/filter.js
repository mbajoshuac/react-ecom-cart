import React, { Component } from 'react'

export default class filter extends Component {
  render() {
    return (
      <div className = "row">
        <div className="col-md-4">{this.props.count} Prouducts Found</div>
        <div className="col-md-4">
          <label> Order by </label>
            <select className ="form-control" value={this.props.sort}
            onChange ={this.props.handleChangeSort}>
            <option value= "">Select</option>
            <option value= "lowest">Lowest to Highest</option>
            <option value= "highest">Highest to Lowest</option>
            </select>
        </div>
        <div className="col-md-4"></div>
      </div>
    )
  }
}
