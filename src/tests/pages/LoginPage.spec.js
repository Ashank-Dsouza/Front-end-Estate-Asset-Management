import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import LoginPage from '../../pages/LoginPage';
import '@testing-library/jest-dom'


import { describe, expect, it, spyOn } from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('UserProfile component', () => {

  it('email should be empty string initially', () => {
    const wrapper = shallow(<LoginPage />).dive();
    expect(wrapper.instance().state.email).toBe(''); //error appears here
  });

  it('password should be empty string initially', () => {
    const wrapper = shallow(<LoginPage />).dive();
    expect(wrapper.instance().state.password).toBe(''); //error appears here
  });

//   it('history should be passed in the props for routing', () => {
//     const wrapper = shallow(<LoginPage />).dive();
//     console.log(wrapper.instance());
//     expect(wrapper.instance().props.history).toBeDefined() //error appears here
//   });

});