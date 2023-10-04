import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context/StateProvider';

function Error() {

    const [{ user }] = useStateValue();

    return (
        <div>
            <span>Error No User</span>
            <br/>
            {(user) ? <h1>No link {user?.email}</h1> : <h1>No link </h1>}
            <img src="https://th.bing.com/th/id/OIP.yVW_wUFv_U7MUdrQZ0KLBwHaE8?pid=Api&rs=1" alt=""/>
            <br/>
            <Link to='/'> Go back </Link>
        </div>
    )
}

export default Error
