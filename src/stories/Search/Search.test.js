import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { SearchBar } from "./Search";

describe("renders search bar component", () => {
  it("should render input component", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = document.querySelector("input");
    expect(input).toBeInTheDocument();
  });
});
