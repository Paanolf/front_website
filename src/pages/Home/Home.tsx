import { Link } from 'react-router-dom'
import './home.css'


function Home() {

  return (
      <>
        <div className="hero mb-3">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/img/me.webp" className="max-w-sm rounded-lg shadow-2xl" alt="Photo de Nicolas MEZENEN" />
            <div>
              <h1 className="text-5xl font-bold">Nicolas Mezenen &mdash; D&eacute;veloppeur</h1>
              <div className="py-6">
              <p>
                Amoureux de caf&eacute;, de jeux vid&eacute;o et de code bien indent&eacute;
              </p>
              </div>
              <Link className="btn" to="/about">Plus sur moi</Link>
            </div>
          </div>
        </div>
        <div className="flex-auto m-5">
          <h2 className="text-3xl font-bold text-center mb-5">Pourquoi ce site ?</h2>
          <p className="mb-3">
            Ce site me sert surtout de vitrine pour mon savoir faire.
          </p>
          <p className="mb-3">
            Il cherche à mettre en avant ce que je sais faire sans pour autant chercher le truc le plus opti qu'il soit.
          </p>
          <p>
            Pour le moment austère et petit, voici deux choses de ce que je prévois : 
          </p>
          <ul className="list-disc ml-10">
            <li>Une section "playground" : elle sera dédié a mes essais de technos.</li>
            <li>Un blog : pour me lire, j'y écrirai mes pensées/du trivia ou des expériences.</li>
          </ul>
        </div>
        <div className="flex-auto m-5">
          <h2 className="text-3xl font-bold text-center mb-5">Vous êtes recruteur ? Potentiel client ? Visiteur ?</h2>
          <p className="mb-3">
            Dans tout les cas, vous pouvez passez sur mon <a className="link" href="https://github.com/Paanolf">Github</a>
          </p>
          <p className="mb-3">
            Vous pouvez me contacter aussi en <Link className="link" to="/contact">cliquant ici</Link>.
          </p>
        </div>
      </>
  )
}

export default Home
