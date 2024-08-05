import kerasIcon from '../assets/keras.svg'
import tensorIcon from '../assets/tensorflow.svg'
function Tech(name, icon, color, id) {
    this.name = name;
    this.icon = icon;
    this.color = color;
    this.id = id;
}

const techs = [
    new Tech("Python", "fa-brands fa-python", "#3870a1", 1),
    new Tech("JavaScript", "fa-brands fa-js", "#e2bc25", 2),
    new Tech("React", "fa-brands fa-react", "#00d8ff", 3),
    new Tech("Node", "fa-brands fa-node-js", "#4caf50", 4),
    new Tech("Swift", "fa-brands fa-swift", "#fc9039", 5),
    new Tech("Java", "fa-brands fa-java", "#5382a1", 6),
    new Tech("HTML", "fa-brands fa-html5", "#e44d26", 7),
    new Tech("CSS", "fa-brands fa-css3-alt", "#2196f3", 8),
    new Tech("Git", "fa-brands fa-git-alt", "#f05133", 9),
    new Tech("TensorFlow", kerasIcon, "#f05133", 10),
    new Tech("Keras", tensorIcon, "#f05133", 11),
]

export default techs;