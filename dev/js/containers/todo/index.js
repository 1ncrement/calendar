/**
 * Created by increment on 07.08.16.
 */
import React, {Component} from 'react'
import moment from 'moment'
import AddedTask from './added-form'

export default class Todotask extends Component {
	constructor(props){
		super(props);
		this.state = props;
	}

	render(){
		var tasks;
		if(this.state.taskMenager.data && this.state.taskMenager.data.tasks.length == 0){
			tasks = <span>Произошел какой-то збой, надо потанцевать с бубном.</span>
		}else{
			let selected = this.props.selected;
			tasks = this.state.taskMenager.data.tasks.map((el)=> {
				let res = selected.isSame(el.date, 'day') ? (
					<li
						key={`${el.date}`}
						className={`task ${el.VIP ? 'taskVip' : ''}`}
					>
						{el.name}: <span className="taskTime">{el.time}</span>
					</li>
				) : '';
				return res
			});
			if(tasks.every((words)=> !words && words.length == 0)) tasks = <li className="taskEmpty">На этот день списка задач нет.</li>
		}

		return(
			<div className="todoList">
				<p>Selected: {this.props.selected.date()} <span className="todoAddedTask" onClick={this.todoAddedTask}>Added</span></p>
				<p>List:</p>
				<ul className="taskList">
					{tasks}
				</ul>
				<AddedTask />
			</div>
		)
	}

	todoAddedTask(){
		console.log('click clack');
	}

	componentWillMount(){
		fetch(this.props.url)
			.then((res)=> {
				return res.json()
			})
			.then((data)=> {
				this.setState({
					taskMenager: {
						data
					}
				});

				window.state = this.state;
				return data;
			})
			.catch((error) => console.error('Error ==> ', error));
	}
}
