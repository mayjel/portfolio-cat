import {createImage} from "./img.js"
import {createInfo} from "./info.js"


let container = document.getElementById("container")

const data = {
    titleOne: 'Serene Moments: A Playful Dance with Nature',
    titleTwo: ' Tales of Tail-Wagging Adventures',
    paragraphOne: 'As the sun bathes the grassy field in a warm glow, a fluffy, adorable dog frolics joyfully amidst the lush greenery. With every bound, its ears flop in the breeze, adding to the endearing sight. Its tail wags furiously, a testament to the sheer delight it finds in this simple act of play. With nimble paws, it chases after a fluttering butterfly, its eyes sparkling with excitement. Each leap and twist brings a new level of exuberance, filling the air with an infectious energy. Passersby cannot help but pause and smile, captivated by the sheer innocence and happiness radiating from this charming canine.',
    paragraphTwo:'A heartwarming collection of stories that celebrate the special bond between humans and their canine companions. Through a series of captivating narratives, readers are transported into a world where wagging tails and wet noses bring joy and laughter to every corner. From heartwarming tales of rescue dogs finding their forever homes to adventurous escapades in the great outdoors, each story is filled with warmth, humor, and unconditional love. Whether its overcoming obstacles, forging new friendships, or simply enjoying the simple pleasures of life, these tales remind us of the profound impact that dogs have on our lives. With each turn of the page, "Pawsitive Vibes" serves as a reminder to cherish the moments spent with our furry friends and to embrace the joy they bring into our lives.',
    buttonOne: 'Contact Us',
    buttonTwo: 'About Us',
    buttonThree:'Visit Us',
    buttonFour: 'Comments!!',
    myImage: 'cutie dog.jpg'
  };

  const{titleOne,titleTwo ,paragraphOne, paragraphTwo, buttonOne,buttonTwo,buttonThree, buttonFour ,myImage} = data


  container.append(createInfo(titleOne, titleTwo, paragraphOne, paragraphTwo, buttonOne, buttonTwo, buttonThree, buttonFour,myImage))
  container.append(createImage(myImage))
