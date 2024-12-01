// import section
import express, { request, response } from "express";
import { readFile, writeFile, appendFile } from "fs/promises";
import path from "path";
// app section
const app = express();
const filePath = path.join("data", "userData.json");

// build-in middleware

app.use(express.json());
app.use(express.static("../data"));

// route section

//home route

app.get("/", (request, response) => {
  console.log(request.query);
  response.send("hello");
});

// routing parameter

app.get("/users/:id", async (request, response) => {
  // to get parameter specified in the routes like
  // http://localhost:3000/user/1 https://8fq5bmlw-3000.inc1.devtunnels.ms/
  let id = parseInt(request.params.id);

  // to check whether the passed parameter is a number
  if (isNaN(id)) {
    response.status(400).send("invalid user id");
  }
  // read data  from the json file
  const users = JSON.parse(
    await readFile(filePath, (error) => {
      if (error) throw error;
      console.log("sucess");
    })
  );
  // if it is a number then it search for the data in the json file
  let userName = users.find((user) => user.id == id);
  if (!userName) {
    response.status(404).send("user not found");
  } else {
    response.send(userName).status(201);
  }
});

// post request

app.post("/users/", async (request, response) => {
  // read data  from the json file
  const users = JSON.parse(
    await readFile(filePath, (error) => {
      if (error) throw error;
      console.log("sucess");
    })
  );
  // getting the data from the request body
  let newData = request.body;
  // creating a new object to store
  let newItem = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    ...newData,
  };
  // pushing the data into the array
  users.push(newItem);
  // overwriting the data in the json file
  writeFile(filePath, JSON.stringify(users), "utf8", (error) => {
    if (error) throw error;
    console.log("success");
  });
  //senting the success message to the user
  response.send(newItem).status(200);
});

// put request
app.put("/users/:id", async (request, response) => {
  /*  request object is like {
    body:{key: value},
    params:{ id : 1}
  }
   */
  //here we use nested object destructuring\

  const {
    body,
    params: { id },
  } = request;
  let userid = parseInt(id);
  // to check whether the passed parameter is a number
  if (isNaN(userid)) {
    response.status(400).send("invalid user id");
  }
  // read data  from the json file
  const users = JSON.parse(
    await readFile(filePath, (error) => {
      if (error) throw error;
      console.log("sucess");
    })
  );
  // if it is a number then it search for the data in the json file
  let userName = users.find((user) => user.id == userid);
  if (!userName) {
    response.status(404).send("user not found");
  }
  // updating the data into the array with removing unchanged data
  users[userid] = { id: userid, ...body };
  // overwriting the data in the json file
  writeFile(filePath, JSON.stringify(users), "utf8", (error) => {
    if (error) throw error;
    console.log("success");
  });

  response.send(users[userid]).status(200);
});
// patch request
app.patch("/users/:id", async (request, response) => {
  /*  request object is like {
    body:{key: value},
    params:{ id : 1}
  }
   */
  //here we use nested object destructuring\

  const {
    body,
    params: { id },
  } = request;
  let userid = parseInt(id);
  // to check whether the passed parameter is a number
  if (isNaN(userid)) {
    response.status(400).send("invalid user id");
  }
  // read data  from the json file
  const users = JSON.parse(
    await readFile(filePath, (error) => {
      if (error) throw error;
      console.log("sucess");
    })
  );
  // if it is a number then it search for the data in the json file
  let userName = users.find((user) => user.id == userid);
  if (!userName) {
    response.status(404).send("user not found");
  }
  // updating the data into the array without removing unchanged data
  users[userid] = { ...users[userid], ...body };
  // overwriting the data in the json file
  writeFile(filePath, JSON.stringify(users), "utf8", (error) => {
    if (error) throw error;
    console.log("success");
  });

  response.send(users[userid]).status(200);
});

//delete request
app.delete("/users/:id", async (request, response) => {
  /*  request object is like {
    body:{key: value},
    params:{ id : 1}
  }
   */
  //here we use nested object destructuring\

  const {
    params: { id },
  } = request;
  let userid = parseInt(id);
  // to check whether the passed parameter is a number
  if (isNaN(userid)) {
    response.status(400).send("invalid user id");
  }
  // read data  from the json file

  let users = JSON.parse(
    await readFile(filePath, (error) => {
      if (error) throw error;
      console.log("sucess");
    })
  );

  // if it is a number then it search for the data in the json file
  console.log(users, "kkk");
  if (!users) {
    response.send("user not found");
  }
  let index = users.findIndex((user) => user.id == userid);
  console.log(index);
  console.log(users);

  users.splice(index, 1);
  console.log(users);

  if (!users) {
    users = [];
  }
  // overwriting the data in the json file
  writeFile(filePath, JSON.stringify(users), "utf8", (error) => {
    if (error) throw error;
    console.log("success");
  });

  response.send("hello").status(200);
});
// server section

//  use port 3000 unless there exists a preconfigured port
const PORT = process.env.PORT || 3000;
//listening to the port for api calls
app.listen(PORT, () => {
  console.log(`the server is running on the port ${PORT}`);
});
