import { config } from "dotenv";
config();

export const userObject = {
  name: process.env.NAME,
  github: process.env.GITHUB_USERNAME,
  email: process.env.EMAIL,
  mobile: process.env.MOBILE,
  twitter: process.env.TWITTER,
};

export const ruleObj = {
  rule: {
    field: "missions",
    condition: "gte",
    condition_value: 30,
  },
  data: {
    name: "James Holden",
    crew: "Rocinante",
    age: 34,
    position: "Captain",
    missions: 45,
  },
};
