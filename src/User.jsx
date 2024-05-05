// props: way to receive data
export const User = ({ username = "Loki", email = "Email@gmail.com" }) => {
    return (
      <div class="user">
        <img
          src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
          alt="user"
        />
        <div>{username}</div>
        <div>{email}</div>
      </div>
    );
  };