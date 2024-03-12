import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function Edit({task}) {
    const [editedTodo, setEditedTodo] = useState(task.todo);
    const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const editiedOne = {
          id: task.id,
          todo: editedTodo,
          isDone: task.isDone,
        };
        dispatch(handleEdit(editiedOne))
        closeModal()
      };

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ><form onSubmit={handleSubmit} >
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
        <input type="submit" value="Confirme Edit" />
        <button>Cancel</button>
      </form>
      </Modal>
    </div>
  );
}

export default Edit