import React from "react"

import Entry from "../pages/entry"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import { format, compareAsc } from "date-fns"
import { cloneDeep } from "lodash"
import { navigate } from "gatsby"
import ReactAudioPlayer from "react-audio-player"
import mp3File from "../assets/Calm.mp3"

const objectData = [
  {
    date: "2022-09-01",
    checked: false,
    topic: `🛕 Bochasanwasi Akshar Purushottam Swaminarayan Sanstha (BAPS) 🛕`,
    description: (
      <React.Fragment>
        Be not worried or feel alone. You are not alone, Shriji Maharaj,
        Gunatitanand Swami, Bhagatji Maharaj, Jaga Swami Maharaj, Shastriji
        Maharaj, Yogi Bapa and Pramukh Swami Maharaj are always and everyone is
        with you. <br />
        You just need to remember them. Switch is on - you receive benefits. All
        are there to help you, protect you, and even to prepare you for the
        after life. <br /> -Mahant Swami
      </React.Fragment>
    ),
    extraWords: `I know your life is auspicious and you have a beautiful soul. After all, Mahant Swami's birthday is one day after yours :). I am grateful that you introduced me to BAPS.
    I see how much stability it has created for you and united you under common values with a deep rooted commmunity.`,
    giftOpen: `Open Gift Package #1!`,
  },
  {
    date: "2022-09-02",
    checked: false,
    topic: `♫ Music ♫`,
    description: (
      <React.Fragment>
        What's fulfilling is being happy and being able to help other people.
        <br />
        The simple things. <br /> -James Arthur
      </React.Fragment>
    ),
    extraWords: `Music hits the soul differently and one thing about you is you LOVE music. I collected your favorite artists and made a playlist of 50 of your fave songs for you <3`,
    link: `https://open.spotify.com/playlist/1PDkQtHz2qjQZTI2FI7OWv?si=9ee87cd2dea942d5&pt=12432097777f688e17be64b16300c9d0`,
    linkLabel: `Spotify Playlist: For Pals 🌹`,
  },
  {
    date: "2022-09-03",
    checked: false,
    topic: `👒 Drip! 💃`,
    description: (
      <React.Fragment>
        Swervin' (swervin') <br /> How you look so perfect on your worst days?
        (Worst days)
        <br /> Double C your purses, you deserve it <br /> -A Boogie`
      </React.Fragment>
    ),
    extraWords: `Ah! You already know she from the city!!! Big drip vibes. I love your granularity with fashion down to the smallest details. 
    In another universe, I know your career would be a stylist 💅🏾`,
    giftOpen: `Open Gift Package #2!`,
  },
  {
    date: "2022-09-04",
    checked: false,
    topic: `😌 Relaxation & Peace 😌`,
    description: (
      <React.Fragment>
        "I love sleep. My life has the tendency to fall apart when I’m awake,
        you know?” —Ernest Hemingway
        <br />
        <br /> "Sleep is like a cat: It only comes to you if you ignore it."
        -Gillian Flynn
      </React.Fragment>
    ),
    showSound: true,
    extraWords: (
      <React.Fragment>
        I love that part of aura is sleep. You LOVE your sleep. So much that lot
        of your day depends on how many hours. I really am so optimistic that
        life will get better once you can sleep a lot more when you're working
        :). I know you loved relaxed vibes Palu. I can't wait for you to
        experience massages, your body and mind deeply relaxed.
        <br />
        <br />
        Passing out by your side is the most peaceful vibe too. Our nightly
        ritual of watching something then passing out feels so natural haha.
      </React.Fragment>
    ),
  },
  {
    date: "2022-09-05",
    checked: false,
    topic: `♍ Spirituality ♏`,
    description: `You think you know ... But you have NO idea. (Virgo Motto)`,
    extraWords: (
      <React.Fragment>
        Look at how similar the virgo and scorpio symbols are :). I love your
        spirituality. I also wanted someone to vibe without having to talk about
        it. That's how I feel about spirituality. It's like I can just tell you
        value it without explicitly asking you. Our atmas genuienly are
        connected.
        <br />
        <br />
        <b>Did you know?</b>
        <br />
        <br />
        (1) Communication flows easily between Virgos and Scorpios. Virgos are
        ruled by the Mercury—the literal communication planet—and though they
        sometimes like to keep what they say under wraps until it’s perfect,
        they’re typically extremely clear and articulate. Mars-ruled Scorpios
        similarly do not mince their words and try to communicate directly. In
        the early stages of dating, if Virgos are a bit shy about sharing their
        feelings, Scorpios know exactly how to get them to admit to a crush.
        Conversations are sure to get deep in this relationship and the truth
        always comes out.
        <br />
        <br />
        (2) Blake Lively and Ryan Reynolds are a Scorpio-Virgo match!
        <br />
        <br />
        (3) When it comes to living together, Virgos make bold choices as far as
        location and even decoration for the home while Scorpios like to stick
        to what’s classic. These two are both rather averse to nesting (they’d
        rather be on the go) so are sure to agree on keeping things light,
        affordable and easy to move.
      </React.Fragment>
    ),
    giftOpen: `Open Gift Package #3!`,
  },
  {
    date: "2022-09-06",
    checked: false,
    topic: `🇮🇳 Gujarat 👌`,
    description: `સોના જેઉં સાસરું પણ પિયર જેઉં નહીં – The grooms house may be made of gold, but her parent’s home is priceless.`,
    extraWords: `We bond on this. I love Indian culture. I think it's cool how you were literally born there and I was taken there as a kid.
    Sarangpur being your calm place is beatiful as well and I would love to see it one day with the peacocks too 🥺. 
    I hope to visit Baroda as well I see there are many interesting sites like palaces and cool monuments!! I'm sure the culture is BOOMING.
    I would love to also show you Kanpur and Hyderabad so we can each explore each other's roots. :)`,
    imageSrc: "palace.webp",
  },
  {
    date: "2022-09-07",
    checked: false,
    topic: `🥑 Food 🤤`,
    description: `“This pizza is so disgusting, if you take it to Italy you’ll get arrested.” -Gordon Ramsay`,
    extraWords: `Your love for food is UNPARALLELED. Watching YouTube videos about it, looking up restaurants constantly, engaging in food content on TikTok, it is apparent your love for food.
    Choose any food place you want, bubs. I'll pay for the order 🎟️ `,
    giftOpen: `Gift Package #4: Food of Choice :)`,
  },
  {
    date: "2022-09-08",
    checked: false,
    topic: `🌎 Traveling / Exploration 🥾`,
    description: `"Travel is the only thing you buy that makes you richer"`,
    extraWords: `One of my biggest connection items with you. Exploration and traveling will be a LARGE part of our lives. I already know.
    I am beyond beyond excited to just epxlore the world and see what comes of it.`,
  },
  {
    date: "2022-09-09",
    checked: false,
    topic: `👪 Family & TV 📺`,
    description: (
      <React.Fragment>
        Two more large parts of your life: Family and TV.
        <br />
        <br />
        Family: Your family is huge! So many cousins on both your mom and dad's
        side, esp on your mom's side! Your lucky to have such a large family. I
        am so excited for you to go to a wedding too!! It's going to be so much
        fun :D. It trips me to this day that you're a twin and I'll never forget
        the feeling I had when you first told me. I also love how hard your
        parents work and how much effort your mom puts for you. I can tell
        despite all things, that family is important to you :).
        <br />
        <br />
        TV: Someone loves their TV! Whether it be engaging in a whole another
        universe with magical creatures like Vampires and Werewolves and people
        can that use magic OR a reality show where lovers are made from scratch
        OR a show about doctors and the hospital environment, you really enjoy
        TV as a relaxation tool and fun experience.
      </React.Fragment>
    ),
    giftOpen: `Open Gift Package #5`,
  },
  {
    date: "2022-09-10",
    checked: false,
    topic: `🧑🏾 Shiki 🤗`,
    description: "All I have to really say!!! 🤪",
    extraWords: `Every time away from you feels like centuries and centuries. ECSTATIC to be reunited ♡. Coming through with this Banh Mi :)`,
    imageSrc: "FlightInfo.jpg",
  },
  {
    date: "2022-09-11",
    checked: false,
    topic: `👩‍⚕️ Medicine 👩‍⚕️`,
    description: `Wherever the art of Medicine is loved, there is also a love of Humanity. ― Hippocrates`,
    extraWords: `You really put your whole life force into craft of medicine, very rarely taking the easy route. 
    It is very respect worthy and noble what you do for others through this beautiful occupation. 
    No gift here :/ but I just want to tell you how much I support your passion for medicine. It makes me go harder in my craft and work too <3.`,
  },
  {
    date: "2022-09-12",
    checked: false,
    topic: `🎉 Celebrations 🎉`,
    description: `If kisses were stars, I'd give you the sky. If touches were tears, I would cry. If love was water, I'd give you the sea. And be with you for all eternity...`,
    extraWords: `Happy birthday my love!!!!!\n23 is HUGE! Every day is a blessed one with you. I am so happy I'm with you to celebrate and eat some dank food. Hopefully we can see a beatiful sunset too. :)`,
    imageSrc: "TopSunsetBackground.jpg",
    giftOpen: `Gift Package #6: La Planta :)`,
  },
]

