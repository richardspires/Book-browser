// book data

const books = [
    {id:1, title:"The Hobbit", author:"J. R. R. Tolkien", genre:"Fantasy", year:1937, rating:4.6, available:false, color:"#2f7a4a", description:"Bilbo Baggins is pulled from his quiet hole into a quest with thirteen dwarves to reclaim their mountain kingom from Smaug. Along the way he finf courge, riddles, and a mysterious ring."
    },
    {id:2, title:"Frankenstein", author:"Mary Shelly", genre:"Science Fiction", year:1818, rating:4.8, available:true, color:"#2d5aa0", description:"A young sceitist, Victor Frankenstein, builds a living creature from stolen parts and then abandons it. The story asks what creators owe to what they created."
    },
    {id:3, title:"Dracula", author:"Bram Stoker", genre:"Horror", year:1897, rating:4.5, available:false, color:"#5a2a6e", description:"Told through letters, dairies, and newspaper clippings, a group of freinds hunts a Transylvanian count who has come to England to spread his curse"
    },
    {id:4, title:"1984", author:"George Orwell", genre:"Science Fiction", year:1949, rating:4, available:true, color:"#7a2a2a", description:"Winston Smith lives under constant surveillince in a totalitarian state and quietly beings to question the party, with consequeces he cannot escape"
    },
    {id:5, title:"And Then There Were None", author:"Agatha Christie", genre:"Mystery", year:1939, rating:4.5, available:true, color:"#38505a", description:"Ten strangers are invited to an island and accused of past crime. One by one are removed, and the surviors realize the killer is amoung them."
    },
    {id:6, title:"Sherlock Homes", author:"Arthur Conan Doyle", genre:"Mystery", year:1892,  rating:4.2, available:false, color:"#6b5a2e", description:"Twelve short case that introduced the sharpest detective on baker street and his loyal frien Dr. Watson"
    },
    {id:7, title:"Jane Erye", author:"charlotte", genre:"Romance", year:1847,   rating:3.8, available:true, color:"#9b3d5a", description:"An orphaned governess falls for her brooding employer, Mr. Rochester, and uncovers the secret hidden in huose."
    },
    {id:8, title:"Treasure Island", author:"Robert Louis Stevenson", genre:"Adventure", year:1883,  rating:4.2, available:false, color:"#b6622a", description:"Young Jim Hawkins joins a voyage to find buried pirate treasure and must otwit the charming and dangerous Long JOhn Sliver"
    },
    {id:9, title:"The Lord of the Rings", author:"J. R. R. Tolkien", genre:"Fantasy", year:1954, rating:5.0, available:true, color:"#1f5f55", description:"Frodo inherits a ringd of terrabile power and set out to with a fellowship to destory it in the fires of mount dooom"
    },
    {id:10, title:"Ready Player One", author:"Ernest cline", genre:"Science Fiction", year:2011, rating:4.7, available:true, color:"#4a2f8a", description:"In 2045, teenager Wade wattshunts for a hidden Easter egg inside a vast virtual world to inherit its creator's fortune."
    },
    {id:11, title:"Alice In Wonder Land", author:"Lewis Carrolls", genre:"Fantasy", year:1865, rating:4.1, available:true, color:"#2a7a8a", description:"Alice chasing a waistcoated White Rabbit into a rabbit hole, plunging her into a dream realm where potions and cakes alter her size, a grinning cat vanishes mid-sentence, and a croquet match with flamingos spirals under the Queen’s furious gaze."
    },
    {id:12, title:"The Notebook", author:"Nicholas Sparks", genre:"Romance", year:1996,
     rating:2.5, available:true, color:"#a8506a", description:"an elderly man reading a love story to a nursing home resident, revealing a romance between a spirited young woman from wealth and a modest laborer. Set in 1940s South Carolina, their bond defies class barriers and survives separation, ambition, and time."
    },
    {id:13, title:"Bleach", author:"Tite Kubo", genre:"Manga", year:2001, rating:5.0, available:true, color:"#d9822b", description:"Ichigo Kurosaki, a teenager who can see spirits, as he gains the powers of a Soul Reaper from Rukia Kuchiki and takes on the duty of protecting humans from Hollows while guiding souls to the afterlife."
    },
    {id:14, title:"One pieces", author:"Eiichiro Oda", genre:"Manga", year:1997, rating:5.0, available:true, color:"#c0392b", description:"It follows the adventures of Monkey D. Luffy and his crew, the Straw Hats, as he searches for the legendary treasure known as the One Piece to become the next King of the Pirates."
    },
    {id:15, title:"Vinland Saga", author:"Makoto yukimura", genre:"Manga", year:2005, rating:4.5, available:true, color:"#3d5a80", description:"he story follows the life of Thorfinn, who becomes involved with Vikings and war following his father's death at the hands of Askeladd. "
    }
];

//users varables
let searchText = ""; //what is types in screach bar
let selectGenre = "All"; 
let minRating = 0; // rating from downbar
let selectedBookId = null; 

