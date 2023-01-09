##The Minimalist MHFZ bot Requested by Broguy47#6586

before that i m sorry i dont have time to rebuilt bot</br>
also i cant test the bot since i dont have time to make server </br>
this simply done by removing unnecessary file on former bot</br>

### My working Environtment
- Os : Linux Mint 21.1 Vera
- Node : v19.2.0
- Pnpm : v7.23.0

i will add more test on github action on later commit

### Step Before Install

1 . run query/discord.sql on postgress query </br>
that file isnt the old bot file, but i edited it to match this config</br>
2. edit .env.example and rename it to .env </br>
3. get prisma client
```bash
pnpm prisma generate
```
4. run the bot </br>

built then start the bot
```bash
pnpm built
pnpm start
```
this command bellow is same as both command
```bash
pnpm restart
```

## Side Notes
- This bot retain all command beside bounty and gacha from rain server also *on join* event since they use image processing
- this only tested once for sake of make it working, but no further test
- newbie command might not work except the bot is on rain server
