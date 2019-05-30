import React from "react";



  class Searchbar extends React.Component {

    state={
      keyword:''
    }

    handleChange= evt=>
    {
      evt.preventDefault()
      this.setState(
        {
          keyword: evt.target.value
        }
      )
    }
    render() {
        return (
        <div>

        <div><input type="text"
         placeholder="Search" value ={this.state.keyword} onChange={this.handleChange}></input></div>

          <div>
            <button className="Seicon" onClick={this.props.x(this.state.keyword)}></button>
          </div>


        </div>
        )
    }
}

export default Searchbar;