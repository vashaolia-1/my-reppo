import { Locator } from 'playwright';

export class SortComponent {

    public get title(): Locator {
        return this.baseLocator.locator('.product_sort_container');
    }

    public get sortDropdown(): Locator {
        return this.baseLocator.locator('select.product_sort_container');
    }

    public get sortOptions(): Locator {
        return this.sortDropdown.locator('option');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async selectOption(optionValue: string): Promise<void> {
        await this.sortDropdown.selectOption({ value: optionValue });
    }

    public async getSelectedOption(): Promise<string> {
        return await this.sortDropdown.inputValue();
    }
}
