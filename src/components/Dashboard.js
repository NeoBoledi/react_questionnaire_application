import React from 'react'

const Dashboard = () => {

    // Add this function inside your Questionnaires component
    const countResponses = () => {
        const numberOfQuestionsSaved = localStorage.length;
        let agreeCount = 0;
        let neutralCount = 0;
        let disagreeCount = 0;

        // Iterate through localStorage keys
        Object.keys(localStorage).forEach((key) => {
            const formData = JSON.parse(localStorage.getItem(key));

            // Check if formData and selectedValues exist
            if (formData && formData.selectedValues) {
                // Count responses
                Object.values(formData.selectedValues).forEach((value) => {
                    if (value === "agree") {
                        agreeCount++;
                    } else if (value === "neutral") {
                        neutralCount++;
                    } else if (value === "disagree") {
                        disagreeCount++;
                    }
                });
            }
        });

        return { numberOfQuestionsSaved, agreeCount, neutralCount, disagreeCount };
    };

    // In your component render or wherever you want to display the counts
    const { numberOfQuestionsSaved, agreeCount, neutralCount, disagreeCount } = countResponses();

    return (
        <div className='outer-container'>
            <div className='content'>
                <h1 className='main-title'>Dashboard</h1>
            </div>
            <div className='main-cards'>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4>Number of questions</h4>
                    </div>
                    <h2>{numberOfQuestionsSaved}</h2>
                </div>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4> Agrements</h4>
                    </div>
                    <h2>{agreeCount}</h2>
                </div>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4>Disagrements</h4>
                    </div>
                    <h2>{disagreeCount}</h2>
                </div>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4>Neutral</h4>
                    </div>
                    <h2>{neutralCount}</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard