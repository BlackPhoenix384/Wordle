import { useEffect, useRef, useState } from "react";

function useKey(key, cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event);
            }
        }
        document.addEventListener("keypress", handle);
        return () => document.removeEventListener("keypress", handle);
    }, [key]);

}

const Game = () => {
    const [win, setwin] = useState(true);
    const [i, seti] = useState(1);
    const [K, setK] = useState('');
    const [K2, setK2] = useState('');
    const [K3, setK3] = useState('');
    const [K4, setK4] = useState('');
    const [K5, setK5] = useState('');
    const [K6, setK6] = useState('');
    const [K7, setK7] = useState('');
    const [K8, setK8] = useState('');
    const [K9, setK9] = useState('');
    const [K10, setK10] = useState('');
    const [K11, setK11] = useState('');
    const [K12, setK12] = useState('');
    const [K13, setK13] = useState('');
    const [K14, setK14] = useState('');
    const [K15, setK15] = useState('');
    const [K16, setK16] = useState('');
    const [K17, setK17] = useState('');
    const [K18, setK18] = useState('');
    const [K19, setK19] = useState('');
    const [K20, setK20] = useState('');
    const [K21, setK21] = useState('');
    const [K22, setK22] = useState('');
    const [K23, setK23] = useState('');
    const [K24, setK24] = useState('');
    const [K25, setK25] = useState('');
    function handleBack() {
        if (i == 1) {
            if (K != '' && K2 == '')
                setK('');
            else if (K2 != '' && K3 == '')
                setK2('');
            else if (K3 != '' && K4 == '')
                setK3('');
            else if (K4 != '' && K5 == '')
                setK4('');
            else if (K5 != '')
                setK5('');
        }
        if (i == 2) {
            if (K6 != '' && K7 == '')
                setK6('');
            else if (K7 != '' && K8 == '')
                setK7('');
            else if (K8 != '' && K9 == '')
                setK8('');
            else if (K9 != '' && K10 == '')
                setK9('');
            else if (K10 != '')
                setK10('');
        }
        if (i == 3) {
            if (K11 != '' && K12 == '')
                setK12('');
            else if (K12 != '' && K13 == '')
                setK12('');
            else if (K13 != '' && K14 == '')
                setK13('');
            else if (K14 != '' && K15 == '')
                setK14('');
            else if (K15 != '')
                setK15('');
        }
        if (i == 4) {
            if (K16 != '' && K17 == '')
                setK16('');
            else if (K17 != '' && K18 == '')
                setK17('');
            else if (K18 != '' && K19 == '')
                setK18('');
            else if (K19 != '' && K20 == '')
                setK19('');
            else if (K20 != '')
                setK20('');
        }
        if (i == 5) {
            if (K21 != '' && K22 == '')
                setK21('');
            else if (K22 != '' && K23 == '')
                setK22('');
            else if (K23 != '' && K24 == '')
                setK23('');
            else if (K24 != '' && K25 == '')
                setK24('');
            else if (K25 != '')
                setK25('');
        }
    }
    function handleEnter() {
        if (K5 != '')
            seti(2);
        if (K10 != '')
            seti(3);
        if (K15 != '')
            seti(4);
        if (K20 != '')
            seti(5);
        if (K25 != '' && win == true) {
            seti(1);
            setK('');
            setK2('');
            setK3('');
            setK4('');
            setK5('');
            setK6('');
            setK7('');
            setK8('');
            setK9('');
            setK10('');
            setK11('');
            setK12('');
            setK13('');
            setK14('');
            setK15('');
            setK16('');
            setK17('');
            setK18('');
            setK19('');
            setK20('');
            setK21('');
            setK22('');
            setK23('');
            setK24('');
            setK25('');
        }
    }
    function handleQ() {
        if (i == 1) {
            if (K == '')
                setK('Q');
            if (K2 == '' && K != '')
                setK2('Q');
            if (K3 == '' && K2 != '')
                setK3('Q');
            if (K4 == '' && K3 != '')
                setK4('Q');
            if (K5 == '' && K4 != '')
                setK5('Q');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('Q');
            if (K7 == '' && K6 != '')
                setK7('Q');
            if (K8 == '' && K7 != '')
                setK8('Q');
            if (K9 == '' && K8 != '')
                setK9('Q');
            if (K10 == '' && K9 != '')
                setK10('Q');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('Q');
            if (K12 == '' && K11 != '')
                setK12('Q');
            if (K13 == '' && K12 != '')
                setK13('Q');
            if (K14 == '' && K13 != '')
                setK14('Q');
            if (K15 == '' && K14 != '')
                setK15('Q');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('Q');
            if (K17 == '' && K16 != '')
                setK17('Q');
            if (K18 == '' && K17 != '')
                setK18('Q');
            if (K19 == '' && K18 != '')
                setK19('Q');
            if (K20 == '' && K19 != '')
                setK20('Q');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('Q');
            if (K22 == '' && K21 != '')
                setK22('Q');
            if (K23 == '' && K22 != '')
                setK23('Q');
            if (K24 == '' && K23 != '')
                setK24('Q');
            if (K25 == '' && K24 != '')
                setK25('Q');
        }
    }
    function handleW() {
        if (i == 1) {
            if (K == '')
                setK('W');
            if (K2 == '' && K != '')
                setK2('W');
            if (K3 == '' && K2 != '')
                setK3('W');
            if (K4 == '' && K3 != '')
                setK4('W');
            if (K5 == '' && K4 != '')
                setK5('W');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('W');
            if (K7 == '' && K6 != '')
                setK7('W');
            if (K8 == '' && K7 != '')
                setK8('W');
            if (K9 == '' && K8 != '')
                setK9('W');
            if (K10 == '' && K9 != '')
                setK10('W');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('W');
            if (K12 == '' && K11 != '')
                setK12('W');
            if (K13 == '' && K12 != '')
                setK13('W');
            if (K14 == '' && K13 != '')
                setK14('W');
            if (K15 == '' && K14 != '')
                setK15('W');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('W');
            if (K17 == '' && K16 != '')
                setK17('W');
            if (K18 == '' && K17 != '')
                setK18('W');
            if (K19 == '' && K18 != '')
                setK19('W');
            if (K20 == '' && K19 != '')
                setK20('W');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('W');
            if (K22 == '' && K21 != '')
                setK22('W');
            if (K23 == '' && K22 != '')
                setK23('W');
            if (K24 == '' && K23 != '')
                setK24('W');
            if (K25 == '' && K24 != '')
                setK25('W');
        }
    }
    function handleE() {
        if (i == 1) {
            if (K == '')
                setK('E');
            if (K2 == '' && K != '')
                setK2('E');
            if (K3 == '' && K2 != '')
                setK3('E');
            if (K4 == '' && K3 != '')
                setK4('E');
            if (K5 == '' && K4 != '')
                setK5('E');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('E');
            if (K7 == '' && K6 != '')
                setK7('E');
            if (K8 == '' && K7 != '')
                setK8('E');
            if (K9 == '' && K8 != '')
                setK9('E');
            if (K10 == '' && K9 != '')
                setK10('E');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('E');
            if (K12 == '' && K11 != '')
                setK12('E');
            if (K13 == '' && K12 != '')
                setK13('E');
            if (K14 == '' && K13 != '')
                setK14('E');
            if (K15 == '' && K14 != '')
                setK15('E');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('E');
            if (K17 == '' && K16 != '')
                setK17('E');
            if (K18 == '' && K17 != '')
                setK18('E');
            if (K19 == '' && K18 != '')
                setK19('E');
            if (K20 == '' && K19 != '')
                setK20('E');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('E');
            if (K22 == '' && K21 != '')
                setK22('E');
            if (K23 == '' && K22 != '')
                setK23('E');
            if (K24 == '' && K23 != '')
                setK24('E');
            if (K25 == '' && K24 != '')
                setK25('E');
        }
    }
    function handleR() {
        if (i == 1) {
            if (K == '')
                setK('R');
            if (K2 == '' && K != '')
                setK2('R');
            if (K3 == '' && K2 != '')
                setK3('R');
            if (K4 == '' && K3 != '')
                setK4('R');
            if (K5 == '' && K4 != '')
                setK5('R');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('R');
            if (K7 == '' && K6 != '')
                setK7('R');
            if (K8 == '' && K7 != '')
                setK8('R');
            if (K9 == '' && K8 != '')
                setK9('R');
            if (K10 == '' && K9 != '')
                setK10('R');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('R');
            if (K12 == '' && K11 != '')
                setK12('R');
            if (K13 == '' && K12 != '')
                setK13('R');
            if (K14 == '' && K13 != '')
                setK14('R');
            if (K15 == '' && K14 != '')
                setK15('R');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('R');
            if (K17 == '' && K16 != '')
                setK17('R');
            if (K18 == '' && K17 != '')
                setK18('R');
            if (K19 == '' && K18 != '')
                setK19('R');
            if (K20 == '' && K19 != '')
                setK20('R');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('R');
            if (K22 == '' && K21 != '')
                setK22('R');
            if (K23 == '' && K22 != '')
                setK23('R');
            if (K24 == '' && K23 != '')
                setK24('R');
            if (K25 == '' && K24 != '')
                setK25('R');
        }
    }
    function handleT() {
        if (i == 1) {
            if (K == '')
                setK('T');
            if (K2 == '' && K != '')
                setK2('T');
            if (K3 == '' && K2 != '')
                setK3('T');
            if (K4 == '' && K3 != '')
                setK4('T');
            if (K5 == '' && K4 != '')
                setK5('T');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('T');
            if (K7 == '' && K6 != '')
                setK7('T');
            if (K8 == '' && K7 != '')
                setK8('T');
            if (K9 == '' && K8 != '')
                setK9('T');
            if (K10 == '' && K9 != '')
                setK10('T');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('T');
            if (K12 == '' && K11 != '')
                setK12('T');
            if (K13 == '' && K12 != '')
                setK13('T');
            if (K14 == '' && K13 != '')
                setK14('T');
            if (K15 == '' && K14 != '')
                setK15('T');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('T');
            if (K17 == '' && K16 != '')
                setK17('T');
            if (K18 == '' && K17 != '')
                setK18('T');
            if (K19 == '' && K18 != '')
                setK19('T');
            if (K20 == '' && K19 != '')
                setK20('T');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('T');
            if (K22 == '' && K21 != '')
                setK22('T');
            if (K23 == '' && K22 != '')
                setK23('T');
            if (K24 == '' && K23 != '')
                setK24('T');
            if (K25 == '' && K24 != '')
                setK25('T');
        }
    }
    function handleY() {
        if (i == 1) {
            if (K == '')
                setK('Y');
            if (K2 == '' && K != '')
                setK2('Y');
            if (K3 == '' && K2 != '')
                setK3('Y');
            if (K4 == '' && K3 != '')
                setK4('Y');
            if (K5 == '' && K4 != '')
                setK5('Y');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('Y');
            if (K7 == '' && K6 != '')
                setK7('Y');
            if (K8 == '' && K7 != '')
                setK8('Y');
            if (K9 == '' && K8 != '')
                setK9('Y');
            if (K10 == '' && K9 != '')
                setK10('Y');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('Y');
            if (K12 == '' && K11 != '')
                setK12('Y');
            if (K13 == '' && K12 != '')
                setK13('Y');
            if (K14 == '' && K13 != '')
                setK14('Y');
            if (K15 == '' && K14 != '')
                setK15('Y');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('Y');
            if (K17 == '' && K16 != '')
                setK17('Y');
            if (K18 == '' && K17 != '')
                setK18('Y');
            if (K19 == '' && K18 != '')
                setK19('Y');
            if (K20 == '' && K19 != '')
                setK20('Y');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('Y');
            if (K22 == '' && K21 != '')
                setK22('Y');
            if (K23 == '' && K22 != '')
                setK23('Y');
            if (K24 == '' && K23 != '')
                setK24('Y');
            if (K25 == '' && K24 != '')
                setK25('Y');
        }
    }
    function handleU() {
        if (i == 1) {
            if (K == '')
                setK('U');
            if (K2 == '' && K != '')
                setK2('U');
            if (K3 == '' && K2 != '')
                setK3('U');
            if (K4 == '' && K3 != '')
                setK4('U');
            if (K5 == '' && K4 != '')
                setK5('U');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('U');
            if (K7 == '' && K6 != '')
                setK7('U');
            if (K8 == '' && K7 != '')
                setK8('U');
            if (K9 == '' && K8 != '')
                setK9('U');
            if (K10 == '' && K9 != '')
                setK10('U');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('U');
            if (K12 == '' && K11 != '')
                setK12('U');
            if (K13 == '' && K12 != '')
                setK13('U');
            if (K14 == '' && K13 != '')
                setK14('U');
            if (K15 == '' && K14 != '')
                setK15('U');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('U');
            if (K17 == '' && K16 != '')
                setK17('U');
            if (K18 == '' && K17 != '')
                setK18('U');
            if (K19 == '' && K18 != '')
                setK19('U');
            if (K20 == '' && K19 != '')
                setK20('U');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('U');
            if (K22 == '' && K21 != '')
                setK22('U');
            if (K23 == '' && K22 != '')
                setK23('U');
            if (K24 == '' && K23 != '')
                setK24('U');
            if (K25 == '' && K24 != '')
                setK25('U');
        }
    }
    function handleI() {
        if (i == 1) {
            if (K == '')
                setK('I');
            if (K2 == '' && K != '')
                setK2('I');
            if (K3 == '' && K2 != '')
                setK3('I');
            if (K4 == '' && K3 != '')
                setK4('I');
            if (K5 == '' && K4 != '')
                setK5('I');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('I');
            if (K7 == '' && K6 != '')
                setK7('I');
            if (K8 == '' && K7 != '')
                setK8('I');
            if (K9 == '' && K8 != '')
                setK9('I');
            if (K10 == '' && K9 != '')
                setK10('I');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('I');
            if (K12 == '' && K11 != '')
                setK12('I');
            if (K13 == '' && K12 != '')
                setK13('I');
            if (K14 == '' && K13 != '')
                setK14('I');
            if (K15 == '' && K14 != '')
                setK15('I');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('I');
            if (K17 == '' && K16 != '')
                setK17('I');
            if (K18 == '' && K17 != '')
                setK18('I');
            if (K19 == '' && K18 != '')
                setK19('I');
            if (K20 == '' && K19 != '')
                setK20('I');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('I');
            if (K22 == '' && K21 != '')
                setK22('I');
            if (K23 == '' && K22 != '')
                setK23('I');
            if (K24 == '' && K23 != '')
                setK24('I');
            if (K25 == '' && K24 != '')
                setK25('I');
        }
    }
    function handleO() {
        if (i == 1) {
            if (K == '')
                setK('O');
            if (K2 == '' && K != '')
                setK2('O');
            if (K3 == '' && K2 != '')
                setK3('O');
            if (K4 == '' && K3 != '')
                setK4('O');
            if (K5 == '' && K4 != '')
                setK5('O');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('O');
            if (K7 == '' && K6 != '')
                setK7('O');
            if (K8 == '' && K7 != '')
                setK8('O');
            if (K9 == '' && K8 != '')
                setK9('O');
            if (K10 == '' && K9 != '')
                setK10('O');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('O');
            if (K12 == '' && K11 != '')
                setK12('O');
            if (K13 == '' && K12 != '')
                setK13('O');
            if (K14 == '' && K13 != '')
                setK14('O');
            if (K15 == '' && K14 != '')
                setK15('O');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('O');
            if (K17 == '' && K16 != '')
                setK17('O');
            if (K18 == '' && K17 != '')
                setK18('O');
            if (K19 == '' && K18 != '')
                setK19('O');
            if (K20 == '' && K19 != '')
                setK20('O');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('O');
            if (K22 == '' && K21 != '')
                setK22('O');
            if (K23 == '' && K22 != '')
                setK23('O');
            if (K24 == '' && K23 != '')
                setK24('O');
            if (K25 == '' && K24 != '')
                setK25('O');
        }
    }
    function handleP() {
        if (i == 1) {
            if (K == '')
                setK('P');
            if (K2 == '' && K != '')
                setK2('P');
            if (K3 == '' && K2 != '')
                setK3('P');
            if (K4 == '' && K3 != '')
                setK4('P');
            if (K5 == '' && K4 != '')
                setK5('P');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('P');
            if (K7 == '' && K6 != '')
                setK7('P');
            if (K8 == '' && K7 != '')
                setK8('P');
            if (K9 == '' && K8 != '')
                setK9('P');
            if (K10 == '' && K9 != '')
                setK10('P');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('P');
            if (K12 == '' && K11 != '')
                setK12('P');
            if (K13 == '' && K12 != '')
                setK13('P');
            if (K14 == '' && K13 != '')
                setK14('P');
            if (K15 == '' && K14 != '')
                setK15('P');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('P');
            if (K17 == '' && K16 != '')
                setK17('P');
            if (K18 == '' && K17 != '')
                setK18('P');
            if (K19 == '' && K18 != '')
                setK19('P');
            if (K20 == '' && K19 != '')
                setK20('P');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('P');
            if (K22 == '' && K21 != '')
                setK22('P');
            if (K23 == '' && K22 != '')
                setK23('P');
            if (K24 == '' && K23 != '')
                setK24('P');
            if (K25 == '' && K24 != '')
                setK25('P');
        }
    }
    function handleA() {
        if (i == 1) {
            if (K == '')
                setK('A');
            if (K2 == '' && K != '')
                setK2('A');
            if (K3 == '' && K2 != '')
                setK3('A');
            if (K4 == '' && K3 != '')
                setK4('A');
            if (K5 == '' && K4 != '')
                setK5('A');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('A');
            if (K7 == '' && K6 != '')
                setK7('A');
            if (K8 == '' && K7 != '')
                setK8('A');
            if (K9 == '' && K8 != '')
                setK9('A');
            if (K10 == '' && K9 != '')
                setK10('A');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('A');
            if (K12 == '' && K11 != '')
                setK12('A');
            if (K13 == '' && K12 != '')
                setK13('A');
            if (K14 == '' && K13 != '')
                setK14('A');
            if (K15 == '' && K14 != '')
                setK15('A');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('A');
            if (K17 == '' && K16 != '')
                setK17('A');
            if (K18 == '' && K17 != '')
                setK18('A');
            if (K19 == '' && K18 != '')
                setK19('A');
            if (K20 == '' && K19 != '')
                setK20('A');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('A');
            if (K22 == '' && K21 != '')
                setK22('A');
            if (K23 == '' && K22 != '')
                setK23('A');
            if (K24 == '' && K23 != '')
                setK24('A');
            if (K25 == '' && K24 != '')
                setK25('A');
        }
    }
    function handleS() {
        if (i == 1) {
            if (K == '')
                setK('S');
            if (K2 == '' && K != '')
                setK2('S');
            if (K3 == '' && K2 != '')
                setK3('S');
            if (K4 == '' && K3 != '')
                setK4('S');
            if (K5 == '' && K4 != '')
                setK5('S');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('S');
            if (K7 == '' && K6 != '')
                setK7('S');
            if (K8 == '' && K7 != '')
                setK8('S');
            if (K9 == '' && K8 != '')
                setK9('S');
            if (K10 == '' && K9 != '')
                setK10('S');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('S');
            if (K12 == '' && K11 != '')
                setK12('S');
            if (K13 == '' && K12 != '')
                setK13('S');
            if (K14 == '' && K13 != '')
                setK14('S');
            if (K15 == '' && K14 != '')
                setK15('S');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('S');
            if (K17 == '' && K16 != '')
                setK17('S');
            if (K18 == '' && K17 != '')
                setK18('S');
            if (K19 == '' && K18 != '')
                setK19('S');
            if (K20 == '' && K19 != '')
                setK20('S');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('S');
            if (K22 == '' && K21 != '')
                setK22('S');
            if (K23 == '' && K22 != '')
                setK23('S');
            if (K24 == '' && K23 != '')
                setK24('S');
            if (K25 == '' && K24 != '')
                setK25('S');
        }
    }
    function handleD() {
        if (i == 1) {
            if (K == '')
                setK('D');
            if (K2 == '' && K != '')
                setK2('D');
            if (K3 == '' && K2 != '')
                setK3('D');
            if (K4 == '' && K3 != '')
                setK4('D');
            if (K5 == '' && K4 != '')
                setK5('D');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('D');
            if (K7 == '' && K6 != '')
                setK7('D');
            if (K8 == '' && K7 != '')
                setK8('D');
            if (K9 == '' && K8 != '')
                setK9('D');
            if (K10 == '' && K9 != '')
                setK10('D');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('D');
            if (K12 == '' && K11 != '')
                setK12('D');
            if (K13 == '' && K12 != '')
                setK13('D');
            if (K14 == '' && K13 != '')
                setK14('D');
            if (K15 == '' && K14 != '')
                setK15('D');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('D');
            if (K17 == '' && K16 != '')
                setK17('D');
            if (K18 == '' && K17 != '')
                setK18('D');
            if (K19 == '' && K18 != '')
                setK19('D');
            if (K20 == '' && K19 != '')
                setK20('D');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('D');
            if (K22 == '' && K21 != '')
                setK22('D');
            if (K23 == '' && K22 != '')
                setK23('D');
            if (K24 == '' && K23 != '')
                setK24('D');
            if (K25 == '' && K24 != '')
                setK25('D');
        }
    }
    function handleF() {
        if (i == 1) {
            if (K == '')
                setK('F');
            if (K2 == '' && K != '')
                setK2('F');
            if (K3 == '' && K2 != '')
                setK3('F');
            if (K4 == '' && K3 != '')
                setK4('F');
            if (K5 == '' && K4 != '')
                setK5('F');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('F');
            if (K7 == '' && K6 != '')
                setK7('F');
            if (K8 == '' && K7 != '')
                setK8('F');
            if (K9 == '' && K8 != '')
                setK9('F');
            if (K10 == '' && K9 != '')
                setK10('F');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('F');
            if (K12 == '' && K11 != '')
                setK12('F');
            if (K13 == '' && K12 != '')
                setK13('F');
            if (K14 == '' && K13 != '')
                setK14('F');
            if (K15 == '' && K14 != '')
                setK15('F');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('F');
            if (K17 == '' && K16 != '')
                setK17('F');
            if (K18 == '' && K17 != '')
                setK18('F');
            if (K19 == '' && K18 != '')
                setK19('F');
            if (K20 == '' && K19 != '')
                setK20('F');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('F');
            if (K22 == '' && K21 != '')
                setK22('F');
            if (K23 == '' && K22 != '')
                setK23('F');
            if (K24 == '' && K23 != '')
                setK24('F');
            if (K25 == '' && K24 != '')
                setK25('F');
        }
    }
    function handleG() {
        if (i == 1) {
            if (K == '')
                setK('G');
            if (K2 == '' && K != '')
                setK2('G');
            if (K3 == '' && K2 != '')
                setK3('G');
            if (K4 == '' && K3 != '')
                setK4('G');
            if (K5 == '' && K4 != '')
                setK5('G');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('G');
            if (K7 == '' && K6 != '')
                setK7('G');
            if (K8 == '' && K7 != '')
                setK8('G');
            if (K9 == '' && K8 != '')
                setK9('G');
            if (K10 == '' && K9 != '')
                setK10('G');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('G');
            if (K12 == '' && K11 != '')
                setK12('G');
            if (K13 == '' && K12 != '')
                setK13('G');
            if (K14 == '' && K13 != '')
                setK14('G');
            if (K15 == '' && K14 != '')
                setK15('G');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('G');
            if (K17 == '' && K16 != '')
                setK17('G');
            if (K18 == '' && K17 != '')
                setK18('G');
            if (K19 == '' && K18 != '')
                setK19('G');
            if (K20 == '' && K19 != '')
                setK20('G');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('G');
            if (K22 == '' && K21 != '')
                setK22('G');
            if (K23 == '' && K22 != '')
                setK23('G');
            if (K24 == '' && K23 != '')
                setK24('G');
            if (K25 == '' && K24 != '')
                setK25('G');
        }
    }
    function handleH() {
        if (i == 1) {
            if (K == '')
                setK('H');
            if (K2 == '' && K != '')
                setK2('H');
            if (K3 == '' && K2 != '')
                setK3('H');
            if (K4 == '' && K3 != '')
                setK4('H');
            if (K5 == '' && K4 != '')
                setK5('H');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('H');
            if (K7 == '' && K6 != '')
                setK7('H');
            if (K8 == '' && K7 != '')
                setK8('H');
            if (K9 == '' && K8 != '')
                setK9('H');
            if (K10 == '' && K9 != '')
                setK10('H');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('H');
            if (K12 == '' && K11 != '')
                setK12('H');
            if (K13 == '' && K12 != '')
                setK13('H');
            if (K14 == '' && K13 != '')
                setK14('H');
            if (K15 == '' && K14 != '')
                setK15('H');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('H');
            if (K17 == '' && K16 != '')
                setK17('H');
            if (K18 == '' && K17 != '')
                setK18('H');
            if (K19 == '' && K18 != '')
                setK19('H');
            if (K20 == '' && K19 != '')
                setK20('H');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('H');
            if (K22 == '' && K21 != '')
                setK22('H');
            if (K23 == '' && K22 != '')
                setK23('H');
            if (K24 == '' && K23 != '')
                setK24('H');
            if (K25 == '' && K24 != '')
                setK25('H');
        }
    }
    function handleJ() {
        if (i == 1) {
            if (K == '')
                setK('J');
            if (K2 == '' && K != '')
                setK2('J');
            if (K3 == '' && K2 != '')
                setK3('J');
            if (K4 == '' && K3 != '')
                setK4('J');
            if (K5 == '' && K4 != '')
                setK5('J');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('J');
            if (K7 == '' && K6 != '')
                setK7('J');
            if (K8 == '' && K7 != '')
                setK8('J');
            if (K9 == '' && K8 != '')
                setK9('J');
            if (K10 == '' && K9 != '')
                setK10('J');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('J');
            if (K12 == '' && K11 != '')
                setK12('J');
            if (K13 == '' && K12 != '')
                setK13('J');
            if (K14 == '' && K13 != '')
                setK14('J');
            if (K15 == '' && K14 != '')
                setK15('J');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('J');
            if (K17 == '' && K16 != '')
                setK17('J');
            if (K18 == '' && K17 != '')
                setK18('J');
            if (K19 == '' && K18 != '')
                setK19('J');
            if (K20 == '' && K19 != '')
                setK20('J');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('J');
            if (K22 == '' && K21 != '')
                setK22('J');
            if (K23 == '' && K22 != '')
                setK23('J');
            if (K24 == '' && K23 != '')
                setK24('J');
            if (K25 == '' && K24 != '')
                setK25('J');
        }
    }
    function handleK() {
        if (i == 1) {
            if (K == '')
                setK('K');
            if (K2 == '' && K != '')
                setK2('K');
            if (K3 == '' && K2 != '')
                setK3('K');
            if (K4 == '' && K3 != '')
                setK4('K');
            if (K5 == '' && K4 != '')
                setK5('K');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('K');
            if (K7 == '' && K6 != '')
                setK7('K');
            if (K8 == '' && K7 != '')
                setK8('K');
            if (K9 == '' && K8 != '')
                setK9('K');
            if (K10 == '' && K9 != '')
                setK10('K');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('K');
            if (K12 == '' && K11 != '')
                setK12('K');
            if (K13 == '' && K12 != '')
                setK13('K');
            if (K14 == '' && K13 != '')
                setK14('K');
            if (K15 == '' && K14 != '')
                setK15('K');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('K');
            if (K17 == '' && K16 != '')
                setK17('K');
            if (K18 == '' && K17 != '')
                setK18('K');
            if (K19 == '' && K18 != '')
                setK19('K');
            if (K20 == '' && K19 != '')
                setK20('K');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('K');
            if (K22 == '' && K21 != '')
                setK22('K');
            if (K23 == '' && K22 != '')
                setK23('K');
            if (K24 == '' && K23 != '')
                setK24('K');
            if (K25 == '' && K24 != '')
                setK25('K');
        }
    }
    function handleL() {
        if (i == 1) {
            if (K == '')
                setK('L');
            if (K2 == '' && K != '')
                setK2('L');
            if (K3 == '' && K2 != '')
                setK3('L');
            if (K4 == '' && K3 != '')
                setK4('L');
            if (K5 == '' && K4 != '')
                setK5('L');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('L');
            if (K7 == '' && K6 != '')
                setK7('L');
            if (K8 == '' && K7 != '')
                setK8('L');
            if (K9 == '' && K8 != '')
                setK9('L');
            if (K10 == '' && K9 != '')
                setK10('L');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('L');
            if (K12 == '' && K11 != '')
                setK12('L');
            if (K13 == '' && K12 != '')
                setK13('L');
            if (K14 == '' && K13 != '')
                setK14('L');
            if (K15 == '' && K14 != '')
                setK15('L');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('L');
            if (K17 == '' && K16 != '')
                setK17('L');
            if (K18 == '' && K17 != '')
                setK18('L');
            if (K19 == '' && K18 != '')
                setK19('L');
            if (K20 == '' && K19 != '')
                setK20('L');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('L');
            if (K22 == '' && K21 != '')
                setK22('L');
            if (K23 == '' && K22 != '')
                setK23('L');
            if (K24 == '' && K23 != '')
                setK24('L');
            if (K25 == '' && K24 != '')
                setK25('L');
        }
    }
    function handleZ() {
        if (i == 1) {
            if (K == '')
                setK('Z');
            if (K2 == '' && K != '')
                setK2('Z');
            if (K3 == '' && K2 != '')
                setK3('Z');
            if (K4 == '' && K3 != '')
                setK4('Z');
            if (K5 == '' && K4 != '')
                setK5('Z');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('Z');
            if (K7 == '' && K6 != '')
                setK7('Z');
            if (K8 == '' && K7 != '')
                setK8('Z');
            if (K9 == '' && K8 != '')
                setK9('Z');
            if (K10 == '' && K9 != '')
                setK10('Z');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('Z');
            if (K12 == '' && K11 != '')
                setK12('Z');
            if (K13 == '' && K12 != '')
                setK13('Z');
            if (K14 == '' && K13 != '')
                setK14('Z');
            if (K15 == '' && K14 != '')
                setK15('Z');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('Z');
            if (K17 == '' && K16 != '')
                setK17('Z');
            if (K18 == '' && K17 != '')
                setK18('Z');
            if (K19 == '' && K18 != '')
                setK19('Z');
            if (K20 == '' && K19 != '')
                setK20('Z');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('Z');
            if (K22 == '' && K21 != '')
                setK22('Z');
            if (K23 == '' && K22 != '')
                setK23('Z');
            if (K24 == '' && K23 != '')
                setK24('Z');
            if (K25 == '' && K24 != '')
                setK25('Z');
        }
    }
    function handleX() {
        if (i == 1) {
            if (K == '')
                setK('X');
            if (K2 == '' && K != '')
                setK2('X');
            if (K3 == '' && K2 != '')
                setK3('X');
            if (K4 == '' && K3 != '')
                setK4('X');
            if (K5 == '' && K4 != '')
                setK5('X');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('X');
            if (K7 == '' && K6 != '')
                setK7('X');
            if (K8 == '' && K7 != '')
                setK8('X');
            if (K9 == '' && K8 != '')
                setK9('X');
            if (K10 == '' && K9 != '')
                setK10('X');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('X');
            if (K12 == '' && K11 != '')
                setK12('X');
            if (K13 == '' && K12 != '')
                setK13('X');
            if (K14 == '' && K13 != '')
                setK14('X');
            if (K15 == '' && K14 != '')
                setK15('X');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('X');
            if (K17 == '' && K16 != '')
                setK17('X');
            if (K18 == '' && K17 != '')
                setK18('X');
            if (K19 == '' && K18 != '')
                setK19('X');
            if (K20 == '' && K19 != '')
                setK20('X');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('X');
            if (K22 == '' && K21 != '')
                setK22('X');
            if (K23 == '' && K22 != '')
                setK23('X');
            if (K24 == '' && K23 != '')
                setK24('X');
            if (K25 == '' && K24 != '')
                setK25('X');
        }
    }
    function handleC() {
        if (i == 1) {
            if (K == '')
                setK('C');
            if (K2 == '' && K != '')
                setK2('C');
            if (K3 == '' && K2 != '')
                setK3('C');
            if (K4 == '' && K3 != '')
                setK4('C');
            if (K5 == '' && K4 != '')
                setK5('C');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('C');
            if (K7 == '' && K6 != '')
                setK7('C');
            if (K8 == '' && K7 != '')
                setK8('C');
            if (K9 == '' && K8 != '')
                setK9('C');
            if (K10 == '' && K9 != '')
                setK10('C');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('C');
            if (K12 == '' && K11 != '')
                setK12('C');
            if (K13 == '' && K12 != '')
                setK13('C');
            if (K14 == '' && K13 != '')
                setK14('C');
            if (K15 == '' && K14 != '')
                setK15('C');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('C');
            if (K17 == '' && K16 != '')
                setK17('C');
            if (K18 == '' && K17 != '')
                setK18('C');
            if (K19 == '' && K18 != '')
                setK19('C');
            if (K20 == '' && K19 != '')
                setK20('C');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('C');
            if (K22 == '' && K21 != '')
                setK22('C');
            if (K23 == '' && K22 != '')
                setK23('C');
            if (K24 == '' && K23 != '')
                setK24('C');
            if (K25 == '' && K24 != '')
                setK25('C');
        }
    }
    function handleV() {
        if (i == 1) {
            if (K == '')
                setK('V');
            if (K2 == '' && K != '')
                setK2('V');
            if (K3 == '' && K2 != '')
                setK3('V');
            if (K4 == '' && K3 != '')
                setK4('V');
            if (K5 == '' && K4 != '')
                setK5('V');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('V');
            if (K7 == '' && K6 != '')
                setK7('V');
            if (K8 == '' && K7 != '')
                setK8('V');
            if (K9 == '' && K8 != '')
                setK9('V');
            if (K10 == '' && K9 != '')
                setK10('V');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('V');
            if (K12 == '' && K11 != '')
                setK12('V');
            if (K13 == '' && K12 != '')
                setK13('V');
            if (K14 == '' && K13 != '')
                setK14('V');
            if (K15 == '' && K14 != '')
                setK15('V');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('V');
            if (K17 == '' && K16 != '')
                setK17('V');
            if (K18 == '' && K17 != '')
                setK18('V');
            if (K19 == '' && K18 != '')
                setK19('V');
            if (K20 == '' && K19 != '')
                setK20('V');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('V');
            if (K22 == '' && K21 != '')
                setK22('V');
            if (K23 == '' && K22 != '')
                setK23('V');
            if (K24 == '' && K23 != '')
                setK24('V');
            if (K25 == '' && K24 != '')
                setK25('V');
        }
    }
    function handleB() {
        if (i == 1) {
            if (K == '')
                setK('B');
            if (K2 == '' && K != '')
                setK2('B');
            if (K3 == '' && K2 != '')
                setK3('B');
            if (K4 == '' && K3 != '')
                setK4('B');
            if (K5 == '' && K4 != '')
                setK5('B');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('B');
            if (K7 == '' && K6 != '')
                setK7('B');
            if (K8 == '' && K7 != '')
                setK8('B');
            if (K9 == '' && K8 != '')
                setK9('B');
            if (K10 == '' && K9 != '')
                setK10('B');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('B');
            if (K12 == '' && K11 != '')
                setK12('B');
            if (K13 == '' && K12 != '')
                setK13('B');
            if (K14 == '' && K13 != '')
                setK14('B');
            if (K15 == '' && K14 != '')
                setK15('B');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('B');
            if (K17 == '' && K16 != '')
                setK17('B');
            if (K18 == '' && K17 != '')
                setK18('B');
            if (K19 == '' && K18 != '')
                setK19('B');
            if (K20 == '' && K19 != '')
                setK20('B');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('B');
            if (K22 == '' && K21 != '')
                setK22('B');
            if (K23 == '' && K22 != '')
                setK23('B');
            if (K24 == '' && K23 != '')
                setK24('B');
            if (K25 == '' && K24 != '')
                setK25('B');
        }
    }
    function handleN() {
        if (i == 1) {
            if (K == '')
                setK('N');
            if (K2 == '' && K != '')
                setK2('N');
            if (K3 == '' && K2 != '')
                setK3('N');
            if (K4 == '' && K3 != '')
                setK4('N');
            if (K5 == '' && K4 != '')
                setK5('N');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('N');
            if (K7 == '' && K6 != '')
                setK7('N');
            if (K8 == '' && K7 != '')
                setK8('N');
            if (K9 == '' && K8 != '')
                setK9('N');
            if (K10 == '' && K9 != '')
                setK10('N');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('N');
            if (K12 == '' && K11 != '')
                setK12('N');
            if (K13 == '' && K12 != '')
                setK13('N');
            if (K14 == '' && K13 != '')
                setK14('N');
            if (K15 == '' && K14 != '')
                setK15('N');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('N');
            if (K17 == '' && K16 != '')
                setK17('N');
            if (K18 == '' && K17 != '')
                setK18('N');
            if (K19 == '' && K18 != '')
                setK19('N');
            if (K20 == '' && K19 != '')
                setK20('N');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('N');
            if (K22 == '' && K21 != '')
                setK22('N');
            if (K23 == '' && K22 != '')
                setK23('N');
            if (K24 == '' && K23 != '')
                setK24('N');
            if (K25 == '' && K24 != '')
                setK25('N');
        }
    }
    function handleM() {
        if (i == 1) {
            if (K == '')
                setK('M');
            if (K2 == '' && K != '')
                setK2('M');
            if (K3 == '' && K2 != '')
                setK3('M');
            if (K4 == '' && K3 != '')
                setK4('M');
            if (K5 == '' && K4 != '')
                setK5('M');
        }
        if (i == 2) {
            if (K6 == '')
                setK6('M');
            if (K7 == '' && K6 != '')
                setK7('M');
            if (K8 == '' && K7 != '')
                setK8('M');
            if (K9 == '' && K8 != '')
                setK9('M');
            if (K10 == '' && K9 != '')
                setK10('M');
        }
        if (i == 3) {
            if (K11 == '')
                setK11('M');
            if (K12 == '' && K11 != '')
                setK12('M');
            if (K13 == '' && K12 != '')
                setK13('M');
            if (K14 == '' && K13 != '')
                setK14('M');
            if (K15 == '' && K14 != '')
                setK15('M');
        }
        if (i == 4) {
            if (K16 == '')
                setK16('M');
            if (K17 == '' && K16 != '')
                setK17('M');
            if (K18 == '' && K17 != '')
                setK18('M');
            if (K19 == '' && K18 != '')
                setK19('M');
            if (K20 == '' && K19 != '')
                setK20('M');
        }
        if (i == 5) {
            if (K21 == '')
                setK21('M');
            if (K22 == '' && K21 != '')
                setK22('M');
            if (K23 == '' && K22 != '')
                setK23('M');
            if (K24 == '' && K23 != '')
                setK24('M');
            if (K25 == '' && K24 != '')
                setK25('M');
        }
    }
    useKey("Enter", handleEnter);
    useKey("Space", handleBack);
    useKey("KeyQ", handleQ);
    useKey("KeyW", handleW);
    useKey("KeyE", handleE);
    useKey("KeyR", handleR);
    useKey("KeyT", handleT);
    useKey("KeyY", handleY);
    useKey("KeyU", handleU);
    useKey("KeyI", handleI);
    useKey("KeyO", handleO);
    useKey("KeyP", handleP);
    useKey("KeyA", handleA);
    useKey("KeyS", handleS);
    useKey("KeyD", handleD);
    useKey("KeyF", handleF);
    useKey("KeyG", handleG);
    useKey("KeyH", handleH);
    useKey("KeyJ", handleJ);
    useKey("KeyK", handleK);
    useKey("KeyL", handleL);
    useKey("KeyZ", handleZ);
    useKey("KeyX", handleX);
    useKey("KeyC", handleC);
    useKey("KeyV", handleV);
    useKey("KeyB", handleB);
    useKey("KeyN", handleN);
    useKey("KeyM", handleM);

    return (
        <div className="Typing">
            <input maxLength={1} name='1' value={K}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='2' value={K2}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='3' value={K3}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='4' value={K4}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='5' value={K5}></input>
            <br></br>
            <br></br>
            <input maxLength={1} name='6' value={K6}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='7' value={K7}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='8' value={K8}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='9' value={K9}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='10' value={K10}></input>
            <br></br>
            <br></br>
            <input maxLength={1} name='11' value={K11}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='12' value={K12}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='13' value={K13}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='14' value={K14}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='15' value={K15}></input>
            <br></br>
            <br></br>
            <input maxLength={1} name='16' value={K16}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='17' value={K17}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='18' value={K18}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='19' value={K19}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='20' value={K20}></input>
            <br></br>
            <br></br>
            <input maxLength={1} name='21' value={K21}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='22' value={K22}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='23' value={K23}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='24' value={K24}></input>
            &nbsp;&nbsp;
            <input maxLength={1} name='25' value={K25}></input>
            <br></br>
            <br></br>
        </div>
    );
}

export default Game;