import Friend from './friend'

import { _Peoples } from '../../style/friends'
import React from 'react'

type Data = {
    id: String,
    name: String
}

const Friends: React.FC = ({children}) => {
    return (
        <_Peoples>
            {
                children.map(people => 
                    <Friend key={people.id} children={people} />
                )
            }
        </_Peoples>
    )
}

export default Friends