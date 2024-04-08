import React, {useState, useEffect} from 'react';

const GroceryList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch('http://localhost:5006/api/Item');
            if (response.ok) {
                const data = await response.json();
                setItems(data);
            } else {
                console.log("Error.")
            }
        };

        getItems();
    }, []);

    return (
        <div>
            <h2>Boodschappenlijst</h2>
            <ul>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Artikel</th>
                        <th>Hoeveelheid</th>
                    </tr>

                    {items.map(item => (
                        <tr key={item.id}>
                            <td key={item.id}>{item.id}</td>
                            <td key={item.id}>{item.name}</td>
                            <td key={item.id}>{item.amount}</td>
                        </tr>
                    ))}

                </table>
            </ul>
        </div>
    );
};

export default GroceryList;
