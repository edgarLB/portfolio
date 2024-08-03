import CampusTalkIMG from "../assets/CampusTalk.png";
import Placeholder from "../assets/placeholder.png";
import GuessWho from "../assets/GuessWho.png";
import AI from "../assets/AI.png";

function Project(name, description, link, screenshot) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.screenshot = screenshot;
}

const proj1 = new Project("Campus Talk", "Description", "https://google.com", CampusTalkIMG);
const proj2 = new Project("Portfolio", "Description", "https://google.com", Placeholder);
const proj3 = new Project("Guess Who", "Description", "https://google.com", GuessWho);
const proj4 = new Project("Animal Identification AI", "Description", "https://google.com", AI);

const projects = [proj1, proj2, proj3, proj4];

export default projects;