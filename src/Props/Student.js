import Comp from "../Component/Comp"
import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <Comp name={props.name}/>
    </div>
  )
}
Student.propTypes={
  name:propTypes.string,
  age:propTypes.number
}
Student.defaultProps={
  name: "Anu",
  age: 20
}

export default Student