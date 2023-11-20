import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../../utils';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProperties();
                setProperties(data);
            } catch (error) {
                return error;
            }
        };
        fetchData();
    }, []);

    return (
        <ul className="PropertyListing">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;

// Todo: if I could add more features,
// move fetching logic to hook to be able to use something like {properties, error, loading} = useFetchProperties();
// return a spinner component if loading
// return an error component if error
