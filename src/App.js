import React, { useState } from 'react';
import {data} from './data';
import Modal from './Modal';

const UseReducerApp = () => {
   const [name, setName] = useState('');
   const [people, setPeople] = useState(data);
   const [showModal, setShowModal] = useState(false);

   const handleSubmit = (e) => {
        e.preventDefault();
        if(name) {
            setShowModal(true);
            setPeople([...people, {id: new Date().getTime().toString(), name: name}]);
            setName('');
        } else {
            setShowModal(true)
        }    
   };

    return <>
        {showModal && <Modal/>}
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit" className="btn">Add</button>
            </div>
        </form> 
        {people.map((person) => {
            return (
                <div key={person.id} className="display">
                    <p>{person.name}</p>
                </div>
            )
        })}
    </>
};

export default UseReducerApp