import React from "react";
import { Header } from '../components/Header'

export const CreateAnAccount = () => {
    return (
        <>
                    <Header />,
            <div className="credentials">
                <img src="/img/user.htm" alt="user image"></img>
                    <form className="forms">
                        <label for="firstname">First Name:</label>
                        <input type="text" name="firstname" />
                        <label for="lastname">Last Name:</label>
                        <input type="text" name="lastname" />
                        <label for="email">Email:</label>
                        <input type="email" name="email" />
                        <label for="password">New Password:</label>
                        <input type="password" name="password" />
                        <label for="password">Confirm Password:</label>
                        <input type="password" name="password" />
                        <input type="submit" value="Save Profile" />
                    </form>
            </div>
        </>
    )
};
