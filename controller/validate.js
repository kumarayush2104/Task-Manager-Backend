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
const { warning, success } = require("./message");

// checkConstants(port, databaseURL, databaseName): 
// Checks existence of portNumber, database Url and databaseName
function checkConstants(port, databaseURL, databaseName) {
    if(!port) {
        console.log(warning("[W] Port number is not defined, using 5000."));
    } else {
        console.log(success("[I] Port number is set to " + port));
    }

    if(!databaseURL) {
        console.log(warning("[W] Database URL is not defined, using localhost."));
    } else {
        console.log(success("[I] Database URL is set to " + databaseURL));
    }

    if(!databaseName) {
        console.log(warning("[W] Database name is not defined, using Task-Manager"));
    } else {
        console.log(success("[I] Database name is set to " + databaseName));
    }
}

// validateTask(taskName): Validates task name provided by the user
function validateTask(taskName) {
    if(!taskName) return false;
    return taskName.match(/^[a-zA-Z0-9(\s)]{3,}$/);
}

// validateTaskId(taskId): Validates task's id provided by the user
function validateTaskId(taskId) {
    if(!taskId) return false;
    return taskId.match(/[a-z0-9A-Z]{24}/)
}

module.exports = {
    validateTask,
    validateTaskId,
    checkConstants
}