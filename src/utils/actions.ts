'use server'
import { prisma } from '@/prisma/client'
import { revalidatePath } from 'next/cache'

export const newTodo = async (formData: { get: (arg0: string) => any }) => {
  const todos = await prisma.todo.create({
    data: {
      content: formData.get('content'),
    },
  })
  revalidatePath('/todos') //This is clean the cache and update data immediate on screen
}
