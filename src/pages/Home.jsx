import Banner from "../assets/Home/banner.jpg";
import "../style/Home.scss";
import SiteView from "../assets/Home/site-view2.png";
import Right from "../assets/Home/Yasuo-Yone-2-right.jpg";
import Left from "../assets/Home/Yasuo-Yone-2-left.jpg";
import Ahri from "../assets/Home/ahri6.jpg";

const Home = () => {
    return (
        <div className="hide-scroll">
        <div className="home-content bg-black  text-white">
            <div className="Banner">
                <img className="first-image" alt="Yasuo banner" src={Banner} width="100%"></img>
            </div>
            <div className="home-text">
                <h1>Home</h1>
                <hr />
                <p>
                    Bienvenue sur <strong>List of Legends ! </strong>
                    Ce site a été réalisé dans l'univers de League of Legends. League of
                    Legends est un jeu video stratégique crée en 2009.
                </p>
                <p>
                    Bien que le jeu ne soit pas récent, énormément de joueur s'affrontent
                    dans le fameux mode Faille de l'invocateur. Le jeu est également très
                    réputé pour sa compétition esport, très suivi et très populaire a
                    l'heure actuelle. Dans ce jeu, 2 équipes de 5 joueurs (invocateurs)
                    s'affrontent afin de détruire le nexus adverse. Chaque joueur doit
                    jouer un champion parmis les 157 actuellement disponibles. Chaque
                    champion est unique et son propre role à jouer dans une partie. Il est
                    donc important de connaître leur but et leur role dans une partie.
                </p>
                <p className="last-paragraphe">
                    C'est pour cela que List of Legends existe ! Le but, c'est d'avoir une
                    vue simplifiée sur les différents champions du jeu, d'avoir des
                    informations sur leurs roles, leurs types, leurs fonctions... Vous
                    pourrez également avoir des détails sur les compétences de chaque
                    champion.
                </p>
                <hr />
            </div>

            <div >
                <div className="img-vitrine d-flex justify-content-center mb-2">
                    <img className="site-overview" alt="Ahri banner" src={Ahri} width="100%"></img>
                </div>

                <div className="row img-vitrine">
                    <div className="col mx-1 px-0">
                        <img src={Left} alt="Yasuo" width="100%"></img>
                    </div>
                    <div className="col mx-1 px-0">
                        <img src={Right} alt="Yone" width="100%"></img>
                    </div>
                </div>
            </div>

            <div className="home-video">Video</div>

            <div className="home-text" data-aos="fade-right">
                <h1>Content</h1>
                <hr />
                <p>
                    Et ouais, tu vas pouvoir customiser tes filtres pour trouver les
                    champions qui t'interressent, et de voir la meta actuelle. Pour ce qui
                    est des fonctionnalités, regarde <a href="dd"><strong className="underline"> le petit screen ci-dessous !</strong></a>
                </p>
                <p>
                    Tu peux trier la liste des champions à l'aide de la partie droite, les
                    <strong> filtres</strong>. Tu peux filtrer les champions en fonction de :
                </p>

                <ul>
                    <li>
                        leurs <strong>postes</strong> joués dans la faille (ADC,Support,Top,Mid et Jungle)
                    </li>
                    <li>
                        leurs types de <strong>dégats</strong> (AP : Powers Attacks, AD: Damages Attack)
                    </li>
                    <li>
                        leurs <strong>types </strong>(tireurs, tanks, assassins, support, combattants)
                    </li>
                    <li>
                        leurs <strong>mondes</strong> (tu verras, il y en plus que tu penses...)
                    </li>
                    <li>
                        tu peux aussi chercher par le <strong>nom</strong> du champion grace à la barre de recherche
                    </li>
                </ul>

                <p className="last-paragraphe">
                    Et surtout, n'hésites pas à <strong>cliquer</strong> sur les cartes des champions
                    Pour cela, rendez vous sur la page <a href="/Look"><strong className="underline">Look !</strong></a>
                </p>

            </div>

            <div className="home-video mb-16 scroll-container">
                <img className="scroll-page" src={SiteView}  width="100%" alt="Presentation site"></img>
            </div>

            <hr />
        </div>
    </div>
    );
};

export default Home;
