export interface Filters {
    copyright: string;
    ageRestriction: string;
    audience: string;
    access: string;
    title: string;
    description: string;
    minViews: number | string; // Для полей ввода типа number допускайте string, т.к. input может содержать пустое значение.
};
