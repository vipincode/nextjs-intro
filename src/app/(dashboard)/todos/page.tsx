import TodoList from '@/components/todo-list'
import { prisma } from '@/prisma/client'

const getData = async () => {
  const todos = await prisma.todo.findMany({})
  console.log(todos)
  return todos
}

export default async function TodosPage() {
  const todos = await getData()
  return <TodoList todos={todos} />
}
