import React from "react";
import "./RadioSkill.css";

// The user will be shown four options as radio buttons to select
// Each button will have a value
// When the user clicks submit, the values will need to be stored in state to send to database

class RadioSkill extends React.Component {
	state = {
		value: 0
	};

	handleInputChange = event => {
		const { value } = event.target;

		this.setState({
			value: value
		});
	};

	render () {
		
		return (
			<form className="skill">
				<div className="input-group skill-q" id= {this.props.skill} default={this.state.value}>
					<h2>{this.props.skill}</h2>
					<label className="radio-inline"><input type="radio" name="skill-" value={0} onClick={this.handleInputChange.bind(this)} />N/A</label>
					<label className="radio-inline"><input type="radio" name="skill-" value={1} onClick={this.handleInputChange.bind(this)} />Beginner</label>
					<label className="radio-inline"><input type="radio" name="skill-" value={2} onClick={this.handleInputChange.bind(this)} />Intermediate</label>
					<label className="radio-inline"><input type="radio" name="skill-" value={3} onClick={this.handleInputChange.bind(this)} />Advanced</label>
				</div>
			</form>
		)

	}
}

export default RadioSkill;
