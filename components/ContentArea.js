import PostCard from "./ContentAreaComponents/PostCard";
import PublishArea from "./ContentAreaComponents/PublishArea";

export default function ContentArea() {

  const contentData = [{
    username: "Jhon_stim",
    userFullName: "jhones Stim",
    createOn: "1 Hours Ago",
    content: "survived not only five centuries, but also the leap into electronic",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    likeCount: "1.1k",
    commentCount: "123",
  },
  {
    username: "Jhon_stim",
    userFullName: "jhones Stim",
    createOn: "3 Hours Ago",
    content: "with the release of Letraset sheets containing Lore",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    likeCount: "1.1k",
    commentCount: "123",
  }, {
    username: "AhmetYlmazz1",
    userFullName: "Ahmet Yılmaz",
    createOn: "1 Day Ago",
    content: "There are many variations of passages of Lorem Ipsum available,",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    likeCount: "1.1k",
    commentCount: "123",
  },];
  return (
    <div>
      <PublishArea />
      {
        contentData.map(content => {
          return <PostCard
            avatar={content.avatar}
            fullname={content.fullname}
            username={content.username}
            content={content.content}
            createOn={content.createOn}
            likeCount={content.likeCount}
            commentCount={content.commentCount}
          />;
        })
      }


    </div>
  );
}
