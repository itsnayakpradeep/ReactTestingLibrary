import {render, screen} from "@testing-library/react";
import Greetings from "../greetings";

describe('Greeting Component', () => {
    test('renders HAPPY NEW YEAR 2024 as text', () => {
        //ARRANGE
        render(<Greetings/>);
        //ACT
        //...Nothing
        //ASSERT   
        const happyNewYear = screen.getByText('Happy New 2024');
        expect(happyNewYear).toBeInTheDocument();
    });

    test('render the "good to see you!" if the butten was not pressed', () => {
        render(<Greetings />);
         //ACT
        //...Nothing
        //ASSERT
        const outputElement = screen.getByText("good to see you1!");
        expect.any(outputElement).toBeInTheDocument();
    });

    test('render the "change!" if the button was clicked', () => {
        render(<Greetings />);
        //ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //ASSERT
        const outputElement = screen.getByText("changed!");
        expect(outputElement).toBeInTheDocument();

    });

    test('Does not render "good to see you" if button is pressed', () => {
       //ARRANGE
        render(<Greetings />);
        //ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //ASSERT
        const outputElement = screen.queryByText('good to see you', {exact: false});
        expect(outputElement).toBeNull();
    });
});

