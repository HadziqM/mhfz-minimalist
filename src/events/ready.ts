import { ActivityType, Client } from "discord.js";
import { BotEvent } from "../types";
import { color } from "../functions";

const event : BotEvent = {
    name: "ready",
    once:true,
    execute: (client : Client) => {
        console.log(
            color("text", `💪 Logged in as ${color("variable", client.user?.tag)}`)
        )
        client.user?.setPresence({activities:[{name:"Elzelion's Dethrone",type:ActivityType.Watching}]})
    }
}

export default event;