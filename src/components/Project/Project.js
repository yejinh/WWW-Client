import React, { useEffect } from 'react';
import NavContainer from '../../container/NavContainer';
import ProjectChartTotalContainer from '../../container/ProjectChartTotalContainer';
import ProjectChartIndividual from '../ProjectChartIndividual/ProjectChartIndividual';
import Loading from '../Loading/Loading';
import './Project.scss';

const Project = props => {
  const memberData = props.location.state.members;
  const projectId = props.match.params.project_id;
  const {
    isLoading,
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
      {(!members || isLoading) && <Loading />}
      {(members && !isLoading) &&
        <>
          <ProjectChartTotalContainer
            projectId={projectId}
            memberData={memberData}
          />
          <ul className='project-member-wrapper'>
            {memberData.map((member, i) => (
              <ProjectChartIndividual
                key={member}
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
