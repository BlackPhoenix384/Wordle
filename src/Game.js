import { useEffect, useState } from "react";

const Game = () => {
    const str = ['A', 'B' ,'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function Press() {
        useEffect(() => {
            function handle(event) {
                str.forEach(check);
                function check(items) {
                    if (event.key == items) {
                        if (i == 1) {
                            if (K == '')
                                setK(event.key);
                            if (K2 == '' && K != '')
                                setK2(event.key);
                            if (K3 == '' && K2 != '')
                                setK3(event.key);
                            if (K4 == '' && K3 != '')
                                setK4(event.key);
                            if (K5 == '' && K4 != '')
                                setK5(event.key);
                        }
                        if (i == 2) {
                            if (K6 == '')
                                setK6(event.key);
                            if (K7 == '' && K6 != '')
                                setK7(event.key);
                            if (K8 == '' && K7 != '')
                                setK8(event.key);
                            if (K9 == '' && K8 != '')
                                setK9(event.key);
                            if (K10 == '' && K9 != '')
                                setK10(event.key);
                        }
                        if (i == 3) {
                            if (K11 == '')
                                setK11(event.key);
                            if (K12 == '' && K11 != '')
                                setK12(event.key);
                            if (K13 == '' && K12 != '')
                                setK13(event.key);
                            if (K14 == '' && K13 != '')
                                setK14(event.key);
                            if (K15 == '' && K14 != '')
                                setK15(event.key);
                        }
                        if (i == 4) {
                            if (K16 == '')
                                setK16(event.key);
                            if (K17 == '' && K16 != '')
                                setK17(event.key);
                            if (K18 == '' && K17 != '')
                                setK18(event.key);
                            if (K19 == '' && K18 != '')
                                setK19(event.key);
                            if (K20 == '' && K19 != '')
                                setK20(event.key);
                        }
                        if (i == 5) {
                            if (K21 == '')
                                setK21(event.key);
                            if (K22 == '' && K21 != '')
                                setK22(event.key);
                            if (K23 == '' && K22 != '')
                                setK23(event.key);
                            if (K24 == '' && K23 != '')
                                setK24(event.key);
                            if (K25 == '' && K24 != '')
                                setK25(event.key);
                        }
                    }
                }
                if (event.key == ' ') {
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
                if (event.key == 'Enter') {
                    if (i == 1 && K5 != '')
                        seti(2);
                    if (i == 2 && K10 != '')
                        seti(3);
                    if (i == 3 && K15 != '')
                        seti(4);
                    if (i == 4 && K20 != '')
                        seti(5);
                    if (K25 != '') {
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
            }
            document.addEventListener("keypress", handle);
            return () => document.removeEventListener("keypress", handle);
        });
    }
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
    Press();
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
