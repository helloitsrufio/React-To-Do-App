import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'August 10 at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Hang out with Andrah',
        day: 'July 28 at 9 am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Make apricot ice cream with the sibs',
        day: 'Jul 23 at 7 pm',
        reminder: false,
    }
])

//Add Task
const addTask = (onAdd) => { 
  const id = Math.floor(Math.random() * 10000 + 1)
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder : ! task.reminder} : task))
}

  const name = 'Ruth'
  return (
    <section className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 <Tasks tasks={tasks.text} onDelete={deleteTask} onToggle ={toggleReminder}/> : 'No Tasks To Show'}
    </section>
  );
}

export default App;
