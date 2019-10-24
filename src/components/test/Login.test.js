import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../Login/Login';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUserData = jest.fn();

describe('Login', () => {
  const wrapper = shallow(<Login authenticate={mockFetchUserData} />);

  it('should render login-button', () => {
    expect(
      wrapper.find('.login-button').text()
    ).toEqual('GET STARTED');
  });

  it('should trigger authenticate prop on login-button click', () => {
    wrapper.find('.login-button').simulate('click');

    expect(mockFetchUserData.mock.calls.length).toBe(1);
  });
});
