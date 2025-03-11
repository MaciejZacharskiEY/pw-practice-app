import {expect, Page}  from '@playwright/test'
import { HelperBase } from './helperBase'

export class DatepickerPage extends HelperBase {

    

    constructor(page: Page) {
        super(page)
        
    }

    async selectDatepickerWithCommonDateFromToday(daysFromtoday: number) {

        const calendarInputField = this.page.getByPlaceholder('Form Picker')
        await calendarInputField.click()
        const expectedDateToAssert = await this.selectDateInCalendar(daysFromtoday)
    
        await expect(calendarInputField).toHaveValue(expectedDateToAssert)
    }



    async selectDatepickerWithDatesDisabled(daysFromtoday: number) {

        const calendarInputField = this.page.getByPlaceholder('Min Max Picker')
        await calendarInputField.click()
        const expectedDateToAssert = await this.selectDateInWithoutMinMax(daysFromtoday)
        if(daysFromtoday >= -5 && daysFromtoday <= 5) {
            await expect(calendarInputField).toHaveValue(expectedDateToAssert)
        } else
        console.log('Invalid value provided')
        
    }

    async selectDatepickerWithRangeFromToday(startDaysFromtoday: number, endDaysFromToday: number) {

        const rangepickerInputField = this.page.getByPlaceholder('Range Picker')
        await rangepickerInputField.click()
        const expectedDateToAssertStart = await this.selectDateInCalendar(startDaysFromtoday)
        const expectedDateToAssertEnd = await this.selectDateInCalendar(endDaysFromToday)
        const expectedDateToAssert = `${expectedDateToAssertStart} - ${expectedDateToAssertEnd}`
    
        await expect(rangepickerInputField).toHaveValue(expectedDateToAssert)
    }


    private async selectDateInCalendar(daysFromtoday: number) {
        let date = new Date()
    date.setDate(date.getDate() + daysFromtoday)
    const expectedDate = date.getDate().toString()
    const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'})
    const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
    const expectedYear = date.getFullYear()
    const expectedDateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

    
    let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
while(!calendarMonthAndYear.includes(expectedMonthAndYear)) {
    await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
    calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
}
    await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click()
    return expectedDateToAssert
    
}
private async selectDateInWithoutMinMax(number: number) {
    let date = new Date()
    
date.setDate(date.getDate() + number)
if (number < -5 || number > 5) {
    console.log("Please enter a value between -5 and 5.");
    return; // Exit the function without doing anything further
} else
// If the value is valid, you can proceed with your logic
console.log("Valid number:", number);

const expectedDate = date.getDate().toString()
const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'})
const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
const expectedYear = date.getFullYear()
const expectedDateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`


let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
while(!calendarMonthAndYear.includes(expectedMonthAndYear)) {
await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
}
await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click()
return expectedDateToAssert

}

}
