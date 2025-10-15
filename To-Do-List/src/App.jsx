import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTask = { id: Date.now(), text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  return (
    <>
      <div className="app-wrapper">
        <div className="todo-container">
          <header>
            <h1>T0-DO LIST</h1>
          </header>

          <main>
            <form onSubmit={handleAddTask} className="add-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task..."
                className="task-input"
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>

            <div className="task-list">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <div key={task.id} className="task-list-item">
                    <div className="task-content">
                      <button
                        onClick={() => handleToggleTask(task.id)}
                        className={`toggle-btn ${
                          task.completed ? "completed" : ""
                        }`}
                      >
                        {task.completed && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        )}
                      </button>
                      <span
                        className={`task-text ${
                          task.completed ? "completed" : ""
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="delete-btn"
                      aria-label="Delete task"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className="no-tasks">No tasks yet. Add one above!</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
