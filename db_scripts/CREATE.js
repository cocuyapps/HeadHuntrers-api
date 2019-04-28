db.createCollection("albums");

db.albums.insertMany([
    {
    "title": "Taylor Swift",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
    "songs":[
      {
        "artist": "Taylor Swift",
        "title": "Picture to Born",
        "albumArtUrl": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Picture_To_Born.mp3"
      },
      {
        "artist": "Taylor Swift",
        "title": "Love Story",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Love_Story.mp3"
      }
    ],
    "likes": 0,
    "genre": "Country",
    "description": "Taylor Swift is the first self-titled studio album by country singer and songwriter Taylor Swift. The album was released on October 24, 2006 under the label Big Machine Records. Swift wrote the songs for the album during her first year of high school and has written the credits on all the songs on the albums including the songs co-written with Liz Rose. Swift experimented recording the album with many producers, ultimately choosing the producer who produced his demo, Nathan Chapman. Musically, the album has country and pop music style, and lyrically, it talks about romantic relationships, a pair that Swift wrote observing relationships before being in one."
  }
  ,
  {
    "title": "Fearless",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
    "songs":[
      {
        "artist": "Taylor Swift",
        "title": "White Horse",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/White_Horse.mp3"
      },
      {
        "artist": "Taylor Swift",
        "title": "Tell Me Why",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Tell_Me_Why.mp3"
      }
    ],
    "likes": 0,
    "genre": "Country",
    "description": "Fearless is the second studio album by American pop and pop singer Taylor Swift. The album was released on November 11, 2008, through the label Big Machine Records, debuting at No. 1 on Billboard 200 and Top Country Albums. The release sold 592,000 copies in the United States in its first week, being the largest sum for an album in that country since the Eagles album, Long Road Out of Eden in November 2007."
  },
  {
    "title": "Speak Now",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
    "songs":[
      {
        "artist": "Taylor Swift",
        "title": "Superman",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Superman.mp3"
      },
      {
        "artist": "Taylor Swift",
        "title": "Dear John",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Dear_John.mp3"
      }
    ],
    "likes": 0,
    "genre": "Country",
    "description": "Speak Now is the third studio album by American singer-songwriter Taylor Swift. It was released on October 25, 2010, by Big Machine Records. Production for the album took place during 2009 to 2010 at several recording studios, and was handled by Swift and Nathan Chapman. Written entirely by Swift as the follow-up to Fearless, Speak Now expands on the country pop style of her previous work, and features lyrical themes including love, romance, and heartbreak."
  },
  {
    "title": "Red",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
    "songs":[
      {
        "artist": "Taylor Swift",
        "title": "State of Grace",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/State_Of_Grace.mp3"
      },
      {
        "artist": "Taylor Swift",
        "title": "Begin Again",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Begin_Again.mp3"
      }
    ],
    "likes": 0,
    "genre": "Country",
    "description": "Red is the fourth studio album by American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records, as the follow-up to her third studio album, Speak Now. The album title was inspired by the semi-toxic relationships that Swift experienced during the process of conceiving this album, with Swift describing the emotions she felt as red emotions due to their intense and tumultuous nature. Red touches on Swift's signature themes of love and heartbreak, however, from a more mature perspective while exploring other themes such as fame and the pressure of being in the limelight. She explained how red can be associated with feelings on “opposite ends of the spectrum.”"
  },
  {
    "title": "1989",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
    "image": "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
    "songs":[
      {
        "artist": "Taylor Swift",
        "title": "Blank Space",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Blank_Space.mp3"
      },
      {
        "artist": "Taylor Swift",
        "title": "Bad Blood",
        "albumArtUrl":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        "audioUrl": "https://albumapp-api.herokuapp.com/Bad_Blood.mp3"
      }
    ],
    "likes": 0,
    "genre": "Country",
    "description": "1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014 through Big Machine Records. Songwriting for the album commenced in mid-2013, during which time contemporary critics had noted her fourth studio album Red for its mild departure from Swift's signature country sound and incorporation of straightforward pop production, a result of her collaborations with Swedish producers Max Martin and Shellback. For Red's follow-up, the singer decided to completely forsake her trademark country styles and was inspired by pop music of the 1980s for its experimentation with synthesizers and overlapped vocals. Martin served as executive producer alongside Swift in overseeing the coalition of the album."
  },
  {
    "title": "Hopes and Fears",
    "artist": "Keane",
    "url": "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
    "image": "https://img.discogs.com/fi0q5BXg995l6ElKVgmaaYlOwNE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1533283-1484042671-7932.jpeg.jpg",
    "thumbnail_image": "https://images-na.ssl-images-amazon.com/images/I/71w1BmR9igL.png",
    "songs":[
      {
        "artist": "Keane",
        "title": "Somewhere Only We Know",
        "albumArtUrl":"https://img.discogs.com/fi0q5BXg995l6ElKVgmaaYlOwNE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1533283-1484042671-7932.jpeg.jpg",
        "audioUrl": "https://headhuntersapp-api.herokuapp.com/Keane-SomewhereOnlyWeKnow.mp3"
      },
      {
        "artist": "Keane",
        "title": "Everybody's Changing",
        "albumArtUrl":"https://img.discogs.com/fi0q5BXg995l6ElKVgmaaYlOwNE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1533283-1484042671-7932.jpeg.jpg",
        "audioUrl": "https://headhuntersapp-api.herokuapp.com/Keane-EverybodysChanging.mp3"
      }
    ],
    "likes": 0,
    "genre": "Rock",
    "description": "Hopes and Fears is the debut studio album by the English alternative rock band Keane. It was released on 10 May 2004 in the United Kingdom and topped the UK Albums Chart upon release. It was the second best-selling British album of 2004, behind the Scissor Sisters' self-titled debut album, and has since been certified 9× Platinum by the BPI. The album returned to the top of the charts after winning a Brit Award for Best Album in February 2005."
  }
]);