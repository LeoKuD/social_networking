import React from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import { getByLabelText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('ProfileStatsuWithHook component', () => {
    it('render empty status', () => {
        render(<ProfileStatusWithHooks />)
        screen.debug()
        expect(screen.getByText(/---/i)).toBeInTheDocument()
    })
})
