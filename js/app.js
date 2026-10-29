// book data

const book = [
    {id:1, Title:"The Hobbit", author:"J. R. R. tolkien", genre:"Fanstay", year:1937,
        rating:4.6, available:false, color:"#2f7a4a", description:"Bilbo Baggins is pulled from his quiet hole into a quest with thirteen dwarves to reclaim their mountain kingom from Smaug. Along the way he finf courge, riddles, and a mysterious ring."
    },
    {id:2, Title:"Frankenstein", author:"Mary Shelly", genre:"Science Finction", year:1818, rating:4.8, available:true, color:"#2d5aa0", description:"A young sceitist, Victor Frankenstein, builds a living creature from stolen parts and then abandons it. The story asks what creators owe to what they created."
    },
   {id:3, Title:"Dracula", author:"Bram Stoker", genre:"Horror", year:1897,
        rating:4.5, available:false, color:"#5a2a6e", description:"Told through letters, dairies, and newspaper clippings, a group of freinds hunts a Transylvanian count who has come to England to spread his curse"
    },
    {id:4, Title:"1984", author:"George Orwell", genre:"Science Finction", year:1949,
        rating:4, available:true, color:"#7a2a2a", description:"Winston Smith lives under constant surveillince in a totalitarian state and quietly beings to question the party, with consequeces he cannot escape"
    },
    {id:5, Title:"And Then There Were None", author:"Agatha Christie", genre:"Mystery", year:1939,
        rating:4.5, available:true, color:"#38505a", description:"Ten strangers are invited to an island and accused of past crime. One by one are removed, and the surviors realize the killer is amoung them."
    },
    {id:6, Title:"Sherlock Homes", author:"Arthur Conan Doyle", genre:"Mystery", year:1892,
        rating:4.2, available:false, color:"#6b5a2e", description:"Twelve short case that introduced the sharpest detective on baker street and his loyal frien Dr. Watson"
    },
    {id:7, Title:"Jane Erye", author:"charlotte", genre:"Romance", year:1847,
        rating:3.8, available:true, color:"#9b3d5a", description:"An orphaned governess falls for her brooding employer, Mr. Rochester, and uncovers the secret hidden in huose."
    },
    {id:8, Title:"Treasure Island", author:"Robert Louis Stevenson", genre:"Adventure", year:1883,
        rating:4.2, available:false, color:"#b6622a", description:"Young Jim Hawkins joins a voyage to find buried pirate treasure and must otwit the charming and dangerous Long JOhn Sliver"
    },
    {id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    },{id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    },{id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    },{id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    },{id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    },{id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    },{id:, Title:"", author:"", genre:"", year:,
        rating:, available:true, color:"#", description:""
    }
];

//users varables
let searchText = ""; //what is ttypes in screach bar
let selectGenre = "all"; 
let minRating = 0; // rating from downbar
let selectedBookId = null; 

const searchInput = document.querySelector(".js-searchInput");
const ratingSelect = document.querySelector(".js-ratingSelect");
const clearButton = document.querySelector(".js-clearButton");
const genreButtons = document.querySelector(".js-genreButtons");
const resultsText = document.querySelector(".js-resultsText");
const bookList = document.querySelector(".js-bookList");
const bookDetails = document.querySelector(".js-bookDetails");