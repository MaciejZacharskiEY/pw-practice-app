import {Page}  from '@playwright/test'
import { HelperBase } from './helperBase'

export class NavigationPage extends HelperBase {

    
   

    constructor(page: Page) {
        super(page)
        
    }

    

    async formLayoutsPage() {
        this.SelectGroupMenuItem('Forms')      
        await this.page.getByText('Form Layouts').click()
        await this.waitForNumberOfSeconds(3)
    }

    async datepikerPage() {
        this.SelectGroupMenuItem('Forms')  
        await this.page.getByText('Datepicker').click()
    }


    async tooltipPage() {
        this.SelectGroupMenuItem('Modal & Overlays')  
        await this.page.getByText('Tooltip').click()
    }


    async toastrPage() {
        this.SelectGroupMenuItem('Modal & Overlays')  
        await this.page.getByText('Toastr').click()
    }

    async smartTablePage() {
        this.SelectGroupMenuItem('Tables & Data')  
        await this.page.getByText('Smart Table').click()
    }
    
    private async SelectGroupMenuItem(groupItemTitle: string) {

        const groupItemMenu = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupItemMenu.getAttribute('aria-expanded')
        if(expandedState == "false") {
            await groupItemMenu.click()
        } 
    }
}