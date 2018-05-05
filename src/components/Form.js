import React from 'react'

export default props => (
    <div className='field has-addons'>
        <p className='control'>
            <input className='input' type='text' placeholder='Input Seat No.' onChange={(e) => props.inputNo(e.target.value) } />
        </p>
        <p className='control'>
            <a id='download' download={`${props.no}.png`}>
                <button className='button is-success' onClick={props.save}>
                    Save
                </button>
            </a>
        </p>
    </div>
)