import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <form>
            <input 
                name="name"
                placeholder="이름"
                value={this.state.name}
                onChange={this.handleChange}
            />
            <input 
                name="phone"
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
            />
            <div>
                {this.state.name}
            </div>
            </form>
        );
    }
}

export default PhoneForm;