const FormControlLabelPosition = ({ data, setData }) => {
  const switchRef = React.useRef(null)
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position">
        {data.map((switchDataObject, index) => {
          const date = switchDataObject.date
          const dateObject = new Date(date)
          dateObject.setDate(dateObject.getDate() + 1)
          let label = format(dateObject, "PPPP")
          if (date === "2022-09-12") label += "🎂🥳"
          let isDisabled = false
          if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
            // do nothing
          } else {
            isDisabled = compareAsc(new Date(date), Date.now()) > 0
          }
          return (
            <FormControlLabel
              key={switchDataObject.date}
              componentsProps={{ typography: { variant: "h4" } }}
              control={
                <Switch
                  key={switchDataObject.date}
                  color="success"
                  value={date}
                  ref={switchRef}
                  checked={switchDataObject.checked}
                  onChange={event => {
                    let clonedData = cloneDeep(data)
                    let object = clonedData.find(
                      element => element.date === event.target.value
                    )
                    let index = clonedData.findIndex(
                      element => element.date === event.target.value
                    )
                    object.checked = event.target.checked
                    clonedData[index] = object
                    clonedData.map(element => {
                      if (element.date !== event.target.value)
                        element.checked = false
                      return element
                    })
                    setData(clonedData)
                  }}
                  disabled={isDisabled}
                  style={{ cursor: "pointer" }}
                />
              }
              label={label}
              labelPlacement="end"
              className="border-gradient css-selector2 m-2 p-2"
              style={{ color: "white" }}
            />
          )
        })}
      </FormGroup>
    </FormControl>
  )
}

