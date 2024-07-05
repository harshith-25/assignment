import React, {useState} from "react";
import "./TodoList.css"
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import InitialProduct from "./InitialProduct";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ToDoList() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function addTask() {
		setTask(t => [...t, newTask]);
		setNewTasks("");
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_,i) =>  i !== index);
        setTask(updateTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] =
            [updateTasks[index -1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length-1) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] =
            [updateTasks[index + 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    return(
        <div className="to-do-list">
            <ol>
                {tasks.map((task, index) =>
                <li key = {index}>
                    <div className="index">
                        <ArrowUpwardIcon onClick={() => moveTaskUp(index)}/> 
                        <ArrowDownwardIcon onClick={() => moveTaskDown(index)}/>
                        <DeleteOutlineIcon onClick={() => deleteTask(index)} className="group" />
                        <p className="number">{index+1}</p>    
                        {/* <DialpadOutlinedIcon className="icon"/> */}
                    </div>
                    <span className="text">{task}
                        <InitialProduct/>
                    </span>
                </li>)}
            </ol>
                <button className="add-button" onClick={addTask}><AddOutlinedIcon/></button>
        </div>
    )
}

export default ToDoList