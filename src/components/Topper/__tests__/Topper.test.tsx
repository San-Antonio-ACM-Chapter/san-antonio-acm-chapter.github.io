import Topper from '../Topper';
import { render, screen } from '@testing-library/react';

describe('Topper Component', () => {
    test('should match snapshot', () => {
        const { asFragment } = render(<Topper showNote={false}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render note when showNote is true', () => {
        render(<Topper showNote={true}/>);
        const noteElement = screen.getByTestId('topper-logo');
        expect(noteElement).toBeInTheDocument();
    });

    test('should animate through 3 images', () => {
        render(<Topper showNote={false}/>);
        const cardImage = screen.getByAltText('randomImage');
        expect(cardImage).toBeInTheDocument();

        const firstImageSrc = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/san-antonio-texas-cityscape-black-and-white-gregory-ballos.jpg";
        const secondImageSrc = "https://images.fineartamerica.com/images-medium-large-5/mission-san-jose-black-and-white-san-antonio-texas-silvio-ligutti.jpg";
        const thirdImageSrc = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/san-antonio-texas-downtown-city-skyline-on-the-water-black-and-white-gregory-ballos.jpg";

        // Simulate animation iterations
        for (let i = 0; i < 3; i++) {
            cardImage?.dispatchEvent(new Event('animationiteration'));
        }
        expect(cardImage?.getAttribute('src')).toBe(firstImageSrc);

        // expect second image after first iteration
        cardImage?.dispatchEvent(new Event('animationiteration'));
        expect(cardImage?.getAttribute('src')).toBe(secondImageSrc);

        // expect third image after second iteration
        cardImage?.dispatchEvent(new Event('animationiteration'));
        expect(cardImage?.getAttribute('src')).toBe(thirdImageSrc);
    })
});