const searchInput = document.querySelector(".js-searchInput");
const ratingSelect = document.querySelector(".js-ratingSelect");
const clearButton = document.querySelector(".js-clearButton");
const genreButtons = document.querySelector(".js-genreButtons");
const resultsText = document.querySelector(".js-resultsText");
const bookList = document.querySelector(".js-bookList");
const bookDetails = document.querySelector(".js-bookDetails");

/*making book covers*/
function makeCover(book) {
    const words = book.title.split(" ");
    const lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (currentLine === "") {
            currentLine = word;    //first word on line
        } else if (currentLine.length + word.length > 12) {
            lines.push(currentLine);  // line is full, save it
            currentLine = word;  // start new line
        } else {
            currentLine = currentLine + " " + word; // add new word
        }
    }
    lines.push(currentLine); // save last line

    /* turn line into svg text element */
    let titleText = "";
    for (let i = 0; i < lines.length; i++) {
        const yPosition = 90 + i * 28; // each line sits 28px lower
        titleText += `<text x="24"  y="${yPosition}" font-family="Georgia" font-size="24" font-weight="bold" fill="white">${lines[i]}</text>`;
    }

    /*whole picture */
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
    <rect width="200" height="300" fill="${book.color}"/>
    <rect width="112" height="300" fill="black" opacity="0.25"/>
    ${titleText}
    <text x="24" y="276" font-family="Arial" font-size="13" fill="white">${book.author}</text>
    </svg>`;

    /* svg into a link img tag can be use */
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg)
}

/*search and fliter logic */
function getFilteredBooks() {
    const matchingBooks = [];  //empty list
    const search = searchText.toLowerCase();    // lowercase so HOBBIT = hobbit

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const titleMatches = book.title.toLocaleLowerCase().includes(search); //title cotain what type of user

        const genreMatches = selectGenre === "All" || book.genre === selectGenre; //genre all or does it match

        const ratingMatches = book.rating >= minRating; //high enough rating

        if (titleMatches && genreMatches && ratingMatches) {
            matchingBooks.push(book);
        }
    }

    return matchingBooks;
}

/*rendering */

function renderGenreButtons() {
    const genres = ["All"] // collect each genre once
    for (let i = 0; i < books.length; i++) {
        if (!genres.includes(books[i].genre)) {
            genres.push(books[i].genre)
        }
    }

    genreButtons.innerHTML = ""; // clear old
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const button = document.createElement("button");
        button.textContent = genre;

        if (genre === selectGenre) {
        button.classList.add("genre-active");
    }

    button.addEventListener("click", function () {
        selectGenre = genre;
        renderGenreButtons();
        renderBooks();
    });

      genreButtons.appendChild(button);
    }  
}

/*show a card that pass the sreach */
function renderBooks() {
    const visibleBooks = getFilteredBooks();
    resultsText.textContent = "Showing" + visibleBooks.length + " of " + books.length + " books";

    if (visibleBooks.length === 0) {
        bookList.innerHTML = "<p>No books match your search. Try clearing the filters.</p>";
        return;
    }

    let cardsHtml = ""; // html for cards
    for (let i = 0; i < visibleBooks.length; i++) {
        const book = visibleBooks[i]

        let cardClass = "book-card";
        if (book.id === selectedBookId) {
            cardClass = "book-card book-card-selected"
        }

        cardsHtml += `
        <div class="${cardClass}" data-id="${book.id}">
         <img src=${makeCover(book)}" alt="Cover of ${book.title}">
         <h3>${book.title}</h3>
         <p>${book.author}</p>
         <span class="genre-tag">${book.genre}</span>
        </div>`;
    }
    bookList.innerHTML = cardsHtml;

    /* make cards clickable */
    const cards = document.querySelector(".book-card")
    for (let i = 0; i <cards.length; i++) {
        cards[i].addEventListener("click", function () {
            const clickedId = Number(this.dataset.id); //read as number
            showBookDetails(clickedId)
        })
    }
}

/*show full deatil*/
function showBookDetails(bookId) {
    selectedBookId = bookId;

    let book = null;   //find the book
    for (let i = 0; i < books.length; i++) {
        if (book[i].id === bookId) {
            book = books[i];
        }
    }

    let availabilityText = "Checked out";
    let availabilityClass = "checked-out";
    if (book.avaibility) {
        availabilityText = "Available"
        availabilityClass = "Available"
    }
    
    bookDetails.innerHTML = `
    <div class="details-layout">
     <img src=${makeCover(book)}" alt="Cover of ${book.title}">
     <div class="details.text">
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Year:</strong> ${book.rating}</p>
      <p><strong>Status:</strong> <span class="${availabilityClass}</span>${availabilityText}</p>
      <p>${book.descritption}</p>
     </div>
    </div>`;

    renderBooks();
    bookDetails.scrollIntoView({ behavior: "smooth" })
}

/*what is showen before clicked */
function showEmptyDetails() {
    bookDetails.innerHTML = "<p>Click a book above to see its details here.</p>";
}

/* eventlinstiners */
