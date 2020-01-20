// this folder only for testing configurations
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../store';

const React = require('react');
const ReactDOM = require('react-dom');
const renderer = require('react-test-renderer');

const { configure, shallow } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const enzymeSerializer = require('enzyme-to-json/serializer');

const myStore = createStore(store);

expect.addSnapshotSerializer(enzymeSerializer);
configure({ adapter: new Adapter() });

export {
  Provider,
  myStore,
  React,
  ReactDOM,
  renderer,
  configure,
  shallow,
  Adapter,
  enzymeSerializer
};
