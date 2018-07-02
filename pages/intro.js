import React from 'react'
import Layout from '../components/Layout'

const WINERIES = [
  {
    name: 'Castello di Amorosa,  Darioush, and Sterling Wineries',
    video: 'https://www.youtube.com/embed/FPrAJ7yqoiI',
    quote: '"Wine is sunlight, held together by water." -Galileo',
  },
  {
    name: 'Rombauer Winery',
    video: 'https://youtube.com/embed/uTURlfz_rD4',
    quote: '"My only regret in life is that I didn’t drink enough Champagne." -Robert Noecker',
  },
  {
    name: 'Robert Mondavi Winery',
    video: 'https://youtube.com/embed/GeFgrOTxZXw',
    quote: '"Either give me more wine or leave me alone." -Rumi',
  },
];


class IntroductionPage extends React.Component {

  state = {}

  render() {
    return (
      <Layout title="intro">

        <meta charSet="utf-8" />

        <marquee><h1>VineQuest</h1></marquee>

        {
          WINERIES.map((winery, idx) => (
            <div className="winery" key={idx}>
              <h3>{winery.name}</h3>
              <div id="video" className="side-by-side">
                <iframe width="574" height="290" src={winery.video} frameBorder="0" allow="autoplay; encrypted-media"
                  align="middle" allowFullScreen></iframe>
              </div>
              <h1>
                <p id="rumi">{winery.quote}</p>
              </h1>
            </div>
          ))
        }

      </Layout>
    )
  }
}

export default IntroductionPage
