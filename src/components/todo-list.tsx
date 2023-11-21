import { Todo } from '@prisma/client'
import TodoComponent from './todo'

const TodoList = ({ todos }: any) => {
  return (
    <div>
      <h1 className="h1-small my-4">TodoList</h1>
      {todos.map((todo: Todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
