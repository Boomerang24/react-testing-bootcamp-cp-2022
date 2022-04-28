/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import moment from 'moment';

import { useFetch } from './hooks/useFetch';
import App from './App';

const setup = () => render(<App />);

const failedResponse = {
  code: 500,
  msg: 'There was an error, please try again',
  service_version: 'v1',
};

jest.mock('./hooks/useFetch', () => ({
  useFetch: jest.fn(),
}));

const sampleTodaysInfo = {
  url: 'https://www.youtube.com/embed/m8qvOpcDt1o?rel=0',
  title: 'Animation: Odd Radio Circles',
  explanation: 'Sample Explanation',
  media_type: 'video',
};

/* eslint-disable no-undef */
describe('App Tests', () => {
  it('should render "mainscreen" component correctly', () => {
    const { title } = sampleTodaysInfo;

    useFetch.mockImplementation(() => ({
      response: sampleTodaysInfo,
      loading: false,
    }));
    const AppComponent = setup();
    const { getByRole, getByTitle, getByText } = AppComponent;

    const header = getByRole('heading', { name: title });
    const videoContainer = getByTitle(`Video - ${title}`);
    const description = getByText('Sample Explanation');

    expect(AppComponent).toMatchSnapshot();
    expect(videoContainer).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  it('should render "loading" component correctly', () => {
    useFetch.mockImplementation(() => ({
      response: null,
      loading: true,
    }));
    const AppComponent = setup();
    const { getByTestId } = AppComponent;

    const loader = getByTestId('triangle-loading');

    expect(AppComponent).toMatchSnapshot();
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('screen-loader');
  });
  it('should display "Future dates are not valid"', async () => {
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');

    useFetch.mockImplementation(() => ({
      response: sampleTodaysInfo,
      loading: false,
    }));
    setup();
    const DatePicker = await screen.getByLabelText('calendar-picker');

    fireEvent.change(DatePicker, { target: { value: tomorrow } });

    expect(await screen.findByText('Future dates are not valid')).toBeInTheDocument();
  });

  //TODO: Pending validate server error
  // it('should return "There was an error, please try again" when failing to fetch', async () => {
  //   useFetch.mockImplementation(() => ({
  //     response: failedResponse,
  //     loading: false,
  //   }));
  //   setup();
  // });
});
