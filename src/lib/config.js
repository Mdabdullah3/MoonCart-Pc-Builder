export const apiLink =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://pc-builder-nu-azure.vercel.app";
