import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, setFilter } from '../redux/actions';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);
  const filter = useSelector(state => state.todoReducer.filter);

  const handleAddTodo = () => {
    const newTodo = prompt('Введите новое задание');
    if (newTodo) {
      dispatch(addTodo(newTodo));
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return false;
  });

  return (
    <div>
      <h1>Список заданий</h1>
      <input type="text" placeholder="Введите новое задание" onKeyPress={e => e.key === 'Enter' && handleAddTodo()} />
      <Button variant="primary" onClick={handleAddTodo}>Добавить</Button>
      <div className="filters">
        <Button variant="outline-primary" onClick={() => dispatch(setFilter('all'))}>Все задания</Button>
        <Button variant="outline-primary" onClick={() => dispatch(setFilter('active'))}>Активные задания</Button>
        <Button variant="outline-primary" onClick={() => dispatch(setFilter('completed'))}>Завершенные задания</Button>
        <Button variant="outline-danger" onClick={() => dispatch(setFilter('all'))}>Сбросить</Button>
      </div>
      <ListGroup>
        {filteredTodos.map(todo => (
          <ListGroupItem key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
            {todo.text}
            <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
