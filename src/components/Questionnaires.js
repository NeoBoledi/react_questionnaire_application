import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Questionnaires = () => {
    const data = Object.keys(localStorage);

    // const navigate = useNavigate();
    const [querieData, setQuerieData] = useState('');
    const [selectedValue, setSelectedValue] = useState('');



    // Radibox
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (querieData !== '' && selectedValue !== '') {
            // Create a new object to store both data and selectedValue
            const formData = {
                data: querieData,
                selectedValue: selectedValue,
            };

            // Generate a unique ID for the form data (you can use a better approach)
            let uniqueId = localStorage.length;
            let formDataId = uniqueId + 1;

            // Save the formData as a JSON string in localStorage
            localStorage.setItem(formDataId, JSON.stringify(formData));
        } else {
            alert('Please make sure you have filled your form and selected a value');
        }

        // Reset the state variables
        setQuerieData('');
        setSelectedValue('');

        alert('Your data was saved!')
    }

    return (
        <>

            <div className='outer-container'>
                <div className='content'>
                    <h1 className='main-title'>Questionnaire</h1>
                </div>

                {localStorage.length !== 0 ? (
                    data.map((key, i) => {
                        const querie = JSON.parse(localStorage.getItem(key));

                        return (

                            <>
                                <div key={i}>
                                    <div className='create-container'>
                                        <div className='elements'></div>

                                        <div>
                                            <p>{querie.data}</p>

                                        </div>

                                        <div className='radio'>

                                            <label>
                                                <input
                                                    type="radio"
                                                    value="agree"
                                                    checked={selectedValue === 'agree'}
                                                    onChange={handleRadioChange}
                                                />
                                                Agree
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="neutral"
                                                    checked={selectedValue === 'neutral'}
                                                    onChange={handleRadioChange}
                                                />
                                                Neutral
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    value="disagree"
                                                    checked={selectedValue === 'disagree'}
                                                    onChange={handleRadioChange}
                                                />
                                                Disagree
                                            </label>

                                        </div>
                                    </div>
                                </div >
                            </>

                        );

                    })
                ) : (
                    <div>
                        <br></br>
                        <p>No queries is the database</p>
                    </div>

                )}
                <button type="submit" onClick={handleSubmit}>Submit</button>

            </div >

        </>
    )
    // <button type="submit">Submit</button>
}

export default Questionnaires