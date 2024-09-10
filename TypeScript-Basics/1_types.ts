const isFetching: boolean = true;
const isLoading: boolean = false

let int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TS'

const numberArray: number[] = [1,1,2,3,5,8,13];
const numberArray2: Array<number> = [1,1,2,3,5,8,13];

// Tuple
const contact: [string, number] = ['Vladilen', 123];

// Any
let variable: any = 42
variable = 'New'

// Functions
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Hi')

// Never
function throwError(message: string): never {
      throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}

// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

// Null | undefined
type SomeType = string | null | undefined
