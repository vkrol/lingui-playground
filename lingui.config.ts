import type {LinguiConfig} from "@lingui/conf"

const config: LinguiConfig = {
    locales: ["en", "cs", "fr"],
    catalogs: [{
        path: "src/locales/{locale}",
        include: ["src"]
    }]
}

export default config;
