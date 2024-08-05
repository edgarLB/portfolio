import CampusTalkIMG from "../assets/CampusTalk.png";
import Placeholder from "../assets/placeholder.png";
import GuessWho from "../assets/GuessWho.png";
import AI from "../assets/AI.png";
import porfolio from "../assets/portfolio.png";

function Project(id, name, description, link, screenshot, techs) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
    this.screenshot = screenshot;
    this.techs = techs;
}

const proj1 = new Project(1, "Campus Talk", "A Reddit clone tailored for college students, featuring real-time updates for posts, edits, deletions, and replies. This social media platform requires student accounts for participation and integrates APIs to include college information and Giphy support for a dynamic user experience.", "https://google.com", CampusTalkIMG, [2, 3, 4, 7, 8]);
const proj2 = new Project(2, "Portfolio", "You’re looking at it! Developed to give recruiters like you a quick summary about myself while showcasing my abilities. I focused on making the website fully responsive and providing a unique experience on mobile.", "https://github.com/edgarLB/portfolio", porfolio, [2, 3, 7, 8]);
const proj3 = new Project(3, "Guess Who", "I digitized the classic board game, Guess Who. I ensured code quality by identifying reusable components and structuring them into views. I utilized mapping and state variables to maintain efficient and clean code. The app is a work in progress, with plans to implement multiplayer functionality using GameKit.", "https://github.com/edgarLB/Guesswho", GuessWho, [5]);
const proj4 = new Project(4, "Animal Identification AI", "A Convolutional Neural Network model designed to identify animals in images. I developed and trained three deep learning models using TensorFlow on a dataset of 28k images, fine-tuning parameters to optimize performance. I evaluated the models' recall and accuracy using the Keras library in Python.", "https://github.com/edgarLB/Animal-Classification", AI, [1, 10, 11]);

const projects = [proj1, proj2, proj3, proj4];

export default projects;