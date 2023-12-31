/* 
 * This file is part of the Task Manager Application (https://github.com/kumarayush2104/TaskManager).
 * Copyright (c) 2023 Ayush Kumar (kumarayush2104@gmail.com).
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// Dependencies
const { createTask, fetchAllTasks, fetchTask, deleteTask, deleteAllTasks, updateTaskStatus, updateTask } = require("./database");
const express = require("express");
const { success, error } = require("./message");
const cors = require("cors");

// Express application defination
const app = express();
app.use(express.json({ extended: true }));
app.use(cors());
app.options("/api/task/:id", cors());

// Application supported routes
app.get("/api/tasks/", fetchAllTasks);
app.delete("/api/tasks/", deleteAllTasks);
app.post("/api/task/", createTask);
app.get("/api/task/:id", fetchTask);
app.delete("/api/task/:id", deleteTask);
app.patch("/api/task/:id", updateTaskStatus);
app.put("/api/task/:id", updateTask);

// runServer(port): Starts the express server at provided port number.
function runServer(port) {
    try {
        app.listen(port);
        console.log(success(`Task Manager server is running at port ${port}`));
    } catch (e) {
        console.log(error(e.message));
    }
}

module.exports = {
    runServer
}