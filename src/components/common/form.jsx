import React from 'react'

import Row from './row'

class Form extends React.Component {

	constructor(){
		super()
		this.state={}
		this.getTemplate = this.getTemplate.bind(this)
		this.updateInputValue = this.updateInputValue.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	getTemplate(){
		return this.props.temp || {}
	}

	componentWillMount(){
		let rootNameList = []
		if(this.props.temp){
			rootNameList = Object.keys(this.props.temp)
		}
		let addRootName = {}
		for(let i = 0; i < rootNameList.length;i++){
			addRootName[rootNameList[i]] = {}
		}
		this.setState(addRootName)

	}

	updateInputValue(rootName, propsName, e){

		let newState = this.state[rootName]
		if(e.target.value){
			newState[propsName] = e.target.value
		}else{
			delete newState[propsName]
		}
		this.setState(...this.state, {[rootName]:newState})
		
		console.log(JSON.stringify(this.state))
	}

	handleSubmit(e){
		e.preventDefault()
		console.log(JSON.stringify(this.state))
	}

	render(){
		return (
			<div>
				form <hr/>
				<form onSubmit={this.handleSubmit}>
				{Object.keys(this.getTemplate()).map((rootKey, i)=>{
					return (
						<div key={i}>
							{this.getTemplate()[rootKey].map((propKey, j)=>{
								return (
									<Row key={j} name={propKey} handleChange={this.updateInputValue.bind(this, rootKey, propKey)}/>
								)
							})}
							<hr />
						</div>
					)
				})}
				<input type='submit' value='Submit' />
				</form>
			</div>
		)
	}
}

export default Form