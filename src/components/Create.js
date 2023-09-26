import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPenSquare, FaTrashAlt } from 'react-icons/fa';

function Create() {
    const data = Object.keys(localStorage);
    const itemsPerPage = 5; // Number of questions per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const navigate = useNavigate();
    const [formData, setFormData] = useState('');

    const handleDelete = (id) => {
        localStorage.removeItem(id);
        window.location.reload();
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData !== '') {
            let uniqueId = localStorage.length;
            let formDataId = uniqueId + 1;
            localStorage.setItem(
                formDataId, JSON.stringify({ data: formData })
            );
            setFormData(''); // Clear the input field
        } else {
            alert('Please make sure you have filled your form');
        }
        navigate('/create');
    }

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the subset of questions for the current page
    const currentPageQuestions = data.slice(startIndex, endIndex);

    // Function to handle page navigation
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
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
                                    value={formData}
                                    onChange={e => setFormData(e.target.value)}
                                />
                            </div>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    <h2>List of Questions</h2>
                </div>

                {currentPageQuestions.length !== 0 ? (
                    currentPageQuestions.map((key, i) => {
                        const querie = JSON.parse(localStorage.getItem(key));
                        return (
                            <div key={i}>
                                <div className='create-container'>
                                    <div className='elements'>
                                        <div>
                                            <p>{querie.data}</p>
                                        </div>
                                        <div className='icons'>
                                            <Link to={`/edit/${key}`}><FaPenSquare /></Link>
                                            <i onClick={() => handleDelete(key)}><FaTrashAlt /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <br></br>
                        <p>No queries on this page</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <span
                                key={i}
                                className={i + 1 === currentPage ? 'active' : ''}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </span>
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}

export default Create;
