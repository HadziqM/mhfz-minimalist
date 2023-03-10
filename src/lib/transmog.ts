import {PrismaClient } from "@prisma/client";
import fs from 'fs';


const prisma = new PrismaClient();
let trans  = async (did:string) => {
    const discord :any = await prisma.discord.findFirst({where:{discord_id:did},select:{char_id:true}}).catch(e=>console.log(e))
    const buf = fs.readFileSync('./misc/skin_hist.bin')
    await prisma.characters.update({where:{id:discord.char_id},data:{skin_hist:buf}})
    await prisma.$disconnect()
}
export default trans