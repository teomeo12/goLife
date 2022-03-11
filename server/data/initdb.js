const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
  "./data/ecoalDB",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the ecoal database.");
    }
  }
);

let query = [
  "PRAGMA foreign_keys = ON",
  "DROP TABLE IF EXISTS article",
  "DROP TABLE IF EXISTS tag",
  "DROP TABLE IF EXISTS article_tag",
  "CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, mediaType TEXT, mediaURL TEXT, leadStory INTEGER)",
  "CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
  "CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, idArticle INTEGER REFERENCES article(id), idTag INTEGER REFERENCES tag(id))",
  "INSERT INTO tag (name) values ('travel')",
  "INSERT INTO tag (name) values ('food')",
  "INSERT INTO tag (name) values ('well-being')",
  "INSERT INTO tag (name) values ('climate')",
  "INSERT INTO tag (name) values ('fashion')",
  "INSERT INTO tag (name) values ('home')",
];

db.serialize(() => {
  query.forEach((item) => {
    db.run(item, (err) => {
      if (err) return console.error(err.message);
      console.log(item + ` done`);
    });
  });
});

//queery 1
let query1 = [
  {
    title: `The top 10 most visited US National Park sites in 2021`,
    content: `(CNN) — Stir-crazy from the pandemic, visitors poured into US national parks and related sites last year -- and they especially paid calls to the marquee names.
Roughly 297.1 million total visits were recorded in 2021 by the National Park Service, which released an in-depth visitation report on Wednesday.
The NPS said that last year'’s visitation increased by 60 million over 2020. That'’s when Covid-19 closed facilities in most parks for at least part of the year. Across the entire National Park System, the numbers still remained below pre-pandemic totals.
However, it was a different story for the best-known sites, which were inundated with visitors. Forty-four places actually set a record for recreation visits in 2021.
Top 10 most visited sites
Of 423 sites in the National Park System, the top 25 got more than half of the system's total number of visits.
These were the top 10 for 2021, which includes national parks but also parkways, recreation areas, memorials and related sites (figures are rounded off):
1. Blue Ridge Parkway: 15.9 million
2. Great Smoky Mountains National Park: 14.1 million
3. Golden Gate National Recreation Area: 13.7 million
4. Gateway National Recreation Area: 9.1 million
5. Lake Mead National Recreation Area: 7.6 million
6. George Washington Memorial Parkway: 6.8 million
7. Natchez Trace Parkway: 6.4 million
8. Lincoln Memorial: 5.8 million
9. Gulf Islands National Seashore: 5.5 million
10. Zion National Park: 5 million
The Blue Ridge Parkway, which covers 469 miles in the Appalachians of North Carolina and Virginia, kept its title of the most-visited site in the system.
Great Smoky Mountains National Park set a visitation record for 2021, passing 14 million recreation visits for the first time, NPS said in its report.
Top 10 national parks
 
The Bass Harbor Lighthouse is seen at sunset at Acadia National Park in Maine.
Of those 400+ sites in the entire system, only 63 of them are actually designated a "national park." These are most visited national parks of 2021 (figures are rounded off):
1. Great Smoky Mountains National Park: 14.16 million
2. Zion National Park: 5.03 million
3. Yellowstone National Park: 4.86 million
4. Grand Canyon National Park: 4.53 million
5. Rocky Mountain National Park: 4.43 million
6. Acadia National Park: 4.06 million
7. Grand Teton National Park: 3.88 million
8. Yosemite National Park: 3.28 million
9. Indiana Dunes National Park: 3.17 million
10. Glacier National Park: 3.08 million
If you want to really avoid the crowds and be alone with nature, Kobuk Valley National Park in northwestern Alaska had only 11,540 recreational visits in 2021. Even by Alaska standards, this place is remote.
NPS to visitors: Let's spread it out
Long lines and closed signs sometimes greeted visitors at the most popular sites last year. This prompted the Park Service to impose new systems to control crowds. For instance, Arches National Park in Utah is rolling out a timed entry program, with reservations set out three months in advance.
Along with measures to regulate crowding at the most popular places, the NPS is also trying to steer people toward the parks that aren't setting records.


`,
    thumbnailURL: "1.jpg",
    mediaURL: "1.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query1.forEach((item) => {
    db.run(
      "INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('" +
        item.title +
        "', '" +
        item.content +
        "', '" +
        item.thumbnailURL +
        "', '" +
        item.mediaType +
        "', '" +
        item.mediaURL +
        "')",
      (err) => {
        if (err) return console.error(err.message);
        console.log(item + ` done`);
      }
    );
  });
});

//query 2
let query2 = [
  {
    title: `Top 10 national parks`,
    content: `The Bass Harbor Lighthouse is seen at sunset at Acadia National Park in Maine.
Of those 400+ sites in the entire system, only 63 of them are actually designated a "national park." These are most visited national parks of 2021 (figures are rounded off):
1. Great Smoky Mountains National Park: 14.16 million
2. Zion National Park: 5.03 million
3. Yellowstone National Park: 4.86 million
4. Grand Canyon National Park: 4.53 million
5. Rocky Mountain National Park: 4.43 million
6. Acadia National Park: 4.06 million
7. Grand Teton National Park: 3.88 million
8. Yosemite National Park: 3.28 million
9. Indiana Dunes National Park: 3.17 million
10. Glacier National Park: 3.08 million
If you want to really avoid the crowds and be alone with nature, Kobuk Valley National Park in northwestern Alaska had only 11,540 recreational visits in 2021. Even by Alaska standards, this place is remote.
NPS to visitors: Let's spread it out
Long lines and closed signs sometimes greeted visitors at the most popular sites last year. This prompted the Park Service to impose new systems to control crowds. For instance, Arches National Park in Utah is rolling out a timed entry program, with reservations set out three months in advance.
Along with measures to regulate crowding at the most popular places, the NPS is also trying to steer people toward the parks that aren't setting records.

`,
    thumbnailURL: "2.jpg",
    mediaURL: "2.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query2.forEach((item) => {
    db.run(
      "INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('" +
        item.title +
        "', '" +
        item.content +
        "', '" +
        item.thumbnailURL +
        "', '" +
        item.mediaType +
        "', '" +
        item.mediaURL +
        "')",
      (err) => {
        if (err) return console.error(err.message);
        console.log(item + ` done`);
      }
    );
  });
});

