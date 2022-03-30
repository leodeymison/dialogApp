import Logo from '../../assets/images/logo.jpeg'

// icons
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useState } from 'react'

import { _navbar } from "../../style/navbar"

import { Link } from 'react-router-dom'



const NavbarTop:React.FC = () => {
    const [name, setName] = useState('')

    const redirectSearch = (e) => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <>
            <_navbar>
                <Link className='logo' to="/">
                    <img src={Logo} alt="logo do aplicativo dialog" />
                </Link>
                
                <form onSubmit={redirectSearch} className="search">
                    <input 
                        type="text" 
                        className='input' 
                        placeholder='Search'
                        value={name}
                        onChange={e => setName(e.target.value)
                        }
                        />
                    <button className="icone" type='submit'>
                        <AiOutlineSearch />
                    </button>
                </form>
            </_navbar>
        </>
    )
}

export default NavbarTop;