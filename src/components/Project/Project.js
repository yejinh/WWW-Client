import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import dateFormat from 'dateformat';
import NavContainer from '../../container/NavContainer';
import ProjectMembers from '../ProjectMembers/ProjectMembers';
import { getTime, CHART_COLOR, EMPTY_DATA } from '../../utils';
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
  const sortedTrackingTimes = trackingTimes.map(member => member.sort((a, b) => b.time - a.time));

  const laborTimePerMember = trackingTimes.map(tracking => tracking.reduce((acc, cur) => (acc + Math.floor(cur.time / 60)), 0));
  const totalLaborTime = laborTimePerMember.reduce((acc, cur) => acc + cur);

  const dataSets = trackingTimes => {
    if (!trackingTimes.length) {
      return EMPTY_DATA;
    }

    const mappedData = trackingTimes.map(tracking => Math.floor(tracking.time / 60));
    const mappedLabels = trackingTimes.map(tracking => tracking.domain);

    if (!mappedData[0]) {
      return EMPTY_DATA;
    }

    return {
      datasets: [{
        data: mappedData,
        backgroundColor: CHART_COLOR
      }],
      labels: mappedLabels
    };
  };

  const options = trackingTimes => ({
    responsive: false,
    maintainAspectRatio: true,
    aspectRatio: 1,
    tooltips: {
      enabled: trackingTimes.length && trackingTimes[0].time > 60
    },
    legend: {
      display: false
    }
  });

  return (
    <>
      <NavContainer />
      <div className='project-wrapper'>
        <h1>{title}</h1>
        <div>created at {createdAt}</div>
        <div>end date {endDate}</div>
        <div className='project-chart'>
          <Pie
            data={{
              datasets: [{
                data: laborTimePerMember,
                backgroundColor: CHART_COLOR
              }],
              labels: memberData.map(member => member.name)
            }}
            width={500}
            height={500}
          />
          <span>total labor time: {getTime(totalLaborTime)}</span>
        </div>
        <ul className='project-member-wrapper'>
          {memberData.map((member, i) => (
            <li key={member._id} >
              <div className='project-member-chart'>
                <ProjectMembers member={member} />
                <div>{getTime(laborTimePerMember[i])}</div>
                <Doughnut
                  data={dataSets(sortedTrackingTimes[i])}
                  width={250}
                  height={250}
                  options={options(sortedTrackingTimes[i])}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Project;
