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
        // let guestRsvp;
        // if (this.state.rsvp){
        //     guestRsvp=  
        // } else if (this.state.nonRsvp){
        //     guestRsvp =
        // }
        return (
            <div id = "AppContainer">

                <h1>Guest List Manager</h1>

                <GuestBookForm addGuest ={this.addGuest}/>
                <GuestBookList doNotaddGuest ={this.state.guestBookListArray} />
                <GuestBookListRsvp addGuest ={this.state.guestBookListRsvp}/>
                
                
                
            </div>
        );
    }
}

export default AppContainer;