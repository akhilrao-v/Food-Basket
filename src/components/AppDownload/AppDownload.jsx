import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/frontend_assets/assets';

function AppDownload() {
  return (
    <div className="app-download" id='app-download'>
      <h3>Download Our App</h3>
      <p>Get the best food delivery experience at your fingertips.</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </div>
  )
}

export default AppDownload