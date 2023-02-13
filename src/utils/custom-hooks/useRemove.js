import {useState} from "react";

export const useRemove = () => {
    const [items, setItems] = useState([]);

    const removeObject = (products,id) => {
        setItems(products.filter(item => item.id !== id));
    };

    return [items, removeObject];

};
