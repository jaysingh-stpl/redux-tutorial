/**
 * Created by jay on 5/4/19.
 */
import React from 'react';

export const Main = (props)=> {
    return (
        <div className="main">
            <h2>This is main component.</h2>
            <button
                className="btn btn-primary"
                onClick={()=>props.changeName('Jay')}>Change Primary Name
            </button>
        </div>
    )
}