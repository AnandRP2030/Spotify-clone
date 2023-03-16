import React from "react";
import styles from "./login.module.css"

const Login = () => {
    return (
        <body>
            <div className="box">
                <form>
                    <h2>Sign In</h2>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </body>
    )
}

export { Login };