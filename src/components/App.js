import React from 'react'

import styles from './App.css'
import './common.css'

import Form from './common/form'

const temp = {
	"MEN": ["sn", "model", "year"],
	"CPU": ["sn", "model", "year"],
	"VIDEO": ["sn", "model", "year"]
}



export default React.createClass({
  render() {
    return (
    	<div className={styles.test}>
    		Hello, Haha!!!!
    		<Form temp={temp}/>
    	</div>
    )
  }
})
