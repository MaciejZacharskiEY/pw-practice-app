import {Page}  from '@playwright/test'
import { HelperBase } from './helperBase'

export class FormLayoutPage extends HelperBase {

    

    constructor(page: Page) {
        super(page)
        
    }

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


}