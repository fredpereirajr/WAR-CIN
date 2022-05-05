function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
};

i = 0;
array = [0,0,0,0,0,0];
while( i < 100000) {
    pega = randomNumberInterval(1,6);
    if (pega == 1) {
        array[0]++;
    }else if (pega == 2) {
        array[1]++;
    }else if (pega == 3) {
        array[2]++;
    }else if (pega == 4) {
        array[3]++;
    }else if (pega == 5) { 
        array[4]++;
    }else if (pega == 6) { 
        array[5]++;
    }
    
    
    i++;
}

console.log(array);