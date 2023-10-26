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
const { success } = require("./message");

// checkConstants(port, databaseURL, databaseName): 
// Checks existence of portNumber, database Url and databaseName
function checkConstants(port, databaseURL, databaseName) {
    if (!port) {
        throw new Error("Port number is not defined.");
    } else {
        console.log(success(`Port number is set to ${port}`));
    }

    if (!databaseURL) {
        throw new Error("Database URL is not defined.");
    } else {
        console.log(success(`Database URL is set to ${databaseURL}`));
    }

    if (!databaseName) {
        throw new Error("Database name is not defined.");
    } else {
        console.log(success(`Database name is set to ${databaseName}`));
    }
}

// validateTask(taskName): Validates task name provided by the user
function validateTaskName(taskName) {
    if (!taskName || !taskName.match(/^[a-zA-Z0-9(\s)]{3,}$/))
        throw new Error("Task name must be at least 3 characters long and should not include special characters.");
}

// validateTaskId(taskId): Validates task's id provided by the user
function validateTaskId(taskId) {
    if (!taskId || !taskId.match(/[a-z0-9A-Z]{24}/))
        throw new Error("Invalid Task id.");
}

module.exports = {
    validateTaskName,
    validateTaskId,
    checkConstants
}