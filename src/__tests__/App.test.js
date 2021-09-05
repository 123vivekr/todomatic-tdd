import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("test submit button clickability", () => {
    it("submit button disabled if description missing", () => {
        const { getByTestId } = render(<App/>);
        userEvent.type(getByTestId("title-input"), "abcd");
        expect(getByTestId("add-note-button")).toBeDisabled();
    });

    it("submit button disabled if title missing", () => {
        const { getByTestId } = render(<App/>);
        userEvent.type(getByTestId("description-input"), "abcd");
        expect(getByTestId("add-note-button")).toBeDisabled();
    });

    it("submit button disabled if title and description are missing", () => {
        const { getByTestId } = render(<App/>);
        expect(getByTestId("add-note-button")).toBeDisabled();
    });

    it("submit button enabled if title and description entered", () => {
        const { getByTestId } = render(<App/>);
        userEvent.type(getByTestId("title-input"), "abcd");
        userEvent.type(getByTestId("description-input"), "abcd");
        expect(getByTestId("add-note-button").getAttribute("disabled")).toBe(null);
    });
})