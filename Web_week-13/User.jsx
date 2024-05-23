// props: way to receive data
export const User = ({ username = "Loki", email = "Email@gmail.com" }) => {
  return (
    <div className="user">
      <img
        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
        alt="user"
      />
      <div>{username}</div>
      <div>{email}</div>
    </div>
  );
};

export const Post = ({
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  slug = "lorem-ipsum",
}) => {
  return (
    <div className="user">
      <div>title : {title}</div>
      <div>Slug : {slug}</div>
      <a href={`https://jsonplaceholder.org/posts/1`}>View</a>
    </div>
  );
};
