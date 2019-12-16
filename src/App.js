import React from 'react';
import './App.css';
import Board from './Components/Board'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			winne: {
				tasks: [
					{
						body: 'First Task'
					},
					{
						body: 'Second Task'
					}
				]
			},
			bob: {
				tasks: [
					{
						body: 'First Task'
					},
					{
						body: 'Second Task'
					}
				]
			},
			thomas: {
				tasks: [
					{
						body: 'First Task'
					},
					{
						body: 'Second Task'
					}
				]
			},
			john: {
				tasks: [
					{
						body: 'First Task'
					},
					{
						body: 'Second Task'
					}
				]
			},

		}
	}

	addCard = (title) => {
		console.dir(title)
		const body = window.prompt('Write a new task.');
		const currState = { ...this.state };
		console.log(currState[title.toLowerCase()])
		currState[title.toLowerCase()] = { tasks: [...currState[title.toLowerCase()]['tasks'], { body }] };
		console.log(currState);
		this.setState(currState);
	}

	changeBoard = ({ target }) => {
		const children = target.parentNode.parentNode.parentNode.children;
		const className = target.parentNode.parentNode.children[0].textContent;
		const action = target.textContent;
		console.dir(children)
		console.dir(className)
		console.log(action)
	}

	render() {
		return (
			<div className="container">
				<Board title='Winne'
					css="first card"
					tasks={this.state.winne.tasks}
					change={this.changeBoard}
					addCard={this.addCard}
				/>
				<Board title='Bob'
					css="second card"
					tasks={this.state.bob.tasks}
					change={this.changeBoard}
					addCard={this.addCard}
				/>
				<Board title='Thomas'
					css="third card"
					tasks={this.state.thomas.tasks}
					change={this.changeBoard}
					addCard={this.addCard}
				/>
				<Board title='John'
					css="fourth card"
					tasks={this.state.john.tasks}
					change={this.changeBoard}
					addCard={this.addCard}
				/>
			</div>
		)
	}
}

export default App;
