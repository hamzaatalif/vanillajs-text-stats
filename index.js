document.getElementById('inputfile')
    .addEventListener('change', function () {

        var fr = new FileReader();

        fr.onload = function () {
            document.getElementById('txt')
                .textContent = fr.result;
        }

        fr.readAsText(this.files[0]);

    })


function analyze() {
    document.getElementById("demo").innerHTML = "";

    var text = document.getElementById('txt').value;


    var isChecked0 = document.getElementById("0");
    var isChecked1 = document.getElementById("1");
    var isChecked2 = document.getElementById("2");
    var isChecked3 = document.getElementById("3");
    var isChecked4 = document.getElementById("4");
    var isChecked5 = document.getElementById("5");
    if (isChecked0.checked == true) {
        var text1 = text;
        document.getElementById("demo").innerHTML += "Your text after making into UpperCase is: <br/>"
        for (var i = 0; i < text.length; i++) {
            if (text[i] == '\n')
                document.getElementById("demo").innerHTML += '<br/>';
            else
                document.getElementById("demo").innerHTML += text1[i].toUpperCase();
        }

        document.getElementById("demo").innerHTML += "<br>";
        document.getElementById("demo").innerHTML += "---------------------------------------------------<br>";
    }
    if (isChecked1.checked == true) {
        var text1 = text;
        document.getElementById("demo").innerHTML += "Your text after making into LowerCase is: <br/>"
        for (var i = 0; i < text.length; i++) {
            if (text[i] == '\n')
                document.getElementById("demo").innerHTML += '<br/>';
            else
                document.getElementById("demo").innerHTML += text1[i].toLowerCase();
        }

        document.getElementById("demo").innerHTML += "<br>";
        document.getElementById("demo").innerHTML += "---------------------------------------------------<br>";
    }

    if (isChecked2.checked == true) {
        let textInputValue = document.querySelector("#txt").value;
        let allWords = textInputValue.split(/ |\n/);          
        allWords.forEach((word)=>{
            let counter = 0;      
            allWords.forEach((innerWord)=>{
                if (word === innerWord){
                    counter++;
                }
            })
            console.log(`${word}: ${counter}`)
        })
    }

    // if (isChecked2.checked == true) {

    //     var map1 = new Map();

    //     var i;
    //     var s = "";
    //     for (i = 0; i < text.length; i++) {
    //         if (text[i] == ' ' || text[i] == '\n') {
    //             if (s.indexOf(' ') == -1 && s != "") {
    //                 if (map1.has(s) == false)
    //                     map1.set(s, 1);
    //                 else
    //                     map1.set(s, map1.get(s) + 1);
    //                 s = "";
    //             }
    //             s = "";
    //         }
    //         else
    //             s = s + text[i];
    //     }
    //     if (s.indexOf(' ') == -1) {
    //         if (map1.has(s) == false)
    //             map1.set(s, 1);
    //         else
    //             map1.set(s, map1.get(s) + 1);
    //     }

    //     document.getElementById("demo").innerHTML += "The frequency of each word in your text is <br>";
    //     map1.forEach((value, key) => document.getElementById("demo").innerHTML += ((` ${key}:  ${value}`)) + "<br>");
    //     map1.clear();
    //     document.getElementById("demo").innerHTML += "---------------------------------------------------<br>";
    // }
    if (isChecked3.checked == true) {
        var c = 0;

        for (var i = 0; i < text.length; i++) {
            if (text[i] != ' ' && text[i] != '\n')
                c++;
        }
        document.getElementById("demo").innerHTML += "There are " + (c) + " Characters in your text<br>";
        document.getElementById("demo").innerHTML += "---------------------------------------------------<br>";
    }
    if (isChecked4.checked == true) {
        var map1 = new Map();

        var i;
        var s = "";
        for (i = 0; i < text.length; i++) {
            if (text[i] == ' ' || text[i] == '\n') {
                if (s.indexOf(' ') == -1 && s != "") {
                    if (map1.has(s) == false)
                        map1.set(s, 1);
                    else
                        map1.set(s, map1.get(s) + 1);
                    s = "";
                }
                s = "";
            }
            else
                s = s + text[i];
        }
        if (s.indexOf(' ') == -1) {
            if (map1.has(s) == false)
                map1.set(s, 1);
            else
                map1.set(s, map1.get(s) + 1);
        }

        document.getElementById("demo").innerHTML += "There are " + (map1.size) + " words in your text<br>";
        document.getElementById("demo").innerHTML += "---------------------------------------------------<br>";
    }
    if (isChecked5.checked == true) {
        let text = document.getElementById("txt").value;
        let lines = text.split(/\r|\r\n|\n/);
        let count = lines.length;
        if (count == 1)
            document.getElementById("demo").innerHTML += "There is " + (count) + " line in your text<br>";
        else
            document.getElementById("demo").innerHTML += "There are " + (count) + " lines in your text<br>";
        document.getElementById("demo").innerHTML += "---------------------------------------------------<br>";
    }


}