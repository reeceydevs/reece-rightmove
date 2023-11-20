export const fetchProperties = async () => {
    const response = await fetch('http://localhost:3000/api/properties');
    const data = await response.json();
    return data;
};
