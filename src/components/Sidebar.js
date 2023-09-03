import React from 'react'
import { FaBars, FaPenSquare, FaClipboard } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'


function Sidebar() {

    <>
        onClick={({ id }) => {
            Navigate(id);
        }}
    </>
    return (
        <div className='container'>
            <div className='sidebar_container'>
                <nav className='nav'>
                    <h2 className='logo'>N</h2><span>EO</span>
                </nav>
                <div className='sidebar_content'>
                    <div className='nav-opt opt'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div>
                                <button><FaBars /><h3>Dashboard</h3></button>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className='sidebar_container'>
                    <div className='nav-opt opt'>
                        <Link to='/questionnaires' style={{ textDecoration: 'none' }}>
                            <div>
                                <button questionnaire><FaClipboard /> <h3>Questionnaire</h3></button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='sidebar_container'>
                    <div className='nav-opt opt'>
                        <Link to='/create' style={{ textDecoration: 'none' }}>
                            <div>
                                <button><FaPenSquare /><h3>Create</h3></button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Sidebar