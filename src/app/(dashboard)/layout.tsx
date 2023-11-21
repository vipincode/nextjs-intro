import NewTodoForm from '@/components/new-todo-form'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <h1 className="h1-basic">Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      {children}
    </div>
  )
}
