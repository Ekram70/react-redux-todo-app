import Swal from 'sweetalert2';
import { editTodo } from '../../redux/state/todo/TodoSlice';
import store from '../../redux/store/store';

export function TodoEditAlert(idx) {
  Swal.fire({
    title: 'Update Task',
    input: 'text',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Update',
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editTodo({ index: idx, task: value }));
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Task Update Failed',
          footer: '<a href="">Reason: You have not entered any text</a>',
        });
      }
    },
  });
}
