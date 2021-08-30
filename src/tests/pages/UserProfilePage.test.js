import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import UserProfile from '../../pages/UserProfile';
import '@testing-library/jest-dom'
import { describe, expect, it, spyOn } from '@jest/globals';
import { create } from "react-test-renderer";

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('UserProfile component', () => {

  it('should set the name and email of the profile', async () => {
    const root = create(<UserProfile />).root;

    const instanceProfile = root.instance;

    await instanceProfile.setProfileInfo('Rob Chandler', 'name@gmail.com');

    expect(instanceProfile.state.email).toEqual('name@gmail.com');
    expect(instanceProfile.state.name).toEqual('Rob Chandler');

  })
});


