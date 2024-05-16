import DeleteComments from "../api/Comments/DeleteComment"
import GetComments from "../api/Comments/GetComments"
import PostComment from "../api/Comments/PostComment"
import GenericArticle from "../components/GenericArticle"
const Reacties = () => {

  return (
    <div>
      <GetComments/>
      <PostComment/>
    </div>
  )
}

export default Reacties