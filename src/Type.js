import { useState, useEffect } from "react";
import Game from './Game';
import Keyboard from './Keyboard';

const Type = () => {
    const [load, setload] = useState(true);
    const [notload, setnotload] = useState(null);
    const [x, setx] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setload(null);
            setnotload(true);
        }, 2500);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (x < 100) {
                setx(x + 1);
            }
        },10);
    })
    return (
        <div>
            {load && <div><h1>Loading</h1><div className="load"></div><p>{x + '%'}</p></div>}
            {notload && <Game />}
            <br></br>
            <br></br>
            {notload && <Keyboard />}
        </div>
    );
}
export default Type;