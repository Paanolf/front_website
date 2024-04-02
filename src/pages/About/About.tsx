import Timeline from '../../components/timeline/Timeline';
import './about.css';

function About() {
    return(
    <>
        <div className="flex-auto m-5">
            <h2 className="text-center text-3xl font-bold pb-10">Une petite pr&eacute;sentation s'impose, non ?</h2>
            <p>
                Passionn&eacute; par l'informatique depuis ma tendre enfance, 
                il &eacute;tait tout naturel pour moi de me tourner vers ce domaine pour ma carri&egrave;re professionnelle.
            </p>
            <p>
                Mais l'informatique, c'est vaste, et j'ai d&ucirc; choisir ce que j'allais y faire. <br />
                C'est au moment de ma terminale, et avec  les choix d'&eacute;tudes sup' (sur feu Admission Post-Bac, paix &agrave; son &acirc;me) 
                que je me suis d&eacute;cid&eacute; : j'irai en DUT Informatique, car apr&egrave;s tout, ça sonne assez g&eacute;n&eacute;raliste.
            </p>
            <p>
                Finalement, c'&eacute;tais centr&eacute; sur le d&eacute;veloppement, surtout syst&egrave;me en Java puis en C++.
                Ces ann&eacute;es de DUT m'ont permis d'aimer la prog qui me semblait hors de ma port&eacute;e.
            </p>
            <p>
                Aujourd'hui, le dev fait partie de ma vie, comme une seconde nature. <br />
                Le web est ce que je fais le plus, bien que le dev logiciel est encore pr&eacute;sent r&eacute;guli&egrave;ment.
                Et quand on a fait du Java ou du C++, les technos web, c'est un peu le niveau facile.
            </p>
        </div>
        <div className="pt-10">
            <h2 className="text-3xl font-bold text-center pb-10">Mon parcours</h2>
            <Timeline />
        </div>
    </>
    );
}

export default About;