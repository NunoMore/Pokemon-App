import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { GetFakePokemon } from "../../helpers/testHelper";
import { store } from "../../redux/store";
import { View } from "./View";

describe("renders view component", () => {
  const fakePokemon = GetFakePokemon();
  it("should render simple view", () => {
    render(
      <Provider store={store}>
        <View detailed={false} selectedPokemon={fakePokemon} />
      </Provider>
    );

    const img = document.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  it("should render detailed view", () => {
    render(
      <Provider store={store}>
        <View detailed={true} selectedPokemon={fakePokemon} />
      </Provider>
    );

    const details = screen.queryByText(/DETAILS/);
    const img = document.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });
});
