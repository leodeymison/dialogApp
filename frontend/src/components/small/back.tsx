import { Link } from 'react-router-dom'
import { _Back } from '../../style/small/back'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import React from 'react'

const Back: React.FC = ({children}) => {
    return (
        <_Back>
            <Link to={children}>
                <AiOutlineArrowLeft /> Voltar
            </Link>
        </_Back>
    )
}

export default Back