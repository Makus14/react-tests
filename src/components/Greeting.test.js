import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test(`renders It's good to see you if the button was NOT clicked`, () => {
    render(<Greeting />);

    const goodToSeeElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeElement).toBeInTheDocument();
  });

  test(`renders Changed if the button was click`, () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changeElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(changeElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changeElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(changeElement).toBeNull();
  });
});