//query 3
let query3 = [
  {
    title: `World's top 10 best beaches for 2022, according to Tripadvisor`,
    content: `(CNN) — Picture a warm, pristine paradise. White-sand beaches. Turquoise-tinged water clear as gin. And you've got the No. 1 beach in the world for 2022, according to Tripadvisor users.
The travel platform has just released the second of its annual Travelers' Choice Awards for 2022: The Best of the Best Beaches.
Coming out on top is Grace Bay Beach in the Turks and Caicos islands.
This lovely spot on the Atlantic Ocean isn't exactly new to the best beach circuit. For Tripadvisor's 2021 awards, it was ranked No. 4.
World's top 10 best beaches for 2022
The Caribbean has the most beaches in this year's top 10 list, and five continents are represented in the tally. Brazil is the only destination to have more than one entry, clocking in an impressive three beaches.
For 2022, the best beaches are:
1. Grace Bay Beach: Providenciales, Turks and Caicos
2. Varadero Beach: Varadero, Cuba
3. Turquoise Bay: Exmouth, Australia
4. Quarta Praia: Morro de Sao Paulo, Brazil
5. Eagle Beach: Palm - Eagle Beach, Aruba
6. Radhanagar Beach: Havelock Island, India
7. Baia do Sancho: Fernando de Noronha, Brazil
8. Trunk Bay Beach: Virgin Islands National Park, US Virgin Islands
9. Baía dos Golfinhos: Praia da Pipa, Brazil
10. Spiaggia dei Conigli: Lampedusa, Italy
Last year's No.1 -- Whitehaven Beach on Whitsunday Island in Australia -- didn't crack the top 10 this year.
Grace Bay Beach's appeal
Tripadvisor said in a news release that Grace Bay beach had more than 7,200 reviews to date, and that 90% of them rate it at five "bubbles," its highest ranking.
The beach is on the northeast coast of the island of Providenciales. You may think of this as part of the Caribbean -- and it's indeed nearby -- but the entire Turks and Caicos chain is technically all in the Atlantic Ocean. It's a British territory.
Related content
Tripadvisor's most popular world destinations for 2022
A barrier reef offshore helps keep Grace Bay Beach clear of seaweed and other objects, the official Turks and Caicos tourism website says. Boating and other water sports are popular in the calm, shallow waters between the beach and the reef.
Going to Turks and Caicos
Here's what you need to know about a trip to the Turks and Caicos during the pandemic.
First, visitors from around the world are welcomed to vacation there; however, you must be fully vaccinated if you're 16 or older to visit.
All travelers 2 and older need a negative result from a Covid-19 PCR test taken no more than three days before arrival to enter. There's no quarantine on arrival. You must fill out a travel authorization form, and Covid-19 travel insurance is required as well.
Masks are required in all public places until February 28 for anyone 2 and older. There are no restrictions on travel between islands in the chain.
The US Centers for Disease Control and Prevention had travel advisory of Level 4 (very high risk) on the islands as of February 22. That's the CDC's hightest level, and the agency advises people avoid to the Turks and Caicos Islands for now.
Find out more: Visit Turks and Caicos | Travel authorization form | US Embassy | CDC Turks and Caicos advisory
 
Hawaii's Hapuna Beach has been named the best US beach.
Top 10 best US beaches
Tripadvisor also has a separate category just for beaches in the United States.
States with Pacific coastline win out big for 2022, with just one Gulf of Mexico beach and one Atlantic spot on the list. Hawaii kept four spots for itself. The best US beaches for 2022 are:
1. Hapuna Beach State Recreation Area: Puako, Hawaii
2. Siesta Beach: Siesta Key, Florida
3. Poipu Beach Park: Poipu, Hawaii
4. Moonstone Beach: Cambria, California
5. Kailua Beach Park: Kailua, Hawaii
6. Driftwood Beach: Jekyll Island, Georgia
7. Ruby Beach: Olympic National Park, Washington
8. Cannon Beach: Cannon Beach, Oregon
9. La Jolla Cove: La Jolla, California
10. Ho'okipa Beach Park: Paia, Hawaii
On Hawaii's largest island, Hapuna Beach "has the perfect waves for surfing, boogie boarding and body surfing," Tripadvisor reported its visitors as saying.
The No. 1 spot for 2021, St. Pete Beach in St. Petersburg, Florida, didn't crack the top 10 for 2022.



`,
    thumbnailURL: "2.jpg",
    mediaURL: "2.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query2.forEach((item) => {
    db.run(
      "INSERT INTO article (title, content, thumbnailURL, mediaType, mediaURL) values ('" +
        item.title +
        "', '" +
        item.content +
        "', '" +
        item.thumbnailURL +
        "', '" +
        item.mediaType +
        "', '" +
        item.mediaURL +
        "')",
      (err) => {
        if (err) return console.error(err.message);
        console.log(item + ` done`);
      }
    );
  });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
