import React from 'react'

const PodcastEmbed = ({ image }) => {
  return (
    <div className='podcasts'>
      <h2>Spotify</h2>
      <iframe src="https://embed.spotify.com/?uri=spotify:episode:65BIKYeHysvvjPC5EJ2Qnp" width="100%" height="380" frameborder="0" allowtransparency="true"></iframe>

      <h2>Stitcher</h2>
      <iframe style={{ width: '100%', border: 'solid 1px #dedede'}} src="https://app.stitcher.com/splayer/f/183672/56365118" width="100%" height="150" frameborder="0" scrolling="no"></iframe>

      <h2>Art 19</h2>
      <iframe src="https://art19.com/shows/the-majordomo-podcast/episodes/540a4338-d3fb-448d-9938-5b5e73b512e9/embed" style={{ width: '100%', height: '200px', border: '0 none' }} scrolling="no"></iframe>
    </div>
  )
}

export default PodcastEmbed
