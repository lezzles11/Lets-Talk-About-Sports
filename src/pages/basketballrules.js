import React from "react"
import Video from "../components/Video"
import Layout from "../components/layout"
function Basketballrules() {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h1>Basketball Rules</h1>
      </div>
      <br />
      <div className="row justify-content-center">
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
      To DO: - Time of game <br />- History of basketball <br />- What the
      penalties are <br />- How to choose what time to root for <br />- Unspoken
      rules of basketball <br />- Additional resources: reddit, pinterest, etsy
    </Layout>
  )
}
export default Basketballrules
