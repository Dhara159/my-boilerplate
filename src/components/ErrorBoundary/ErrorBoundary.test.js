import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ErrorBoundary />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
