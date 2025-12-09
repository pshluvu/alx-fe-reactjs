import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // ✅ Initial Render Test
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Projects")).toBeInTheDocument();
  });

  // ✅ Add Todo Test
  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // ✅ Toggle Todo Test
  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  // ✅ Delete Todo Test
  test("deletes a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Write Tests");
    const deleteButtons = screen.getAllByText("Delete");

    fireEvent.click(deleteButtons[1]);

    expect(todo).not.toBeInTheDocument();
  });
});
