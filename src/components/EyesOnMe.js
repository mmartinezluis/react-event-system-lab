// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

    focusPrinter = () =>{
        console.log("Good!")
    }

    blurPrinter = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button 
                onFocus= {this.focusPrinter}
                onBlur= {this.blurPrinter}
            >Button
            </button>
        )
    }
}