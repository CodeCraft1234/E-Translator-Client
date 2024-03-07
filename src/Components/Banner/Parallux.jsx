

import { Parallax, Background } from 'react-parallax';

const Parallux = () => {
    return (
        <div>

<Parallax
        blur={{ min: -15, max: 15 }}
        bgImage='https://i.ibb.co/zRfFspr/translate-english-to-french-spanish-and-arabic.jpg'
        bgImageAlt="the dog"
        strength={-100}
    >
       
        <div style={{ height: '800px' }} />
    </Parallax>
            {/* <Parallax blur={10} bgImage="https://i.ibb.co/XsZfWQq/El-mejor-ordenador-gaming.jpg" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax> */}
        </div>
    );
};

export default Parallux;