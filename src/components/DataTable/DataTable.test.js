import { React, shallow, Provider, myStore } from '../../test/Configurations';
import DataTable from './DataTable';

describe('<DataTable />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={myStore}>
        <DataTable />{' '}
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
