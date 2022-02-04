import './nonexistant.css';
import Eyeball from './untitled.webm';
import Navbar from './Navbar/Navbar.js';
import Techs from './Techs/Techs.js';



function App() {

    const webInfo = {
        title: 'TACITVM',
        experience: 'EXPERIENCE',
        gh: 'GITHUB',
        firstpart: 'We, as human beings, are ruled by our senses and one of them is king. Everything we can see is thought as real, and abstractically as knowledge.',
        secondpart: 'As a front-end developer my goal is to make you see what you need and get it done.',
        skills: 'SKILLS',
    }

  return (
    <section className="App">
        <section id='navbar'>
            <Navbar
            webInfo={webInfo}
            />
        </section>
        <article id='introduction-text'>
            <p>{webInfo.firstpart}</p>
            <p>{webInfo.secondpart}</p>
        </article>
        <video autoPlay loop muted id='eyeball'>
            <source src={Eyeball} type='video/webm'/>
        </video>
        <section id='techs-container'>
            <div className='area-title'>
                <h2>{webInfo.skills}</h2>
            </div>
            <Techs />
        </section>

    </section>
  );
}

export default App;
