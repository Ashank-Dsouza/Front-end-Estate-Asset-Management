import React from 'react';
import { Route } from 'react-router-dom';
import { EmailProvider } from '../../state-management/EmailContext';


const ContextRoute = ({ contextComponent, component, ...rest }) => {
  //const { Provider } = contextComponent;
  const Component = component;

  return (
    <Route {...rest}>
      <EmailProvider>
        <Component />
      </EmailProvider>
    </Route>
  );
};

export default ContextRoute;