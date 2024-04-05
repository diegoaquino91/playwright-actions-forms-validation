
export interface FormsModel {
    firstName: string
    lastName: string
    gender: string
    dateBirth: {
        day: number
        monthYear: string
    }
    address: string
    email: string
    password: string
    company: string
    role: string
    jobExpec: string
    waysOfDev: string[]
    comment: string
}