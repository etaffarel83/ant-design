import React from 'react';
import { DatePicker, Space, Typography } from 'antd';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;
const getYearMonth = (date: Dayjs) => date.year() * 12 + date.month();

// Disabled 6 months from the selected date
const disabled6MonthsDate: DatePickerProps['disabledDate'] = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-6, 'months');
    const maxDate = from.add(6, 'months');

    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();

      default:
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
    }
  }

  return false;
};

const App: React.FC = () => (
  <Space direction="vertical">
    <Typography.Title level={5}>7 days range</Typography.Title>
    <RangePicker disabledDate={disabled7DaysDate} />

    <Typography.Title level={5}>6 months range</Typography.Title>
    <RangePicker disabledDate={disabled6MonthsDate} picker="month" />
  </Space>
);

export default App;
