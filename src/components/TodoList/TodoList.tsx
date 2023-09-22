import React, {
  Dispatch,
  SetStateAction,
} from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  filteredTodos: Todo[],
  selectedTodo: Todo | null,
  setSelectedTodo: Dispatch<SetStateAction<Todo | null>>,
};

export const TodoList: React.FC<Props> = ({
  setSelectedTodo,
  selectedTodo,
  filteredTodos,
}) => {
  function handleClick(todo: Todo) {
    setSelectedTodo(todo);
  }

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>

        {filteredTodos?.map(todo => (
          <tr
            key={todo.id}
            data-cy="todo"
          >
            <td className="is-vcentered">{todo.id}</td>
            <td className="is-vcentered">
              {todo.completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p
                className={todo.completed
                  ? 'has-text-success' : 'has-text-danger'}
              >
                {todo.title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => handleClick(todo)}
              >
                <span className="icon">
                  <i className={cn('far', {
                    'fa-eye': selectedTodo?.id !== todo.id,
                    'fa-eye-slash': selectedTodo?.id === todo.id,
                  })}
                  />
                </span>
              </button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};