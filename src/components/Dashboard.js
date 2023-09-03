import React from 'react'

const Dashboard = () => {
    return (
        <div className='main-container'>
            <div className='main-title'>
                <h3>Dashboard</h3>
            </div>
            <div className='main-cards'>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4>Number of questions</h4>
                    </div>
                    <h2>{400}</h2>
                </div>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4> Agrements</h4>
                    </div>
                    <h2>{400}</h2>
                </div>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4>Disagrements</h4>
                    </div>
                    <h2>{400}</h2>
                </div>
                <div className='cards'>
                    <div className='inner-card'>
                        <h4>Neutral</h4>
                    </div>
                    <h2>{400}</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard