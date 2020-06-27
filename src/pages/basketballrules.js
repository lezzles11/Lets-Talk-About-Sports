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
          videoSrcURL="https://www.youtube.com/embed/wYjp2zoqQrs"
          videoTitle="Basketball Rules"
        />
      </div>
    </Layout>
  )
}
export default Basketballrules
