import React from 'react';
import { render, screen } from '@testing-library/react'
import Calendar from '@/pages/calendar';

jest.mock('../contexts/EventContext', () => ({
    __esModule: true,
    useEventContext: () => ({
      events: [] // Provide a sample value or the value expected by your component
    })
  }));

describe('Test Case 3: Calendar page can rendered' , () => {
    it('should render correctly', () => {
        render(<Calendar />);

    })

})

