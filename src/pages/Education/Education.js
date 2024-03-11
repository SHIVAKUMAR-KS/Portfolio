import React from 'react'
import { IoIosSchool } from "react-icons/io";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
import { FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div className='container education' id='education'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Education detail
        </h2>
            <hr/>
        <VerticalTimeline>
            <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2022 - 2026"
        iconStyle={{ background: "#083452", color: '#fff' }}
        icon={<IoIosSchool />}
        >
        <h3 className="vertical-timeline-element-title">Btech</h3>
        <h4 className="vertical-timeline-element-subtitle">CMR Technical Campus</h4>
        <p>
        Learning Computer Science,Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
       </VerticalTimelineElement>
            <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2020 - 2022"
        iconStyle={{ background: "#138781", color: '#fff' }}
        icon={<FaSchool />}
        >
        <h3 className="vertical-timeline-element-title">Intermediate</h3>
        <h4 className="vertical-timeline-element-subtitle">Holy Mission school</h4>
        <p>
        Creative Direction, Team Leading
        </p>
    </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </>
  )
}

export default Education
