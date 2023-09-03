import React from 'react'
import { Link } from 'react-router-dom'
import { FaPenSquare, FaClipboard } from 'react-icons/fa'

function Create() {
    const data = Object.keys(localStorage);
    const handleDelete = (id) => {
        localStorage.removeItem(id)
        window.location.reload()
    }

    return (
        <>

            <div className='outer-container'>
                <div className='content'>
                    <h1>Creating a Questionnaire</h1>
                    <Link to='/addForm'><button className='btn'>Add</button></Link>
                    <h2>List of Questions</h2>
                </div>
            </div>
            {localStorage.length !== 0 ? (
                data.map((key, i) => {
                    const querie = JSON.parse(localStorage.getItem(key));

                    return (
                        <div key={i}>
                            <div className='container'>
                                <div className='elements'></div>

                                <div>
                                    <p>{querie.data}</p>
                                </div>

                                <div className='icons'>
                                    <Link to={`/edit/${key}`}><FaPenSquare /></Link>
                                    <i onClick={() => handleDelete(key)}><FaClipboard /></i>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <h1>No queries is the database</h1>
                </div>
            )}


        </>
    )
}

export default Create