const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; ++i) {
        const random = (Math.random() * (letters.length - 1)).toFixed(0);
        text += letters[random];
    }
    return text;

    //Generate random number 0 to 10
    // return (Math.random() * 10).toFixed(0);
};


let numOfWords;
const getData = () => {
    numOfWords = Number(input.value);
    const para = document.createElement("p");

    // generateWord((Math.random() *15).toFixed(0));

    let data = "";
    for (let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);

        data += " ";

    }
    // console.log(data);


    para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
};





