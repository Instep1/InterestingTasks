const maze = [
        [1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0],
];

console.log(maze.length)

const arrFromStage = [];
    let mazeIsFinish = false;
    for (let i = 0; i < maze.length; i++) {
        arrFromStage.push([])
    }
console.log(arrFromStage)

function checkPath(start, end, quaryMaze) {
    const arrFromStage = [];
    let mazeIsFinish = false;
    for (let i = 0; i < maze.length; i++) {
        arrFromStage.push([])
    }
    maze.forEach(item => {
        if (item.indexOf(0) === -1) return mazeIsFinish;
        for (let i = 0; i < item.length; i++) {
            if (item[i] === 0) arrFromStage.push(i);
            if (item[i + 1] === 0) arrFromStage.push(i + 1);
            if (item[i - 1] === 0) arrFromStage.push(i - 1);
        }
        if (item[start[x] + 1] !== 0 && item[start[x] - 1] !== 0 ) return mazeIsFinish;
        if ()
    })


    return mazeIsFinish;
}

console.log(maze);

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}), maze)