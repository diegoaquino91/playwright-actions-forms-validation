import { Page, expect } from "@playwright/test"
import moment from 'moment'


export class FormsPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async go() {
        await this.page.goto('/aut/html/form.html')
        await expect(this.page).toHaveTitle('Demo AUT')
    }

    async fillFirstName(first_name: string) {
        await this.page.fill('#first-name', first_name)
    }
    
    async fillLastName(last_name: string) {
        await this.page.fill('#last-name', last_name)
    }
    
    async selectGender(gender: string) {
        await this.page.check(`//label[@class='radio-inline'][text()='${gender}']`)
        await expect(await this.page.locator(`//label[@class='radio-inline'][text()='${gender}']`).isChecked()).toBeTruthy();
    }
    
    async selectDate(date: number, dateToSelect: string) {
        await this.page.click('#dob')
        const mmYY = this.page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
        const prev = this.page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
        const next = this.page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")
    
    
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore()
    
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click()
            } else {
                await next.click()
            }
        }
    
        await this.page.click(`//td[@class='day'][text()='${date}']`)
    }
    
    async fillAddress(address: string) {
        await this.page.fill('#address', address)
    }
    
    async fillEmail(email: string) {
        await this.page.fill('#email', email)
    }
    
    async fillPassword(password: string) {
        await this.page.fill('#password', password)
    }
    
    async fillCompany(company: string) {
        await this.page.fill('#company', company)
    }
    
    async selectRole(role: string) {
        await this.page.locator('#role').selectOption(role)
    }
    
    async fillExpectation(expectation: string) {
        await this.page.locator('#expectation').selectOption(expectation)
    }
    
    async selectWaysOfDev(developments: string[]) {
        for (const development of developments) {
            await this.page.getByLabel(development).check()
        }
    }
    
    async fillComment(comment: string) {
        await this.page.fill('#comment', comment)
    }
    
    async clickBtnSubmit() {
        await this.page.click('#submit')
    }
    
    async checkSuccessMsg(msg: string) {
        const submitMsg = this.page.locator("#submit-msg")
        await expect(submitMsg).toHaveText(msg)
        await this.page.waitForTimeout(5000)
    }
    
    async checkErrorMsg(field: string) {
        let elementError: string | undefined
        const msg = 'This field is required.'
        switch (field) {
            case 'firstName':
                elementError = '#first-name-error'
                break;
            case 'lastName':
                elementError = '#last-name-error'
                break;
            case 'gender':
                elementError = '#gender-error'
                break;
            case 'dateBirth':
                elementError = '#dob-error'
                break;
            case 'address':
                elementError = '#address-error'
                break;
            case 'email':
                elementError = '#email-error'
                break;
            case 'password':
                elementError = '#password-error'
                break;
            case 'company':
                elementError = '#company-error'
                break;
            default:
                console.log("Informe um campo válido!!!");
                return; // Retorna para evitar a execução do código abaixo
        }
    
        if (elementError) {
            const element = await this.page.$(elementError);
            if (element) {
                const elementText = await element.innerText();
                expect(elementText).toBe(msg);
            } else {
                console.log(`Elemento não encontrado para o campo "${field}"`);
            }
        } else {
            console.log(`Mensagem de erro não encontrada para o campo "${field}"`);
        }
        await this.page.waitForTimeout(5000)
    }
}
