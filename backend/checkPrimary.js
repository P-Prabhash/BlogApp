const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const hosts = [
    "ac-pqokavj-shard-00-00.mphjelr.mongodb.net",
    "ac-pqokavj-shard-00-01.mphjelr.mongodb.net",
    "ac-pqokavj-shard-00-02.mphjelr.mongodb.net"
];

async function checkServer(host) {
    console.log(`\nChecking ${host}...`);

    try {
        let uri = process.env.MONGO_URI;

        // Replace the server list with only the server we are testing
        uri = uri.replace(
            /@[^/]+/,
            `@${host}:27017`
        );

        // Remove replicaSet option
        uri = uri.replace(/([?&])replicaSet=[^&]+&?/, "$1");

        // Add direct connection
        if (uri.includes("?")) {
            uri += "&directConnection=true";
        } else {
            uri += "?directConnection=true";
        }

        const connection = await mongoose.createConnection(uri, {
            serverSelectionTimeoutMS: 5000
        }).asPromise();

        const result = await connection.db.admin().command({
            hello: 1
        });

        console.log("Connected: YES");
        console.log("Writable Primary:", result.isWritablePrimary);
        console.log("Primary:", result.primary || "This server is primary");

        await connection.close();

    } catch (error) {
        console.log("Connected: NO");
        console.log("Error:", error.message);
    }
}

async function main() {
    for (const host of hosts) {
        await checkServer(host);
    }
}

main();