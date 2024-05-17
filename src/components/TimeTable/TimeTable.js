import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom'
import '../TimeTable/timetable.css'

function TimeTable() {
        const contentToPrint = useRef(null);
        const handlePrint = useReactToPrint({
          documentTitle: "Print This Document",
          onBeforePrint: () => console.log("before printing..."),
          onAfterPrint: () => console.log("after printing..."),
          removeAfterPrint: true,
        });
        
    function handleClick(){

    }
    return (
        <>
            <div className="text-center">
                <p className='appname font-bold'>Here is your timetable</p>
                <div className="tt-container" ref={contentToPrint}>
                    <div className='time'>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                            <p className="">8:30 A.M.</p>
                     
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                    <div className="day">
                        <p className="day-name">Mon</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                        <p className="task">Task 1</p>
                    </div>
                </div>
              
                <button onClick={() => {
        handlePrint(null, () => contentToPrint.current);
      }} className="text-center btns font-bold" to="/register" role="button">Print Timetable</button>
                <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Didn't like the timetable ?<span className='login-link font-bold' onClick={handleClick}>Regenerate</span></p>
     
            </div>
        </>
    )
}

export default TimeTable