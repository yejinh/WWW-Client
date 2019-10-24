import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewProject from '../NewProject/NewProject';
import FoundUserForm from '../FoundUserForm/FoundUserForm';
import addedMembers from '../AddedMembers/AddedMembers';

Enzyme.configure({ adapter: new Adapter() });

const mockSubmitClick = jest.fn();
const mockMemberFind = jest.fn();
const EMAIL = 'example@example.com';

const props = {
  loggedInUser: 'yejinh',
  addedMembers: ['1', '2', '3'],
  foundUser: '1',
  onInitMember: 'yejinh',
  onSubmitClick: mockSubmitClick,
  onMemberFind: mockMemberFind
};


describe('NewProject', () => {

  describe('with isCreated prop is true', () => {
    const isCreatedWrapper = shallow(<NewProject {...props} isCreated={true} />);

    it('should render success message', () => {
      expect(
        isCreatedWrapper.find('.new-project-success').exists()
      ).toBe(true);

      expect(
        isCreatedWrapper.find('.new-project-success').text()
      ).toEqual('New Project Created!');
    });
  });

  describe('with isCreated prop is false', () => {
    const isNotCreatedWrapper = shallow(<NewProject {...props} isCreated={false}/>);

    it('should render new project form', () => {
      expect(
        isNotCreatedWrapper.find('h1').text()
      ).toEqual('New Project');

      expect(
        isNotCreatedWrapper.find('form').length
      ).toBe(2);

      expect(
        isNotCreatedWrapper.find('input').length
      ).toBe(5);
    });

    // it('should trigger onSubmitClick prop on new-project-submit click', () => {
    //   const findMember = isNotCreatedWrapper.find('#find-member');

    //   findMember.simulate('change', { target: { value: EMAIL } });
    //   isNotCreatedWrapper.update();

    //   expect(findMember.props().value).toEqual(EMAIL);
    // });

    // it('should trigger onMemberFind prop on find-member-submit click', () => {
    //   isNotCreatedWrapper.find('.find-member-submit').simulate('submit');

    //   expect(
    //     isNotCreatedWrapper.find('span').text()
    //   ).toBe('유효하지 않은 이메일 주소입니다');
    // });

    it('should render FoundUserForm', () => {
      expect(
        isNotCreatedWrapper.find(FoundUserForm).exists()
      ).toBe(true);
    });

    it('should render addedMembers', () => {
      expect(
        isNotCreatedWrapper.find(addedMembers).exists()
      ).toBe(true);
    });
  });
});
