import dotenv from "dotenv";

dotenv.config();

export const API_TOKEN = process.env.CLOUDFLARE_API_KEY;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  ? process.env.ALLOWLIST_URLS.split("\n")
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n")
  : undefined;

export const RECOMMENDED_ALLOWLIST_URLS = [
  "https://raw.githubusercontent.com/nextdns/click-tracking-domains/main/domains"
];

export const RECOMMENDED_BLOCKLIST_URLS = [
  "https://adaway.org/hosts.txt",
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
  "https://v.firebog.net/hosts/AdguardDNS.txt",
  "https://v.firebog.net/hosts/Easylist.txt",
  "https://v.firebog.net/hosts/static/w3kbl.txt",
  "https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hosts-VN"
];
