import React, { useRef, useState } from 'react';
import axios from 'axios';

const AccountActivation = () => {
  const inputRefs = useRef([]);
  const [code, setCode] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) { // Allow only single digit input
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (code[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
          const newCode = [...code];
          newCode[index - 1] = '';
          setCode(newCode);
        }
      } else {
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ActivationCode = code.join('');
    // Check if the code is exactly 6 digits
    if (ActivationCode.length < 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }
    console.log(ActivationCode.length);
    try {
      const response = await axios.get('/api/v1/auth/activate-account', {
        params: {
          'token': ActivationCode
        }
      });
      alert('Account activated');
      setError(""); // Clear the error if the request is successful
    } catch (error) {
      console.error('Error activating account', error)
    }
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs gap-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="w-16 h-16">
                        <input
                          className="w-full h-full flex flex-col items-center justify-center text-center px-1 outline-none rounded-xl border border-gray-500 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          maxLength="1"
                          onChange={(e) => handleInputChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          ref={(el) => inputRefs.current[index] = el}
                          value={code[index]}
                        />
                      </div>
                    ))}
                  </div>

                  {error && <div className="text-red-500 text-center">{error}</div>}

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button type="submit" className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActivation;
