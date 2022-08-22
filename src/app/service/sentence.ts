export class Sentence {
    textString?: string
}

export class Response {
    status?: string
    length?: number
    data?: [{
            id: number,
            textString: string
    }]
}