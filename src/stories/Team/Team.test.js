import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { GetFakeTeam } from "../../helpers/testHelper";
import { store } from "../../redux/store";
import { Team } from "./Team";

describe("renders team component", () => {
  const pokeomnsInTeam = Math.round(Math.random()) * 5;
  const fakeTeam = GetFakeTeam(pokeomnsInTeam);

  it("should render 5 images component", () => {
    render(
      <Provider store={store}>
        <Team team={fakeTeam} />
      </Provider>
    );

    const images = document.querySelectorAll("img");
    expect(images.length).toEqual(pokeomnsInTeam);
  });
});
