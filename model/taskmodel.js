/* 
 * This file is part of the Task Manager Application (https://github.com/kumarayush2104/todolist).
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
const mongoose = require("mongoose");

// Task Schema
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }

}, {
    versionKey: false,
    timestamps: true
});

// Creating Task Model from task schema
const task = new mongoose.model("Task", taskSchema);

module.exports = {
    task
}