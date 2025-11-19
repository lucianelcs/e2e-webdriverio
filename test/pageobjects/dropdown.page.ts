import Page from './page';

class DropdownPage extends Page {
    // URL da página
    public async open () : Promise<void>{
         await super.open('dropdown');
    }

    // Elementos
    public get selectBox() {
        return $("#dropdown");
    }

    public get option1() {
        return $('//option[text()="Option 1"]');
    }

    public get option2() {
        return $('//option[text()="Option 2"]');
    }

    // Ações
    public async selectByVisibleText(text: string): Promise<void> {
        await this.selectBox.selectByVisibleText(text);
    }

    public async getSelectedOptionText(): Promise<string> {
        const selected = await this.selectBox.$("option:checked");
        return selected.getText();
    }
}

export default new DropdownPage();