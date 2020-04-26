`use strict`;

const posts = [
  {
    img: "https://placeimg.com/400/150/people",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/animals",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  },
  {
    img: "https://placeimg.com/400/150/tech",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  },{
    img: "https://placeimg.com/400/150/architecture",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const grid = document.querySelector('.card__grid');
const elements = cteatePostCard(posts);

console.log(elements);

grid.append(...elements);

function cteatePostCard(posts){
  return posts.reduce((acc,el) => acc.concat(createCards(el)),[]);
};

// function cteateCardsList(arr){
//   const elements =[];

// arr.forEach(post => {
//   const el = createCards(post);
//   elements.push(el);
// } )
// return elements;
// };

function createCards({img, title, text, link}) {

const post__image = document.createElement ('img');
post__image.classList.add ('post__image');
post__image.src = img;
post__image.alt = 'post__image';

const post = document.createElement('div');
post.classList.add('post');

const post__title = document.createElement('h2');
post__title.textContent = title;
post__title.classList.add('post__title');

const post__description = document.createElement('p');
post__description.classList.add('post__description');
post__description.textContent = text;

const post__link = document.createElement('a');
post__link.classList.add('post__link');
post__link.href = link;
post__link.textContent = 'Ссылка';

post.append(post__image, post__title, post__description, post__link);

return post;

}

