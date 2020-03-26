import React, { Component } from 'react'
class GuestBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id= "list">
                <header>Waiting For Response</header>
                <h1>This Guest has not RSVP'd</h1>

                {
                    this.props.doNotaddGuest.map((rsvp, index) =>  {
                        return(
                            <div key = {index}>
                               <p>Guest Name: {rsvp.guestName} </p>
                                <p>Guest Phone: {rsvp.guestPhoneNumber} </p>
                                <p>Guest RSVP: {rsvp.guestrsvpStatus} </p>
                            </div>
                        )
                    })
                }




            </div>
        );
    }
}

export default GuestBookList;