import {expect, Page}  from '@playwright/test'
import {NavigationPage} from '../PageObjects/navigationPage'
import {FormLayoutPage} from '../PageObjects/formLayoutPage'
import {DatepickerPage} from '../PageObjects/datepickerPage'
import {DialogPage} from './dialogPage'

export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayout: FormLayoutPage
    private readonly datepicker: DatepickerPage
    private readonly dialog: DialogPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(page)
        this.formLayout = new FormLayoutPage(page)
        this.datepicker = new DatepickerPage(page)
        this.dialog = new DialogPage(page)        
    }
    navigateTo() {
        return this.navigationPage
    }
    onFormLayoutPage() {
        return this.formLayout
    }
    onDatepickerPage() {
        return this.datepicker
    }
    onDialogPage() {
        return this.dialog
    }

    

}