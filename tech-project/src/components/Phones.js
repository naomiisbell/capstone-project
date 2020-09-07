import React, { useEffect, useState }from 'react';
import axios from 'axios';
import DeleteItem from './DeleteItem';

function Phones() {
    const [nameOfPhone, setNameOfPhone] = useState("");
    const [priceOfPhone, setPriceOfPhone] = useState("");
    const [phoneObject, setPhoneObject] = useState({name: "", price: ""});
    const [phones, setPhones] = useState(null);

    async function grabAllPhones() {
        try {
            const res = await axios.get('http://localhost:8080/phone');
            setPhones(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    useEffect(() => {
        grabAllPhones();
        firstPhone();
    }, [])

    function handleChange(e) {
        const{ value, id } = e.target;
        setPhoneObject({...phoneObject, [id]: value })
    }

    // console.log(nameOfPhone);
    // console.log(priceOfPhone);
    async function firstPhone() {
        // e.preventDefault();
        setNameOfPhone("iPhone 11 128GB Red");
        setPriceOfPhone("$749.00");
        console.log(nameOfPhone);
        console.log(priceOfPhone);
    }

    // useEffect(() => {
    //     firstPhone();
    // }, [])

    async function postPhone(e) {
        e.preventDefault();
        try {
            // nameOfPhone ? firstPhone() : 'Loading...';
            phoneObject.name = nameOfPhone
            phoneObject.price = priceOfPhone

            const res = await axios.post('http://localhost:8080/phone', phoneObject)
            console.log(res.data);

            const secondRes = await axios.get('http://localhost:8080/phone');
            setPhones(secondRes.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }


        return (
            <div>
                <div className = "phoneOne">
                    <form onChange = { (e) => handleChange(e) }>
                        <img alt = "" width = "400px" src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763"/>
                        <h2>iPhone 11</h2>
                        <h2>128GB Red</h2>
                        <h3>$749.00</h3>
                        <button 
                        onClick= { (e) => {
                            firstPhone(e);
                            postPhone(e);
                        }} >Add to Cart</button>
                    </form>
                    {
                        phones ? phones.map(phone => <DeleteItem phoneId={ phone.id } phoneName={ phone.name } phonePrice={ phone.price } getPhones = { grabAllPhones } />) : 'Loading...' 
                    }
                </div>
            </div>
        )
    }

export default Phones;