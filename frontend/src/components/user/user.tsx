import { _People } from '../../style/user'

import { _BoxImage, _BoxInformations } from '../../style/friends'
import Back from '../small/back'

import { FaBuilding } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import React from 'react'


interface User {
    id: String;
    age: Number;
    company: String;
    email: String;
    eyeColor: String;
    greeting: String;
    index: Number;
    name: String;
    phone: String;
    picture: String
}

const User: React.FC = ({children}) => {
    const url = '/'
    return (
        <>
            <Back children={url}></Back>
            <_People className='People'>
                <_BoxImage>
                    <img src={children.picture} alt={children.name} />
                </_BoxImage>
                <_BoxInformations titleAlign="left">
                    <h2>{children.name}</h2>
                    <p><span><FaBuilding /></span> {children.company}</p>
                    <p><span><BsFillEyeFill /></span> {children.eyeColor}</p>
                    <p><span><AiOutlineFieldNumber /></span> {children.age} years</p>
                    <p><span><MdEmail /></span>{children.phone}</p>
                    <p><span><MdEmail /></span>{children.email}</p>
                    <p className='message'>{children.greeting}</p>
                </_BoxInformations>
            </_People>
            <h1>Friends</h1>
        </>
    )
}

export default User;