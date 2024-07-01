import {useState,useEffect} from 'react';


const myHeaders = new Headers();
myHeaders.append("x-api-key", "aMFouLkMjcxGopFBPmzjWGMKQCkVKPDMsghukTvPHaPWzsqALZZFfGRtpBgvEKVVLGDJjDBavveHcoVKhuqjovsRWhkgGEQiyRmX");
myHeaders.append("x-app-version", "1.0.0");
myHeaders.append("x-apihub-key", "jGUBFeqSMpZmG4o-HaHyJeiZiaKGTtPi1G5TJSxgklMomjn1PT");
myHeaders.append("x-apihub-host", "IP-LOOKUP-API.allthingsdev.co");


export default function Location(){
    const [ipAddress, setIpAddress] = useState('');
    const [ipRaw, setIpRaw] = useState('');
        
    const fetchLocation = async () => {
        try {
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: ipRaw,
                redirect: "follow"
            };
            console.log(requestOptions);
            const response = await fetch("https://IP-LOOKUP-API.proxy-production.allthingsdev.co/api/v1/iplookup/loc-find", requestOptions)
            const data = await response.json();
            console.log(data);


        } catch (error) {
            console.log("Error fetching weather data:", error);
        }
    };
    
    
    const buttonPresses = () => {
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log(data.ip);
            setIpRaw({ip: data.ip});

            setIpAddress(data.ip);


            fetchLocation();
            
        })
        .catch(error => {
            console.log('Error:', error);
        });
        
    };

    
    return <>

        <button onClick={buttonPresses}>Click to Fetch Location</button>
    
    
    </>
}