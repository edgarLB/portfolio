import CampusTalkIMG from "../assets/CampusTalk.png";
import Placeholder from "../assets/placeholder.png";
import GuessWho from "../assets/GuessWho.png";
import AI from "../assets/AI.png";
import porfolio from "../assets/portfolio.png";

function Project(name, description, link, screenshot) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.screenshot = screenshot;
}

const proj1 = new Project("Campus Talk", "Description", "https://google.com", CampusTalkIMG);
const proj2 = new Project("Portfolio", "Description", "https://github.com/edgarLB/portfolio", porfolio);
const proj3 = new Project("Guess Who", "Description", "https://github.com/edgarLB/Guesswho", GuessWho);
const proj4 = new Project("Animal Identification AI", "Description", "https://github.com/edgarLB/Animal-Classification", AI);

const projects = [proj1, proj2, proj3, proj4];

export default projects;