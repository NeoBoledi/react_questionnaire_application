import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddForm() {
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
        <div>
            <h2>Add Queries</h2>
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

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddForm;
