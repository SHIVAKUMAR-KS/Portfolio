import React from 'react'
import { FaReacteurope } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Work.css'
const Work = () => {
  return (
    <>
     <div className=' work' id='work-exp'>
      <div className='container work-exp'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Shiva's Work Experience


        </h2>

        <hr/>
        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Mern developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Cmr Technical Campus</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Python  developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Cmr Technical Campus</h4>
    <p>
      Creative Direction, User Experience, VisualDesignining, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Java developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Cmr Technical Campus</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">DSA Solver</h3>
    <h4 className="vertical-timeline-element-subtitle">Cmr Technical Campus</h4>
    <p>
      Solving DSA problem on daily basis from various platform like Leetcode,Mentorpick
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Being Zero Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Cmr Technical Campus</h4>
    <p>
      Creative Direction and exploring and learning solving the problem
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        

      </div>

     </div>
    </>
  )
}

export default Work
