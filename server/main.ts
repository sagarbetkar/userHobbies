import app from "./index";

const PORT: string | undefined = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});