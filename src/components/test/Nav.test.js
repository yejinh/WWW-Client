import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from '../Nav/Nav';

Enzyme.configure({ adapter: new Adapter() });

const onLogoutClick = jest.fn();

const NavComponent = () => {
  const props = {
    userName: 'yejinh',
    profilePhoto: 'http://',
    onLogoutClick: onLogoutClick
  };

  const wrapper = shallow(<Nav {...props} />);

  return { props, wrapper };
};


describe('Nav', () => {
  const { props, wrapper } = NavComponent();

  it('should render userName prop', () => {
    expect(
      wrapper.find('.nav-user-name').text()
    ).toEqual(props.userName);
  });

  it('should render profilePhoto prop', () => {
    expect(
      wrapper.find('.nav-user-photo').prop('style')
    ).toHaveProperty('backgroundImage', `url(${props.profilePhoto})`);
  });

  it('should render nav-contents', () => {
    expect(
      wrapper.find('.nav-content').length
    ).toBe(4);
  });

  it('should Link to routes', () => {
    expect(
      wrapper.find('.project').props().to
    ).toBe('/');

    expect(
      wrapper.find('.new-project').props().to
    ).toBe('/projects/new');
  });

  it('should trigger onLogoutClick prop on sign-out click', () => {
    wrapper.find('.sign-out').simulate('click');

    expect(onLogoutClick.mock.calls.length).toBe(1);
  });
});
