import React from 'react'
import styled from 'styled-components'

const Friend = (props) => {
    return (
        <FRIEND>
            <pre>{props.friend.id}</pre>
            <pre>{props.friend.name}</pre>
            <pre>{props.friend.email}</pre>
            <button onClick={() => props.delete(props.friend)}>DELETE</button>
        </FRIEND>
    )
}

export default Friend

const FRIEND = styled.div`
    display: flex;
    font-size: 16px;

    pre {
        width: 75px;
        margin: 0 10px;
        &:last-of-type {
            width: 250px;
        }
    }
`