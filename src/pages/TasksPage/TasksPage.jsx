import {TasksProvider} from '@/entities/todo'
import Todo from '@/widgets/Todo'
import Weather from '../../widgets/weather/Weather'

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
      <Weather />
    </TasksProvider>
  )
}

export default TasksPage
