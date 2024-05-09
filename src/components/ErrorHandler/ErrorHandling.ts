export default function ErrorHandling(error: unknown) {
    const { response }: any = error
    const { message, status }: any = response.data
    console.table(message, status)
}

