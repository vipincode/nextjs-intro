import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" placeholder="Add todos" />
        <button>New Todos</button>
      </form>
    </div>
  )
}

export default NewTodoForm

/**
 * @Form
 * Lets Submit this form on server side.
 */
