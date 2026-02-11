import express from 'express';
import {PORT} from "../config/env.js";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/messages.route.js";

const app = express()

app.use(express.json())

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}:`));

