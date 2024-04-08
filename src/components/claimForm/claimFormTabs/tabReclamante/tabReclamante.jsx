import React, {useState} from 'react';
import classes from './tabReclamante.module.css';

const TabReclamante = () => {
        const [isHolder, setIsHolder] = useState(false);
        const [isInjured, setIsInjured] = useState(false);
        const [documentNumber, setDocumentNumber] = useState('');
        const [fullName, setFullName] = useState('');
        const [phone, setPhone] = useState('');
        const [mobilePhone, setMobilePhone] = useState('');
        const [email, setEmail] = useState('');
        const [isLegalEntity, setIsLegalEntity] = useState(false);
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Is Holder:', isHolder);
            console.log('Is Injured:', isInjured);
            console.log('Document Number:', documentNumber);
            console.log('Full Name:', fullName);
            console.log('Phone:', phone);
            console.log('Mobile Phone:', mobilePhone);
            console.log('Email:', email);
            console.log('Is Legal Entity?:', isLegalEntity);
    
            // Clear form fields
            setIsHolder(false);
            setIsInjured(false);
            setDocumentNumber('');
            setFullName('');
            setPhone('');
            setMobilePhone('');
            setEmail('');
            setIsLegalEntity(false);
        };
    
        return (
            <div>
                <form onSubmit={handleSubmit} className={classes.formReclamante}>
                    <label>
                        <div className={classes.checkb}>
                                <p>Titular</p>
                                <input
                                    type="checkbox"
                                    checked={isHolder}
                                    onChange={(e) => setIsHolder(e.target.checked)}
                                />
                        </div>
                    </label>
                    <label>
                    <div className={classes.checkb}>
                        <p>Lesionado</p>
                        <input
                            type="checkbox"
                            checked={isInjured}
                            onChange={(e) => setIsInjured(e.target.checked)}
                        />
                        </div>
                    </label>
                    <div>
                        <label>Número de documento:</label>
                        <input
                            type="text"
                            value={documentNumber}
                            onChange={(e) => setDocumentNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Teléfono mobil:</label>
                        <input
                            type="tel"
                            value={mobilePhone}
                            onChange={(e) => setMobilePhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>
                            <div className={classes.checkb}>
                                <p>Es persona juridica?</p>
                                <input
                                    type="checkbox"
                                    checked={isLegalEntity}
                                    onChange={(e) => setIsLegalEntity(e.target.checked)}
                                />
                            </div>
                        </label>
                    </div>
                    <button type="submit" className={classes.submitButton}>Submit</button>
                </form>
            </div>
        );
}

export default TabReclamante