export class Formatter {
    static formatDate ( value: Date): string {

        const date = new Date(value);

        const day = date.getDate();

        const getDaySuffix = (day: number): string => {
            if (day >= 11 && day <= 13) return 'th'; // Special case for 11th, 12th, 13th
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };
       
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            year: 'numeric'
            } as const; // Add 'as const' here
       
        const formattedDate = Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate.replace(/(\w+ )(\d{4})/, `$1${day}${getDaySuffix(day)}, $2`);
    }
}