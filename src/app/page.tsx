import NewTodoForm from '@/components/new-todo-form'
import delay from 'delay'

const getData = async () => {
  await delay(2000)
  return { data: { title: 'Fist title' } }
}

export default async function Home() {
  const data = await getData()
  // console.log(data)
  return (
    <div>
      Hello {data.data.title}
      <NewTodoForm />
    </div>
  )
}
