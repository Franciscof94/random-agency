export const validateOnlyLetters = (value: string) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
        return; 
    }
    return value; 
}