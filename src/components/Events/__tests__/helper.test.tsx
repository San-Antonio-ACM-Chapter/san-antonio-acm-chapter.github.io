import {AddToCalendar, formatEventDate, loremIpsumSlicer} from '../helper';
import {render, screen} from "@testing-library/react";

describe('formatEventDate', () => {
    it('should format event date range correctly', () => {
        const start = new Date('2024-07-01T10:00:00');
        const end = new Date('2024-07-01T12:00:00');
        const formattedDate = formatEventDate(start, end);
        expect(formattedDate).toBe('Jul 1st 2024 @ 10:00a - 12:00p CST');
    });

    it('should handle single-digit hours correctly', () => {
        const start = new Date('2024-07-01T09:05:00');
        const end = new Date('2024-07-01T11:15:00');
        const formattedDate = formatEventDate(start, end);
        expect(formattedDate).toBe('Jul 1st 2024 @ 9:05a - 11:15a CST');
    });

    it('should handle PM times correctly', () => {
        const start = new Date('2024-07-01T13:30:00');
        const end = new Date('2024-07-01T15:45:00');
        const formattedDate = formatEventDate(start, end);
        expect(formattedDate).toBe('Jul 1st 2024 @ 1:30p - 3:45p CST');
    });
});

describe('AddToCalendar Component', () => {
    it('should match snapshot', () => {
        const eventProps = {
            title: 'Sample Event',
            date: {
                startDate: new Date('2024-07-01T10:00:00'),
                endDate: new Date('2024-07-01T12:00:00'),
            },
            linkURL: 'https://example.com/register',
            linkText: 'Register here:',
        };
        const { asFragment } = render(<AddToCalendar {...eventProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it(`expect "Add to Calendar" to be in the document`, () => {
        const eventProps = {
            title: 'Sample Event',
            date: {
                startDate: new Date('2024-07-01T10:00:00'),
                endDate: new Date('2024-07-01T12:00:00'),
            },
            linkURL: 'https://example.com/register',
            linkText: 'Register here:',
        };
        render(<AddToCalendar {...eventProps} />);
        const buttonElement = screen.getByText(/Add to Calendar/i);
        expect(buttonElement).toBeInTheDocument();
    })
});

describe('loremIpsumSlicer tests', () => {
    it('should return a substring of the loremIpsum text', () => {
        const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        const slicedText = loremIpsumSlicer(loremIpsumText);
        expect(loremIpsumText).toContain(slicedText);
    });
})