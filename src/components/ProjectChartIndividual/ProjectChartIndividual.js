import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ProjectMembers from '../ProjectMembers/ProjectMembers';
import {
  getTime,
  CHART_COLOR,
  EMPTY_DATA
} from '../../utils';

const ProjectChartIndividual = ({ members, member, i }) => {

  const trackingTimes = members.map(member => member.time_tracking);
  const sortedTrackingTimes = trackingTimes.map(member => member.sort((a, b) => b.time - a.time));
  const laborTimePerMember = trackingTimes.map(tracking => tracking.reduce((acc, cur) => (acc + Math.floor(cur.time / 60)), 0));

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

  const options = trackingTimes => {
    return {
      responsive: false,
      maintainAspectRatio: true,
      aspectRatio: 1,
      tooltips: {
        enabled: trackingTimes.length && trackingTimes[0].time > 60
      },
      legend: {
        display: false
      }
    };
  };

  return (
    <li
      key={member._id}
      className="project-member-chart-wrapper"
    >
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
  );
};

export default ProjectChartIndividual;
