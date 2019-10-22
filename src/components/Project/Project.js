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
      {(!members || isLoading) &&
        <div className='loading'>
          <img
            src='https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif'
            alt='loading'
          />
        </div>
      }
      {(!isLoading && members) &&
        <>
          <div className='project-total'>
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
              </div>
            </div>
            <ProjectChartTotal
              members={members}
              memberData={memberData}
            />
          </div>
          <ul className='project-member-wrapper'>
            {memberData.map((member, i) => (
              <ProjectChartIndividual
                key={member._id}
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
