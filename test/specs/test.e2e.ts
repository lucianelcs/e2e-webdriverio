import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import UserPage from '../pageobjects/user.page.js'

describe('Login page tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith1', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })

    it('should login with invalid username', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith1', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })

    it('should login with invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPasswor')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })

    it('should login with username empty', async () => {
        await LoginPage.open()

        await LoginPage.login('', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })

    it('should login with password empty', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', '')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })
})

describe('Logout page tests', () => {
    it('should logout secure area', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining('You logged into a secure area!'))

        await UserPage.logout()
         await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining('You logged out of the secure area!'))
    })

    it('should login with password empty', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining('You logged into a secure area!'))

        await UserPage.logout()
         await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
        expect.stringContaining('You logged out of the secure area!'))
    })

})

