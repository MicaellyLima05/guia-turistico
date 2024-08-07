import app from "./app.js";

const port = process.env.PORT;

//servidor escutando
app.listen(port, () => {
    console.log("Servidor escutando!");
});
