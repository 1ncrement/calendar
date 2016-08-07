/**
 * Created by increment on 07.08.16.
 */
import React, {Component} from 'react'
import moment from 'moment'

export default class Week extends Component {
	render(){
		let days = [],
			{date, month} = this.props;

		for (let i=0;i<7;i++){
			let day = {
				date,
				name: date.format('dd').substring(0, 1),
				number: date.date(),
				isCurrMonth: date.month() == month,
				isToday: date.isSame(new Date(), 'day')
			};

			days.push(
				<td
					key={day.date.toString()}
					className={`day ${day.isToday ? 'today' : ''} ${day.isCurrMonth ? '' : 'different-month'} ${day.date.isSame(this.props.selected) ? "selected" : ""}`}
					onClick={this.props.select.bind(null, day)}
				>
					{day.number}
				</td>
			);
			date = date.clone();
			date.add(1, 'd');
		}

		return (
			<tr className="week" key={days[0].toString()} >
				{days}
			</tr>
		)
	}
}