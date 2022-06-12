"use strict";

function func(x, y) {
    console.log(x);
    let root = document.getElementById('root');
    console.log(root);
    removeAllChildNodes(root);
    root.append(chessBoard(x, y));
}

function chessBoard(x, y) {
    let parentCont = document.createElement("div");
    parentCont.classList.add("parentCont");
    let cont = document.createElement("div")
    let k = 1;
    var validCo = possibleBishopCoordinates(x, y);
    for (var i = 1; i < 9; i++) {
        let row = document.createElement("div");
        let col = document.createElement("div");
        col.classList.add("cont");
        for (var j = 1; j < 9; j++) {
            let c = "white";
            if (k % 2 === 0) c = "black";
            if (x === i && j === y) {
                col.appendChild(cell(c, i, j, true, validCo));
            } else {
                col.appendChild(cell(c, i, j, false, validCo));
            }
            k++
            row.appendChild(col);
        }
        k++
        cont.appendChild(row);
    }
    parentCont.appendChild(cont);
    return parentCont;

}

function cell(c, x, y, p = false, validCo) {
    let div = document.createElement("div");
    div.classList.add("damn", "parentCont");
    div.style.backgroundColor = c;
    if (p) {
        let img = document.createElement("i");
        img.classList.add("fa-solid", "fa-chess-bishop");
        img.style.color = "orange";
        img.style.height = "100%";
        img.setAttribute("alt", "the img");
        div.appendChild(img);
        return div;
    }
    if (cordinateExists(validCo, x, y)) {
        let img = document.createElement("img");
        img.src =
            "https://png.pngtree.com/png-clipart/20201208/original/pngtree-cartoon-chess-queen-silhouette-png-image_5568787.jpg";
        img.style.height = "100%";
        img.setAttribute("alt", "the img");
        div.appendChild(img);
        div.setAttribute("onclick", `func(${x},${y})`);
        return div;
    }
    return div;
}

function possibleBishopCoordinates(x = 1, y = 3) {
    let anotherplace = [];
    console.log(x + 1);
    let myCoordinates = [
        {x: x + 1, y: y - 1},
        {x: x + 1, y: y + 1},
        {x: x - 1, y: y - 1},
        {x: x - 1, y: y + 1},
        {x: x + 2, y: y - 2},
        {x: x + 2, y: y + 2},
        {x: x - 2, y: y + 2},
        {x: x - 3, y: y + 3},
         {x: x - 2, y: y -2},
         {x: x - 3, y: y -3},
         {x: x + 3, y: y - 3},
         {x: x - 4, y: y -4},
         {x: x + 4, y: y -4},
         {x: x + 4, y: y + 4},

         {x: x + 5, y: y -5},
         {x: x - 6, y: y -6},
         

         {x: x - 5, y: y -5},
         {x: x - 6, y: y -6 },
         {x: x +6, y: y -4 },
         {x: x -7, y: y -7 },
         {x: x -7, y: y + 1 },




    ];
    for (let i = 0; i < myCoordinates.length; i++) {
        anotherplace.push([myCoordinates[i].x, myCoordinates[i].y]);
    }
    return anotherplace;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function cordinateExists(arr, a, b) {
    if (a > 8 || a < 0 || b > 8 || b < 0) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === a && arr[i][1] === b) {
            return true;
        }
    }
    return false;
}

document.getElementById("root").appendChild(chessBoard(1, 3));