# Enhanced Todo List Application

This is a simple Todo List App created using **HTML, CSS, and JavaScript**.  
It supports adding, completing, deleting, and searching tasks with **localStorage persistence**.

---

## 🚀 Features

### ✔ Add Tasks  
Users can enter a task and add it to the list.

### ✔ Mark as Completed  
Click “Complete” to mark the task completed (text becomes grey & struck-through).  
Click “Undo” to reverse it.

### ✔ Delete Tasks  
Each task can be removed individually.

### ✔ Real-Time Search  
Typing in the search bar filters tasks instantly.

### ✔ Persistent Storage  
All tasks are saved in **localStorage** as a JSON array:
```json
{
  id: 12345678,
  text: "Sample Task",
  completed: false
}
