import React from "react";
import "./bird-info.css";

const BirdInfo = () => {
  return (
    <div className="col-md-6">
      <div className="bird-details card">
        <div className="card-body">
          <img
            className="bird-image"
            src="https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg"
            alt="Кукушка"
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Кукушка</h4>
            </li>
            <li className="list-group-item">
              <span>Cuculus canorus</span>
            </li>
            <li className="list-group-item">
              <div className="audio-player">
                <audio
                  src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"
                  hidden=""
                ></audio>
                <div className="controls">
                  <div className="playback-button">
                    <svg viewBox="-200 0 1200 1000">
                      <path
                        fill="#00bc8c"
                        d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"
                      ></path>
                    </svg>
                  </div>
                  <div className="timebar ">
                    <div className="timebar-bar"></div>
                    <div className="timebar-circle"></div>
                    <div className="timebar-time-info">
                      <div>00:00</div>
                      <div>00:32</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <span className="bird-description">
          Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не
          спутать ни с какой другой птицей. Кукушки не строят гнезда, их
          потомство выращивают другие виды пернатых, которым кукушки
          подбрасывают свои яйца.
        </span>
      </div>
    </div>
  );
};

export default BirdInfo;
