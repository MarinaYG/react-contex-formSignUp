import React from 'react'
import tonton from '../userHome/0036.jpg'

export default function UserHome() {

    return (
        <div className='container p-5'>
            <h1 className='display-3 text-light mb-4'>
                Home to user home
            </h1>
            <img src ={tonton} alt="tonton"/>
        </div>
    )
}