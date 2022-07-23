import { useSelector } from 'react-redux';
import { TodoDeleteAlert } from './TodoDeleteAlert';
import { TodoEditAlert } from './TodoEditAlert';

function TodoList() {
  const todos = useSelector((state) => state.todo.value);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped my-5">
            <thead>
              <tr>
                <th>No</th>
                <th className="w-100">Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{todo}</td>
                    <td>
                      <button
                        onClick={() => TodoEditAlert(idx)}
                        className="btn btn-sm btn-dark"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => TodoDeleteAlert(idx)}
                        className="btn btn-sm btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
