import app from "./app.js";

const port = process.env.PORT || 4000;

//servidor escutando
app.listen(port, () => {
    console.log("Servidor escutando!");
});
