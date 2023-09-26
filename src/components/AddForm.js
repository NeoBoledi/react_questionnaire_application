// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AddForm() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState('');

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // eslint-disable-next-line eqeqeq
//         if (formData != '') {
//             e.preventDefault();
//             let uniqueId = localStorage.length;
//             let formDataId = uniqueId + 1;
//             localStorage.setItem(
//                 formDataId, JSON.stringify({ data: formData })
//             )
//         } else {
//             alert('Please make sure you have filled your form')
//         }
//         navigate('/create');
//     }

//     return (
        
//     );
// }

// export default AddForm;
