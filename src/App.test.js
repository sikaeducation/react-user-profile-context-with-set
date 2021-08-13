import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
const { click } = fireEvent

test("Increments a count", async () => {
  render(<App />);

  const count = screen.getByText(/The current count is/).textContent
  expect(count).toContain("0")

  const button = screen.getByText(/increment/i);
  click(button)
  const updatedCount = screen.getByText(/The current count is/i).textContent
  expect(updatedCount).toContain("1")
});
