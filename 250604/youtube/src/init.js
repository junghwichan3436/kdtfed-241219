import "./db";
import "./models/video";
import app from "./server";

const port = 4000;

const handleListening = () => {
  console.log(`✅Server Listening On Port http://localhost:${port}🎃`);
};
app.listen(port, handleListening);
