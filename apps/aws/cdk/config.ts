import path = require("path");

export class Config {
    static get envName(): string {
        return Config.fromEnvOrThrow('ENVIRONMENT')
    }

    static get appName(): string {
        return `skillsync-${Config.envName}`;
    }

    static get webBuildPath(): string {
        return path.join(__dirname, '../../web/build');
    }

    private static fromEnvOrThrow(name: string): string {
        const value = process.env[name]
        if (!value) {
            throw new Error(`Missing required environment variable: ${name}`)
        }
        return value
    }
}
