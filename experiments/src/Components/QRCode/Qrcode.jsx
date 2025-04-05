import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const Qrcode = () => {
    const [input,setInput] =  useState('');
    const [qrcode,setQrcode] =  useState('');
    function handleqrcode(){
        setQrcode(input);
        setInput('');
    }

  return (
    <div>
        <input placeholder='Enter a value' value={input} onChange={(e)=>setInput(e.target.value)}  />
        <button onClick={handleqrcode} disabled={input && input.trim()!==''?false:true}>Generate</button>
        <QRCode  id="qr-code-value" value={qrcode} />
    </div>
  )
}

export default Qrcode