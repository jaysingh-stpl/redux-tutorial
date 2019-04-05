/**
 * Created by jay on 5/4/19.
 */
import React from 'react';

export const User = (props)=> {
    return (
        <div className="user">
            <h2>The User page</h2>
            <p>
                User Name: {props.name}
            </p>
        </div>
    )
}