import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <div className='section'>
        <p className='bold-center'>Inspiration</p>
        <p className='head'>We were inspired by the need to make climate data more accessible, engaging, and actionable for everyone. Our goal is to empower individuals with the knowledge and tools they need to understand the impacts of climate change and contribute to global sustainability efforts. By leveraging the power of data visualization and community engagement, we aim to foster a deeper connection between people and the planet, driving collective action for a sustainable future.</p>

      </div>

      <div className='section'>
        <p className='bold-center'>What it does</p>
        <p className='head'>It is a comprehensive platform that provides global climate data in an accessible and interactive format. It offers the following features:
          <div className="">
            <bold>Real-Time Climate Data : </bold><p className="">Access to the latest climate statistics and trends from trusted sources.
              Interactive Maps and Graphs: Visualizations that help users understand climate changes in different regions over time.</p>
          </div>

          <div className="">
            <bold>Educational Content: </bold><p className=""> Articles and resources that explain key concepts related to climate science and sustainability.</p>
          </div>

          <div className="">
            <bold>Community Engagement: </bold><p className="">A platform for users to share their thoughts, participate in discussions, and collaborate on sustainability projects.</p>
          </div>

          <div className="">
            <bold>Climate Quiz: </bold><p className="">An engaging quiz that tests users' knowledge on climate change, including historical events and general knowledge facts, with a focus on the UN's 17 Sustainable Development Goals.</p>
          </div>


        </p>

      </div>

      <div className='section'>
        <p className='bold-center'>How I built it</p>
        <p className='head'>
          <div className="">
            <bold>Frontend : </bold><p className="">Built using React for dynamic and responsive user interfaces. The interactive visualizations are powered by D3.js and Chart.js.</p>
          </div>
          <div className="">
            <bold>Backend : </bold><p className="">Developed with Node.js and Express.js to handle API requests, user authentication, and data management. MongoDB is used for storing user data, posts, comments, and likes.</p>
          </div>
          <div className="">
            <bold>APIs and Data Sources : </bold><p className="">Integrated with various climate data APIs to fetch real-time data. The backend also includes endpoints for fetching and processing this data.</p>
          </div>

          <div className="">
            <bold>Authentication : </bold><p className="">Implemented JWT (JSON Web Tokens) for secure user authentication and session management.</p>
          </div>

        </p>

      </div>

    </>
  )
}

export default About