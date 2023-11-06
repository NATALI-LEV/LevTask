"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";


function CreateContent() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    const [completed,setCompleted] = useState(false);
    const [important,setImportant] = useState(false);

    const handleChange = (name: string) => (e: any) => {
        switch (name){
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;  
            case "important":
                setImportant(e.target.checked);
                break;
            default:
                break;     
        }
    };
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const task = {
            title,
            description,
            date,
            completed,
            important,
        };
        try {
            const res = await axios.post("/api/tasks", task);

            if(res.data.error){
                toast.error(res.data.error);
            } 
            toast.success("task created successfuly");
        } catch (error) {
            toast.error("something went wrong");
            console.log(error);
        }
    };

  return (
  <form onSubmit={handleSubmit}>
    <h1>create a task</h1>
    <div className="input-control">
        <label htmlFor="title">title</label>
        <input type="text"
            id="title"
            value={title}
            name="title"
            onChange={handleChange("title")}
            placeholder="whatever"
        />
    </div>
    <div className="input-control">
        <label htmlFor="description">description</label>
        <textarea
            id="description"
            value={description}
            onChange={handleChange("description")}
            name="description"
            rows={4}
            placeholder="whatever"
        ></textarea> 
    </div>
    <div className="input-control">
        <label htmlFor="date">date</label>
        <input type="date"
            id="date"
            value={date}
            name="date"
            onChange={handleChange("date")}
        />
    </div>
    <div className="input-control">
        <label htmlFor="completed">toggle completed</label>
        <input type="checkbox"
            id="completed"
            value={completed.toString()}
            name="completed"
            onChange={handleChange("completed")}
        />
    </div>
    <div className="input-control">
        <label htmlFor="important">toggle important</label>
        <input type="checkbox"
            id="important"
            value={important.toString()}
            name="important"
            onChange={handleChange("important")}
        />
    </div>
    <div className="submit-btn">
        <button type="submit">
            <span>submit</span>
        </button>
    </div>
  </form>
  );
}

export default CreateContent;
