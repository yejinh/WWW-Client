import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ProjectMembers from '../ProjectMembers/ProjectMembers';
import {
  getTime,
  CHART_COLOR,
  EMPTY_DATA
} from '../../utils';
import './ProjectChartIndividual.scss';

const ProjectChartIndividual = ({ members, member, i }) => {
  const trackingTimes = members.map(member => member.time_tracking);
  const sortedTrackingTimes = trackingTimes.map(member => member.sort((a, b) => b.time - a.time));
  const laborTimePerMember = trackingTimes.map(tracking => tracking.reduce((acc, cur) => (acc + Math.floor(cur.time / 60)), 0));

  const _dataSets = trackingData => {
    if (!trackingData.length) {
      return EMPTY_DATA;
    }

    const mappedData = trackingData.map(tracking => Math.floor(tracking.time / 60));
    const mappedLabels = trackingData.map(tracking => tracking.domain);

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

  const _options = trackingData => {
    return {
      responsive: false,
      maintainAspectRatio: true,
      aspectRatio: 1,
      tooltips: {
        enabled: trackingData.length && trackingData[0].time > 60
      },
      legend: {
        display: false
      }
    };
  };

  return (
    <>
      {sortedTrackingTimes[i] &&
        <li
          key={member._id}
          className="project-member-chart-wrapper"
        >
          <div className='project-member-chart'>
            <ProjectMembers member={member} />
            <div>{getTime(laborTimePerMember[i])}</div>
            <Doughnut
              data={_dataSets(sortedTrackingTimes[i])}
              width={200}
              height={200}
              options={_options(sortedTrackingTimes[i])}
            />
          </div>
        </li>
      }
    </>
  );
};

export default ProjectChartIndividual;
