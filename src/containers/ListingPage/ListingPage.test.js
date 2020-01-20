import { React, shallow, Provider, myStore } from '../../test/Configurations';
import { ListingPage } from './ListingPage';

describe('<ListingPage />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={myStore}>
        <ListingPage />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
