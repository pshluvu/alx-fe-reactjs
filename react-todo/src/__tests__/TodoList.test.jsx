import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    
    // Check that initial demo todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate user typing a new todo
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    // Check that new todo is in the document
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Learn React");

    // Click to mark as completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Click again to mark as not completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // Find the todo text
    const todo = screen.getByText("Build Todo App");

    // Find the delete button associated with this todo
    const deleteButton = screen.getAllByText("Delete").find(
      (btn) => btn.parentElement.textContent.includes("Build Todo App")
    );

    // Click the delete button
    fireEvent.click(deleteButton);

    // Check that the todo is removed
    expect(screen.queryByText("Build Todo App")).not.toBeInTheDocument();
  });
});
