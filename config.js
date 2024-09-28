//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2349042566473";
global.owner = process.env.OWNER_NUMBER || "2349042566473";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFHOVg1UW9EekRBVk9UWHpJQkZ2SlJ4WitSSTNFUTk4ZXZqSmNaWktWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTI4Z1lHTitIK0ppbDEzZzZreU5NZitQVkN6aEMxd3hPcFpyY1p3T1Qwdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQWdPZ3NSMGtlWDhHN0xmQ0FQSzZnbTZkR3hxUlV1NVJweXdXS3RUeFhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUHNGbzQyWHc0QlhVNGd3bndEazFyeXdSM2UwMG1PMUVvUWEzSlVScmw0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIU2FtemZwTUVWeHpiVnFoZ1lTSmRKVWNBUyswYlhycHFjOXQwdHRMR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJSL0tSL1ZPMUYycVpFVm83SmtBR2pSRjFPVmkzbzRrVm96YkZUSE1GQ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJhbm1GM0dkdlUycVJoVWVzQWdJVVY2c3NiWDRncUNySEkxQnhVZ0kwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZkMXlUUjM5dStGRlRtU2l3QmJKOHprQ2prb243ZnlKaXorekJEYm96OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJibGdSb2FRTnpLMVpkZDRxUnQva0dvKzhOYkVaM1RqcmhTalllNDZKV3ZFdUh1c0NOZ2lYc3lrM3ZMZTNaZHF4SUFRd3RMRDMweTJ5czBrRWhUcWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6Im9VcGVzTmVyeEwzUkVNazdieWVNcDdndEV4RTdCR0FKYmtMT09zL2pqM009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0OTYwMjI5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRUMzNTgwNkQ1MTUzOEY1OEQ1MTE3Qjc5QjFCNjhEOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NTQ3OTk4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDQ5NjAyMjk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZERTg4MDA4NTk4ODgyREUxOTE0QjJFMTJENzBDOTU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc1NDc5OTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlM4ZzNXVHhYVC1HTG9TRFY0LWttWXciLCJwaG9uZUlkIjoiOWMyZGRlZDktYzdjMy00N2NiLWE4MWEtNjhlNzAzOWFhZThiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJrV2w5RERKTkNtZHBJZVg5NXBqZDRTajJkMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqU2xDQkIvdmQrLzJLcUhOMVlUYU5jUkdmaVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkJFUlBaVEgiLCJtZSI6eyJpZCI6IjIzNDcwNDk2MDIyOTk6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kvQnZ0Y0NFTStVNGJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjcwalRnRE9mbHdvSFZCajRUaUxNczV6dFN2S2ZXb2JyY0xQY0RwQ3dzVGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVUcDZLVEFYdFFTMVFPaVBldTdRVXYxc29IMGdFV1RjbUg5Q1Y3ajlQRDEvTkpURDVJZU1BQWYvcXAyUDl0YkR1cXdTQzVDU1FGc2lIbVZheFE1K0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2ZG5wa2pBdnBVdzhYcHhPZEQ2YTQ5VEtYcFhIVGZnaW5EYmFvTzFUWElaTGN5ZHhFM0pYZThUR3pRRzMrQ3RYVVZQV3lHenBpV3I0UGZBY1RlSzdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDk2MDIyOTk6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTlJMDRBem41Y0tCMVFZK0U0aXpMT2M3VXJ5bjFxRzYzQ3ozQTZRc0xFNSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzU0Nzk5NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHKzkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
