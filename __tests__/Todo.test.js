import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "@/pages/todo";

jest.mock("../contexts/EventContext", () => ({
  __esModule: true,
  useEventContext: () => ({
    events: [], // Provide a sample value or the value expected by your component
  }),
}));

describe("Test Case 4: Todo Page can rendered", () => {
  it("should render correctly", () => {
    render(<Todo />);
  });
});
