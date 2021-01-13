import { getByText, queryByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Header } from "./Header";

describe("renders header component", () => {
  it("should render button component with fight label", () => {
    render(
      <Provider store={store}>
        <Header fighting={false} isTeamReady={true} />
      </Provider>
    );

    const button = document.querySelector("Button");
    const fightText = queryByText(button, "Fight");
    const quitText = queryByText(button, "Quit");
    const logo = screen.queryByAltText("pokemonLogoImg");
    expect(logo).toBeInTheDocument();
    expect(fightText).toBeInTheDocument();
    expect(quitText).not.toBeInTheDocument();
  });
  
  it("should render button component with quit label", () => {
    render(
      <Provider store={store}>
        <Header fighting={true} />
      </Provider>
    );

    const button = document.querySelector("Button");
    const fightText = queryByText(button, "Fight");
    const quitText = queryByText(button, "Quit");
    const logo = screen.queryByAltText("pokemonLogoImg");
    expect(logo).toBeInTheDocument();
    expect(fightText).not.toBeInTheDocument();
    expect(quitText).toBeInTheDocument();
  });
});
