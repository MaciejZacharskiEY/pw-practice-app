import {Page}  from '@playwright/test'
import { HelperBase } from './helperBase'

export class FormLayoutPage extends HelperBase {

    

    constructor(page: Page) {
        super(page)
        
    }


    /**
     * Method for filling out Using the Grid form and submitting it
     * @param email - valid email for user
     * @param password - valid password for user
     * @param optionText - text of option we wanna select
     */
    async submitTheFormUsingTheGridWithSelectOption(email: string, password: string, optionText: string) {

        const usingTheGridForm = this.page.locator('nb-card', {hasText: 'Using the Grid'})       

        await usingTheGridForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: 'Password'}).fill(password)
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
        await usingTheGridForm.getByRole('button').click()
    }


    /**
     * Method for filling out Basic form and submitting it
     * @param email - valid email for user
     * @param password - valid password for user
     * @param checkMeOut - true or false to check out the user
     */
    async submitTheFormBasicWithCheckbox(email: string, password: string, checkMeOut: boolean) {

        const basicForm = this.page.locator('nb-card', {hasText: 'Basic form'})       

        await basicForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await basicForm.getByRole('textbox', {name: 'Password'}).fill(password)
        if(checkMeOut) {
            await basicForm.getByRole('checkbox').check({force: true})
        }
        
        await basicForm.getByRole('button').click()
    }


    /**
     * Method for filling out Basic form and submitting it
     * @param email - valid email for user
     * @param password - valid password for user
     * @param rememberMe - true or false to remember the user login
     */
    async submitTheInlineFormWithCheckbox(email: string, password: string, rememberMe: boolean) {

        const basicForm = this.page.locator('nb-card', {hasText: 'Inline form'})       

        await basicForm.getByRole('textbox', {name: 'Jane Doe'}).fill(email)
        await basicForm.getByRole('textbox', {name: 'Email'}).fill(password)
        if(rememberMe) {
            await basicForm.getByRole('checkbox').check({force: true})
        }
        await this.page.screenshot({path: 'screenshots/InLineFormFilled.png'})
        await basicForm.getByRole('button').click()
    }


    /**
     * Method for filling out Basic form and submitting it
     * @param firstName - valid first Name for user
     * @param lastName - valid last Name for user
     * @param email - valid email for user
     * @param website - valid website for user
     */
    async submitBlockForm(firstName: string, lastName: string, email: string, website: string) {

        const blockForm = this.page.locator('nb-card', {hasText: 'Block form'})       

        await blockForm.getByRole('textbox', {name: 'First Name'}).fill(firstName)
        await blockForm.getByRole('textbox', {name: 'Last Name'}).fill(lastName)
        await blockForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await blockForm.getByRole('textbox', {name: 'Website'}).fill(website)
        
        await this.page.screenshot({path: 'screenshots/blockFormFilled.png'})
        await blockForm.getByRole('button').click()
    }


    /**
     * Method for filling out Basic form and submitting it
     * @param recipients - valid group of users to send message
     * @param subject - valid subject of message
     * @param message - message content
     */
    async submitFormWithoutLabels(recipients: string, subject: string, message: string) {

        const formWithoutLabels = this.page.locator('nb-card', {hasText: 'Form without labels'})       

        await formWithoutLabels.getByRole('textbox', {name: 'Recipients'}).fill(recipients)
        await formWithoutLabels.getByRole('textbox', {name: 'Subject'}).fill(subject)
        await formWithoutLabels.getByPlaceholder('Message').fill(message)
        
        await this.page.screenshot({path: 'screenshots/formWithoutLabelsFilled.png'})
        await formWithoutLabels.getByRole('button', {name: 'Send'}).click()
    }

     /**
     * Method for filling out Basic form and submitting it
     * @param email - valid email for user
     * @param password - valid password for user
     * @param rememberMe - checkbox to remember the user
     */
     async submitHorizontalForm(email: string, password: string, rememberMe: boolean) {

        const horizontalForm = this.page.locator('nb-card', {hasText: 'Horizontal form'})       

        await horizontalForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await horizontalForm.getByRole('textbox', {name: 'Password'}).fill(password)
        if(rememberMe) {
            await horizontalForm.getByRole('checkbox').check({force: true})
        }
        await this.page.screenshot({path: 'screenshots/InLineFormFilled.png'})
        await horizontalForm.getByRole('button').click()
    }


}