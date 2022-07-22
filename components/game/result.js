import React from 'react';
import Lives from './lives';

export default function Result({ actualWord, msg, won }) {
    let lives = 0;
    if (won) lives = -1;

    return (
        <>
            <div className="game-wrapper">
                <div className='result-wrapper'>


                    <div className="result-pane">
                        <h1 className={`result-pane__header ${won ? "success" : "danger"}`}>
                            {msg}
                        </h1>
                        <h1 className={`result-pane__header ${won ? "success" : "danger"}`}>
                            {actualWord}
                        </h1>
                        <button
                            className={`res-btn`}
                            onClick={() => {
                                // window.location.reload(false); // just refreshing it for now....
                            }}>
                            <span className="gradient-text">Restart</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}