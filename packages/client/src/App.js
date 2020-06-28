import React from "react";
import "./App.css";

function App() {
  async function callTwitter() {
    const response = await fetch(
      "https://api.twitter.com/oauth/request_token",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          Authorization: `OAuth oauth_nonce="K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqyw", oauth_callback="${encodeURIComponent(
            "http://localhost:3000"
          )}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Date.now()}", oauth_consumer_key="rsgLeZTy4oSBEjTH1m56Ycstn", oauth_signature="Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D", oauth_version="1.0"`,
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }
    );
  }
  return (
    <div className="App">
      <button onClick={callTwitter}>Sign in with twitter</button>
    </div>
  );
}

export default App;
