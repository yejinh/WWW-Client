import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FoundUserForm from '../FoundUserForm/FoundUserForm';

Enzyme.configure({ adapter: new Adapter() });

const mockSubmitClick = jest.fn();
const props = {
  user: {
    name: 'yejinh'
  },
  onSubmitClick: mockSubmitClick
};

const wrapper = shallow(<FoundUserForm {...props} />);

describe('FoundUserForm', () => {
  it('should render form tag', () => {
    expect(
      wrapper.find('form').exists()
    ).toEqual(true);
  });

  it('should render option-radio with radio type', () => {
    expect(
      wrapper.find('.option-radio').props().type
    ).toEqual('radio');
  });

  it('should render add-member with submit type', () => {
    expect(
      wrapper.find('.add-member').props().type
    ).toEqual('submit');
  });

  it('should render name of user prop', () => {
    expect(
      wrapper.find('span').text()
    ).toEqual(props.user.name);
  });

  it('should trigger onSubmitClick prop on form tag submit', () => {
    wrapper.find('form').simulate('submit');

    expect(props.onSubmitClick.mock.calls.length).toBe(1);
  });
});
