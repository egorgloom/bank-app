import { FC } from 'react';

import styles from './FormAuthorization.module.scss'

import Button from '../UI/Button/Button';

import { Link } from 'react-router-dom';

import { IFormAuthorization } from '../../interfaces/interface'

const FormAuthorization: FC<IFormAuthorization> = ({ ...props }) => {
    return (
        <div className={styles.formContainer}>
            <h1>{props.title}</h1>
            <form onSubmit={props.handleSubmit} className={styles.form}>
                <label className={styles.label} htmlFor="username">Username</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                    className={styles.input}
                />
                <label className={styles.label} htmlFor="username">Password</label>
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                    className={styles.input}
                />
                <Button color='purple' title={props.titleBtn} type="submit" />
                <p>{props.text} <Link to={`${props.linkForm}`}>{props.linkText}</Link></p>
            </form>
        </div>
    );
};

export default FormAuthorization;