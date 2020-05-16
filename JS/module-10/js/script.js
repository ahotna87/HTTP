"use strict";

function createButton({ text = "button", className = "" }) {
  const btn = document.createElement("button");
  btn.classList.add = className;
  btn.textContent = text;
  return btn;
}

function createInput({ type = "submit", plaseholder = "", value = "" }) {
  const inp = document.createElement("input");
  inp.type = type;
  inp.placeholder = plaseholder;
  inp.value = value;
  return inp;
}

const users_all = document.createElement("td");
users_all.classList = "user_all";
const getUsersButton = createButton({
  text: "Get all users",
  className: "allUsers",
});
const users_list = document.createElement("ul");
users_list.classList = "users_list";
users_all.append(getUsersButton, users_list);

const user_id = document.createElement("td");
user_id.classList = "user_id";
const input_form = createInput({
  type: "search",
  plaseholder: "enter user id",
  value: "",
});
const input_search = createInput({
  type: "submit",
  plaseholder: "",
  value: "Show",
});
user_id.append(input_form, input_search);

const user_add = document.createElement("td");
user_add.classList = "user_add";
const input_form_name = createInput({
  type: "search",
  plaseholder: "enter user name",
  value: "",
});
const input_form_age = createInput({
  type: "search",
  plaseholder: "enter user age",
  value: "",
});
const button_send = createButton({ text: "add User", className: "" });
user_add.append(input_form_name, input_form_age, button_send);

const user_remove = document.createElement("td");
user_remove.classList = "user_remove";
const input_form_delete = createInput({
  type: "search",
  plaseholder: "enter user id",
  value: "",
});
const button_delete = createButton({ text: "delete User", className: "" });
user_remove.append(input_form_delete, button_delete);

const user_update = document.createElement("td");
user_update.classList = "user_update";
const input_form_update = createInput({
  type: "search",
  plaseholder: "enter user id",
  value: "",
});
const update_form_name = createInput({
  type: "search",
  plaseholder: "enter user name",
  value: "",
});
const update_form_age = createInput({
  type: "search",
  plaseholder: "enter user age",
  value: "",
});
const button_update = createButton({ text: "update User", className: "" });

user_update.append(
  input_form_update,
  update_form_name,
  update_form_age,
  button_update
);

const users = document.querySelector(".users");
users.append(users_all, user_id, user_add, user_remove, user_update);

const getAllUsers = () => {
  return fetch("https://test-users-api.herokuapp.com/users/")
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("error: " + response.statusText);
    })
    .then((data) => data.data)
    .catch((error) => console.log(error));
};

const updateUsers = (data) => {
  const markup = createUserItem(data);

  // console.log(markup);
  users_list.insertAdjacentHTML("beforeend", markup);
};

const clearList = () => {
  users_list.innerHTML = "";
};

const onClick = () => {
  clearList();
  getAllUsers().then(updateUsers);
};

const createUserItem = (data) =>
  data.reduce(
    (acc, el) =>
      acc +
      ` <li class="users_list_item">
          <p>id:${el.id}</p>
          <p>name:${el.name}</p>
          <p>age:${el.age}</p>
        </li>`,
    " "
  );

getUsersButton.addEventListener("click", onClick);

//=====================getUserById(id)

const getUserById = (id_search) => {
  if (id_search === "") {
    return alert("Incorrect INPUT!");
  }
  const url = `https://test-users-api.herokuapp.com/users/${id_search}`;
  return fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("error: " + response.statusText);
    })

    .then((data) => data.data)
    .catch((error) => console.log(error));
};

const updateIdUsers = (data) => {
  const markupId = createUserId(data);
  // console.log(markupId);
  user_id.insertAdjacentHTML("beforeend", markupId);
};

const clickGetUserById = (event) => {
  // event.preventDefault();
  getUserById(input_form.value).then(updateIdUsers);
  input_form.value = "";
};

const createUserId = (data) => {
  let str = ` <div class="users_list_item">
  <p>id:${data.id}</p>
  <p>name:${data.name}</p>
  <p>age:${data.age}</p>
</div>`;
  return str;
};

input_search.addEventListener("click", clickGetUserById);

//==============addUser(name, age)

const addUser = () => {
  const newUser = {
    name: input_form_name.value,
    age: input_form_age.value,
  };
  if (input_form_name.value === "" || input_form_age.value === "") {
    return alert("Incorrect INPUT!");
  }
  fetch("https://test-users-api.herokuapp.com/users/", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("error: " + response.statusText);
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log("ERROR" + error));
  alert(`Users: ${input_form_name.value} added`);
};
const handlerAddUser = () => {
  addUser();

  input_form_name.value = "";
  input_form_age.value = "";
};
button_send.addEventListener("click", handlerAddUser);

//==================removeUser(id)

const removeUser = (id_remove) => {
  if (id_remove === "") {
    return alert("Incorrect INPUT!");
  }
  fetch(`https://test-users-api.herokuapp.com/users/${id_remove}`, {
    method: "DELETE",
  })
    .then(() => console.log("success"))
    .catch((error) => console.log("ERROR" + error));
  alert(`Users: ${input_form_delete.value} removed`);
};

const removeUserById = () => {
  removeUser(input_form_delete.value);
  input_form_delete.value = "";
};

button_delete.addEventListener("click", removeUserById);

//=======================updateUser(id, user)

const updateUser = (id_update) => {
  const userToUpdate = {
    name: update_form_name.value,
    age: update_form_age.value,
  };
  if (update_form_name.value === "" || update_form_name.value === "") {
    return alert("Incorrect INPUT!");
  }
  fetch(`https://test-users-api.herokuapp.com/users/${id_update}`, {
    method: "PUT",
    body: JSON.stringify(userToUpdate),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("error: " + response.statusText);
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log("ERROR" + error));
  alert(
    `User name: ${update_form_name.value} age: ${update_form_age.value} updated`
  );
};
const updateUserById = () => {
  updateUser(input_form_update.value);
  input_form_update.value = "";
  update_form_name.value = "";
  update_form_age.value = "";
};

button_update.addEventListener("click", updateUserById);
