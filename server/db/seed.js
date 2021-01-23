const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbc_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const cardsSeed = [
    {
        cardTags: "Engineering",
        firstName: "Clarie",
        lastName: "Mackintosh",
        companyName: "Novatech Technologies",
        phoneNumber: "(656)-8686-869",
        email: "clairem@novatechtechnologies.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/1.png",
    },
    {
        cardTags: "Engineering",
        firstName: "Kevin",
        lastName: "Park",
        companyName: "Park",
        phoneNumber: "(555)505-5550",
        email: "www.parkseo.com",
        address: "77 Wellington Avenue",
        date: new Date(),
        img: "/uploads/cards/2.png",
    },
    {
        cardTags: "Architecture",
        firstName: "Ryan",
        lastName: "Morgan",
        companyName: "NLaurenarchitec",
        phoneNumber: "(514)451-4435)",
        email: "laurenm@gmail.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/3.jpg",
    },
    {
        cardTags: "Photography",
        firstName: "Farah",
        lastName: "Killian",
        companyName: "Farahphotography",
        phoneNumber: "(610)384-4827",
        email: "info@farahphotography.com",
        address: "957 Front St, Coatesville, PA 19320",
        date: new Date(),
        img: "/uploads/cards/4.png",
    },
    {
        cardTags: "Design",
        firstName: "Miria",
        lastName: "Perez",
        companyName: "Miria Floral",
        phoneNumber: "(414)342-0971)",
        email: "cmiriafloral@gmail.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/5.jpg",
    },
    {
        cardTags: "Journalism",
        firstName: "Helena",
        lastName: "Babbel",
        companyName: "HBabelscoops",
        phoneNumber: "(614)451-4422",
        email: "info@hbabel.com",
        address: "254 West Boulavard Berlin, Germany",
        date: new Date(),
        img: "/uploads/cards/6.jpg",
    },
    {
        cardTags: "Development",
        firstName: "Kim Lou",
        lastName: "Wan",
        companyName: "Create Developers",
        phoneNumber: "(987)4575-9567",
        email: "info@createdevelopers.com",
        address: "132 9th Street, Lakeview Lane, NY 87903",
        date: new Date(),
        img: "/uploads/cards/7.png",
    },
    {
        cardTags: "Marketing",
        firstName: "Mark",
        lastName: "Smith",
        companyName: "Brand Name",
        phoneNumber: "(123)456-7890",
        email: "marksmith@newbrandname.com",
        address: "123 Dummy, Lorem Ipsum",
        date: new Date(),
        img: "/uploads/cards/8.jpg",
    },
    {
        cardTags: "Engineering",
        firstName: "Mark",
        lastName: "Smith",
        companyName: "Marks company",
        phoneNumber: "(122)643-5534",
        email: "info@email.com",
        address: "155 44th Street, NY 11130",
        date: new Date(),
        img: "/uploads/cards/9.jpg",
    },
    {
        cardTags: "Web Development",
        firstName: "Narimi",
        lastName: "Miyauchi",
        companyName: "Nero",
        phoneNumber: "(509)560-1648",
        email: "narimi@nerostudio.com",
        address: "381 Mudlick Road",
        date: new Date(),
        img: "/uploads/cards/10.png",
    },
    {
        cardTags: "Videgraphy",
        firstName: "Mike",
        lastName: "Danielsen",
        companyName: "Danish Collective",
        phoneNumber: "(965)369-5502",
        email: "mike@danishcollective.com",
        address: "493 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/11.png",
    },
    {
        cardTags: "Real Estate",
        firstName: "Sofia",
        lastName: "Guillermo",
        companyName: "Revall",
        phoneNumber: "((485)9453-4395",
        email: "sofiag@revall.com",
        address: "8744 Main Street, Touscan, BC",
        date: new Date(),
        img: "/uploads/cards/12.png",
    },
    {
        cardTags: "Interior Design",
        firstName: "Sarah",
        lastName: "Maron",
        companyName: "Maron Designs",
        phoneNumber: "(112)1232 11",
        email: "sarah@marondesigns.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/13.jpg",
    },
    {
        cardTags: "Web design",
        firstName: "Jonathan",
        lastName: "Patterson",
        companyName: "Patterson Designs",
        phoneNumber: "(656)-8686-869",
        email: "jonathanpatt@design.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/14.png",
    },
    {
        cardTags: "Web Design",
        firstName: "Jacqueline",
        lastName: "Thompson",
        companyName: "Jacqueline Design",
        phoneNumber: "(656)-8686-869",
        email: "jacqline@jacquelinedesign.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/15.png",
    },
    {
        cardTags: "IT",
        firstName: "Mark",
        lastName: "Williams",
        companyName: "Bijou Tech SOlutions",
        phoneNumber: "(656)-8686-869",
        email: "mark@bijou.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/16.png",
    },
    {
        cardTags: "Web Design",
        firstName: "Rachel",
        lastName: "Beaudry",
        companyName: "Rachel Designs",
        phoneNumber: "(656)-8686-869",
        email: "rachel@racheldesigns.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/17.png",
    },
    {
        cardTags: "Web Design",
        firstName: "Simon",
        lastName: "Grayson",
        companyName: "Simon Grayson",
        phoneNumber: "(656)-8686-869",
        email: "simon@simondesigns.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/18.jpg",
    },
    {
        cardTags: "Reporter",
        firstName: "Frank",
        lastName: "Catalano",
        companyName: "NewsKING",
        phoneNumber: "(206)583-0911",
        email: "",
        address: "Seatle, Washington 98124",
        date: new Date(),
        img: "/uploads/cards/19.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "William",
        lastName: "Gates",
        companyName: "Microsoft",
        phoneNumber: "(505)256-3600",
        email: "williamg@microsoft.com",
        address: "819 Two Park Central Tower, Albuquerque, NM 87108",
        date: new Date(),
        img: "/uploads/cards/20.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Frank",
        lastName: "Roberts",
        companyName: "Derb International",
        phoneNumber: "(635)236-8313",
        email: "frank@derbinternational.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/21.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Ryan",
        lastName: "Diebel",
        companyName: "BuildingBrains",
        phoneNumber: "(720)295-6415",
        email: "ryan.diebel@buildingbrains.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/22.png",
    },
    {
        cardTags: "Tech",
        firstName: "Ethan",
        lastName: "Anderson",
        companyName: "Tech Solutions",
        phoneNumber: "(213)446-7788",
        email: "technicalsolutions@gmail.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/23.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Amy",
        lastName: "Hayden",
        companyName: "Freewater",
        phoneNumber: "(757)499-6150",
        email: "simon@simondesigns.com",
        address: "816 Greenbrier Circle",
        date: new Date(),
        img: "/uploads/cards/24.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Larry",
        lastName: "Page",
        companyName: "Google",
        phoneNumber: "(650)330-0100",
        email: "larryp@google.com",
        address: "555 Bryant Lane, NY 32550",
        date: new Date(),
        img: "/uploads/cards/25.jpeg",
    },
    {
        cardTags: "Trade",
        firstName: "Hyun In",
        lastName: "Kang",
        companyName: "Sam Sun Trading Co., LTD.",
        phoneNumber: "+82 51 2060-3399",
        email: "biz@samsunco.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/26.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Andy",
        lastName: "Robertson",
        companyName: "Andy Tech Mentainence",
        phoneNumber: "(575)840-8012",
        email: "fbcoach11@hotmail.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/27.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Rhea",
        lastName: "Bannister",
        companyName: "The Rockstars",
        phoneNumber: "(860)575-7862",
        email: "banisterrhea@gmail.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/28.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Neil",
        lastName: "Haggerty",
        companyName: "Tech Solutions",
        phoneNumber: "(781)710-3621",
        email: "neilhaggerty58@yahoo.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/29.jpeg",
    },
    {
        cardTags: "Tech",
        firstName: "Wilbur",
        lastName: "Wright",
        companyName: "Wright Cycle Company",
        phoneNumber: "(781)710-3621",
        email: "hanger@huffmanfield.com",
        address: "425 Hidden Valley Road, NY 87903",
        date: new Date(),
        img: "/uploads/cards/30.jpg",
    },
];

db.Card.deleteMany({})
    .then(() => db.Card.collection.insertMany(cardsSeed))
    .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
