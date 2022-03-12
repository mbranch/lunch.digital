import React from "react"
import { Lunch } from "./Lunch"
import lunchImage from "./lunch.jpg"

function App() {
  return (
    <>
      <main className="text-white bg-black w-full mb-[50vh] min-h-[100vh]">
        {/* Intro */}
        <div className="px-[4vw]">
          <div className="text-left">
            <Lunch className="mb-[44vh] pt-[44vh] w-full fill-white" />
          </div>
          <div className="text-[7vw] leading-[9vw] space-y-4 mt-[2vw] mb-[8vw]">
            <p>
              We’re a modern digital search firm that assembles teams for startups and growth stage
              companies.
            </p>
            <p>
              We focus on mobile, web, and web3 development; graphic & interface design; and product
              management.
            </p>
          </div>
        </div>
        {/* Clients */}
        <div className="text-black bg-white w-full pb-[6vw] pt-[4vw]">
          <div className="px-[4vw] text-[7vw] leading-[9vw]">
            <div>
              <div className="flex items-center text-[5vw] sticky top-0 z-10 bg-white">
                <Lunch className="inline-block pr-[2vw] pl-1 w-[15.5vw] fill-black mt-[-0.4vw]" />
                <span>Clients</span>
              </div>
              <div>
                <div>
                  <a className="link" href="https://better.com/">
                    Better.com
                  </a>
                </div>
                <div>
                  <a className="link" href="https://warbyparker.com/">
                    Warby Parker
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.translationllc.com/">
                    Translation
                  </a>
                </div>
                <div>
                  <a className="link" href="https://buffy.co/">
                    Buffy
                  </a>
                </div>
                <div>
                  <a className="link" href="https://genius.com/">
                    Rap Genius
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.modaoperandi.com/">
                    Moda Operandi
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.mantrahealth.com/">
                    Mantra Health
                  </a>
                </div>
                <div>
                  <a className="link" href="https://candy.com/">
                    Candy
                  </a>
                </div>
                <div>
                  <a className="link" href="https://adobe.com/">
                    Adobe
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.livefeather.com/">
                    Feather
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.trialspark.com/">
                    TrialSpark
                  </a>
                </div>
                <div>
                  <a className="link" href="https://coastpay.com/">
                    Coast
                  </a>
                </div>
                <div>
                  <a className="link" href="https://www.schools.nyc.gov/">
                    NYCDOE
                  </a>
                </div>
                <div>and more...</div>
              </div>
            </div>
          </div>
        </div>
        {/* Clients */}
        <div className="text-white bg-black w-full">
          <div className="px-[4vw] text-[7vw] leading-[9vw]">
            <div className="flex items-center text-[5vw] sticky top-0 z-10 bg-black border-b border-white">
              <Lunch className="inline-block pr-[2vw] pl-1 w-[15.5vw] fill-white mt-[-0.4vw]" />
              <span>Team</span>
            </div>
            <div className="grid grid-cols-2 py-[4vw]">
              <div className="text-[5vw] leading-[6vw]">
                <div>Matthew Clark</div>
                <div className="text-gray-500 font-light">Founder</div>
              </div>
              <div>
                <div
                  className="bg-gray-300 bg-center rounded-[3vw] h-[50vw] bg-cover"
                  style={{ backgroundImage: `url(${lunchImage})` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-[5vw] border-t border-white">
              <div className="text-[5vw] leading-[6vw]">
                <div>Will Mayfield</div>
                <div className="text-gray-500 font-light">Partner</div>
              </div>
              <div>
                <div
                  className="bg-gray-300 bg-center rounded-[3vw] h-[50vw] bg-cover"
                  style={{ backgroundImage: `url(${lunchImage})` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-[5vw] border-t border-white">
              <div className="text-[5vw] leading-[6vw]">
                <div>Lucy Belle Hall</div>
                <div className="text-gray-500 font-light">Senior Recruiter</div>
              </div>
              <div>
                <div
                  className="bg-gray-300 bg-center rounded-[3vw] h-[50vw] bg-cover"
                  style={{ backgroundImage: `url(${lunchImage})` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-[5vw] border-t border-white">
              <div className="text-[5vw] leading-[6vw]">
                <div>Shimon Herman</div>
                <div className="text-gray-500 font-light">Technical Recruiter</div>
              </div>
              <div>
                <div
                  className="bg-gray-300 bg-center rounded-[3vw] h-[50vw] bg-cover"
                  style={{ backgroundImage: `url(${lunchImage})` }}
                ></div>
              </div>
            </div>
            <div className="pb-[8vw]">
              <div className="grid grid-cols-2">
                <div className="border-t border-white mr-[4vw]">
                  <div className="text-[5vw] leading-[6vw] pt-[1vw]">
                    <div>Vitor Cestare</div>
                    <div className="text-gray-500 font-light">Researcher</div>
                  </div>
                </div>
                <div className="border-t border-white">
                  <div className="text-[5vw] leading-[6vw] pt-[1vw]">
                    <div>Natalia Sena</div>
                    <div className="text-gray-500 font-light">Researcher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social */}
        <div className="text-black bg-gray-300 w-full">
          <div className="p-[4vw] space-y-[4vw] text-gray-700 font-light text-[5vw] leading-[6vw]">
            <div>
              <div>Social</div>
              <div className="text-gray-500">Instagram / LinkedIn</div>
            </div>
            <div>
              <div>Email</div>
              <div className="text-gray-500">
                <a href="mailto:info@lunch.digital">info@lunch.digital</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer
        className={"flex flex-col-reverse fixed bg-gray-300 w-full  z-[-1] h-[50vh] top-[50vh]"}
      >
        <div className="pb-[2vw]">
          <Lunch className="w-full fill-black px-[4vw]" />
        </div>
      </footer>
    </>
  )
}

export default App
