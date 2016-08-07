/**
 * Created by increment on 07.08.16.
 */
import React, {Component} from 'react'
import moment from 'moment'

export default class AddedTask extends Component {
	constructor(props){
		super(props);
		this.state = props;
	}

	render(){
		return(
			/**
			 * @todo реализовать показ формы по клику
			 * */
			<form ref="AddedTask" action="" className="todoAddedTaskForm show">
				<input type="text" name="task-name" placeholder="введите имя задачи" />
				<input type="text" name="task-date" placeholder="выберите дату" />
				<input type="text" name="task-time" placeholder="введите время" />
				<select name="task-category">
					<option value="cat1">cat1</option>
					<option value="cat2">cat2</option>
				</select>
				<input type="checkbox" name="task-vip" />
				<button onClick={this.submitBtn} type="submit">Submit</button>
			</form>
		)
	}

	submitBtn(e){
		e.preventDefault();
		console.info('submit form');
	}
}