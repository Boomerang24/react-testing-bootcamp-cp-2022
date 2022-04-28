/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import moment from 'moment';

import DatePicker from '../DatePicker';

const today = moment(new Date()).format('YYYY-MM-DD');

const testProps = {
  date: today,
  handleChangeDate: jest.fn(),
  maxDate: '2022-04-28',
};

describe('DatePicker tests', () => {
  it('should render correctly and display the current day', async () => {
    render(<DatePicker {...testProps} />);

    const initialDatePicker = await screen.getByLabelText('calendar-picker');

    expect(initialDatePicker).toHaveDisplayValue(today);
  });
});
