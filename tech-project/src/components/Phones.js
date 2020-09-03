import React, { useState }from 'react';
import axios from 'axios';

function Phones() {
    const [nameOfPhone] = useState("");
    const [priceOfPhone] = useState("");
    const [phoneObject, setPhoneObject] = useState({name: "", price: ""});
    const [phones, setPhones] = useState(null);

    // async function grabAllPhones() {
    //     try {
    //         const res = await axios.get('http://localhost:8080/phone');
    //         setPhones(res.data);
    //     } catch(e) {
    //         console.error(e, e.message);
    //     }
    // }

    // useEffect(() => {
    //     grabAllPhones();
    // }, [])

    function handleChange(e) {
        const{ value, id } = e.target;
        setPhoneObject({...phoneObject, [id]: value })
    }

    async function postPhone(e) {
        e.preventDefault();
        try {
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

    function firstPhone(nameOfPhone, nameOfPrice) {
        nameOfPhone = "iPhone 11 128GB Red"
        nameOfPrice = "$749.00"
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
                            postPhone(e);
                            firstPhone();
                        }} >Add to Cart</button>
                    </form>
                    {
                        phones ? phones.map(phone => <Phones phoneId={ phone.id } phoneName={ phone.name }  phoneImage={ phone.image } phonePrice={ phone.price } />) : 'Loading...' 
                    }
                </div>
            </div>
        )
    }

export default Phones;