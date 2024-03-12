import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";

export const handleDelete = (THEID) => {
  return {
    type: DELETE,
    payload: THEID,
  };
};

export const handleComplete=(ID)=>{
    return{
        type:COMPLETE,
        payload:ID
    }
  
};
  export const handleAdd=(newTask)=>{
        return{
            type:ADD,
           payload:newTask
        }
    };
    export const handleEdit=(editedTask)=>{
        return{
            type:EDIT,
            payload:editedTask
        }
    }