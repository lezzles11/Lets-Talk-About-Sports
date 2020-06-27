import React from "react"

export default function CardDescription({ team }) {
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-center">
                  <h2 className="font24">Read more about the {team.strTeam}</h2>
                </div>
                <div className="row justify-content-left"></div>
                <p className="font24 text-muted font-weight-light ml-3 mb-5">
                  {team.strDescriptionEN}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
