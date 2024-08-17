import { useParams } from '@solidjs/router'

export default function () {
  const { id } = useParams()
  return <div>sdf{id}</div>
}
