import React, { useEffect } from 'react';
import NavContainer from '../../container/NavContainer';
import ProjectChartTotalContainer from '../../container/ProjectChartTotalContainer';
import ProjectChartIndividual from '../ProjectChartIndividual/ProjectChartIndividual';
import Loading from '../Loading/Loading';
import './Project.scss';

const Project = props => {
  const memberData = props.location.state.members;
  const pathname = props.location.pathname;
  const projectId = props.match.params.project_id || pathname.slice(pathname.lastIndexOf('/') + 1);
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
          <div className='project-total-wrapper'>
            <ProjectChartTotalContainer
              projectId={projectId}
              memberData={memberData}
              fetchProject={fetchProject}
            />
          </div>
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
