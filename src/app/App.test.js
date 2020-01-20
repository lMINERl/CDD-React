import { React, shallow, Provider, myStore } from '../test/Configurations';
import App from './App';

describe('<App />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={myStore}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
