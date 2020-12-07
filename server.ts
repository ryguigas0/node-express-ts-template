import express, { json, Response, Request } from "express"

const app = express()

app
    .use(json())
    .get("/", (req: Request, res: Response) => {
        return res.json({
            message: "Hello express with typescript!"
        })
    })
    .listen(3333, () => {
        console.log("http://localhost:3333/")
    })