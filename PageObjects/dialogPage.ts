import {expect, Page}  from '@playwright/test'
import { HelperBase } from './helperBase'

export class DialogPage extends HelperBase {

    

    constructor(page: Page) {
        super(page)
        
    }

    async opendialogboxWithComponent() {

        const openDialog = this.page.locator('nb-card', {hasText: 'Open Dialog'})     

        await openDialog.getByRole('button', {name: 'Open Dialog with component'}).click()

       
    }
    
    async verifyTitleOfDialogboxWithComponent() {
        
        const getHeader =  await this.page.locator('nb-card-header', {hasText: 'This is a title passed to the dialog component'}).textContent()
        expect(getHeader).toEqual('This is a title passed to the dialog component')
    }

    async verifyDescriptionOfDialogboxWithComponent() {

        const getDescription = await this.page.locator('nb-card-body', {hasText: 'Lorem ipsum dolor'}).textContent()

        expect(getDescription).toContain('Suspendisse potenti')
    }

    async closeDialogboxWithComponent() {              

        await this.page.getByRole('button', {name: 'Dismiss Dialog'}).click()

    }
}