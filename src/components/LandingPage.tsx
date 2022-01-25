import {
  GiRetroController,
  GiMouse,
  GiBroadsword,
  GiBrickWall,
  GiStarsStack

} from "react-icons/gi";

import DittoImg from "../assets/ditto.png"
import HomeImage from "../assets/playstation-titles.png"
import Catalogue from "../assets/game-titles.png"
import GameData from "../assets/game-data.png"
import RandomGames from "../assets/random-games.jpg"
import CiriLooking from "../assets/ciri-looking.png"
import GodOfWar from "../assets/god-of-war-cover.jpg"
import SantaMonica from "../assets/santa-monica-logo.png"
import Insomniac from "../assets/insomniac-logo.png"
import Ubisoft from "../assets/ubisoft-logo.png"
import BandaiNamco from "../assets/bandai-namco-logo.png"
import NaughtyDog from "../assets/naughty-dog-logo.png"

const features = [
  {
    name: 'All Platforms',
    description: 'Stay on top of the platforms each game was released on. Play whichever you prefer.',
    icon: GiRetroController,
  },
  {
    name: 'All Game Genres',
    description: 'Heard of a game genre you didn\'t know about? Stay on top of all game genres!',
    icon: GiBroadsword,
  },
  {
    name: 'Miss The Classics?',
    description: 'Don\'t know your favorite classic as well as you\`d like? Studio, release date, platforms, all in one place.',
    icon: GiBrickWall,
  },
  {
    name: 'Game Ratings',
    description: 'Do you like to know the game notes? Get lists of the best and worst titles based on Metacritic ratings.',
    icon: GiStarsStack,
  }
]

const metrics = [
  { id: 1, stat: '2M+', emphasis: 'Game Screenshots', rest: 'for you to see the brilliance of the game environment and characters.' },
  { id: 2, stat: '1M+', emphasis: 'Ratings', rest: 'by the community and review specialists given by Metacritic.' },
  { id: 3, stat: '45K+', emphasis: 'Publishers', rest: 'like Sony, CD Projekt Red, Bethesda and much more!' },
  { id: 4, stat: '58K+', emphasis: 'Tags', rest: 'including game genres, platforms and etc.' },
]

export default function LandingPage() {
  return (
    <div className="bg-dark">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-dark" />
          <div className="max-w-7xl sm:pt-8 pb-8 mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={HomeImage}
                  alt="Playstation Titles"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ">
                  <span className="block text-white">Take control of your</span>
                  <span className="block text-light-aqua">gamer experience</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  All that you need to consume your gamer desire, let it out your true gamer personality!
                  <p>"To be a gamer... To be a player [...]" ~ Zangado</p> 

                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple bg-white bg-opacity-80 hover:bg-opacity-90 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple bg-light-aqua bg-opacity-80 hover:bg-opacity-90 sm:px-8"
                    >
                      Go searching
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gradient-to-r from-light-aqua to-purple">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center mb-16 text-sm font-semibold uppercase text-purple tracking-wide">
              Get to know every game from your favorite game studio developer!
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center pt-1 md:col-span-2 lg:col-span-1">
                <img className="h-14" src={SantaMonica} alt="Santa Monica Studio Icon" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-14" src={Ubisoft} alt="Ubisoft Icon" />
              </div>
              <div className="col-span-1 flex justify-center pt-2 md:col-span-2 lg:col-span-1">
                <img className="h-12" src={BandaiNamco} alt="Bandai Namco Icon" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img className="h-14" src={NaughtyDog} alt="Naughty Dog Inc. Icon"/>
              </div>
              <div className="col-span-2 flex justify-center pt-1 md:col-span-3 lg:col-span-1">
                <img className="h-14" src={Insomniac} alt="Insomniac Icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b bg-dark" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <GiRetroController className="h-9 w-9 text-light-purple" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                      Stay on top of the great titles
                    </h2>
                    <p className="mt-4 text-lg text-white">
                      Stop being surprised when a great title is finally released or ends up being ported to a specific
                      platform. Stay on top with their current release dates, community rating, which one is its game studio
                      or even for what platforms one game will be released. You can get all of this here!
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-purple bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-opacity-80"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-purple pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base font-medium text-white">
                        God of War (2018), Santa Monica Studio <p>Winner of the Game of The Year award in 2018</p>
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-40 w-40 rounded-xl"
                            src={GodOfWar}
                            alt=""
                          />
                        </div>
                        <div className="text-base text-white">
                          &ldquo;It is a new beginning for Kratos. Living as a man, outside the shadow of the gods, he
                          seeks solitude in the unfamiliar lands of Norse mythology. With new purpose and his son at his
                          side, Kratos must fight for survival as powerful forces threaten to disrupt the new life he
                          has created...&rdquo;
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={GameData}
                    alt="Games Catalogue"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <GiMouse className="h-10 w-10 text-light-purple" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">
                      Not only AAA titles needs atention
                    </h2>
                    <p className="mt-4 text-lg text-white">
                      Be in tune with small team developed titles. Being part of an adventure, a great story; remember
                      that a story is not written by graphics, but so by character, facts and plot development. A game
                      is always a game, and not only great titles are capable of entertain and amuse a player.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-purple bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-opacity-80"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Catalogue}
                    alt="Games API Data"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Your most complete game data library
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-white">
              Be able to search specific data and informations about your favorite game title.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-light-purple">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-white">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative bg-purple">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-30 xl:absolute xl:inset-0"
                  src={CiriLooking}
                  alt="Other Game Titles"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-purple xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Valuable Metrics
                </span>
              </h2>
              <p className="text-3xl font-extrabold bg-gradient-to-r text-white">
                Get full data from the epic and magnificent world of games
              </p>
              <p className="mt-5 text-lg text-white">
                Here you are able to see screenshots, Metacritic ratings, searching by tags, Steam average playtime
                and more. You dont't need to be stuck in basic game data, you can get also links to digital distribution
                to know where to buy games and the official websites and even system requirements and YouTube videos.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-aqua">{item.stat}</span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-dark">
          <div className="max-w-4xl mx-auto py-10 px-8 sm:px-10 sm:py-16 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-aqua to-light-purple bg-clip-text text-transparent">
                Ready to get into this?!
              </span>
              <p>
                <span className="bg-gradient-to-r from-aqua to-light-purple bg-clip-text text-transparent">
                  Go search your favorite titles.
                </span>
              </p>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center bg-purple px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-opacity-80"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-purple px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white  hover:bg-opacity-80"
              >
                Go searching
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
