import { React, shallow, Provider, myStore } from '../../test/Configurations';
import Search from './Search';

describe('<Search />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={myStore}>
        <Search />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
