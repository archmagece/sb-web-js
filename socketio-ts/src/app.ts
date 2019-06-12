import socketIO from "socket.io";
import express from "express";
import path from "path";
// Controllers (route handlers)
import * as http from "http";



// Create Express server
const app = express();

// Express configuration
// app.set("port", process.env.PORT || 3000);

app.use(
    express.static(path.join(__dirname, "public"), {maxAge: 31557600000})
);

/**
 * Primary app routes.
 */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../view/home.html"));
});


const server = http.createServer(app);
server.listen(3000);

const io = socketIO(server);
io.on("connection", socket => {
    socket.on("connection", (data) => {
        console.log("connection", data);
    });
    socket.emit("welcome", {message: "Welcome!", id: socket.id});
    socket.on("identify", data => {
        console.log("identify", data);
    });

    // socket.on('private_friend', )
    socket.on("event", data => {
        console.log("event", data);
    });
    socket.on("msg", data => {
        console.log("msg", data);
    });
    socket.on("disconnect", () => {
        console.log("disconnect");
    });
});

export default app;
