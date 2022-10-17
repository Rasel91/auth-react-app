import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>This home for :{user?.displayName}</h1>
        </div>
    );
};

export default Home;