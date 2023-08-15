import { useState  } from 'react';

function AccountRender() {
  
  
  
  return (
    <>
      <div className="account-type">
          <input type="radio" value="none" id="radioOne" name="account" checked/>
          <label htmlFor="radioOne" className="radio">Personal</label>
          <input type="radio" value="none" id="radioTwo" name="account" />
          <label htmlFor="radioTwo" className="radio">Company</label>
        </div>
    </>
  )
}

export default AccountRender
