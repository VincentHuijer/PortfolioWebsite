import DeleteComments from "../api/Comments/DeleteComment"
import DisplayComments from "../api/Comments/DisplayComments"
import GetComments from "../api/Comments/GetComments"
import PostComment from "../api/Comments/PostComment"
import GenericArticle from "../components/GenericArticle"
const Reacties = () => {

  return (
  
    <div className="w-4/6 mx-auto">
      <div className="mt-2">
        <DisplayComments/>
        <PostComment/>
      </div>
    </div>
  )
}

export default Reacties