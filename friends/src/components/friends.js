import React from 'react'

import Friend from './friend'

const Friends = (props) => {
    return (
        <div>
            <h1>List of friends</h1>
            {props.friends.map(f =>
                <Friend
                    friend={f}
                    update={props.update}
                    delete={props.delete}
                    key={f.id} />)}
            <button onClick={() => props.update(0)}>Add Friend</button>
        </div>
    )
}

export default Friends