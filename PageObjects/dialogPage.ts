import {expect, Page}  from '@playwright/test'
import { HelperBase } from './helperBase'

export class DialogPage extends HelperBase {

    

    constructor(page: Page) {
        super(page)
        
    }

    async opendialogboxWithComponent() {

        const openDialog = this.page.locator('nb-card', {hasText: 'Open Dialog'})     

        await openDialog.getByRole('button', {name: 'Open Dialog with component'}).click[0]

       
    }

    async opendialogboxWithBackdrop() {

        const openDialog = this.page.locator('nb-card').filter({ hasText: 'Open Without Backdrop' });
          
        await openDialog.getByRole('button', {name: 'Open Dialog with backdrop'}).click()
       
    }

    async opendialogboxWithBackdropClick() {

        const openDialog = this.page.locator('nb-card', {hasText: 'Open Without Backdrop Click'})     

        await openDialog.getByRole('button', {name: 'Open Dialog with backdrop click'}).click()
       
    }

    async opendialogboxWithoutEscClose() {

        const openDialog = this.page.locator('nb-card', {hasText: 'Open Without Esc Close'})     

        await openDialog.getByRole('button', {name: 'Open Dialog with esc close'}).click()
       
    }
    
    async verifyTitleOfDialogbox() {
        
        const getHeader =  await this.page.locator('nb-card-header', {hasText: 'This is a title passed to the dialog component'}).textContent()
        expect(getHeader).toEqual('This is a title passed to the dialog component')
    }

    async verifyDescriptionOfDialogbox() {

        const getDescription = await this.page.locator('nb-card-body', {hasText: 'Lorem ipsum dolor'}).textContent()

        expect(getDescription).toContain('Suspendisse potenti')
    }

    async closeDialogbox() {              

        await this.page.getByRole('button', {name: 'Dismiss Dialog'}).click()

    }
}