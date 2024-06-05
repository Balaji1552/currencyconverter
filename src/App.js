import logo from './logo.svg';
import './App.css';
import InputBox from './compoents/InputBox';
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCUrrencyInfo';


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setForm] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)
  console.log();
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))  }
  const swap = () => {
    setForm(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (


    <div className='w-full h-screen duration-200  flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
    >
      <div className='w-full' >
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm lbg-white/30'>

          <form onSubmit={(e) => {

            e.preventDefault()

            convert()

          }}>
            <div className=' w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={option}

                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setForm(currency)}

                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>

              <button

                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white text-white px-2 py-0.5            rounded-md

                bg-blue-600'



                onClick={swap}

              >Swap</button>



            </div>
            <div className='w-full mb-1'>

              <InputBox

                label="to"
                currencyOptions={option}

                amount={convertedAmount}

                onCurrencyChange={(currency) => setTo(currency)}

                selectCurrency={to}


              />

            </div>
            <button

              type='submit'

              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              onClick={convert}
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>


          </form>

        </div>
      </div>

    </div>
  );
}

export default App;
