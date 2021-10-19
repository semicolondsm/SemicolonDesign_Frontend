import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import packageJSON from "./package.json";

const globals = {
    react: "React",
    "react-dom": "ReactDOM",
    "@emotion/styled": "styled",
};
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "@emotion/styled"];

export function makeRollupConfig(packageJSON, options = {}) {
    return {
        input: "src/index.ts",
        output: [
            {
                sourcemap: true,
                file: `dist/index.cjs.js`,
                format: "cjs",
            },
            {
                sourcemap: true,
                file: `dist/index.es.js`,
                format: "esm",
            },
            {
                sourcemap: true,
                file: packageJSON.main,
                format: "umd",
                name: "semicolondsmUi",
                globals,
            },
        ],
        external,
        plugins: [
            resolve({ extensions }),
            peerDepsExternal(),
            json(),
            typescript({ tsconfig: "./tsconfig.lib.json", clean: true }),
            commonjs(),
        ],
        ...options,
    };
}

export default makeRollupConfig(packageJSON);
