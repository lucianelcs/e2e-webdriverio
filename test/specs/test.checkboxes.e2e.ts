import { expect } from '@wdio/globals'
import CheckboxesPage from '../pageobjects/checkbox.page'

describe('Checkboxes Page Tests', () => {
  before(async () => {
    await CheckboxesPage.open();
  });

  it('should validate if second checkbox is checked', async () => {
    const index = 1;
    if (await CheckboxesPage.isCheckboxSelected(index)) {
      expect(await CheckboxesPage.isCheckboxSelected(index)).toBe(true);
    }
  });

  it('should shown 2 checkboxes on the page', async () => {
    const boxes = await CheckboxesPage.checkboxes;
    expect(boxes.length).toBeElementsArrayOfSize(2);
  }); 

  it('should checked and unchecked the first checkbox', async () => {
    const index = 0;

    // Garante que começa desmarcado
    if (await CheckboxesPage.isCheckboxSelected(index)) {
      await CheckboxesPage.selectCheckbox(index);
    }
    expect(await CheckboxesPage.isCheckboxSelected(index)).toBe(false);

    // checked
    await CheckboxesPage.selectCheckbox(index);
    expect(await CheckboxesPage.isCheckboxSelected(index)).toBe(true);

    // unchecked
    await CheckboxesPage.selectCheckbox(index);
    expect(await CheckboxesPage.isCheckboxSelected(index)).toBe(false);
  });
  
});
