import Single from '../../components/Single/Single'
import { singleUser } from '../../data'
import './user.scss'

const User = () => {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  )
}

export default User