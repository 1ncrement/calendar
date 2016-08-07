/**
 * Created by increment on 06.08.16.
 */
import React, {Component} from 'react'
import moment from 'moment'
import Week from './week'
import Todotask from './../todo'

export default class Calendar extends Component {
	constructor(props){
		super(props);
		this.state = {
			params: this.props,
			jeka: []
		};
	}

	render(){
		let
			control = (
				<thead className="control">
					<tr>
						<th
							className="btnPrev"
							onClick={this.prevMonth.bind(this)}
						>{'<'}</th>
						<th className="monthName" colSpan="5">{this.getTitleMonthName(this.state.params.date.month())}</th>
						<th
							className="btnNext"
							onClick={this.nextMonth.bind(this)}
						>{'>'}</th>
					</tr>
					{this.renderHeatNameDays()}
				</thead>
			),
			table = (
				<tbody className="calendar-body">
					{this.renderWeeks()}
				</tbody>
			);

		console.log('render again');
		return(
			<div className="container">
				<table className="calendar">
					{control}
					{table}
				</table>
				<Todotask
					url={this.state.params.url}
					selected={this.state.params.selected}
					taskMenager={this.state.jeka}
				/>
			</div>
		)
	}

	getTitleMonthName(month){
		return this.state.params.localization.monthNames[month]
	}

	renderHeatNameDays(){
		return(
			<tr className="nameDays">
				{this.state.params.localization.dayNames.map((name)=>{return (<th key={name.toString()}>{name}</th>)})}
			</tr>
		)
	}

	renderWeeks(){
		let week = [],
			done = false,
			date = this.state.params.date.clone().startOf('month').startOf('isoWeek'),
			monthIndex = date.month(),
			count = 0;

		while(!done){
			week.push(
				<Week
					key={date.toString()}
					date={date.clone()}
					month={this.state.params.date.month()}
				   select={this.selectDay.bind(this)}
				   selected={this.state.params.selected}
				/>
			);
			date.add(1, 'w');
			done = count++ > 2 && monthIndex != date.month();
			monthIndex = date.month();
		}

		return week
	}

	nextMonth(){
		let date = this.state.params.date;
		date.add(1, 'M');
		this.setState({date});
	}

	prevMonth(){
		let date = this.state.params.date;
		date.add(-1, 'M');
		this.setState({date});
	}

	selectDay(day){
		this.setState({
			selected: day.date
		});
	}

	componentDidMount(){
		fetch(this.props.url)
			.then((res)=> {
				return res.json()
			})
			.then((data)=> {
				console.log('data ==>',data.tasks);
				this.setState({
					jeka: data.tasks
				});
				console.log(this.state);

				return data;
			})
			.catch((error) => console.error('Error ==> ', error));
	}
}