import React from "react";
import { render, screen } from "@testing-library/react";
import DailyJournalPage from "@/pages/journal";

jest.mock("../contexts/EventContext", () => ({
  __esModule: true,
  useEventContext: () => ({
    events: [], // Provide a sample value or the value expected by your component
  }),
}));

describe("Test Case 2: Journal Page can rendered", () => {
  it("should render correctly", () => {
    render(<DailyJournalPage />);
  });
});
