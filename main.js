function createTableArray() {
    let array = [];
    document.write("<table border=1 cellspacing='0' cellpadding='10' style='height: 300px; width:100%;text-align: center'>");
    for (i = 1; i <= 9; i++) {
        document.write("<tr>");
        for (j = 1; j <= 9; j++) {
            let a = Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);
            document.write("<td>" + a);
            array.push(a);
        }
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</tr></table>")
    return array;
}

function dem(arr) {
    let result = document.getElementById('result');
    let n = parseInt(prompt('Nhap vao so bat ki khoang 0 -> 100'))
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (j === arr[i]) {
            count++;
        }
    }
    result.innerHTML = "So lan xuat hien cua " + n + " trong mang la : ";
    return result.innerHTML += count;
}


dem(createTableArray());


