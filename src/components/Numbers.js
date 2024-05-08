import React from 'react';
import '../assets/styles/Numbers.scss';
import NumberCounter from './NumberCounter';

function  Number() {
    return (
        <>
        <div className='numbers'>
            <h1>ASK GHANA IN NUMBERS</h1>
                <div id='numbersCon'>
                    <div>
                        <NumberCounter  end={50} duration={2000} />
                        <h1>INDUSTRY EXPERIENCE</h1>
                    </div>
                    <div>
                    <NumberCounter end={27} duration={2000} />
                        <h1>PROJECTS</h1>
                    </div>
                    <div>
                    <NumberCounter end={9900} duration={2000} />
                        <h1>IMPACTED LIVES</h1>
                    </div>
                    <div>
                    <NumberCounter end={8872} duration={2000} />
                        <h1>INVESTED HOURS</h1>
                    </div>
                    <div>
                    <NumberCounter end={3} duration={2000} />
                        <h1>REGIONAL PRESENCE</h1>
                    </div>
                 </div>

            </div>
        </>
    );
}

export default Number;