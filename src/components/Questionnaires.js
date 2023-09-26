import React, { useState, useEffect } from 'react';

const Questionnaires = () => {
    const data = Object.keys(localStorage);
    const [selectedValues, setSelectedValues] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 5;
    const totalPages = Math.ceil(data.length / questionsPerPage);

    useEffect(() => {
        // When the page changes, reset selected values
        setSelectedValues({});
    }, [currentPage]);

    const handleRadioChange = (event, key) => {
        const newValue = event.target.value;
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [key]: newValue,
        }));
    };


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any radio button is selected in the selectedValues object
        if (Object.keys(selectedValues).length > 0) {
            // Create a new unique key for the submitted form data
            const newFormDataId = `formData_${Date.now()}`;

            // Combine selectedValues with a timestamp and save it as form data
            const formData = {
                selectedValues,
            };

            // Save the form data as a new object in localStorage
            localStorage.setItem(newFormDataId, JSON.stringify(formData));

            // Clear selectedValues for the next set of questions
            setSelectedValues({});

            // Move to the next page if available
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            } else {
                alert('All questions submitted!'); // Optionally show a message when all questions are submitted.
            }
        } else {
            alert('Please make sure you have selected a value for at least one question');
        }
    };



    const renderQuestions = () => {
        const startIndex = (currentPage - 1) * questionsPerPage;
        const endIndex = startIndex + questionsPerPage;
        const questionsToDisplay = data.slice(startIndex, endIndex);

        return questionsToDisplay.map((key, i) => {
            const querie = JSON.parse(localStorage.getItem(key));

            return (
                <div key={i}>
                    <div className='create-container'>
                        <div className='elements'></div>

                        <div>
                            <p>{querie.data}</p>
                        </div>

                        <div className='radio'>
                            <label htmlFor='agree'>
                                <input
                                    name={key}
                                    type="radio"
                                    value="agree"
                                    checked={selectedValues[key] === 'agree'}
                                    onChange={(e) => handleRadioChange(e, key)}
                                />
                                Agree
                            </label>
                            <label htmlFor='neutral'>
                                <input
                                    name={key}
                                    type="radio"
                                    value="neutral"
                                    checked={selectedValues[key] === 'neutral'}
                                    onChange={(e) => handleRadioChange(e, key)}
                                />
                                Neutral
                            </label>
                            <label htmlFor='disagree'>
                                <input
                                    name={key}
                                    type="radio"
                                    value="disagree"
                                    checked={selectedValues[key] === 'disagree'}
                                    onChange={(e) => handleRadioChange(e, key)}
                                />
                                Disagree
                            </label>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='outer-container'>
            <div className='content'>
                <h1 className='main-title'>Questionnaire</h1>
            </div>

            {localStorage.length !== 0 ? (
                <div>
                    {renderQuestions()}

                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            ) : (
                <div>
                    <br />
                    <p>No queries in the database</p>
                </div>
            )}
        </div>
    );
};

export default Questionnaires;
