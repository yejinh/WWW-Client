import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Project from '../Project/Project';
import Loading from '../Loading/Loading';
import NavContainer from '../../container/NavContainer';
import ProjectCharTotalContainer from '../../container/ProjectChartTotalContainer';
import ProjectChartIndividual from '../ProjectChartIndividual/ProjectChartIndividual';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchProject = jest.fn();

const props = {
  members: ['1', '2', '3'],
  fetchProject: mockFetchProject,
  match: {
    params: {
      project_id: 123456
    }
  },
  location: {
    state: {
      members: ['4', '5', '6']
    }
  }
};

const isLoadingwrapper = shallow(<Project {...props} isLoading={true} />);
const wrapper = shallow(<Project {...props} isLoading={false} />);

describe('Project', () => {
  describe('with isLoading props is true', () => {
    it('should render NavContainer', () => {
      expect(
        wrapper.find(NavContainer).exists()
      ).toEqual(true);
    });

    it('should render Loading component', () => {
      expect(
        isLoadingwrapper.find(Loading).exists()
      ).toEqual(true);
    });

    it('should not render ProjectCharTotalContainer', () => {
      expect(
        isLoadingwrapper.find(ProjectCharTotalContainer).exists()
      ).toEqual(false);
    });

    it('should not render .project-member-wrapper', () => {
      expect(
        isLoadingwrapper.find('.project-member-wrapper').exists()
      ).toEqual(false);
    });
  });

  describe('with isLoading props is false', () => {
    it('should render NavContainer', () => {
      expect(
        wrapper.find(NavContainer).exists()
      ).toEqual(true);
    });

    it('should render Loading component when isLoading prop is false', () => {
      expect(
        wrapper.find(Loading).exists()
      ).toEqual(false);
    });

    it('should render ProjectCharTotalContainer', () => {
      expect(
        wrapper.find(ProjectCharTotalContainer).exists()
      ).toEqual(true);
    });

    it('should render .project-member-wrapper', () => {
      expect(
        wrapper.find('.project-member-wrapper').exists()
      ).toEqual(true);
    });
  });
});
