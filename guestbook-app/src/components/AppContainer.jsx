import React, { Component } from 'react'
import GuestBookForm from './GuestBookForm'
import GuestBookList from './GuestBookList'
import GuestBookListRsvp from './GuestBookListRsvp'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvp: false,
            nonRsvp: false,
            guestBookListArray: [],
            guestBookListRsvp: []
        }
    }
    // callback functions for guest books
    addGuest = (rsvp) => {
        this.state.guestBookListRsvp.push(rsvp)
        this.setState({ guestBookListRsvp: this.state.guestBookListRsvp })

    }
    doNotaddGuest = (rsvp) => {
        this.state.guestBookListArray.push(rsvp)
        this.setState({ guestBookListArray: this.state.guestBookListArray })
    }

// conditonal rendering for rsvp or non rsvp
rsvp = () =>{
    this.setState({rsvp: true})
    this.setState({nonRsvp: false})

}
nonRsvp = () =>{
    this.setState({rsvp: false})
    this.setState({nonRsvp: true})
}
    render() {
        
       
        return (
            <div id = "AppContainer">

                <h1 id = "header">Guest List Manager</h1>

{/* TOFIX HANDLE TOGGLE CHANGE FOR RSVP */}
                <GuestBookForm  addGuest ={this.addGuest} doNotaddGuest = {this.doNotaddGuest}  />
               
                <GuestBookListRsvp addGuest ={this.state.guestBookListRsvp}    />
                <GuestBookList doNotaddGuest ={this.state.guestBookListArray} />
                
                
                
                
                
            </div>
        );
    }
}

export default AppContainer;