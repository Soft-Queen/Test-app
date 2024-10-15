import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly!", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

// TTD Method of testing before writing the code

test("should render Greet correcting with name ", () => {
  render(<Greet name="Rhoda" />);
  const textElement = screen.getByText(/Hello Rhoda/i);
  expect(textElement).toBeInTheDocument();
});
