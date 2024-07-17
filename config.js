const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_18_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNWlvWXgwU0EvT25qNzJYYjJEYUxUY0Z0cUlmU1FldXpDOU9SdHJVQStIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMHFLbW9fNmdTbjZtdXRlZ1BnT3FnZ1wiLFxuICBcInBob25lSWRcIjogXCIxZDUwODBjNy0xMTczLTQ1NTQtYjIzMy01ZWJmOGNiZGQ5NDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTAwLFxuICAgICAgMTUzLFxuICAgICAgMTQ0LFxuICAgICAgOTIsXG4gICAgICAyMzgsXG4gICAgICA4NyxcbiAgICAgIDIwOCxcbiAgICAgIDc5LFxuICAgICAgOTYsXG4gICAgICAxNTcsXG4gICAgICAxOTQsXG4gICAgICAyNDMsXG4gICAgICA1NyxcbiAgICAgIDI2LFxuICAgICAgMjUwLFxuICAgICAgOCxcbiAgICAgIDEwNixcbiAgICAgIDE4NSxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMzksXG4gICAgICAxNixcbiAgICAgIDE5OCxcbiAgICAgIDIwNyxcbiAgICAgIDEzMixcbiAgICAgIDcxLFxuICAgICAgMzYsXG4gICAgICAyMTQsXG4gICAgICAxODYsXG4gICAgICA3MyxcbiAgICAgIDIwMyxcbiAgICAgIDYzLFxuICAgICAgOTIsXG4gICAgICAyMCxcbiAgICAgIDE0OCxcbiAgICAgIDEyNyxcbiAgICAgIDEyNCxcbiAgICAgIDU5LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lRenBNRUVQdTAzclFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVNWwwLzYxU0xNcThXMGpJN2JXNG1oU3FFSVJOU0ZXSmxWcGU5UUdVNmcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkYrZEZNOVljV1o1c2lBcGdIVmtybk9GZHdUSHFxdGhqbjB4OGtvLy8vK0pxL2Z0ampMcWIzQU1BNEVGNlNpZzlQbVFkc3JtckdvVVhjYlpNM1J6WkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllWQjJZMDA1UG5ZSHZINkw5ak9ZSUxUZENDVm5LckRCSmpoL1c3WVBwYWdlbWpPWDZERUlHTzd3MDNvbTg1VldYMnl5ME1CTEJaS2pDWTE5RU82RmlBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU4NDA2OTEzOjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzc5NDUwNzUyODYwNTM6OTZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTg0MDY5MTM6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTE1MjJcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
