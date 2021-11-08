import React from "react";
import Playlistcomponent from "./Playlistcomponent";
import "./Playlist.css";
import Easy_on_Me from "./images/Easy_on_Me.jpg";
import Fancy_Like from "./images/Fancy_Like.jpg";
import Bubbly from "./images/Bubbly.jpg";
import Happier_Than_Ever from "./images/Happier_Than_Ever.jpg";
import Heat_Waves from "./images/Heat_Waves.jpg";
import Industry_Baby from "./images/Industry_Baby.jpg";
import Knife_Talk from "./images/Knife_Talk.jpg";
import Love_Nwantiti from "./images/Love_Nwantiti.jpg";

function Playlist() {
  return (
    <div className="Playlist">
      <h2>Most Popular</h2>
      <p>92 Songs</p>
      <div className="component__div">
        <Playlistcomponent
          image={Easy_on_Me}
          title="Easy On Me"
          artist="Adele"
          duration="3:22"
        />
        <Playlistcomponent
          image={Fancy_Like}
          title="Fancy Like"
          artist="Walker Hayes"
          duration="3:22"
        />
        <Playlistcomponent
          image={Bubbly}
          title="Bubbly"
          artist="Young Thug"
          duration="3:22"
        />
        <Playlistcomponent
          image={Easy_on_Me}
          title="Easy On Me"
          artist="Adele"
          duration="3:22"
        />
        <Playlistcomponent
          image={Heat_Waves}
          title="Heat Waves"
          artist="Glass Animals"
          duration="3:22"
        />
        <Playlistcomponent
          image={Industry_Baby}
          title="Industry Baby"
          artist="Lil Nas X"
          duration="3:22"
        />
        <Playlistcomponent
          image={Easy_on_Me}
          title="Easy On Me"
          artist="Adele"
          duration="3:22"
        />
      </div>
    </div>
  );
}

export default Playlist;
