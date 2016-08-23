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
		if(this.state.taskMenager.data && this.state.taskMenager.data.length == 0){
			tasks = <span>Произошел какой-то збой, надо потанцевать с бубном.</span>
		}else{
			let selected = this.props.selected;
			tasks = this.state.taskMenager.data.map((el)=> {
				var res;

				if(
					selected.isSame(el.date, 'day')
					&& this.state.filterSelect == el.category
					&& (this.state.vipSelect == 'all'
						|| ((this.state.vipSelect == 'vip') && el.VIP)
						|| ((this.state.vipSelect == 'notVip') && !el.VIP))
				){
					res = (
						<li
							key={`${el.date}|${el.time}`}
							className={`task ${el.VIP ? 'taskVip' : ''}`}
						>
							{el.name}: <span className="taskTime">{el.time}</span>
						</li>
					)
				}else{
					res = ''
				}

				return res
			});
			if(tasks.every((words)=> !words && words.length == 0)) tasks = <li className="taskEmpty">На этот день списка задач нет.</li>
		}

		let categoryes = this.state.category.map((el)=>{
			return <option key={el} value={el} >{el}</option>
		});
		if(categoryes.length == 0) categoryes = <option value="">Никаких категий пока нет</option>

		return(
			<div className="todoList">
				<p>Selected: {this.props.selected.date()}
					<AddedTask />
				</p>
				<p>List:</p>
				<div className="todoFilter">
					Filters:{' '}
					<select
						name="todoFilter"
						onChange={this.filterCategotyChange.bind(this)}>
						{categoryes}
					</select>
					{'   '}
					VIP:{' '}
					<select
						name="todoVip"
						onChange={this.filterVipChange.bind(this)}>
						{
							this.state.vip.map((el)=>{
								return(
									<option key={el} value={el}>{el}</option>
								)
							})
						}
					</select>
				</div>
				<ul className="taskList">
					{tasks}
				</ul>
			</div>
		)
	}

	filterCategotyChange(e){
		this.setState({
			filterSelect: e.target.value
		});
		console.log('change todo Filter');
	}

	filterVipChange(e){
		this.setState({
			vipSelect: e.target.value
		});
		console.log('change todo Vip');
	}

	componentWillMount(){
		this.setState({
			category: [],
			vip: ['all', 'vip', 'notVip'],
			vipSelect: 'all',
			filterSelect: ''
		});

		fetch(this.props.url)
			.then((res)=> {
				return res.json()
			})
			.then((data)=> {
				let objfilter = {},
					categoryFilter = data.map((el)=>objfilter[el.category] = el.category),
					newCategoryFilter = [];

				for(let prop in objfilter){
					newCategoryFilter.push(prop);
				}

				this.setState({
					taskMenager: {
						data
					},
					category: newCategoryFilter.slice(0),
					filterSelect: newCategoryFilter[0]
				});

				return data;
			})
			.catch((error) => console.error('Error ==> ', error));
	}
}
