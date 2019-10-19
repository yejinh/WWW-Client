import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import dateFormat from 'dateformat';
import NavContainer from '../../container/NavContainer';
import ProjectMembers from '../ProjectMembers/ProjectMembers';
import './Project.scss';

const Project = props => {
  const members = props.location.state.members;
  const {
    created_at,
    end_date,
    title
  } = props.location.state.project;

  const createdAt = dateFormat(created_at, 'dddd, mmmm dS, yyyy hTT');
  const endDate = dateFormat(end_date, 'dddd, mmmm dS, yyyy hTT');

  return (
    <>
      <NavContainer />
      <div className='project-wrapper'>
        <h1>{title}</h1>
        <div>created at {createdAt}</div>
        <div>end date {endDate}</div>
        <ul className='project-member-wrapper'>
          {members.map(member => <ProjectMembers member={member}/> )}
        </ul>
      </div>
    </>
  );
};

export default Project;
