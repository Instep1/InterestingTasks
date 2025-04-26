const classNames = ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'];

function classNameSort(arr) {
    const sortedArrayClassNames = [];
    const sortedObjectClassNames = {};
    arr.forEach(className => {
        if (sortedObjectClassNames[className]) sortedObjectClassNames[className] += 1;
        else sortedObjectClassNames[className] = 1;
    })

    Object.entries(sortedObjectClassNames).sort((a, b) => {
        return b[1] - a[1];
    }).map(item => sortedArrayClassNames.push(item[0]));

    return sortedArrayClassNames;
}

console.log(classNameSort(classNames));