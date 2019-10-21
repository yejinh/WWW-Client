import React, { useEffect } from 'react';
import NavContainer from '../../container/NavContainer';
import ProjectChartTotal from '../ProjectChartTotal/ProjectChartTotal';
import ProjectChartIndividual from '../ProjectChartIndividual/ProjectChartIndividual';
import { getDateFormat } from '../../utils';
import './Project.scss';

const Project = props => {
  const memberData = props.location.state.members;
  const projectId = props.match.params.project_id;
  const {
    isLoading,
    createdAt,
    endDate,
    title,
    members,
    fetchProject
  } = props;

  useEffect(() => {
    fetchProject(projectId);
  }, []);

  return (
    <>
      <NavContainer />
      <div className='project-wrapper'>
      {(isLoading || !members) &&
        <img
          src='https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif'
          alt='loading'
        />
      }
      {!isLoading &&
        <>
          <h1>{title}</h1>
          <div>created at {getDateFormat(createdAt)}</div>
          <div>end date {getDateFormat(endDate)}</div>
          <div onClick={() => fetchProject(projectId)}>refresh</div>
          <ProjectChartTotal
            members={members}
            memberData={memberData}
          />
          <ul className='project-member-wrapper'>
            {memberData.map((member, i) => (
              <ProjectChartIndividual
                members={members}
                member={member}
                i={i}
              />
            ))}
          </ul>
        </>
      }
      </div>
    </>
  );
};

export default Project;
