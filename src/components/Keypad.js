// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

    keyFunction = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input onKeyUp = {this.keyFunction} type="password"></input>
        )
    }
}