import React from 'react'

class Row extends React.Component {

	render(){
		return(
			<div>
				<label>{this.props.name}: </label>
				<input onChange={this.props.handleChange}/>
			</div>
		)
	}
}

export default Row