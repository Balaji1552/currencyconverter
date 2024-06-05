import { useEffect,useState } from "react";

function useCurrencyInfo(e){
const [data,setData]=useState({});
useEffect(()=>{
 fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/'+[e]+'.json')
 .then((res)=> res.json())
 .then((res)=>setData(res[e]))

},[e])
console.log(data)
 return data;
}
 export default useCurrencyInfo;