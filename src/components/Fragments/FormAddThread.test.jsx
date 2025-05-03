import { describe, expect, it, afterEach, vi } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import userEvent from "@testing-library/user-event";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import FormAddThread from "./FormAddThread";

// skenario component test
// - harus ada event add thread ketika button diklik

expect.extend(matchers)
describe('card thread',() => {
    afterEach(() => {
        cleanup()
    })
    it('should return content component card', async () => {
        // arrange
        const mockAddThread = vi.fn()
        render(<FormAddThread addThread={mockAddThread}/>)
        const titleInput = await screen.getByPlaceholderText('Masukan judul thread')
        const categoryInput = await screen.getByPlaceholderText('Masukan category thread')
        const bodyInput = await screen.getByTestId('input-comment')
        const addThreadButton = await screen.getByRole('button', {name: 'Buat'})
        await userEvent.type(titleInput,'titleTest')
        await userEvent.type(categoryInput,'categoryTest')

        fireEvent.input(bodyInput, {
            target: { innerText: 'bodyTest' }
          });

        // action
        await userEvent.click(addThreadButton)

        // assert 
        expect(mockAddThread).toBeCalledWith({
            title: 'titleTest',
            category: 'categoryTest',
            body: 'bodyTest'
        })
    })
})