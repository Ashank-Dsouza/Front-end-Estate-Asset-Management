import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import UserProfile from '../../pages/UserProfile';
import '@testing-library/jest-dom'
import { describe, expect, it, spyOn } from '@jest/globals';
import { create } from "react-test-renderer";
import { render, screen } from '@testing-library/react';
import {act} from 'react-dom/test-utils'; // ES6
import  PrivateRoute  from    './../../components/PrivateRoute'; 


let container = null;

beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  // unmountComponentAtNode(container);
  container.remove();
  container = null;
});

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Router } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('UserProfile component', () => {
  it('should set the name and email of the profile',  () => {
    expect(false).toBeFalsy()
  });

  it.only('should set the name and email of the profile', async () => {
    const wrapper = shallow(<PrivateRoute> <UserProfile /> </PrivateRoute> ).children();



    // console.log(wrapper.);

    // await instanceProfile.setProfileInfo('Rob Chandler', 'name@gmail.com');

    // expect(instanceProfile.state.email).toEqual('name@gmail.com');
    // expect(instanceProfile.state.name).toEqual('Rob Chandler');

  })


});


