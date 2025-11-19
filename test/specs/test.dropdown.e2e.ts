import { expect } from '@wdio/globals'
import DropdownPage from '../pageobjects/dropdown.page'

    describe("Dropdown page tests", () => {
        before(async () => {
            await browser.maximizeWindow();
        });

        it("should open the dropdown page", async () => {
            await DropdownPage.open();        
        });

        it("should select Option 1 and verify it is selected", async () => {
            await DropdownPage.selectByVisibleText("Option 1");
            const selected = await DropdownPage.getSelectedOptionText();
            await expect(selected).toBe("Option 1");
        });

        it("should select Option 2 and verify it is selected", async () => {
            await DropdownPage.selectByVisibleText("Option 2");
            const selected = await DropdownPage.getSelectedOptionText();
            await expect(selected).toBe("Option 2");
        });
    });
