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
        shiva workd


        </h2>

        <hr/>
        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Full stack developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz pvt</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Full stack developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz pvt</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Full stack developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz pvt</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaReacteurope />}
  >
    <h3 className="vertical-timeline-element-title">Full stack developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz pvt</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>

      </div>

     </div>
    </>
  )
}

export default Work
