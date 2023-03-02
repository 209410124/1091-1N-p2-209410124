// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: '何書維',
    job: '老闆',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PEVwc_lnzD_qc2aZh7PaqH4reLAa67T3Pg&usqp=CAU',
    text: '嗨!我叫書維 以後想當老闆',
  },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

const showReview =(person)=>{
  const item =reviews[person];
  console.log('item',item);
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text; 
}




window.addEventListener('DOMContentLoaded',()=>{
  showReview(currentItem);
});


nextBtn.addEventListener('click',()=>{
  currentItem++;
  if(currentItem>=reviews.length){
    currentItem=0;
  }
  //console.log('currentiuem',reviews(currentItem));
  showReview(currentItem);

});
//prevbtn.addEventListener('click',()=>{
 // currentItem--;
 // if(currentItem>=reviews.length){
   // currentItem=0;
 // }
  //console.log('currentiuem',reviews(currentItem));
 // showReview(currentItem);
//});

randomBtn.addEventListener('click',()=>{
  currentItem =Math.floor(Math.random()*reviews.length);
  showReview(currentItem);
});

