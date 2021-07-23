import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

function App() {
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

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  const name = 'Ruth'
  return (
    <section className="container">
      <Header />
      {tasks.length > 0 <Tasks tasks={tasks.text} onDelete={deleteTask} /> : 'No Tasks To Show'}
    </section>
  );
}

export default App;
