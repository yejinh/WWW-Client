import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    isDeleted,
    members,
    fetchProject,
    deleteProject
  } = props;

  useEffect(() => {
    fetchProject(projectId);
  }, [ fetchProject, projectId ]);

  const _renderDeleted = () => (
    <div className='project-deleted-wrapper'>
      <div className='project-deleted'>
        Project Deleted Successfully!
      </div>
      <Link to='/' className='main-button'>
        <div className='project-main-button' />
        <div> BACK TO MAIN </div>
      </Link>
    </div>
  );

  return (
    <>
      <NavContainer />
      <div className='project-wrapper'>
        {isDeleted && _renderDeleted()}
        {!isDeleted &&
          <>
            {(!members || isLoading) && <Loading />}
            {(members && !isLoading) &&
              <>
                <div className='project-total-wrapper'>
                  <ProjectChartTotalContainer
                    projectId={projectId}
                    memberData={memberData}
                    fetchProject={fetchProject}
                    deleteProject={deleteProject}
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
          </>
        }
      </div>
    </>
  );
};

export default Project;
