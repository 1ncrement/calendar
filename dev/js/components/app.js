/**
 * Created by increment on 06.08.16.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Calendar from './../containers/calendar'
import moment from 'moment'

const LOCAL = {
	monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
	dayNames: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
};

var TASKMENAGER = {
	data:[]
};

class App extends Component{
	render(){
		let date = moment();
		return (
			<Calendar
				url='/taskList'
				date={date}
				selected={date}
				localization={LOCAL}
				taskMenager={TASKMENAGER}
			/>
		)
	}
}

export default App;