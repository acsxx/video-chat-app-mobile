const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {
	

    
    
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));