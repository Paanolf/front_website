import './timeline.css';

function Timeline() {
    return(
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">Maintenant</time>
                <div className="text-lg font-black">D&eacute;veloppeur - TCAT (Transports en Commun de l'Agglom&eacute;ration Troyenne)</div>
                <p>
                    Gestion de l'intranet, ainsi que le d&eacute;veloppement de projet en interne (outils divers et vari&eacute;)
                </p>
                <p className='prose prose-grey md:text-end'><i>
                    PHP, HTML, CSS, JS/TS, Angular, MSSQL, Apache, Kotlin (Android), Laravel
                </i></p>
            </div>
            <hr/>
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic">2018</time>
                <div className="text-lg font-black">Licence MIM (Alternance) - IUT Troyes / Gravotech Marking</div>
                <p>
                    Licence en alternance afin de paufiner mes acquis. Le petit plus ? Un projet tutor&eacute; effectu&eacute;
                    en tant qu'entreprise associative afin de d&eacute;marcher des vrais projets utiles !
                </p>
                <p className='prose prose-grey'><i>
                    PHP, HTML, CSS, JS/TS, VueJS (v2), MySQL, Apache, Ionic, Laravel
                </i></p>
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2016</time>
                <div className="text-lg font-black">DUT Informatique - IUT Reims</div>
                <p>
                    C'est &agrave; ce moment l&agrave; que j'ai d&eacute;couvert ma passion pour le code.
                </p>
                <p className='prose prose-grey'><i>
                    PHP (et son framework Symfony), HTML, CSS, JS, C, C++, Java, Ruby (Et son framework Rails), WebGL 
                </i></p>
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic">2014</time>
                <div className="text-lg font-black">Bac STI2D option SIN - Lyc&eacute;e les lombards, Troyes</div>
                <p>(Au cas o&ugrave; que ça vous int&eacute;resse)</p>
                <p className='prose prose-grey'><i>BASIC (Picbasic)</i></p>
            </div>
            <hr />
        </li>
        </ul>
    )
}

export default Timeline