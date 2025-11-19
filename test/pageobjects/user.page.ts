import { $ } from '@wdio/globals'
import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get linkLogout () {
        return $('a[href="/logout"]');
    }  

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async logout () {        
        await this.linkLogout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new UserPage();
