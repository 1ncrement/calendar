/**
 * Created by increment on 06.08.16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class App extends Component{
	render(){
		console.log(this.props);
		return(
			<div>
				<h1>Hello</h1>
			</div>
		)
	}
}

export default App;