import { render, screen } from "@testing-library/react";
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
    const fightButton = screen.getByText(/fight/i);
    expect(fightButton).toBeInTheDocument();
  });
  it("should render button component with quit label", () => {
    render(
      <Provider store={store}>
        <Header fighting={true} />
      </Provider>
    );
    const quitButton = screen.getByText(/quit/i);
    expect(quitButton).toBeInTheDocument();
  });
});
