import React from "react"
import Video from "../components/Video"
import Layout from "../components/layout"

function Soccerrules() {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h1>Soccer Rules</h1>
      </div>{" "}
      <br />
      <div className="row justify-content-center">
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </Layout>
  )
}
export default Soccerrules
