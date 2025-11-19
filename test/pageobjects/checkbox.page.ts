import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    public get checkboxes() {
        return $$('form#checkboxes input[type="checkbox"]');
    }


    // Seleciona (toggle) um checkbox pelo índice (0 ou 1)
    async selectCheckbox(index: number): Promise<void> {
        const boxes = this.checkboxes; // sem await aqui

        // Segurança: ver quantos elementos temos
        if (!boxes || await boxes.length === 0) {
        throw new Error('Nenhum checkbox encontrado na página.');
        }

        const box = boxes[index];
        if (!box) {
        throw new Error(`Checkbox de índice ${index} não encontrado. Total: ${boxes.length}`);
        }

        await box.scrollIntoView();
        await box.waitForDisplayed({ timeout: 3000 });
        await box.click();

        // opcional: aguarda até que o estado do checkbox realmente mude (robustez)
        await browser.waitUntil(
        async () => {
            const selected = await box.isSelected();
            return typeof selected === 'boolean'; // simplesmente assegura que isSelected resolve
        },
        { timeout: 2000, timeoutMsg: 'box.isSelected() não respondeu corretamente após click' }
        );
    }

    async isCheckboxSelected(index: number): Promise<boolean> {
        const boxes = await this.checkboxes; // sem await
        if (!boxes || await boxes.length === 0) {
        throw new Error('Nenhum checkbox encontrado na página.');
        }
        const box = boxes[index];
        if (!box) {
        throw new Error(`Checkbox de índice ${index} não encontrado. Total: ${boxes.length}`);
        }

        await box.waitForExist({ timeout: 3000 });
        return box.isSelected();
    }
     /**
     * overwrite specific options to adapt it to page object
     */
    public async open () : Promise<void>{
         await super.open('checkboxes');
    }
}


export default new CheckboxPage();
