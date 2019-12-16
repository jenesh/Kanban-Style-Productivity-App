import React from 'react'
import Card from './Card'
import boardKey from '../compKeys/boardKey';

export default class Board extends React.Component {
    render() {
        const tasks = this.props.tasks.map(task => {
            boardKey++;
            return (
                <Card task={task.body} change={this.props.change} key={boardKey} />
            )
        })

        return (
            <div className={this.props.css}>
                <h1>{this.props.title}</h1>
                {tasks}
                <p onClick={() => this.props.addCard(this.props.title)}>+ Add Card</p>
            </div>
        )
    }
}

