/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AI-Content-Generator_owner:T6UEIkPBvqz5@ep-billowing-sky-a1f4caan.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
};