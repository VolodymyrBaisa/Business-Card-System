import React from "react";
import { Header } from './Header';

export const CreateAnAccount = () => {
    return (
        <>
            <Header />
            <div className="name">
            <label for="first_name">First Name:</label>
            <input type="text" name="first_name" />
            <label for="last_name">Last Name:</label>
            <input type="text" name="last_name" /><br/>
            </div>
            <div className="email">
            <label for="email">Email:</label>
            <input type="email" name="email" /><br/>
            </div>
           <div className="password">
           <label for="password">New Password:</label>
            <input type="password" name="password" />
            <label for="confirm_password">Confirm Password:</label>
            <input type="password" name="confirm_password" /><br/>
           </div>
          
            <button className="save-button">Save Profile</button>
            </>
    )
};
