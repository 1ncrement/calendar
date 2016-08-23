/**
 * Created by increment on 07.08.16.
 */
import React, {Component} from 'react'
import moment from 'moment'
import 'whatwg-fetch'

export default class AddedTask extends Component {
	constructor(props){
		super(props);
		this.state = props;
	}

	render(){
		let flagShow;
		if(this.refs.AddedTask){
			flagShow = this.refs.AddedTask.classList.contains('show');
		}
		return(
			/**
			 * @todo добавить функционал добавления новости
			 * */
			<span>
				<form ref="AddedTask" action="/add" className="todoAddedTaskForm">
					<input type="text" name="name" placeholder="введите имя задачи" value="task" />
					<input type="text" name="date" placeholder="выберите дату" value="2016-08-23" />
					<input type="text" name="time" placeholder="введите время" value="16:00:00" />
					<input type="text" name="category" placeholder="введите фильтр" value="cat0" />
					<input type="checkbox" name="vip" />
					<button onClick={this.submitBtn.bind(this)} type="submit">Submit</button>
				</form>
				<span className="todoAddedTask" onClick={this.todoAddedTask.bind(this)}>
					{this.state.showed ? 'Hide' : 'Show'}
				</span>
			</span>
		)
	}

	submitBtn(e){
		e.preventDefault();
		console.info('submit form');
	}

	todoAddedTask(){
		this.setState({
			showed: !this.state.showed
		});

		this.refs.AddedTask.classList.toggle('show');
	}
}