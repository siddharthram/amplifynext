import  Amplify  from "aws-amplify";
import  './aws-exports';
import config from "./aws-exports";
console.log("configuring Amplify..")
Amplify.configure(config);
