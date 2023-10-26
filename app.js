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
const { runServer } = require("./controller/server");
const { connectDatabase } = require("./controller/database");
const { checkConstants } = require("./controller/validate");
const { error } = require("./controller/message");
require("dotenv").config();

// Defining constants
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

// Main function
async function main() {
    try {
        checkConstants(PORT, DB_URL, DB_NAME);
        await connectDatabase(DB_URL, DB_NAME);
        runServer(PORT);
    } catch (e) {
        console.log(error(e.message));
    }
}

// Calling main function
main();