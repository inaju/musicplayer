import React from "react";
import "./Billboard.css";
import Songcover from "./Songcover";
import bad_habits from "./images/bad_habits.jpg";
import Easy_on_Me from "./images/Easy_on_Me.jpg";
import Fancy_Like from "./images/Fancy_Like.jpg";

import Bubbly from "./images/Bubbly.jpg";
import Happier_Than_Ever from "./images/Happier_Than_Ever.jpg";
import Heat_Waves from "./images/Heat_Waves.jpg";
import Industry_Baby from "./images/Industry_Baby.jpg";
import Knife_Talk from "./images/Knife_Talk.jpg";
import Love_Nwantiti from "./images/Love_Nwantiti.jpg";

function Billboard() {
  return (
    <div className="billboard__main">
      <div className="billboard__header">
        <h1>Billboard Topchart</h1>
      </div>
      <div className="billboard">
        <div className="songcover__covers">
          <Songcover
            image={Industry_Baby}
            title="Industry Baby"
            artist="Lil Nas X"
          />
          <Songcover
            image={Fancy_Like}
            title="Fancy Like"
            artist="Walker Hayes"
          />
          {/* <Songcover image={bad_habits} title="Shivers" artist="Ed Sheeran" /> */}
          <Songcover image={Easy_on_Me} title="Easy On Me" artist="Adele" />
          <Songcover image={Bubbly} title="Bubbly" artist="Young Thug" />
          <Songcover
            image={Happier_Than_Ever}
            title="Happier Than Ever"
            artist="Billie Eilish"
          />
          <Songcover
            image={Heat_Waves}
            title="Heat Waves"
            artist="Glass Animals"
          />
          <Songcover
            image={Industry_Baby}
            title="Industry Baby"
            artist="Lil Nas X"
          />
          <Songcover image={Knife_Talk} title="Knife Talk" artist="Drake" />
          <Songcover
            image={Heat_Waves}
            title="Heat Waves"
            artist="Glass Animals"
          />
          <Songcover
            image={Love_Nwantiti}
            title="Love_Nwantiti (Ah Ah Ah)."
            artist="CKay"
          />
        </div>
      </div>
    </div>
  );
}

export default Billboard;
