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
The NPS said that last years visitation increased by 60 million over 2020. That is when Covid-19 closed facilities in most parks for at least part of the year. Across the entire National Park System, the numbers still remained below pre-pandemic totals.
However, it was a different story for the best-known sites, which were inundated with visitors. Forty-four places actually set a record for recreation visits in 2021.
Top 10 most visited sites
<strong>Of 423 sites</strong> in the National Park System, the top 25 got more than half of the systems total number of visits.
These were the top 10 for 2021, which includes national parks but also parkways, recreation areas, memorials and related sites (figures are rounded off):
<ul>      1. Blue Ridge Parkway: 15.9 million
            2. Great Smoky Mountains National Park: 14.1 million
            3. Golden Gate National Recreation Area: 13.7 million
            4. Gateway National Recreation Area: 9.1 million
            5. Lake Mead National Recreation Area: 7.6 million
            6. George Washington Memorial Parkway: 6.8 million
            7. Natchez Trace Parkway: 6.4 million
            8. Lincoln Memorial: 5.8 million
            9. Gulf Islands National Seashore: 5.5 million
            10. Zion National Park: 5 million
</ul>
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
NPS to visitors: Lets spread it out
Long lines and closed signs sometimes greeted visitors at the most popular sites last year. This prompted the Park Service to impose new systems to control crowds. For instance, Arches National Park in Utah is rolling out a timed entry program, with reservations set out three months in advance.
Along with measures to regulate crowding at the most popular places, the NPS is also trying to steer people toward the parks that arent setting records.


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
    title: `Worlds top 10 best beaches for 2022, according to Tripadvisor`,
    content: `(CNN) — Picture a warm, pristine paradise. White-sand beaches. Turquoise-tinged water clear as gin. And you have got the No. 1 beach in the world for 2022, according to Tripadvisor users.
The travel platform has just released the second of its annual Travelers Choice Awards for 2022: The Best of the Best Beaches.
Coming out on top is Grace Bay Beach in the Turks and Caicos islands.
This lovely spot on the Atlantic Ocean isnt exactly new to the best beach circuit. For Tripadvisors 2021 awards, it was ranked No. 4.
Worlds top 10 best beaches for 2022
The Caribbean has the most beaches in this years top 10 list, and five continents are represented in the tally. Brazil is the only destination to have more than one entry, clocking in an impressive three beaches.
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
Last years No.1 -- Whitehaven Beach on Whitsunday Island in Australia -- didnt crack the top 10 this year.
Grace Bay Beachs appeal
Tripadvisor said in a news release that Grace Bay beach had more than 7,200 reviews to date, and that 90% of them rate it at five "bubbles," its highest ranking.
The beach is on the northeast coast of the island of Providenciales. You may think of this as part of the Caribbean -- and its indeed nearby -- but the entire Turks and Caicos chain is technically all in the Atlantic Ocean. Its a British territory.
Related content
Tripadvisors most popular world destinations for 2022
A barrier reef offshore helps keep Grace Bay Beach clear of seaweed and other objects, the official Turks and Caicos tourism website says. Boating and other water sports are popular in the calm, shallow waters between the beach and the reef.
Going to Turks and Caicos
Heres what you need to know about a trip to the Turks and Caicos during the pandemic.
First, visitors from around the world are welcomed to vacation there; however, you must be fully vaccinated if youre 16 or older to visit.
All travelers 2 and older need a negative result from a Covid-19 PCR test taken no more than three days before arrival to enter. Theres no quarantine on arrival. You must fill out a travel authorization form, and Covid-19 travel insurance is required as well.
Masks are required in all public places until February 28 for anyone 2 and older. There are no restrictions on travel between islands in the chain.
The US Centers for Disease Control and Prevention had travel advisory of Level 4 (very high risk) on the islands as of February 22. Thats the CDCs hightest level, and the agency advises people avoid to the Turks and Caicos Islands for now.
Find out more: Visit Turks and Caicos | Travel authorization form | US Embassy | CDC Turks and Caicos advisory
 
Hawaiis Hapuna Beach has been named the best US beach.
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
10. Hookipa Beach Park: Paia, Hawaii
On Hawaiis largest island, Hapuna Beach "has the perfect waves for surfing, boogie boarding and body surfing," Tripadvisor reported its visitors as saying.
The No. 1 spot for 2021, St. Pete Beach in St. Petersburg, Florida, didnt crack the top 10 for 2022.


`,
    thumbnailURL: "",
    mediaURL: "7.jpg",
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
    title: `Low-meat and meat-free diets associated with lower overall cancer risk`,
    content: `Eating meat five times or less per week is associated with a lower overall cancer risk, according to a study published in the open access journal BMC Medicine.
Cody Watling and colleagues from the University of Oxford, UK investigated the relationship between diet and cancer risk by analysing data collected from 472,377 British adults who were recruited to the UK Biobank between 2006 and 2010. Participants, who were aged between 40 and 70 years, reported how frequently they ate meat and fish and the researchers calculated the incidence of new cancers that developed over an average period of 11 years using health records. They accounted for diabetes status and sociodemographic, socioeconomic and lifestyle factors in their analyses. 247,571 (52%) of participants ate meat more than five times per week, 205,382 (44%) of participants ate meat five or less times per week, 10,696 (2%) ate fish but not meat, and 8,685 (2%) were vegetarian or vegan. 54,961 participants (12%) developed cancer during the study period.
The researchers found that the overall cancer risk was 2% lower among those who ate meat five times or less per week, 10% lower among those who ate fish but not meat, and 14% lower among vegetarians and vegans, compared to those who ate meat more than five times per week. When comparing the incidence of specific cancers with participants diet , the authors found that those who ate meat five times or less per week had a 9% lower risk of colorectal cancer, compared to those who ate meat more than five times per week. They also found that the risk of prostate cancer was 20% lower among men who ate fish but not meat and 31% lower among men who followed a vegetarian  , compared to those who ate meat more than five times per week. Post-menopausal women who followed a vegetarian diet had an 18% lower risk of breast cancer than those who ate meat more than five times per week. However, the findings suggest that this was due to vegetarian women tending to have a lower body mass index (BMI) than women who ate meat.
The researchers caution that the observational nature of their study does not allow for conclusions about a causal relationship between diet and cancer risk. Additionally, as UK Biobank dietary data was collected at a single time-point, rather than over a continuous period of time, it may not be representative of participants lifetime diets.
The authors suggest that future research could investigate the associations between diets containing little or no meat and the risk of individual cancers in larger populations with longer follow-up periods.

`,
    thumbnailURL: "",
    mediaURL: "",
    mediaType: "",
  },
];

