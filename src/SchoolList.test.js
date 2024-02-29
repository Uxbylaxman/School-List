import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SchoolList from "./SchoolList";

describe("SchoolList Component", () => {
  test("renders list of schools correctly", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        { dbn: "123", school_name: "School 1" },
        { dbn: "456", school_name: "School 2" },
      ]),
    });

    render(<SchoolList />);

    await waitFor(() => {
      expect(screen.getByText("School 1")).toBeInTheDocument();
      expect(screen.getByText("School 2")).toBeInTheDocument();
    });
  });

  test("calls onSelect function when a school is clicked", async () => {
    const onSelectMock = jest.fn();

    global.fetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue([{ dbn: "123", school_name: "School 1" }]),
    });

    render(<SchoolList onSelect={onSelectMock} />);

    await waitFor(() => {
      fireEvent.click(screen.getByText("School 1"));
    });

    expect(onSelectMock).toHaveBeenCalledWith({
      dbn: "123",
      school_name: "School 1",
    });
  });
});
