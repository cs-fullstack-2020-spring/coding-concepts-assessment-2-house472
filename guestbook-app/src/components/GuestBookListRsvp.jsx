import React, { Component } from 'react'
class GuestBookListRsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id ="rsvp">
                
                <h1>This Guest has RSVP'd</h1>
                {
                    this.props.addGuest.map((rsvp, idx)=>{
                        return(
                            <div>
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

export default GuestBookListRsvp;