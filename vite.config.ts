import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
