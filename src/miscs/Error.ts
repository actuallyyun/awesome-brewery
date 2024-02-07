export class ApiError extends Error {
  constructor(readonly statusCode: number, readonly message: string) {
    super()
  }
}

export class NetworkError extends Error {
  readonly statusCode: number
  readonly message: string
  constructor() {
    super()
    this.statusCode = 500
    this.message =
      'Oops,something went wrong with the network.Please try again later.'
  }
}
