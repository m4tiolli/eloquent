interface Props {
  color: string,
  size?: string
}

function ActivityIndicator({color, size}: Readonly<Props>) {
  return (
    <div className={`${size ?? "size-6"} mx-auto border-[2px] ${color} bg-transparent rounded-full border-b-transparent animate-spin`}></div>
  )
}

export default ActivityIndicator