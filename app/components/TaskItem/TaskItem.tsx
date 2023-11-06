"use client";

import React from "react";

interface Props{
    task: any ;
}

function TaskItem({task}:Props) {
    const { title ,description, date, completed, important } = task;
  return <div>
    <h1>{task.title}</h1>
          <p>{description}</p>
          <p>{date}</p>
          <p>{completed}</p>
          <p>{important}</p>
  </div>;
}

export default TaskItem;

