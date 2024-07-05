import React, { useEffect, useState } from 'react';

const GoogleLogin = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const params = getQueryParams();
        if (params.username && params.email) {
            setUserInfo({
                username: params.username,
                email: params.email,
                token: params.token,
            });
        }
    }, []);

    const loginWithGoogle = () => {
        window.location.href = "http://localhost:8012/services/auth/v1/user/account/google/login";
    };

    const getQueryParams = () => {
        const params = {};
        window.location.search.substring(1).split("&").forEach(pair => {
            const [key, value] = pair.split("=");
            params[key] = decodeURIComponent(value);
        });
        return params;
    };

    return (
        <div>
            <h1>Login with Google</h1>
            <button className="login-button" onClick={loginWithGoogle}>Login with Google</button>
            <div id="user-info" style={{ marginTop: "20px" }}>
                {userInfo && (
                    <>
                        <h2>Welcome, {userInfo.username}</h2>
                        <p>Email: {userInfo.email}</p>
                        <p>Access Token: {userInfo.token}</p>
                    </>
                )}
            </div>
            <style>{`
        .login-button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background-color: #4285F4;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-align: center;
        }
      `}</style>
        </div>
    );
};

export default GoogleLogin;