db.serialize(() => {
  query3.forEach((item) => {
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

//query 4
let query4 = [
  {
    title: `Face masks do not increase body temperature during exercise in the heat, according to new study`,
    content: `With the start of the COVID-19 pandemic, face masks became a normal part of doing just about any activity outside the house.
When the federal Centers for Disease Control and Prevention (CDC) recommended wearing a mask especially during indoor activity, some raised concerns about how this could affect those exercising, especially in hot summer temperatures.
Ayami Yoshihara, director of Sport Safety at UConns Korey Stringer Institute, recently published a paper in Sports Health demonstrating that exercising in the heat with a face mask on does not significantly increase body temperature or heart rate during exercise.
Yoshihara tested four kinds of face mask: a surgical mask; an N95 respirator; a gaiter, which covers the neck and goes over the nose and mouth; and a sport mask. None of them significantly increased body temperature or heart rate compared to the group without a face mask.
As recommendations changed rapidly over the course of the pandemic and differed across organizations and geographic areas, there was a significant need for scientific guidance. This study is the first to provide evidence to demonstrate that masks do not add any risk to health when worn during exercise in the heat.
Participants walked or jogged for 60 minutes in a 90 degree-Fahrenheit environment at low to moderate exercise intensities.
"Before this study no one knew if wearing a mask in the heat would add additional stress to an exercising individual. While we know masks are important to prevent transmission of COVID-19, we didnt know if exercising with a mask in the heat, where your body is already managing additional stressors, would impact safety," Yoshihara says.
Yoshihara and her team also measured the humidity and temperature inside and outside of the face mask. They placed a sensor inside and outside of the facemasks on participants faces.
They found the sport mask and gaiter became significantly more humid as the materials absorbed more sweat and water vapor from exhaled air.
While participants did report a greater degree of breathing discomfort during exercise with a facemask because of the changes in humidity and temperature inside of the face mask, there was no relationship between reported discomfort and measures of body temperature and heart rate.
Yoshihara hopes this research can help shape guidelines for athletes who are exercising and competing during the summer and into the fall while ambient temperatures are still high, especially as vaccination rates outside the U.S. remain low.
"Its feasible and safe to use masks during low to moderate intensity exercise in the heat," Yoshihara says.
While this study did not look at how well these masks prevent the spread of COVID-19, Yoshihara says this is a future area of study she is interested in investigating. She says it is important that face mask recommendations promote safety both in terms of exertional heat illness and airborne virus transmission.

`,
    thumbnailURL: "",
    mediaURL: "2.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query4.forEach((item) => {
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

//query 5
let query5 = [
  {
    title: `Establishing a New Daily Routine During the COVID-19 Pandemic`,
    content: `A few months ago, you had your routine down. You could sail through your day on autopilot, with hardly a thought as to how to fill your time. But over the last several weeks, the COVID-19 pandemic has brought everyones routine to a screeching halt. So, now what?
Our days are going to continue look different for a while, so its important to establish a “new (temporary) normal.” In these unprecedented times, we need to remain flexible to best handle the situation. However, implementing some structure into our days can go a long way in helping us maintain our health, our productivity, and our social and emotional well-being. So, lets look at some simple things we can do to keep life feeling structured, fulfilling and somewhat normal.
Keep Your Morning Routine
Whether or not youre leaving your house, you should still get up, get dressed and carry on as usual. Shower, brush your teeth, shave, do your hair/makeup — even if nobodys going to see it, youll feel it. These are undoubtedly stressful times, and its important to maintain a feeling of optimism and normalcy. A pajama day here and there is fine, but too many may dampen your spirits.
Set Work Hours
If youre one of the many Americans working from home during the pandemic, you may be trying to figure out how to be productive in both your home and work roles, without sacrificing one or the other. Setting work hours for yourself during this time, can help you get more done and alleviate guilt. For example, you wont feel pulled to clean the house during work hours and you wont feel pulled to reply to work emails outside of work hours. Another way to help you transition between work- and home-mode is to establish a dedicated workspace. You complete all your work in this space and leave it when the workday is over.
Helping Your Kids with School Work
For those of you trying to work from home and simultaneously school your kids during all this, the best advice we can give is to adjust your expectations and be kind to yourself. Youve got a lot on your plate but having realistic expectations can make the situation much easier to navigate.
One of the biggest ideas to understand is that you dont need to try to replicate a school day for your kids. Set school hours for them, just as you set your work hours, and do what you can during those times. You can reach out to their teachers to gauge what their expectations are, but most of them understand that were all just doing the best we can.
Keep or Establish Healthy Habits
If you had been living a healthy lifestyle before the coronavirus hit, dont stop now! Its important to keep our bodies healthy and our immune systems strong — especially in the face a pandemic. If your lifestyle wasnt the healthiest before, why not use some of this extra time we have on our hands now to improve it now?
Healthy habits include:
•	Eating nutritiously
•	Exercising regularly
•	Maintaining an adequate and consistent sleep schedule
•	Spending time outdoors each day
Be Informed, but Not Overloaded
With things changing so quickly, its important to stay informed about the virus and the actions we as citizens are being asked to take. However, theres a difference between staying informed and being sucked down the rabbit hole of information. Checking the news a couple of times a day is useful, but set a time limit for yourself — maybe 20 minutes or so — and then cut it off.
Stay Connected
Humans are social beings — were designed that way! So, even though were not able to be physically close to one another right now, its imperative that we stay socially connected. Thankfully, we live in the digital age, which makes that so easy. Using Zoom or FaceTime or even a good old fashion phone call, aim to have at least one personal conversation a day

`,
    thumbnailURL: "",
    mediaURL: "5.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query5.forEach((item) => {
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

//query 6
let query6 = [
  {
    title: `Balenciagas latest show was a comment on climate crisis, virtual reality and the war in Ukraine`,
    content: `With all eyes on Balenciaga, one of Paris Fashion Weeks most anticipated collection unveilings, the brands creative director Demna used his platform to pay tribute to Ukrainians in a dramatic show that evoked a deep sense of unease about the future.
For the designer, the humanitarian crisis unfolding in eastern Europe, where more than 1.5 million Ukrainians have fled the country, hits close to home.

Demna (who prefers not to use his last name) was born in Sukhumi, a city in Georgia that saw heavy fighting during the countrys civil war in the early 1990s. The designer and his family were among tens of thousands of people to flee Sukhumi amid conflict in the disputed region of Abkhazia, which is considered independent by Russia despite being internationally recognized as part of Georgia.
"The war in Ukraine has triggered the pain of a past trauma I have carried in me since 1993, when the same thing happened to my home country and I became a forever refugee," he wrote, in a note given to guests attending the labels Fall-Winter 2022 show, held Sunday on the outskirts of Paris.
In a poignant moment, the designer recited a poem in Ukrainian by beloved poet Oleksandr Oles. No translation was provided as Demna intended its overarching message of strength to be heard by those who could understand it. In another gesture, Ukrainian flags were draped on guests seats.

During the show, models trudged through artificial snow and a biting wind, some holding oversized leather trashbags (or trash pouches, as the show notes described them).
While the collection was designed before the war in Ukraine broke out, it was hard not to draw parallels and, speaking to reporters backstage, Demna said the set and staging -- a shocking and stirring production -- deliberately reflected his own experience of conflict and displacement 30 years ago.
Demna also noted that the severity of the set was, originally, a partial comment on climate change, and how due to global warming, snow may have to be rendered digitally in the future. A glass wall separated the audience from the circular set, creating an IRL livestream of sorts.
The show wasnt the first time Demna had responded to the war in Ukraine. Last week, Balenciaga posted an image of Ukraines flag to its Instagram account and stated that all of the companys channels would be sharing details about how to contribute to relief causes. The post also announced that the label would be providing direction on resources for verified information.
Balenciaga has since wiped that image from its grid, and uploaded images from the show. A link to donate to the World Food Programme remains on Balenciagas Instagram highlights section.
The collection featured long trains and billowing silhouettes alongside classic staple pieces like turtlenecks and oversized hoodies. Signature skin-tight body suits were also on display. One model was wrapped head-to-toe in yellow and black Balenciaga packaging tape -- an identical look that was seen on Kim Kardashian who attended the event as a guest.

The show closed without a finale, where models typically file out together to take one last walk as a group. Instead, the last model strode off set to an intense, suffocating track titled "Storm," by electronic music composer BFRND. Lights in the faux sky above the set flashed and flickered adding drama to the man-made weather.
In his note to guests, Demna said hed considered canceling the show altogether in the week leading up to it, reflecting on the fact that, "in a time like this, fashion loses its relevance and its actual right to exist."

"Fashion week feels like some kind of an absurdity," he wrote.
But he came to the conclusion that calling off the event would mean "giving in," and "surrendering to the evil that has already hurt me so much... I decided I can no longer sacrifice parts of me to that senseless, heartless war of ego."
Ultimately, the show achieved what the designer does best: It forced the viewer to ask questions, both of themselves and of the system -- perhaps making a barbed suggestion that Demnas Balenciaga mirrors the world, and oftentimes what we see looking back at us is going to be uncomfortable.


`,
    thumbnailURL: "",
    mediaURL: "www.youtube.com/embed/NTXbCdS5hdY",
    mediaType: "video",
  },
];

db.serialize(() => {
  query6.forEach((item) => {
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

//query 7
let query7 = [
  {
    title: `Herb Garden: Ideal for apartments and small places`,
    content: `Nothings better than some freshly picked basil to top off your pizza or pasta dish. What better way to achieve this other than creating a little herb garden in your own home! Remember that herb plants need to receive at least five hours of sunlight a day.
Step by step guide to creating your own herb garden
In a planter or pot, use topsoil, construction sand and compost. For assembly, use pebbles at the bottom of the vase or shards of tile, then the sand with water and the mixture of vegetable soil and fertilizer.
The planter must have at least three holes to drain the water, but this number can increase if the container is bigger. Mix the soil to allow it to be very fluffy.
Remove the seedlings from the original package and transfer to the pot or planter and complete with soil. After planting, water the seedlings.
Remember to water your garden every morning to keep the soil moist but not soggy.

`,
    thumbnailURL: "",
    mediaURL: "3.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query7.forEach((item) => {
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

//query 8
let query8 = [
  {
    title: `New restaurants to discover in Porto`,
    content: `The city is full of good options to keep your stomach full. Here are the new restaurants to discover in Porto.

Now that life is starting to get back to normal, the citys food scene is coming back to life. Both in downtown and outside it, there are restaurants designed to go with friends, colleagues, lovers and family. 
In this list of new restaurants to discover in Porto, you can discover new spaces specializing in signature cuisine, snacks, burgers or traditional food. If youre always looking for news, this article is for you. Read what follows and book a table where you like best. But book it, as they are very popular. Enjoy your meal.
1.	O Marmorista
2.	Tia Tia
3.	Cordoaria
4.	Seiva
5.	Okra
6.	Tostaria
7.	Alibi
8.	Dona Maria
9.	Composto
10.	Manso
`,
    thumbnailURL: "",
    mediaURL: "4.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query8.forEach((item) => {
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

//query 9
let query9 = [
  {
    title: `The best movies about food ever created`,
    content: `Warning: dont try to watch on an empty stomach!

1.	Ratatouille (2007)
Despite being a cartoon and the main character being a mouse, Ratatouille still manages to whet your appetite!

2.	Eat Pray Love (2010) Eat Pray Love takes Julia Roberts character on a journey through Italy, India and Bali. It is a tour of delicious and exotic food around the world. The film also stars Javier Bardem, James Franco, Richard Jenkins, Viola Davis and Billy Crudup.

3.	Eat Drink Man Woman (1994)
This movie revolves around a widowed father and his adult daughters having family meals together. It includes incredibly detailed scenes of traditional Chinese dishes being prepared.

4.	Julie & Julia (2009)
Meryl Streep plays the iconic Julia Child in a film truly dedicated to the love of food.

5.	Chef (2014)
Actor, screenwriter, director and foodie, Jon Favreau created a very personal project with Chef, which tells the story of a chef at a renowned restaurant, who leaves his job for a street food business.

6.	Willy Wonka & the Chocolate Factory (1971)

`,
    thumbnailURL: "",
    mediaURL: "",
    mediaType: "",
  },
];

db.serialize(() => {
  query9.forEach((item) => {
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

//query 10
let query10 = [
  {
    title: `6 Small Lifestyle Changes Could Be Enough To Mitigate The Climate Crisis, New Study Suggests`,
    content: `People in affluent countries can contribute to halting the climate crisis by making six lifestyle changes, a new study has found. Research was conducted by Leeds University, with findings being verified by engineering firm Arup and the C40 collective of influential cities around the world. Academics involved with the study claim that by committing to six lifestyle adaptations, wealthy countries can account for up to 27 percent of the global emissions reduction needed to keep planetary warming to 1.5°C.
    The pledges everybody needs to make
The Jump is asking participants to commit to six lifestyle changes for one, three or six months. They are:

1. Eating a mostly plant-based diet with no food waste
The importance of portion control and buying only what is needed is highlighted here. A  focus on whole foods is best, if possible.

2. Buying maximum of three new pieces of clothing a year
In a bid to make the circular fashion economy the norm, consumers are encouraged to buy preloved items or embrace repairing existing belongings.

3. Keep electrical products for at least seven years
Regularly changing mobile phones, televisions and other tech items have been shown to contribute to emissions in a significant way. Breaking the constant upgrade cycle is critical.

4. Take no more than one short haul flight every three years
During the pandemic, this has been easier to achieve, but now that restrictions are lifting, the impact of air travel needs to be reiterated.

5. Scrap cars, where possible.
This is not always a practical move, but for households with more than one car, reducing the number can make a big impact.

6. Make a big switch.
Choosing to move an insurance premium, energy contract or something similarly significant to a green supplier shows demand and creates change.

The pledges are deliberately diverse and accessible, allowing for a vast demographic of people to participate. It is acknowledged that some of the tasks will be harder to align with than others, due to outside influences. The lack of affordable public transport is an example. Small changes are still lauded as a positive start.

“This isnt going back to the stone age, its just finding a balance,” Bailey told The Guardian. “Less consuming in relatively rich western countries can mean more creativity, comedy, connection … Live for joy, not for stuff.”
Everyone has a role to play
The climate crisis affects everybody. From women in the poorest communities to multinational conglomerates, everybody has a duty to engage with sustainable practices. The latest IPCC report highlighted, beyond all reasonable doubt, that alt-protein has a big part to play in the fight against climate change. Both cultivated and plant-based meats are cited as a potential solution to resource and emissions-heavy conventional meat.

 `,
    thumbnailURL: "",
    mediaURL: "6.jpg",
    mediaType: "image",
  },
];

db.serialize(() => {
  query10.forEach((item) => {
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
