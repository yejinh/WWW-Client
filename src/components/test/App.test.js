import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App/App';
import Login from '../Login/Login';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUserData = jest.fn();

const isNotLoggedIn = () => {
  const props = {
    isLoggedIn: false,
    fetchUserData: mockFetchUserData
  };

  return mount(<App {...props} />);
};

const isLoggedIn = () => {
  const props = {
    isLoggedIn: true
  };

  return shallow(<App {...props} />);
};

const isNotLoggedInWrapper = isNotLoggedIn();
const isLoggedInWrapper = isLoggedIn();

describe('App', () => {

  it('should render Login component with isLoggedIn prop is false', () => {
    expect(
      isNotLoggedInWrapper.find(Login).exists()
    ).toBe(true);
  });

  it('should not render Login component with isLoggedIn prop is true', () => {
    expect(
      isLoggedInWrapper.find(Login).exists()
    ).toBe(false);
  });

  it('should trigger fetchUserData prop after rendering', () => {
    const fetchUserData = mockFetchUserData;

    shallow(<App fetchUserData={fetchUserData} />);

    expect(fetchUserData).toHaveBeenCalled();
  });
});
