import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Learn React");
    expect(todo).not.toHaveClass("completed");

    fireEvent.click(todo);
    expect(todo).toHaveClass("completed");

    fireEvent.click(todo);
    expect(todo).not.toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getByTestId("delete-0"); // Ensure your TodoList adds data-testid for delete buttons

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});

