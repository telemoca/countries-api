declare interface Country {
    flags: {
        png: string
        svg: string
        alt: string
    }
    name: {
        common: string
        official: string
        nativeName: Record<string, { official: string, common: string }>
    }
    tld: {
        0: string
    }
    borders: string[]
    languages: object
    currencies: object
    capital: string[]
    region: string
    subregion: string
    population: number
    cca3: string
}