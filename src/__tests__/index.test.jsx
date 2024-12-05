import "@testing-library/jest-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// This file is a remnant of an old version of the exercise and needs to be refactored

// Component
import App from "../App";

describe("The app component", () => {
  it("should render the button and the initial count state", () => {
    const { getByText } = render(<App />);

    expect(getByText("The current count is: 0")).toBeInTheDocument();
  });

  it("should render the new count when clicked", async () => {
    const { getByText } = render(<App />);

    const button = getByText("Increment count");

    // Increment the count
    userEvent.click(button);

    // Wait for the UI to update
    let newText = await waitFor(() => getByText("The current count is: 1"));

    expect(newText).toBeInTheDocument();

    // Increment the count again
    userEvent.click(button);

    // Wait for the UI to update
    newText = await waitFor(() => getByText("The current count is: 2"));

    expect(newText).toBeInTheDocument();
  });

  it("should render the new count when clicked", async () => {
    const { getByText } = render(<App />);

    const button = getByText("Increment count");

    // Increment the count
    userEvent.click(button);

    // Wait for the UI to update
    let newText = await waitFor(() => getByText("The current count is: 1"));

    expect(newText).toBeInTheDocument();

    // Increment the count again
    userEvent.click(button);

    // Wait for the UI to update
    newText = await waitFor(() => getByText("The current count is: 2"));

    expect(newText).toBeInTheDocument();
  });

  it("should change the background color when the countis bigger than 5", async () => {
    const { getByText } = render(<App />);

    const button = getByText("Increment count");

    // Increment the count
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    // Wait for the UI to update
    let newText = await waitFor(() => getByText("The current count is: 5"));

    expect(newText).not.toHaveClass("backgroundOlive");

    userEvent.click(button);
    // Wait for the UI to update
    newText = await waitFor(() => getByText("The current count is: 6"));
    expect(newText).toHaveClass("backgroundOlive");
  });

  it("should render 'Count is bigger than 10' if count is bigger than 10", async () => {
    const { getByText } = render(<App />);

    const button = getByText("Increment count");

    // Increment the count 11 times
    for (let i = 0; i <= 10; i++) {
      userEvent.click(button);
    }

    let newText = await waitFor(() => getByText("Count is bigger than 10"));

    expect(newText).toBeInTheDocument();
  });
});
