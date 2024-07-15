import Providers from "@/Providers";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { defaultCity } from "../../constants";
import AddCityForm from "./AddCityForm";
import { mockRefetchCities } from "./fixtures";
import userEvent from "@testing-library/user-event";

const getters = {
  getCitynameInput: () => screen.getByPlaceholderText(/^City name/),
  getDescriptionInput: () => screen.getByPlaceholderText(/^Description/),
  getAddButton: () => screen.getByRole("button", { name: /Add/ }),
};

describe("AddCityForm", () => {
  it("renders AddCityForm component", () => {
    render(
      <Providers>
        <BrowserRouter>
          <AddCityForm
            cityToUpdate={defaultCity}
            handleCloseCityFormDialog={() => {}}
            refetchCities={mockRefetchCities}
          />
        </BrowserRouter>
      </Providers>
    );
    expect(getters.getCitynameInput()).toBeInTheDocument();
    expect(getters.getDescriptionInput()).toBeInTheDocument();
    expect(getters.getAddButton()).toBeInTheDocument();
  });

  it("should display a error message for required fields", async () => {
    render(
      <Providers>
        <BrowserRouter>
          <AddCityForm
            cityToUpdate={defaultCity}
            handleCloseCityFormDialog={() => {}}
            refetchCities={mockRefetchCities}
          />
        </BrowserRouter>
      </Providers>
    );
    const AddCityFormTitle = await screen.findByText("City Details");
    userEvent.click(getters.getCitynameInput());
    userEvent.click(getters.getDescriptionInput());
    userEvent.click(AddCityFormTitle);
    const nameInputValidationMsg = await screen.findByText(
      "Please specify the city name"
    );
    const descriptionInputValidationMsg = await screen.findByText(
      "Please add the city description"
    );
    expect(nameInputValidationMsg).toBeInTheDocument();
    expect(descriptionInputValidationMsg).toBeInTheDocument();
  });
});
