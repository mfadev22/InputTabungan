const Testing = () => {
  //   const authorizationUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  //   const responseType = "code";
  //   const clientId =
  //     "722746234393-gjjmte0p8rmrsck6ljab52psh029k52m.apps.googleusercontent.com";
  //   const redirectUri = "urn:ietf:wg:oauth:2.0:oob";
  //   const scope = "https://www.googleapis.com/auth/spreadsheets.readonly";
  //   const url = `${authorizationUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  //   fetch(url)
  //     .then((response) => {
  //       // Handle the response as needed
  //       // For example, you can redirect the user to the authorization URL
  //       // or display the URL for the user to visit manually.
  //       console.log("Authorization URL:", response.url);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //! END Request authorizationCode
  //   const client_id =
  //     "722746234393-gjjmte0p8rmrsck6ljab52psh029k52m.apps.googleusercontent.com";
  //   const client_secret = "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";
  //   const authorizationCode = "AIzaSyC4vW8S_UapTCkwtLWqFp63LgB0XbUjHO4";
  //   //   const tokenUrl = "https://accounts.google.com/o/oauth2/token";
  //   const tokenUrl = "https://oauth2.googleapis.com/token";
  //   const requestBody = new URLSearchParams({
  //     code: authorizationCode,
  //     client_id: client_id,
  //     client_secret: client_secret,
  //     redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
  //     grant_type: "authorization_code",
  //   });
  //   fetch(tokenUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: requestBody.toString(),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const accessToken = data.access_token;
  //       console.log("YOUR_ACCESS_TOKEN:", accessToken);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //! END Request YOUR_ACCESS_TOKEN
  const spreadsheetId = "1lilLxrKIz1Zcu1ScSxTU5oyhSXPVBlrEGgnalGTI_ac";
  const rangeA2 = "Total_dan_Pengeluaran!I2:J7";
  const urlA2 = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeA2}`;
  // Mengirim permintaan GET ke Google Sheets API untuk A2
  fetch(urlA2, {
    headers: {
      Authorization:
        "Bearer ya29.a0AWY7Cknzmke2stm43bOh05i3aHCqIGUKXm2gEtEcKzbqcCJsRxqicw9CtEsekIn-Pa8erxvvWR_SNVR361Pbrp-BFP3Oeh1LNmNaD69LOmzIKG0gP-9phCgBOjFwKx0w0gNyO5o74FD1md0lUcUAeilXKwEIQBfHn0aWM6n5eAaCgYKASISARESFQG1tDrpCrUgq1lkajIjAF63YefKkg0177",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Gagal mengambil data A2");
      }
    })
    .then((data) => {
      // Mengakses data yang diterima untuk A2
      const dataA2 = data.values;
      console.log("Data A2:", dataA2);
    });
};
