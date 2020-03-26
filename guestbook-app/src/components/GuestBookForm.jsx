import React, { Component } from 'react'
class GuestBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            guestPhoneNumber: "",
            guestRsvpStatus: ""
        }
    }
    handleSubmission = (event) => {
        event.preventDefault();
        this.props.addGuest(this.state)
        this.setState({
            guestName: "",
            guestPhoneNumber: "",
            guestRsvpStatus: ""
        })
    }




    handleChange = (event) => {
        if (event.target.name == "guestName") {
            this.setState({ guestName: event.target.value })
        } else if (event.target.name == "guestPhoneNumber") {
            this.setState({ guestPhoneNumber: event.target.value })
        } else if (event.target.name == "guestRsvpStatus") {
            this.setState({ guestRsvpStatus: event.target.value })
        }

    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Guest List</legend>

                        <label htmlFor="">Guest Name</label>
                        <input type="text" name="guestName" id="guestName" onChange={this.handleChange} value={this.state.guestName} />

                        <label htmlFor="">Guest Phone Number</label>
                        <input type="tel" name="guestPhoneNumber" id="guestPhoneNumber" onChange={this.handleChange} value={this.state.guestPhoneNumber} />

                        
                        <label htmlFor="">Guest RSVP Status</label>
                        <select name="guestRsvpStatus" id="guestRsvpStatus" onChange={this.hanldeChange} value={this.state.guestRsvpStatus}>
                            <option value="">---</option>
                            <option value="">Did RSVP</option>
                            <option value="">Did Not RSVP</option>
                        </select>

                        <button onClick={this.handleSubmission}>Select</button>


                    </fieldset>
                </form>
            </div>
        );
    }
}

export default GuestBookForm;