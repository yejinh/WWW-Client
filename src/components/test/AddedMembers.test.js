import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddedMembers from '../AddedMembers/AddedMembers';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  loggedInUser: {
    name: 'yejinh',
    _id: 12345
  },
  member: {
    name: 'vanilla',
    _id: 12345
  },
  onRemoveClick: jest.fn()
};

const wrapper = shallow(<AddedMembers {...props} />);
const diffWrapper = shallow(<AddedMembers {...props} loggedInUser={{ _id: 67890 }} />);

describe('AddedMembers', () => {
  it('should render member name', () => {
    expect(
      wrapper.find('span').text()
    ).toEqual(props.member.name);
  });

  it('should not render remove button when member and logged user props are same', () => {
    expect(
      wrapper.find('button').exists()
    ).toBe(false);
  });

  it('should render remove button when member and logged user props are not same', () => {
    expect(
      diffWrapper.find('button').exists()
    ).toBe(true);
  });

  it('should trigger onRemoveClick props on remove button click', () => {
    diffWrapper.find('button').simulate('click');

    expect(props.onRemoveClick.mock.calls.length).toBe(1);
  });
});
