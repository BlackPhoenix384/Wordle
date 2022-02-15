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

const Keyboard = () => {
    function handleQ() {
        document.getElementById('q').style.color='black';
        document.getElementById('q').style.backgroundColor='grey';
    }
    function handleW() {
        document.getElementById('w').style.color='black';
        document.getElementById('w').style.backgroundColor='grey';
    }
    function handleE() {
        document.getElementById('e').style.color='black';
        document.getElementById('e').style.backgroundColor='grey';
    }
    function handleR() {
        document.getElementById('r').style.color='black';
        document.getElementById('r').style.backgroundColor='grey';
    }
    function handleT() {
        document.getElementById('t').style.color='black';
        document.getElementById('t').style.backgroundColor='grey';
    }
    function handleY() {
        document.getElementById('y').style.color='black';
        document.getElementById('y').style.backgroundColor='grey';
    }
    function handleU() {
        document.getElementById('u').style.color='black';
        document.getElementById('u').style.backgroundColor='grey';
    }
    function handleI() {
        document.getElementById('i').style.color='black';
        document.getElementById('i').style.backgroundColor='grey';
    }
    function handleO() {
        document.getElementById('o').style.color='black';
        document.getElementById('o').style.backgroundColor='grey';
    }
    function handleP() {
        document.getElementById('p').style.color='black';
        document.getElementById('p').style.backgroundColor='grey';
    }
    function handleA() {
        document.getElementById('a').style.color='black';
        document.getElementById('a').style.backgroundColor='grey';
    }
    function handleS() {
        document.getElementById('s').style.color='black';
        document.getElementById('s').style.backgroundColor='grey';
    }
    function handleD() {
        document.getElementById('d').style.color='black';
        document.getElementById('d').style.backgroundColor='grey';
    }
    function handleF() {
        document.getElementById('f').style.color='black';
        document.getElementById('f').style.backgroundColor='grey';
    }
    function handleG() {
        document.getElementById('g').style.color='black';
        document.getElementById('g').style.backgroundColor='grey';
    }
    function handleH() {
        document.getElementById('h').style.color='black';
        document.getElementById('h').style.backgroundColor='grey';
    }
    function handleJ() {
        document.getElementById('j').style.color='black';
        document.getElementById('j').style.backgroundColor='grey';
    }
    function handleK() {
        document.getElementById('k').style.color='black';
        document.getElementById('k').style.backgroundColor='grey';
    }
    function handleL() {
        document.getElementById('l').style.color='black';
        document.getElementById('l').style.backgroundColor='grey';
    }
    function handleZ() {
        document.getElementById('z').style.color='black';
        document.getElementById('z').style.backgroundColor='grey';
    }
    function handleX() {
        document.getElementById('x').style.color='black';
        document.getElementById('x').style.backgroundColor='grey';
    }
    function handleC() {
        document.getElementById('c').style.color='black';
        document.getElementById('c').style.backgroundColor='grey';
    }
    function handleV() {
        document.getElementById('v').style.color='black';
        document.getElementById('v').style.backgroundColor='grey';
    }
    function handleB() {
        document.getElementById('b').style.color='black';
        document.getElementById('b').style.backgroundColor='grey';
    }
    function handleN() {
        document.getElementById('n').style.color='black';
        document.getElementById('n').style.backgroundColor='grey';
    }
    function handleM() {
        document.getElementById('m').style.color='black';
        document.getElementById('m').style.backgroundColor='grey';
    }

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
        <div className="Key">
            <div className="F1">
                <div className="button" id='q'>
                    Q
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='w'>
                    W
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='e'>
                    E
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='r'>
                    R
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='t'>
                    T
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='y'>
                    Y
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='u'>
                    U
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='i'>
                    I
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='o'>
                    O
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='p'>
                    P
                </div>
            </div>
            <br></br>
            <div className="F2">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="button" id='a'>
                    A
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='s'>
                    S
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='d'>
                    D
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='f'>
                    F
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='g'>
                    G
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='h'>
                    H
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='j'>
                    J
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='k'>
                    K
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='l'>
                    L
                </div>
            </div>
            <br></br>
            <div className="F3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="button" id='z'>
                    Z
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='x'>
                    X
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='c'>
                    C
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='v'>
                    V
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='b'>
                    B
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='n'>
                    N
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="button" id='m'>
                    M
                </div>
            </div>
        </div>
    );
}

export default Keyboard;