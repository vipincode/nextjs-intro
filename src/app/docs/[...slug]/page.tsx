export default function page({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div>
      Catch All Route
      <p>Slug: {slug}</p>
    </div>
  )
}
