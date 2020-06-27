const server = require("server");
const { post } = server.router;

server(
  { security: { csrf: false } },
  post("/", (ctx) => {
    // The data type
    console.log("Data Type:", ctx.data.datatype);

    // Here is your file, "picture" as in name="picture" in the form:
    console.log("File Path:", ctx.files.data.path);

    return ctx.files.data;
  })
);
