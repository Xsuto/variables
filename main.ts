const username: string = "jan"
const age: number = 17
const isMature: boolean = true

type lang = 'js' | 'ts' | 'python'

type rect = [number,number,number]

const os: Array<string> = ['windows','macos','ubuntu']

interface userInterface {
    username: string,
    age: number,
    isMature: boolean,
    lang?: lang
}

const user: userInterface = {
    username,
    age,
    isMature,
    lang: "ts"
}

function sayAge(age: number, username: string): string {
    return `${username} is ${age} years old`
}

const ID = new Set()
ID.add(1)
ID.add(1)
