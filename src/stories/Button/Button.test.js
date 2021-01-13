import { queryByAltText, queryByText, render } from "@testing-library/react";
import { Button } from "./Button";

describe("renders Button component", () => {
  it("should render button component with prop label only", () => {
    const testingLabel = "some label";
    render(<Button label={testingLabel} />);

    const button = document.querySelector("button");
    const label = queryByText(button, testingLabel);
    const img = queryByAltText(button, "typeIcon");
    expect(img).not.toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("should render button component with type img", () => {
    const testingLabel = "some label";
    render(<Button label={testingLabel} type="Grass" />);

    const button = document.querySelector("button");
    const label = queryByText(button, testingLabel);
    const img = queryByAltText(button, "typeIcon");
    expect(img).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
