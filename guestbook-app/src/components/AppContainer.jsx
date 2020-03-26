import React, { Component } from 'react'
import GuestBookForm from './GuestBookForm'
import GuestBookList from './GuestBookList'
import GuestBookListRsvp from './GuestBookListRsvp'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestBookListArray: [],
            guestBookListRsvp: []
        }
    }
    addGuest = (rsvp) => {
        this.state.guestBookListRsvp.push(rsvp)
        this.setState({ guestBookListRsvp: this.state.guestBookListRsvp })

    }
    doNotaddGuest = (rsvp) => {
        this.state.guestBookListArray.push(rsvp)
        this.setState({ guestBookListArray: this.state.guestBookListArray })
    }

    render() {
        return (
            <div>

                <h1>Guest List Manager</h1>




                <GuestBookForm addGuest ={this.addGuest}/>
                <GuestBookList doNotaddGuest ={this.state.guestBookListArray} />
                <GuestBookListRsvp addGuest ={this.state.guestBookListRsvp}/>
            </div>
        );
    }
}

export default AppContainer;