import { React, shallow } from '../../test/Configurations';

import NavigationProfile from './NavigationProfile';

describe('<NavigationProfile />', () => {
  test('renders', () => {
    const wrapper = shallow(<NavigationProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
