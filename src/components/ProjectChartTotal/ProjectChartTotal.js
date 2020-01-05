import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import BAR_ICON from './src/bar-icon.png';
import PIE_ICON from './src/pie-icon.png';
import {
  getTime,
  getDateFormat,
  CHART_COLOR,
  EMPTY_DATA
} from '../../utils';
import './ProjectChartTotal.scss';

const ProjectChartTotal = props => {
  const [ chartStyle, setChartStyle ] = useState(true);

  const {
    memberData,
    projectId,
    createdAt,
    endDate,
    title,
    members,
    fetchProject,
    deleteProject
  } = props;

  const trackingTimes = members.map(member => member.time_tracking);
  const laborTimePerMember = trackingTimes.map(tracking => tracking.reduce((acc, cur) => (acc + Math.floor(cur.time / 60)), 0));
  const totalLaborTime = laborTimePerMember.reduce((acc, cur) => acc + cur);

  const dataSets = () => {
    if (!totalLaborTime) {
      return EMPTY_DATA;
    }

    return {
    datasets: [{
      data: laborTimePerMember,
      backgroundColor: CHART_COLOR
    }],
    labels: memberData.map(member => member.name)
    }
  };

  const options = () => {
    if (!totalLaborTime) {
      return {
        tooltips: {
          enabled: false
        }
      };
    }

    if (chartStyle) {
      return {
        legend: {
          labels: {
            fontSize: 13
          }
        }
      };
    }

    return {
      legend: {
        display: false
      }
    };
  };

  const _handleDeleteButton = () => {
    if (window.confirm('Are you sure you want to delete the project?')) {
      deleteProject(projectId);
    }
  };

  return (
    <>
      <div className='project-total-header'>
        <div>
          <h1>{title}</h1>
          <div className='project-date'>{getDateFormat(createdAt)}</div>
          <div className='project-date'>{getDateFormat(endDate)}</div>
        </div>
        <div>
          <span
            className='project-refresh'
            onClick={() => fetchProject(projectId)}
          />
          <span
            className='project-delete'
            onClick={_handleDeleteButton}
          />
        </div>
      </div>
      <div className='project-chart'>
        <img
          onClick={() => setChartStyle(!chartStyle)}
          className='project-chart-style'
          src={chartStyle ? BAR_ICON : PIE_ICON}
          alt='chart-style'
        />
        {chartStyle
          ? <Pie
              data={dataSets()}
              width={400}
              height={400}
              options={options()}
            />
          : <Bar
              data={dataSets()}
              width={400}
              height={400}
              options={options()}
            />
        }
        <span>total labor time: {getTime(totalLaborTime)}</span>
      </div>
    </>
  );
};

export default ProjectChartTotal;
