function staircase(n) {
    for (let i = n; i > 0; i--){
        let str = "";
        for (let j = 0; j <= n; j++){
            if (j < i) {
                str += " ";
            }
            else {
                str += "#";
            }
            
        }
        console.log(str);
    }

}
staircase(3);