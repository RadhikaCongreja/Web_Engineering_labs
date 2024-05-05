const container = document.getElementById("container");
const fetchUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((apiResult) => apiResult.json())
    .then((data) => {
      data.forEach((user) => {
        container.innerHTML += `<div class="user">
        <img
          src="https://api.dicebear.com/8.x/lorelei/svg?seed=${user.username}"
          alt="user"
        />
        <div>${user.username}</div>
        <div>${user.email}</div>
        <div>${user.phone}</div>
      </div>
    `;
      });
    });
};
fetchUsers();