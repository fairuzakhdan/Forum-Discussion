import { describe, expect, it, vi } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import FormLogin from "./FormLogin";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, afterEach} from "vitest";

// skenario component test
// - harus menangani email input
// - harus menangani password input
// - harus ada event login ketika button diklik
expect.extend(matchers)
describe('Form Login',() => {
    afterEach(() => {
        cleanup()
    })
    it('should handle email typing correctly', async () => {
        // arrange
        render(<FormLogin authLogin={() => {}}/>)
        const emailInput = screen.getByLabelText("Email");

        // action
        await userEvent.type(emailInput, "emailtest@example.com");

        // assert
        expect(emailInput).toHaveValue("emailtest@example.com");
    })
    it('should handle password typing correctly', async () => {
        // arrange
        render(<FormLogin authLogin={() => {}}/>)
        const passwordInput = screen.getByLabelText('Password')

        // action
        await userEvent.type(passwordInput,'passwordtest')

        // assert
        expect(passwordInput).toHaveValue('passwordtest')
    })

    it('should call login function when login button is clicked', async () => {
        // arrange
        const mockLogin = vi.fn()
        render(<FormLogin authLogin={mockLogin}/>)
        const emailInput = screen.getByLabelText('Email')
        await userEvent.type(emailInput,'emailtest')
        const passwordInput = screen.getByLabelText('Password')
        await userEvent.type(passwordInput,'passwordtest')
        const loginButton = screen.getByRole('button', {name: 'Login'})
        
        // action
        await userEvent.click(loginButton)

        // assert
        expect(mockLogin).toBeCalledWith({
            email: 'emailtest',
            password: 'passwordtest'
        })
    })
})