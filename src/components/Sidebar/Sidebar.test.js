import { React, shallow } from '../../test/Configurations';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  test('renders', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
