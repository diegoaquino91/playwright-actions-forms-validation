import { test } from '@playwright/test'
import { FormsPage } from './support/pages/forms'
import data from './fixtures/forms.json'
import { FormsModel } from './fixtures/forms.model'

let formsPage: FormsPage

test.beforeEach(({ page })=> {
    formsPage = new FormsPage(page)
})

test.describe('cadastro forms', () => {
    test('deve preencher o cadastro com sucesso', async () => {
        const forms = data.successSubmit as FormsModel

        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário com sucesso
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de submit com sucesso
        await formsPage.checkSuccessMsg('Successfully submitted!')

    })

    test('validar cadastro sem preencher o campo Primeiro Nome', async () => {
        const forms = data.firstNameRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Primeiro Nome
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('firstName')
    })

    test('validar cadastro sem preencher o campo Ultimo Nome', async () => {
        const forms = data.lastNameRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Ultimo Nome
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('lastName')
    })

    test('validar cadastro sem selecionar o campo Genero', async () => {
        const forms = data.genderRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem selecionar o campo Genero
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('gender')
    })

    test('validar cadastro sem preencher o campo Data de Nascimento', async () => {
        const forms = data.dobRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Data de Nascimento
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('dateBirth')
    })

    test('validar cadastro sem preencher o campo Endereco', async () => {
        const forms = data.addressRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Endereco
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('address')
    })

    test('validar cadastro sem preencher o campo Email', async () => {
        const forms = data.emailRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Email
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('email')
    })

    test('validar cadastro sem preencher o campo Senha', async () => {
        const forms = data.passwordRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Senha
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('password')
    })

    test('validar cadastro sem preencher o campo Empresa', async () => {
        const forms = data.companyRequired as FormsModel
        // Dado que estou na pagina do forms
        await formsPage.go()

        // Quando preencho o formulário sem informar o campo Empresa
        await formsPage.fillFirstName(forms.firstName)
        await formsPage.fillLastName(forms.lastName)
        await formsPage.selectGender(forms.gender)
        await formsPage.selectDate(forms.dateBirth.day, forms.dateBirth.monthYear)
        await formsPage.fillAddress(forms.address)
        await formsPage.fillEmail(forms.email)
        await formsPage.fillPassword(forms.password)
        await formsPage.fillCompany(forms.company)
        await formsPage.selectRole(forms.role)
        await formsPage.fillExpectation(forms.jobExpec)
        await formsPage.selectWaysOfDev(forms.waysOfDev)
        await formsPage.fillComment(forms.comment)

        // E clico no botao submit
        await formsPage.clickBtnSubmit()

        // Então valido a mensagem de erro
        await formsPage.checkErrorMsg('company')
    })

})