const TwelveDaysSeptember = ({ location }) => {
  const [data, setData] = React.useState(objectData)
  const checkedObject = data.find(element => element.checked === true)
  return (
    <div className="twelveDaysBackground">
      <Entry location={location}>
        <div className="container">
          <div style={{ marginTop: -20, marginBottom: 10 }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: 100, height: 30, fontSize: 14 }}
              onClick={() => {
                navigate("/")
              }}
            >
              Go Back
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FormControlLabelPosition data={data} setData={setData} />
            <div
              className="border-gradient css-selector"
              id="box"
              style={{ flex: "auto", textAlign: "center" }}
            >
              {!!checkedObject ? (
                <div>
                  {!!checkedObject?.topic && (
                    <>
                      <h1 style={{ color: "white", fontFamily: "cursive" }}>
                        {checkedObject.topic}
                      </h1>
                      <br />
                    </>
                  )}
                  <h1
                    style={{
                      color: "white",
                      fontFamily: "fantasy",
                      fontSize: 20,
                    }}
                  >
                    {checkedObject.description}
                  </h1>
                  <br />
                  {!!checkedObject.showSound && (
                    <div style={{ paddingBottom: 30 }}>
                      <ReactAudioPlayer src={mp3File} controls />
                    </div>
                  )}
                  {!!checkedObject?.extraWords && (
                    <>
                      <h1 style={{ color: "white", fontFamily: "fantasy" }}>
                        {checkedObject.extraWords}
                      </h1>
                      <br />
                    </>
                  )}
                  {!!checkedObject.giftOpen && (
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <h1
                        style={{
                          color: "black",
                          fontFamily: "fantasy",
                          fontWeight: "bold",
                          padding: 10,
                          border: "5px solid black",
                        }}
                        className="rainbow-text"
                      >
                        {checkedObject.giftOpen}
                      </h1>
                      <br />
                    </div>
                  )}
                  {!!checkedObject.link && !!checkedObject.linkLabel && (
                    <a
                      href={checkedObject.link}
                      style={{ fontWeight: "bold" }}
                      target="_blank"
                    >
                      {checkedObject.linkLabel}
                    </a>
                  )}
                  {!!checkedObject.imageSrc && (
                    <div
                      className="twelve-days-image"
                      style={{
                        backgroundImage: `url(${
                          require("../assets/" + checkedObject.imageSrc).default
                        })`,
                        height:
                          checkedObject.imageSrc === "palace.webp" && "400px",
                      }}
                    ></div>
                  )}
                </div>
              ) : (
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontStyle: "oblique",
                      fontFamily: "cursive",
                      fontSize: 50,
                    }}
                    className="popout"
                  >
                    Click on a Date to see more!
                  </h1>
                  <h3
                    style={{
                      color: "white",
                      opacity: 0.6,
                    }}
                  >
                    (Each 12 Day of September represents a part of you, what
                    makes up your life)
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </Entry>
    </div>
  )
}

export default TwelveDaysSeptember
