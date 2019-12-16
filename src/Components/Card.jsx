import React from 'react'

export default class Card extends React.Component {
    render () {
        return (
            <div>
                <span onClick={this.props.change}>&lt; </span>
                <span>{this.props.task}</span>
                <span onClick={this.props.change}>&gt; </span>
            </div>
        )
    }
}

