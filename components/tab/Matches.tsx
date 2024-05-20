"use client"
import {Card} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

const MatchesTab=()=>{
    return(
        <div className="container p-1 max-w-2xl mt-10">
        <Link href={"/344522"}>
          <Card>
            <div className="flex justify-between p-5">
              <div>IPL</div>
              <div>
                <div>Live</div>
                <div className="item">
                  <i className="loader --1"></i>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-3 place-items-center">
                <div className="flex gap-10">
                  <div>
                    <p>icon</p>
                    <p>MI</p>
                  </div>
                  <div>
                    <p>144/7</p>
                    <p>(20)</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div>
                    <p>icon</p>
                    <p>MI</p>
                  </div>
                  <div>
                    <p>144/7</p>
                    <p>(20)</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs mt-5">
                LSG need 134 runs in 17 ovres to win. CRR: 3.77 RRR:7.83
              </p>
              <p className="text-center text-xs">T20 48 of 72</p>
            </div>
          </Card>
        </Link>

        <Link href={"/8495"}>
          <Card className="mt-2">
            <div className="flex justify-between p-5">
              <div>IPL</div>
              <div>
                <div>Live</div>
                <div className="item">
                  <i className="loader --1"></i>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-3 place-items-center">
                <div className="flex gap-10">
                  <div>
                    <p>icon</p>
                    <p>MI</p>
                  </div>
                  <div>
                    <p>144/7</p>
                    <p>(20)</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div>
                    <p>icon</p>
                    <p>MI</p>
                  </div>
                  <div>
                    <p>144/7</p>
                    <p>(20)</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs mt-5">
                LSG need 134 runs in 17 ovres to win. CRR: 3.77 RRR:7.83
              </p>
              <p className="text-center text-xs">T20 48 of 72</p>
            </div>
          </Card>
        </Link>

        <Card className="mt-4">
          <div className="grid grid-cols-2 grid-rows-1 gap-0">
            <div className='border-r hover:bg-gray-200'>
              <div className="flex justify-between px-5 text-xs p-2">
              <div>T20 48 of 72</div>
              <div>Today</div>
              </div>
              <Separator />
              <div className="mt-2">
                <div className="px-5 mb-1 text-sm flex-row justify-between">
                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>LSG</div>
                  </div>

                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>MI</div>
                  </div>

                </div>

                <Separator/>
                <div className="text-xs px-5 p-2 flex justify-between">
                  <div>Starts at 7:30 pm</div>
                  <div>Lucknow</div>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-200">
              <div className="flex justify-between px-5 text-xs p-2">
              <div>T20 48 of 72</div>
              <div>Today</div>
              </div>
              <Separator />
              <div className="mt-2">
                <div className="px-5 mb-1 text-sm flex-row justify-between">
                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>LSG</div>
                  </div>

                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>MI</div>
                  </div>
                </div>

                <Separator/>
                <div className="text-xs px-5 p-2 flex justify-between">
                  <div>Starts at 7:30 pm</div>
                  <div>Lucknow</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="mt-2">
          <div className="grid grid-cols-2 grid-rows-1 gap-0">
            <div className='border-r hover:bg-gray-200'>
              <div className="flex justify-between px-5 text-xs p-2">
              <div>T20 48 of 72</div>
              <div>Today</div>
              </div>
              <Separator />
              <div className="mt-2">
                <div className="px-5 mb-1 text-sm flex-row justify-between">
                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>LSG</div>
                  </div>

                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>MI</div>
                  </div>

                </div>

                <Separator/>
                <div className="text-xs px-5 p-2 flex justify-between">
                  <div>Starts at 7:30 pm</div>
                  <div>Lucknow</div>
                </div>
              </div>
            </div>

            <div className="hover:bg-gray-200">
              <div className="flex justify-between px-5 text-xs p-2">
              <div>T20 48 of 72</div>
              <div>Today</div>
              </div>
              <Separator />
              <div className="mt-2">
                <div className="px-5 mb-1 text-sm flex-row justify-between">
                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>LSG</div>
                  </div>

                  <div className="flex gap-2">
                    <div >icon</div>
                    <div>MI</div>
                  </div>
                </div>

                <Separator/>
                <div className="text-xs px-5 p-2 flex justify-between">
                  <div>Starts at 7:30 pm</div>
                  <div>Lucknow</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
}

export default MatchesTab