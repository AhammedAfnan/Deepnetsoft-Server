export function getEnv(key, fallback) {
    const val = process.env[key];
    if (val === undefined) {
        if (fallback) {
            return fallback;
        }
        throw new Error(`Enviorment variable missing ${key}`);
    }
    return val;
}
