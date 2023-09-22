import { render, screen } from '@testing-library/react';
import Calendar from './calendar';

describe('Calendar component', () => {
  it('renders the calendar with the correct header', () => {
    const someDate = new Date(2022, 9, 3);

    render(<Calendar date={someDate} />);

    expect(screen.getByText('October 2022')).toBeInTheDocument();
  });

  it('renders the correct day names', () => {
    const someDate = new Date(2022, 9, 3);

    render(<Calendar date={someDate} />);

    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
  });

  it('highlights the correct date', () => {
    const someDate = new Date(2022, 9, 3);

    render(<Calendar date={someDate} />);

    const highlightedDate = screen.getByText('3');
    expect(highlightedDate).toBeInTheDocument();
    expect(highlightedDate).toHaveClass('highlighted');
  });
});
