import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage based on the provided ID
        const item = localStorage.getItem(id);
        if (item) {
            const { data } = JSON.parse(item);
            setFormData(data);
        }
    }, [id]);

    const handleEdit = () => {
        if (formData.trim() !== '') {
            localStorage.setItem(id, JSON.stringify({ data: formData }));
            navigate('/'); // Navigate back to the main page after editing
        } else {
            alert('Please make sure you have filled your form');
        }
    }

    return (
        <div className='outer-container'>
            <h1 className='main-title'>Edit Question</h1>
            <form>
                <input className='textbox'
                    type="text"
                    value={formData}
                    onChange={(e) => setFormData(e.target.value)}
                />
                <button type="button" onClick={handleEdit}>Save</button>
            </form>
        </div>
    );
}

export default Edit;
