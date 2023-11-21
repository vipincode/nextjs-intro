import delay from 'delay'

const getData = async () => {
  await delay(2000)
  return { data: [1, 2, 3] }
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return <div>Hello World</div>
}
