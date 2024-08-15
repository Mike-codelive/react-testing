import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAcount", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Mike" };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it("should render button if user is admin", () => {
    const user: User = { id: 1, name: "Mike", isAdmin: true };

    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render button if user is not admin", () => {
    const user: User = { id: 1, name: "Mike" };

    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
