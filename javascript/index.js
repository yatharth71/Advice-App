const handleApi = async () => {
    const url = "https://api.adviceslip.com/advice";
    const RawData = await fetch(url);
    const data = await RawData.json();
    document.getElementById("advice-id").innerText = data.slip.id
    document.getElementById("advice-text").innerText = `"${data.slip.advice}"`
}

handleApi()