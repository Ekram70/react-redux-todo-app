import cogoToast from 'cogo-toast';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/state/todo/TodoSlice';

function CreateTodo() {
  const task = useRef();

  const dispatch = useDispatch();

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-10 my-2">
          <input
            ref={task}
            placeholder="Task Name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-lg-2 my-2">
          <button
            onClick={() => {
              if (task.current.value) {
                dispatch(addTodo(task.current.value));
                task.current.value = '';
              } else {
                cogoToast.error('Please enter task');
              }
            }}
            className="btn btn-primary w-100"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
