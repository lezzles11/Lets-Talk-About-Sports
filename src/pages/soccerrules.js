import React from "react"
import Video from "../components/Video"
import Layout from "../components/layout"

function Soccerrules() {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h1>Soccer Rules</h1>
      </div>{" "}
      <br />{" "}
      <div className="row justify-content-center">
        <Video
          videoSrcURL="https://www.youtube.com/embed/qg566N-eDWo"
          videoTitle="Soccer Rules"
        />
      </div>
    </Layout>
  )
}
export default Soccerrules
