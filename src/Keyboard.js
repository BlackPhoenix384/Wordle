import { useEffect, useState } from "react";


const Keyboard = () => {
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
