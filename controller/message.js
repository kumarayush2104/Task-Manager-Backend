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

// error(message): prints string in red color
function error(message) {
    return "\x1b[31m[E] " + message + "\x1b[0m";
}

// success(message): prints string in green color
function success(message) {
    return "\x1b[32m[I] " + message + "\x1b[0m";
}

// warning(message): prints string in yellow color
function warning(message) {
    return "\x1b[33m[W] " + message + "\x1b[0m";
}

module.exports = {
    error,
    success,
    warning
}