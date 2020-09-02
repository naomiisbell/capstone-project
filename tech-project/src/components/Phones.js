import React, { useEffect, useState }from 'react';
import axios from 'axios';

function Phones() {
    const [button, setButton] = useState(null);
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
    }, [])

    function handleChange(e) {
        const{ value, id } = e.target;
        setButton({...button, [id]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/phone', button);
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
                    <form onChange = { (e) => handleChange(e) } onSubmit = { (e) => handleSubmit(e) } >
                        <img alt = "red iPhone with two cameras" width = "400px" src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763"/>
                        <h2>iPhone 11</h2>
                        <h2>128GB Red</h2>
                        <h3>$749.00</h3>
                        <button type = "submit" >Add to Cart</button>
                    </form>
                    {
                        phones ? phones.map(phone => <Phones name={ phone.name } phoneId={ phone.id } getPhones={ grabAllPhones }/>) : 'Loading...' 
                    }
                </div>
            </div>
        )
    }

export default Phones;