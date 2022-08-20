import Banner from "../assets/Home/banner.jpg";
import "../style/Home.scss";
import SiteView from "../assets/Home/site-view2.png";
import Right from "../assets/Home/Yasuo-Yone-2-right.jpg";
import Left from "../assets/Home/Yasuo-Yone-2-left.jpg";
import Ahri from "../assets/Home/ahri6.jpg";
import { useRef } from "react";

const Home = () => {
  const bottomRef = useRef(null);
  function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    // console.log("cc");
    // console.log(document.body.scrollHeight);
    // window.scrollTo(0, document.body.scrollHeight);
  }
  return (
    <div className="hide-scroll" id="div-body">
      <div className="home-content bg-black  text-white">
        <div className="Banner">
          <img
            className="first-image"
            alt="Yasuo banner"
            src={Banner}
            width="100%"
          ></img>
        </div>
        <div className="home-text">
          <h1>Home</h1>
          <hr />
          <p>
            Welcome in <strong>List of Legends ! </strong>
            This site was created in the League of Legends universe. League of
            Legends is a strategic video game created in 2009.
          </p>
          <p>
            Although the game is not new, many players are competing in the
            famous in the famous Summoner's Rift mode. The game is also very
            famous for its esport competition, which is very popular at the
            moment. popular at the moment. In this game, 2 teams of 5 players
            (summoners) compete against each other to destroy the opposing
            nexus. Each player must play one of the 157 champions currently
            available. Each champion is unique and has its own role to play in a
            game. It is therefore important to know their purpose and role in a
            game.
          </p>
          <p className="last-paragraphe">
            That's why List of Legends exists! The goal is to have
            a simplified view on the different champions of the game, to have
            information on their roles, their types, their functions... You
            You will also be able to have details on the skills of each
            champion.
          </p>
          <hr />
        </div>

        <div>
          <div className="img-vitrine d-flex justify-content-center mb-2">
            <img
              className="site-overview"
              alt="Ahri banner"
              src={Ahri}
              width="100%"
            ></img>
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

        <div className="home-video"></div>
        <div className="home-text">
          <h1>Content</h1>
          <hr />
          <p>
          And yeah, you'll be able to customize your filters to find the
          champions you're interested in, and see the current meta. As for the features, check out{" "}
            <a onClick={() => scrollToBottom()}>
              <strong className="underline">
                {" "}
                the little screen below!
              </strong>
            </a>
          </p>
          <p>
          You can sort the list of champions using the right-hand side: the 
            <strong> filters</strong>. You can filter the champions according to : 
          </p>

          <ul>
            <li>
              their <strong>positions</strong> played in the summoner's rift
              (Bottom, Support, Top, Mid and Jungle)
            </li>
            <li>
              their types of <strong>damages</strong> (AP : Powers Attacks, AD:
              Damages Attack)
            </li>
            <li>
              their <strong>functions </strong>(Marksman, Tanks, Assassins, Support,
              FIghters)
            </li>
            <li>
              their <strong>worlds</strong> (you will see, there is more than you think...)
            </li>
            <li>
            you can also search by the <strong>name</strong> of the champion with the search bar
            </li>
          </ul>

          <p className="last-paragraphe">
          And above all, don't hesitate to <strong>click</strong> on the champions' cards. To do this, go to the{" "}
            <a href="/Look">
              <strong className="underline"> Look </strong>
            </a>
            page !
          </p>
        </div>

        <div className="home-video mb-16 scroll-container" ref={bottomRef}>
          <img
            className="scroll-page"
            src={SiteView}
            width="100%"
            alt="Presentation site"
          ></img>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Home;
