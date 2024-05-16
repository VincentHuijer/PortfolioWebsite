import DeleteComments from "../api/Comments/DeleteComment"
import DisplayComments from "../api/Comments/DisplayComments"
import GetComments from "../api/Comments/GetComments"
import PostComment from "../api/Comments/PostComment"
import GenericArticle from "../components/GenericArticle"
const Reacties = () => {

  return (
    <div>
      <DisplayComments/>
      <PostComment/>
    </div>
  )
}

export default Reacties