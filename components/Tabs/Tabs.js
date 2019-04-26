class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.cards-container .card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.cards-container .card[data-tab='${this.tabData}']`);
    }

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tabs .topics .tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(active => active.classList.remove('active-tab'));

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.cards-container .card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = 'none');
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('.active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
//Adding another tab --> BlockChain
let newBlockchainTab = document.createElement('div');
newBlockchainTab.dataset.tab = 'blockchain';
newBlockchainTab.classList.add('tab');
newBlockchainTab.textContent = 'BLOCKCHAIN';

let topics = document.querySelector('.tabs .topics');
topics.appendChild(newBlockchainTab);

//Adding Blockchain articles
let bcCard = document.createElement('div');
bcCard.classList.add('card');
bcCard.dataset.tab = 'blockchain';

let bcCardHeadline = document.createElement('div');
bcCardHeadline.classList.add('headline');
bcCardHeadline.textContent = 'What is Blockchain Technology? A Step-by-Step Guide For Beginners';

let bcCardAuthor = document.createElement('div');
bcCardAuthor.classList.add('author');

bcCard.appendChild(bcCardHeadline);
bcCard.appendChild(bcCardAuthor);

let bcCardImgContainer = document.createElement('div');
bcCardImgContainer.classList.add('img-container');

bcCardAuthor.appendChild(bcCardImgContainer);

let bcCardImg = document.createElement('img');
bcCardImg.src = 'https://blockgeeks.com/wp-content/uploads/2016/09/http-2F2Fwww.iankhan.com2F-1-150x150.png';

bcCardImgContainer.appendChild(bcCardImg);

let bcCardSpan = document.createElement('span');
bcCardSpan.textContent = 'By Ian Khan, TEDx Speaker|Author|Technology Futurist --> Blockgeeks';

bcCardImgContainer.appendChild(bcCardSpan);

//bcCard2
let bcCard2 = document.createElement('div');
bcCard2.classList.add('card');
bcCard2.dataset.tab = 'blockchain';

let bcCard2Headline = document.createElement('div');
bcCard2Headline.classList.add('headline');
bcCard2Headline.textContent = 'Top 10 Friendly Countries For Blockchain Startups';

let bcCard2Author = document.createElement('div');
bcCard2Author.classList.add('author');

bcCard2.appendChild(bcCard2Headline);
bcCard2.appendChild(bcCard2Author);

let bcCard2ImgContainer = document.createElement('div');
bcCard2ImgContainer.classList.add('img-container');

bcCard2Author.appendChild(bcCard2ImgContainer);

let bcCard2Img = document.createElement('img');
bcCard2Img.src = 'https://www.blockchain-council.org/wp-content/uploads/2018/09/Logo-500x96.png';
bcCard2Img.style.width = '150px';
bcCard2Img.style.height = '40px';

bcCard2ImgContainer.appendChild(bcCard2Img);

let bcCard2Span = document.createElement('span');
bcCard2Span.textContent = 'By Blockchain Council';

bcCard2ImgContainer.appendChild(bcCard2Span);



//appending new bcCard with all its children to the collection of cards.
let cardContainer = document.querySelector('.cards-container');
cardContainer.appendChild(bcCard);
cardContainer.appendChild(bcCard2);

let tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));