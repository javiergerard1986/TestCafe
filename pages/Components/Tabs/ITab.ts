export interface ITab {
    
    tabs: Map<string, string>;

    loadTabs(): void;

    navigateToTab(tabName: string): void;

}