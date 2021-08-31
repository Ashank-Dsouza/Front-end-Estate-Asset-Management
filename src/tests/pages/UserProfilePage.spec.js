import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import UserProfile from '../../pages/UserProfile';
import '@testing-library/jest-dom'
import { describe, expect, it, spyOn } from '@jest/globals';
import { create } from "react-test-renderer";
import { render, screen } from '@testing-library/react';
import {act} from 'react-dom/test-utils'; // ES6


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

Enzyme.configure({ adapter: new Adapter() });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('UserProfile component', () => {

  it('should set the name and email of the profile', async () => {
    const root = create(<UserProfile />).root;

    const instanceProfile = root.instance;

    // console.log(instanceProfile._reactInternals.);

    await instanceProfile.setProfileInfo('Rob Chandler', 'name@gmail.com');

    expect(instanceProfile.state.email).toEqual('name@gmail.com');
    expect(instanceProfile.state.name).toEqual('Rob Chandler');

  })


it('renders welcome message', () => {
  render(<UserProfile />);
  expect(screen.getByText('Loading....')).toBeInTheDocument();
  });

  it("useStaleRefresh hook runs correctly", async () => {
    act(() => {
      render(<UserProfile  />, container);
    });
  
    await sleep(500);
    expect(container.textContent).toBe("Loading....");
    console.log(container.textContent);

  });


});


