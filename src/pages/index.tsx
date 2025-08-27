import { supabase } from '../supabaseClient'
import { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    supabase
      .from('courses')
      .select('*')
      .then(({ data }) => setCourses(data || []))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
