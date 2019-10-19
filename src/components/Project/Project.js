import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import dateFormat from 'dateformat';
import NavContainer from '../../container/NavContainer';
import ProjectMembers from '../ProjectMembers/ProjectMembers';
import { getTime, chartColor } from '../../utils';
import './Project.scss';

const Project = props => {
  const memberData = props.location.state.members;
  const {
    created_at,
    end_date,
    title,
    members
  } = props.location.state.project;

  const createdAt = dateFormat(created_at, 'dddd, mmmm dS, yyyy hTT');
  const endDate = dateFormat(end_date, 'dddd, mmmm dS, yyyy hTT');
  const trackingTimes = members.map(member => member.time_tracking);
  const laborTimePerMember = trackingTimes.map(tracking => tracking.reduce((acc, cur) => (acc + Math.floor(cur.time / 60)), 0));
  const totalLaborTime = laborTimePerMember.reduce((acc, cur) => acc + cur);

  return (
    <>
      <NavContainer />
      <div className='project-wrapper'>
        <h1>{title}</h1>
        <div>created at {createdAt}</div>
        <div>end date {endDate}</div>
        <div className='project-chart'>
        <div>{getTime(totalLaborTime)}</div>
          <Pie
            data={{
              datasets: [{
                data: laborTimePerMember,
                backgroundColor: chartColor
              }],
              labels: memberData.map(member => member.name)
            }}
            width={400}
            height={400}
          />
        </div>
        <ul className='project-member-wrapper'>
          {memberData.map((member, i) => (
            <li key={member._id} >
              <div className='project-member-chart'>
                <Doughnut
                  data={{
                    datasets: [{
                      data: trackingTimes[i].map(tracking => Math.floor(tracking.time / 60)),
                      backgroundColor: chartColor
                    }],
                    labels: trackingTimes[i].map(tracking => tracking.domain),
                    options: {
                      responsive: true,
                      maintainAspectRatio: false
                    }
                  }}
                  width={250}
                  height={250}
                />
              </div>
              <ProjectMembers member={member} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Project;
