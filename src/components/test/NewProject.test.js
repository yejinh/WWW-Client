import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewProject from '../NewProject/NewProject';
import FoundUserForm from '../FoundUserForm/FoundUserForm';
import AddedMembers from '../AddedMembers/AddedMembers';

Enzyme.configure({ adapter: new Adapter() });

const mockSubmitClick = jest.fn();
const mockMemberFind = jest.fn();

const props = {
  loggedInUser: 'yejinh',
  addedMembers: ['1', '2', '3'],
  foundUser: '1',
  onInitMember: 'yejinh',
  onSubmitClick: mockSubmitClick,
  onMemberFind: mockMemberFind
};

const isCreatedWrapper = shallow(
  <NewProject
    {...props}
    isCreated={true}
  />
);

const wrapper = shallow(
  <NewProject
    {...props}
    isCreated={false}
  />
);

const foundUserNullWrapper = shallow(
  <NewProject
    {...props}
    isCreated={false}
    foundUser={null}
  />
);

const emptyAddedMemberWrapper = shallow(
  <NewProject
    {...props}
    isCreated={false}
    addedMembers={[]}
  />
);

describe('NewProject', () => {
  describe('with isCreated prop is true', () => {
    it('should render .new-project-success', () => {
      expect(
        isCreatedWrapper.find('.new-project-success').exists()
      ).toBe(true);

      expect(
        isCreatedWrapper.find('.new-project-success').text()
      ).toEqual('New Project Created!');
    });

    it('should render Link to main', () => {
      expect(
        isCreatedWrapper.find('.main-button').props().to
      ).toBe('/');
    });
  });

  describe('with isCreated prop is false', () => {
    it('should render new project form', () => {
      expect(
        wrapper.find('h1').text()
      ).toEqual('New Project');

      expect(
        wrapper.find('form').length
      ).toBe(2);

      expect(
        wrapper.find('input').length
      ).toBe(5);
    });

    it('should render FoundUserForm component', () => {
      expect(
        wrapper.find(FoundUserForm).exists()
      ).toBe(true);
    });

    it('should render addedMembers component', () => {
      expect(
        wrapper.find(AddedMembers).exists()
      ).toBe(true);
    });

    it('should render .end-date with datetime-local type', () => {
      expect(
        wrapper.find('.end-date').props().type
      ).toEqual('datetime-local');
    });

    it('should render #find-member with email type', () => {
      expect(
        wrapper.find('#find-member').props().type
      ).toEqual('email');
    });

    it('should not render FoundUserForm component when foundUser prop is null', () => {
      expect(
        foundUserNullWrapper.find(FoundUserForm).exists()
      ).toBe(false);
    });

    it('should not render FoundUserForm component when addedMembers prop is empty', () => {
      expect(
        emptyAddedMemberWrapper.find(AddedMembers).exists()
      ).toBe(false);
    });
  });
});
