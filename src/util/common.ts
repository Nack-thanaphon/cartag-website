export const getStatusClass = (status: string) => {
    switch (status) {
        case 'pending':
            return 'text-yellow-600';
        case 'success':
            return 'text-green-600';
        case 'cancel':
            return 'text-red-600';
        default:
            return '';
    }
}
export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};