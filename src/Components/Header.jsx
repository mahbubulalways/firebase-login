import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user,signOutUser}=useContext(AuthContext)
    const handleLogOut=()=>{
        signOutUser()
        .then(()=>{
;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='navbar bg-neutral text-neutral-content '>
           <div className="w-[80%] mx-auto flex justify-between gap-5 py-2"> 
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
           <div className='flex gap-4'>
           <Link to='/'>Home</Link>
           {user && <> <Link to='/orders'>Orders</Link>
            <Link to='/profile'>Profile</Link></>}
            <Link to='/login'>Log in</Link>
            <Link to='/register'>Sign up</Link>
           <div>
           <Link className='flex gap-4 items-center'>{user ? <>
              <span>{  user.email}</span>
              <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
            </>: <><Link to='login'>
                <button className="btn btn-xs">Sign in</button></Link></>}</Link>
           </div>
           </div>
         </div>
     </div>
    );
};

export default Header;