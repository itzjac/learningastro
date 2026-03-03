export class Formatter {
    static formatDate ( value: Date): string {
        const date = new Date(value);
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
            } as const; // Add 'as const' here
        return Intl.DateTimeFormat('en-US', options).format(date);
    }
}