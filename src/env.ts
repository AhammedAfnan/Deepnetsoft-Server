export type Enviorment = {
    PORT: string
    MONGO_URI: string
}

export function getEnv<Key extends keyof Enviorment>(key: Key, fallback?: Enviorment[Key]): Enviorment[Key] {
    const val = process.env[key] as Enviorment[Key] | undefined
    if (val === undefined) {
        if (fallback) {
            return fallback
        }
        throw new Error(`Enviorment variable missing ${key}`)
    }
    return val
}