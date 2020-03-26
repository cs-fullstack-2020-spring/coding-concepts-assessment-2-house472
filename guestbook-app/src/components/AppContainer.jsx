import React, {Component} from 'react'
import GuestBookForm from './GuestBookForm'
import GuestBookList from './GuestBookList'
import GuestBookListRsvp from './GuestBookListRsvp'
class AppContainer  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            GuestBookListArray : [],
            GuestBookListRsvp : []
         }
    }
    render() { 
        return ( 
            <div>

<h1>Guest List Manager</h1>




                <GuestBookForm/>
                <GuestBookList/>
                <GuestBookListRsvp/>
            </div>
         );
    }
}
 
export default AppContainer;