import { render, screen } from "@testing-library/react";
import { Dialog } from ".";

describe("show items on page", () => {
  test("renders conrrectly when open is true", () => {
    render(<Dialog children={<h1>Teste</h1>} open={true} />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });

  test("renders conrrectly width when open is false", async () => {
    const { getByTestId } = render(
      <Dialog children={<h1>Teste</h1>} open={false} />
    );

    const containerDialog = getByTestId("dialog-container");

    expect(containerDialog).toHaveStyle("width: 0px;");
  });

  test("renders conrrectly width when open is true", async () => {
    const { getByTestId } = render(
      <Dialog children={<h1>Teste</h1>} open={true} />
    );

    const containerDialog = getByTestId("dialog-container");

    expect(containerDialog).toHaveStyle("width: 100vw;");
  });
});
