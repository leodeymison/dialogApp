// icons
import { FaBuilding } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import { Link } from 'react-router-dom'

import { _People,_BoxImage,_BoxInformations } from '../../style/friends'
import React from 'react'

type Data = {
    id: String,
    name: String
}


const Friend: React.FC = ({children}) => {
    return (
        <_People>
            <Link to={"/people/"+children.id}>
                <_BoxImage>
                    <img src={children.picture} alt={children.name} />
                </_BoxImage>
                <_BoxInformations titleAlign="center">
                    <h2>{children.name}</h2>
                    <span className="company">
                        <FaBuilding /> 
                        {children.company}</span>
                    <p><span><BsFillEyeFill /></span> {children.eyeColor}</p>
                    <p><span><AiOutlineFieldNumber /></span> {children.age} years</p>
                    <p><span><MdEmail /></span>{children.phone}</p>
                </_BoxInformations>
            </Link>
        </_People>
        
    )
}

export default Friend