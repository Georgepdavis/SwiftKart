import React from 'react'

export default function Error(props){

    return(
        <div>
            <div class="alert alert-danger" role="alert">
               {props.error}
            </div>
        </div>
    )
}