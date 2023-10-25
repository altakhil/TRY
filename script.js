const textFileUrl = 'lol.txt';

async function abc(){
    const response = await fetch('lol.txt');
    const data = await response.text();
    console.log(data);
}

cba();

async function cba(){
    await abc();
    console.log("next");
}

