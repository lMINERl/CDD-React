import { React, shallow } from '../../test/Configurations';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  test('renders', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
