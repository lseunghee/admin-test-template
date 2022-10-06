const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((value) => (
        <div key={value.id} style={{ display: "flex", gap: "16px" }}>
          <span>{value.attributes.title}</span>
          <span>{value.attributes.createdAt}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
