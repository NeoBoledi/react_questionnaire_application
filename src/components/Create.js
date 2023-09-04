import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaPenSquare, FaTrashAlt } from 'react-icons/fa'

function Create() {
    const data = Object.keys(localStorage);
    const handleDelete = (id) => {
        localStorage.removeItem(id)
        window.location.reload()
    }
    const navigate = useNavigate();
    const [formData, setFormData] = useState('');



    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line eqeqeq
        if (formData != '') {
            e.preventDefault();
            let uniqueId = localStorage.length;
            let formDataId = uniqueId + 1;
            localStorage.setItem(
                formDataId, JSON.stringify({ data: formData })
            )
        } else {
            alert('Please make sure you have filled your form')
        }
        navigate('/create');
    }

    return (
        <>

            <div className='outer-container'>
                <div className='content'>
                    <h1 className='main-title'>Creating a Questionnaire</h1>
                    <div>
                        <h3>Add Queries</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    id="querie"
                                    className='textbox'
                                    name="querie"
                                    placeholder="Please type your question here!"
                                    onChange={e => setFormData(e.target.value)}
                                />
                            </div>

                            <button type="submit">Add</button>
                        </form>
                    </div>

                    <h2>List of Questions</h2>
                </div>

                {localStorage.length !== 0 ? (
                    data.map((key, i) => {
                        const querie = JSON.parse(localStorage.getItem(key));

                        return (
                            <div key={i}>
                                <div className='create-container'>
                                    <div className='elements'></div>

                                    <div>
                                        <p>{querie.data}</p>
                                    </div>

                                    <div className='icons'>
                                        <Link to={`/edit/${key}`}><FaPenSquare /></Link>
                                        <i onClick={() => handleDelete(key)}><FaTrashAlt /></i>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <br></br>
                        <p>No queries is the database</p>
                    </div>
                )}


            </div>

        </>
    )
}

export default Create