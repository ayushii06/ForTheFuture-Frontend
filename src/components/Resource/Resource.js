import React from 'react'
import {Link} from 'react-router-dom'
import '../Resource/Resource.css'
import img1 from '../../assets/UN/E-WEB-Goal-01.png'
import img2 from '../../assets/UN/E-WEB-Goal-02.png'
import img3 from '../../assets/UN/E-WEB-Goal-03.png'
import img4 from '../../assets/UN/E-WEB-Goal-04.png'
import img5 from '../../assets/UN/E-WEB-Goal-05.png'
import img6 from '../../assets/UN/E-WEB-Goal-06.png'
import img7 from '../../assets/UN/E-WEB-Goal-07.png'
import img8 from '../../assets/UN/E-WEB-Goal-08.png'
import img9 from '../../assets/UN/E-WEB-Goal-09.png'
import img10 from '../../assets/UN/E-WEB-Goal-10.png'
import img11 from '../../assets/UN/E-WEB-Goal-11.png'
import img12 from '../../assets/UN/E-WEB-Goal-12.png'
import img13 from '../../assets/UN/E-WEB-Goal-13.png'
import img14 from '../../assets/UN/E-WEB-Goal-14.png'
import img15 from '../../assets/UN/E-WEB-Goal-15.png'
import img16 from '../../assets/UN/E-WEB-Goal-16.png'
import img17 from '../../assets/UN/E-WEB-Goal-17.png'

function Resource() {
  return (
    <div style={{textAlign:'center',margin:'9vh auto'}}>
              <p className="text-center welcome-heading font-bold">United Nations Sustainable Development Goals (SDGs)</p>
              <p className="head-home quiz-heading">"Below are the 17 SDGs established by the United Nations to address global challenges and promote sustainable development. Each SDG represents a specific area of focus aimed at creating a more prosperous, equitable, and environmentally sound world."</p>
              <div className="gallery">
                <img className="" src={img1} />
                <img className="" src={img2} />
                <img className="" src={img3} />
                <img className="" src={img4} />
                <img className="" src={img5} />
                <img className="" src={img6} />
                <img className="" src={img7} />
                <img className="" src={img8} />
                <img className="" src={img9} />
                <img className="" src={img10} />
                <img className="" src={img11} />
                <img className="" src={img12} />
                <img className="" src={img13} />
                <img className="" src={img14} />
                <img className="" src={img15} />
                <img className="" src={img16} />
                <img className="" src={img17} />
              </div>

              <p className="">For more information visit the official site of <Link to=''>UN</Link></p>
    </div>
  )
}

export default Resource