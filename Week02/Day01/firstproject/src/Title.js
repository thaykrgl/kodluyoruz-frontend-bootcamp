const Title = (props) => {
  return (
    <h1 style={{ backgroundColor: props.bg, color: props.color }}>{props.text}</h1>
  )
}

export default Title