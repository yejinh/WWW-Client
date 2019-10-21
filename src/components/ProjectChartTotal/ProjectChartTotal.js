import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { CHART_COLOR, getTime } from '../../utils';

const ProjectChartTotal = ({ members, memberData }) => {
  const [ chartStyle, setChartStyle ] = useState(true);

  const trackingTimes = members.map(member => member.time_tracking);
  const laborTimePerMember = trackingTimes.map(tracking => tracking.reduce((acc, cur) => (acc + Math.floor(cur.time / 60)), 0));
  const totalLaborTime = laborTimePerMember.reduce((acc, cur) => acc + cur);

  const dataSets = () => ({
    datasets: [{
      data: laborTimePerMember,
      backgroundColor: CHART_COLOR
    }],
    labels: memberData.map(member => member.name)
  });

  return (
    <div className='project-chart'>
      <div onClick={() => setChartStyle(!chartStyle)}>Chart Style</div>
      {chartStyle
        ? <Pie
            data={dataSets()}
            width={500}
            height={500}
          />
        : <Bar
            data={dataSets()}
            width={500}
            height={500}
            options={{
              legend: {
                display: false
              }
            }}
          />
      }
    <span>total labor time: {getTime(totalLaborTime)}</span>
  </div>
  );
};

export default ProjectChartTotal;
