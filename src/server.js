import { app } from "./app";

try {
    app.listen("3000", () => console.log(`\nSPIDER is UP and LISTENING port 3000, AWAITING ORDERS.\n`));
} catch(e){
    console.log("An error ocurred in spider setup. Spider WAS NOT STARTED. Error message: " + e.message);
    console.log(e);
}