import React from 'react';
// import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import LoginPage from '../../pages/LoginPage';
import ReactPopup from '../../components/ReactPopup';
import UserProfile from '../../pages/UserProfile';
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'


import { describe, expect, it, spyOn } from '@jest/globals';

import { create } from "react-test-renderer";

import { GetWithAuth } from '../../apis/api-controller';

// jest.mock('eternalService', () => {
//   return jest.fn(() => {
//       return { doSomething: jest.fn((cb) => cb('fakeReturnValue');
//   });
// });

// jest.mock('../../apis/api-controller'), ()=> ({
//   GetWithAuth: jest.fn().mockImplementation(() => Promise.resolve({
//     data:{
//     'firstname': 'f_name',
//     'lastname': 'l_name',
//     'email': 'ashank@gmail.com'
//     }
//   } ))
// })

import { render as RenderTest } from '@testing-library/react'
import { Link } from 'react-router';

import {
  Grid,
  Typography,
  Container,
  CssBaseline,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const flushPromises = () => new Promise(setImmediate);


describe('LoginPage component', () => {

  it('email should be empty string initially', () => {
    const wrapper = shallow(<LoginPage />).dive();
    expect(wrapper.instance().state.email).toBe(''); //error appears here
  });

  it('password should be empty string initially', () => {
    const wrapper = shallow(<LoginPage />).dive();
    expect(wrapper.instance().state.password).toBe(''); //error appears here
  });

  it('should set the name and email of the profile', async () => {
    const root = create(<UserProfile />).root;

    const instanceProfile = root.instance;

    await instanceProfile.setProfileInfo('Rob Chandler', 'name@gmail.com');

    expect(instanceProfile.state.email).toEqual('name@gmail.com');
    expect(instanceProfile.state.name).toEqual('Rob Chandler');

  })
});


