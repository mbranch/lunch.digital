import React from "react"
import { Lunch } from "./Lunch"
import lunchImage from "./lunch.jpg"

function App() {
  return (
    <>
      <main className="text-white bg-black w-full mb-[75vh] min-h-[100vh]">
        {/* Intro */}
        <div className="px-[4vw]">
          <div className="text-left">
            <Lunch className="pb-[44vh] pt-[44vh] w-full fill-white md:pt-[6vh] md:pb-0" />
          </div>
          <div className="text-[7vw] leading-[8vw] space-y-4 mt-[2vw] mb-[8vw] md:mb-[6vw] md:text-[6vw] md:leading-[7vw] ">
            <p className="md:pt-[2vw]">
              We are a modern digital search firm that assembles teams for startups and growth stage
              companies.
            </p>
            <p className="md:pt-[4vw]">We focus on product, design, and engineering.</p>
          </div>
        </div>
        {/* Clients */}
        <div className="text-black bg-gray-200 w-full pb-[6vw] pt-[4vw]">
          <div className="px-[4vw] text-[7vw] leading-[9vw] md:text-[6vw] md:leading-[8vw]">
            <div className="md:grid md:grid-cols-2">
              <div className="text-[5vw] sticky top-0 z-10 bg-gray-200 h-[8vw]">
                <div className="flex items-center">
                  <Lunch className="inline-block pr-[2vw] pl-1 w-[15.5vw] fill-black mt-[-0.4vw]" />
                  <span>Clients</span>
                </div>
              </div>
              <div>
                <div>
                  <a className="link" href="https://adobe.com/">
                    Adobe
                  </a>
                </div>
                <div>
                  <a className="link" href="https://better.com/">
                    Better
                  </a>
                </div>
                <div>
                  <a className="link" href="https://candy.com/">
                    Candy
                  </a>
                </div>
                <div>
                  <a className="link" href="https://coastpay.com/">
                    Coast
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.livefeather.com/">
                    Feather
                  </a>
                </div>
                <div>
                  <a className="link" href="https://foursquare.com/">
                    FourSquare
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.grammarly.com/">
                    Grammarly
                  </a>
                </div>
                <div>
                  <a className="link" href="https://headway.co/">
                    Headway
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.mantrahealth.com/">
                    Mantra Health
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.modaoperandi.com/">
                    Moda Operandi
                  </a>
                </div>
                <div>
                  <a className="link" href="#">
                    Public
                  </a>
                </div>
                <div>
                  <a className="link" href="https://genius.com/">
                    Rap Genius
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.servicenow.com/">
                    ServiceNow
                  </a>
                </div>
                <div>
                  <a className="link" href="https://warbyparker.com/">
                    Warby Parker
                  </a>
                </div>
                <div>And More</div>
              </div>
            </div>
          </div>
        </div>
        {/* Team */}
        <div className="text-white bg-black w-full pt-[4vw]">
          <div className="px-[4vw] text-[7vw] leading-[9vw]">
            <div className="text-[5vw] sticky top-0 z-10 bg-black">
              <div className="flex items-center">
                <Lunch className="inline-block pr-[2vw] pl-1 w-[15.5vw] fill-white mt-[-0.4vw]" />
                <span>Team</span>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-[2vw]">
              <div className="flex py-[4vw] border-t border-white md:flex-col-reverse md:border-none md:py-0">
                <div className="w-1/2 text-[5vw] leading-[6vw] md:text-[4vw] leading-[5vw] md:w-full md:pt-[2vw]">
                  <div>Matthew Clark</div>
                  <div className="text-gray-500 font-light">Founder</div>
                </div>
                <div className="w-1/2 md:w-full">
                  <div
                    className="bg-gray-300 bg-center rounded-[3vw] h-[45vw] bg-cover ml-[2vw] md:ml-0"
                    style={{ backgroundImage: `url(${lunchImage})` }}
                  ></div>
                </div>
              </div>
              <div className="flex py-[4vw] border-t border-white md:flex-col-reverse md:border-none md:py-0">
                <div className="w-1/2 text-[5vw] leading-[6vw] md:text-[4vw] leading-[5vw] md:w-full md:pt-[2vw]">
                  <div>Will Mayfield</div>
                  <div className="text-gray-500 font-light">Founder</div>
                </div>
                <div className="w-1/2 md:w-full">
                  <div
                    className="bg-gray-300 bg-center rounded-[3vw] h-[45vw] bg-cover ml-[2vw] md:ml-0"
                    style={{ backgroundImage: `url(${lunchImage})` }}
                  ></div>
                </div>
              </div>
              <div className="flex py-[4vw] border-t border-white md:flex-col-reverse md:border-none md:py-0">
                <div className="w-1/2 text-[5vw] leading-[6vw] md:text-[4vw] leading-[5vw] md:w-full md:pt-[2vw]">
                  <div>Lucy Bell Hall</div>
                  <div className="text-gray-500 font-light">Founder</div>
                </div>
                <div className="w-1/2 md:w-full">
                  <div
                    className="bg-gray-300 bg-center rounded-[3vw] h-[45vw] bg-cover ml-[2vw] md:ml-0"
                    style={{ backgroundImage: `url(${lunchImage})` }}
                  ></div>
                </div>
              </div>
              <div className="flex py-[4vw] border-t border-white md:flex-col-reverse md:border-none md:py-0">
                <div className="w-1/2 text-[5vw] leading-[6vw] md:text-[4vw] leading-[5vw] md:w-full md:pt-[2vw]">
                  <div>Shimon Herman</div>
                  <div className="text-gray-500 font-light">Founder</div>
                </div>
                <div className="w-1/2 md:w-full">
                  <div
                    className="bg-gray-300 bg-center rounded-[3vw] h-[45vw] bg-cover ml-[2vw] md:ml-0"
                    style={{ backgroundImage: `url(${lunchImage})` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="pb-[8vw] mt-[6vw]">
              <div className="flex md:grid md:grid-cols-2 gap-[2vw]">
                <div className="flex-grow border-t border-white">
                  <div className="text-[5vw] leading-[6vw] pt-[1vw] md:text-[4vw] leading-[5vw] ">
                    <div>Vitor Cestare</div>
                    <div className="text-gray-500 font-light">Researcher</div>
                  </div>
                </div>
                <div className="flex-grow border-t border-white">
                  <div className="text-[5vw] leading-[6vw] pt-[1vw] md:text-[4vw] leading-[5vw] ">
                    <div>Natalia Sena</div>
                    <div className="text-gray-500 font-light">Researcher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="flex flex-col-reverse justify-between fixed bg-gray-300 w-full z-[-1] h-[75vh] top-[25vh]">
        <div className="">
          <div className="pb-[2vw]">
            <Lunch className="w-full max-h-[25vh] fill-black px-[4vw]" />
          </div>
        </div>
        {/* Social */}
        <div className="text-black bg-gray-300 w-full">
          <div className="p-[4vw] space-y-[4vw] text-gray-700 font-light text-[5vw] leading-[6vw]">
            <div>
              <div>Social</div>
              <div className="text-gray-500">
                <a href="https://www.instagram.com/lunch.digital">Instagram</a> /{" "}
                <a href="https://www.linkedin.com/company/ineedlunch/">LinkedIn</a>
              </div>
            </div>
            <div>
              <div>Email</div>
              <div className="text-gray-500">
                <a href="mailto:info@lunch.digital">info@lunch.digital</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
